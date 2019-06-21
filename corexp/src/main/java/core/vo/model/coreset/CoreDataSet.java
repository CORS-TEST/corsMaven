/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.coreset;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * 새로운 UI사용시 해당UI객체의 메소드를 여기에 추가하고 ParamSet을 생성하여준다.<br>
 * 
 * DataSet이 한개씩 추가될때마다 implement하여 casting하여 사용한다.<br>
 * 
 */
public abstract interface CoreDataSet extends Map, Serializable {
	public abstract int getActiveRow();

	public abstract void setActiveRow(int paramInt);

	public abstract Map getActiveRowData();

	public abstract Map getActiveRowData(int paramInt);

	public abstract String getString(Object paramObject);

	public abstract Date getDate(Object paramObject);

	public abstract Integer getInt(Object paramObject);

	public abstract Double getDouble(Object paramObject);

	public abstract void setInputParameter(String paramString, Object paramObject);

	public abstract void setSearchParameter(String paramString, Object paramObject);

	public abstract Object getInputParameter(String paramString);

	public abstract Object getSearchParameter(String paramString);

	public abstract void addParameter(String paramString, Object paramObject);

	public abstract Object getVariable(String paramString);

	public abstract boolean isDelete();

	public abstract void setDelete(boolean paramBoolean);

	public abstract Object get(Object paramObject);

	public abstract Object put(Object paramObject1, Object paramObject2);

	public abstract void clear();

	public abstract boolean containsKey(Object paramObject);

	public abstract boolean containsValue(Object paramObject);

	public abstract boolean containsColumn(String paramString);

	public abstract boolean isEmpty();

	public abstract boolean isDataSetEmpty();

	public abstract Set keySet();

	public abstract void putAll(Map paramMap);

	public abstract Object remove(Object paramObject);

	public abstract int size();

	public abstract Collection values();

	public abstract List getColumnAsList(int paramInt1, int paramInt2);

	public abstract List getColumnAsList(int paramInt, String paramString);

	public abstract Object getColumnAsObject(int paramInt1, int paramInt2);

	public abstract Object getColumnAsObject(int paramInt, String paramString);

	public abstract String getColumnAsString(int paramInt1, int paramInt2);

	public abstract String getColumnAsString(int paramInt, String paramString);

	public abstract String getColumnAsString(int paramInt, String paramString, short paramShort);

	public abstract Integer getColumnAsInteger(int paramInt1, int paramInt2);

	public abstract Long getColumnAsLong(int paramInt, String paramString);

	public abstract Long getColumnAsLong(int paramInt1, int paramInt2);

	public abstract Integer getColumnAsInteger(int paramInt, String paramString);

	public abstract Date getColumnAsDate(int paramInt1, int paramInt2);

	public abstract Date getColumnAsDate(int paramInt, String paramString);

	public abstract byte[] getColumnAsByteArray(int paramInt1, int paramInt2);

	public abstract byte[] getColumnAsByteArray(int paramInt, String paramString);

	public abstract Double getColumnAsDouble(int paramInt1, int paramInt2);

	public abstract Double getColumnAsDouble(int paramInt, String paramString);

	public abstract String getColumnID(int paramInt);

	public abstract String getColumnIdByOrder(int paramInt);

	public abstract int getColumnIndexByOrder(int paramInt);

	public abstract int getColumnOrder(String paramString);

	public abstract int getColumnWriteOrder();

	public abstract int getConstColumnCount();

	public abstract int getDeleteRowIdx(int paramInt);

	public abstract int getDeleteRowIndex(int paramInt);

	public abstract String getId();

	public abstract int getOrder();

	public abstract int getColumnIndex(String paramString);

	public abstract String getCharset();

	public abstract int getColumnCount();

	public abstract String getColumnId(int paramInt);

	public abstract int getColumnDataType(int paramInt);

	public abstract String getDataSetID();

	public abstract int getDeleteRowCount();

	public abstract String getDeleteColumnAsString(int paramInt, String paramString);

	public abstract int getRowCount();

	public abstract String getRowStatus(int paramInt);

