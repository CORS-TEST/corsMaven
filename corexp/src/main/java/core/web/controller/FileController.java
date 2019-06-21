/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Method;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.openxml4j.exceptions.OpenXML4JException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.openxml4j.opc.PackageAccess;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.eventusermodel.XSSFReader;
import org.apache.poi.xssf.model.SharedStringsTable;
import org.apache.poi.xssf.model.StylesTable;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.xml.sax.ContentHandler;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;

import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformType;

import core.common.config.Config;
import core.common.util.CoreBeanUtil;
import core.common.util.CorsXSSFSheetHandler;
import core.exception.userhandle.UserHandleException;
import core.sql.SqlManager;
import core.sql.SqlManagerFactory;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.vo.model.dataset.NexacroDataSet;
import core.vo.model.paramset.NexacroParamSet;
import epro.core.module.DrmModule;

public class FileController extends CoreController {
	private static final Log LOG = LogFactory.getLog(FileController.class);
	@Autowired
	DrmModule drmModule;

	/**
	 * @MenthdName : upTempFile
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	public void upTempFile(HttpServletRequest request, HttpServletResponse response) throws IOException {

		NexacroParamSet outParams = CoreParamSetFactory.create(NexacroParamSet.class);
		CoreDataSet ds = outParams.getCoreDataSetInstance();
		try {
			String userAgent = request.getHeader("User-Agent");
			Long maxSize = Long.valueOf(Config.getString("FILE.SIZE"));
			boolean isIOS = false;
			userAgent = userAgent.toLowerCase();
			if (userAgent.indexOf("macintosh") > -1 || userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1) {
				isIOS = true;
			}
			String fileExtChk = request.getParameter("fileExtChk");

			String fileGubun = request.getParameter("fileGubun");
			String savePath = Config.getString("ATTACHFILE.DIR") + "/" + Config.getString("ATTACHFILE.DIR.TEMP");
			// Create a factory for disk-based file items
			DiskFileItemFactory factory = new DiskFileItemFactory();
			// Sets the size threshold beyond which files are written directly
			// to disk
			factory.setSizeThreshold(4096);
			// Create a new file upload handler
			ServletFileUpload upload = new ServletFileUpload(factory);
			// Specifies the character encoding to be used when reading the
			// headers of individual part
			upload.setHeaderEncoding("utf-8");
			// Set overall request size constraint
			upload.setSizeMax(50000 * 1024 * 1024);
			// Sets the maximum allowed size of a single uploaded file
			upload.setFileSizeMax(50000 * 1024 * 1024);
			File filePath = new File(savePath);
			if (!filePath.exists()) {
				filePath.mkdirs();
			}
			// Sets the directory used to temporarily store files that are
			// larger than the configured size threshold
			factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
			// Parse the request
			List items = upload.parseRequest(request);
			Iterator iter = items.iterator();

			ds.addStringColumn("fileid");
			ds.addStringColumn("fileimg");
			ds.addStringColumn("filename");
			ds.addIntegerColumn("filesize");
			ds.addIntegerColumn("tranfilesize");
			ds.addIntegerColumn("prog");
			ds.addStringColumn("PHY_FILE_NM");
			ds.addStringColumn("LGCL_FILE_NM");
			ds.addIntegerColumn("FILE_SIZE");
			ds.addStringColumn("FILE_GUBUN");
			ds.addStringColumn("ALT_DRM");

			int fileErrorCd = 0;
			String fileErrorMsg = "";
			// Parse the request
			while (iter.hasNext()) {
				FileItem item = (FileItem) iter.next();

				if (!item.isFormField()) {
					// Process a file upload
					// filename on the client
					String fieldName = item.getFieldName();
					String fileName = item.getName();
					long fileSize = item.getSize();
					LOG.debug(">>>>> fileName:" + fileName + "   fieldName:" + fieldName + "   fileSize:" + fileSize);

					if (fileName == null || fileName.equals("")) {
						continue;
					} else {
						//맥스 사이즈 체크
						if (maxSize < fileSize) {
							fileErrorCd = -1;
							fileErrorMsg = "첨부파일이 첨부가능한 사이즈 ( " + Math.round(maxSize / (1024 * 1024)) + "M )를 초과하였습니다.";

							break;
						}

						String ext = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length()).toUpperCase();
						/*
						 * 확장자 허용체크
						 */
						String badExtension = Config.getString("ATTACHFILE.DIR.TEMP.WHITELIST").toUpperCase();
						String[] badExtensions = badExtension.split("\\|");
						boolean extValid = false;
						for (int i = 0; i < badExtensions.length; i++) {
							if (ext.equals(badExtensions[i])) {
								extValid = true;
								break;
							}
						}
						System.out.println("extValid : " + extValid);
						if (!extValid) {
							// 업로드 가능한 파일이 아닙니다
							fileErrorCd = -1;
							fileErrorMsg = "업로드 가능한 파일이 아닙니다.";
							break;
						}
						if (!"".equals(fileExtChk)) {
							SqlManager sqlManager = SqlManagerFactory.getSqlManager();
							HashMap param = new HashMap<>();
							param.put("FILE_EXT_CHK_CD", fileExtChk);

							String fileExtAccess = (String) sqlManager.queryForObject(param, "FileService.getExtCd");
							String[] fileExtensionSet = fileExtAccess.split(",");
							boolean fileExtension = false;

							for (int i = 0; i < fileExtensionSet.length; i++) {
								if ("ALL".equals(fileExtensionSet[i])) {
									fileExtension = true;
									break;
								}
								if (ext.equals(fileExtensionSet[i])) {
									fileExtension = true;
									break;
								}
							}
							if (!fileExtension) {
								// 업로드 가능한 파일이 아닙니다.
								fileErrorCd = -1;
								fileErrorMsg = "EPRO_LABEL_01407";

								break;
							}
						}

