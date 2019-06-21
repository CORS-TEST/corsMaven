package epro.core.util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import core.common.util.XssFilterUtil;

public class XssFilterUtilImpl implements XssFilterUtil {

	private static final Log LOG = LogFactory.getLog(XssFilterUtilImpl.class);

	/**
	 * XSS로 의심되는 문자열을 제거하기 위한 정규식 및 정규식 적용 관련 플래그를 static List로 정의한다.<br>
	 * 인수값을 넣어 생성된 Pattern List를 반환.<br>
	 * 
	 */
	private static final List<Pattern> XSS_PATTERN_LIST = getXssPatternList();

	/**
	 * XSS로 의심되는 패턴을 정의한 객체를 리턴한다.<br>
	 *
	 * @return
	 */
	private static List<Pattern> getXssPatternList() {

		List<Pattern> ret = new ArrayList<Pattern>();
		// Avoid anything between script tags
		ret.add(Pattern.compile("<script>(.*?)</script>", Pattern.CASE_INSENSITIVE));
		// Avoid anything in a src='...' type of expression
		ret.add(Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'",
				Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL));
		// Remove any lonesome </script> tag
		ret.add(Pattern.compile("</script>", Pattern.CASE_INSENSITIVE));
		// Remove any lonesome <script ...> tag
		ret.add(Pattern.compile("<script(.*?)>", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL));
		// Avoid eval(...) expressions
		ret.add(Pattern.compile("eval\\((.*?)\\)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL));
		// Avoid expression(...) expressions
		ret.add(Pattern.compile("expression\\((.*?)\\)",
				Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL));
		// Avoid javascript:... expressions
		ret.add(Pattern.compile("javascript:", Pattern.CASE_INSENSITIVE));
		// Avoid vbscript:... expressions
		ret.add(Pattern.compile("vbscript:", Pattern.CASE_INSENSITIVE));
		// Avoid onload= expressions
		ret.add(Pattern.compile("onload(.*?)=", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL));

		return ret;

	}

	/**
	 * 원본문자열을 받아서 XSS 공격이 예상되는 패턴을 replace 처리한 문자열을 리턴한다.<br>
	 * <br>
	 * 
	 * @param value
	 * @return
	 */
	public String filterXss(String value) {

		if (value != null) {

			boolean isDebug = LOG.isDebugEnabled() && StringUtils.isNotBlank(value);

			Matcher matcher = null;
			String regex = null;
			Integer flag = null;

			for (Pattern arr : XSS_PATTERN_LIST) {
				matcher = arr.matcher(value);
				// 해당하는 패턴이 있으면
				if (matcher.find()) {
					// 해당 문자열 제거
					value = matcher.replaceAll("");
					if (isDebug) {
						LOG.debug("XSS pattern matched => regex: " + regex + ", flag: " + flag);
					}
				}
			}

		}

		return value;
	}

}