	public abstract short getRowType(int paramInt);

	public abstract int addStringColumn(String paramString);

	public abstract int addBlobColumn(String paramString);

	public abstract int addBlobColumn(String paramString, int paramInt);

	public abstract int addConstColumn(String paramString, Date paramDate);

	public abstract int addConstColumn(String paramString, Double paramDouble);

	public abstract int addConstColumn(String paramString, double paramDouble);

	public abstract int addConstColumn(String paramString, int paramInt);

	public abstract int addConstColumn(String paramString, Integer paramInteger);

	public abstract int addConstColumn(String paramString1, String paramString2);

	public abstract int addCurrencyColumn(String paramString);

	public abstract int addCurrencyColumn(String paramString, int paramInt);

	public abstract int addDateColumn(String paramString);

	public abstract int addDateColumn(String paramString, int paramInt);

	public abstract int addDecimalColumn(String paramString);

	public abstract int addDecimalColumn(String paramString, int paramInt);

	public abstract int addFileColumn(String paramString);

	public abstract int addFileColumn(String paramString, int paramInt);

	public abstract int addIntegerColumn(String paramString);

	public abstract int addIntegerColumn(String paramString, int paramInt);

	public abstract int addStringColumn(String paramString, int paramInt);

	public abstract String getSavedStringData(int paramInt, String paramString);

	public abstract String getConstColumnString(String paramString);

	public abstract int getUpdateRowCount();

	public abstract int insertRow(int paramInt);

	public abstract boolean isUpdated();

	public abstract void setCharset(String paramString);

	public abstract boolean setColumn(int paramInt1, int paramInt2, byte[] paramArrayOfByte);

	public abstract boolean setColumn(int paramInt1, int paramInt2, Date paramDate);

	public abstract boolean setColumn(int paramInt1, int paramInt2, double paramDouble);

	public abstract boolean setColumn(int paramInt1, int paramInt2, Double paramDouble);

	public abstract boolean setColumn(int paramInt1, int paramInt2, int paramInt3);

	public abstract boolean setColumn(int paramInt1, int paramInt2, Integer paramInteger);

	public abstract boolean setColumn(int paramInt, String paramString, byte[] paramArrayOfByte);

	public abstract boolean setColumn(int paramInt, String paramString, Date paramDate);

	public abstract boolean setColumn(int paramInt, String paramString, double paramDouble);

	public abstract boolean setColumn(int paramInt, String paramString, Double paramDouble);

	public abstract boolean setColumn(int paramInt1, String paramString, int paramInt2);

	public abstract boolean setColumn(int paramInt, String paramString, Integer paramInteger);

	public abstract boolean setConstColumn(String paramString, byte[] paramArrayOfByte);

	public abstract boolean setConstColumn(String paramString, Date paramDate);

	public abstract boolean setConstColumn(String paramString, double paramDouble);

	public abstract boolean setConstColumn(String paramString, Double paramDouble);

	public abstract boolean setConstColumn(String paramString, int paramInt);

	public abstract boolean setConstColumn(String paramString, Integer paramInteger);

	public abstract boolean setConstColumn(String paramString1, String paramString2);

	public abstract void setId(String paramString);

	public abstract void setRowType(int paramInt, short paramShort);

	public abstract void setUpdate(boolean paramBoolean);

	public abstract void setUpdating(boolean paramBoolean);

	public abstract int appendRow();

	public abstract void clearAll();

	public abstract void deleteAll();

	public abstract int deleteRow(int paramInt);

	public abstract void setDataSetID(String paramString);

	public abstract boolean setColumn(int paramInt1, int paramInt2, String paramString);

	public abstract boolean setColumn(int paramInt, String paramString1, String paramString2);

	public abstract String toString();

	public abstract Map getRowAsMap(int paramInt);

	public abstract Map getDeletedRowAsMap(int paramInt);

	public abstract CoreDataSet getOriginalDataset();

	public abstract void setUseXSS(Boolean paramBoolean);

	public abstract CoreDataSet makeDataset(List result);

	public abstract ArrayList<Object> transToArray();

	public abstract String toXmlString();
}