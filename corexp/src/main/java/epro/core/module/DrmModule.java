package epro.core.module;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import core.web.module.CoreModule;

/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명 : epro.core.module DrmModule.java
 * @생성자 : mjpark
 * @생성일시 : 2017. 9. 26.
 * @구분 : DRM이 필요할시 생성, 아래 method는 꼭 유지할것
 * @최종수정자 : mjpark
 * @최종수정일시 :
 */
@Service
public class DrmModule extends CoreModule {
	private static final Log LOG = LogFactory.getLog(DrmModule.class);

	public String getDrmPath(String filePath) {
		String drmPath = "";
		return drmPath;
	}

}
