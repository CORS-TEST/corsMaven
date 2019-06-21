/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.dataset;

import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;
import java.sql.Clob;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import core.common.util.CodeUtil;
import core.exception.system.SystemException;
import core.vo.model.coreset.CoreDataSet;

/**
 * CoreDataSet�� implements�Ͽ� ���θ� �����Ѵ�. DataSet�� �Ѱ��� �߰��ɶ����� �����Ͽ�
 * casting�Ͽ� ����Ѵ�.
 * 
 */
public class HtmlDataSet implements CoreDataSet {
	private static final Log LOG = LogFactory.getLog(HtmlDataSet.class);
	private static final String DATA = "data";
	private static final String DELETED_DATA = "deletedData";
	private String dataSetName = "";
	private List dataRows = null;
	private List deletedDataRows = null;
	private Map variableMap = new HashMap();
	private Map columnInfoMap = new HashMap();
	private List<Map<String, Object>> parameterList = new ArrayList();
	private int activeRow;
	private boolean isDelete = false;
	private String langCd = "";

	public HtmlDataSet() {
		this.dataRows = new ArrayList();
		this.variableMap.put("data", this.dataRows);
		this.deletedDataRows = new ArrayList();
		this.variableMap.put("deletedData", this.deletedDataRows);
		this.columnInfoMap.put("data", null);
		this.columnInfoMap.put("deletedData", null);
		try {
			HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
			HttpSession session = curRequest.getSession();
			this.langCd = session.getAttribute("G_LANG_CD") == null ? "CM34KR" : (String) session.getAttribute("G_LANG_CD");
		} catch (Exception e) {
			this.langCd = "CM34KR";
		}

	}

	public HtmlDataSet(String dataSetName, List dataRows, List deletedDataRows) {
		this.dataRows = dataRows;
		this.deletedDataRows = deletedDataRows;
		this.variableMap.put("data", dataRows);
		this.variableMap.put("deletedData", deletedDataRows);
		this.columnInfoMap.put("data", null);
		this.columnInfoMap.put("deletedData", null);

		this.dataSetName = dataSetName;
	}

	public void setName(String dataSetName) {
		this.dataSetName = dataSetName;
	}

	@Override
	public CoreDataSet makeDataset(List result) {
		return makeDataset(result, "output");
	}

	public CoreDataSet makeDataset(Object object) {
		return makeDataset(object, "output");
	}

	public CoreDataSet makeDataset(Object object, String datasetName) {
		if (object instanceof List) {
			return makeDataset((List) object, datasetName);
		}
		List list = new ArrayList();
		if (object != null) {
			list.add(object);
		}
		return makeDataset(list, datasetName);
	}

	public CoreDataSet makeDataset(List list, String datasetName) {
		String tmpDatasetName = datasetName;
		if (tmpDatasetName == null) {
			tmpDatasetName = "";
		}
		HtmlDataSet dataset = new HtmlDataSet();
		if ((list == null) || (list.size() == 0) || (list.get(0) == null)) {
			dataset.setName(tmpDatasetName);
			return dataset;
		}
		try {
			Class voClass = list.get(0).getClass();
			Map datamap;
			if (("java.util.HashMap".equals(voClass.getName()))) {
				dataset.setName(tmpDatasetName);
				for (int i = 0; i < list.size(); i++) {
					datamap = (HashMap) list.get(i);
					Set key = datamap.keySet();
					int row = dataset.appendRow();
					for (Iterator iterator = key.iterator(); iterator.hasNext();) {
						String keyName = (String) iterator.next();
						Object valueName = datamap.get(keyName);
						dataset.setColumn(row, keyName, getClassString(valueName));
						if (keyName.startsWith("CD")) {
							dataset.setColumn(row, keyName + "_NM", CodeUtil.getCodeName((String) datamap.get(key), this.langCd));
						}
					}
				}
			} else {
			}
		} catch (Exception e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		}
		return dataset;
	}

