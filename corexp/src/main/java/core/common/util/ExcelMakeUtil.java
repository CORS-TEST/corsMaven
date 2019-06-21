package core.common.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Map;
import java.util.Random;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.hssf.util.CellRangeAddress;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;

import core.common.config.Config;
import core.vo.model.coreset.CoreDataSet;

public class ExcelMakeUtil {
	private static final Log LOG = LogFactory.getLog(ExcelMakeUtil.class);
	protected ExcelCellMakeUtil[][] headers;
	// protected XSSFWorkbook excelMakeWb;
	protected CoreDataSet data;
	protected XSSFCellStyle headerStyle;
	protected XSSFCellStyle lineStyle;
	protected ArrayList<ExcelCellMakeUtil> colArr;
	protected int headerLine = 0;
	protected int colCnt = 0;

	protected SXSSFWorkbook excelMakeWb;

	public ExcelMakeUtil() {
		this.excelMakeWb = new SXSSFWorkbook(10);
	}

	public void setDataColumnInfo(ArrayList<ExcelCellMakeUtil> colArr) {
		this.colArr = colArr;
	}

	public String makeExcelFile(CoreDataSet data) {
		try {
			String savePath = Config.getString("ATTACHFILE.DIR") + "/" + Config.getString("ATTACHFILE.DIR.EXCEL");
			File filePath = new File(savePath);
			if (!filePath.exists()) {
				filePath.mkdirs();
			}
			Calendar calendar = Calendar.getInstance();
			java.util.Date date = calendar.getTime();
			String today = (new SimpleDateFormat("yyyyMMddHHmmss").format(date));
			Random temp = new Random();
			int ranNum = temp.nextInt(100000);

			String phyfilename = today + "_" + ranNum + ".xlsx";
			// File xlsFile = new File(savePath + "/" + phyfilename);
			OutputStream fileOut = new FileOutputStream(savePath + "/" + phyfilename);
			long start = System.currentTimeMillis();
			// System.out.println("ExcelMAkeStart[" + start + "]");
			makeExcelSheet(data);
			long end = System.currentTimeMillis();
			// System.out.println("ExcelMAkeEnd[" + end + "]");
			// System.out.println("writeHSSFWorkbook : " + (end - start));
			this.excelMakeWb.write(fileOut);
			this.excelMakeWb.dispose();

			return phyfilename;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			return "";
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}
	}

	public void setHeaderLine(int headerLine) {
		this.headerLine = headerLine;
	}

	public void setColCnt(int colCnt) {
		this.colCnt = colCnt;
	}

	public void setHeaders(ExcelCellMakeUtil[][] headers) {
		this.headers = headers;
	}

	protected void makeExcelSheet(CoreDataSet data) {
		Sheet sheet = this.excelMakeWb.createSheet("firstSheet");
		makeHeaderData(sheet);
		makeRowData(sheet, data);
	}

	protected void makeRowData(Sheet sheet, CoreDataSet data) {
		Row row = null;
		for (int i = 0; i < data.getRowCount(); i++) {
			row = sheet.createRow(i + this.headerLine);
			data.setActiveRow(i);
			makeColData(row, data.getActiveRowData());
		}
		for (int i = 0; i < this.colArr.size(); i++) {
			sheet.autoSizeColumn(i);
			sheet.setColumnWidth(i, sheet.getColumnWidth(i) + 512);
		}
	}

	protected void makeHeaderData(Sheet sheet) {
		Row row = null;
		Cell cell = null;
		ExcelCellMakeUtil colInfo = null;
		for (int i = 0; i < this.headers.length; i++) {
			row = sheet.createRow(i);
			for (int j = 0; j < this.headers[i].length; j++) {
				cell = row.createCell(j);
				colInfo = this.headers[i][j];
				if (colInfo == null) {
					colInfo = new ExcelCellMakeUtil("H");
					cell.setCellValue("");
					cell.setCellStyle(colInfo.getCellStyle(this.excelMakeWb));
				} else {
					cell.setCellValue(colInfo.getHeaderText());
					cell.setCellStyle(colInfo.getCellStyle(this.excelMakeWb));
				}
			}
		}

		for (int i = 0; i < this.headers.length; i++) {
			for (int j = 0; j < this.headers[i].length; j++) {
				colInfo = this.headers[i][j];
				if (colInfo != null) {
					int cols = colInfo.getColspan() == 0 ? j : colInfo.getColspan() - 1 + j;
					int rows = colInfo.getRowspan() == 0 ? i : colInfo.getRowspan() - 1 + i;
					sheet.addMergedRegion(new CellRangeAddress(i, rows, j, cols));
				}
			}
		}
		sheet.createFreezePane(0, this.headers.length, 0, this.headers.length + 1);
	}

	protected void makeColData(Row row, Map dataMap) {
		Cell cell = null;
		ExcelCellMakeUtil colInfo;
		for (int i = 0; i < this.colArr.size(); i++) {
			cell = row.createCell(i);
			colInfo = this.colArr.get(i);
			// cell.setCellStyle();
			cell.setCellValue(colInfo.getRtnText(dataMap));
			// cell.setCellStyle(colInfo.getCellStyle(this.excelMakeWb));
		}
	}

}
