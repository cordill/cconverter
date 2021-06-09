(this.webpackJsonpcconverter=this.webpackJsonpcconverter||[]).push([[0],{159:function(e,a,t){e.exports={navLink:"headerNavLink_navLink__1aV-U",navLink__label:"headerNavLink_navLink__label__2S-fb",active:"headerNavLink_active__MqfRS"}},160:function(e,a,t){e.exports={changeLanguage:"changeLanguage_changeLanguage__xok4b",language__select:"changeLanguage_language__select__1AMl2",language__dropdown:"changeLanguage_language__dropdown__2WNJE"}},2029:function(e,a,t){},2060:function(e,a,t){},2065:function(e,a,t){},2066:function(e,a,t){},2067:function(e,a,t){},2068:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(29),c=t(72),l=t(22),i=t(2077),s=t(64),u=t.n(s),m=t(2071),d=t(2072),p=(t(291),function(){var e=Object(m.a)().t;return o.a.createElement("div",{className:"about"},o.a.createElement(s.Helmet,null,o.a.createElement("title",null,"CConverter - ",e("AboutHelmetTitle"))),o.a.createElement("div",{className:"about-layout"},o.a.createElement("div",{className:"about-layout__item"},o.a.createElement("div",{className:"about-layout__info"},o.a.createElement(d.a,{i18nKey:"AboutSectionHowToUse",components:{paragraph:o.a.createElement("p",null),bold:o.a.createElement("strong",null)}},o.a.createElement("p",null,o.a.createElement("strong",null,"CConverter")," is an open-source project created by ",o.a.createElement("strong",null,"Codrill"),". Having at your disposal 150 currencies from all over the world, conversions become very simple."),o.a.createElement("p",null,"It only takes choosing currencies you're interested in and specify the number. This application will automatically convert given amount, basing on adequate and official exchange rates."))),o.a.createElement("div",{className:"about-layout__foto dollar-foto"})),o.a.createElement("div",{className:"about-layout__item"},o.a.createElement("div",{className:"about-layout__foto bank-foto"}),o.a.createElement("div",{className:"about-layout__info"},o.a.createElement("p",null,o.a.createElement(d.a,{i18nKey:"AboutSectionNBP"},"In order to guarantee our users reliable and official exchange rates we use data provided by the",o.a.createElement("strong",null,"National Bank of Poland"),", where the most popular values are upgraded every working day and more exotic ones every Wednesday.")))),o.a.createElement("div",{className:"about-layout__item"},o.a.createElement("div",{className:"about-layout__info"},o.a.createElement(d.a,{i18nKey:"AboutSectionRWD",components:{paragraph:o.a.createElement("p",null),bold:o.a.createElement("strong",null)}},o.a.createElement("p",null,"Our converter is adjusted to be used on any device. Do you need a quick conversion? This app works flawlessly on both mobile phones and tablets."),o.a.createElement("p",null,o.a.createElement("strong",null,"CConverter")," is continuously developed. We therefore encourage you to share your thoughts using our application form."))),o.a.createElement("div",{className:"about-layout__foto rwd-foto"}))))}),g=t(18),b=t(46),h=t(277),f=t(2074),y=t(172),v=t.n(y),E=t(158),_=t.n(E),C=t(249),w=t.n(C),F=new RegExp(/^[a-zA-Z\s]*$/),N=new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),k=(t(304),function(e){var a=e.onMessageSent,t=Object(m.a)().t,r=Object(n.useState)(!1),c=Object(g.a)(r,2),l=c[0],i=c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,t("ContactFormHeader")),o.a.createElement("div",{className:"form"},o.a.createElement(f.a,{name:"contactForm",id:"contact-form",onFinish:function(e){i(!0),w.a.send("default_service","template_RlMHIKsz",e,"user_WJzAGe4DbegjX0ajICAky").then(h.b.loading("".concat(t("ContactFormSendingMessage")))).then((function(){h.b.success("".concat(t("ContactFormMessageSent")),10),a(!0)}),(function(){h.b.error("".concat(t("ContactFormMessageError")),10)})).finally((function(){return i(!1)}))},layout:"vertical"},o.a.createElement(f.a.Item,{label:t("ContactFormUsername"),name:"username",hasFeedback:!0,rules:[{required:!0,message:"".concat(t("ContactFormRequiredField"))},{pattern:F,message:"".concat(t("ContactFormRegexUsername"))},{min:5,message:"".concat(t("ContactFormRegexUsername"))}]},o.a.createElement(_.a,null)),o.a.createElement(f.a.Item,{label:t("ContactFormEmail"),name:"userEmail",hasFeedback:!0,rules:[{required:!0,message:"".concat(t("ContactFormRequiredField"))},{pattern:N,message:"".concat(t("ContactFormRegexEmail"))}]},o.a.createElement(_.a,null)),o.a.createElement(f.a.Item,{className:"text-area",label:t("ContactFormMessage"),name:"userMessage",hasFeedback:!0,rules:[{required:!0,message:"".concat(t("ContactFormRequiredField"))},{min:20,message:"".concat(t("ContactFormRegexMessage"))},{max:500,message:"".concat(t("ContactFormRegexMessage"))}]},o.a.createElement(_.a.TextArea,null)),o.a.createElement(f.a.Item,{className:"submitButton"},o.a.createElement(v.a,{type:"primary",size:"large",htmlType:"submit",disabled:l,className:"cc-btn--gradient"},o.a.createElement("span",null,t("ContactFormSendButton")))))))}),j=t(262),S=t.n(j),z=function(){var e=Object(m.a)().t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,e("ContactFormSentHeader")),o.a.createElement("div",{className:S.a.contactFormSent},o.a.createElement("p",null,e("ContactFormSentSuccess")),o.a.createElement("p",null,e("ContactFormSentResponse"))))},O=(t(474),function(){var e=Object(m.a)().t,a=Object(n.useState)(!1),t=Object(g.a)(a,2),r=t[0],c=t[1];return o.a.createElement("div",{className:"contact"},o.a.createElement(s.Helmet,null,o.a.createElement("title",null,"CConverter - ",e("ContactHelmetTitle"))),o.a.createElement("div",{className:"contact__details"},o.a.createElement("h2",null,e("ContactInformation")),o.a.createElement("div",{className:"contact__details__icons"},o.a.createElement("div",{className:"contact__details__icon facebook"},o.a.createElement("a",{href:"https://www.facebook.com/Codrill-100150344838464/"},o.a.createElement(b.FacebookOutlined,null))),o.a.createElement("div",{className:"contact__details__icon site"},o.a.createElement("a",{href:"https://codrill.pl"},o.a.createElement(b.GlobalOutlined,null))),o.a.createElement("div",{className:"contact__details__icon github"},o.a.createElement("a",{href:"https://github.com/codrill"},o.a.createElement(b.GithubOutlined,null))))),o.a.createElement("div",{className:"contact__form"},r?o.a.createElement(z,null):o.a.createElement(k,{onMessageSent:function(e){c(e)}})))}),x=t(276),R=function(){return{path:"/",label:"CConverter"}},T=function(){return{path:"/about",label:"About"}},M=function(){return{path:"/contact",label:"Contact"}},P=t(70),D=t.n(P),L=function(){var e=Object(l.g)(),a=Object(l.f)(),t=Object(m.a)().t;return o.a.createElement("div",{className:"cc-container ".concat(D.a.notFound)},o.a.createElement("div",{className:D.a.notFound__info},o.a.createElement("h1",{className:D.a.notFound__header},"404"),o.a.createElement("h2",{className:D.a.notFound__subheader},t("NotFoundPageSubheader")),o.a.createElement("p",{className:D.a.notFound__description},o.a.createElement("span",null,t("NotFoundPageDescription")),o.a.createElement("span",{className:D.a.notFound__path},e.pathname)),o.a.createElement(x.a,{type:"primary",className:"cc-btn--gradient",onClick:function(){a.push(R().path)}},t("NotFoundPageBtnHome"))),o.a.createElement("div",{className:D.a.notFound__img}))},H=t(159),A=t.n(H),B=function(e){var a=e.icon,t=e.route,n=Object(m.a)().t;return o.a.createElement("li",{className:A.a.navLink},o.a.createElement(c.c,{activeClassName:A.a.active,to:t.path},a,o.a.createElement("span",{className:A.a.navLink__label,"data-hover":n(t.label)},n(t.label))))},I=t(2075),W=[{code:"pl",icon:t.p+"static/media/flag-polish.602a7f84.svg",name:"Polski"},{code:"en",icon:t.p+"static/media/flag-english.14458eff.svg",name:"English"}],q=t(160),K=t.n(q),U=I.a.Option,V=function(){var e=Object(m.a)(),a=e.t,t=e.i18n;return o.a.createElement("div",{className:K.a.changeLanguage},o.a.createElement("label",{htmlFor:"languageSelect",className:"sr-only"},a("SelectLanguageLabel")),o.a.createElement(I.a,{className:K.a.language__select,id:"languageSelect",dropdownClassName:K.a.language__dropdown,showArrow:!1,"aria-expanded":"false",defaultValue:t.language,onChange:function(e){return t.changeLanguage(e)}},W.map((function(e){return o.a.createElement(U,{key:e.name,value:e.code},o.a.createElement("img",{src:e.icon,alt:e.name}),o.a.createElement("span",null,e.name))}))))},J=(t(2029),function(){var e=Object(m.a)().t,a=Object(n.useState)(!1),t=Object(g.a)(a,2),r=t[0],l=t[1];return o.a.createElement("div",{className:"main-header cc-container"},o.a.createElement("h1",{className:"main-header__logo"},o.a.createElement(c.b,{to:R().path},R().label,o.a.createElement("span",null,e("FX Rate")))),o.a.createElement("div",{className:"main-header__hamburger ".concat(r?"active":""),onClick:function(){l((function(e){return!e}))}},o.a.createElement("span",{className:"line"}),o.a.createElement("span",{className:"line"}),o.a.createElement("span",{className:"line"})),o.a.createElement("ul",{className:"main-header__menu"},o.a.createElement(B,{icon:o.a.createElement(b.BuildFilled,null),route:T()}),o.a.createElement(B,{icon:o.a.createElement(b.ContainerFilled,null),route:M()})),o.a.createElement(V,null))}),G=t(2078),X=t(278),$="https://api.nbp.pl/api",Z="".concat($,"/exchangerates/rates"),Y="".concat($,"/exchangerates/tables/A"),Q="".concat($,"/exchangerates/tables/B"),ee=function(e,a){return"".concat(Z,"/").concat(e,"/").concat(a,"/last/90")},ae={currency:"polski z\u0142oty",code:"PLN",mid:1},te=t(180),ne=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a in e[0]?e.sort((function(e,t){return String(e[a]).toLowerCase()<String(t[a]).toLowerCase()?-1:1})):e.sort((function(e,a){return e<a?-1:1}))};function oe(e,a,t){e.forEach((function(e){e[a]=t}))}var re=t(273),ce=function(e){return Object(re.a)(fetch(e).then((function(e){return e.json()})))},le=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(""),c=Object(g.a)(r,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){Object(G.a)({currencyTableA:ce(Y),currencyTableB:ce(Q)}).pipe(Object(X.a)((function(e){return function(e){return e.currencyTableA.forEach((function(e){oe(e.rates,"table",e.table)})),e.currencyTableB.forEach((function(e){oe(e.rates,"table",e.table)})),{rates:ne([].concat(Object(te.a)(e.currencyTableA[0].rates),Object(te.a)(e.currencyTableB[0].rates),[ae]),"currency"),date:e.currencyTableA[0].effectiveDate}}(e)}))).subscribe((function(e){var a=e.rates,t=e.date;o(a),i(t)}))}),[]),{rates:t,date:l}},ie=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,n=[];return e&&t?e.forEach((function(e,a){return n.push({date:e.effectiveDate,rate:e.mid=Number((e.mid/t[a].mid).toFixed(5))})})):e.forEach((function(e){return a?n.push({date:e.effectiveDate,rate:e.mid=Number((ae.mid/e.mid).toFixed(5))}):n.push({date:e.effectiveDate,rate:e.mid=Number(e.mid.toFixed(5))})})),n},se=t(2073),ue=t(2076),me=function(e){return Number(String(e).replace(",","."))},de=I.a.Option,pe=function(e){var a=e.value,t=e.name,r=e.onChange,c=e.currencyRates,l=e.disabled,i=Object(n.useState)(!1),s=Object(g.a)(i,2),u=s[0],m=s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:t,className:"sr-only"},t),o.a.createElement(I.a,{showSearch:!0,value:a,placeholder:"Select currency",id:t,size:"large",optionFilterProp:"children","aria-expanded":u,onDropdownVisibleChange:function(e){return m(e)},onChange:r,disabled:l,filterOption:function(e,a){return(null===a||void 0===a?void 0:a.props.children).toLowerCase().indexOf(e.toLowerCase())>=0}},ge(c)))},ge=function(e){return e.map((function(e){return o.a.createElement(de,{value:e.code,key:e.code},e.currency)}))},be=t(279),he=t(266),fe=["#591de7","#913A7A"],ye=(t(2060),function(e){var a=e.chartData,t=e.bgColors,n=void 0===t?fe:t;return o.a.createElement("div",{className:"chart-container"},o.a.createElement("div",{className:"line-chart"},o.a.createElement(he.a,{data:function(e){var t=e.getContext("2d").createLinearGradient(0,500,0,0);return n.forEach((function(e,a){var o=a/(n.length-1);return t.addColorStop(o,e)})),a.datasets[0].backgroundColor=t,Object(be.a)({},a)},options:{responsive:!0,maintainAspectRatio:!1,legend:{onClick:null},scales:{yAxes:[{gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})))}),ve=t(96),Ee=t.n(ve),_e={key:"OneMonth",value:60},Ce={key:"TwoMonths",value:30},we={key:"ThreeMonths",value:0},Fe=function(e){var a=e.selectedCurrencies,t=e.backToDashboard,r=Object(m.a)().t,c=Object(n.useState)(_e.value),l=Object(g.a)(c,2),i=l[0],s=l[1],u=Object(n.useState)(null),d=Object(g.a)(u,2),p=d[0],h=d[1],f=Ne(a),y=f.data,v=f.loading;return Object(n.useEffect)((function(){if(y){var e=y.slice(i,90).map((function(e){return e.rate})),a=function(e){return e.map((function(e){return e.date}))}(y.slice(i,90));h(function(e,a,t){return{labels:e,datasets:[{label:t,data:a}]}}(a,e,r("ExchangeRate")))}}),[y,r,i]),o.a.createElement("div",{className:Ee.a.historyRate},o.a.createElement(se.a,{spinning:v},!v&&o.a.createElement(ye,{chartData:p}),o.a.createElement("div",{className:Ee.a.periodButtons},[_e,Ce,we].map((function(e){var a,t=e.key,n=e.value;return o.a.createElement(x.a,{className:"".concat(Ee.a.monthButton," ").concat((a=n,a===i?Ee.a.active:"")),type:"primary",shape:"round",icon:o.a.createElement(b.CalendarOutlined,null),key:t,onClick:function(){s(n)}},r(t))})))),o.a.createElement("div",{className:Ee.a.backToDashboard},o.a.createElement(x.a,{type:"primary",className:"btn-chart cc-btn--gradient",onClick:function(){return t(!0,!1)}},r("Back"))))},Ne=function(e){var a=function(e){var a=Object(n.useState)([]),t=Object(g.a)(a,2),o=t[0],r=t[1],c=Object(n.useState)(!0),l=Object(g.a)(c,2),i=l[0],s=l[1],u=e.findIndex((function(e){return"PLN"===e.code}));return Object(n.useEffect)((function(){var a,t,n,o;if(-1===u&&Object(G.a)({firstCurrency:ce(ee(null===(a=e[0])||void 0===a?void 0:a.table,null===(t=e[0])||void 0===t?void 0:t.code)),secondCurrency:ce(ee(null===(n=e[1])||void 0===n?void 0:n.table,null===(o=e[1])||void 0===o?void 0:o.code))}).subscribe((function(e){var a=e.firstCurrency,t=e.secondCurrency;r(ie(a.rates,!1,t.rates)),s(!1)})),u>-1){var c=e[0===u?1:0];ce(ee(null===c||void 0===c?void 0:c.table,null===c||void 0===c?void 0:c.code)).subscribe((function(e){r(ie(e.rates,!u)),s(!1)}))}}),[e,u]),{data:o,loading:i}}(e);return{data:a.data,loading:a.loading}},ke=(t(2065),new RegExp("^\\d+([,.]\\d{0,2})?$")),je=function(e){var a=e.rates,t=e.date,r=e.dataReady,c=Object(m.a)().t,l=Object(n.useState)(""),i=Object(g.a)(l,2),u=i[0],p=i[1],h=Object(n.useState)(""),f=Object(g.a)(h,2),y=f[0],v=f[1],E=Object(n.useState)("0"),_=Object(g.a)(E,2),C=_[0],w=_[1],F=Object(n.useState)(""),N=Object(g.a)(F,2),k=N[0],j=N[1],S=Object(n.useState)(0),z=Object(g.a)(S,2),O=z[0],R=z[1],T=Object(n.useState)([]),M=Object(g.a)(T,2),P=M[0],D=M[1],L=Object(n.useState)(!0),H=Object(g.a)(L,2),A=H[0],B=H[1],I=Object(n.useState)(!1),W=Object(g.a)(I,2),q=W[0],K=W[1];Object(n.useEffect)((function(){U(a)}),[a]),Object(n.useEffect)((function(){var e=a.find((function(e){return e.code===u})),t=a.find((function(e){return e.code===y}));e&&t&&(R(e.mid/t.mid),j((me(C)*O).toFixed(2).toString()),D([{code:e.code,table:e.table},{code:t.code,table:t.table}]))}),[a,u,y,C,O]);var U=function(e){p(Se(e,"USD")),v(Se(e,"EUR"))},V=function(e,a){B(e),K(a)};return o.a.createElement("div",null,A&&o.a.createElement("div",{className:"converter cc-container"},o.a.createElement(s.Helmet,null,o.a.createElement("title",null,"CConverter - ",c("DashboardHelmetTitle"))),o.a.createElement("div",{className:"converter__info"},o.a.createElement("div",{className:"converter__info__content"},o.a.createElement(d.a,{i18nKey:"DashboardSectionInfo",components:{paragraph:o.a.createElement("p",null),bold:o.a.createElement("strong",null)}},o.a.createElement("p",null,"Calculations are based on latest data provided by the ",o.a.createElement("strong",null,"National Bank of Poland"),"."),o.a.createElement("p",null,"Values presented on the website form median of representative currencies.")),o.a.createElement("p",null,o.a.createElement(d.a,{i18nKey:"DashboardSectionDate",values:{date:t}},"Last update: ",t)))),o.a.createElement("div",{className:"converter__calc__shadow"}),o.a.createElement("div",{className:"converter__calc"},o.a.createElement("h2",{className:"converter__calc__header"},c("ConvertCurrencyCalculatorHeader")),o.a.createElement(se.a,{spinning:!r,delay:10},o.a.createElement("div",{className:"converter__calc__group"},o.a.createElement(pe,{value:u,name:"fromCurrency",currencyRates:a,disabled:!r,onChange:p}),o.a.createElement("label",{htmlFor:"inputValue",className:"sr-only"},"Input Value"),o.a.createElement(ue.a,{placeholder:"0",value:C,id:"inputValue",disabled:!r,onChange:function(e){var a=e.target.value;a?ke.test(a)&&w(me(a)>=1?a.replace(/^0+/,""):a):w("0")}})),o.a.createElement("div",{className:"buttons"},o.a.createElement(x.a,{type:"primary",className:"btn-swap cc-btn--gradient",disabled:!u||!y,onClick:function(){var e=u;p(y),v(e)}},o.a.createElement(b.SwapOutlined,{rotate:90,className:"btn-swap-icon"})),o.a.createElement(x.a,{type:"primary",className:"btn-chart cc-btn--gradient",onClick:function(){V(!1,!0)}},o.a.createElement(b.LineChartOutlined,{className:"btn-chart-icon"}),o.a.createElement("span",null,O.toFixed(5)))),o.a.createElement("div",{className:"converter__calc__group"},o.a.createElement(pe,{value:y,name:"toCurrency",currencyRates:a,disabled:!r,onChange:v}),o.a.createElement("label",{htmlFor:"outputValue",className:"sr-only"},"Output Value"),o.a.createElement(ue.a,{placeholder:"0",id:"outputValue",value:k}))))),q&&o.a.createElement(Fe,{selectedCurrencies:P,backToDashboard:V}))},Se=function(e,a){var t;return(null===(t=e.find((function(e){return e.code===a})))||void 0===t?void 0:t.code)||""},ze=function(){var e=le(),a=e.rates,t=e.date;return o.a.createElement(je,{rates:a,date:t,dataReady:!!a.length})},Oe="G-S47ZY1CPSM",xe=function(e){var a=e.gtag;return o.a.createElement(u.a,null,o.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(a)}),o.a.createElement("script",null,"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '".concat(a,"');\n        ")))},Re=(t(2066),i.a.Header),Te=i.a.Content,Me=function(){return o.a.createElement("div",{className:"cc-theme-purple"},o.a.createElement(xe,{gtag:Oe}),o.a.createElement(c.a,{basename:""},o.a.createElement(i.a,{className:"main-layout"},o.a.createElement(Re,{className:"main-layout__header"},o.a.createElement(J,null)),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/"},o.a.createElement(Te,{className:"main-layout__content"},o.a.createElement(ze,null))),o.a.createElement(l.a,{path:"/about"},o.a.createElement(Te,{className:"main-layout__content"},o.a.createElement(p,null))),o.a.createElement(l.a,{path:"/contact"},o.a.createElement(O,null)),o.a.createElement(l.a,{path:"*"},o.a.createElement(L,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=t(179),De=t(61),Le={en:{translation:t(270)},pl:{translation:t(271)}};Pe.a.use(De.e).init({resources:Le,lng:"pl",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});Pe.a,t(2067);var He=document.getElementById("root");He&&He.hasChildNodes()?Object(r.hydrate)(o.a.createElement(Me,null),He):Object(r.render)(o.a.createElement(Me,null),He),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},262:function(e,a,t){e.exports={contactFormSent:"contactFormSent_contactFormSent__3r5Hl"}},270:function(e){e.exports=JSON.parse('{"FX Rate":"Foreign exchange rate","About":"About Project","Contact":"Contact","SelectLanguageLabel":"Select language","DashboardHelmetTitle":"Currency converter","AboutHelmetTitle":"About Project","ContactHelmetTitle":"Contact","ConvertCurrencyCalculatorHeader":"Convert currency","DashboardSectionInfo":"<paragraph>Calculations are based on latest data provided by the <bold>National Bank of Poland</bold>.</paragraph> <paragraph>Values presented on the website form median of representative currencies.</paragraph>","DashboardSectionDate":"Last update: {{ date }}","DashboardSectionRateExchange":"Exchange rate: ","AboutSectionHowToUse":"<paragraph><bold>CConverter</bold> is an open-source project created by <bold>Codrill</bold>. Having at your disposal 150 currencies from all over the world, conversions become very simple.</paragraph> <paragraph>It only takes choosing currencies you\'re interested in and specify the number. This application will automatically convert given amount, basing on adequate and official exchange rates.</paragraph>","AboutSectionNBP":"In order to guarantee our users reliable and official exchange rates we use data provided by the <1>National Bank of Poland</1>, where the most popular values are upgraded every working day and more exotic ones every Wednesday.","AboutSectionRWD":"<paragraph>Our converter is adjusted to be used on any device. Do you need a quick conversion? This app works flawlessly on both mobile phones and tablets.</paragraph> <paragraph><bold>CConverter</bold> is continuously developed. We therefore encourage you to share your thoughts using our application form.</paragraph>","ContactInformation":"Visit us:","ContactFormHeader":"Contact form","ContactFormUsername":"First and last name","ContactFormEmail":"E-mail","ContactFormMessage":"Your message","ContactFormSendingMessage":"Sending message...","ContactFormMessageSent":"Message sent!","ContactFormMessageError":"Something went wrong. Try again.","ContactFormSendButton":"Send","ContactFormRequiredField":"This field must be filled","ContactFormRegexUsername":"Please provide your name and surname","ContactFormRegexEmail":"Please provide correct email address","ContactFormRegexMessage":"Message must contain from 20 to 500 characters","ContactFormSentHeader":"Thank you!","ContactFormSentSuccess":"Message has been send successfully.","ContactFormSentResponse":"If necessary, we will contact with you by e-mail given in the form.","OneMonth":"1 Month","TwoMonths":"2 Months","ThreeMonths":"3 Months","Back":"Back","ExchangeRate":"Rate exchange","NotFoundPageSubheader":"Something went wrong.","NotFoundPageDescription":"Page at this address does not exist:","NotFoundPageBtnHome":"Go back to homepage"}')},271:function(e){e.exports=JSON.parse('{"FX Rate":"Konwerter Walut","About":"O projekcie","SelectLanguageLabel":"Wybierz j\u0119zyk","Contact":"Kontakt","DashboardHelmetTitle":"Konwerter walut","AboutHelmetTitle":"O projekcie","ContactHelmetTitle":"Kontakt","ConvertCurrencyCalculatorHeader":"Przelicz walut\u0119","DashboardSectionInfo":"<paragraph>Wyliczenia wykonywane s\u0105 na podstawie najnowszych danych udost\u0119pnionych przez <bold>Narodowy Bank Polski</bold></paragraph> <paragraph>Warto\u015bci przedstawione w serwisie stanowi\u0105 median\u0119 reprezentatywnych walut.</paragraph>","DashboardSectionDate":"Ostatnia aktualizacja: {{ date }}","DashboardSectionRateExchange":"Kurs wymiany: ","AboutSectionHowToUse":"<paragraph><bold>CConverter</bold> to open-sourcowy projekt stworzony przez <bold>Codrill</bold>. Maj\u0105c do dyspozycji 150 walut z ca\u0142ego \u015bwiata przeliczenia staj\u0105 si\u0119 banalnie proste.</paragraph><paragraph>Wystarczy, \u017ce wybierzesz waluty kt\xf3re Ci\u0119 interesuj\u0105 oraz wpiszesz liczb\u0119. To wszystko. Aplikacja automatycznie przeliczy podan\u0105 przez Ciebie kwot\u0119 po odpowiednim i oficjalnym kursie wymiany.</paragraph>","AboutSectionNBP":"\u017beby zagwarantowa\u0107 naszym u\u017cytkownikom pewne i oficjalne kursy wymiany u\u017cywamy przelicznik\xf3w podanych przez <1>Narodowy Bank Polski</1> kt\xf3ry w ka\u017cdy dzie\u0144 roboczy aktualizuje swoje najpopularniejsze waluty. Te bardziej egzotyczne aktualizowane s\u0105 co \u015brod\u0119.","AboutSectionRWD":"<paragraph>Nasz konwerter jest przystosowany do dzia\u0142ania na ka\u017cdym urz\u0105dzeniu. Potrzebujesz co\u015b szybko przeliczy\u0107? Aplikacja dzia\u0142a wy\u015bmienicie na telefonach kom\xf3rkowych czy tabletach.</paragraph> <paragraph><bold>CConverter</bold> jest na bie\u017c\u0105co rozbudowywany oraz rozwijany. Zach\u0119camy do dzielenia si\u0119 uwagami przez nasz formularz zg\u0142oszeniowy.</paragraph>","ContactInformation":"Odwied\u017a nas:","ContactFormHeader":"Formularz kontaktowy","ContactFormUsername":"Imi\u0119 i nazwisko","ContactFormEmail":"E-mail","ContactFormMessage":"Napisz do nas","ContactFormSendingMessage":"Wysy\u0142anie wiadomo\u015bci...","ContactFormMessageSent":"Wys\u0142ane!","ContactFormMessageError":"Co\u015b posz\u0142o nie tak. Spr\xf3buj ponownie.","ContactFormSendButton":"Wy\u015blij","ContactFormRequiredField":"To pole musi by\u0107 wype\u0142nione","ContactFormRegexUsername":"Podaj prosz\u0119 poprawne imi\u0119 i nazwisko","ContactFormRegexEmail":"Podaj prosz\u0119 poprawny adres email","ContactFormRegexMessage":"Wiadomo\u015b\u0107 powinna zawiera\u0107 od 20 do 500 znak\xf3w","ContactFormSentHeader":"Dzi\u0119kujemy!","ContactFormSentSuccess":"Wiadomo\u015b\u0107 zosta\u0142a prawid\u0142owo wys\u0142ana.","ContactFormSentResponse":"W razie potrzeby, skontaktujemy si\u0119 z Tob\u0105 za po\u015brednictwem adresu mailowego podanego w formularzu.","OneMonth":"1 Miesi\u0105c","TwoMonths":"2 Miesi\u0105ce","ThreeMonths":"3 Miesi\u0105ce","Back":"Powr\xf3t","ExchangeRate":"Kurs wymiany","NotFoundPageSubheader":"Co\u015b posz\u0142o nie tak.","NotFoundPageDescription":"Strona pod tym adresem nie istnieje:","NotFoundPageBtnHome":"Wr\xf3\u0107 na stron\u0119 g\u0142\xf3wn\u0105"}')},291:function(e,a,t){},304:function(e,a,t){},474:function(e,a,t){},70:function(e,a,t){e.exports={notFound:"notFoundPage_notFound__3dF1h",notFound__info:"notFoundPage_notFound__info__18zxH",notFound__header:"notFoundPage_notFound__header__1mmvq",notFound__description:"notFoundPage_notFound__description__1dx_I",notFound__path:"notFoundPage_notFound__path__1QK4-",notFound__img:"notFoundPage_notFound__img__2JDIy"}},96:function(e,a,t){e.exports={historyRate:"exchangeRateHistory_historyRate__2SWb5",periodButtons:"exchangeRateHistory_periodButtons__3PslJ",monthButton:"exchangeRateHistory_monthButton__tATSM",active:"exchangeRateHistory_active__2Iq0L",backToDashboard:"exchangeRateHistory_backToDashboard__2OKUX"}}},[[2068,1,2]]]);
//# sourceMappingURL=main.5b4c60c8.chunk.js.map