	public String getClassString(Object obj) {
		String rtnString = "";
		if (obj == null) {
			return rtnString;
		}
		Class classType = obj.getClass();
		if ((classType.equals(String.class)) || (classType.equals(Clob.class))) {
			rtnString = obj.toString();
		} else {
			if (classType.equals(Integer.class)) {
				rtnString = String.valueOf(obj);
			} else {
				if (classType.equals(Boolean.class)) {
					rtnString = String.valueOf(obj);
				} else {
					if (classType.equals(Long.class)) {
						rtnString = String.valueOf(obj);
					} else {
						if (classType.equals(Float.class)) {
							rtnString = String.valueOf(obj);
						} else {
							if (classType.equals(Double.class)) {
								rtnString = String.valueOf(obj);
							} else {
								if (classType.equals(BigDecimal.class)) {
									rtnString = String.valueOf(obj);
								} else {
									if ((classType.equals(java.util.Date.class)) || (classType.equals(java.sql.Date.class))) {
										rtnString = String.valueOf(obj);
									} else {
										if (classType.equals(Timestamp.class)) {
											rtnString = String.valueOf(obj);
										} else {
											if (classType.equals(Byte.class)) {
												rtnString = String.valueOf(obj);
											} else {
												if (classType.equals(File.class)) {
													rtnString = String.valueOf(obj);
												} else {
													if (classType.equals(Time.class))
														rtnString = String.valueOf(obj);
													else
														rtnString = String.valueOf(obj);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		return rtnString;
	}

	@Override
	public int getActiveRow() {
		return this.activeRow;
	}

	@Override
	public void setActiveRow(int activeRow) {
		this.activeRow = activeRow;
	}

	@Override
	public Map getActiveRowData() {
		if ((this.dataRows != null) && (this.dataRows.isEmpty())) {
			return null;
		}
		if (null != this.dataRows) {
			return ((Map) this.dataRows.get(this.activeRow));
		}
		return null;
	}

	@Override
	public Map getActiveRowData(int activeRow) {
		setActiveRow(activeRow);
		return getActiveRowData();
	}

	@Override
	public String getString(Object obj) {
		return ((String) get(obj));
	}

	@Override
	public Date getDate(Object obj) {
		return ((Date) get(obj));
	}

	@Override
	public Integer getInt(Object obj) {
		return ((Integer) get(obj));
	}

	@Override
	public Double getDouble(Object obj) {
		return ((Double) get(obj));
	}

	@Override
	public void setInputParameter(String key, Object value) {
		setSearchParameter(key, value);
	}

	@Override
	public void setSearchParameter(String key, Object value) {
		Map parameter = null;

		if ((!(this.parameterList.isEmpty())) && (this.parameterList.size() > this.activeRow)) {
			if (this.parameterList.get(this.activeRow) == null)
				parameter = new HashMap();
			else {
				parameter = (Map) this.parameterList.get(this.activeRow);
			}
		} else {
			while (this.parameterList.size() <= this.activeRow) {
				parameter = new HashMap();
				this.parameterList.add(parameter);
			}
		}

		if (null != parameter)
			parameter.put(key, value);
	}

	@Override
	public Object getInputParameter(String key) {
		return getSearchParameter(key);
	}

	@Override
	public Object getSearchParameter(String key) {
		if ((this.parameterList.get(this.activeRow) != null) && (((Map) this.parameterList.get(this.activeRow)).get(key) != null)) {
			return ((Map) this.parameterList.get(this.activeRow)).get(key);
		}
		return "";
	}

	@Override
	public void addParameter(String key, Object value) {
		setSearchParameter(key, value);
	}

	@Override
	public Object getVariable(String key) {
		return this.variableMap.get(key);
	}

	@Override
	public boolean isDelete() {
		return this.isDelete;
	}

	@Override
	public void setDelete(boolean isDelete) {
		this.isDelete = isDelete;
	}

	@Override
	public Object get(Object obj) {
		if ("data".equals(obj)) {
			return this.dataRows;
		}
		if ("deletedData".equals(obj)) {
			return this.deletedDataRows;
		}

		if ((this.parameterList.size() > this.activeRow) && (this.parameterList.get(this.activeRow) != null) && (((Map) this.parameterList.get(this.activeRow)).get(obj) != null)) {
			return ((Map) this.parameterList.get(this.activeRow)).get(obj);
		}
		if (this.isDelete) {
			if ((this.deletedDataRows != null) && (this.deletedDataRows.size() > this.activeRow) && (((Map) this.deletedDataRows.get(this.activeRow)).containsKey(obj.toString()))) {
				return getDeleteColumnAsString(this.activeRow, obj.toString());
			}
			if ((this.dataRows != null) && (this.dataRows.size() > this.activeRow) && (((Map) this.dataRows.get(this.activeRow)).containsKey(obj.toString()))) {
				return getColumnAsObject(this.activeRow, obj.toString());
			}
			return this.variableMap.get(obj);
		}

		if (this.variableMap.get(obj) != null) {
			return this.variableMap.get(obj);
		}
		Map activeRowMap = getActiveRowData();
		if ((activeRowMap != null) && (activeRowMap.containsKey(obj.toString()))) {
			return getColumnAsObject(this.activeRow, obj.toString());
		}
		return null;
	}

	@Override
	public Object put(Object key, Object value) {
		if ((this.dataRows != null) && (this.dataRows.size() != 0)) {
			Map firstMap = (Map) this.dataRows.get(0);
			if (firstMap.containsKey(key)) {
				HashMap map = new HashMap();
				map.put(key.toString(), String.valueOf(value));
				this.dataRows.set(this.activeRow, map);
			}
		}

		return this.variableMap.put(key.toString(), value);
	}

	@Override
	public void clear() {
		this.variableMap.clear();
		this.parameterList.clear();
	}

	@Override
	public boolean containsKey(Object obj) {
		return this.variableMap.containsKey(obj);
	}

	@Override
	public boolean containsValue(Object obj) {
		return this.variableMap.containsValue(obj);
	}

	@Override
	public boolean containsColumn(String name) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public Set<Map.Entry<String, Object>> entrySet() {
		return this.variableMap.entrySet();
	}

	@Override
	public boolean isEmpty() {
		return ((this.dataRows == null) || ((this.dataRows.isEmpty()) && (this.variableMap.isEmpty())));
	}

	@Override
	public boolean isDataSetEmpty() {
		return ((this.dataRows == null) || (this.dataRows.isEmpty()));
	}

	@Override
	public Set keySet() {
		return this.variableMap.keySet();
	}

	@Override
	public void putAll(Map m) {
		this.variableMap.putAll(m);
	}

	@Override
	public Object remove(Object obj) {
		return this.variableMap.remove(obj);
	}

	@Override
	public int size() {
		return this.variableMap.size();
	}

	@Override
	public Collection values() {
		return this.variableMap.values();
	}

	@Override
	public List getColumnAsList(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List getColumnAsList(int row, String column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Object getColumnAsObject(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Object getColumnAsObject(int row, String columnName) {
		HashMap map = (HashMap) this.dataRows.get(row);
		return map.get(columnName);
	}

	@Override
	public String getColumnAsString(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public String getColumnAsString(int row, String columnName) {
		int dataRowsSize = this.dataRows.size();
		if (row >= dataRowsSize) {
			return null;
		}

		Object obj = this.dataRows.get(row);
		if (obj == null) {
			return null;
		}

		String resultString = null;
		Map map = (Map) this.dataRows.get(row);

		if (map.get(columnName) == null) {
			return resultString;
		}

		resultString = map.get(columnName).toString();

		return resultString;
	}

	@Override
	public Integer getColumnAsInteger(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Integer getColumnAsInteger(int row, String columnName) {
		HashMap map = (HashMap) this.dataRows.get(row);
		return ((Integer) map.get(columnName));
	}

	@Override
	public Long getColumnAsLong(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Long getColumnAsLong(int row, String columnName) {
		HashMap map = (HashMap) this.dataRows.get(row);
		return ((Long) map.get(columnName));
	}

	@Override
	public Date getColumnAsDate(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Date getColumnAsDate(int row, String columnName) {
		HashMap map = (HashMap) this.dataRows.get(row);
		return ((Date) map.get(columnName));
	}

	@Override
	public byte[] getColumnAsByteArray(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}

		return new byte[0];
	}

	@Override
	public byte[] getColumnAsByteArray(int row, String columnName) {
		HashMap map = (HashMap) this.dataRows.get(row);
		return ((byte[]) (byte[]) map.get(columnName));
	}

	@Override
	public Double getColumnAsDouble(int arg0, int arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Double getColumnAsDouble(int arg0, String arg1) {
		HashMap map = (HashMap) this.dataRows.get(arg0);
		return ((Double) map.get(arg1));
	}

	@Override
	public String getColumnID(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int getColumnDataType(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public String getColumnIdByOrder(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int getColumnIndexByOrder(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int getColumnOrder(String arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int getColumnWriteOrder() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int getConstColumnCount() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int getDeleteRowIdx(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int getDeleteRowIndex(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public String getId() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int getOrder() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int getColumnIndex(String columnName) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public String getCharset() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int getColumnCount() {
		HashMap map = (HashMap) this.dataRows.get(this.activeRow);
		return map.size();
	}

	@Override
	public String getColumnId(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public String getDataSetID() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int getDeleteRowCount() {
		return ((this.deletedDataRows == null) ? 0 : this.deletedDataRows.size());
	}

	@Override
	public String getDeleteColumnAsString(int row, String pkName) {
		if ((this.deletedDataRows == null) || (this.deletedDataRows.size() <= row)) {
			return null;
		}

		HashMap map = (HashMap) this.deletedDataRows.get(row);
		return ((String) map.get(pkName));
	}

	@Override
	public int getRowCount() {
		return this.dataRows.size();
	}

	@Override
	public String getRowStatus(int row) {
		HashMap map = (HashMap) this.dataRows.get(row);
		String ret = null;
		String rowStatus = (String) map.get("__rowStatus");
		if ("I".equals(rowStatus))
			ret = "insert";
		else if ("U".equals(rowStatus))
			ret = "update";
		else if ("D".equals(rowStatus)) {
			ret = "delete";
		}
		return ret;
	}

	@Override
	public short getRowType(int row) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int addStringColumn(String columnName) {
		this.columnInfoMap.put(columnName, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addBlobColumn(String arg0) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addBlobColumn(String arg0, int arg1) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addConstColumn(String arg0, Date arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int addConstColumn(String arg0, Double arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int addConstColumn(String arg0, double arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int addConstColumn(String arg0, int arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int addConstColumn(String arg0, Integer arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int addConstColumn(String arg0, String arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public int addCurrencyColumn(String arg0) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addCurrencyColumn(String arg0, int arg1) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addDateColumn(String arg0) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addDateColumn(String arg0, int arg1) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addDecimalColumn(String arg0) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addDecimalColumn(String arg0, int arg1) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addFileColumn(String arg0) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addFileColumn(String arg0, int arg1) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addIntegerColumn(String arg0) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addIntegerColumn(String arg0, int arg1) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public int addStringColumn(String arg0, int arg1) {
		this.columnInfoMap.put(arg0, null);
		return this.columnInfoMap.size();
	}

	@Override
	public String getSavedStringData(int arg0, String arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public String getConstColumnString(String arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int getUpdateRowCount() {
		int rowCnt = 0;
		for (int i = 0; i < this.dataRows.size(); ++i) {
			HashMap map = (HashMap) this.dataRows.get(i);
			if ("U".equals((String) map.get("__rowStatus"))) {
				++rowCnt;
			}
		}

		return rowCnt;
	}

	@Override
	public int insertRow(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public boolean isUpdated() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public void setCharset(String arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
	}

	@Override
	public boolean setColumn(int arg0, int arg1, byte[] arg2) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, Date arg2) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, double arg2) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, Double arg2) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, int arg2) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, Integer arg2) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, byte[] arg2) {
		HashMap map = null;
		try {
			map = (HashMap) this.dataRows.get(arg0);
			if (map == null) {
				return false;
			}
			map.put(arg1, arg2);

			this.variableMap.put("data", this.dataRows);
		} catch (Exception e) {
			LOG.error("Exception", e);
			throw new SystemException("Error ColumnSet");
		}

		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, Date arg2) {
		HashMap map = null;
		try {
			map = (HashMap) this.dataRows.get(arg0);
			if (map == null) {
				return false;
			}
			map.put(arg1, arg2);

			this.variableMap.put("data", this.dataRows);
		} catch (Exception e) {
			LOG.error("Exception", e);
			throw new SystemException("Error ColumnSet");
		}

		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, double arg2) {
		HashMap map = null;
		try {
			map = (HashMap) this.dataRows.get(arg0);
			if (map == null) {
				return false;
			}
			map.put(arg1, Double.valueOf(arg2));

			this.variableMap.put("data", this.dataRows);
		} catch (Exception e) {
			LOG.error("Exception", e);
			throw new SystemException("Error ColumnSet");
		}

		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, Double arg2) {
		HashMap map = null;
		try {
			map = (HashMap) this.dataRows.get(arg0);
			if (map == null) {
				return false;
			}
			map.put(arg1, arg2);

			this.variableMap.put("data", this.dataRows);
		} catch (Exception e) {
			LOG.error("Exception", e);
			throw new SystemException("Error ColumnSet");
		}

		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, int arg2) {
		HashMap map = null;
		try {
			map = (HashMap) this.dataRows.get(arg0);
			if (map == null) {
				return false;
			}
			map.put(arg1, Integer.valueOf(arg2));

			this.variableMap.put("data", this.dataRows);
		} catch (Exception e) {
			LOG.error("Exception", e);
			throw new SystemException("Error ColumnSet");
		}

		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, Integer arg2) {
		HashMap map = null;
		try {
			map = (HashMap) this.dataRows.get(arg0);
			if (map == null) {
				return false;
			}
			map.put(arg1, arg2);

			this.variableMap.put("data", this.dataRows);
		} catch (Exception e) {
			LOG.error("Exception", e);
			throw new SystemException("Error ColumnSet");
		}

		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, byte[] arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setConstColumn(String arg0, Date arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setConstColumn(String arg0, double arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setConstColumn(String arg0, Double arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setConstColumn(String arg0, int arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setConstColumn(String arg0, Integer arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setConstColumn(String arg0, String arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public void setId(String arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
	}

	@Override
	public void setRowType(int arg0, short arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
	}

	@Override
	public void setUpdate(boolean arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
	}

	@Override
	public void setUpdating(boolean arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
	}

	@Override
	public int appendRow() {
		Map map = new HashMap();
		this.dataRows.add(map);
		return (this.dataRows.size() - 1);
	}

	@Override
	public void clearAll() {
		this.dataRows.clear();
	}

	@Override
	public void deleteAll() {
		this.dataRows.clear();
	}

	@Override
	public int deleteRow(int arg0) {
		this.dataRows.remove(arg0);
		return arg0;
	}

	@Override
	public void setDataSetID(String datasetName) {
		this.dataSetName = datasetName;
	}

	@Override
	public boolean setColumn(int row, int column, String value) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean setColumn(int row, String columnName, String value) {
		HashMap map = null;
		try {
			map = (HashMap) this.dataRows.get(row);
			if (map == null) {
				return false;
			}
			map.put(columnName, value);

			this.variableMap.put("data", this.dataRows);
		} catch (Exception e) {
			LOG.error("Exception", e);
			throw new SystemException("Error ColumnSet");
		}

		return true;
	}

	@Override
	public String toString() {
		StringBuilder result = new StringBuilder("{ ");
		for (Iterator i$ = this.variableMap.keySet().iterator(); i$.hasNext();) {
			Object key = i$.next();
			result.append(key).append(":").append(get(key)).append(", ");// ;
		}
		if (result.lastIndexOf(",") > 0) {
			result.deleteCharAt(result.lastIndexOf(","));
		}
		result.append(" }");
		return result.toString();
	}

	@Override
	public Map getRowAsMap(int row) {
		HashMap rowMap = (HashMap) ((HashMap) this.dataRows.get(row)).clone();
		try {
			PropertyUtils.copyProperties(rowMap, this.variableMap);
			if (this.parameterList.size() > row)
				PropertyUtils.copyProperties(rowMap, this.parameterList.get(row));
		} catch (IllegalAccessException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		}

		return rowMap;
	}

	@Override
	public Map getDeletedRowAsMap(int row) {
		HashMap rowMap = (HashMap) ((HashMap) this.deletedDataRows.get(row)).clone();
		try {
			PropertyUtils.copyProperties(rowMap, this.variableMap);
			if (this.parameterList.size() > row)
				PropertyUtils.copyProperties(rowMap, this.parameterList.get(row));
		} catch (IllegalAccessException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
			e.printStackTrace();
		}

		return rowMap;
	}

	@Override
	public CoreDataSet getOriginalDataset() {
		return null;
	}

	@Override
	public String getColumnAsString(int row, String columnName, short castingOption) {
		return getColumnAsString(row, columnName);
	}

	@Override
	public void setUseXSS(Boolean useXSS) {
	}

	@Override
	public ArrayList<Object> transToArray() {
		return null;
	}

	@Override
	public String toXmlString() {
		return null;
	}

}