						int lastUnixPos = fileName.lastIndexOf(47);
						int lastWindowsPos = fileName.lastIndexOf(92);
						int index = Math.max(lastUnixPos, lastWindowsPos);
						fileName = fileName.substring(index + 1);
						// iOS 6.0버그(이미지선택시 image.jpg로만 반환하는 버그대응용. 20150312)
						if (isIOS && fileName.equalsIgnoreCase("image.jpg")) {
							Date today = new Date();
							SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd-HHmmssSSS");
							fileName = "image." + sdf.format(today) + ".jpg";
						}
						// 물리 파일명 생성
						/*
						 * ORACLE 용으로 파일명 매기기 Calendar calendar =
						 * Calendar.getInstance(); java.util.Date date =
						 * calendar.getTime(); String today = (new
						 * SimpleDateFormat("yyyyMMddHHmmss").format(date));
						 * Random temp = new Random(); int ranNum =
						 * temp.nextInt(100000);
						 * 
						 * // String phyfilename = today + "_" + ranNum +
						 * ".tmp"; String phyfilename = today + "_" + ranNum +
						 * fileName.substring(fileName.lastIndexOf('.'));
						 */
						/*
						 * MSSQL용으로 파일명 매기기
						 * 
						 */
						SqlManager sqlManager = SqlManagerFactory.getSqlManager();
						String seq = (String) sqlManager.queryForObject(new HashMap(), "commonService.getSeqNewId");
						if ("".equals(seq) || seq == null) {
							// 업로드 가능한 파일이 아닙니다.
							fileErrorCd = -1;
							fileErrorMsg = "EPRO_LABEL_01407";

							break;
						}
						String phyfilename = seq + ".obj";

						File uploadedFile = new File(filePath + File.separator, phyfilename);

						LOG.debug("### phyfilename : " + phyfilename);
						LOG.debug("### fileGubun : " + fileGubun);

						item.write(uploadedFile);
						item.delete();

						HttpSession session = request.getSession();

						// drm

						int row = ds.appendRow();

						ds.setColumn(row, "fileid", fieldName);
						ds.setColumn(row, "filename", fileName);
						ds.setColumn(row, "filesize", fileSize);
						ds.setColumn(row, "prog", 0);

