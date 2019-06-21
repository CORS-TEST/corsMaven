/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명     	: epro.com.module FileModule.java
 * @생성자       	: mjpark
 * @생성일시     	: 2017. 9. 13.
 * @구분         	: 
 * @최종수정자   	: mjpark
 * @최종수정일시	: 
 */
package epro.com.module;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Iterator;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.config.Config;
import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.vo.model.dataset.NexacroDataSet;
import core.web.module.CoreModule;
import epro.utility.CoreFileManager;

@Service
public class FileModule extends CoreModule {
	private static final Log LOG = LogFactory.getLog(FileModule.class);

	@Autowired
	CommandModule commandModule;

	/**
	 * @메소드명 : getFileInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 파일데이터를 읽는다.
	 */
	public CoreParamSet getFileInfo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet fileObj = inParams.getCoreDataSet("FileInfo");

		outParam.setCoreDataSet("ds_files", getSqlManager().queryForCoreDataSet(fileObj, "FileService.searchFileList"));

		Iterator<String> keys = inParams.keySet().iterator();
		while (keys.hasNext()) {
			String key = keys.next();
			outParam.setCoreDataSet(key, inParams.getCoreDataSet(key));
		}
		return outParam;
	}

	/**
	 * @메소드명 : saveFileInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 파일데이터를 저장한다
	 */
	public CoreParamSet saveFileInfo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsFiles = inParams.getCoreDataSet("in_dsFile");
		CoreDataSet ds_userInfo = inParams.getCoreDataSet("gdsUserInfo");
		CoreDataSet fileInfoArr = inParams.getCoreDataSet("fileInfoArr");
		if (fileInfoArr == null) {
			fileInfoArr = inParams.getCoreDataSetInstance();
		}
		String tempfilePath = Config.getString("ATTACHFILE.DIR") + "/" + Config.getString("ATTACHFILE.DIR.TEMP");
		String filePath = "";
		String bizGubun = (String) inParams.get("bizGubun");

		if (!dsFiles.containsColumn("BRANCH_CD")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("BRANCH_CD");
		}
		if (!dsFiles.containsColumn("REF_KEY_1")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY_1");
		}
		if (!dsFiles.containsColumn("REF_KEY_2")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY_2");
		}
		if (!dsFiles.containsColumn("REF_KEY_3")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY_3");
		}
		if (!dsFiles.containsColumn("REF_KEY_4")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY_4");
		}
		if (!dsFiles.containsColumn("REF_KEY_5")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY_5");
		}
		if (!dsFiles.containsColumn("REF_KEY1")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY1");
		}
		if (!dsFiles.containsColumn("REF_KEY2")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY2");
		}
		if (!dsFiles.containsColumn("REF_KEY3")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY3");
		}
		if (!dsFiles.containsColumn("REF_KEY4")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY4");
		}
		if (!dsFiles.containsColumn("REF_KEY5")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY5");
		}
		if (!dsFiles.containsColumn("FILE_REAL_PATH")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("FILE_REAL_PATH");
		}
		if (!dsFiles.containsColumn("REF_KEY_COL")) {
			dsFiles.setUpdate(true);
			dsFiles.addStringColumn("REF_KEY_COL");
		}

		if (dsFiles != null) {
			fileInfoArr = CoreFileManager.getFileGubunInfo(bizGubun, fileInfoArr);

			// delete이외의 경우
			for (int i = 0; i < dsFiles.getRowCount(); i++) {
				dsFiles.setActiveRow(i);
				// boolean chkGubun = false;
				String rowType = dsFiles.getRowStatus(i);

				// insert
				if (rowType.equals(CoerConstain.INSERT)) {

					if (!"temp".equals(dsFiles.getColumnAsString(i, "FILE_GUBUN"))) {
						dsFiles.setColumn(i, "REF_TBL_NM", dsFiles.getColumnAsString(i, "FILE_GUBUN"));
					}
					for (int j = 0; j < fileInfoArr.getRowCount(); j++) {
						fileInfoArr.setActiveRow(j);

						filePath = fileInfoArr.getColumnAsString(j, "FILE_PATH_ID");

						if (dsFiles.getColumnAsString(i, "REF_TBL_NM")
								.equals(fileInfoArr.getColumnAsString(j, "FILE_GUBUN"))) {
							CoreDataSet dsFileInfo = inParams.getCoreDataSet(fileInfoArr.getColumnAsString(j, "DS_NM"));
							int fileIdx = 0;
							for (int k = 0; k < dsFileInfo.getRowCount(); k++) {
								dsFileInfo.setActiveRow(k);
								if (dsFiles.getColumnAsInteger(i, "ROW_NO") == dsFileInfo.getColumnAsInteger(k,
										"ROW_NO")) {
									fileIdx = k;
									break;
								}
							}
							dsFileInfo.setActiveRow(fileIdx);

							dsFiles.setColumn(i, "BRANCH_CD", dsFileInfo.getColumnAsString(fileIdx, "BRANCH_CD"));
							dsFiles.setColumn(i, "REF_KEY_1",
									dsFileInfo.getColumnAsString(fileIdx, fileInfoArr.getColumnAsString(j, "KEY1")));
							dsFiles.setColumn(i, "REF_KEY1",
									dsFileInfo.getColumnAsString(fileIdx, fileInfoArr.getColumnAsString(j, "KEY1")));
							dsFiles.setColumn(i, "PK1_NAME", fileInfoArr.getColumnAsString(j, "KEY1"));
							if (null != fileInfoArr.getColumnAsString(j, "KEY2")) {
								dsFiles.setColumn(i, "REF_KEY_2", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY2")));
								dsFiles.setColumn(i, "REF_KEY2", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY2")));
								dsFiles.setColumn(i, "PK2_NAME", fileInfoArr.getColumnAsString(j, "KEY2"));
							}

							if (null != fileInfoArr.getColumnAsString(j, "KEY3")) {
								dsFiles.setColumn(i, "REF_KEY_3", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY3")));
								dsFiles.setColumn(i, "REF_KEY3", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY3")));
								dsFiles.setColumn(i, "PK3_NAME", fileInfoArr.getColumnAsString(j, "KEY3"));
							}
							if (null != fileInfoArr.getColumnAsString(j, "KEY4")) {
								dsFiles.setColumn(i, "REF_KEY_4", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY4")));
								dsFiles.setColumn(i, "REF_KEY4", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY4")));
								dsFiles.setColumn(i, "PK4_NAME", fileInfoArr.getColumnAsString(j, "KEY4"));
							}
							if (null != fileInfoArr.get("KEY5")) {
								dsFiles.setColumn(i, "REF_KEY_5", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY5")));
								dsFiles.setColumn(i, "REF_KEY5", dsFileInfo.getColumnAsString(fileIdx,
										fileInfoArr.getColumnAsString(j, "KEY5")));
								dsFiles.setColumn(i, "PK5_NAME", fileInfoArr.getColumnAsString(j, "KEY5"));
							}
							break;
						}
					}

					// 테이블 매핑이 다를 경우 넘긴다.
					/*
					 * if(chkGubun) { continue; }
					 */
					String phyFileNm = dsFiles.getColumnAsString(i, "PHY_FILE_NM");
					// 물리적으로 파일을 이동시킨다
					// tempfilePath : 템플릿 폴더
					// phyFileNm : 물리파일명
					// filePath : 파일경로
					String newfilePath = CoreFileManager.uploadAtomic(tempfilePath, phyFileNm, filePath);
					String seq = commandModule.getSeqNextval("MM_SYS_FILE_SEQ", CoerConstain.PROPAGATION_REQUIRED);

					ds_userInfo.setActiveRow(0);
					dsFiles.setColumn(i, "FILE_ID", seq);
					dsFiles.setColumn(i, "CRTR_ID", ds_userInfo.getColumnAsString(0, "USER_ID"));
					dsFiles.setColumn(i, "FILE_PATH_ID", filePath);
					dsFiles.setColumn(i, "FILE_SAVE_PATH", newfilePath);

					String[] lgclFileNm = dsFiles.getColumnAsString(i, "LGCL_FILE_NM").split("\\.");
					dsFiles.setColumn(i, "FILE_EXTN", lgclFileNm[lgclFileNm.length - 1]);

					dsFiles.setColumn(i, "FILE_REAL_PATH",
							Config.getString("ATTACHFILE.REAL_DIR") + "\\" + filePath + "\\");

					/*
					 * 2018.01.12 차후 FILE_REAL_PATH HOPE 경로 삭제 시 주석 제거 위 항목 주석
					 * 처리 dsFiles.setColumn(i, "FILE_REAL_PATH", filePath +
					 * "\\");
					 */
					// 2017.12.04 휴맥스용 파일
					// getSqlManager().insertToCoreDataSet(dsFiles,
					// "FileService.insertWmdmFile");

					getSqlManager().insertToCoreDataSet(dsFiles, "FileService.insertFile");
					getSqlManager().insertToCoreDataSet(dsFiles, "FileService.insertFileRef");
					// 2017.11.27 mjpark
					// 2017.11.29 ebhan 업체가 제출시 업데이트 치는부분 막음
					// 결재쪽도 막음
					if (!"MM_RFQ_QUOTE_FILE".equals(dsFiles.getColumnAsString(i, "REF_TBL_NM"))
							&& !"MM_APRV".equals(dsFiles.getColumnAsString(i, "REF_TBL_NM"))) {

						// ebhan 협력사 가입할때 컬럼이 임의의 컬럼이라 REF_KEY_2 값 없앰.
						if ("MM_PTNR".equals(dsFiles.getColumnAsString(i, "REF_TBL_NM"))) {
							dsFiles.setColumn(i, "REF_KEY_2", "");
							dsFiles.setColumn(i, "REF_KEY2", "");
						} else if ("MM_CNTR".equals(dsFiles.getColumnAsString(i, "REF_TBL_NM"))) {
							dsFiles.setColumn(i, "REF_KEY3", "");
							if ("CNTR".equals(dsFiles.getColumnAsString(i, "REF_KEY_3"))) {
								dsFiles.setColumn(i, "REF_KEY_COL", "CNTR_GRNT_FILE_CNT");
							} else if ("PPAY".equals(dsFiles.getColumnAsString(i, "REF_KEY_3"))) {
								dsFiles.setColumn(i, "REF_KEY_COL", "PPAY_GRNT_FILE_CNT");
							} else if ("CPAY".equals(dsFiles.getColumnAsString(i, "REF_KEY_3"))) {
								dsFiles.setColumn(i, "REF_KEY_COL", "CPAY_GRNT_FILE_CNT");
							} else if ("BPAY".equals(dsFiles.getColumnAsString(i, "REF_KEY_3"))) {
								dsFiles.setColumn(i, "REF_KEY_COL", "BC_FILE_CNT");
							} else if ("TSTAMP".equals(dsFiles.getColumnAsString(i, "REF_KEY_3"))) {
								dsFiles.setColumn(i, "REF_KEY_COL", "TSTAMP_FILE_CNT");
							}
						}
						getSqlManager().updateToCoreDataSet(dsFiles, "FileService.updateRefTable");
					}
				}
			}

			CoreDataSet filDs = inParams.getCoreDataSetInstance();
			filDs.addStringColumn("FILE_ID");
			filDs.addStringColumn("REF_TBL_NM");
			filDs.addStringColumn("REF_KEY_1");
			filDs.addStringColumn("REF_KEY_2");
			filDs.addStringColumn("REF_KEY_3");
			filDs.addStringColumn("REF_KEY_4");
			filDs.addStringColumn("REF_KEY_5");
			filDs.addStringColumn("REF_KEY1");
			filDs.addStringColumn("REF_KEY2");
			filDs.addStringColumn("REF_KEY3");
			filDs.addStringColumn("REF_KEY4");
			filDs.addStringColumn("REF_KEY5");
			filDs.addStringColumn("PK1_NAME");
			filDs.addStringColumn("PK2_NAME");
			filDs.addStringColumn("PK3_NAME");
			filDs.addStringColumn("PK4_NAME");
			filDs.addStringColumn("PK5_NAME");
			filDs.addStringColumn("REF_KEY_COL");
			filDs.addStringColumn("FileId");
			filDs.appendRow();

			// delete row가 존재할 경우
			for (int i = 0; i < dsFiles.getDeleteRowCount(); i++) {
				dsFiles.setActiveRow(i);

				filDs.setColumn(0, "FILE_ID", dsFiles.getDeleteColumnAsString(i, "FILE_ID").toString());
				String[] arr = dsFiles.getDeleteColumnAsString(i, "REF_TBL_NM").toString().split(",");
				for (int j = 0; j < arr.length; j++) {
					arr[j] = arr[j].trim();
					arr[j] = "'" + arr[j].replaceAll("\\W", "") + "'";
				}
				filDs.setColumn(0, "REF_TBL_NM", arrayJoin(",", arr));
				filDs.setColumn(0, "REF_KEY_1", dsFiles.getDeleteColumnAsString(i, "REF_KEY_1"));
				filDs.setColumn(0, "REF_KEY_2", dsFiles.getDeleteColumnAsString(i, "REF_KEY_2"));
				filDs.setColumn(0, "REF_KEY_3", dsFiles.getDeleteColumnAsString(i, "REF_KEY_3"));
				filDs.setColumn(0, "REF_KEY_4", dsFiles.getDeleteColumnAsString(i, "REF_KEY_4"));
				filDs.setColumn(0, "REF_KEY_5", dsFiles.getDeleteColumnAsString(i, "REF_KEY_5"));
				filDs.setColumn(0, "FileId", dsFiles.getDeleteColumnAsString(i, "PHY_FILE_NM"));

				// getSqlManager().deleteToCoreDataSet(filDs,
				// "FileService.deleteWmdmFile");

				getSqlManager().updateToCoreDataSet(filDs, "FileService.deleteFile");
				getSqlManager().deleteToCoreDataSet(filDs, "FileService.deleteFilesRef");

				for (int j = 0; j < fileInfoArr.getRowCount(); j++) {
					if (dsFiles.getDeleteColumnAsString(i, "REF_TBL_NM")
							.equals(fileInfoArr.getColumnAsString(j, "FILE_GUBUN"))) {

						filDs.setColumn(0, "REF_TBL_NM", dsFiles.getDeleteColumnAsString(i, "REF_TBL_NM"));

						if (null != fileInfoArr.getColumnAsString(j, "KEY1")) {
							filDs.setColumn(0, "PK1_NAME", fileInfoArr.getColumnAsString(j, "KEY1"));
							filDs.setColumn(0, "REF_KEY1", dsFiles.getDeleteColumnAsString(j, "REF_KEY_1"));
						}
						if (null != fileInfoArr.getColumnAsString(j, "KEY2")) {
							filDs.setColumn(0, "PK2_NAME", fileInfoArr.getColumnAsString(j, "KEY2"));
							filDs.setColumn(0, "REF_KEY2", dsFiles.getDeleteColumnAsString(j, "REF_KEY_2"));
						}
						if (null != fileInfoArr.getColumnAsString(j, "KEY3")) {
							filDs.setColumn(0, "PK3_NAME", fileInfoArr.getColumnAsString(j, "KEY3"));
							filDs.setColumn(0, "REF_KEY3", dsFiles.getDeleteColumnAsString(j, "REF_KEY_3"));
						}

						if (null != fileInfoArr.getColumnAsString(j, "KEY4")) {
							filDs.setColumn(0, "PK4_NAME", fileInfoArr.getColumnAsString(j, "KEY4"));
							filDs.setColumn(0, "REF_KEY4", dsFiles.getDeleteColumnAsString(j, "REF_KEY_4"));
						}

						if (null != fileInfoArr.getColumnAsString(j, "KEY5")) {
							filDs.setColumn(0, "PK5_NAME", fileInfoArr.getColumnAsString(j, "KEY5"));
							filDs.setColumn(0, "REF_KEY5", dsFiles.getDeleteColumnAsString(j, "REF_KEY_5"));
						}

						if ("MM_CNTR".equals(filDs.getColumnAsString(0, "REF_TBL_NM"))) {
							filDs.setColumn(0, "REF_KEY3", "");
							if ("CNTR".equals(filDs.getColumnAsString(0, "REF_KEY_3"))) {
								filDs.setColumn(0, "REF_KEY_COL", "CNTR_GRNT_FILE_CNT");
							} else if ("PPAY".equals(filDs.getColumnAsString(0, "REF_KEY_3"))) {
								filDs.setColumn(0, "REF_KEY_COL", "PPAY_GRNT_FILE_CNT");
							} else if ("CPAY".equals(filDs.getColumnAsString(0, "REF_KEY_3"))) {
								filDs.setColumn(0, "REF_KEY_COL", "CPAY_GRNT_FILE_CNT");
							} else if ("BPAY".equals(filDs.getColumnAsString(0, "REF_KEY_3"))) {
								filDs.setColumn(0, "REF_KEY_COL", "BC_FILE_CNT");
							}
						}
						getSqlManager().updateToCoreDataSet(filDs, "FileService.updateRefTable");
					}

				}

			}
		}

		return outParam;
	}

	public CoreDataSet savefileCopy(CoreDataSet orgFile, CoreDataSet newFile, CoreParamSet inParams) {

		CoreDataSet dsFile = inParams.getCoreDataSet("in_dsFile");
		CoreDataSet orgMap = CoreDataSetFactory.getDataSet(NexacroDataSet.class);
		orgMap.addStringColumn("BRANCH_CD");
		orgMap.addStringColumn("REF_KEY_1");
		orgMap.addStringColumn("REF_KEY_2");
		orgMap.addStringColumn("REF_KEY_3");
		orgMap.addStringColumn("REF_KEY_4");
		orgMap.addStringColumn("REF_KEY_5");
		orgMap.addStringColumn("FILE_PATH_ID");
		orgMap.appendRow();

		for (int i = 0; i < orgFile.getRowCount(); i++) {
			orgMap.setColumn(0, "BRANCH_CD", orgFile.getColumnAsString(i, "BRANCH_CD"));
			orgMap.setColumn(0, "REF_KEY_1", orgFile.getColumnAsString(i, "REF_KEY_1"));
			orgMap.setColumn(0, "FILE_PATH_ID", orgFile.getColumnAsString(i, "FILE_PATH_ID"));
			if ("".equals(orgFile.getColumnAsString(i, "REF_KEY_2"))
					|| null != orgFile.getColumnAsString(i, "REF_KEY_2")) {
				orgMap.setColumn(0, "REF_KEY_2", orgFile.getColumnAsString(i, "REF_KEY_2"));
			}
			if ("".equals(orgFile.getColumnAsString(i, "REF_KEY_3"))
					|| null != orgFile.getColumnAsString(i, "REF_KEY_3")) {
				orgMap.setColumn(0, "REF_KEY_3", orgFile.getColumnAsString(i, "REF_KEY_3"));
			}
			if ("".equals(orgFile.getColumnAsString(i, "REF_KEY_4"))
					|| null != orgFile.getColumnAsString(i, "REF_KEY_4")) {
				orgMap.setColumn(0, "REF_KEY_4", orgFile.getColumnAsString(i, "REF_KEY_4"));
			}
			if ("".equals(orgFile.getColumnAsString(i, "REF_KEY_5"))
					|| null != orgFile.getColumnAsString(i, "REF_KEY_5")) {
				orgMap.setColumn(0, "REF_KEY_5", orgFile.getColumnAsString(i, "REF_KEY_5"));
			}

			CoreDataSet orgInfo = getSqlManager().queryForCoreDataSet(orgMap, "FileService.copyFileOrgInfo");

			for (int j = 0; j < orgInfo.getRowCount(); j++) {
				String fileseq = (String) getSqlManager().queryForObject(new HashMap(), "commonService.getSeqNewId");

				String phyfilename = fileseq + ".obj";
				String orgFilePathId = Config.getString("ATTACHFILE.DIR") + "/"
						+ orgFile.getColumnAsString(i, "FILE_PATH_ID") + "/";
				String newFilePathId = Config.getString("ATTACHFILE.DIR") + "/"
						+ newFile.getColumnAsString(i, "FILE_PATH_ID") + "/";

				String orgFileNm = orgFilePathId + orgInfo.getColumnAsString(i, "PHY_FILE_NM");
				String newFileNm = newFilePathId + phyfilename;

				LOG.debug("orgFileNm => " + orgFileNm);
				LOG.debug("newFileNm => " + newFileNm);

				try {
					copy(orgFileNm, newFileNm);
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				}

				String seq = commandModule.getSeqNextval("MM_SYS_FILE_SEQ", CoerConstain.PROPAGATION_REQUIRED);

				if ("temp".equals(newFile.getColumnAsString(i, "FILE_PATH_ID"))) {
					int row = dsFile.appendRow();
					dsFile.setColumn(row, "filename", orgInfo.getColumnAsString(j, "LGCL_FILE_NM"));
					dsFile.setColumn(row, "filesize", orgInfo.getColumnAsString(j, "FILE_SIZE"));
					dsFile.setColumn(row, "PHY_FILE_NM", phyfilename);
					dsFile.setColumn(row, "REF_TBL_NM", newFile.getColumnAsString(i, "REF_TBL_NM"));
					dsFile.setColumn(row, "LGCL_FILE_NM", orgInfo.getColumnAsString(j, "LGCL_FILE_NM"));
					dsFile.setColumn(row, "FILE_SIZE", orgInfo.getColumnAsString(j, "FILE_SIZE"));
					dsFile.setColumn(row, "FILE_GUBUN", newFile.getColumnAsString(j, "FILE_PATH_ID"));
					dsFile.setColumn(row, "ROW_NO", row + 1);

					dsFile.setRowType(row, (short) 2);
				} else {
					CoreDataSet newMap = CoreDataSetFactory.getDataSet(NexacroDataSet.class);
					newMap.addStringColumn("FILE_ID");
					newMap.addStringColumn("BRANCH_CD");
					newMap.addStringColumn("FILE_PATH_ID");
					newMap.addStringColumn("PHY_FILE_NM");
					newMap.addStringColumn("LGCL_FILE_NM");
					newMap.addStringColumn("FILE_EXTN");
					newMap.addStringColumn("FILE_SIZE");
					newMap.addStringColumn("REF_TBL_NM");
					newMap.addStringColumn("REF_KEY_1");
					newMap.addStringColumn("REF_KEY_2");
					newMap.addStringColumn("REF_KEY_3");
					newMap.addStringColumn("REF_KEY_4");
					newMap.addStringColumn("REF_KEY_5");
					newMap.addStringColumn("CRTR_ID");
					newMap.appendRow();

					newMap.setColumn(0, "FILE_ID", seq);
					newMap.setColumn(0, "BRANCH_CD", newFile.getColumnAsString(i, "BRANCH_CD"));
					newMap.setColumn(0, "FILE_PATH_ID", newFile.getColumnAsString(i, "FILE_PATH_ID"));
					newMap.setColumn(0, "PHY_FILE_NM", phyfilename);
					newMap.setColumn(0, "LGCL_FILE_NM", orgInfo.getColumnAsString(i, "LGCL_FILE_NM"));
					newMap.setColumn(0, "FILE_EXTN", orgInfo.getColumnAsString(i, "FILE_EXTN"));
					newMap.setColumn(0, "FILE_SIZE", orgInfo.getColumnAsString(i, "FILE_SIZE"));
					newMap.setColumn(0, "REF_TBL_NM", newFile.getColumnAsString(i, "REF_TBL_NM"));
					newMap.setColumn(0, "REF_KEY_1", newFile.getColumnAsString(i, "REF_KEY_1"));
					newMap.setColumn(0, "REF_KEY_2", newFile.getColumnAsString(i, "REF_KEY_2"));
					newMap.setColumn(0, "REF_KEY_3", newFile.getColumnAsString(i, "REF_KEY_3"));
					newMap.setColumn(0, "REF_KEY_4", newFile.getColumnAsString(i, "REF_KEY_4"));
					newMap.setColumn(0, "REF_KEY_5", newFile.getColumnAsString(i, "REF_KEY_5"));

					newMap.setColumn(0, "CRTR_ID", "SYSTEM");

					getSqlManager().insertToCoreDataSet(newMap, "FileService.insertFile");
					getSqlManager().insertToCoreDataSet(newMap, "FileService.insertFileRef");
				}
			}
		}
		return dsFile;
	}

	public void copy(String srcPath, String destPath) throws FileNotFoundException {
		File srcFile = new File(srcPath);
		File destFile = new File(destPath);

		if (!srcFile.exists())
			throw new FileNotFoundException("파일이 존재하지 않습니다.");

		if (srcFile.isFile())
			copyFile(srcFile, destFile);
		else if (srcFile.isDirectory())
			copyDirectory(srcFile, destFile);
	}

	// 파일복사
	private void copyFile(File source, File dest) {
		long startTime = System.currentTimeMillis();

		int count = 0;
		long totalSize = 0;
		byte[] b = new byte[128];

		FileInputStream in = null;
		FileOutputStream out = null;
		// 성능향상을 위한 버퍼 스트림 사용
		BufferedInputStream bin = null;
		BufferedOutputStream bout = null;
		try {
			in = new FileInputStream(source);
			bin = new BufferedInputStream(in);

			out = new FileOutputStream(dest);
			bout = new BufferedOutputStream(out);

			while ((count = bin.read(b)) != -1) {
				bout.write(b, 0, count);
				totalSize += count;
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {// 스트림 close 필수

			try {
				if (bout != null) {
					bout.close();
				}
				if (out != null) {
					out.close();
				}
				if (bin != null) {
					bin.close();
				}
				if (in != null) {
					in.close();
				}

			} catch (IOException r) {
				// TODO: handle exception
				System.out.println("close 도중 에러 발생.");
			}
		}
		// 복사 시간 체크
		StringBuffer time = new StringBuffer("소요시간 : ");
		time.append(System.currentTimeMillis() - startTime);
		time.append(",FileSize : " + totalSize);
		System.out.println(time);
	}

	public String arrayJoin(String gubunja, String[] array) {
		String result = "";

		for (int i = 0; i < array.length; i++) {
			result += array[i];
			if (i < array.length - 1) {
				result += gubunja;
			}
		}

		return result;
	}

	// 디렉토리 생성 -> 파일복사
	private void copyDirectory(File source, File dest) {
		long startTime = System.currentTimeMillis();
		if (!source.exists() || !dest.isDirectory()) {
			throw new IllegalArgumentException("디렉토리 없음");
		}
		dest.mkdirs();// 생성

		File[] fileList = source.listFiles();// 내부의 파일리스트 가져오기

		for (int i = 0; i < fileList.length; i++) {
			File sourceFile = fileList[i];

			File destFile = new File(dest, sourceFile.getName());
			copyFile(sourceFile, destFile);// copyFile메소드 실행
		}

		// 복사 시간 체크
		StringBuffer time = new StringBuffer("소요시간 : ");
		time.append(System.currentTimeMillis() - startTime);
		time.append(",File Total List : " + fileList.length);
		System.out.println(time);
	}

	public String fileHashSHA256(String filename, String fileGubun) throws Exception {

		String SHA = "";
		int buff = 16384;
		String splitString = "/";
		try {
			filename = Config.getString("ATTACHFILE.DIR") + splitString + fileGubun + splitString + filename;
			RandomAccessFile file = new RandomAccessFile(filename, "r");
			MessageDigest hashSum = MessageDigest.getInstance("SHA-256");

			byte[] buffer = new byte[buff];
			byte[] partialHash = null;

			long read = 0;

			// calculate the hash of the hole file for the test
			long offset = file.length();
			int unitsize;
			while (read < offset) {
				unitsize = (int) (((offset - read) >= buff) ? buff : (offset - read));
				file.read(buffer, 0, unitsize);

				hashSum.update(buffer, 0, unitsize);

				read += unitsize;
			}

			file.close();
			partialHash = new byte[hashSum.getDigestLength()];
			partialHash = hashSum.digest();

			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < partialHash.length; i++) {
				sb.append(Integer.toString((partialHash[i] & 0xff) + 0x100, 16).substring(1));
			}
			SHA = sb.toString();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

		return SHA;
	}

	public String fileToBinary(String file) {
		String out = new String();
		FileInputStream fis = null;
		ByteArrayOutputStream baos = new ByteArrayOutputStream();

		File sendFile = new File(file);

		try {
			fis = new FileInputStream(sendFile);
		} catch (FileNotFoundException e) {
			System.out.println("Exception position : FileUtil - fileToString(File file1111111111111)");
		}

		int len = 0;
		byte[] buf = new byte[1024];
		try {
			while ((len = fis.read(buf)) != -1) {
				baos.write(buf, 0, len);
			}

			byte[] fileArray = baos.toByteArray();
			out = new String(base64Enc(fileArray));

			fis.close();
			baos.close();
		} catch (IOException e) {
			System.out.println("Exception position : FileUtil - fileToString(File file222222222222)");
		}

		return out;
	}

	public byte[] base64Enc(byte[] buffer) {
		return Base64.encodeBase64(buffer);
	}

	public byte[] base64Dec(String base64String) {
		return Base64.decodeBase64(base64String);
	}
}
