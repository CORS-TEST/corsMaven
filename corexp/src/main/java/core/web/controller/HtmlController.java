package core.web.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.DateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.servlet.ModelAndView;

import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.vo.model.paramset.HtmlParamSet;

public class HtmlController extends CoreController {
	private static final Log LOG = LogFactory.getLog(HtmlController.class);

	public ModelAndView commonController(HttpServletRequest request, HttpServletResponse response) throws IOException {
		CoreParamSet params = parseJsonData(request);
		String uri = request.getRequestURI();
		String service = uri.substring(uri.lastIndexOf(47) + 1, uri.length());

		if (LOG.isDebugEnabled()) {
			LOG.debug("===========================================================");
			LOG.debug("URI : " + uri);
			LOG.debug("Service class : " + service);
			LOG.debug("===========================================================");
		}
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG);
		String formattedDate = dateFormat.format(date);
		ModelAndView mav = new ModelAndView(service);
		JSONObject obj = new JSONObject(params);
		mav.addObject("parameter", obj);
		return mav;
	}

	protected CoreParamSet parseJsonData(HttpServletRequest request) {
		HtmlParamSet parameters = CoreParamSetFactory.create(HtmlParamSet.class);
		String paramKey = "";
		JSONObject obj = new JSONObject();
		try {
			request.setCharacterEncoding("UTF-8");
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		JSONParser parse = new JSONParser();
		if (!"".equals(request.getParameter("parameter")) && null != request.getParameter("parameter")) {
			paramKey = request.getParameter("parameter");
			try {
				obj = (JSONObject) parse.parse(paramKey);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			Set key = obj.keySet();
			for (Iterator iterator = key.iterator(); iterator.hasNext();) {
				String keyName = (String) iterator.next();
				Object valueName = obj.get(keyName);
				parameters.setVariable(keyName, valueName);
			}

		}
		return parameters;
	}
}
