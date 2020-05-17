(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{362:function(t,e,s){"use strict";s.r(e);var a=s(41),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#usage"}},[t._v("Usage")])]),s("li",[s("a",{attrs:{href:"#i18n-translations"}},[t._v("i18n translations")]),s("ul",[s("li",[s("a",{attrs:{href:"#all-keys-with-default-translation"}},[t._v("All keys with default translation")])])])]),s("li",[s("a",{attrs:{href:"#events"}},[t._v("Events")]),s("ul",[s("li",[s("a",{attrs:{href:"#requests-response"}},[t._v("Requests/Response")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("To make some optional configuration, you need to call "),s("code",[t._v("setConfig")]),t._v(" with your configuration as js object.\nIt is recommend to do this in your "),s("code",[t._v("main.js")]),t._v(" but it is also possible to set or change the configuration during runtime.\nWhen calling "),s("code",[t._v("setConfig")]),t._v(" the active configuration will be replaced and not be merged.")]),t._v(" "),s("p",[t._v("You can see the "),s("RouterLink",{attrs:{to:"/api/configuration.html"}},[t._v("full configuration structure here")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("setConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-service-model'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Translation keys")]),t._v("\n  i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nein'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("yes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ja'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Callback events")]),t._v("\n  events"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSendDetailRequest")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onSendDetailRequest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"i18n-translations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i18n-translations"}},[t._v("#")]),t._v(" i18n translations")]),t._v(" "),s("p",[t._v("You can customize the translations that will be used by "),s("code",[t._v("vue-service-model")]),t._v(". You can set a string or a function that will return a string or a promise.\nThe function will be called with the translation key as argument to allow to map the translation to your translation handling.")]),t._v(" "),s("h3",{attrs:{id:"all-keys-with-default-translation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-keys-with-default-translation"}},[t._v("#")]),t._v(" All keys with default translation")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Default translation")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("no")])]),t._v(" "),s("td",[t._v("No")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("yes")])]),t._v(" "),s("td",[t._v("Yes")])])])]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("p",[t._v("Some functions in "),s("code",[t._v("vue-service-model")]),t._v(" will emit events where you can register a callback in the configuration.")]),t._v(" "),s("h3",{attrs:{id:"requests-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requests-response"}},[t._v("#")]),t._v(" Requests/Response")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Event")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("onSendDetailRequest")])]),t._v(" "),s("td",[t._v("When doing a detail request (ModelManager.sendDetailRequest)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("onSendListRequest")])]),t._v(" "),s("td",[t._v("When doing a list request (ModelManager.sendListRequest)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("onSendCreateRequest")])]),t._v(" "),s("td",[t._v("When doing a create request (ModelManager.sendCreateRequest)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("onSendUpdateRequest")])]),t._v(" "),s("td",[t._v("When doing a update request (ModelManager.sendUpdateRequest)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("onSendPartialUpdateRequest")])]),t._v(" "),s("td",[t._v("When doing a partial update request (ModelManager.sendPartialUpdateRequest)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("onSendDeleteRequest")])]),t._v(" "),s("td",[t._v("When doing a delete request (ModelManager.sendDeleteRequest)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("onResponseError")])]),t._v(" "),s("td",[t._v("When a error response has been received (ModelManager.handleResponseError)")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);