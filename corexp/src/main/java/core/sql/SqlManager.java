/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.sql;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.util.StopWatch;

import core.common.context.ApplicationContextProvider;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;

/**
 * core.sql SqlManager.java <br>
 * mybatis sqlmanaget controll
 * 
 * @author : mjpark
 * @Date : 2017. 6. 28.
 */
public class SqlManager extends SqlSessionDaoSupport {
	private static final Log LOG = LogFactory.getLog(SqlManager.class);

	@Autowired(required = false)
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}

	/**
	 * @MenthdName : queryForCoreDataSet
	 * @InputParameterType : CoreDataSet , String
	 * @OutputParameterType : CoreDataSet
	 */
	public CoreDataSet queryForCoreDataSet(CoreDataSet dataset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		List result = getSqlSession().selectList(sqlId, dataset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return CoreDataSetFactory.getDataSet(dataset.getClass()).makeDataset(result);
	}

	/**
	 * @MenthdName : queryForCoreDataSet
	 * @InputParameterType : CoreParamSet , String
	 * @OutputParameterType : CoreDataSet
	 */
	public CoreDataSet queryForCoreDataSet(CoreParamSet paramset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		List result = getSqlSession().selectList(sqlId, paramset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return CoreDataSetFactory.getDataSet(paramset).makeDataset(result);
	}

	/**
	 * @MenthdName : insertToCoreDataSet
	 * @InputParameterType : CoreDataSet , String
	 * @OutputParameterType : int
	 */
	public int insertToCoreDataSet(CoreDataSet dataset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int rslt = getSqlSession().insert(sqlId, dataset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return rslt;
	}

	/**
	 * @MenthdName : insertToCoreDataSet
	 * @InputParameterType : CoreDataSet , String
	 * @OutputParameterType : int
	 */
	public int insertBatchToCoreDataSet(CoreDataSet dataset, String listName, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		Map executeMap = new HashMap();
		ArrayList arr = dataset.transToArray();
		ArrayList arrPart = new ArrayList();
		int rslt = 0;
		for (int i = 0; i < arr.size(); i++) {
			if (i % 50 == 0) {
				if (arrPart.size() != 0) {
					executeMap.put(listName, dataset.transToArray());
					rslt = getSqlSession().insert(sqlId, executeMap);
				}
				executeMap.clear();
				arrPart.clear();
			} else {
				arrPart.add(arr.get(i));
			}
		}
		if (arrPart.size() != 0) {
			executeMap.put(listName, dataset.transToArray());
			rslt = getSqlSession().insert(sqlId, executeMap);
		}
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return rslt;
	}

	/**
	 * @MenthdName : insertToCoreDataSet
	 * @InputParameterType : CoreParamSet , String
	 * @OutputParameterType : int
	 */
	public int insertToCoreDataSet(CoreParamSet paramset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int rslt = getSqlSession().insert(sqlId, paramset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return rslt;
	}

	/**
	 * @MenthdName : updateToCoreDataSet
	 * @InputParameterType : CoreDataSet , String
	 * @OutputParameterType : int
	 */
	public int updateToCoreDataSet(CoreDataSet dataset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int rslt = getSqlSession().update(sqlId, dataset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return rslt;
	}

	/**
	 * @MenthdName : updateToCoreDataSet
	 * @InputParameterType : CoreParamSet , String
	 * @OutputParameterType : int
	 */
	public int updateToCoreDataSet(CoreParamSet paramset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int rslt = getSqlSession().update(sqlId, paramset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return rslt;
	}

	/**
	 * @MenthdName : deleteToCoreDataSet
	 * @InputParameterType : CoreDataSet , String
	 * @OutputParameterType : int
	 */
	public int deleteToCoreDataSet(CoreDataSet dataset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int rslt = getSqlSession().delete(sqlId, dataset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return rslt;
	}

	/**
	 * @MenthdName : deleteToCoreDataSet
	 * @InputParameterType : CoreParamSet , String
	 * @OutputParameterType : int
	 */
	public int deleteToCoreDataSet(CoreParamSet paramset, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int rslt = getSqlSession().delete(sqlId, paramset);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return rslt;
	}

	/**
	 * @MenthdName : queryForObject
	 * @InputParameterType :
	 * @OutputParameterType : Object
	 */
	public Object queryForObject(Object object, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		Object result = getSqlSession().selectOne(sqlId, object);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return result;
	}

	/**
	 * @MenthdName : insertForObject
	 * @InputParameterType :
	 * @OutputParameterType : Object
	 */
	public Object insertForObject(Object object, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		Object result = getSqlSession().insert(sqlId, object);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return result;
	}

	/**
	 * @MenthdName : updateForObject
	 * @InputParameterType :
	 * @OutputParameterType : Object
	 */
	public Object updateForObject(Object object, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		Object result = getSqlSession().update(sqlId, object);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return result;
	}

	/**
	 * @MenthdName : deleteForObject
	 * @InputParameterType :
	 * @OutputParameterType : Object
	 */
	public Object deleteForObject(Object object, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		Object result = getSqlSession().delete(sqlId, object);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);
		return result;
	}

	/**
	 * @MenthdName : queryForList
	 * @InputParameterType :
	 * @OutputParameterType : List
	 */
	public List queryForList(Map mapData, String sqlId) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		List result = getSqlSession().selectList(sqlId, mapData);
		stopWatch.stop();
		loggingQueryElapse(stopWatch, sqlId);

		return result;
	}

	public Object insertRequiresNew(CoreParamSet coreDataset, String sqlId) {
		ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();

		PlatformTransactionManager transactionManager = (PlatformTransactionManager) applicationContext
				.getBean("transactionManager");

		TransactionTemplate transactionTemplate = new TransactionTemplate(transactionManager);
		transactionTemplate.setPropagationBehavior(3);

		class TrCallback implements TransactionCallback {
			String sqlId;
			CoreParamSet coreDataset;

			TrCallback(String sqlId, CoreParamSet coreDataset) {
				this.sqlId = sqlId;
				this.coreDataset = coreDataset;
			}

			@Override
			public Object doInTransaction(TransactionStatus status) {
				StopWatch stopWatch = new StopWatch();
				stopWatch.start();
				Object result = Integer.valueOf(SqlManager.this.getSqlSession().insert(this.sqlId, this.coreDataset));
				stopWatch.stop();
				SqlManager.this.loggingQueryElapse(stopWatch, this.sqlId);
				return result;
			}

		}
		return transactionTemplate.execute(new TrCallback(sqlId, coreDataset));
	}

	public Object insertRequiresNew(Object coreDataset, String sqlId) {
		ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();

		PlatformTransactionManager transactionManager = (PlatformTransactionManager) applicationContext
				.getBean("transactionManager");

		TransactionTemplate transactionTemplate = new TransactionTemplate(transactionManager);
		transactionTemplate.setPropagationBehavior(3);

		class TrCallback implements TransactionCallback {
			String sqlId;
			Object coreDataset;

			TrCallback(String sqlId, Object coreDataset) {
				this.sqlId = sqlId;
				this.coreDataset = coreDataset;
			}

			@Override
			public Object doInTransaction(TransactionStatus status) {
				StopWatch stopWatch = new StopWatch();
				stopWatch.start();
				Object result = Integer.valueOf(SqlManager.this.getSqlSession().insert(this.sqlId, this.coreDataset));
				stopWatch.stop();
				SqlManager.this.loggingQueryElapse(stopWatch, this.sqlId);
				return result;
			}

		}
		return transactionTemplate.execute(new TrCallback(sqlId, coreDataset));
	}

	public void flushStatements() {
		getSqlSession().flushStatements();
	}

	/**
	 * @MenthdName : loggingQueryElapse
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	private void loggingQueryElapse(StopWatch stopWatch, String sqlId) {
		if (LOG.isInfoEnabled()) {
			StringBuilder elapsedTime = new StringBuilder("Sql [");
			elapsedTime.append(sqlId).append("] elapsed time : ");
			elapsedTime.append(stopWatch.getTotalTimeMillis()).append(" ms.");
			LOG.info(elapsedTime);
		}
	}
}
