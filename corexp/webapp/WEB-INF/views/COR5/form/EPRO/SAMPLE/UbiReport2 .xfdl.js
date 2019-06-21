﻿(function()
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
                this.set_name("UbiReport");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTID\" type=\"string\" size=\"255\"/><Column id=\"DETAILCATEGORYID\" type=\"string\" size=\"255\"/><Column id=\"COMPANY\" type=\"string\" size=\"255\"/><Column id=\"MODELNAME\" type=\"string\" size=\"255\"/><Column id=\"UNITCOST\" type=\"string\" size=\"22\"/><Column id=\"DESCRIPTION\" type=\"string\" size=\"255\"/><Column id=\"DISCOUNTRATE\" type=\"string\" size=\"6\"/></ColumnInfo><Rows><Row><Col id=\"PRODUCTID\">1</Col><Col id=\"DETAILCATEGORYID\">DE3</Col><Col id=\"COMPANY\">KUS</Col><Col id=\"MODELNAME\">하우젠 SEW-3HW124</Col><Col id=\"UNITCOST\">690900.0</Col><Col id=\"DESCRIPTION\">세탁10KG/건조X/삶는세탁/냉온수겸용/1200rpm/화이트</Col><Col id=\"DISCOUNTRATE\">5</Col></Row><Row><Col id=\"PRODUCTID\">10</Col><Col id=\"DETAILCATEGORYID\">DE3</Col><Col id=\"COMPANY\">KUS</Col><Col id=\"MODELNAME\">공기방울 DWF-558W</Col><Col id=\"UNITCOST\">238000.0</Col><Col id=\"DESCRIPTION\">5.5kg/세탁코스5/저진동저소음/컴팩트디자인/라이트그레이</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">100</Col><Col id=\"DETAILCATEGORYID\">DE16</Col><Col id=\"COMPANY\">IC 시스템</Col><Col id=\"MODELNAME\">IR-2105C</Col><Col id=\"UNITCOST\">26510000.0</Col><Col id=\"DESCRIPTION\">컬러/21cpm/A3/연속999매</Col></Row><Row><Col id=\"PRODUCTID\">101</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">IC 시스템</Col><Col id=\"MODELNAME\">무선 미니 CIR-9000</Col><Col id=\"UNITCOST\">28000.0</Col><Col id=\"DESCRIPTION\">무선 멤브레인</Col></Row><Row><Col id=\"PRODUCTID\">102</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">IC 시스템</Col><Col id=\"MODELNAME\">무선 트랙볼 SEM-CR</Col><Col id=\"UNITCOST\">42000.0</Col><Col id=\"DESCRIPTION\">무선 멤브레인</Col></Row><Row><Col id=\"PRODUCTID\">103</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">무선 키보드 트랙볼 PS/2 블랙</Col><Col id=\"UNITCOST\">47000.0</Col><Col id=\"DESCRIPTION\">무선 멤브레인</Col></Row><Row><Col id=\"PRODUCTID\">104</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">ARON ZOOM KB-A106S 블랙 기계식</Col><Col id=\"UNITCOST\">45000.0</Col><Col id=\"DESCRIPTION\">유선 기계식</Col><Col id=\"DISCOUNTRATE\">30</Col></Row><Row><Col id=\"PRODUCTID\">105</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">ARON ZOOM KB-A106S 블랙 기계식 넌클릭</Col><Col id=\"UNITCOST\">48000.0</Col><Col id=\"DESCRIPTION\">유선 기계식</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">106</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">103KEY PS/2 기계식</Col><Col id=\"UNITCOST\">62000.0</Col><Col id=\"DESCRIPTION\">유선 기계식</Col></Row><Row><Col id=\"PRODUCTID\">107</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">KB-21</Col><Col id=\"UNITCOST\">12000.0</Col><Col id=\"DESCRIPTION\">유선 멤브레인</Col><Col id=\"DISCOUNTRATE\">30</Col></Row><Row><Col id=\"PRODUCTID\">108</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">KBS-6</Col><Col id=\"UNITCOST\">6000.0</Col><Col id=\"DESCRIPTION\">유선 멤브레인</Col></Row><Row><Col id=\"PRODUCTID\">109</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">Absolute Thin</Col><Col id=\"UNITCOST\">5000.0</Col><Col id=\"DESCRIPTION\">유선 멤브레인</Col></Row><Row><Col id=\"PRODUCTID\">11</Col><Col id=\"DETAILCATEGORYID\">DE3</Col><Col id=\"COMPANY\">드림 라이즈</Col><Col id=\"MODELNAME\">수중강타 SEW-3G102S</Col><Col id=\"UNITCOST\">401000.0</Col><Col id=\"DESCRIPTION\">세탁10KG/파워매직필터/저소음모터/낭비방지세탁조/은모래색</Col></Row><Row><Col id=\"PRODUCTID\">110</Col><Col id=\"DETAILCATEGORYID\">DE7</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">ARON ZOOM II 인체공학 키보드</Col><Col id=\"UNITCOST\">9000.0</Col><Col id=\"DESCRIPTION\">유선 멤브레인</Col></Row><Row><Col id=\"PRODUCTID\">111</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">하이싱크 563N</Col><Col id=\"UNITCOST\">152000.0</Col><Col id=\"DESCRIPTION\">15인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">112</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">샘트론 57E</Col><Col id=\"UNITCOST\">139000.0</Col><Col id=\"DESCRIPTION\">15인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">113</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">v570</Col><Col id=\"UNITCOST\">155000.0</Col><Col id=\"DESCRIPTION\">15인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">114</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">FS7550</Col><Col id=\"UNITCOST\">235000.0</Col><Col id=\"DESCRIPTION\">17인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">115</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">S7500</Col><Col id=\"UNITCOST\">219000.0</Col><Col id=\"DESCRIPTION\">17인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">116</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">TG 7701G</Col><Col id=\"UNITCOST\">145000.0</Col><Col id=\"DESCRIPTION\">17인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">117</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">TG 7702SP</Col><Col id=\"UNITCOST\">145000.0</Col><Col id=\"DESCRIPTION\">17인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">118</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">17FS</Col><Col id=\"UNITCOST\">148000.0</Col><Col id=\"DESCRIPTION\">17인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">119</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">17FU</Col><Col id=\"UNITCOST\">162000.0</Col><Col id=\"DESCRIPTION\">17인치 평면 모니터</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">12</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">디오스 R-S684NHJ</Col><Col id=\"UNITCOST\">1138000.0</Col><Col id=\"DESCRIPTION\">676리터/홈바형/냉동248L/균일냉각/카프리베이지/초대형사이즈/10년A/S/반품가능</Col></Row><Row><Col id=\"PRODUCTID\">120</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">DDR</Col><Col id=\"MODELNAME\">마젤란 730ED</Col><Col id=\"UNITCOST\">157000.0</Col><Col id=\"DESCRIPTION\">17인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">121</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">MAN</Col><Col id=\"MODELNAME\">DynaFlat 77DF</Col><Col id=\"UNITCOST\">176000.0</Col><Col id=\"DESCRIPTION\">17인치 평면 모니터</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">122</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">MAN</Col><Col id=\"MODELNAME\">P930</Col><Col id=\"UNITCOST\">510000.0</Col><Col id=\"DESCRIPTION\">19인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">123</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">MAX</Col><Col id=\"MODELNAME\">D990</Col><Col id=\"UNITCOST\">243000.0</Col><Col id=\"DESCRIPTION\">19인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">124</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">MAX</Col><Col id=\"MODELNAME\">Accuvision 920P</Col><Col id=\"UNITCOST\">218000.0</Col><Col id=\"DESCRIPTION\">19인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">125</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">BLACK</Col><Col id=\"MODELNAME\">19S</Col><Col id=\"UNITCOST\">208000.0</Col><Col id=\"DESCRIPTION\">19인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">126</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">SAN</Col><Col id=\"MODELNAME\">PBM-1900DF</Col><Col id=\"UNITCOST\">200000.0</Col><Col id=\"DESCRIPTION\">19인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">127</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">SAN</Col><Col id=\"MODELNAME\">109B5</Col><Col id=\"UNITCOST\">250000.0</Col><Col id=\"DESCRIPTION\">19인치 평면 모니터</Col><Col id=\"DISCOUNTRATE\">25</Col></Row><Row><Col id=\"PRODUCTID\">128</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">SAM</Col><Col id=\"MODELNAME\">109P4</Col><Col id=\"UNITCOST\">386000.0</Col><Col id=\"DESCRIPTION\">19인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">129</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">마젤란 930D</Col><Col id=\"UNITCOST\">238000.0</Col><Col id=\"DESCRIPTION\">19인치 평면 모니터</Col><Col id=\"DISCOUNTRATE\">25</Col></Row><Row><Col id=\"PRODUCTID\">13</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">ECR-GD960R1</Col><Col id=\"UNITCOST\">356000.0</Col><Col id=\"DESCRIPTION\">화장품냉장고/9.6L/챠빌/열전소자반도체냉각/국내최초화장품냉장고/반품가능</Col></Row><Row><Col id=\"PRODUCTID\">130</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">P1130</Col><Col id=\"UNITCOST\">1130000.0</Col><Col id=\"DESCRIPTION\">21인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">131</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">싱크마스터매직 CM219C</Col><Col id=\"UNITCOST\">774000.0</Col><Col id=\"DESCRIPTION\">21인치 모니터</Col></Row><Row><Col id=\"PRODUCTID\">132</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">G210</Col><Col id=\"UNITCOST\">762000.0</Col><Col id=\"DESCRIPTION\">21인치 모니터</Col><Col id=\"DISCOUNTRATE\">30</Col></Row><Row><Col id=\"PRODUCTID\">133</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">FlexScan T965</Col><Col id=\"UNITCOST\">1324000.0</Col><Col id=\"DESCRIPTION\">21인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">134</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">싱크마스터 2200DF</Col><Col id=\"UNITCOST\">847000.0</Col><Col id=\"DESCRIPTION\">21인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">135</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">싱크마스터 2200NF</Col><Col id=\"UNITCOST\">1238000.0</Col><Col id=\"DESCRIPTION\">22인치 평면 모니터</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">136</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">싱크마스터매직 CPN22NF</Col><Col id=\"UNITCOST\">1289000.0</Col><Col id=\"DESCRIPTION\">22인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">137</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">202P</Col><Col id=\"UNITCOST\">751000.0</Col><Col id=\"DESCRIPTION\">22인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">138</Col><Col id=\"DETAILCATEGORYID\">DE6</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">GDM-FW900</Col><Col id=\"UNITCOST\">3013000.0</Col><Col id=\"DESCRIPTION\">24인치 평면 모니터</Col></Row><Row><Col id=\"PRODUCTID\">139</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">Dot Stylus LQ-2080HD</Col><Col id=\"UNITCOST\">600000.0</Col><Col id=\"DESCRIPTION\">DOT 프린터</Col></Row><Row><Col id=\"PRODUCTID\">14</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">디오스 R-S684GZS</Col><Col id=\"UNITCOST\">980000.0</Col><Col id=\"DESCRIPTION\">676리터/베이직형/냉동248L/균일냉각/럭셔리티타늄</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">140</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">DOT JP-6600</Col><Col id=\"UNITCOST\">1595000.0</Col><Col id=\"DESCRIPTION\">DOT 프린터</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">141</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">BJC-55 노트북용 프린터</Col><Col id=\"UNITCOST\">257000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col><Col id=\"DISCOUNTRATE\">15</Col></Row><Row><Col id=\"PRODUCTID\">142</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">BJC-5500K</Col><Col id=\"UNITCOST\">626000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">143</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">BJC-S200SPX</Col><Col id=\"UNITCOST\">47000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col></Row><Row><Col id=\"PRODUCTID\">144</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">i255</Col><Col id=\"UNITCOST\">68000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col></Row><Row><Col id=\"PRODUCTID\">145</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">Stylus C82</Col><Col id=\"UNITCOST\">102000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">146</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">Stylus Photo 1290</Col><Col id=\"UNITCOST\">700000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col></Row><Row><Col id=\"PRODUCTID\">147</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">Business InkJet 3000</Col><Col id=\"UNITCOST\">671000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col></Row><Row><Col id=\"PRODUCTID\">148</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">DeskJet 450Cbi</Col><Col id=\"UNITCOST\">320000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col></Row><Row><Col id=\"PRODUCTID\">149</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">마이젯 MJC-3300P</Col><Col id=\"UNITCOST\">155000.0</Col><Col id=\"DESCRIPTION\">INK 프린터</Col></Row><Row><Col id=\"PRODUCTID\">15</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">디오스 R-S554GMJ</Col><Col id=\"UNITCOST\">809000.0</Col><Col id=\"DESCRIPTION\">546리터/베이직형/냉동197L/균일냉각/카프리베이지</Col></Row><Row><Col id=\"PRODUCTID\">150</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">HL-1440</Col><Col id=\"UNITCOST\">225000.0</Col><Col id=\"DESCRIPTION\">LASER 프린터</Col></Row><Row><Col id=\"PRODUCTID\">151</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">HL-1470N</Col><Col id=\"UNITCOST\">684000.0</Col><Col id=\"DESCRIPTION\">LASER 프린터</Col><Col id=\"DISCOUNTRATE\">15</Col></Row><Row><Col id=\"PRODUCTID\">152</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">Pageo 1100L</Col><Col id=\"UNITCOST\">170000.0</Col><Col id=\"DESCRIPTION\">LASER 프린터</Col></Row><Row><Col id=\"PRODUCTID\">153</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">AcuLaser C2000</Col><Col id=\"UNITCOST\">1538000.0</Col><Col id=\"DESCRIPTION\">LASER 프린터</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">154</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">FLP 4120G</Col><Col id=\"UNITCOST\">1190000.0</Col><Col id=\"DESCRIPTION\">LASER 프린터</Col></Row><Row><Col id=\"PRODUCTID\">155</Col><Col id=\"DETAILCATEGORYID\">DE9</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">라벨터치 PT-1100K</Col><Col id=\"UNITCOST\">160000.0</Col><Col id=\"DESCRIPTION\">라벨프린터</Col></Row><Row><Col id=\"PRODUCTID\">156</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">애슬론64 3000+</Col><Col id=\"UNITCOST\">310000.0</Col><Col id=\"DESCRIPTION\">AMD_Athlon64</Col></Row><Row><Col id=\"PRODUCTID\">157</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">애슬론64 3200+</Col><Col id=\"UNITCOST\">528000.0</Col><Col id=\"DESCRIPTION\">AMD_Athlon64</Col></Row><Row><Col id=\"PRODUCTID\">158</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">애슬론XP 바톤3200+</Col><Col id=\"UNITCOST\">528000.0</Col><Col id=\"DESCRIPTION\">AMD_Athlon 바톤</Col></Row><Row><Col id=\"PRODUCTID\">159</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">애슬론XP 써러브레드1800+</Col><Col id=\"UNITCOST\">82000.0</Col><Col id=\"DESCRIPTION\">AMD_AthlonXP</Col></Row><Row><Col id=\"PRODUCTID\">16</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">딤채 DD-1566SD</Col><Col id=\"UNITCOST\">833000.0</Col><Col id=\"DESCRIPTION\">뚜껑식/156L/2룸/냉동X/와인골드</Col></Row><Row><Col id=\"PRODUCTID\">160</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">써니큐</Col><Col id=\"MODELNAME\">애슬론XP 써러브레드2000+</Col><Col id=\"UNITCOST\">81000.0</Col><Col id=\"DESCRIPTION\">AMD_AthlonXP</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">161</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">SESA</Col><Col id=\"MODELNAME\">옵테론 240</Col><Col id=\"UNITCOST\">309000.0</Col><Col id=\"DESCRIPTION\">64bit 서버 CPU</Col></Row><Row><Col id=\"PRODUCTID\">162</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">SAPA</Col><Col id=\"MODELNAME\">옵테론 242</Col><Col id=\"UNITCOST\">484000.0</Col><Col id=\"DESCRIPTION\">64bit 서버 CPU</Col></Row><Row><Col id=\"PRODUCTID\">163</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">SAPA</Col><Col id=\"MODELNAME\">셀러론 노스우드 2.0</Col><Col id=\"UNITCOST\">77000.0</Col><Col id=\"DESCRIPTION\">Intel 펜티엄4 셀러론(노스우드)</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">164</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">SAPA</Col><Col id=\"MODELNAME\">셀러론 노스우드 2.1</Col><Col id=\"UNITCOST\">127000.0</Col><Col id=\"DESCRIPTION\">Intel 펜티엄4 셀러론(노스우드)</Col></Row><Row><Col id=\"PRODUCTID\">165</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">SOBY</Col><Col id=\"MODELNAME\">제온 3.0 (512KB 400MHz)</Col><Col id=\"UNITCOST\">590000.0</Col><Col id=\"DESCRIPTION\">인텔 제온 (서버용)</Col></Row><Row><Col id=\"PRODUCTID\">166</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">SOBY</Col><Col id=\"MODELNAME\">제온 3.0 (512KB 533MHz)</Col><Col id=\"UNITCOST\">597000.0</Col><Col id=\"DESCRIPTION\">인텔 제온 (서버용)</Col><Col id=\"DISCOUNTRATE\">30</Col></Row><Row><Col id=\"PRODUCTID\">167</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">SOBY</Col><Col id=\"MODELNAME\">펜티엄4 노스우드 1.8A</Col><Col id=\"UNITCOST\">146000.0</Col><Col id=\"DESCRIPTION\">Intel 펜티엄4 (노스우드)</Col></Row><Row><Col id=\"PRODUCTID\">168</Col><Col id=\"DETAILCATEGORYID\">DE8</Col><Col id=\"COMPANY\">신도라코</Col><Col id=\"MODELNAME\">펜티엄4 노스우드 2.0A</Col><Col id=\"UNITCOST\">154000.0</Col><Col id=\"DESCRIPTION\">Intel 펜티엄4 (노스우드)</Col></Row><Row><Col id=\"PRODUCTID\">169</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">신도라코</Col><Col id=\"MODELNAME\">CD-ROM 24X 노트북 PCMCIA</Col><Col id=\"UNITCOST\">102000.0</Col><Col id=\"DESCRIPTION\">CD-ROM</Col></Row><Row><Col id=\"PRODUCTID\">17</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">신도라코</Col><Col id=\"MODELNAME\">다맛 SKR-1669G</Col><Col id=\"UNITCOST\">699000.0</Col><Col id=\"DESCRIPTION\">뚜껑식/159L/2룸/냉동/골드</Col><Col id=\"DISCOUNTRATE\">30</Col></Row><Row><Col id=\"PRODUCTID\">170</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">신도라코</Col><Col id=\"MODELNAME\">CD-ROM 52X CD-S520</Col><Col id=\"UNITCOST\">27000.0</Col><Col id=\"DESCRIPTION\">CD-ROM</Col><Col id=\"DISCOUNTRATE\">25</Col></Row><Row><Col id=\"PRODUCTID\">171</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">아큐아드림</Col><Col id=\"MODELNAME\">CD-ROM 24X 노트북</Col><Col id=\"UNITCOST\">119000.0</Col><Col id=\"DESCRIPTION\">CD-ROM</Col></Row><Row><Col id=\"PRODUCTID\">172</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">아큐아드림</Col><Col id=\"MODELNAME\">CD-RW 52X 외장형</Col><Col id=\"UNITCOST\">144000.0</Col><Col id=\"DESCRIPTION\">CD-RW</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">173</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">아큐아드림</Col><Col id=\"MODELNAME\">CD-RW 40X edator</Col><Col id=\"UNITCOST\">155000.0</Col><Col id=\"DESCRIPTION\">CD-RW</Col></Row><Row><Col id=\"PRODUCTID\">174</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">아큐아드림</Col><Col id=\"MODELNAME\">CD-RW 8X GCE-8080N 노트북용</Col><Col id=\"UNITCOST\">130000.0</Col><Col id=\"DESCRIPTION\">CD-RW</Col></Row><Row><Col id=\"PRODUCTID\">175</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">아큐아드림</Col><Col id=\"MODELNAME\">CD복사기 CM-C31-PH 1:3</Col><Col id=\"UNITCOST\">1000000.0</Col><Col id=\"DESCRIPTION\">CD복사기</Col></Row><Row><Col id=\"PRODUCTID\">176</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">ARO</Col><Col id=\"MODELNAME\">CD복사기 CC07-H(1:7)</Col><Col id=\"UNITCOST\">1050000.0</Col><Col id=\"DESCRIPTION\">CD복사기</Col></Row><Row><Col id=\"PRODUCTID\">177</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">ARO</Col><Col id=\"MODELNAME\">COMBO 48X COM-1H4816</Col><Col id=\"UNITCOST\">59000.0</Col><Col id=\"DESCRIPTION\">COMBO</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">178</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">ARO</Col><Col id=\"MODELNAME\">COMBO 48X COM-4824</Col><Col id=\"UNITCOST\">67000.0</Col><Col id=\"DESCRIPTION\">COMBO</Col></Row><Row><Col id=\"PRODUCTID\">179</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">PRO</Col><Col id=\"MODELNAME\">COMBO 52X GCC-4520B</Col><Col id=\"UNITCOST\">70000.0</Col><Col id=\"DESCRIPTION\">COMBO</Col></Row><Row><Col id=\"PRODUCTID\">18</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">EXCO</Col><Col id=\"MODELNAME\">다맛 SKR-C2173S</Col><Col id=\"UNITCOST\">860000.0</Col><Col id=\"DESCRIPTION\">복합식/213L/3룸/냉동O/임페리얼실버</Col><Col id=\"DISCOUNTRATE\">5</Col></Row><Row><Col id=\"PRODUCTID\">180</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">올림파사</Col><Col id=\"MODELNAME\">DVD-ROM 16X DVD-120 MIS</Col><Col id=\"UNITCOST\">67000.0</Col><Col id=\"DESCRIPTION\">DVD-ROM</Col></Row><Row><Col id=\"PRODUCTID\">181</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">원이</Col><Col id=\"MODELNAME\">DVD-ROM 8X SDR-081 노트북용</Col><Col id=\"UNITCOST\">67000.0</Col><Col id=\"DESCRIPTION\">DVD-ROM</Col></Row><Row><Col id=\"PRODUCTID\">182</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">원이</Col><Col id=\"MODELNAME\">DVD-ROM NVD-080B</Col><Col id=\"UNITCOST\">174000.0</Col><Col id=\"DESCRIPTION\">DVD-ROM</Col><Col id=\"DISCOUNTRATE\">30</Col></Row><Row><Col id=\"PRODUCTID\">183</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">퀘스트</Col><Col id=\"MODELNAME\">DVD-ROM 8X 노트북 USB 외장형</Col><Col id=\"UNITCOST\">150000.0</Col><Col id=\"DESCRIPTION\">DVD-ROM</Col></Row><Row><Col id=\"PRODUCTID\">184</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">퀘스트</Col><Col id=\"MODELNAME\">DVD+RW DVRW 2412 o</Col><Col id=\"UNITCOST\">338000.0</Col><Col id=\"DESCRIPTION\">DVD+RW</Col></Row><Row><Col id=\"PRODUCTID\">185</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">이젠</Col><Col id=\"MODELNAME\">DVD+RW DVD 200e</Col><Col id=\"UNITCOST\">415000.0</Col><Col id=\"DESCRIPTION\">DVD+RW</Col><Col id=\"DISCOUNTRATE\">25</Col></Row><Row><Col id=\"PRODUCTID\">186</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">제록</Col><Col id=\"MODELNAME\">DVD+RW DVD 300i</Col><Col id=\"UNITCOST\">164000.0</Col><Col id=\"DESCRIPTION\">DVD+RW</Col></Row><Row><Col id=\"PRODUCTID\">187</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD-Multi GSA-4081B 정품</Col><Col id=\"UNITCOST\">229000.0</Col><Col id=\"DESCRIPTION\">DVD-Multi</Col><Col id=\"DISCOUNTRATE\">25</Col></Row><Row><Col id=\"PRODUCTID\">188</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD-Multi SR-T03B/DOM</Col><Col id=\"UNITCOST\">240000.0</Col><Col id=\"DESCRIPTION\">DVD-Multi</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">189</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD-RAM 1216S</Col><Col id=\"UNITCOST\">99000.0</Col><Col id=\"DESCRIPTION\">DVD-RAM</Col><Col id=\"DISCOUNTRATE\">25</Col></Row><Row><Col id=\"PRODUCTID\">19</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">딤채 DC-R1236DFW</Col><Col id=\"UNITCOST\">776000.0</Col><Col id=\"DESCRIPTION\">뚜껑식/123L/2룸/냉동X/후레쉬화이트</Col></Row><Row><Col id=\"PRODUCTID\">190</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD-RW 4X DRW-0402P</Col><Col id=\"UNITCOST\">243000.0</Col><Col id=\"DESCRIPTION\">DVD-RW</Col></Row><Row><Col id=\"PRODUCTID\">191</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD-RW DVR-A05U</Col><Col id=\"UNITCOST\">350000.0</Col><Col id=\"DESCRIPTION\">DVD-RW</Col></Row><Row><Col id=\"PRODUCTID\">192</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD±RW DRW-1S41+CD-509-U</Col><Col id=\"UNITCOST\">278000.0</Col><Col id=\"DESCRIPTION\">DVD±RW</Col></Row><Row><Col id=\"PRODUCTID\">193</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD±RW DRW1004IM</Col><Col id=\"UNITCOST\">182000.0</Col><Col id=\"DESCRIPTION\">DVD±RW</Col></Row><Row><Col id=\"PRODUCTID\">194</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">코코니</Col><Col id=\"MODELNAME\">DVD±RW HJ-1004ND 4X Dual</Col><Col id=\"UNITCOST\">179000.0</Col><Col id=\"DESCRIPTION\">DVD±RW</Col><Col id=\"DISCOUNTRATE\">30</Col></Row><Row><Col id=\"PRODUCTID\">195</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">토마</Col><Col id=\"MODELNAME\">DVD±RW 4X Dual DVD</Col><Col id=\"UNITCOST\">185000.0</Col><Col id=\"DESCRIPTION\">DVD±RW</Col></Row><Row><Col id=\"PRODUCTID\">196</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">파나소</Col><Col id=\"MODELNAME\">DVD±RW SR-W04B/DOM</Col><Col id=\"UNITCOST\">149000.0</Col><Col id=\"DESCRIPTION\">DVD±RW</Col></Row><Row><Col id=\"PRODUCTID\">197</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">팔캄</Col><Col id=\"MODELNAME\">DVD복사기 CM-D31-PH 1:3</Col><Col id=\"UNITCOST\">1550000.0</Col><Col id=\"DESCRIPTION\">DVD복사기</Col></Row><Row><Col id=\"PRODUCTID\">198</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">퍼스</Col><Col id=\"MODELNAME\">DVD복사기 DD07-H DVD 1:7 복사기</Col><Col id=\"UNITCOST\">2640000.0</Col><Col id=\"DESCRIPTION\">DVD복사기</Col></Row><Row><Col id=\"PRODUCTID\">199</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">펜만</Col><Col id=\"MODELNAME\">MO DynaMO DMO-640PT</Col><Col id=\"UNITCOST\">249000.0</Col><Col id=\"DESCRIPTION\">MO</Col></Row><Row><Col id=\"PRODUCTID\">2</Col><Col id=\"DETAILCATEGORYID\">DE3</Col><Col id=\"COMPANY\">펜만</Col><Col id=\"MODELNAME\">트롬 WD-120X</Col><Col id=\"UNITCOST\">1030000.0</Col><Col id=\"DESCRIPTION\">세탁12KG/건조X/삶는세탁/냉온수겸용/140L/1200rpm/화이트</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">20</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">팔립스</Col><Col id=\"MODELNAME\">지펠 SR-S68HSC</Col><Col id=\"UNITCOST\">964000.0</Col><Col id=\"DESCRIPTION\">684리터/베이직형/냉동267L/독립냉각/크림화이트</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">200</Col><Col id=\"DETAILCATEGORYID\">DE10</Col><Col id=\"COMPANY\">팔립스</Col><Col id=\"MODELNAME\">MO DynaMO MCD3130AP</Col><Col id=\"UNITCOST\">445000.0</Col><Col id=\"DESCRIPTION\">MO</Col></Row><Row><Col id=\"PRODUCTID\">21</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">팔립스</Col><Col id=\"MODELNAME\">티타늄지펠 SR-S686FTI</Col><Col id=\"UNITCOST\">1640000.0</Col><Col id=\"DESCRIPTION\">684리터/홈바형/냉동267L/독립냉각/티타늄</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">22</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">팔립스</Col><Col id=\"MODELNAME\">지펠 SR-S57ELU</Col><Col id=\"UNITCOST\">775000.0</Col><Col id=\"DESCRIPTION\">567리터/베이직형/냉동212L/나노헬스/유니버셜베이지</Col></Row><Row><Col id=\"PRODUCTID\">23</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">한미디어</Col><Col id=\"MODELNAME\">하우젠 HNR-2120T</Col><Col id=\"UNITCOST\">1340000.0</Col><Col id=\"DESCRIPTION\">뚜껑식/202L/2룸/냉동</Col></Row><Row><Col id=\"PRODUCTID\">24</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">한술</Col><Col id=\"MODELNAME\">하우젠 HNR-2117N</Col><Col id=\"UNITCOST\">1200000.0</Col><Col id=\"DESCRIPTION\">뚜껑식/174L/2룸/냉동O/하와이안카퍼</Col></Row><Row><Col id=\"PRODUCTID\">25</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">한술</Col><Col id=\"MODELNAME\">인테리어지펠 SR-T686FSiA</Col><Col id=\"UNITCOST\">1710000.0</Col><Col id=\"DESCRIPTION\">679리터/홈바형/냉동267L/독립냉각/아쿠아실버</Col></Row><Row><Col id=\"PRODUCTID\">26</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">한양</Col><Col id=\"MODELNAME\">클라쎄 FR-S580CRB</Col><Col id=\"UNITCOST\">1220000.0</Col><Col id=\"DESCRIPTION\">579리터/홈바형/냉동213L/항균입체냉각/후레쉬베이지</Col><Col id=\"DISCOUNTRATE\">15</Col></Row><Row><Col id=\"PRODUCTID\">27</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">한양</Col><Col id=\"MODELNAME\">클라쎄 FR-S580CGB</Col><Col id=\"UNITCOST\">954000.0</Col><Col id=\"DESCRIPTION\">579리터/베이직형/냉동213L/항균입체냉각/후레쉬베이지</Col></Row><Row><Col id=\"PRODUCTID\">28</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">현미</Col><Col id=\"MODELNAME\">JH-7F</Col><Col id=\"UNITCOST\">79000.0</Col><Col id=\"DESCRIPTION\">화장품냉장고/7L/열반도체냉각</Col></Row><Row><Col id=\"PRODUCTID\">29</Col><Col id=\"DETAILCATEGORYID\">DE1</Col><Col id=\"COMPANY\">히타차</Col><Col id=\"MODELNAME\">SCR-0150R</Col><Col id=\"UNITCOST\">222000.0</Col><Col id=\"DESCRIPTION\">화장품냉장고/9.2L/시엘/반도체열전소자냉각/레드</Col></Row><Row><Col id=\"PRODUCTID\">3</Col><Col id=\"DETAILCATEGORYID\">DE3</Col><Col id=\"COMPANY\">A5Tech</Col><Col id=\"MODELNAME\">하우젠 SEW-3HW123</Col><Col id=\"UNITCOST\">783000.0</Col><Col id=\"DESCRIPTION\">세탁10KG/건조X/삶는세탁/냉온수겸용/1100rpm/화이트</Col></Row><Row><Col id=\"PRODUCTID\">30</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">A5Tech</Col><Col id=\"MODELNAME\">먼지따로 VC-L822X</Col><Col id=\"UNITCOST\">79500.0</Col><Col id=\"DESCRIPTION\">510W/먼지따로/다단연장관/매직브러쉬배기필터 /골드</Col></Row><Row><Col id=\"PRODUCTID\">31</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">Absolutes</Col><Col id=\"MODELNAME\">업그레이드싸이킹 V-C712JN</Col><Col id=\"UNITCOST\">174900.0</Col><Col id=\"DESCRIPTION\">410W/사이클론/HEPA필터/줄꼬임방지/제팬블루</Col></Row><Row><Col id=\"PRODUCTID\">32</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AND</Col><Col id=\"MODELNAME\">먼지따로 VC-L802A</Col><Col id=\"UNITCOST\">85000.0</Col><Col id=\"DESCRIPTION\">510W/먼지따로/투명관필터/구석청소편리/매직브러쉬</Col></Row><Row><Col id=\"PRODUCTID\">33</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AND</Col><Col id=\"MODELNAME\">동글이 V-C391T</Col><Col id=\"UNITCOST\">76000.0</Col><Col id=\"DESCRIPTION\">500W/일반/회전팍팍/컴팩트/배기필터/자동코드릴/노즐레드</Col></Row><Row><Col id=\"PRODUCTID\">34</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AND</Col><Col id=\"MODELNAME\">3세대싸이킹 V-C800AJE</Col><Col id=\"UNITCOST\">344800.0</Col><Col id=\"DESCRIPTION\">530W/사이클론/HEPA필터/나노실버향균/타이탄실버</Col></Row><Row><Col id=\"PRODUCTID\">35</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AND</Col><Col id=\"MODELNAME\">컴팩트싸이킹 V-C712J</Col><Col id=\"UNITCOST\">163800.0</Col><Col id=\"DESCRIPTION\">410W/사이클론/HEPA필터/줄꼬임방지/제팬블루</Col></Row><Row><Col id=\"PRODUCTID\">36</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AND</Col><Col id=\"MODELNAME\">스팀제트 SC-C101</Col><Col id=\"UNITCOST\">180000.0</Col><Col id=\"DESCRIPTION\">스팀청소기/LG전자/스틱형/살균/안전마개/물없음알림</Col><Col id=\"DISCOUNTRATE\">15</Col></Row><Row><Col id=\"PRODUCTID\">37</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AND</Col><Col id=\"MODELNAME\">스티미 SAK-2003</Col><Col id=\"UNITCOST\">79000.0</Col><Col id=\"DESCRIPTION\">스팀청소기/한영전기/스틱형/초극세사/살균/길이조절</Col></Row><Row><Col id=\"PRODUCTID\">38</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AND</Col><Col id=\"MODELNAME\">CS-200A</Col><Col id=\"UNITCOST\">39800.0</Col><Col id=\"DESCRIPTION\">스팀청소기/씨쓰리아이디(C3ID)/스틱형/살균/길이조절/급수램프</Col></Row><Row><Col id=\"PRODUCTID\">39</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AMIGOS</Col><Col id=\"MODELNAME\">Z311A</Col><Col id=\"UNITCOST\">126000.0</Col><Col id=\"DESCRIPTION\">스팀청소기/일렉트로룩스/스틱형/살균/작동램프/누수방지</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">4</Col><Col id=\"DETAILCATEGORYID\">DE3</Col><Col id=\"COMPANY\">AOPENS</Col><Col id=\"MODELNAME\">트롬 WD-k105D</Col><Col id=\"UNITCOST\">920000.0</Col><Col id=\"DESCRIPTION\">세탁10KG/건조X/삶는세탁/냉온수겸용/120L/1200rpm/은하수색</Col></Row><Row><Col id=\"PRODUCTID\">40</Col><Col id=\"DETAILCATEGORYID\">DE4</Col><Col id=\"COMPANY\">AOPENS</Col><Col id=\"MODELNAME\">Z350A</Col><Col id=\"UNITCOST\">88800.0</Col><Col id=\"DESCRIPTION\">스팀청소기/일렉트로룩스/핸디형/살균/안전마개/항균작용</Col></Row><Row><Col id=\"PRODUCTID\">41</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">ESUS</Col><Col id=\"MODELNAME\">플라톤 CN-29Q2B</Col><Col id=\"UNITCOST\">380000.0</Col><Col id=\"DESCRIPTION\">29인치/4:3비율/AV,DVD,SVHS/디지털EYE/음성다중/캡션</Col></Row><Row><Col id=\"PRODUCTID\">42</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">ESUS</Col><Col id=\"MODELNAME\">명품 CT-29K6</Col><Col id=\"UNITCOST\">413000.0</Col><Col id=\"DESCRIPTION\">29인치/4:3비율완전평면/AV,DVD/고화질디지털콤필터/자동스테레오/캡션</Col></Row><Row><Col id=\"PRODUCTID\">43</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">BROTHERS</Col><Col id=\"MODELNAME\">엑스캔버스 RN-44NZ20H</Col><Col id=\"UNITCOST\">1500000.0</Col><Col id=\"DESCRIPTION\">44인치/HD급분리형/16:9비율/AV,DVD/PC직접연결/캡션/트윈픽쳐</Col></Row><Row><Col id=\"PRODUCTID\">44</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">BROTHERS</Col><Col id=\"MODELNAME\">CVK-20T31</Col><Col id=\"UNITCOST\">281800.0</Col><Col id=\"DESCRIPTION\">비디오비젼/20인치/4:3비율/홈비디오비젼</Col></Row><Row><Col id=\"PRODUCTID\">45</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">BROTHERS</Col><Col id=\"MODELNAME\">써머스 DTQ-29U5</Col><Col id=\"UNITCOST\">370000.0</Col><Col id=\"DESCRIPTION\">29인치/4:3비율/AV,DVD/고화질디지털콤필터/음성다중/캡션</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">46</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">BTCS</Col><Col id=\"MODELNAME\">파브 SVP-50L2HXN</Col><Col id=\"UNITCOST\">4010000.0</Col><Col id=\"DESCRIPTION\">50인치/HD급분리형/16:9비율/DVI,AV/PC직접연결/캡션/PIP/DLP</Col></Row><Row><Col id=\"PRODUCTID\">47</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">COMPEQ</Col><Col id=\"MODELNAME\">커플 SMV-15X5N</Col><Col id=\"UNITCOST\">333000.0</Col><Col id=\"DESCRIPTION\">비디오비젼/15인치/4:3비율</Col><Col id=\"DISCOUNTRATE\">20</Col></Row><Row><Col id=\"PRODUCTID\">48</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">COMPEQ</Col><Col id=\"MODELNAME\">TRUE WK-36C10DW</Col><Col id=\"UNITCOST\">1847000.0</Col><Col id=\"DESCRIPTION\">36인치/HD급분리형/16:9비율/AV,SVHS,DVD/POP</Col></Row><Row><Col id=\"PRODUCTID\">49</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">COMPEQ</Col><Col id=\"MODELNAME\">TRUE WK-32HA40DW</Col><Col id=\"UNITCOST\">1350000.0</Col><Col id=\"DESCRIPTION\">32인치/HD급분리형/16:9비율/AV,SVHS,DVD</Col></Row><Row><Col id=\"PRODUCTID\">5</Col><Col id=\"DETAILCATEGORYID\">DE3</Col><Col id=\"COMPANY\">COMPEQ</Col><Col id=\"MODELNAME\">하우젠 SEW-3HW125W</Col><Col id=\"UNITCOST\">837000.0</Col><Col id=\"DESCRIPTION\">세탁10KG/건조X/삶는세탁/냉온수겸용/1200rpm/화이트</Col></Row><Row><Col id=\"PRODUCTID\">50</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">CREATIVES</Col><Col id=\"MODELNAME\">플라톤 CN-29Q2B</Col><Col id=\"UNITCOST\">380000.0</Col><Col id=\"DESCRIPTION\">29인치/4:3비율/AV,DVD,SVHS/디지털EYE/음성다중/캡션</Col></Row><Row><Col id=\"PRODUCTID\">51</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">CYQVEYS</Col><Col id=\"MODELNAME\">띠뮤 CK-29K05F</Col><Col id=\"UNITCOST\">380000.0</Col><Col id=\"DESCRIPTION\">29인치/4:3비율/DVD,SVHS/글라스콤필터/음성다중/캡션</Col></Row><Row><Col id=\"PRODUCTID\">52</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">DAENYXYS</Col><Col id=\"MODELNAME\">명품 CT-29K6</Col><Col id=\"UNITCOST\">413000.0</Col><Col id=\"DESCRIPTION\">29인치/4:3비율완전평면/AV,DVD/고화질디지털콤필터/자동스테레오/캡션</Col></Row><Row><Col id=\"PRODUCTID\">53</Col><Col id=\"DETAILCATEGORYID\">DE2</Col><Col id=\"COMPANY\">EISO</Col><Col id=\"MODELNAME\">플라톤 CN-29Q4B</Col><Col id=\"UNITCOST\">388000.0</Col><Col id=\"DESCRIPTION\">29인치/4:3비율/AV,DVD,SVHS/디지털EYE/디지털입체음향/캡션</Col><Col id=\"DISCOUNTRATE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_grid2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIGAGENTID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGAGENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BIGAGENTID\">B1</Col><Col id=\"BIGAGENTNAME\">수도권</Col></Row><Row><Col id=\"BIGAGENTID\">B2</Col><Col id=\"BIGAGENTNAME\">호남</Col></Row><Row><Col id=\"BIGAGENTID\">B3</Col><Col id=\"BIGAGENTNAME\">강원</Col></Row><Row><Col id=\"BIGAGENTID\">B4</Col><Col id=\"BIGAGENTNAME\">충청</Col></Row><Row><Col id=\"BIGAGENTID\">B5</Col><Col id=\"BIGAGENTNAME\">영남</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("ubiviewerlib_localds", "absolute", "1.76%", "24", "150", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Ubiexport - LocalDS");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser", "absolute", "1.17%", "65", null, "695", "1.56%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("UbiReport2 .xfdl", function(exports) {
        var nexaBrowser = nexacro.Browser;
        var ubiDataType;						// DS : Local Dataset, SVC : Service URL
        var ubiViewerUrl;

        

        
        /************************************************************************************
        * UbiViewerLib를 사용하여 서버에 파일 저장
        * Data : Local Dataset 사용
        * 저장 기능 페이지 : /ubinexa/ubiviewerlib.jsp
        ************************************************************************************/
        this.ubiviewerlib_localds_onclick = function(obj,e)
        {
        	this.ubiDataType = "DS";	// DS : Local Dataset, SVC : Service URL
        	this.ubiViewerUrl = "http://localhost:8888/newubi/ubi4/ubiexport.jsp";
        	if( nexaBrowser == "Runtime"){
        		var argList = {ubiDataType:this.ubiDataType, ubiViewerUrl:this.ubiViewerUrl};
        		this.showUbiViewerLib_Runtime(argList, this.WebBrowser);
        	}else{	
        		var argList = {ubiDataType:this.ubiDataType, ubiViewerUrl:this.ubiViewerUrl};
        		this.showUbiViewerLib_Html(argList);
        	}
        }

        

        

        this.showUbiViewerLib_Runtime = function(argList,objWb)
        {

        	var _nrs_ = String.fromCharCode(28);
        	var _ncs_ = String.fromCharCode(29);
        	var _rs_ = String.fromCharCode(30);
        	var _cs_ = String.fromCharCode(31);
        	
        	var ubiUrl = this.ubiViewerUrl;
        	var ubiJrfDir = "http://localhost:8888/newubi/ubi4/work/";
        	
        	
        		
        		var ubiJrf = "ubinexa_ds.jrf";
        		var ubiData = [];
        		ubiData.push(["SQL02", this.ds_grid2]);
        		ubiData.push(["SQL01", this.ds_grid1]);

        		var ssvData = [];
        		ssvData.push("LOCALDATASET:" + _rs_);
        		for( var i = 0; i < ubiData.length; i++ ) {

        			if( ubiData[i] && ubiData[i].length == 2 ) {
        			
        				ssvData.push(ubiData[i][0] + _cs_);
        				ssvData.push(ubiData[i][1].name + _cs_);
        				ssvData.push(_rs_);
        			}
        		}
        		for( var i = 0; i < ubiData.length; i++ ) {

        			if( ubiData[i] && ubiData[i].length == 2 ) {
        				if( i == 0 ){
        					ssvData.push("SSV:utf-8" + _rs_);
        				}
        				ssvData.push(ubiData[i][1].saveSSV(ubiData[i][1].name, "A"));
        			}
        		}
        	
        	
        	var ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";		
        	
        	var str = "";
        	str +='<html>                                                                                           '; 
        	str +='<title>                                                                                          ';
        	str +='</title>                                                                                         ';
        	str +='<head>                                                                                           ';
        	str +='<meta charset="UTF-8">                                                                           ';
        	str +='</head>                                                                                          ';
        	str +='<body>                                                                                           ';
        	str +='<form id="postform" name="postform" action="'+ubiUrl+'" method="post" accept-charset="utf-8" >	';
        	str +='	<input type="hidden" id="jrf" name="jrf" value="'+ubiJrf+'">                                    ';
        	str +='	<input type="hidden" id="dir" name="dir" value="'+ubiJrfDir+'">                                 ';
        	str +='	<input type="hidden" id="arg" name="arg" value="'+ubiArg+'">                                    '; 
        	str +='	<input type="hidden" id="datatype" name="datatype" value="'+this.ubiDataType+'">                ';	
        	str +='	<input type="hidden" id="exporttype" name="exporttype" value="PDF">                ';
        	str +='	<input type="hidden" id="exportdir" name="exportdir" value="C:/UbiContents/Tomcat6/webapps/newubi/ubi4/export/">                ';
        	str +='	<input type="hidden" id="exportfile" name="exportfile" value="'+ubiJrf.substr(0,ubiJrf.lastIndexOf(".jrf"))+'.pdf">                ';
        	if( this.ubiDataType == "SVC" ){
        		str +='	<input type="hidden" id="svcurl" name="svcurl" value="'+svcUrl.join("")+'">                 ';		
        	}else{
        		str +='	<input type="hidden" id="ssvdata" name="ssvdata" value="'+ssvData.join("")+'">               ';		
        	}
        	str +='</form>                                                                                           ';
        	str +='<script type="text/javascript">                                                                   ';
        	str +='	document.title = "testWeb";                                                                      ';
        	str +='	document.postform.submit();                                                                      ';
        	str +='</script>                                                                                         ';
        	str +='</body>                                                                                           ';
        	str +='</html>';
        	
        	objWb.getProperty("document").callMethod("Write", str);
        	objWb.getProperty("document").callMethod("Close");

        }

        

        this.showUbiViewerLib_Html = function(argList)
        {
        	var _nrs_ = String.fromCharCode(28);
        	var _ncs_ = String.fromCharCode(29);
        	var _rs_ = String.fromCharCode(30);
        	var _cs_ = String.fromCharCode(31);

        	var ubiUrl = this.ubiViewerUrl;
        	var ubiDir = "C:/UbiContents/Tomcat6/webapps/newubi/ubi4/work/";
        	
        	var ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";
        	var ubiDataType = this.ubiDataType;	// DS : Local Dataset, SVC : Service URL
        	var ubiPrintType = "N";	// Y : 바로 출력, N : 바로 출력 안함.
        	
        	
        		var ubiJrf = "ubinexa_ds.jrf";
        		
        		var ubiData = [];
        		ubiData.push(["SQL02", this.ds_grid2]);
        		ubiData.push(["SQL01", this.ds_grid1]);

        		var ssvData = [];
        		ssvData.push("LOCALDATASET:" + _rs_);
        		for( var i = 0; i < ubiData.length; i++ ) {

        			if( ubiData[i] && ubiData[i].length == 2 ) {
        			
        				ssvData.push(ubiData[i][0] + _cs_);
        				ssvData.push(ubiData[i][1].name + _cs_);
        				ssvData.push(_rs_);
        			}
        		}
        		for( var i = 0; i < ubiData.length; i++ ) {

        			if( ubiData[i] && ubiData[i].length == 2 ) {
        				if( i == 0 ){
        					ssvData.push("SSV:utf-8" + _rs_);
        				}
        				ssvData.push(ubiData[i][1].saveSSV(ubiData[i][1].name, "A"));
        			}
        		}
        	
        	// Form 정보 설정
        	var dynamicForm = document.createElement("form");
        	dynamicForm.setAttribute("id", "preview_form");
        	dynamicForm.setAttribute("method", "post");
        	dynamicForm.setAttribute("action", ubiUrl);
        	dynamicForm.setAttribute("target", "UBI_WIN");

        	var inputDir = document.createElement('input');
        	inputDir.type = 'hidden';
        	inputDir.name = 'dir';
        	inputDir.value = ubiDir;
        	dynamicForm.appendChild(inputDir);

        	var inputJrf = document.createElement('input');
        	inputJrf.type = 'hidden';
        	inputJrf.name = 'jrf';
        	inputJrf.value = ubiJrf;
        	dynamicForm.appendChild(inputJrf);

        	var inputArg = document.createElement('input');
        	inputArg.type = 'hidden';
        	inputArg.name = 'arg';
        	inputArg.value = ubiArg;
        	dynamicForm.appendChild(inputArg);

        	var inputDataType = document.createElement('input');
        	inputDataType.type = 'hidden';
        	inputDataType.name = 'datatype';
        	inputDataType.value = ubiDataType;
        	dynamicForm.appendChild(inputDataType);

        	var inputPrintType = document.createElement('input');
        	inputPrintType.type = 'hidden';
        	inputPrintType.name = 'printtype';
        	inputPrintType.value = ubiPrintType;
        	dynamicForm.appendChild(inputPrintType);
        	
        	var inputExportDir = document.createElement('input');
        	inputExportDir.type = 'hidden';
        	inputExportDir.name = 'exportdir';
        	inputExportDir.value = 'C:/UbiContents/Tomcat6/webapps/newubi/ubi4/export/';
        	dynamicForm.appendChild(inputExportDir);

        	var inputExportType = document.createElement('input');
        	inputExportType.type = 'hidden';
        	inputExportType.name = 'exporttype';
        	inputExportType.value = "PDF";
        	dynamicForm.appendChild(inputExportType);

        	var inputExportFile = document.createElement('input');
        	inputExportFile.type = 'hidden';
        	inputExportFile.name = 'exportfile';
        	inputExportFile.value = ubiJrf.substr(0,ubiJrf.lastIndexOf(".jrf"))+'.pdf';
        	dynamicForm.appendChild(inputExportFile);
        	
        	// Data : Service URL 사용
        	if( this.ubiDataType == "SVC" ){
        		var inputSvcUrl = document.createElement('input');
        		inputSvcUrl.type = 'hidden';
        		inputSvcUrl.name = 'svcurl';
        		inputSvcUrl.value = svcUrl.join("");
        		dynamicForm.appendChild(inputSvcUrl);
        	
        	// Data : Local Dataset 사용
        	}else{
        		var inputSsvData = document.createElement('input');
        		inputSsvData.type = 'hidden';
        		inputSsvData.name = 'ssvdata';
        		inputSsvData.value = ssvData.join("");
        		dynamicForm.appendChild(inputSsvData);		
        	}
        	
        	document.body.appendChild(dynamicForm);
        	
        	// 팝업 창 너비와 높이, 위치 변수 선언
        	var newWidth = 1000, newHeight = 700, newLeft = 0, newTop = 0;
        	window.open('', 'UBI_WIN', 'left=' + newLeft + ',top=' + newTop + ',width=' + newWidth + ',height=' + newHeight + ',scrollbars=yes,resizable=yes');
        	dynamicForm.submit();	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.UbiReport_onload, this);
            this.ubiviewerlib_localds.addEventHandler("onclick", this.ubiviewerlib_localds_onclick, this);

        };

        this.loadIncludeScript("UbiReport2 .xfdl", true);

       
    };
}
)();
