/*! For license information please see _app.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("q1tI")),a=r("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,a=e.hasQuery;return r||i&&(void 0!==a&&a)}t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))}},0:function(e,t,r){r("cM/9"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return W}));var n=r("o0o1"),i=r.n(n),a=r("1OyB"),o=r("vuIU"),s=r("Ji7U"),u=r("md7G"),c=r("foSv"),l=r("q1tI"),f=r.n(l),h=r("i8i4"),d=r.n(h),p=r("8Bbg"),m=r.n(p),v=r("8Kt/"),g=r.n(v),_=r("nOHt"),y=r.n(_),b=r("rePB"),k=r("R/WZ"),w=r("wx14"),S=r("Ff2n"),O=(r("17x9"),r("iuhU")),C=r("H2TA"),E=r("NqtD");function x(e){var t,r,n;return t=e,r=0,n=1,e=(Math.min(Math.max(r,t),n)-r)/(n-r),e=(e-=1)*e*e+1}var R=l.forwardRef((function(e,t){var r,n=e.classes,i=e.className,a=e.color,o=void 0===a?"primary":a,s=e.disableShrink,u=void 0!==s&&s,c=e.size,f=void 0===c?40:c,h=e.style,d=e.thickness,p=void 0===d?3.6:d,m=e.value,v=void 0===m?0:m,g=e.variant,_=void 0===g?"indeterminate":g,y=Object(S.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),b={},k={},C={};if("determinate"===_||"static"===_){var R=2*Math.PI*((44-p)/2);b.strokeDasharray=R.toFixed(3),C["aria-valuenow"]=Math.round(v),"static"===_?(b.strokeDashoffset="".concat(((100-v)/100*R).toFixed(3),"px"),k.transform="rotate(-90deg)"):(b.strokeDashoffset="".concat((r=(100-v)/100,r*r*R).toFixed(3),"px"),k.transform="rotate(".concat((270*x(v/70)).toFixed(3),"deg)"))}return(l.createElement("div",Object(w.a)({className:Object(O.a)(n.root,i,"inherit"!==o&&n["color".concat(Object(E.a)(o))],{indeterminate:n.indeterminate,static:n.static}[_]),style:Object(w.a)(Object(w.a)({width:f,height:f},k),h),ref:t,role:"progressbar"},C,y),l.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},l.createElement("circle",{className:Object(O.a)(n.circle,u&&n.circleDisableShrink,{indeterminate:n.circleIndeterminate,static:n.circleStatic}[_]),style:b,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p}))))})),A=Object(C.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(R),D=r("bdwN"),I=f.a.createElement;function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var M=Object(k.a)({progress:{color:D.i,width:"6rem !important",height:"6rem !important"},wrapperDiv:{margin:"100px auto",padding:"0px",maxWidth:"360px",textAlign:"center",position:"relative",zIndex:"9999",top:"0"},iconWrapper:{display:"block"},title:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},D.m,{color:"#FFFFFF"})});function P(e){var t=M();return I("div",null,I("div",{className:t.wrapperDiv},I("div",{className:t.iconWrapper},I(A,{className:t.progress})),I("h4",{className:t.title},"Loading ...")))}var j=r("S7xd"),L=r("VphZ"),N=(r("bwSX"),r("NpuA")),F=r.n(N),B=r("T8Br"),U={1:"AF",2:"AL",3:"DZ",4:"AD",5:"AO",6:"AG",7:"AR",8:"AM",9:"AU",10:"AT",11:"AZ",12:"BS",13:"BH",14:"BD",15:"BB",16:"BY",17:"BE",18:"BZ",19:"BJ",20:"BT",21:"BO",22:"BA",23:"BW",24:"BR",25:"BN",26:"BG",27:"BF",28:"BI",29:"KH",30:"CM",31:"CA",32:"CV",33:"CF",34:"TD",35:"CL",36:"CN",37:"CO",38:"KM",39:"CG",40:"CR",41:"CI",42:"HR",43:"CU",44:"CY",45:"CZ",46:"KP",47:"CD",48:"DK",49:"DJ",50:"DM",51:"DO",52:"EC",53:"EG",54:"SV",55:"GQ",56:"ER",57:"EE",58:"ET",59:"FJ",60:"FI",61:"FR",62:"GA",63:"GM",64:"GE",65:"DE",66:"GH",67:"GR",68:"GD",69:"GT",70:"GN",71:"GW",72:"GY",73:"HT",74:"HN",75:"HU",76:"IS",77:"IN",78:"ID",79:"IR",80:"IQ",81:"IE",82:"IL",83:"IT",84:"JM",85:"JP",86:"JO",87:"KZ",88:"KE",89:"KI",90:"KW",91:"KG",92:"LA",93:"LV",94:"LB",95:"LS",96:"LR",97:"LY",98:"LI",99:"LT",100:"LU",101:"MG",102:"MW",103:"MY",104:"MV",105:"ML",106:"MT",107:"MH",108:"MR",109:"MU",110:"MX",111:"FM",112:"MC",113:"MN",114:"ME",115:"MA",116:"MZ",117:"MM",118:"NA",119:"NR",120:"NP",121:"NL",122:"NZ",123:"NI",124:"NE",125:"NG",126:"NO",127:"OM",128:"PK",129:"PW",130:"PA",131:"PG",132:"PY",133:"PE",134:"PH",135:"PL",136:"PT",137:"QA",138:"KR",139:"MD",140:"RO",141:"RU",142:"RW",143:"KN",144:"LC",145:"VC",146:"WS",147:"SM",148:"ST",149:"SA",150:"SN",151:"RS",152:"SC",153:"SL",154:"SG",155:"SK",156:"SI",157:"SB",158:"SO",159:"ZA",160:"SS",161:"ES",162:"LK",163:"SD",164:"SR",165:"SZ",166:"CH",167:"SE",168:"SY",169:"TJ",170:"TH",171:"MK",172:"TL",173:"TG",174:"TO",175:"TT",176:"TN",177:"TR",178:"TM",179:"TV",180:"UG",181:"UA",182:"AE",183:"GB",184:"TN",185:"US",186:"UY",187:"UZ",188:"VU",189:"VE",190:"VN",191:"YE",192:"ZM",193:"ZW"};function z(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var G=function(){function e(t){Object(a.a)(this,e),this.all_data=t}return Object(o.a)(e,[{key:"get_all_data",value:function(){return this.all_data}},{key:"get_submission_dates",value:function(){return this.all_data.map((function(e){return e.enddate}))}},{key:"get_femown_counts",value:function(){var e={1:0,2:0};return this.all_data.map((function(t){var r=t.femown;r in e&&(e[r]+=1)})),e}},{key:"get_revchange_bizsector_rollup",value:function(){var e,t=[],r=z(L.f(this.all_data,(function(e){return B.a[e.bizsector]}),(function(e){return B.d[e.revchange]})));try{for(r.s();!(e=r.n()).done;){var n=e.value,i=new Object;i.name=n[0];var a,o=z(n[1]);try{for(o.s();!(a=o.n()).done;){var s=a.value;i[s[0]]=s[1].length}}catch(u){o.e(u)}finally{o.f()}t.push(i)}}catch(u){r.e(u)}finally{r.f()}return t=t.sort((function(e,t){var r=e["- >30%"]+e["- 10-30%"]+e["- <10%"],n=t["- >30%"]+t["- 10-30%"]+t["- <10%"],i=e["- >30%"]+e["- 10-30%"]+e["- <10%"]+e.Neutral+e["+ >30%"]+e["+ 10-30%"]+e["+ <10%"],a=t["- >30%"]+t["- 10-30%"]+t["- <10%"]+t.Neutral+t["+ >30%"]+t["+ 10-30%"]+t["+ <10%"];return r/i>n/a?-1:r/i<n/a?1:0}))}},{key:"get_country_counts",value:function(){var e,t={},r=z(L.f(this.all_data,(function(e){return U[e.country]})));try{for(r.s();!(e=r.n()).done;){var n=e.value;t[n[0]]=n[1].length}}catch(i){r.e(i)}finally{r.f()}return t}},{key:"get_country_challenges_rollup",value:function(){var e,t={},r=z(this.all_data);try{for(r.s();!(e=r.n()).done;){var n=e.value,i=U[n.country];i in t||(t[i]={});var a,o=z(B.c);try{for(o.s();!(a=o.n()).done;){var s=a.value,u=B.b[s];u in t[i]||(t[i][u]=0),t[i][u]+=parseInt(n[s])}}catch(c){o.e(c)}finally{o.f()}"total"in t[i]||(t[i].total=0),t[i].total+=1}}catch(c){r.e(c)}finally{r.f()}return t}},{key:"get_country_timeopen_rollup",value:function(){var e,t={},r=z(this.all_data);try{for(r.s();!(e=r.n()).done;){var n=e.value,i=U[n.country];i in t||(t[i]={});var a=B.e[n.timeopen];a in t[i]||(t[i][a]=0),t[i][a]+=1,"total"in t[i]||(t[i].total=0),t[i].total+=1}}catch(o){r.e(o)}finally{r.f()}return t}}],[{key:"from_csv_string",value:function(t){return new e(F.a.parse(t,{header:!0,dynamicTyping:!1,skipEmptyLines:!0}).data)}}]),e}(),K=(r("Fnkk"),f.a.createElement);function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}y.a.events.on("routeChangeStart",(function(e){console.log("Loading: ".concat(e)),document.body.classList.add("body-page-transition"),d.a.render(K(P,{path:e}),document.getElementById("page-transition"))})),y.a.events.on("routeChangeComplete",(function(){d.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")})),y.a.events.on("routeChangeError",(function(){d.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")}));var W=function(e){Object(s.a)(r,e);var t=H(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return K(f.a.Fragment,null,K(g.a,null,K("title",null,"Covid-19 SME Survey in LDCs")),K(t,r))}}],[{key:"getInitialProps",value:function(){var e,t;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=G.from_csv_string(j.a),t={all_data:e.get_all_data(),femown_counts:e.get_femown_counts(),submission_dates:e.get_submission_dates(),revchange_x_bizsector:e.get_revchange_bizsector_rollup(),country_counts:e.get_country_counts(),country_x_challenges:e.get_country_challenges_rollup(),country_x_timeopen:e.get_country_timeopen_rollup()},r.abrupt("return",{pageProps:t});case 3:case"end":return r.stop()}}),null,null,null,Promise)}}]),r}(m.a)},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"8Kt/":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("q1tI")),a=n(r("Xuae")),o=r("lwAK"),s=r("FYa8"),u=r("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var c=f[s];if(i.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?a=!1:r.add(c);else{var l=i.props[c],h=n[c]||new Set;h.has(l)?a=!1:(h.add(l),n[c]=h)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return i.default.cloneElement(e,{key:r})}))}var d=a.default();function p(e){var t=e.children;return i.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(s.HeadManagerContext.Consumer,null,(function(r){return i.default.createElement(d,{reduceComponentsToState:h,handleStateChange:r,inAmpMode:u.isInAmpMode(e)},t)}))}))}p.rewind=d.rewind,t.default=p},B5Ud:function(e,t,r){"use strict";var n=r("/GRZ"),i=r("i2R6"),a=r("48fX"),o=r("tCBg"),s=r("T0f4"),u=r("vJKn");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var i=s(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return o(this,r)}}var l=r("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var f=l(r("q1tI")),h=r("g/15");function d(e){var t,r,n;return u.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.Component,r=e.ctx,i.next=3,u.awrap((0,h.loadGetInitialProps)(t,r));case 3:return n=i.sent,i.abrupt("return",{pageProps:n});case 5:case"end":return i.stop()}}),null,null,null,Promise)}t.AppInitialProps=h.AppInitialProps;var p=function(e){a(r,e);var t=c(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,i=e.__N_SSG,a=e.__N_SSP;return f.default.createElement(r,Object.assign({},n,i||a?{}:{url:m(t)}))}}]),r}(f.default.Component);function m(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",i=r||t;return e.push(n,i)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",i=r||t;return e.replace(n,i)}}}t.default=p,p.origGetInitialProps=d,p.getInitialProps=d},FYa8:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("q1tI"));t.HeadManagerContext=i.createContext(null)},Ji7U:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return i}))},NpuA:function(e,t,r){var n,i,a;i=[],void 0===(a="function"===typeof(n=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=r&&/blob:/i.test((t.location||{}).protocol),i={},a=0,o={parse:function(r,n){var s=(n=n||{}).dynamicTyping||!1;if(k(s)&&(n.dynamicTypingFunction=s,s={}),n.dynamicTyping=s,n.transform=!!k(n.transform)&&n.transform,n.worker&&o.WORKERS_SUPPORTED){var u=function(){if(!o.WORKERS_SUPPORTED)return!1;var r,n,s=(r=t.URL||t.webkitURL||null,n=e.toString(),o.BLOB_URL||(o.BLOB_URL=r.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(s);return u.onmessage=v,u.id=a++,i[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void u.postMessage({input:r,config:n,workerId:u.id})}var d=null;return o.NODE_STREAM_INPUT,"string"==typeof r?d=n.download?new c(n):new f(n):!0===r.readable&&k(r.read)&&k(r.on)?d=new h(n):(t.File&&r instanceof File||r instanceof Object)&&(d=new l(n)),d.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",a="\r\n",s='"',u=s+s,c=!1,l=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(a=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+s),"boolean"==typeof t.escapeFormulae&&(f=t.escapeFormulae)}}();var h=new RegExp(p(s),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return m(null,e,c);if("object"==typeof e[0])return m(l||d(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:d(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),m(e.fields||[],e.data||[],c);throw new Error("Unable to serialize unrecognized input");function d(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function m(e,t,r){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var s=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(s&&n){for(var c=0;c<e.length;c++)0<c&&(o+=i),o+=v(e[c],c);0<t.length&&(o+=a)}for(var l=0;l<t.length;l++){var f=s?e.length:t[l].length,h=!1,d=s?0===Object.keys(t[l]).length:0===t[l].length;if(r&&!s&&(h="greedy"===r?""===t[l].join("").trim():1===t[l].length&&0===t[l][0].length),"greedy"===r&&s){for(var p=[],m=0;m<f;m++){var g=u?e[m]:m;p.push(t[l][g])}h=""===p.join("").trim()}if(!h){for(var _=0;_<f;_++){0<_&&!d&&(o+=i);var y=s&&u?e[_]:_;o+=v(t[l][y],_)}l<t.length-1&&(!r||0<f&&!d)&&(o+=a)}}return o}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===f&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var n=e.toString().replace(h,u);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(n,o.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1)?s+n+s:n}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\ufeff",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!r&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=m,o.ParserHandle=d,o.NetworkStreamer=c,o.FileStreamer=l,o.StringStreamer=f,o.ReadableStreamStreamer=h,t.jQuery){var s=t.jQuery;s.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==s(this).prop("tagName").toUpperCase()||"file"!==s(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:s.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,u=n[0];if(k(e.before)){var c=e.before(u.file,u.inputElem);if("object"==typeof c){if("abort"===c.action)return t=u.file,r=u.inputElem,i=c.reason,void(k(e.error)&&e.error({name:"AbortError"},t,r,i));if("skip"===c.action)return void a();"object"==typeof c.config&&(u.instanceConfig=s.extend(u.instanceConfig,c.config))}else if("skip"===c)return void a()}var l=u.instanceConfig.complete;u.instanceConfig.complete=function(e){k(l)&&l(e,u.file,u.inputElem),a()},o.parse(u.file,u.instanceConfig)}else k(e.complete)&&e.complete()}function a(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var s=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=s.meta.cursor;this._finished||(this._partialLine=a.substring(u-this._baseIndex),this._baseIndex=u),s&&s.data&&(this._rowCount+=s.data.length);var c=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:s,workerId:o.WORKER_ID,finished:c});else if(k(this._config.chunk)&&!r){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);s=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!c||!k(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),c||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function l(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var a=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:a}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,r,n,i=Math.pow(2,53),a=-i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,c=this,l=0,f=0,h=!1,d=!1,v=[],g={data:[],errors:[],meta:{}};if(k(e.step)){var _=e.step;e.step=function(t){if(g=t,S())w();else{if(w(),0===g.data.length)return;l+=t.data.length,e.preview&&l>e.preview?r.abort():(g.data=g.data[0],_(g,c))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){if(g&&n&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<g.data.length;t++)b(g.data[t])&&g.data.splice(t--,1);return S()&&function(){if(g)if(Array.isArray(g.data[0])){for(var t=0;S()&&t<g.data.length;t++)g.data[t].forEach(r);g.data.splice(0,1)}else g.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),v.push(t)}}(),function(){if(!g||!e.header&&!e.dynamicTyping&&!e.transform)return g;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var a=n,o=t[n];e.header&&(a=n>=v.length?"__parsed_extra":v[n]),e.transform&&(o=e.transform(o,a)),o=O(a,o),"__parsed_extra"===a?(i[a]=i[a]||[],i[a].push(o)):i[a]=o}return e.header&&(n>v.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+n,f+r):n<v.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+n,f+r)),i}var r=1;return!g.data.length||Array.isArray(g.data[0])?(g.data=g.data.map(t),r=g.data.length):g.data=t(g.data,0),e.header&&g.meta&&(g.meta.fields=v),f+=r,g}()}function S(){return e.header&&0===v.length}function O(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(s.test(e)){var t=parseFloat(e);if(a<t&&t<i)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var n}function C(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),g.errors.push(i)}this.parse=function(i,a,s){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),a=1<i.length&&i[0].length<n[0].length;if(1===n.length||a)return"\n";for(var o=0,s=0;s<n.length;s++)"\n"===n[s][0]&&o++;return o>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(i),g.meta.delimiter=e.delimiter);else{var c=function(t,r,n,i,a){var s,u,c,l;a=a||[",","\t","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var f=0;f<a.length;f++){var h=a[f],d=0,p=0,v=0;c=void 0;for(var g=new m({comments:i,delimiter:h,newline:r,preview:10}).parse(t),_=0;_<g.data.length;_++)if(n&&b(g.data[_]))v++;else{var y=g.data[_].length;p+=y,void 0!==c?0<y&&(d+=Math.abs(y-c),c=y):c=y}0<g.data.length&&(p/=g.data.length-v),(void 0===u||d<=u)&&(void 0===l||l<p)&&1.99<p&&(u=d,s=h,l=p)}return{successful:!!(e.delimiter=s),bestDelimiter:s}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);c.successful?e.delimiter=c.bestDelimiter:(n=!0,e.delimiter=o.DefaultDelimiter),g.meta.delimiter=e.delimiter}var l=y(e);return e.preview&&e.header&&l.preview++,t=i,r=new m(l),g=r.parse(t,a,s),w(),h?{meta:{paused:!0}}:g||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){c.streamer._halted?(h=!1,c.streamer.parseChunk(t,!0)):setTimeout(c.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,r.abort(),g.meta.aborted=!0,k(e.complete)&&e.complete(g),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,a=e.step,s=e.preview,u=e.fastMode,c=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(c=e.escapeChar),("string"!=typeof r||-1<o.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var l=0,f=!1;this.parse=function(e,o,h){if("string"!=typeof e)throw new Error("Input must be a string");var d=e.length,m=r.length,v=n.length,g=i.length,_=k(a),y=[],b=[],w=[],S=l=0;if(!e)return N();if(u||!1!==u&&-1===e.indexOf(t)){for(var O=e.split(n),C=0;C<O.length;C++){if(w=O[C],l+=w.length,C!==O.length-1)l+=n.length;else if(h)return N();if(!i||w.substring(0,g)!==i){if(_){if(y=[],M(w.split(r)),F(),f)return N()}else M(w.split(r));if(s&&s<=C)return y=y.slice(0,s),N(!0)}}return N()}for(var E=e.indexOf(r,l),x=e.indexOf(n,l),R=new RegExp(p(c)+p(t),"g"),A=e.indexOf(t,l);;)if(e[l]!==t)if(i&&0===w.length&&e.substring(l,l+g)===i){if(-1===x)return N();l=x+v,x=e.indexOf(n,l),E=e.indexOf(r,l)}else{if(-1!==E&&(E<x||-1===x)){if(!(E<A)){w.push(e.substring(l,E)),l=E+m,E=e.indexOf(r,l);continue}var D=B(E,A,x);if(D&&void 0!==D.nextDelim){E=D.nextDelim,A=D.quoteSearch,w.push(e.substring(l,E)),l=E+m,E=e.indexOf(r,l);continue}}if(-1===x)break;if(w.push(e.substring(l,x)),L(x+v),_&&(F(),f))return N();if(s&&y.length>=s)return N(!0)}else for(A=l,l++;;){if(-1===(A=e.indexOf(t,A+1)))return h||b.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:y.length,index:l}),j();if(A===d-1)return j(e.substring(l,A).replace(R,t));if(t!==c||e[A+1]!==c){if(t===c||0===A||e[A-1]!==c){-1!==E&&E<A+1&&(E=e.indexOf(r,A+1)),-1!==x&&x<A+1&&(x=e.indexOf(n,A+1));var I=P(-1===x?E:Math.min(E,x));if(e[A+1+I]===r){w.push(e.substring(l,A).replace(R,t)),e[l=A+1+I+m]!==t&&(A=e.indexOf(t,l)),E=e.indexOf(r,l),x=e.indexOf(n,l);break}var T=P(x);if(e.substring(A+1+T,A+1+T+v)===n){if(w.push(e.substring(l,A).replace(R,t)),L(A+1+T+v),E=e.indexOf(r,l),A=e.indexOf(t,l),_&&(F(),f))return N();if(s&&y.length>=s)return N(!0);break}b.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:y.length,index:l}),A++}}else A++}return j();function M(e){y.push(e),S=l}function P(t){var r=0;if(-1!==t){var n=e.substring(A+1,t);n&&""===n.trim()&&(r=n.length)}return r}function j(t){return h||(void 0===t&&(t=e.substring(l)),w.push(t),l=d,M(w),_&&F()),N()}function L(t){l=t,M(w),w=[],x=e.indexOf(n,l)}function N(e){return{data:y,errors:b,meta:{delimiter:r,linebreak:n,aborted:f,truncated:!!e,cursor:S+(o||0)}}}function F(){a(N()),y=[],b=[]}function B(n,i,a){var o={nextDelim:void 0,quoteSearch:void 0},s=e.indexOf(t,i+1);if(i<n&&n<s&&(s<a||-1===a)){var u=e.indexOf(r,s);if(-1===u)return o;s<u&&(s=e.indexOf(t,s+1)),o=B(u,s,a)}else o={nextDelim:n,quoteSearch:i};return o}},this.abort=function(){f=!0},this.getCharIndex=function(){return l}}function v(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var a={abort:function(){n=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(k(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},a),!n);o++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,a,t.file),delete t.results)}t.finished&&!n&&g(t.workerId,t.results)}function g(e,t){var r=i[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function _(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=y(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===o.WORKER_ID&&r&&(o.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=o.parse(r.input,r.config);n&&t.postMessage({workerId:o.WORKER_ID,results:n,finished:!0})}}),(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(u.prototype)).constructor=l,(f.prototype=Object.create(f.prototype)).constructor=f,(h.prototype=Object.create(u.prototype)).constructor=h,o})?n.apply(t,i):n)||(e.exports=a)},Xuae:function(e,t,r){"use strict";var n=r("/GRZ"),i=r("qXWd"),a=r("i2R6"),o=r("48fX"),s=r("tCBg"),u=r("T0f4"),c=r("mPvQ");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0});var f=r("q1tI"),h=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(c(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return(function(s){o(c,s);var u=l(c);function c(e){var a;return n(this,c),a=u.call(this,e),h&&(t.add(i(a)),r(i(a))),a}return a(c,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),a(c,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},"cM/9":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},foSv:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("q1tI"));t.AmpStateContext=i.createContext({})},mPvQ:function(e,t,r){var n=r("5fIB"),i=r("rlHP"),a=r("kG2m");e.exports=function(e){return n(e)||i(e)||a()}},md7G:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("U8pU"),i=r("JX7q");function a(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!==typeof t?Object(i.a)(e):t}},o0o1:function(e,t,r){e.exports=r("ls82")},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[[0,0,2,4,1,3,11]]]);