/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.dataset;

import java.io.File;
import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;
import java.sql.Clob;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
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
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.ConstantColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.Variable;
import com.nexacro.xapi.data.VariableList;

import core.common.context.ApplicationContextProvider;
import core.common.util.CodeUtil;
import core.common.util.XssFilterUtil;
import core.exception.system.SystemException;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.vo.model.paramset.NexacroParamSet;

/**
 * use nexacro dataset
 * 
 */
public class NexacroDataSet implements CoreDataSet {
	private static final Log LOG = LogFactory.getLog(NexacroDataSet.class);
	private static final long serialVersionUID = 8040250778135639668L;
	private DataSet dataset;
	private Map<String, Object> variableMap;
	private List<Map<String, Object>> parameterList;
	private int activeRow;
	private boolean isDelete;
	private Boolean useXSS;
	private String langCd = "";
	private String loginUserId = "";
	private String loginUserNm = "";
	private String loginBranchCd = "";
	

	public NexacroDataSet() {
		this(new DataSet(), 0);
	}

	public NexacroDataSet(DataSet dataset) {
		this(dataset, 0);
	}

	public NexacroDataSet(DataSet dataset, int activeRow) {
		this.variableMap = new HashMap();

		this.parameterList = new ArrayList();

		this.isDelete = false;

		this.useXSS = Boolean.valueOf(true);

		this.dataset = dataset;
		this.activeRow = activeRow;
		try {
			HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
					.getRequest();
			HttpSession session = curRequest.getSession();
			this.langCd = session.getAttribute("G_LANG_CD") == null ? "CM34KR" : (String) session.getAttribute("G_LANG_CD");
			this.loginBranchCd = (String) session.getAttribute("G_BRANCH_CD");
			this.loginUserId = (String) session.getAttribute("G_USER_ID");
			this.loginUserNm = (String) session.getAttribute("G_USER_NM");
			
		} catch (Exception e) {
			this.langCd = "CM34KR";
		}
	}

	public DataSet getDataSet() {
		return this.dataset;
	}

	public NexacroParamSet putDatasetAndVariable(DataSetList datasetList, VariableList variableList) {
		NexacroParamSet params = (NexacroParamSet) CoreParamSetFactory.create(NexacroParamSet.class);
		params.setVariableList(variableList);

		for (int i = 0; i < datasetList.size(); ++i) {
			DataSet dataset = datasetList.get(i);
			
			dataset.setChangeStructureWithData(true);
			if(!dataset.containsColumn("SESSION_BRANCH_CD")) {
				dataset.addConstantColumn("SESSION_BRANCH_CD"		,this.loginBranchCd);
				dataset.addConstantColumn("SESSION_USER_ID"	,this.loginUserId);
				dataset.addConstantColumn("SESSION_USER_NM"	,this.loginUserNm);
			}
			
			params.put(dataset.getAlias(), new NexacroDataSet(dataset));
		}
		params.putAll(getVariableListMap(variableList));
		return params;
	}

