package core.common.config;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.configuration.CombinedConfiguration;
import org.apache.commons.configuration.XMLConfiguration;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class Config {

	private static final Log LOG = LogFactory.getLog(Config.class);
	private static CombinedConfiguration configOfXML = new CombinedConfiguration();
	private static String configLocations;
	private static long reloadDelays;
	private static long reloadPeriod;

	public static void setConfigLocation(String configLocation) {
		configLocations = configLocation;
	}

	public static long getReloadDelay() {
		return reloadDelays;
	}

	public void setReloadDelay(long reloadDelay) {
		reloadDelays = reloadDelay;
	}

	public static long getReloadPeriod() {
		return reloadPeriod;
	}

	public void setReloadPeriod(long reloadPeriod) {
		reloadPeriod = reloadPeriod;
	}

	public static void loadConfig() {
		if (configLocations != null) {
			configOfXML = new CombinedConfiguration();

			try {
				Resource resource = new ClassPathResource(configLocations);
				//XMLConfiguration c = new XMLConfiguration(resource.getURI().getPath().substring(1));
				XMLConfiguration c = new XMLConfiguration(resource.getURI().getPath());

				configOfXML.addConfiguration(c);
				LOG.info(" XML Config [" + resource.getURI().getPath() + "] was loaded.");
				if (LOG.isInfoEnabled()) {
					LOG.info(" XML Config '" + configLocations + "' was loaded.");
					Iterator keys = c.getKeys();
					while (keys.hasNext()) {
						String key = (String) keys.next();
						LOG.info(" XML Config key = " + key + ", value = " + c.getString(key));
					}
				}
			} catch (Exception e) {
				if (LOG.isErrorEnabled()) {
					LOG.error(e, e);
				}
			}
			configOfXML.setForceReloadCheck(true);
		}

	}

	public static String getString(String key) {
		return getString(key, null);
	}

	public static String getString(String key, String defaultValue) {
		String value = defaultValue;

		if (configOfXML == null) {
			if (LOG.isWarnEnabled())
				LOG.warn(" Config was not loaded.");
		} else {
			value = configOfXML.getString(key, defaultValue);
		}

		return value;
	}

	public static int getInteger(String key, int defaultValue) {
		int value = defaultValue;

		if (configOfXML == null) {
			if (LOG.isWarnEnabled())
				LOG.warn(" Config was not loaded.");
		} else {
			value = configOfXML.getInteger(key, defaultValue).intValue();
		}

		return value;
	}

	public static long getLong(String key, long defaultValue) {
		long value = defaultValue;

		if (configOfXML == null) {
			if (LOG.isWarnEnabled())
				LOG.warn(" Config was not loaded.");
		} else {
			value = configOfXML.getLong(key, defaultValue);
		}

		return value;
	}

	public static List<String> getStringList(String key) {
		if (configOfXML == null) {
			if (LOG.isWarnEnabled()) {
				LOG.warn(" Config was not loaded.");
			}
			return null;
		}
		List stringList = new ArrayList();
		List list = configOfXML.getList(key);
		for (Iterator i$ = list.iterator(); i$.hasNext();) {
			Object obj = i$.next();
			stringList.add((String) obj);
		}

		if (LOG.isDebugEnabled()) {
			LOG.debug(" Config getStringList = " + stringList);
		}

		return stringList;
	}

}
