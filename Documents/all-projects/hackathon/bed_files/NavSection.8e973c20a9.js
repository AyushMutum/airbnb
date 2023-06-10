__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ClientEventData=void 0;var t={defaultProps:{},propTypes:{}};e.ClientEventData=t,t.fullyQualifiedName='Pdp.v5.ClientEventData'}),"01f8bb",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NAV_LOGO_HEIGHT=e.NAV_ITEM_SPACING=e.NAV_HEIGHT=e.IN_VIEW_THRESHOLD=void 0;e.NAV_HEIGHT=80;e.NAV_ITEM_SPACING=24;e.NAV_LOGO_HEIGHT=32;e.IN_VIEW_THRESHOLD=[0,.99,1]}),"20eb5e",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=babelHelpers.interopRequireDefault(r(d[0])),l=babelHelpers.interopRequireDefault(r(d[1])),n=r(d[2]),o=babelHelpers.interopRequireDefault(r(d[3]));function s(){const t=r(d[4]);return s=function(){return t},t}var u=babelHelpers.interopRequireWildcard(r(d[5])),p=babelHelpers.interopRequireDefault(r(d[6])),f=babelHelpers.interopRequireDefault(r(d[7])),c=r(d[8]),b=babelHelpers.interopRequireDefault(r(d[9])),v=babelHelpers.interopRequireDefault(r(d[10])),h=r(d[11]);var H=(0,o.default)((0,n.withStyles)(({dls19:t})=>({container:{...(0,p.default)(t).subtitleMutedTall,[t.responsive.queries.mediumAndAbove]:{whiteSpace:'nowrap',overflow:'hidden'}},loadingNav:{height:c.NAV_HEIGHT+"px"},logo:{display:'inline-block',marginRight:c.NAV_ITEM_SPACING,verticalAlign:'middle'},navItemsContainer:{display:'inline-block',whiteSpace:'nowrap'}})))(t.default.memo((function({css:t,metadata:n,section:o,styles:p,platformNetworkStatus:H}){const{navItems:R,logo:_}=o,q=(0,u.default)()===u.FORM_FACTOR.WIDE;return n&&H!==s().NetworkStatus.loading?R?(0,h.jsxs)("div",{...t(p.container),children:[_&&q&&(0,h.jsx)("div",{...t(p.logo),children:(0,h.jsx)("a",{href:"/","aria-label":l.default.t('simple_nav.header.homepage'),children:(0,h.jsx)(v.default,{logo:_,height:c.NAV_LOGO_HEIGHT})})}),(0,h.jsx)("div",{...t(p.navItemsContainer),children:R.map((t,l)=>(0,h.jsx)(b.default,{item:t},t.id||l))})]}):(0,f.default)({expectedFields:['navItems'],response:o}):(0,h.jsx)("div",{...t(p.loadingNav)})})));e.default=H}),"2217ab",["d7ed8e","6898d5","bf663a","a44a0d","1e513d","f7fa17","abcc17","b6cec9","20eb5e","5d7885","397d85","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({accessibilityLabel:o,height:P=0,logo:h}){let R;switch(h){case'PLUS':R=s;break;case'LUXE':R=n;break;case'OLYMPICS':R=c;break;case'PARALYMPICS':R=b;break;case'TOKYO_2020_OLYMPICS':R=u;break;case'TOKYO_2020_PARALYMPICS':R=L;break;case'AIRBNB_OLYMPICS_PARALYMPICS_PARTNERSHIP':R=p;break;default:R=void 0}const[y,O]=(0,l.useState)(()=>R?R.value:null);if((0,l.useEffect)(()=>{R&&R().then(l=>{O(()=>l)})}),!R)return null;if(y)return(0,t.jsx)(y,{accessibilityLabel:o,height:P});return(0,t.jsx)("div",{style:{height:P}})};var l=babelHelpers.interopRequireWildcard(r(d[0])),o=r(d[1]),t=(r(d[2]),r(d[3]));const s=(0,o.normalizeLoader)(()=>r(d[5])(d[4],"./PlusLogo").then(babelHelpers.interopRequireWildcard)),n=(0,o.normalizeLoader)(()=>r(d[5])(d[6],"./LuxeLogo").then(babelHelpers.interopRequireWildcard)),c=(0,o.normalizeLoader)(()=>r(d[5])(d[7],"./OlympicsLogo").then(babelHelpers.interopRequireWildcard)),b=(0,o.normalizeLoader)(()=>r(d[5])(d[8],"./ParalympicsLogo").then(babelHelpers.interopRequireWildcard)),u=(0,o.normalizeLoader)(()=>r(d[5])(d[9],"./Tokyo2020OlympicsLogo").then(babelHelpers.interopRequireWildcard)),L=(0,o.normalizeLoader)(()=>r(d[5])(d[10],"./Tokyo2020ParalympicsLogo").then(babelHelpers.interopRequireWildcard)),p=(0,o.normalizeLoader)(()=>r(d[5])(d[11],"./AirbnbOlympicsParalympicsPartnershipLogo").then(babelHelpers.interopRequireWildcard))}),"397d85",["d7ed8e","58c24c","4b299b","721ed1","97c106","b8ad06","4c22ed","b4b5be","6f296e","5f303d","9835c2","953e29"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setImpressionId=e.resetImpressionId=e.default=void 0;var s=r(d[0]);let t;const o=()=>{t="p3_"+(0,s.computeBev)()};e.resetImpressionId=o;e.setImpressionId=s=>{t=s},o();e.default=()=>t}),"3ce4f9",["d18067"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SIDEBAR_MARGIN_TOP=e.PREAPPROVAL=void 0;e.SIDEBAR_MARGIN_TOP=24;e.PREAPPROVAL='preapproval'}),"408ae0",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pressableCssFragments=e.default=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);let s,l,c=t=>t;const h={component:(0,n.cssFragment)(s||(s=c`
    background: transparent;
    border: none;
    border-radius: 0;
    color: inherit;
    display: block;
    margin: 0;
    /* stylelint-disable declaration-block-no-shorthand-property-overrides */
    padding: 0;
    /* stylelint-enable declaration-block-no-shorthand-property-overrides */
    text-align: inherit;
    text-decoration: none;
    height: 100%;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;

    /* stylelint-disable declaration-block-no-shorthand-property-overrides */
    ${0}
    /* stylelint-enable declaration-block-no-shorthand-property-overrides */
    
    ${0}

    &:active {
      transform: none;
    }
  `),o.resetFocusStyles,(0,o.getKeyboardFocusSelectors)((0,n.cssFragment)(l||(l=c`
      ${0}
    `),(0,o.getFocusTransitionStyles)())))};e.pressableCssFragments=h;var b=(0,t.cssFragmentsObjToStylesFn)(h);e.default=b}),"4424ad",["0acceb","5f1f1f","90390a"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getSearchContext=function(){const c=t.default.parse((document.referrer||'').replace(/.*?\?/,'')),s=c.check_in||c.check_out?[c.check_in,c.check_out]:void 0,o=c.guests?Number.parseInt(c.guests,10):void 0;return{search_id:c.s_tag||'',mobile_search_session_id:'',location:c.location,dates:s,guests:o}},e.getSearchContextFromRoute=function(c){const s=t.default.parse((c||'').replace(/.*?\?/,'')),o=s.check_in||s.check_out?[s.check_in,s.check_out]:void 0,n=s.guests?Number.parseInt(s.guests,10):void 0;return{search_id:s.searchId||'',mobile_search_session_id:'',federated_search_id:s.federatedSearchId||'',section_id:s.sectionId||'',location:s.location,dates:o,guests:n}};var t=babelHelpers.interopRequireDefault(r(d[0]))}),"5b832f",["d2b390"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=babelHelpers.interopRequireDefault(r(d[0])),l=r(d[1]),n=babelHelpers.interopRequireDefault(r(d[2])),o=babelHelpers.interopRequireDefault(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),p=babelHelpers.interopRequireDefault(r(d[5])),u=r(d[6]),c=r(d[7]),f=babelHelpers.interopRequireDefault(r(d[8])),b=r(d[9]),h=r(d[10]);var y=(0,l.withStyles)(({dls19:t})=>({itemContainer:{display:'inline-block',marginRight:u.NAV_ITEM_SPACING},item:{color:t.palette.hof,fontWeight:t.typography.weight.medium,padding:3.75*t.spacing.primitives.baseUnit+"px 0",display:'inline-block',textDecoration:'none',position:'relative',':after':{backgroundColor:t.palette.hof,content:'""',display:'block',bottom:0,height:.5*t.spacing.primitives.baseUnit,opacity:0,position:'absolute',transition:'opacity 0.15s ease',width:'100%'},':hover':{':after':{opacity:1}}},count:{...(0,s.default)(t).smallText,marginLeft:.5*t.spacing.primitives.baseUnit}}))(t.default.memo((function({css:t,styles:l,item:s,item:{id:u,scrollId:y,title:v,count:S,loggingEventData:q}}){const[x]=(0,c.useUIState)(b.ForSplitStays);return u&&v&&y?(0,h.jsx)("div",{...t(l.itemContainer),children:(0,h.jsx)(n.default,{onPress:()=>(function(t,l){const n=document.querySelector(`div[data-plugin-in-point-id=${t}]`)||document.querySelector(`div[data-section-id=${t}]`);n&&(0,f.default)({forSplitStays:l,targetSection:n,scrollId:t})})(y,x),...(0,o.default)(q),children:(0,h.jsxs)("div",{...t(l.item),children:[v,S&&(0,h.jsxs)("span",{...t(l.count),children:["(",S,")"]})]})})},u):(0,p.default)({expectedFields:['id','scrollId','title'],response:s})})));e.default=y}),"5d7885",["d7ed8e","bf663a","f9074d","a70688","abcc17","b6cec9","20eb5e","9e67c0","889457","bd089b","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";let u,A,F,D,E,B,C,_;Object.defineProperty(e,"__esModule",{value:!0}),e.YEARS=e.WEEKDAYS=e.VERTICAL_BORDER_SPACING=e.UNICODE_LETTERS_REGEX=e.REACT_DATES_PADDING=e.OpenDirection=e.NavPosition=e.NUM_WEEK_DAYS=e.MONTHS=e.MONTH=e.MODIFIER_KEY_NAMES=e.IconPosition=e.ISO_FORMAT=e.GUEST_CALENDAR_MAX_DATE_MONTH_ADDITION=e.FocusedInput=e.DISPLAY_FORMAT=e.DEFAULT_NUMBER_OF_MONTHS_VERTICAL=e.DEFAULT_NUMBER_OF_MONTHS=e.DEFAULT_CALENDAR_DAY_SIZE=e.DAYS=e.CalendarOrientation=e.CalendarNavigationDirection=e.CalendarInfoPosition=e.CalendarDayTooltipAlign=e.CALENDAR_DAY_SPACING=e.BOTTOM_CONTROLS_INSET_PX=e.BLOCKED_MODIFIER=e.ARIA_LABEL_FORMAT=void 0,e.CalendarDayTooltipAlign=u,(function(u){u.LEFT="left",u.CENTER="center",u.RIGHT="right"})(u||(e.CalendarDayTooltipAlign=u={})),e.CalendarNavigationDirection=A,(function(u){u[u.NEXT=0]="NEXT",u[u.PREV=1]="PREV"})(A||(e.CalendarNavigationDirection=A={})),e.FocusedInput=F,(function(u){u.START_DATE="startDate",u.END_DATE="endDate"})(F||(e.FocusedInput=F={})),e.CalendarOrientation=D,(function(u){u.HORIZONTAL="horizontal",u.VERTICAL="vertical",u.VERTICAL_SCROLLABLE="verticalScrollable"})(D||(e.CalendarOrientation=D={})),e.NavPosition=E,(function(u){u.NAV_POSITION_BOTTOM="navPositionBottom",u.NAV_POSITION_TOP="navPositionTop"})(E||(e.NavPosition=E={})),e.CalendarInfoPosition=B,(function(u){u.INFO_POSITION_TOP="top",u.INFO_POSITION_BOTTOM="bottom",u.INFO_POSITION_BEFORE="before",u.INFO_POSITION_AFTER="after"})(B||(e.CalendarInfoPosition=B={})),e.OpenDirection=C,(function(u){u.OPEN_DOWN="down",u.OPEN_UP="up"})(C||(e.OpenDirection=C={})),e.IconPosition=_,(function(u){u.ICON_BEFORE_POSITION="before",u.ICON_AFTER_POSITION="after"})(_||(e.IconPosition=_={}));e.BLOCKED_MODIFIER='blocked';e.UNICODE_LETTERS_REGEX=/[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/iu;e.DISPLAY_FORMAT='L';e.ISO_FORMAT='YYYY-MM-DD';e.ARIA_LABEL_FORMAT='dddd, LL';e.CALENDAR_DAY_SPACING=2;e.VERTICAL_BORDER_SPACING=2;e.BOTTOM_CONTROLS_INSET_PX=34;e.REACT_DATES_PADDING=26;e.DEFAULT_CALENDAR_DAY_SIZE=44;e.DEFAULT_NUMBER_OF_MONTHS=1;e.DEFAULT_NUMBER_OF_MONTHS_VERTICAL=4;e.DAYS='days';e.MONTH='month';e.MONTHS='months';e.YEARS='years';e.WEEKDAYS=[0,1,2,3,4,5,6];e.NUM_WEEK_DAYS=7;const O=new Set(['Shift','Control','Alt','Meta']);e.MODIFIER_KEY_NAMES=O;e.GUEST_CALENDAR_MAX_DATE_MONTH_ADDITION=23}),"85c8cd",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({targetSection:T,scrollId:_=null,forSplitStays:o=!1}){const t=(function(E,T){if(!E)return 0;return(T?I[E]:O[E])||0})(_,o),A=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,L=T.getBoundingClientRect(),H=A+L.top-t;(0,E.default)(T),window.scrollTo(0,A),window.scrollTo({left:0,top:H,behavior:'smooth'})};var E=babelHelpers.interopRequireDefault(r(d[0])),T=r(d[1]),_=r(d[2]);const o=T.NAV_HEIGHT-1,t=2*T.NAV_HEIGHT-1,O={AMENITIES_DEFAULT:o,BOOK_IT_SIDEBAR:o+_.SIDEBAR_MARGIN_TOP,HERO_DEFAULT:112,HERO_HOTEL:112,HERO_LUXE:112,HERO_PLUS:112,HOST_PROFILE_DEFAULT:o,HOST_PROFILE_DESKTOP:o,LOCATION_DEFAULT:o,REVIEWS_DEFAULT:o,REVIEWS_EMPTY_DEFAULT:o,TITLE_DEFAULT:-5},I={AMENITIES_DEFAULT:t,BOOK_IT_SIDEBAR:t+_.SIDEBAR_MARGIN_TOP,HERO_DEFAULT:T.NAV_HEIGHT+86,HERO_HOTEL:T.NAV_HEIGHT+86,HERO_LUXE:T.NAV_HEIGHT+86,HERO_PLUS:T.NAV_HEIGHT+86,HOST_PROFILE_DEFAULT:t,HOST_PROFILE_DESKTOP:t,LOCATION_DEFAULT:t,REVIEWS_DEFAULT:t,REVIEWS_EMPTY_DEFAULT:t,TITLE_DEFAULT:-5}}),"889457",["e63d3e","20eb5e","408ae0"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s,e.getClientLoggingEventDataForManualLogging=function(n,t,o){const u=s(n,t);if(!u)return null;const{product_id:c,pdp_type:l}=o||{};return u.eventData={...u.eventData,pdp_type:l,product_id:c},u},e.getClientLoggingEventDataForUniversalPageImpression=function(n){const{search:u,...c}=n;return{...c,pdp_impression_id:(0,o.default)(),search_context:n.search?(0,t.getSearchContextFromRoute)(n.search):void 0}},e.getClientLoggingEventDataViaduct=function(s,l){if(!s)return null;const{loggingId:p}=s;if(!p)return null;return{componentName:c(s),loggingID:p,eventDataSchema:n().ClientEventData,eventData:{component:c(s),pdp_impression_id:(0,o.default)(),search_context:(0,t.getSearchContext)(),pdp_context:u(l)}}},e.transformClientLoggingData=function(n){const{experiences_data:t,stays_data:u}=n;return{...n,pdp_impression_id:(0,o.default)(),experiences_data:t?l(t):null,stays_data:u?p(u):null}};var t=r(d[1]),o=babelHelpers.interopRequireDefault(r(d[2]));function u(n){return n?(Object.keys(n).forEach(t=>{'object'==typeof n[t]&&(n[t]=JSON.stringify(n[t]))}),n):n}function c(n){const t=n.component;return(null==n?void 0:n.loggingId)||t||void 0}function s(s,l){if(!s)return null;const{loggingId:p}=s;return p?{componentName:c(s),loggingID:p,eventDataSchema:n().ClientEventData,eventData:{pdp_impression_id:(0,o.default)(),section:s.section||void 0,component:c(s),search_context:(0,t.getSearchContext)(),pdp_context:u(l)}}:null}function l(n){const{num_adults:t,num_children:o,num_infants:u}=n;return{...n,num_adults:t?parseInt(t,10):void 0,num_children:o?parseInt(o,10):void 0,num_infants:u?parseInt(u,10):void 0}}function p(n){const{num_adults:t,num_children:o,num_infants:u}=n;return{...n,num_adults:t?parseInt(t,10):void 0,num_children:o?parseInt(o,10):void 0,num_infants:u?parseInt(u,10):void 0}}}),"a70688",["01f8bb","5b832f","3ce4f9"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const o={color:t.palette.hof,fontFamily:t.typography.fontFamily,fontWeight:t.typography.weight.book},l={color:t.palette.foggy,fontFamily:t.typography.fontFamily,fontWeight:t.typography.weight.book};return{base:o,baseMuted:l,sectionTitle:{...o,...t.typography.titles.sm,fontWeight:t.typography.weight.medium},body:{...o,...t.typography.base.lg},bodyTall:{...o,...t.typography.base.lg_tall},bodyHeading:{...o,...t.typography.base.lg,fontWeight:t.typography.weight.medium},bodyHeadingTall:{...o,...t.typography.base.lg_tall,fontWeight:t.typography.weight.medium},smallText:{...o,...t.typography.base.sm},smallTextMuted:{...l,...t.typography.base.sm},subtitle:{...o,...t.typography.base.md,fontWeight:t.typography.weight.book},subtitleTall:{...o,...t.typography.base.md_tall,fontWeight:t.typography.weight.book},subtitleMuted:{...l,...t.typography.base.md,fontWeight:t.typography.weight.book},subtitleMutedTall:{...l,...t.typography.base.md_tall,fontWeight:t.typography.weight.book},largeText:{...o,...t.typography.base.xl},largeTextTall:{...o,...t.typography.base.xl_tall},modalTitle:{...o,...t.typography.titles.md,fontWeight:t.typography.weight.bold,[t.responsive.queries.mediumAndAbove]:{...t.typography.titles.lg}},modalGroupTitle:{...o,...t.typography.titles.xs,fontWeight:t.typography.weight.medium}}},e.pdpTypographyConfigLinaria=void 0;var t=babelHelpers.interopRequireDefault(r(d[0])),o=babelHelpers.interopRequireDefault(r(d[1]));e.pdpTypographyConfigLinaria=()=>{const l={color:t.default.palette.hof,fontFamily:t.default.typography.fontFamilyCereal.fontFamily,fontWeight:t.default.typography.weightBook400},p={color:t.default.palette.foggy,fontFamily:t.default.typography.fontFamilyCereal.fontFamily,fontWeight:t.default.typography.weightBook400};return{base:{...l},baseMuted:{...p},sectionTitle:{...l,...t.default.typography.titleSmall22px,fontWeight:t.default.typography.weightMedium600},body:{...l,...t.default.typography.baseLarge16px},bodyTall:{...l,...t.default.typography.baseLargeTall16px},bodyHeading:{...l,...t.default.typography.baseLarge16px,fontWeight:t.default.typography.weightMedium600},bodyHeadingTall:{...l,...t.default.typography.baseLargeTall16px,fontWeight:t.default.typography.weightMedium600},smallText:{...l,...t.default.typography.baseSmall12px},smallTextMuted:{...p,...t.default.typography.baseSmall12px},subtitle:{...l,...t.default.typography.baseMedium14px,fontWeight:t.default.typography.weightBook400},subtitleTall:{...l,...t.default.typography.baseMediumTall14px,fontWeight:t.default.typography.weightBook400},subtitleMuted:{...p,...t.default.typography.baseMedium14px,fontWeight:t.default.typography.weightBook400},subtitleMutedTall:{...p,...t.default.typography.baseMediumTall14px,fontWeight:t.default.typography.weightBook400},largeText:{...l,...t.default.typography.baseExtraLarge18px},largeTextTall:{...l,...t.default.typography.baseExtraLargeTall18px},modalTitle:{...l,...t.default.typography.titleMedium26px,fontWeight:t.default.typography.weightBold800,[o.default.mediumAndAbove]:{...t.default.typography.titleLarge32px}},modalGroupTitle:{...l,...t.default.typography.titleExtraSmall18px,fontWeight:t.default.typography.weightMedium600}}}}),"abcc17",["a2ecf6","cf2f78"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({expectedFields:t,response:o}){let l=`Expected non-null ${t.join(', ')}.`;o&&(l+="\nGot "+JSON.stringify(o,null,2));const u=new Error(l);return(0,n.reportError)(u),null};var n=r(d[0])}),"b6cec9",["5511db"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UpdatedAmenities=e.SubpageId=e.ShowUpdatedAmenityToast=e.ShowStickyNav=e.ShowBookItInStickyNav=e.PlaceApiVariables=e.ListingId=e.GuestDetails=e.ForSplitStays=e.CheckOut=e.CheckIn=e.CalendarFocusedInput=void 0;var t=r(d[0]),s=r(d[1]);let c;e.SubpageId=c,(function(t){t.ACCESSIBILITY="accessibility-features",t.AMENITIES="amenities",t.BOOK_IT="book-it",t.BUSINESS_DETAILS="business-details",t.CALENDAR="calendar",t.CANCELLATIONS="cancellation-policy",t.CONTACT_TRIP_DESIGNER="contact-trip-designer",t.DEFAULT="nav",t.DESCRIPTION="description",t.HOUSE_RULES="house-rules",t.LOCATION="location",t.PHOTOS="photos",t.REVIEWS="reviews",t.ROOMS="room-overview",t.SAFETY="safety",t.CLEANING="enhanced-cleaning",t.LR_REDIRECT="lr-redirect",t.MAP="map",t.SEND_MESSAGE="send-message",t.DOCUMENT_DISPLAY="document-display"})(c||(e.SubpageId=c={}));const n=(0,s.createUIKey)('showStickyNav');e.ShowStickyNav=n;const o=(0,s.createUIKey)('placeApiVariables');e.PlaceApiVariables=o;const I=(0,s.createUIKey)('showBookItInStickyNav');e.ShowBookItInStickyNav=I;const l=(0,s.createUIKey)('calendarFocusedInput',{getDefault:()=>t.FocusedInput.START_DATE});e.CalendarFocusedInput=l;const S=(0,s.createUIKey)('checkIn',{getDefault:()=>null});e.CheckIn=S;const u=(0,s.createUIKey)('checkOut',{getDefault:()=>null});e.CheckOut=u;const p=(0,s.createUIKey)('listingId',{getDefault:()=>''});e.ListingId=p;const y=(0,s.createUIKey)('guestDetails',{getDefault:()=>({adults:1,children:0,infants:0,pets:0})});e.GuestDetails=y;const A=(0,s.createUIKey)('showUpdatedAmenityToast');e.ShowUpdatedAmenityToast=A;const E=(0,s.createUIKey)('updatedAmenities');e.UpdatedAmenities=E;const T=(0,s.createUIKey)('forSplitStays',{getDefault:()=>!1});e.ForSplitStays=T}),"bd089b",["85c8cd","978c20"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(d[0]),t=r(d[1]),l=r(d[2]),n=r(d[3]),o=babelHelpers.interopRequireDefault(r(d[4])),u=r(d[5]),b=r(d[6]),c=r(d[7]);let f;const p=(0,n.mergeStyles)(u.baseButtonCssFragments,b.dls19CssFragments,c.pressableCssFragments,{component:(0,l.cssFragment)(f||(f=(s=>s)`
      border-radius: ${0};
    `),l.theme.cornerRadius.small8px.borderRadius)});(0,t.cssFragmentsObjToStylesFn)(p);var y=(0,o.default)(s.BaseButtonOrAnchor,{linariaClassNames:{base:"b1e9bd9m",component:"c1isyb64",fullWidth:"fpy18wl",showOnlyOnKeyboardFocus:"sl382kx"}});e.default=y}),"f9074d",["ae643a","0acceb","5f1f1f","90390a","a15623","a4d3a4","5ffff6","4424ad"]);
__r("6898d5").extend({"simple_nav.header.homepage":"Airbnb homepage"});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-pdp-core-ui-sections/sections/Nav/NavSection.09212d2c31.js.map