	private Map getVariableListMap(VariableList variableList) {
		Map variableListMap = new HashMap();

		List keyList = variableList.keyList();
		List valueList = variableList.valueList();

		Iterator keyIterator = keyList.iterator();
		Iterator valueIterator = valueList.iterator();
		while ((keyIterator.hasNext()) && (valueIterator.hasNext())) {
			variableListMap.put(keyIterator.next(), valueIterator.next());
		}
		return variableListMap;
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

	public CoreDataSet makeDataset(List<?> list, String datasetName) {
		String tmpDatasetName = datasetName;
		if (tmpDatasetName == null) {
			tmpDatasetName = "";
		}
		DataSet dataset = new DataSet(tmpDatasetName);
		if ((list == null) || (list.size() == 0) || (list.get(0) == null)) {
			
			 
			Object[] resultMetaData = null;
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.getRequestAttributes();

			if (servletRequestAttributes != null) {
				HttpServletRequest curRequest = servletRequestAttributes.getRequest();
				resultMetaData = (Object[]) (Object[]) curRequest.getAttribute("__resultsetMetadata__");

				if (null != resultMetaData) {
					ArrayList<String> cdCol = new ArrayList<String>();
					for (int i = 0; i < resultMetaData.length; ++i) {
						Map columnMeta = (Map) resultMetaData[i];
						String colunmName = (String) columnMeta.get("columnName");
						int columnDisplaySize = ((Integer) columnMeta.get("columnDisplaySize")).intValue();
						String columnClassName = (String) columnMeta.get("columnClassName");

						dataset.addColumn(colunmName, getClassNameType(columnClassName), columnDisplaySize);
						if (colunmName.startsWith("CD") && !colunmName.endsWith("_NM")) {
							cdCol.add(colunmName);
						}
					}
					for (int i = 0; i < cdCol.size(); i++) {
						if (!dataset.containsColumn(cdCol.get(i) + "_NM")) {
							dataset.addColumn(cdCol.get(i) + "_NM", 0, 256);
						}
					}
				}
			}
			return new NexacroDataSet(dataset);
		}
		Field[] fields;
		int cRow;
		try {
			Class voClass = list.get(0).getClass();
			Map datamap;
			if (("java.util.HashMap".equals(voClass.getName()))) {
				Map map = (Map) list.get(0);
				int j = 0;
				for (Iterator j$ = map.keySet().iterator(); j$.hasNext();) {
					Object key = j$.next();
					if (map.get(key) != null) {
						Class classType = map.get(key).getClass();
						ColumnHeader columnHeader = new ColumnHeader(key.toString(), getClassType(classType), 256);
						dataset.addColumn(columnHeader);
						// �ڵ�� �÷��߰��κ�
						if (String.valueOf(columnHeader.getName()).startsWith("CD")
								&& !String.valueOf(columnHeader.getName()).endsWith("_NM")) {
							if (!dataset.containsColumn(columnHeader.getName() + "_NM")) {
								dataset.addColumn(columnHeader.getName() + "_NM", 0, 256);
							}
						}
					} else {
						dataset.addColumn(key.toString(), 0, 256);
						// �ڵ�� �÷��߰��κ�
						if (String.valueOf(key.toString()).startsWith("CD")
								&& !String.valueOf(key.toString()).endsWith("_NM")) {
							if (!dataset.containsColumn(key.toString() + "_NM")) {
								dataset.addColumn(key.toString() + "_NM", 0, 256);
							}
						}
					}

				}
				int i = 0;
				for (Iterator i$ = list.iterator(); i$.hasNext();) {
					Object obj = i$.next();
					datamap = (Map) obj;
					cRow = dataset.newRow();
					for (Iterator j$ = datamap.keySet().iterator(); j$.hasNext();) {
						Object key = j$.next();
						dataset.set(cRow, key.toString(), datamap.get(key));
						// �ڵ�� �÷��߰��κ�
						if (String.valueOf(key.toString()).startsWith("CD")) {
							dataset.set(cRow, key.toString() + "_NM",
									CodeUtil.getCodeName((String) datamap.get(key), this.langCd));
						}

					}

				}

			} else {
				fields = voClass.getDeclaredFields();
				Field[] superClassFields = voClass.getSuperclass().getDeclaredFields();
				fields = (Field[]) (Field[]) ArrayUtils.addAll(fields, superClassFields);
				AccessibleObject.setAccessible(fields, true);

				if (LOG.isDebugEnabled()) {
					LOG.debug("value object name >>> " + voClass.getName());
				}

				for (Field field : fields) {
					if ("serialVersionUID".equals(field.getName())) {
						continue;
					}
					if ("rowStatus".equals(field.getName())) {
						continue;
					}
					dataset.addColumn(field.getName(), getClassType(field.getClass()), 256);
				}
				
				cRow = 0;
				for (Iterator i$ = list.iterator(); i$.hasNext();) {
					Object data = i$.next();
					cRow = dataset.newRow();
					for (Field field : fields) {
						dataset.set(cRow, field.getName(), field.get(data));
					}

				}

			}
		} catch (Exception e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		}
		return new NexacroDataSet(dataset);
	}

	public static int getClassType(Class classType) {
		int retType;
		if ((classType.equals(String.class)) || (classType.equals(Clob.class))) {
			retType = 2;
		} else {
			if (classType.equals(Integer.class)) {
				retType = 3;
			} else {
				if (classType.equals(Boolean.class)) {
					retType = 4;
				} else {
					if (classType.equals(Long.class)) {
						retType = 5;
					} else {
						if (classType.equals(Float.class)) {
							retType = 6;
						} else {
							if (classType.equals(Double.class)) {
								retType = 7;
							} else {
								if (classType.equals(BigDecimal.class)) {
									retType = 8;
								} else {
									if ((classType.equals(java.util.Date.class))
											|| (classType.equals(java.sql.Date.class))) {
										retType = 9;
									} else {
										if (classType.equals(Timestamp.class)) {
											retType = 11;
										} else {
											if (classType.equals(Byte.class)) {
												retType = 12;
											} else {
												if (classType.equals(File.class)) {
													retType = 13;
												} else {
													if (classType.equals(Time.class))
														retType = 10;
													else
														retType = 0;
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
		return retType;
	}

	private int getClassNameType(String className) {
		String classType = className.substring(className.lastIndexOf(46) + 1);

		short retType = 2;

		if (("int".equals(classType)) || ("Integer".equals(classType)))
			retType = 3;
		else if (("Date".equals(classType)) || ("Timestamp".equals(classType)))
			retType = 9;
		else if ("BigDecimal".equals(classType))
			retType = 8;
		else if (("float".equals(classType)) || ("Float".equals(classType)))
			retType = 6;
		else if ("Double".equals(classType))
			retType = 7;
		else if (("long".equals(classType)) || ("Long".equals(classType)))
			retType = 5;
		else if ("Blob".equals(classType))
			retType = 12;
		else {
			retType = 2;
		}

		return retType;
	}

	public CoreDataSet makeDataset(List<?> data, List<?> deletedData, String datasetName) {
		return makeDataset(data, datasetName);
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

		Map dataMap = new HashMap();
		for (int column = 0; column < dataset.getColumnCount(); ++column) {
			dataMap.put(this.dataset.getColumn(column).getName(),
					getColumnAsType(this.dataset, this.activeRow, column, this.dataset.getColumn(column).getType()));
		}

		dataMap.put("rowStatus", Integer.valueOf(dataset.getRowType(this.activeRow)));

		return dataMap;
	}

	private <T> T getColumnAsType(DataSet dataset, int row, int column, int coltype) {
		switch (coltype) {
		case 3:
			return (T) Integer.valueOf(dataset.getInt(row, column));
		case 9:
			return (T) dataset.getDateTime(row, column);
		case 8:
			if (dataset.getBigDecimal(row, column) != null) {
				return (T) dataset.getBigDecimal(row, column).toString();
			}
			return null;
		case 12:
			return (T) dataset.getBlob(row, column);
		case 4:
		case 5:
		case 6:
		case 7:
		case 10:
		case 11:
		}
		return (T) dataset.getString(row, column);
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
			else
				parameter = (Map) this.parameterList.get(this.activeRow);
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
		if ((this.parameterList.get(this.activeRow) != null)
				&& (((Map) this.parameterList.get(this.activeRow)).get(key) != null)) {
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

	// @Override
	public Object get(Object obj) {
		Object value = null;
		if ((this.parameterList.size() > this.activeRow) && (this.parameterList.get(this.activeRow) != null)
				&& (((Map) this.parameterList.get(this.activeRow)).get(obj) != null)) {
			value = ((Map) this.parameterList.get(this.activeRow)).get(obj);
			if (value instanceof String) {
				value = (this.useXSS.booleanValue()) ? getXssFilterUtil().filterXss((String) value) : value;
			}

		} else if (this.isDelete) {
			if ((this.dataset != null) && (getDeleteColumnAsString(this.activeRow, obj.toString()) != null)) {
				value = getDeleteColumnAsString(this.activeRow, obj.toString());
				if (value instanceof String) {
					value = (this.useXSS.booleanValue()) ? getXssFilterUtil().filterXss((String) value) : value;
				}
			} else if ((this.dataset != null) && (this.dataset.getColumn(obj.toString()) != null)) {
				value = getColumnAsObject(this.activeRow, obj.toString());
				if (value instanceof String)
					value = (this.useXSS.booleanValue()) ? getXssFilterUtil().filterXss((String) value) : value;
			} else {
				value = this.variableMap.get(obj);
				if (value instanceof String) {
					value = (this.useXSS.booleanValue()) ? getXssFilterUtil().filterXss((String) value) : value;
				}
			}

		} else if (this.variableMap.get(obj) != null) {
			value = convertObject(this.variableMap.get(obj));
		} else if (this.dataset.getColumn(obj.toString()) != null) {
			value = this.dataset.getObject(this.activeRow, obj.toString());
			if (value instanceof String) {
				value = (this.useXSS.booleanValue()) ? getXssFilterUtil().filterXss((String) value) : value;
			}

		}

		return value;
	}

	public Object convertObject(Object obj) {
		if (obj == null) {
			return null;
		}
		Object finalReturn = null;
		if (obj.getClass().equals(Variable.class)) {
			Variable var = (Variable) obj;

			switch (var.getType()) {
			case 3:
				finalReturn = Integer.valueOf(var.getInt());
				break;
			case 4:
				finalReturn = Boolean.valueOf(var.getBoolean());
				break;
			case 5:
				finalReturn = Long.valueOf(var.getLong());
				break;
			case 6:
				finalReturn = Float.valueOf(var.getFloat());
				break;
			case 7:
				finalReturn = Double.valueOf(var.getDouble());
				break;
			case 8:
				finalReturn = var.getDecimal();
				break;
			case 9:
			case 10:
			case 11:
				finalReturn = var.getDateTime();
				break;
			case 12:
				finalReturn = var.getBlob();
				break;
			default:
				finalReturn = (this.useXSS.booleanValue()) ? getXssFilterUtil().filterXss(var.getString())
						: var.getString();
			}

			return finalReturn;
		}
		return obj;
	}

	private Object getColumnAsType(int row, int columnIndex, int coltype) {
		switch (coltype) {
		case 3:
			return Integer.valueOf(this.dataset.getInt(row, columnIndex));
		case 9:
			return this.dataset.getDateTime(row, columnIndex);
		case 8:
			if (this.dataset.getBigDecimal(row, columnIndex) != null) {
				return this.dataset.getBigDecimal(row, columnIndex).toString();
			}
			return null;
		case 12:
			return this.dataset.getBlob(row, columnIndex);
		case 4:
		case 5:
		case 6:
		case 7:
		case 10:
		case 11:
		}
		return this.dataset.getString(row, columnIndex);
	}

	@Override
	public Object put(Object key, Object value) {
		if ((this.dataset != null) && (this.dataset.getColumn((String) key) != null)) {
			this.dataset.set(this.activeRow, key.toString(), String.valueOf(value));
		}

		return this.variableMap.put(key.toString(), value);
	}

	@Override
	public void clear() {
		this.variableMap.clear();
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
		return this.dataset.containsColumn(name);
	}

	@Override
	public Set<Map.Entry<String, Object>> entrySet() {
		throw new SystemException("Error ColumnSet");
	}

	@Override
	public boolean isEmpty() {
		return ((this.dataset == null) || ((this.dataset.getRowCount() == 0) && (this.variableMap.isEmpty())));
	}

	@Override
	public boolean isDataSetEmpty() {
		return ((this.dataset == null) || (this.dataset.getRowCount() == 0));
	}

	@Override
	public Set keySet() {
		throw new SystemException("Error ColumnSet");
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
		throw new SystemException("Error ColumnSet");
	}

	@Override
	public List getColumnAsList(int row, int column) {
		if (this.dataset.getString(row, column) == null) {
			return new ArrayList();
		}
		String raw = this.dataset.getString(row, column);
		if (raw.length() <= 2) {
			return new ArrayList();
		}
		raw = raw.substring(1, raw.length() - 1);
		String[] vars = StringUtils.tokenizeToStringArray(raw, ",");
		return Arrays.asList(vars);
	}

	@Override
	public List getColumnAsList(int row, String column) {
		if (this.dataset.getString(row, column) == null) {
			return new ArrayList();
		}
		String raw = this.dataset.getString(row, column);
		if (raw.length() <= 2) {
			return new ArrayList();
		}
		raw = raw.substring(1, raw.length() - 1);
		String[] vars = StringUtils.tokenizeToStringArray(raw, ",");
		return Arrays.asList(vars);
	}

	@Override
	public Object getColumnAsObject(int row, int column) {
		return this.dataset.getObject(row, column);
	}

	@Override
	public Object getColumnAsObject(int row, String columnName) {
		return this.dataset.getObject(row, columnName);
	}

	@Override
	public String getColumnAsString(int row, int column) {
		return this.dataset.getString(row, column);
	}

	@Override
	public String getColumnAsString(int row, String columnName) {
		return this.dataset.getString(row, columnName);
	}

	@Override
	public Integer getColumnAsInteger(int row, int column) {
		return Integer.valueOf(this.dataset.getInt(row, column));
	}

	@Override
	public Integer getColumnAsInteger(int row, String columnName) {
		return Integer.valueOf(this.dataset.getInt(row, columnName));
	}

	@Override
	public Long getColumnAsLong(int row, int column) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return null;
	}

	@Override
	public Long getColumnAsLong(int row, String columnName) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return null;
	}

	@Override
	public Date getColumnAsDate(int row, int column) {
		return this.dataset.getDateTime(row, column);
	}

	@Override
	public Date getColumnAsDate(int row, String columnName) {
		return this.dataset.getDateTime(row, columnName);
	}

	@Override
	public byte[] getColumnAsByteArray(int row, int column) {
		return this.dataset.getBlob(row, column);
	}

	@Override
	public byte[] getColumnAsByteArray(int row, String columnName) {
		return this.dataset.getBlob(row, columnName);
	}

	@Override
	public Double getColumnAsDouble(int rowIndex, int columnIndex) {
		return Double.valueOf(this.dataset.getDouble(rowIndex, columnIndex));
	}

	@Override
	public Double getColumnAsDouble(int rowIndex, String columnName) {
		return Double.valueOf(this.dataset.getDouble(rowIndex, columnName));
	}

	@Override
	public String getColumnID(int index) {
		return this.dataset.getColumn(index).getName();
	}

	@Override
	public String getColumnIdByOrder(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return null;
	}

	@Override
	public int getColumnIndexByOrder(int arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return 0;
	}

	@Override
	public int getColumnOrder(String arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return 0;
	}

	@Override
	public int getColumnWriteOrder() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return 0;
	}

	@Override
	public int getConstColumnCount() {
		int constColCnt = 0;
		for (int i = 0; i < this.dataset.getColumnCount(); ++i) {
			if (this.dataset.getColumn(i).isConstant()) {
				++constColCnt;
			}
		}
		return constColCnt;
	}

	@Override
	public int getDeleteRowIdx(int index) {
		return getDeletedRowIndex(index);
	}

	@Override
	public int getDeleteRowIndex(int arg0) {
		return getDeletedRowIndex(arg0);
	}

	private int getDeletedRowIndex(int arg0) {
		int deletedRowIndex = 0;
		for (int i = 0; i < this.dataset.getRemovedRowCount(); ++i) {
			if (this.dataset.getRowType(i) == 3) {
				deletedRowIndex = i;
				break;
			}
		}
		return deletedRowIndex;
	}

	@Override
	public String getId() {
		return this.dataset.getName();
	}

	@Override
	public int getOrder() {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return 0;
	}

	@Override
	public int getColumnIndex(String columnName) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return 0;
	}

	@Override
	public String getCharset() {
		return this.dataset.getCharset();
	}

	@Override
	public int getColumnCount() {
		return this.dataset.getColumnCount();
	}

	@Override
	public String getColumnId(int index) {
		return this.dataset.getColumn(index).getName();
	}

	@Override
	public int getColumnDataType(int index) {
		return this.dataset.getColumnDataType(index);
	}

	@Override
	public String getDataSetID() {
		return this.dataset.getName();
	}

	@Override
	public int getDeleteRowCount() {
		return this.dataset.getRemovedRowCount();
	}

	@Override
	public String getDeleteColumnAsString(int row, String pkName) {
		if (this.dataset.getRemovedData(row, pkName) == null) {
			return null;
		}
		return this.dataset.getRemovedData(row, pkName).toString();
	}

	@Override
	public int getRowCount() {
		return this.dataset.getRowCount();
	}

	@Override
	public String getRowStatus(int row) {
		String typeName = String.valueOf(this.dataset.getRowTypeName(row));

		if (typeName.equals("deleted"))
			typeName = "delete";
		else if (typeName.equals("inserted"))
			typeName = "insert";
		else if (typeName.equals("updated")) {
			typeName = "update";
		}

		return typeName;
	}

	@Override
	public short getRowType(int row) {
		return (short) this.dataset.getRowType(row);
	}

	@Override
	public int addConstColumn(String arg0, Date arg1) {
		this.dataset.addConstantColumn(arg0, 11, null);
		return 0;
	}

	@Override
	public int addConstColumn(String arg0, Double arg1) {
		this.dataset.addConstantColumn(arg0, 7, null);
		return 0;
	}

	@Override
	public int addConstColumn(String arg0, double arg1) {
		this.dataset.addConstantColumn(arg0, 7, null);
		return 0;
	}

	@Override
	public int addConstColumn(String arg0, int arg1) {
		this.dataset.addConstantColumn(arg0, 3, null);
		return 0;
	}

	@Override
	public int addConstColumn(String arg0, Integer arg1) {
		this.dataset.addConstantColumn(arg0, 3, null);
		return 0;
	}

	@Override
	public int addConstColumn(String arg0, String arg1) {
		this.dataset.addConstantColumn(arg0, 2, null);
		return 0;
	}

	@Override
	public int addCurrencyColumn(String arg0) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return 0;
	}

	@Override
	public int addCurrencyColumn(String arg0, int arg1) {
		try {
			throw new SystemException("Unsupported Method");
		} catch (Exception e) {
			LOG.error("context", e);
		}
		return 0;
	}

	@Override
	public int addDateColumn(String arg0) {
		this.dataset.addColumn(arg0, 9);
		return 0;
	}

	@Override
	public int addDateColumn(String arg0, int arg1) {
		this.dataset.addColumn(arg0, 9, arg1);
		return 0;
	}

	@Override
	public int addDecimalColumn(String arg0) {
		this.dataset.addColumn(arg0, 3);
		return 0;
	}

	@Override
	public int addDecimalColumn(String arg0, int arg1) {
		this.dataset.addColumn(arg0, 3, arg1);
		return 0;
	}

	@Override
	public int addFileColumn(String arg0) {
		this.dataset.addColumn(arg0, 13);
		return 0;
	}

	@Override
	public int addFileColumn(String arg0, int arg1) {
		this.dataset.addColumn(arg0, 13, arg1);
		return 0;
	}

	@Override
	public int addIntegerColumn(String arg0) {
		this.dataset.addColumn(arg0, 3);
		return 0;
	}

	@Override
	public int addIntegerColumn(String arg0, int arg1) {
		this.dataset.addColumn(arg0, 3, arg1);
		return 0;
	}

	@Override
	public int addStringColumn(String arg0, int arg1) {
		this.dataset.addColumn(arg0, 2, arg1);
		return 0;
	}

	@Override
	public String getSavedStringData(int arg0, String arg1) {
		return this.dataset.getSavedStringData(arg0, arg1);
	}

	@Override
	public String getConstColumnString(String arg0) {
		ConstantColumnHeader cch = new ConstantColumnHeader(arg0, 2);
		return cch.getStringValue(this.dataset);
	}

	@Override
	public int getUpdateRowCount() {
		return this.dataset.getSavedRowCount();
	}

	@Override
	public int insertRow(int arg0) {
		return this.dataset.newRow(arg0);
	}

	@Override
	public boolean isUpdated() {
		return this.dataset.isStoreDataChanges();
	}

	@Override
	public void setCharset(String arg0) {
		this.dataset.setCharset(arg0);
	}

	@Override
	public boolean setColumn(int arg0, int arg1, byte[] arg2) {
		this.dataset.set(arg0, arg0, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, Date arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, double arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, Double arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, int arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, int arg1, Integer arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, byte[] arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, Date arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, double arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, Double arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, int arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setColumn(int arg0, String arg1, Integer arg2) {
		this.dataset.set(arg0, arg1, arg2);
		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, byte[] arg1) {
		this.dataset.addConstantColumn(arg0, 12, arg1);
		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, Date arg1) {
		this.dataset.addConstantColumn(arg0, 11, arg1);
		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, double arg1) {
		this.dataset.addConstantColumn(arg0, 7, Double.valueOf(arg1));
		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, Double arg1) {
		this.dataset.addConstantColumn(arg0, 7, arg1);
		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, int arg1) {
		this.dataset.addConstantColumn(arg0, 3, Integer.valueOf(arg1));
		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, Integer arg1) {
		this.dataset.addConstantColumn(arg0, 3, arg1);
		return true;
	}

	@Override
	public boolean setConstColumn(String arg0, String arg1) {
		this.dataset.addConstantColumn(arg0, 2, arg1);
		return false;
	}

	@Override
	public void setId(String arg0) {
		this.dataset.setName(arg0);
	}

	@Override
	public void setRowType(int arg0, short arg1) {
		this.dataset.setRowType(arg0, arg1);
	}

	@Override
	public void setUpdate(boolean changeStructureWithData) {
		this.dataset.setChangeStructureWithData(changeStructureWithData);
	}

	@Override
	public void setUpdating(boolean changeStructureWithData) {
		this.dataset.setChangeStructureWithData(changeStructureWithData);
	}

	@Override
	public int appendRow() {
		return this.dataset.newRow();
	}

	@Override
	public void clearAll() {
		this.dataset.clear();
	}

	@Override
	public void deleteAll() {
		this.dataset.clearData();
	}

	@Override
	public int deleteRow(int arg0) {
		this.dataset.removeRow(arg0);
		return 0;
	}

	@Override
	public void setDataSetID(String datasetName) {
		String localDataSetName = datasetName;

		this.dataset.setName(localDataSetName);
	}

	@Override
	public boolean setColumn(int row, int column, String value) {
		this.dataset.set(row, column, value);
		return true;
	}

	@Override
	public boolean setColumn(int row, String columnName, String value) {
		
		if(!this.dataset.containsColumn(columnName)) {
			
			if(!this.dataset.canChangeStructureWithData()){
				this.dataset.setChangeStructureWithData(true);
			}
		
			this.dataset.addColumn(columnName, 2);

		}
		
		this.dataset.set(row, columnName, value);
		return true;
	}

	@Override
	public String toString() {

		StringBuilder result = new StringBuilder("{nexacroDataSet ==> ");
		result.append(this.dataset.saveXml());
		result.append("}");
		return result.toString();
	}

	@Override
	public Map getRowAsMap(int row) {
		Map dataMap = new HashMap();
		for (int column = 0; column < getColumnCount(); ++column) {
			dataMap.put(getColumnId(column), getColumnAsType(row, column, getColumnDataType(column)));
		}
		dataMap.put("rowStatus", getRowStatus(row));
		try {
			PropertyUtils.copyProperties(dataMap, this.variableMap);
			if (this.parameterList.size() > row)
				PropertyUtils.copyProperties(dataMap, this.parameterList.get(row));
		} catch (IllegalAccessException e) {
			LOG.error("context", e);
		} catch (InvocationTargetException e) {
			LOG.error("context", e);
		} catch (NoSuchMethodException e) {
			LOG.error("context", e);
		}
		return dataMap;
	}

	@Override
	public Map getDeletedRowAsMap(int row) {
		Map dataMap = new HashMap();
		for (int column = 0; column < getColumnCount(); ++column) {
			String colName = getColumnId(column);
			dataMap.put(colName, getDeleteColumnAsString(row, colName));
		}
		try {
			PropertyUtils.copyProperties(dataMap, this.variableMap);
		} catch (IllegalAccessException e) {
			LOG.error("context", e);
		} catch (InvocationTargetException e) {
			LOG.error("context", e);
		} catch (NoSuchMethodException e) {
			LOG.error("context", e);
		}
		return dataMap;
	}

	@Override
	public CoreDataSet getOriginalDataset() {
		return null;
	}

	@Override
	public String getColumnAsString(int row, String columnName, short castingOption) {
		String columnValue = null;

		switch (castingOption) {
		case 1:
			columnValue = this.dataset.getBigDecimal(row, columnName).toString();
			break;
		case 0:
		default:
			columnValue = this.dataset.getString(row, columnName);
		}

		return columnValue;
	}

	@Override
	public void setUseXSS(Boolean useXSS) {
		this.useXSS = useXSS;
	}

	@Override
	public int addStringColumn(String paramString) {
		this.dataset.addColumn(paramString, 2);
		return 0;
	}

	@Override
	public int addBlobColumn(String paramString) {
		this.dataset.addColumn(paramString, 12);
		return 0;
	}

	@Override
	public int addBlobColumn(String paramString, int paramInt) {
		this.dataset.addColumn(paramString, 12, paramInt);
		return 0;
	}

	public XssFilterUtil getXssFilterUtil() {
		ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();
		return ((XssFilterUtil) applicationContext.getBean("XssFilterUtil"));
	}

	public ArrayList<Object> transToArray() {
		ArrayList arr = new ArrayList();
		for (int i = 0; i < getRowCount(); i++) {
			arr.add(getRowAsMap(i));
		}
		return arr;
	}

	@Override
	public String toXmlString() {
		StringBuilder result = new StringBuilder(this.dataset.saveXml());
		return result.toString();
	}
}