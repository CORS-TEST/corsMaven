(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_dragscrolltype("none");
                this.set_name("loginFrame");
                this.set_titletext("로그인화면");
                this._setFormPosition(0,0,1280,1024);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ORG\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ENCODE\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_COOKIE\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"AD_ID\" size=\"256\" type=\"STRING\"/><Column id=\"VERSION\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDevUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ORG\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ENCODE\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_COOKIE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ROLE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_TEAM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">100000475</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">김태의</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100000479</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">윤용균</Col><Col id=\"ROLE_NM\">부문(구매)</Col><Col id=\"ALT_TEAM\">T_0</Col></Row><Row><Col id=\"USER_ID\">100000731</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">장수아</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100000741</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">최영미</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100000755</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">구원상</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100000867</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">전충하</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100000905</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">김형근</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100000913</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">김수한</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100000939</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">정재영</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100001070</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">계근호</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100001075</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"USER_NM\">윤태석</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100001170</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"USER_NM\">김연실</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100001186</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"USER_NM\">장민혜</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100001194</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"USER_NM\">허준화</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100001379</Col><Col id=\"USER_NM\">황준혁</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100001448</Col><Col id=\"USER_NM\">이용국</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100001455</Col><Col id=\"USER_NM\">김상문</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100001699</Col><Col id=\"USER_NM\">강동우</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100001828</Col><Col id=\"USER_NM\">남언석</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100001829</Col><Col id=\"USER_NM\">채상우</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100001870</Col><Col id=\"USER_NM\">이호</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매2)</Col><Col id=\"ALT_TEAM\">T_2</Col></Row><Row><Col id=\"USER_ID\">100001886</Col><Col id=\"USER_NM\">전예호</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">100001956</Col><Col id=\"USER_NM\">최선영</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100001957</Col><Col id=\"USER_NM\">최병환</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100001958</Col><Col id=\"USER_NM\">김지혜</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100001963</Col><Col id=\"USER_NM\">김동현</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100002010</Col><Col id=\"USER_NM\">안지훈</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100002048</Col><Col id=\"USER_NM\">정현수</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100002055</Col><Col id=\"USER_NM\">윤정선</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100002095</Col><Col id=\"USER_NM\">박용준</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">팀(구매3)</Col><Col id=\"ALT_TEAM\">T_3</Col></Row><Row><Col id=\"USER_ID\">100001826</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">고영광</Col><Col id=\"ROLE_NM\">팀(구매1)</Col><Col id=\"ALT_TEAM\">T_1</Col></Row><Row><Col id=\"USER_ID\">MC1001053</Col><Col id=\"USER_NM\">김호연</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">구매본부</Col><Col id=\"ALT_TEAM\">T_0</Col></Row><Row><Col id=\"USER_ID\">MC1001138</Col><Col id=\"USER_NM\">김보람</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"ROLE_NM\">구매본부</Col><Col id=\"ALT_TEAM\">T_0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ORG\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ENCODE\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_COOKIE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">1000000013</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">백상환</Col><Col id=\"PTNR_NM\">법인에스행유통</Col><Col id=\"BIZ_NO\">1398104152</Col></Row><Row><Col id=\"USER_ID\">1000000014</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">안연미</Col><Col id=\"PTNR_NM\">법인유남엔지니어링</Col><Col id=\"BIZ_NO\">1398104128</Col></Row><Row><Col id=\"USER_ID\">1000000015</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">고호식</Col><Col id=\"BIZ_NO\">2148527866</Col><Col id=\"PTNR_NM\">법인비에스컴퍼니</Col></Row><Row><Col id=\"USER_ID\">1000000016</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">장영연</Col><Col id=\"BIZ_NO\">5022410621</Col><Col id=\"PTNR_NM\">주식회사정에이시스템</Col></Row><Row><Col id=\"USER_ID\">1000000017</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">양현도</Col><Col id=\"BIZ_NO\">2062253067</Col><Col id=\"PTNR_NM\">주식회사앤케이컴퍼니</Col></Row><Row><Col id=\"USER_ID\">1000000018</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">서연진</Col><Col id=\"BIZ_NO\">1048618747</Col><Col id=\"PTNR_NM\">법인가삼네트웍스</Col></Row><Row><Col id=\"USER_ID\">1000000019</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">양준남</Col><Col id=\"BIZ_NO\">1051796018</Col><Col id=\"PTNR_NM\">법인에이물산</Col></Row><Row><Col id=\"USER_ID\">1000000020</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">손정빈</Col><Col id=\"BIZ_NO\">1068633050</Col><Col id=\"PTNR_NM\">(주)청경물산</Col></Row><Row><Col id=\"USER_ID\">1000000021</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">신성남</Col><Col id=\"BIZ_NO\">1028127250</Col><Col id=\"PTNR_NM\">법인삼앤시스템</Col></Row><Row><Col id=\"USER_ID\">1000000022</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">조재혜</Col><Col id=\"PTNR_NM\">주식회사가정컴퍼니</Col><Col id=\"BIZ_NO\">1170645990</Col></Row><Row><Col id=\"USER_ID\">1000000023</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">오후자</Col><Col id=\"PTNR_NM\">(주)우케이컴퍼니</Col><Col id=\"BIZ_NO\">1048104200</Col></Row><Row><Col id=\"USER_ID\">1000000024</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">신우자</Col><Col id=\"PTNR_NM\">법인비비시스템</Col><Col id=\"BIZ_NO\">1328193654</Col></Row><Row><Col id=\"USER_ID\">1000000025</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">손아상</Col><Col id=\"PTNR_NM\">주식회사비광스포츠</Col><Col id=\"BIZ_NO\">1408184699</Col></Row><Row><Col id=\"USER_ID\">1000000026</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">문수유</Col><Col id=\"PTNR_NM\">(주)경경컴퍼니</Col><Col id=\"BIZ_NO\">1138693852</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPurUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ORG\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ENCODE\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_COOKIE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ROLE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PSTN\" size=\"256\" type=\"STRING\"/><Column id=\"SL_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">B_SHPARK</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">박성혜</Col><Col id=\"ROLE_NM\">시스템관리자</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"SL_NM\">관리팀</Col><Col id=\"PSTN\">과장</Col></Row><Row><Col id=\"USER_ID\">B_HIYOON</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">윤현일</Col><Col id=\"ROLE_NM\">웹마스터</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"PSTN\">대리</Col><Col id=\"SL_NM\">관리팀</Col></Row><Row><Col id=\"USER_ID\">B_HHLIM</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">임현혜</Col><Col id=\"ROLE_NM\">구매담당자</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"SL_NM\">구매팀</Col><Col id=\"PSTN\">사원</Col></Row><Row><Col id=\"USER_ID\">B_JILIM</Col><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_NM\">임재일</Col><Col id=\"ROLE_NM\">구매담당자</Col><Col id=\"USER_PW_ENCODE\"/><Col id=\"ALT_COOKIE\"/><Col id=\"SL_NM\">구매팀</Col><Col id=\"PSTN\">대리</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_AISONG</Col><Col id=\"SL_NM\">구매팀</Col><Col id=\"USER_NM\">송아일</Col><Col id=\"ROLE_NM\">구매담당자</Col><Col id=\"PSTN\">과장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_WSHONG</Col><Col id=\"SL_NM\">구매팀</Col><Col id=\"USER_NM\">홍우상</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">차장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_JKMOON</Col><Col id=\"SL_NM\">구매팀</Col><Col id=\"USER_NM\">문중공</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">팀장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_SYSON</Col><Col id=\"SL_NM\">경영지원팀</Col><Col id=\"USER_NM\">손승영</Col><Col id=\"ROLE_NM\">품목담당자</Col><Col id=\"PSTN\">대리</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_MNHAN</Col><Col id=\"SL_NM\">경영지원팀</Col><Col id=\"USER_NM\">한민남</Col><Col id=\"ROLE_NM\">품목담당자</Col><Col id=\"PSTN\">과장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_JCHONG</Col><Col id=\"SL_NM\">경영지원팀</Col><Col id=\"USER_NM\">홍진철</Col><Col id=\"PSTN\">팀장</Col><Col id=\"ROLE_NM\">일반사용자</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_JWBAEK</Col><Col id=\"SL_NM\">경리부(회계)</Col><Col id=\"USER_NM\">백지원</Col><Col id=\"ROLE_NM\">회계담당자</Col><Col id=\"PSTN\">사원</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_HSJANG</Col><Col id=\"SL_NM\">경리부(회계)</Col><Col id=\"USER_NM\">장후식</Col><Col id=\"ROLE_NM\">회계담당자</Col><Col id=\"PSTN\">대리</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_GBSONG</Col><Col id=\"SL_NM\">경리부(회계)</Col><Col id=\"USER_NM\">송건병</Col><Col id=\"ROLE_NM\">회계담당자</Col><Col id=\"PSTN\">과장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_JHLIM</Col><Col id=\"SL_NM\">경리부(회계)</Col><Col id=\"USER_NM\">임준희</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">팀장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_HINAM</Col><Col id=\"SL_NM\">인사팀</Col><Col id=\"USER_NM\">남호일</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">사원</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_HSSIN</Col><Col id=\"SL_NM\">인사팀</Col><Col id=\"USER_NM\">신후성</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">대리</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_JNJANG</Col><Col id=\"SL_NM\">인사팀</Col><Col id=\"USER_NM\">장중남</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">팀장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_YJMOON</Col><Col id=\"SL_NM\">홍보실</Col><Col id=\"USER_NM\">문연정</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">대리</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_ASSIN</Col><Col id=\"SL_NM\">홍보실</Col><Col id=\"USER_NM\">신아순</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">과장</Col></Row><Row><Col id=\"USER_PW_ORG\">dlvldptm</Col><Col id=\"USER_ID\">B_HSSEO</Col><Col id=\"SL_NM\">홍보실</Col><Col id=\"USER_NM\">서현식</Col><Col id=\"ROLE_NM\">일반사용자</Col><Col id=\"PSTN\">팀장</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCommCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM34", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM_LO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD_ID\">CM34KR</Col><Col id=\"CD_NM_LO\">한국어</Col></Row><Row><Col id=\"CD_ID\">CM34EN</Col><Col id=\"CD_NM_LO\">ENGLISH</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLabel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSso", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"AD_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM_LO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM_LO\">전체</Col><Col id=\"CD_ID\"/></Row><Row><Col id=\"CD_NM_LO\">구매</Col><Col id=\"CD_ID\">T_0</Col></Row><Row><Col id=\"CD_NM_LO\">구매1팀</Col><Col id=\"CD_ID\">T_1</Col></Row><Row><Col id=\"CD_NM_LO\">구매2팀</Col><Col id=\"CD_ID\">T_2</Col></Row><Row><Col id=\"CD_NM_LO\">구매3팀</Col><Col id=\"CD_ID\">T_3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divCenter", "absolute", "25.78%", "114", "488", "377", null, null, this);
            obj.style.setStyleValue("background", "focused", "transparent");
            obj.set_taborder("9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Edit("edtId", "absolute", "32", "126", "295", "35", null, null, this.divCenter);
            obj.set_imemode("alpha");
            obj.set_inputtype("number,english,sign,symbol");
            obj.getSetter("objNm").set("아이디");
            obj.style.set_background("#ffffffff URL('theme://images/img_login_id.png')");
            obj.style.set_padding("5 10 3 60");
            obj.set_taborder("105");
            this.divCenter.addChild(obj.name, obj);
            obj = new Edit("edtPwd", "absolute", "32", "166", "295", "35", null, null, this.divCenter);
            obj.getSetter("objNm").set("비밀번호");
            obj.set_password("true");
            obj.style.set_background("#ffffffff URL('theme://images/img_login_pw.png')");
            obj.style.set_color("black");
            obj.style.set_padding("5 10 3 60");
            obj.set_taborder("106");
            obj.set_value("dlvldptm");
            this.divCenter.addChild(obj.name, obj);
            obj = new Button("btnLogin", "absolute", "336", "126", "140", "75", null, null, this.divCenter);
            obj.set_cssclass("btn_MF_login");
            obj.getSetter("objNm").set("로그인");
            obj.style.set_background("gray");
            obj.set_taborder("107");
            obj.set_text("Login");
            this.divCenter.addChild(obj.name, obj);
            obj = new CheckBox("chkIdSave", "absolute", "32", "213", "136", "21", null, null, this.divCenter);
            obj.getSetter("objNm").set("아이디 저장");
            obj.style.set_color("#8d7865ff");
            obj.set_taborder("108");
            obj.set_text("ID Save");
            this.divCenter.addChild(obj.name, obj);
            obj = new Button("btnIdFind", "absolute", "181", "213", "146", "25", null, null, this.divCenter);
            obj.getSetter("objNm").set("아이디/비밀번호 찾기");
            obj.set_taborder("109");
            obj.set_text("Forgot ID/PW");
            this.divCenter.addChild(obj.name, obj);
            obj = new Button("btnNewDealReq", "absolute", "334", "213", "142", "25", null, null, this.divCenter);
            obj.getSetter("objNm").set("구매절차");
            obj.set_taborder("110");
            obj.set_text("New Request");
            this.divCenter.addChild(obj.name, obj);
            obj = new ImageViewer("imvLogo", "absolute", "0%", "6", null, "112", "0", null, this.divCenter);
            obj.set_image("URL('theme://images/main_coreXp.png')");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.set_taborder("112");
            this.divCenter.addChild(obj.name, obj);
            obj = new Combo("cbLangCd", "absolute", "181", "242", "145", "25", null, null, this.divCenter);
            this.divCenter.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM34");
            obj.style.set_align("left middle");
            obj.set_taborder("113");
            obj = new Static("staCbLangCd", "absolute", "6.56%", "242", null, "25", "66.19%", null, this.divCenter);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("1 0 0 0");
            obj.set_taborder("114");
            obj.set_text("Language Select");
            this.divCenter.addChild(obj.name, obj);
            obj = new Button("btnChangeRequest", "absolute", "334", "242", "142", "25", null, null, this.divCenter);
            obj.getSetter("objNm").set("ChargeRequest");
            obj.set_taborder("115");
            obj.set_text("Change Request");
            this.divCenter.addChild(obj.name, obj);
            obj = new Static("staCopyright01", "absolute", "32", "298", "444", "21", null, null, this.divCenter);
            obj.getSetter("objNm").set("");
            obj.set_taborder("117");
            obj.set_text("Copyright  Cheong O Ram System. All rights reserved.");
            this.divCenter.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "32", "271", "286", "25", null, null, this.divCenter);
            obj.set_cssclass("sta_WF_maintit1");
            obj.style.set_align("left bottom");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("119");
            obj.set_text("시스템 사용 문의");
            this.divCenter.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "37.5%", "272", null, "25", "2.25%", null, this.divCenter);
            this.divCenter.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.divCenter.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[선택]</Col></Row><Row><Col id=\"codecolumn\">PURCHASE</Col><Col id=\"datacolumn\">구매담당자</Col></Row><Row><Col id=\"codecolumn\">SYSTEM</Col><Col id=\"datacolumn\">시스템담당자</Col></Row><Row><Col id=\"codecolumn\">EBHAN</Col><Col id=\"datacolumn\">한의봉</Col></Row><Row><Col id=\"codecolumn\">SMAN</Col><Col id=\"datacolumn\">안성민</Col></Row><Row><Col id=\"codecolumn\">1000000013</Col><Col id=\"datacolumn\">법인에스행유통</Col></Row><Row><Col id=\"codecolumn\">1000000014</Col><Col id=\"datacolumn\">법인유남엔지니어링</Col></Row><Row><Col id=\"codecolumn\">1000000015</Col><Col id=\"datacolumn\">법인비에스컴퍼니</Col></Row><Row><Col id=\"codecolumn\">1000000016</Col><Col id=\"datacolumn\">주식회사정에이시스템</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("120");
            obj.set_text("Combo00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1244, 634, this.divCenter,
            	//-- Layout function
            	function(p) {
            		p.style.setStyleValue("background", "focused", "transparent");
            		p.set_taborder("9");
            		p.set_visible("true");

            	}
            );
            this.divCenter.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1280, 1024, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Login");
            		p.set_dragscrolltype("none");
            		p.set_titletext("로그인화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","divCenter.cbLangCd","value","dsUser","LANG_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divCenter.edtId","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divCenter.edtPwd","value","dsUser","USER_PW_ORG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divCenter.chkIdSave","value","dsUser","ALT_COOKIE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divCenter.Combo00","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("loginFrame.xfdl", function(exports) {
        /**
         * @파일명       	: loginFrame.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017.11.07.
         * @설명			: 로그인
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017.11.07.
        */ 

        
        this.cdVer = "";
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"CM34", sFiltered:"S:KR,EN"}	//언어셋
        				];

        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnOnLoad
          * @desc     	: 폼 onload 이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	if(system.navigatorname != "nexacro"){
        		//최초 접속페이지 대기 이미지 처리 배포시 사용할 것. (브라우저에서 볼 때만 적용)		
        		

        		/*
        		1. Generate 후 생성되는 ../COR5/index.html 아래 펑션 추가 후 div id의 loadingImg 만들기
        		
         		function hideImage(){
         			 document.getElementById('loadingImg').style.display="none";
         		}
         		
         		2. index.html 스크립트 호출시 defer 속성 추가.
         		<script type="text/javascript" src="./nexacro14lib/framework/SystemBase.js" defer></script>
         		
         		3. 아래 hideImage() 주석 풀것.
         		
         		*/
         		
        		//hideImage();
        	}
        	application.set_httpretry(0);
        	application.set_httptimeout(600);
        	this.fnCenterPosition()
        	
        	var nRow = this.dsUser.addRow();
        	this.dsUser.setColumn(0,"USER_PW_ORG","0000");
        	this.dsUser.setColumn(0,"USER_ID","");
        	
        	if(!gfnIsNull(application.getPrivateProfile("USER_ID"))){
        		this.dsUser.setColumn(nRow, "USER_ID", application.getPrivateProfile("USER_ID"));
        		this.dsUser.setColumn(0,"ALT_COOKIE","1");
        	}
        	
        	if(!gfnIsNull(application.getPrivateProfile("LANG_CD"))){
        		this.dsUser.setColumn(nRow, "LANG_CD", application.getPrivateProfile("LANG_CD"));
        	}else{
        		this.dsUser.setColumn(nRow, "LANG_CD","CM34KR");
        	}
        	 	
        	this.cdVer = application.gdsCommCd.getConstColumn("VERSION");
         	
         	//this.fnSso();
        	//this.fnCheckVersion();
        	this.fnReadAllCodeAndLabel();
        }

        /**
          * @함수명	: fnGdsFileRead
          * @desc     	: 파일여부와 버전체크
          */
        this.fnGdsFileRead = function(){
        	var labelXml = application.getPrivateProfile("_gdsLabel");
        	var cdXml = application.getPrivateProfile("_gdsCommCd");
        	if(gfnIsNull(labelXml)||gfnIsNull(cdXml)){
        		return false;
        	}else{
        		this.dsCommCd.loadXML(nexacro.stripQuote(nexacro.replaceAll(cdXml,"&quot;","'")));		
        		var dsCV = this.dsCommCd.getConstColumn("VERSION");
        		
        		var gdsCV =  application.gdsCommCd.getConstColumn("VERSION");
        		if(gfnIsNull(dsCV)||gfnIsNull(gdsCV)||(dsCV!=gdsCV)){
        			return false;
        		}else{
        			return true;
        		}
        	}
        }

        /**
          * @함수명	: fnCheckVersion
          * @desc     	: 코드 및 리소스 버전체크
        	@step		: 저장위치에 파일있는지 체크
        					파일있으면 읽어와 gdsCommCd,gdsLabel 버전비교
        					버전일치할시 파일을 읽어 채움
        					버전불일치시 DB에서 가져옴
        				  파일없으면 DB에서 가져오고 파일 write  
          */
        this.fnCheckVersion = function(){
        	//쿠키파일존재,version일치
        	if(this.fnGdsFileRead()){
        		this.fnSetRsrcGlobalDataset(); 			
        	}else{	//파일이 존재하지 않거나 version이 불일치
        		this.fnReadAllCodeAndLabel();
        	}	
        }

        /**
          * @함수명	: fnSetRsrcGlobalDataset
          * @desc     	: gdsLabel, gdsCommCd 언어 세팅.
          */
        this.fnSetRsrcGlobalDataset = function(){
        	var selectedLangCd = application.gdsUserInfo.getColumn(0, "LANG_CD");
        	if(gfnIsNull(selectedLangCd)||application.gdsUserInfo.getColumn(0,"INT_USER_TYPE")=="S"){
        		selectedLangCd = this.dsUser.getColumn(0,"LANG_CD");
        	}
        	
        	var nRow = this.dsLabel.findRow("CD_ID", selectedLangCd);
        	application.gdsLabel.loadXML(nexacro.replaceAll(nexacro.replaceAll(this.dsLabel.getColumn(nRow, "LABEL_STR"),"▨","<"),"▧",">"));
        	this.dsCommCd.set_enableevent(false);
        	this.dsCommCd.filter("LANG_CD == '"+selectedLangCd+"'");
        	application.gdsCommCd.copyData(this.dsCommCd, true);
        	this.dsCommCd.set_enableevent(true);
        	
        	//application.gdsCommCd.addConstColumn("VERSION");
        	//application.gdsCommCd.setConstColumn("VERSION",this.cdVer);
        }

        this.fnDsEncode = function(){
        	for(var i=0;i<this.dsLabel.getRowCount();i++){
        		this.dsLabel.setColumn(i,"LABEL_STR",nexacro.replaceAll(nexacro.replaceAll(this.dsLabel.getColumn(i,"LABEL_STR"),"<","▨"),">","▧"));
        	}
        }
        this.fnDsDecode = function(){
        	for(var i=0;i<this.dsLabel.getRowCount();i++){
        		this.dsLabel.setColumn(i,"LABEL_STR",nexacro.replaceAll(nexacro.replaceAll(this.dsLabel.getColumn(i,"LABEL_STR"),"▨","<"),"▧",">"));
        	}
        }
        /**
          * @함수명	: fnGdsFileWrite
          * @desc     	: 쿠키파일생성
          */
        this.fnGdsFileWrite = function(){
        	this.dsCommCd.addConstColumn("VERSION");
        	this.dsCommCd.setConstColumn("VERSION",this.cdVer);
        	application.setPrivateProfile("_gdsLabel", nexacro.wrapQuote(this.dsLabel.saveXML()));
        	application.setPrivateProfile("_gdsCommCd", nexacro.wrapQuote(this.dsCommCd.saveXML()));
        }

        this.fnSso = function()
        {
        	var sSvcID = "ssoSession";
        	var sController = "epro.com.service.CLoginService.ssoSession";
        	var sInDatasets = "dsUser=dsUser";
        	var sOutDatasets = "dsSso=dsSso dsPtnrUserInfo=dsPtnrUserInfo";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
          * @함수명	: fnReadAllCodeAndLabel
          * @desc     	: 코드 및 리소스 조회
          */
        this.fnReadAllCodeAndLabel = function()
        {
        	var sSvcID = "searchComAllCodesLabel";
        	var sController = "epro.com.service.CLoginService.searchComAllCodesLabel";
        	var sInDatasets = "dsUser=dsUser";
        	var sOutDatasets = "dsCommCd=dsCommCd dsLabel=dsLabel";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnLoginFrameOnsize
          * @desc     	: 폼 onsize 이벤트
          */
        this.fnLoginFrameOnsize = function(obj,e)
        {
        	this.fnCenterPosition();
        }

        /**
          * @함수명	: fnCenterPosition
          * @desc     	: 화면 중앙으로 세팅
          */
        this.fnCenterPosition = function()
        {
        	this.divCenter.set_left((this.width - this.divCenter.width) / 2);
        	this.divCenter.set_top((this.height - this.divCenter.height) / 2);
        }

        /**
          * @함수명	: fnLogin
          * @desc     	: 로그인
          */
        this.fnLogin = function()
        {
        	if(gfnIsNull(this.dsUser.getColumn(0, "USER_ID"))){		
        		gfnAlert("Enter Login ID");
        		return;
        	}
        	
        	if(gfnIsNull(this.dsUser.getColumn(0, "USER_PW_ORG"))){
        		gfnAlert("Enter Password");
        		return;
        	}
        		
        	var sSvcID = "saveComLogin";
        	var sController = "epro.com.service.CLoginService.saveComLogin";
        	var sInDatasets = "dsUser=dsUser";
        	var sOutDatasets = "gdsUserInfo=gdsUserInfo gdsMenu=gdsMenu gdsUserRole=gdsUserRole"
        	var sCallbackFunc = "fnTrCallBack";

        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)return;
        	
        	switch(strSvcID){
        		case "ssoSession":
        			alert(1);
        		break;
        	
        		case "searchComAllCodesLabel" :		
        			this.fnDsEncode(this.dsLabel);
        			//this.fnGdsFileWrite();
        			this.fnSetRsrcGlobalDataset(); 			
        		break;
        		
        		case "saveComLogin" :
        			if(application.gdsUserInfo.getColumn(0, "INT_USER_TYPE") == "B"){	
        				application.gv_mainFormUrl = "frame::MainPotal_BBID.xfdl";
        				application.gdsCommCd.setConstColumn("VERSION",application.gdsUserInfo.getColumn(0,"VERSION"));
        				this.cdVer = application.gdsUserInfo.getColumn(0,"VERSION");
        				
        				this.fnCheckVersion();
        			}else if(application.gdsUserInfo.getColumn(0, "INT_USER_TYPE") == "S"){
        				application.gv_mainFormUrl = "frame::MainPotal_SBID.xfdl";
        			}
        			
        			if(this.dsUser.getColumn(0,"ALT_COOKIE")!=1){ 
        				this.dsUser.setColumn(0,"USER_ID",'');
        			}

        			this.dsUser.setColumn(0,"USER_PW_ORG",'');
        			application.gv_topFrame.set_formurl("frame::topFrame.xfdl");
        			application.gv_bottomFrame.set_formurl("frame::bottomFrame.xfdl");
        			application.gv_leftFrame.set_formurl("frame::leftFrame.xfdl");
        			application.gv_tabFrame.set_formurl("frame::tabFrame.xfdl");
        			application.gv_mainForm.set_formurl(application.gv_mainFormUrl);
        			application.gv_hFrameSet.set_separatesize("30,*");
        			application.gv_vFrameSet0.set_separatesize("30,0,*");
        			application.gv_vFrameSet.set_separatesize("54,*,30,0");

        		break;

        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnUserIdSave
          * @desc     	: 사용자 아이디 저장
          */  
        this.fnUserIdSave = function(obj,e)
        {
        	if(gfnIsNull(this.dsUser.getColumn(0,"USER_ID"))) return;
        	if(obj.value=="1"){
        		application.setPrivateProfile("USER_ID", this.dsUser.getColumn(0,"USER_ID"));
        	}else{
        		application.setPrivateProfile("USER_ID", "");
        	}
        }

        /**
          * @함수명	: fnIdPwSearch
          * @desc     	: 아이디_비밀번호 찾기
          */  
        this.fnIdPwSearch = function(obj,e)
        {
        	var sArg = {};
        	gfnModalPop(this, "SPtnrIdPw", "CPOP::SPtnrIdPw.xfdl", sArg, "fnPopCallBack", 460,370);
        }

        /**
          * @함수명	: fnOnkeydown
          * @desc     	: 비밀번호 입력 후 엔터 누르면 로그인 시도.
          */  
        this.fnOnkeydown = function(obj,e)
        {	
        	if(e.keycode == "13"){ 
        		obj.updateToDataset();
        		this.fnLogin();
        	}
        }

        /**
          * @함수명	: fnPtnrReq
          * @desc     	: 신규거래신청
          */
        this.fnPtnrReq = function(obj,e)
        {	
        	var sArg = {};
        	gfnModalPop(this, "SPtnrReq", "CPOP::SPtnrReq.xfdl", sArg, "fnPopCallBack", 405, 250);
        }

        /**
          * @함수명	: fnPtnrCr
          * @desc     	: 신규거래신청
          */
        this.fnPtnrCr = function(obj,e)
        {	
        	var sArg = {};
        	gfnModalPop(this, "SPtnrCr", "SPTNR::SPtnrChargeRequestPopup.xfdl", sArg, "fnPopCallBack", 440, 140);
        }

        /**
          * @함수명	: fnPopCallBack
          * @desc     	: 팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {	
        	switch(sPopupId){
        		case "SPtnrReq" :
        			if(!gfnIsNull(rtn)){
        				/*
        				rtn : Personal	개인 가입
        				rtn : Biz		사업자 가입
        				rtn : Foreign	해외 가입				
        				*/
        				
        				if(rtn == "Foreign") {
        					gfnSetTmprData("bizType", "Foreign");
        				}
        				else if(rtn == "Biz") {
        					gfnSetTmprData("bizType", "Biz");
        				}
        				application.gv_loginFrame.set_formurl("SPTNR::SPtnrReqDetail.xfdl");
        				
        			}
        		break;
        			
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: divCenter_cbLangCd_onitemchanged
          * @desc     	: 랭기지 선택시 이벤트
          */
        this.divCenter_cbLangCd_onitemchanged = function(obj,e)
        {
        	if(gfnIsNull(this.dsUser.getColumn(0,"LANG_CD"))) return;
        	application.setPrivateProfile("LANG_CD", this.dsUser.getColumn(0,"LANG_CD"));
        	this.fnSetRsrcGlobalDataset();
        }

        this.divCenter_Combo00_onitemchanged = function(obj,e)
        {
        	this.dsUser.setColumn(0,"USER_PW_ORG","0000");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick", this.loginFrame_onclick, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.addEventHandler("onsize", this.fnLoginFrameOnsize, this);
            this.divCenter.edtId.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.divCenter.edtPwd.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.divCenter.btnLogin.addEventHandler("onclick", this.fnLogin, this);
            this.divCenter.chkIdSave.addEventHandler("onclick", this.fnUserIdSave, this);
            this.divCenter.btnIdFind.addEventHandler("onclick", this.fnIdPwSearch, this);
            this.divCenter.btnNewDealReq.addEventHandler("onclick", this.fnPtnrReq, this);
            this.divCenter.cbLangCd.addEventHandler("onitemchanged", this.divCenter_cbLangCd_onitemchanged, this);
            this.divCenter.btnChangeRequest.addEventHandler("onclick", this.fnPtnrCr, this);
            this.divCenter.Combo00.addEventHandler("onitemchanged", this.divCenter_Combo00_onitemchanged, this);

        };

        this.loadIncludeScript("loginFrame.xfdl", true);

       
    };
}
)();