						ds.setColumn(row, "PHY_FILE_NM", phyfilename);
						ds.setColumn(row, "LGCL_FILE_NM", fileName);
						ds.setColumn(row, "FILE_SIZE", fileSize);
						ds.setColumn(row, "FILE_GUBUN", fileGubun);
					}
				}
			}
			outParams.setCoreDataSet("ds_output", ds);
			outParams.setErrorMessage(fileErrorMsg);
			outParams.setErrorCode(fileErrorCd);

		} catch (Exception e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
			outParams.setErrorMessage("File Upload Error");
			outParams.setErrorCode(-1);
		}
		writeResponseToNexacro(request, response, outParams);
	}

	public void delTempFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
		LOG.debug("delTempFile call...");
		CoreParamSet inParams = parseNexacroData(request);
		NexacroParamSet outParams = CoreParamSetFactory.create(NexacroParamSet.class);
		CoreDataSet ds_filesOut = inParams.getCoreDataSet("ds_filesOut");
		LOG.debug("delTempFile ds_filesOut..." + ds_filesOut.toString());
		// String opMode = Config.getString("operation.mode").toUpperCase();
		String contextRealPath = "";

		// if ("WKR".equals(opMode)) {
		// contextRealPath = Config.getString("ATTACHFILE.DIR") + "\\" +
		// Config.getString("ATTACHFILE.DIR.TEMP")
		// + "\\";
		// } else {

		// }
		contextRealPath = Config.getString("ATTACHFILE.DIR") + "/" + Config.getString("ATTACHFILE.DIR.TEMP") + "/";
		String path = "";
		String savePath = contextRealPath + path;
		String returnString = "";
		boolean succ = true;

		LOG.debug("delTempFile ds_filesOut.getRowCount()..." + ds_filesOut.getRowCount());

		for (int i = 0; i < ds_filesOut.getRowCount(); i++) {
			ds_filesOut.setActiveRow(i);
			LOG.debug(ds_filesOut.toString());
			String fileRealNm = ds_filesOut.getColumnAsString(i, "PHY_FILE_NM");
			LOG.debug("filedelete==>" + savePath + fileRealNm);

			if (!fileRealNm.equals("")) {
				if (returnString.length() > 0) {
					returnString += "\r\n";
				}

				try {
					// File f = new File(savePath + File.separator, fileRealNm);
					File f = new File(savePath + fileRealNm);
					if (f.exists()) {
						if (f.delete()) {
							returnString += "'" + fileRealNm + "' Delete Success";
						} else {
							// LOG.debug("Delete failed");
							succ = false;
							returnString += "'" + fileRealNm + "' Delete failed";
						}
					} else {
						// LOG.debug("File not available Or Deleted");
						succ = false;
						returnString += "'" + fileRealNm + "' File not available";
					}
				} catch (Exception e) {
					succ = false;
					returnString += "'" + fileRealNm + "' " + e;
				}
			}
		}
		// xplatformData.addDataSet(out_ds);
		if (!succ) {
			throw new UserHandleException("-1", "파일삭제에 에러가 발생했습니다.");
		}
		outParams.setMessage(ds_filesOut.getRowCount() + "건의 파일이 삭제되었습니다.");
		outParams.setErrorCode(0);
		writeResponseToNexacro(request, response, outParams);
	}

	/**
	 * @MenthdName : downFile
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	public void downFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
		CoreParamSet params = parseNexacroData(request);
		if (LOG.isDebugEnabled()) {
			LOG.debug("===========================================================");
			LOG.debug("params : " + params);
			LOG.debug("===========================================================");
		}

		String splitString = "/";

		// if ("WKR".equcals(Config.getString("operation.mode"))) {
		splitString = "\\";
		// }
		String contextRealPath = request.getSession().getServletContext().getRealPath("/");
		String userAgent = request.getHeader("User-Agent");
		String isRuntime = "N";
		if (userAgent.indexOf("nexacroplatform14") > -1) {
			isRuntime = "Y";
		}
		// TODO : fileKey로 변경
		String filename = request.getParameter("fileName");
		// TODO : fileKey로 변경
		String lgclFileName = request.getParameter("lgclFileNm");
		String filePathId = request.getParameter("filePathId");
		String altDrm = request.getParameter("altDrm");
		try {
			filename = java.net.URLDecoder.decode(filename, "utf-8");
		} catch (UnsupportedEncodingException e1) {
			LOG.error(e1);
			// 파일명이 올바르지 않습니다.
			throw new UserHandleException("-1", "FILE NAME INVALIDE");
		}
		String filePath = Config.getString("ATTACHFILE.DIR") + splitString + filePathId + splitString + filename;
		// filePath = filePath.replaceAll("//", "\\");

		String ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length()).toUpperCase();
		/*
		 * 확장자 허용체크
		 */
		if (!"OBJ".equals(ext)) {
			// 확장자가 올바르지 않습니다
			throw new UserHandleException("-1", "FILE EXTENSION INVALIDE.");
		}

		ext = lgclFileName.substring(lgclFileName.lastIndexOf('.') + 1, lgclFileName.length()).toUpperCase();
		/*
		 * 확장자 허용체크
		 */
		String badExtension = Config.getString("ATTACHFILE.DIR.TEMP.WHITELIST").toUpperCase();
		String[] badExtensions = badExtension.split("\\|");
		boolean extValid = false;

		for (int i = 0; i < badExtensions.length; i++) {
			if (ext.equals(badExtensions[i])) {
				extValid = true;
				break;
			}
		}
		if (!extValid) {
			// 확장자가 올바르지 않습니다
			throw new UserHandleException("-1", "FILE EXTENSION INVALIDE.");
		}

		byte[] buffer = new byte[1024];

		ServletOutputStream out_stream = null;
		BufferedInputStream in_stream = null;
		FileInputStream temp_stream = null;
		File fis = new File(filePath);
		if (fis.exists()) {
			try {
				response.setContentType("application/octet;charset=utf-8");

				if (isRuntime != null && isRuntime.equals("N")) {

					if (userAgent.indexOf("MSIE") > -1) {
						String encodeFileName = java.net.URLEncoder.encode(lgclFileName, "ISO8859_1").replaceAll("\\+", "\\ ");
						response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(encodeFileName.getBytes("utf-8"), "ISO8859_1") + "\"");
						response.setHeader("Content-Transper-Encoding", "binary");

						LOG.info("lgclFileName : " + lgclFileName);
						LOG.info("encodeFileName :" + encodeFileName);
					} else {
						response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(lgclFileName.getBytes("utf-8"), "ISO8859_1") + "\"");
					}

					LOG.debug("   >>> isRuntime >>>  =" + isRuntime);

					response.setHeader("Content-Transper-Encoding", "binary");
					response.setHeader("Content-Length", Long.toString(fis.length()));
					response.setHeader("Pargma", "no-cache");
					response.setHeader("Expires", "-1");

				} else {
					response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(lgclFileName.getBytes("utf-8"), "ISO8859_1") + "\"");
					response.setHeader("Content-Transper-Encoding", "binary");
					response.setHeader("Content-Length", Long.toString(fis.length()));

				}

				// out.clear();
				// out = pageContext.pushBody();

				out_stream = response.getOutputStream();
				temp_stream = new FileInputStream(fis);

				in_stream = new BufferedInputStream(temp_stream);

				int n = 0;
				while ((n = in_stream.read(buffer, 0, 1024)) != -1) {
					out_stream.write(buffer, 0, n);
				}

				LOG.debug("fileDownload filename==>" + filename + ", 전송완료. ");
			} catch (Exception e) {
				LOG.error(e);
				// 시스템에 문제가 발생했습니다.
				throw new UserHandleException("-1", "SYSTEM ERROR");
			} finally {
				if (in_stream != null) {
					try {
						in_stream.close();
					} catch (Exception e) {
						LOG.error(e);
					}
				}
				if (out_stream != null) {
					try {
						out_stream.close();
					} catch (Exception e) {
						LOG.error(e);
					}
				}
				if (temp_stream != null) {
					try {
						temp_stream.close();
					} catch (Exception e) {
						LOG.error(e);
					}
				}
			}
		} else {
			LOG.error("fileDownload filename==>" + filename + ", 파일없음.");
			// 파일이 존재하지 않습니다
			throw new UserHandleException("-1", "FILE NOT EXISTS.");
		}
	}

	/**
	 * @MenthdName : downExcelFile
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	public void downExcelFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
		CoreParamSet inParams = parseNexacroData(request);

		String userAgent = request.getHeader("User-Agent");
		String isRuntime = "N";
		// User-Agent: nexacroplatform14-Win32/2014 (compatible; Mozilla/4.0;
		// MSIE 7.0)
		if (userAgent.indexOf("nexacroplatform14") > -1) {
			isRuntime = "Y";
		}

		String filePath = request.getParameter("excelFile");
		LOG.info("filePath::>>" + filePath);

		String savePath = Config.getString("ATTACHFILE.DIR") + "/" + Config.getString("ATTACHFILE.DIR.EXCEL");

		byte[] buffer = new byte[1024];

		ServletOutputStream out_stream = null;
		BufferedInputStream in_stream = null;
		FileInputStream temp_stream = null;
		File fis = new File(savePath + "/" + filePath);

		if (fis.exists()) {
			try {
				response.setContentType("application/octet;charset=utf-8");

				if (isRuntime != null && isRuntime.equals("N")) {

					if (userAgent.indexOf("MSIE") > -1) {
						response.setHeader("Content-Disposition", "attachment; filename = \"Data.xlsx\"");
						response.setHeader("Content-Transper-Encoding", "binary");
					} else {
						response.setHeader("Content-Disposition", "attachment; filename = \"Data.xlsx\"");
					}

					LOG.debug("   >>> isRuntime >>>  =" + isRuntime);

					response.setHeader("Content-Transper-Encoding", "binary");
					response.setHeader("Content-Length", Long.toString(fis.length()));
					response.setHeader("Pargma", "no-cache");
					response.setHeader("Expires", "-1");

				} else {
					response.setHeader("Content-Disposition", "attachment; filename = \"Data.xlsx\"");
					response.setHeader("Content-Transper-Encoding", "binary");
					response.setHeader("Content-Length", Long.toString(fis.length()));

				}

				// out.clear();
				// out = pageContext.pushBody();

				out_stream = response.getOutputStream();
				temp_stream = new FileInputStream(fis);

				in_stream = new BufferedInputStream(temp_stream);

				int n = 0;
				while ((n = in_stream.read(buffer, 0, 1024)) != -1) {
					out_stream.write(buffer, 0, n);
				}

				LOG.debug("fileDownload filePath==>" + filePath + ", 전송완료. ");
			} catch (Exception e) {
				LOG.error(e);
			} finally {
				if (in_stream != null) {
					try {
						in_stream.close();
					} catch (Exception e) {
						LOG.error(e);
					}
				}
				if (out_stream != null) {
					try {
						out_stream.close();
					} catch (Exception e) {
						LOG.error(e);
					}
				}
				if (temp_stream != null) {
					try {
						temp_stream.close();
					} catch (Exception e) {
						LOG.error(e);
					}
				}

				// 엑셀 다운로드 후, 삭제
				fis.delete();
			}
		} else {
			LOG.error("fileDownload filePath==>" + filePath + ", 파일없음.");
		}
	}

	/**
	 * @MenthdName : upExcelTempFile
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	public void upExcelTempFile(HttpServletRequest request, HttpServletResponse response) throws IOException {

		NexacroParamSet outParams = CoreParamSetFactory.create(NexacroParamSet.class);
		CoreDataSet ds = outParams.getCoreDataSetInstance();
		try {
			String userAgent = request.getHeader("User-Agent");
			boolean isIOS = false;
			userAgent = userAgent.toLowerCase();
			if (userAgent.indexOf("macintosh") > -1 || userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1) {
				isIOS = true;
			}

			String savePath = Config.getString("ATTACHFILE.DIR") + "/" + Config.getString("ATTACHFILE.DIR.TEMP");
			// Create a factory for disk-based file items
			DiskFileItemFactory factory = new DiskFileItemFactory();
			// Sets the size threshold beyond which files are written directly
			// to disk
			factory.setSizeThreshold(4096);
			// Create a new file upload handler
			ServletFileUpload upload = new ServletFileUpload(factory);
			// Specifies the character encoding to be used when reading the
			// headers of individual part
			upload.setHeaderEncoding("utf-8");
			// Set overall request size constraint
			upload.setSizeMax(50000 * 1024 * 1024);
			// Sets the maximum allowed size of a single uploaded file
			upload.setFileSizeMax(50000 * 1024 * 1024);
			File filePath = new File(savePath);
			if (!filePath.exists()) {
				filePath.mkdirs();
			}
			// Sets the directory used to temporarily store files that are
			// larger than the configured size threshold
			factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
			// Parse the request
			List items = upload.parseRequest(request);
			Iterator iter = items.iterator();

			// Parse the request
			while (iter.hasNext()) {
				FileItem item = (FileItem) iter.next();

				if (!item.isFormField()) {
					LOG.debug(">>>>> EXCEL UPLOAD START");
					String fieldName = item.getFieldName();
					String fileName = item.getName();
					long fileSize = item.getSize();
					LOG.debug(">>>>> fileName:" + fileName + "   fieldName:" + fieldName + "   fileSize:" + fileSize);

					if (fileName == null || fileName.equals("")) {
						continue;
					} else {
						String ext = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length()).toUpperCase();
						/*
						 * 확장자 허용체크
						 */
						if (!(ext.equals("XLS") || ext.equals("XLSX"))) {
							// 업로드 가능한 파일이 아닙니다.
							throw new UserHandleException("MSG_COM_ERR_005", "-1");
						}
						int lastUnixPos = fileName.lastIndexOf(47);
						int lastWindowsPos = fileName.lastIndexOf(92);
						int index = Math.max(lastUnixPos, lastWindowsPos);
						fileName = fileName.substring(index + 1);
						// 물리 파일명 생성
						Calendar calendar = Calendar.getInstance();
						java.util.Date date = calendar.getTime();
						String today = (new SimpleDateFormat("yyyyMMddHHmmss").format(date));
						Random temp = new Random();
						int ranNum = temp.nextInt(100000);

						// String phyfilename = today + "_" + ranNum + ".tmp";
						String phyfilename = today + "_" + ranNum + fileName.substring(fileName.lastIndexOf('.'));

						File uploadedFile = new File(filePath + File.separator, phyfilename);
						String path = uploadedFile.getPath();
						LOG.debug("### phyfilename : " + phyfilename);

						item.write(uploadedFile);
						// drm
						if ("Y".equals(Config.getString("BASIC.ALTDRM"))) {
							path = drmModule.getDrmPath(filePath + File.separator + phyfilename);
						}
						FileInputStream f = new FileInputStream(path);

						XSSFWorkbook xlsxWorkbook = null;
						HSSFWorkbook xlsWorkbook = null;
						XSSFSheet xlsxSheet = null;
						HSSFSheet xlsSheet = null;
						HashMap<String, Object> allData = new HashMap<String, Object>();
						if (ext.equals("XLS")) {
							xlsWorkbook = (HSSFWorkbook) WorkbookFactory.create(f);
							xlsSheet = xlsWorkbook.getSheetAt(0);
							xlsParsing(xlsWorkbook, xlsSheet, ds);
						} else {
							xlsxWorkbook = (XSSFWorkbook) WorkbookFactory.create(f);
							xlsxSheet = xlsxWorkbook.getSheetAt(0);
							xlsxParsing(xlsxWorkbook, xlsxSheet, ds);
						}

						f.close();
						item.delete();
					}
				}
			}

			outParams.setCoreDataSet("ds_output", ds);
			String callModule = request.getParameter("callModule");
			String methodName = request.getParameter("methodName");
			LOG.debug(":::" + callModule + "  :::::" + methodName);
			if (!"".equals(callModule) && callModule != null && !"".equals(methodName) && methodName != null) {
				Method method = CoreBeanUtil.getBean(callModule).getClass().getMethod(methodName, new Class[] { CoreParamSet.class });
				method.invoke(CoreBeanUtil.getBean(callModule), outParams);
			}

			outParams.setErrorCode(0);
		} catch (Exception e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
			outParams.setErrorCode(-1);
		}
		writeResponseToNexacro(request, response, outParams);
	}

	protected void xlsxParsing(XSSFWorkbook xlsxWorkbook, XSSFSheet xlsxSheet, CoreDataSet ds) {
		LOG.debug(">>>>>xlsxParsing start");
		String data = null;
		DecimalFormat df = new DecimalFormat();
		HashMap<String, Object> allData = new HashMap<String, Object>();
		int rows = xlsxSheet.getPhysicalNumberOfRows();
		for (int rownum = 0; rownum < rows; rownum++) {
			XSSFRow xlsxRow = xlsxSheet.getRow(rownum);

			if (xlsxRow != null) {
				// tbsong 수정
				// int cells = xlsxRow.getPhysicalNumberOfCells();
				int cells = xlsxRow.getLastCellNum();

				if (rownum == 0) {
					for (int cellnum = 0; cellnum < cells; cellnum++) {
						XSSFCell cell = xlsxRow.getCell(cellnum);
						if (cell != null) {

							switch (cell.getCellType()) {

							case Cell.CELL_TYPE_NUMERIC:
								if (HSSFDateUtil.isCellDateFormatted(cell)) {
									SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
									data = formatter.format(cell.getDateCellValue());
								} else {
									NumberFormat formatter = NumberFormat.getInstance();
									formatter.setGroupingUsed(false);

									double ddata = cell.getNumericCellValue();
									String svalue = formatter.format(ddata);
									cell.setCellType(Cell.CELL_TYPE_STRING);

									data = formatter.format(Double.parseDouble(cell.getStringCellValue()));

									if (data.contains(".")) {
										data = svalue;
									}
								}

								ds.addStringColumn(data);
								break;

							case Cell.CELL_TYPE_FORMULA:

								if (!"".equals(cell.toString())) {
									boolean fbdata = cell.getBooleanCellValue();
									data = String.valueOf(fbdata);
									ds.addStringColumn(data);
								}
								break;

							case Cell.CELL_TYPE_STRING:
								ds.addStringColumn(cell.getStringCellValue());
								break;

							case Cell.CELL_TYPE_BLANK:
								ds.addStringColumn(String.valueOf(cell.getBooleanCellValue()));
								break;

							default:
								break;
							}
						}
					}

				} else {

					int row = ds.appendRow();
					for (int cellnum = 0; cellnum < cells; cellnum++) {
						XSSFCell cell = xlsxRow.getCell(cellnum);
						if (cell != null) {

							switch (cell.getCellType()) {
							case Cell.CELL_TYPE_STRING:
								ds.setColumn(row, ds.getColumnId(cellnum), cell.getStringCellValue());
								break;

							case Cell.CELL_TYPE_NUMERIC:

								if (HSSFDateUtil.isCellDateFormatted(cell)) {
									SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
									data = formatter.format(cell.getDateCellValue());
								} else {
									NumberFormat formatter = NumberFormat.getInstance();
									formatter.setGroupingUsed(false);

									double ddata = cell.getNumericCellValue();
									String svalue = formatter.format(ddata);
									cell.setCellType(Cell.CELL_TYPE_STRING);
									data = formatter.format(Double.parseDouble(cell.getStringCellValue()));

									if (data.contains(".")) {
										data = svalue;
									}
								}
								ds.setColumn(row, ds.getColumnId(cellnum), data);
								break;

							case Cell.CELL_TYPE_FORMULA:

								if (!"".equals(cell.toString())) {
									boolean fbdata = cell.getBooleanCellValue();
									data = String.valueOf(fbdata);
									ds.setColumn(row, ds.getColumnId(cellnum), data);
								}
								break;
							case Cell.CELL_TYPE_BLANK:

								// tbsong 수정
								ds.setColumn(row, ds.getColumnId(cellnum), "");
								break;

							case Cell.CELL_TYPE_ERROR:
								ds.setColumn(row, ds.getColumnId(cellnum), cell.getErrorCellValue());
								break;
							default:
								break;
							}
						}
					}
				}
			}
		}
	}

	protected void xlsParsing(HSSFWorkbook xlsWorkbook, HSSFSheet xlsSheet, CoreDataSet ds) {
		FormulaEvaluator evaluator = xlsWorkbook.getCreationHelper().createFormulaEvaluator();
		String data = null;
		DecimalFormat df = new DecimalFormat();
		int rows = xlsSheet.getPhysicalNumberOfRows();

		for (int rownum = 0; rownum < rows; rownum++) {
			HSSFRow xlsxRow = xlsSheet.getRow(rownum);
			if (xlsxRow != null) {
				// tbsong 수정
				// int cells = xlsxRow.getPhysicalNumberOfCells();
				int cells = xlsxRow.getLastCellNum();

				if (rownum == 0) {
					for (int cellnum = 0; cellnum < cells; cellnum++) {
						HSSFCell cell = xlsxRow.getCell(cellnum);

						if (cell != null) {

							switch (cell.getCellType()) {

							case Cell.CELL_TYPE_NUMERIC:
								if (HSSFDateUtil.isCellDateFormatted(cell)) {
									SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
									data = formatter.format(cell.getDateCellValue());
								} else {
									// double ddata =
									// cell.getNumericCellValue();
									// data = df.format(ddata);
									cell.setCellType(Cell.CELL_TYPE_STRING);
									NumberFormat formatter = NumberFormat.getInstance();
									formatter.setGroupingUsed(false);
									data = formatter.format(Double.parseDouble(cell.getStringCellValue()));
								}
								ds.addStringColumn(data);
								break;

							case Cell.CELL_TYPE_FORMULA:
								if (!"".equals(cell.toString())) {
									if (evaluator.evaluateFormulaCell(cell) == HSSFCell.CELL_TYPE_NUMERIC) {
										// double fddata =
										// cell.getNumericCellValue();
										// data = df.format(fddata);
										cell.setCellType(Cell.CELL_TYPE_STRING);
										data = cell.getStringCellValue();
									} else if (evaluator.evaluateFormulaCell(cell) == HSSFCell.CELL_TYPE_STRING) {
										data = cell.getStringCellValue();
									} else if (evaluator.evaluateFormulaCell(cell) == HSSFCell.CELL_TYPE_BOOLEAN) {
										boolean fbdata = cell.getBooleanCellValue();
										data = String.valueOf(fbdata);
									}
									ds.addStringColumn(data);
								}
								break;

							case Cell.CELL_TYPE_STRING:
								ds.addStringColumn(cell.getStringCellValue());
								break;

							case Cell.CELL_TYPE_BLANK:
								ds.addStringColumn(String.valueOf(cell.getBooleanCellValue()));
								break;

							case Cell.CELL_TYPE_ERROR:
								break;
							default:
								break;
							}
						}
					}
				} else {
					int row = ds.appendRow();
					for (int cellnum = 0; cellnum < cells; cellnum++) {
						HSSFCell cell = xlsxRow.getCell(cellnum);

						if (cell != null) {

							switch (cell.getCellType()) {

							case Cell.CELL_TYPE_NUMERIC:

								if (HSSFDateUtil.isCellDateFormatted(cell)) {
									SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
									data = formatter.format(cell.getDateCellValue());
								} else {
									NumberFormat formatter = NumberFormat.getInstance();
									formatter.setGroupingUsed(false);
									double ddata = cell.getNumericCellValue();
									String svalue = formatter.format(ddata);
									formatter.setGroupingUsed(false);
									data = formatter.format(Double.parseDouble(cell.getStringCellValue()));
									if (data.contains(".")) {
										data = svalue;
									}
								}
								ds.setColumn(row, ds.getColumnId(cellnum), data);
								break;

							case Cell.CELL_TYPE_FORMULA:
								if (!"".equals(cell.toString())) {
									if (evaluator.evaluateFormulaCell(cell) == HSSFCell.CELL_TYPE_NUMERIC) {
										// double fddata =
										// cell.getNumericCellValue();
										// data = df.format(fddata);
										cell.setCellType(Cell.CELL_TYPE_STRING);
										data = cell.getStringCellValue();
									} else if (evaluator.evaluateFormulaCell(cell) == HSSFCell.CELL_TYPE_STRING) {
										data = cell.getStringCellValue();
									} else if (evaluator.evaluateFormulaCell(cell) == HSSFCell.CELL_TYPE_BOOLEAN) {
										boolean fbdata = cell.getBooleanCellValue();
										data = String.valueOf(fbdata);
									}
									ds.setColumn(row, ds.getColumnId(cellnum), data);
								}
								break;
							case Cell.CELL_TYPE_STRING:
								ds.setColumn(row, ds.getColumnId(cellnum), cell.getStringCellValue());
								break;

							case Cell.CELL_TYPE_BLANK:
								// tbsong 수정
								ds.setColumn(row, ds.getColumnId(cellnum), "");
								break;

							case Cell.CELL_TYPE_ERROR:
								ds.setColumn(row, ds.getColumnId(cellnum), cell.getErrorCellValue());
								break;
							default:
								break;
							}
						}
					}
				}

			}
		}
	}

	public StringBuffer processLarge(File xlsxFile) throws IOException, OpenXML4JException, ParserConfigurationException, SAXException {
		StringBuffer rtnStr = new StringBuffer();
		System.out.println("processLarge start");
		int minColumns = -1;

		minColumns = 2;
		// The package open is instantaneous, as it should be.
		OPCPackage p = OPCPackage.open(xlsxFile.getPath(), PackageAccess.READ);

		XSSFReader xssfReader = new XSSFReader(p);
		SharedStringsTable strings = xssfReader.getSharedStringsTable();
		StylesTable styles = xssfReader.getStylesTable();
		XSSFReader.SheetIterator iter = (XSSFReader.SheetIterator) xssfReader.getSheetsData();
		int index = 0;
		while (iter.hasNext()) {
			InputStream stream = iter.next();
			String sheetName = iter.getSheetName();

			InputSource sheetSource = new InputSource(stream);
			SAXParserFactory saxFactory = SAXParserFactory.newInstance();
			SAXParser saxParser = saxFactory.newSAXParser();
			XMLReader sheetParser = saxParser.getXMLReader();
			ContentHandler handler = new CorsXSSFSheetHandler(styles, strings);
			sheetParser.setContentHandler(handler);
			sheetParser.parse(sheetSource);
			System.out.println("processLarge start2");
			stream.close();
			System.out.println("processLarge start3");
			rtnStr = ((CorsXSSFSheetHandler) handler).getXmlStr();
			System.out.println("processLarge start4");
			++index;
		}
		System.out.println("processLarge end");
		return rtnStr;
	}

	/**
	 * @MenthdName : writeResponseToNexacro
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	protected void writeResponseToNexacro(HttpServletRequest request, HttpServletResponse response, NexacroParamSet params) throws IOException {
		LOG.debug("writeResponseToNexacro " + params.getVariable("ErrorCode"));
		HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

		DataSetList datasetList = new DataSetList();
		VariableList variableList = new VariableList();
		for (Iterator i$ = params.keySet().iterator(); i$.hasNext();) {
			Object key = i$.next();
			if (params.get(key) instanceof NexacroDataSet) {
				params.getCoreDataSet(key.toString()).getDataSet().setName(key.toString());
				datasetList.add(params.getCoreDataSet(key.toString()).getDataSet());
			} else {
				variableList.add(key.toString(), params.getVariable(key.toString()));
			}
		}
		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request);
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV);

			PlatformData platformData = new PlatformData();
			platformData.setDataSetList(datasetList);
			platformData.setVariableList(variableList);
			res.setData(platformData);
			res.sendData();
		} catch (PlatformException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		}
	}

	/**
	 * @MenthdName : parseNexacroData
	 * @InputParameterType :
	 * @OutputParameterType : NexacroParamSet
	 */
	protected NexacroParamSet parseNexacroData(HttpServletRequest request) {
		NexacroParamSet parameters = null;
		DataSetList datasetList = null;
		VariableList variableList = null;
		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_SSV);

			req.receiveData();
			PlatformData platformData = req.getData();
			datasetList = platformData.getDataSetList();
			variableList = platformData.getVariableList();
			parameters = ((NexacroDataSet) CoreDataSetFactory.getDataSet(NexacroDataSet.class)).putDatasetAndVariable(datasetList, variableList);

			HttpSession session = request.getSession();
			if (parameters != null) {
				parameters.setVariable("remoteNetworkAddress", (String) request.getAttribute("remoteNetworkAddress"));
				// parameters.setLocale(LocaleUtil.getUserLocale(session));

				Enumeration attrNames = session.getAttributeNames();
				while (attrNames.hasMoreElements()) {
					String attrName = (String) attrNames.nextElement();
					parameters.setVariable(attrName, session.getAttribute(attrName));
				}
			}

		} catch (PlatformException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		}
		return parameters;
	}
}
