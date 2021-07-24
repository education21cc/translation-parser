(this["webpackJsonp21cc-translation-parser"]=this["webpackJsonp21cc-translation-parser"]||[]).push([[0],{114:function(e,t){},231:function(e,t,a){e.exports=a(428)},236:function(e,t,a){},285:function(e,t){},287:function(e,t){},296:function(e,t){},298:function(e,t){},324:function(e,t){},326:function(e,t){},327:function(e,t){},333:function(e,t){},335:function(e,t){},353:function(e,t){},356:function(e,t){},372:function(e,t){},375:function(e,t){},426:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(51),l=a.n(c),o=(a(236),a(15)),s=a(118),u=a.n(s),i=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){u.a.getItem(e).then((function(e){c(e)}))}),[e]),[r,Object(n.useCallback)((function(t){c(t),u.a.setItem(e,t)}),[e])]},d=a(430),m=a(222),f=a(431),h=a(33),v=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1],s=i("apiKey"),u=Object(o.a)(s,2),v=u[0],E=u[1],p=e.onChange;Object(n.useEffect)((function(){v&&p(v)}),[v,p]);var b=function(){E(null)};return c?r.a.createElement(d.a,{className:"mb-3"},r.a.createElement(m.a,{placeholder:c,className:"text-danger",readOnly:!0}),r.a.createElement(d.a.Append,null,r.a.createElement(f.a,{variant:"outline-secondary",onClick:b},"Clear"))):v?r.a.createElement(d.a,{className:"mb-3"},r.a.createElement(m.a,{placeholder:v.file,readOnly:!0}),r.a.createElement(d.a.Append,null,r.a.createElement(f.a,{variant:"outline-secondary",onClick:b},"Clear"))):r.a.createElement(h.a.File,{type:"file",accept:".json",onChange:function(e){var t,a,n=null===(t=e.target)||void 0===t||null===(a=t.files)||void 0===a?void 0:a[0];if(!n)return null;var r=new FileReader;r.addEventListener("load",(function(e){try{var t,a=JSON.parse(null===(t=e.target)||void 0===t?void 0:t.result);void 0!==a.client_email&&void 0!==a.private_key||l("Not a valid JSON file!");var r={file:n.name,credentials:a};E(r)}catch(c){l("Error reading file. Is it a API json file?")}})),r.readAsText(n)}})},E=a(225),p=a(226),b=function(e){var t=i("sheetId"),a=Object(o.a)(t,2),c=a[0],l=a[1],s=e.onChange;return Object(n.useEffect)((function(){c&&s(c)}),[c,s]),r.a.createElement(h.a.Control,{type:"text",value:c||"",onChange:function(t){l(t.target.value),e.onChange(t.target.value)}})},O=a(10),g=a.n(O),j=a(86),y=a(223),x=a(434),k=a(435),S=function(e){var t=e.setError,a=Object(n.useState)(),c=Object(o.a)(a,2),l=c[0],s=c[1],u=Object(n.useState)(),i=Object(o.a)(u,2),d=i[0],m=i[1],v=Object(n.useState)([]),E=Object(o.a)(v,2),p=E[0],b=E[1],O=Object(n.useState)(),S=Object(o.a)(O,2),C=S[0],I=S[1];Object(n.useEffect)((function(){(function(){var a=Object(j.a)(g.a.mark((function a(){var n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=new y.GoogleSpreadsheet(e.sheetId),a.next=4,n.useServiceAccountAuth(e.credentials);case 4:return a.next=6,n.loadInfo();case 6:m(n.sheetsByIndex[0].sheetId),s(n),a.next=22;break;case 10:if(a.prev=10,a.t0=a.catch(0),a.t0.response){a.next=15;break}return t("Generic error!\n".concat(a.t0)),a.abrupt("return");case 15:a.t1=a.t0.response.status,a.next=403===a.t1?18:404===a.t1?20:22;break;case 18:return t("Credentials invalid. \nEnsure '".concat(e.credentials.client_email,"' has read access to the sheet.")),a.abrupt("break",22);case 20:return t("Invalid sheet id"),a.abrupt("break",22);case 22:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}})()()}),[e.credentials,e.sheetId,t]),Object(n.useEffect)((function(){l&&void 0!==d&&function(){var e=Object(j.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.sheetsById[d].loadHeaderRow();case 2:t=l.sheetsById[d].headerValues.filter((function(e,t){return t>0})),b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,d]),Object(n.useEffect)((function(){C&&-1!==p.indexOf(C)||I(p[0])}),[p,C]);return l&&void 0!==d?r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Label,null,"Game"),r.a.createElement(h.a.Control,{as:"select",onChange:function(e){m(e.target.value)}},l.sheetsByIndex.map((function(e){return r.a.createElement("option",{key:e.sheetId,value:e.sheetId},e.title)})))),r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Label,null,"Language"),r.a.createElement(h.a.Control,{as:"select",onChange:function(e){I(e.target.value)}},p.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),void 0!==C&&void 0!==d&&r.a.createElement(f.a,{onClick:function(){(function(){var e=Object(j.a)(g.a.mark((function e(){var a,n,r,c,o,s,u,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&void 0!==C&&void 0!==d){e.next=2;break}return e.abrupt("return");case 2:if(r=null===(a=l.sheetsById[d])||void 0===a||null===(n=a.headerValues)||void 0===n?void 0:n[0]){e.next=6;break}return t("Ensure cell A:1 is called 'key'"),e.abrupt("return");case 6:return e.next=8,l.sheetsById[d].getRows();case 8:c=e.sent,o={translations:c.reduce((function(e,t){return void 0!==t[r]&&e.push({key:t[r],value:t[C]}),e}),[])},s=document.createElement("a"),u=JSON.stringify(o,null,4),i="".concat(l.sheetsById[d].title,"_").concat(C,".json"),s.setAttribute("href","data:text/json;charset=utf-8,"+encodeURIComponent(u)),s.setAttribute("download",i),s.click();case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},"Download"))):r.a.createElement(x.a,{variant:"info"},"Loading...")},C=a(433),I=a(432),N=(a(426),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],i=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Label,null,"Reader"),r.a.createElement(h.a.Text,{className:"text-muted"},"Paste translations JSON here"),r.a.createElement(h.a.Control,{as:"textarea",rows:9,onChange:function(e){var t=null;try{t=JSON.parse(e.target.value)}catch(a){t=JSON.parse("{".concat(e.target.value,"}"))}c(t)}}),r.a.createElement(f.a,{onClick:function(){if(a){var e=a.translations.reduce((function(e,t){return e+="".concat(t.key,";").concat(t.value.replace(/\n/g,"\\n"),"\n")}),"");i(e)}},className:"mt-3"},"Read JSON"),r.a.createElement(h.a.Text,{className:"text-muted"},"Output"),r.a.createElement(h.a.Control,{as:"textarea",rows:9,className:"muted",value:u}),r.a.createElement(x.a,{variant:"info"},"Paste in google sheets ",r.a.createElement("br",null),'Make sure to choose "Split text to Column, Seperator: semicolon"...')))});var w=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),s=Object(o.a)(l,2),u=s[0],i=s[1],d=Object(n.useState)(!1),m=Object(o.a)(d,2),O=m[0],g=m[1],j=Object(n.useState)(),y=Object(o.a)(j,2),k=y[0],w=y[1],A=function(e){null!==e&&g(!1),w(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement("h1",null,"Translation parser")),r.a.createElement(p.a,null,r.a.createElement(C.a,{defaultActiveKey:"sheets2Json",id:"tab",className:"mb-4"},r.a.createElement(I.a,{eventKey:"sheets2Json",title:"Google sheets -> JSON"},r.a.createElement(h.a,null,r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Label,null,"API Key (json file)"),r.a.createElement(h.a.Text,{className:"text-muted"},r.a.createElement("ol",null,r.a.createElement("li",null,"Go to: https://console.developers.google.com/ and create a project"),r.a.createElement("li",null,"Add the Google Sheets API"),r.a.createElement("li",null,"Create a service account"),r.a.createElement("li",null,"Create a new JSON key under this service account and upload this key here"),r.a.createElement("li",null,"Ensure share the google sheet to the the e-mail address of the service account"))),r.a.createElement(v,{onChange:c})),r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Label,null,"Sheet ID"),r.a.createElement(h.a.Text,{className:"text-muted"},"Copy from https://docs.google.com/spreadsheets/d/<SHEET ID>"),r.a.createElement(b,{onChange:i}))),k&&r.a.createElement(x.a,{variant:"danger",className:"mt-3",onClose:function(){return A(null)},dismissible:!0},k),(!O||!a||!u)&&r.a.createElement(f.a,{onClick:function(){a&&u?(w(null),g(!0)):A(" Please upload a API key json and fill out the sheet ID")}},"Read sheet!"),a&&u&&O&&r.a.createElement(S,{sheetId:u,credentials:a.credentials,setError:A})),r.a.createElement(I.a,{eventKey:"json2Sheets",title:"JSON -> Google sheets  "},r.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[231,1,2]]]);
//# sourceMappingURL=main.004e7474.chunk.js.map