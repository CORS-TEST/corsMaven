/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.common.constain;

/**
 * configstring
 */
public abstract interface CoerConstain {

	public static final String DATASET_LIST = "datasetList";
	public static final String VARIABLE_LIST = "variableList";
	public static final String PARAMETERS = "parameters";
	public static final String INSERT_ITEM = "insertItem";
	public static final String UPDATE_ITEM = "updateItem";
	public static final String ROW_STATUS = "rowStatus";
	public static final String INSERT = "insert";
	public static final String UPDATE = "update";
	public static final String DELETE = "delete";
	public static final String NORMAL = "normal";
	public static final String PAGE_NO = "pageNo";
	public static final String PER_PAGE = "perPage";
	public static final String START_ROW = "START_ROW";
	public static final String END_ROW = "END_ROW";
	public static final String TOTAL_COUNT = "totalCount";
	public static final String DO_COUNT_TOTAL = "true";
	public static final String ERROR_CODE = "ErrorCode";
	public static final String DISPLAY_CODE = "DisplayCode";
	public static final int ERROR_CODE_SUCCESS = 0;
	public static final int ERROR_CODE_USEREXCEP = -1;
	public static final int ERROR_CODE_SYSEXCEP = -1000;
	public static final int ERROR_CODE_NOAUTH = -10;
	public static final String ERROR_MESSAGE = "ErrorMsg";
	public static final String SELECT_KEY = "selectKey";
	public static final String CLIENT_IP = "remoteNetworkAddress";
	public static final String LOCAL_IP = "127.0.0.1";
	public static final String REQ_URI = "REQ_URI";
	public static final String REQ_URL = "REQ_URL";
	public static final String PROG_CD = "PROG_CD";
	public static final String PROG_HIERARCHY_LIST = "PROG_HIERARCHY_LIST";
	public static final String PROG_HIERARCHY_STRING = "PROG_HIERARCHY_STRING";
	public static final String USER_ID = "USER_ID";
	public static final String LARGE_DATA_FILE_KEY = "__largedatafile__";
	public static final String IS_DELETE_LARGE_DATA_FILE = "__largedatafile_deleteyn__";
	public static final String IS_EXIST_LARGE_DATA_FILE = "__largedatafileYn__";
	public static final String RESULTSET_METADATA = "__resultsetMetadata__";
	public static final String VIEW_PREFIX_LEFT = "base.left.";
	public static final String VIEW_PREFIX_TOP = "base.top.";
	public static final String VIEW_PREFIX_CONTENTS = "base.contents.";
	public static final String VIEW_PREFIX_CONTENTS_NO_GRID = "base.contentsnogrid.";
	public static final String WINPOP_PREFIX_CONTENTS = "base.winpop.";
	public static final String WINPOP_PREFIX_CONTENTS_NO_GRID = "base.winpopnogrid.";
	public static final String VIEW_PREFIX_SINGLE = "base.single.";
	public static final String VIEW_PREFIX_DASHBOARD = "dashboard.contents.";
	public static final String WINPOP_PREFIX_DASHBOARD = "dashboard.winpop.";
	public static final String DEFAULT_SQL_MANAGER = "coreSqlManager";
	public static final String UPLOAD_ROOT_DIR = "upload.dir";
	public static final String UPLOAD_CONFIG = "upload.config";
	public static final String UPLOAD_TEST_DIR = "upload.dir.test";
	public static final String IMAGE_RESIZE_DIR = "image.resize.dir";
	public static final String SOAP_ENDPOINT_SMS = "soap.endpoint.sms";
	public static final String SMS_TEST_MESSAGE = "sms.test.message";
	public static final String EMAIL_HOST = "email.config.host";
	public static final String EMAIL_ID = "email.config.id";
	public static final String EMAIL_PASSWORD = "email.config.pw";
	public static final String EMAIL_DEBUG = "email.config.debug";
	public static final String EMAIL_BASE_ROOT_PATH = "email.config.baseRootPath";
	public static final String EMAIL_SENDER = "email.config.sender";
	public static final String EMAIL_SENDER_ADDR = "email.config.senderAddr";
	public static final int PROPAGATION_REQUIRED = 0;
	public static final int PROPAGATION_REQUIRES_NEW = 3;
	public static final int PROPAGATION_NOT_SUPPORTED = 4;
	public static final int PROPAGATION_SUPPORTS = 1;
	public static final short DECIMAL_PRECISION = 0;
	public static final short DECIMAL_NOPRECISION = 1;
	public static final String PROG_BTNAUTH_LIST = "PROG_BTNAUTH_LIST";
	public static final String LONG_TRAN_QUERY_LIST = "__LONG_TRAN_QUERY_LIST__";
	public static final int DASHBOARD_PERFECT_SOUND_IDX = 900;
	public static final String DASHBOARD_SERVER_ID = System.getProperty("server.id");
	public static final String XOBJECT_MIME_TYPE = "application/x-java-serialized-object";
	public static final String JSON_MIME_TYPE = "application/json";
	public static final String SOAP_TYPE = "SOAP";
	public static final String PROVIDER_USE = "1";
	public static final String WEBSERVICE_USE = "1";
	public static final String OPERATION_USE = "1";
}