(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{353:function(t,e,a){"use strict";a.r(e);var s=a(34),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"servicemodel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servicemodel"}},[t._v("#")]),t._v(" ServiceModel")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#urls"}},[t._v("Urls")])]),a("li",[a("a",{attrs:{href:"#service-methods"}},[t._v("Service methods")]),a("ul",[a("li",[a("a",{attrs:{href:"#reloading-model-data"}},[t._v("Reloading model data")])]),a("li",[a("a",{attrs:{href:"#updating-your-model-data"}},[t._v("Updating your model data")])]),a("li",[a("a",{attrs:{href:"#creating-a-new-model-record"}},[t._v("Creating a new model record")])]),a("li",[a("a",{attrs:{href:"#create-or-update-a-model-instance"}},[t._v("Create or update a model instance")])]),a("li",[a("a",{attrs:{href:"#deleting-a-model-record"}},[t._v("Deleting a model record")])])])]),a("li",[a("a",{attrs:{href:"#aggregation"}},[t._v("Aggregation")])]),a("li",[a("a",{attrs:{href:"#cache"}},[t._v("Cache")])]),a("li",[a("a",{attrs:{href:"#parents"}},[t._v("Parents")])])])]),a("p"),t._v(" "),a("p",[t._v("A "),a("code",[t._v("ServiceModel")]),t._v(" extends from "),a("RouterLink",{attrs:{to:"/guide/base-model/"}},[a("code",[t._v("BaseModel")])]),t._v(" and adds the "),a("RouterLink",{attrs:{to:"/guide/model-manager/"}},[a("code",[t._v("ModelManager")])]),t._v(" with a caching\nstore to keep track of "),a("a",{attrs:{href:"#aggregation"}},[t._v("aggregation")]),t._v(" of running requests and optionally caching the result of the services.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ServiceModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-service-model'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Album")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jsonplaceholder.typicode.com/albums/'")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Duration to cache requested data in seconds. 0: no cache. null: Cache forever. Default is 30 seconds")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" cacheDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" fieldsDef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("primaryKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#urls"}},[t._v("#")]),t._v(" Urls")]),t._v(" "),a("p",[t._v("Urls are currently divided into 2 different types. "),a("code",[t._v("LIST")]),t._v(" and "),a("code",[t._v("DETAIL")]),t._v(" (same like in "),a("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/routers.html#simplerouter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Django REST framework"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("LIST")]),t._v(": (e.g. "),a("code",[t._v("/albums/")]),t._v(") used for "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#retrieve-list-of-data-objectslist"}},[a("code",[t._v("objects.list()")])])],1),t._v(" "),a("li",[a("code",[t._v("DETAIL")]),t._v(": (e.g. "),a("code",[t._v("/albums/1/")]),t._v(") used for "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#retrieve-single-entry-of-data-objectsdetail"}},[a("code",[t._v("objects.detail(1)")])])],1)]),t._v(" "),a("p",[t._v("The simplest way to define the urls is to set the static property "),a("code",[t._v("urls")]),t._v(" in your "),a("code",[t._v("ServiceModel")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jsonplaceholder.typicode.com/albums/'")]),t._v("\n")])])]),a("p",[t._v("When performing a detail request your key will be automatically appended to the end of the url.")]),t._v(" "),a("p",[t._v("You can also define the "),a("code",[t._v("LIST")]),t._v(" and "),a("code",[t._v("DETAIL")]),t._v(" url separately:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LIST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jsonplaceholder.typicode.com/albums/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {pk} will be replaced with your value you provide to objects.detail() ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DETAIL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jsonplaceholder.typicode.com/albums/{pk}/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("There are currently 3 ways to define your url with the following priority")]),t._v(" "),a("ol",[a("li",[t._v("Overwrite "),a("code",[t._v("getListUrl")]),t._v(" or "),a("code",[t._v("getDetailUrl")]),t._v(" method and a return a "),a("code",[t._v("Promise")]),t._v(" which will resolve the url as a string")]),t._v(" "),a("li",[t._v("Set the "),a("code",[t._v("LIST")]),t._v(" or "),a("code",[t._v("DETAIL")]),t._v(" url in your model "),a("code",[t._v("static urls = { LIST: <...>, DETAIL: <...> }")])]),t._v(" "),a("li",[t._v("Set the base url in your model as string "),a("code",[t._v("static urls = '<...>'")]),t._v(" or "),a("code",[t._v("static urls = { BASE: <...> }")])])]),t._v(" "),a("p",[t._v("If you got a nested RESTful service structure (e.g. "),a("code",[t._v("/albums/1/photos/")]),t._v(") have a look at "),a("a",{attrs:{href:"#parents"}},[t._v("parents")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"service-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-methods"}},[t._v("#")]),t._v(" Service methods")]),t._v(" "),a("p",[t._v("There are several methods to make it even more easy to do service requests in relation to your model instance.\nIt is required to define a "),a("RouterLink",{attrs:{to:"/guide/fields.html#field-definition"}},[t._v("primary key field")]),t._v(" in your model definition.")],1),t._v(" "),a("h3",{attrs:{id:"reloading-model-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reloading-model-data"}},[t._v("#")]),t._v(" Reloading model data")]),t._v(" "),a("p",[t._v("To reload the data of your current model instance you can call "),a("code",[t._v("myModel.reload()")]),t._v(".\nThis method will send a detail request (equal to "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#retrieve-single-entry-of-data-objects-detail"}},[a("code",[t._v("myModel.objects.detail()")])]),t._v(") and does not use the cache.\nIt is required that your primary key field is filled otherwise the method will return "),a("code",[t._v("false")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Any changes made to your model data will be overwritten")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" album "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: GET /albums/1/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: GET /albums/1/")]),t._v("\n")])])]),a("h3",{attrs:{id:"updating-your-model-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-your-model-data"}},[t._v("#")]),t._v(" Updating your model data")]),t._v(" "),a("p",[t._v("In case you want to save your local model data you can either use "),a("code",[t._v("myModel.update()")]),t._v(". It is required that your primary key field is filled otherwise the method will return "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("myModel.update()")]),t._v(" will internally call the "),a("code",[t._v("ModelManager")]),t._v(" method "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#update-single-entry-objects-update"}},[a("code",[t._v("objects.update()")])]),t._v(" with your model primary key, parents and data.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" album "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: GET /albums/1/")]),t._v("\n\nalbum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New title'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: PUT /albums/1/")]),t._v("\n")])])]),a("h3",{attrs:{id:"creating-a-new-model-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-model-record"}},[t._v("#")]),t._v(" Creating a new model record")]),t._v(" "),a("p",[t._v("To create a new record you can call "),a("code",[t._v("myModel.create()")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("myModel.create()")]),t._v(" will internally call the "),a("code",[t._v("ModelManager")]),t._v(" method "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#create-single-entry-objects-create"}},[a("code",[t._v("objects.create()")])]),t._v(" with your model parents and data.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" album "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Album")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New album'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: POST /albums/")]),t._v("\n")])])]),a("h3",{attrs:{id:"create-or-update-a-model-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-or-update-a-model-instance"}},[t._v("#")]),t._v(" Create or update a model instance")]),t._v(" "),a("p",[t._v("When calling "),a("code",[t._v("myModel.save()")]),t._v(" the method will check if the primary key of your model instance is filled. If so "),a("code",[t._v("myModel.update()")]),t._v(" if not "),a("code",[t._v("myModel.create()")]),t._v(" will be called.\nThe return value is a boolean flag if the "),a("code",[t._v("myModel.create()")]),t._v(" has been called or not.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" album "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Album")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New album'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: POST /albums/")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: 5")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: PUT /albums/5/")]),t._v("\n")])])]),a("h3",{attrs:{id:"deleting-a-model-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-model-record"}},[t._v("#")]),t._v(" Deleting a model record")]),t._v(" "),a("p",[t._v("To delete an existing record you can call "),a("code",[t._v("myModel.delete()")]),t._v(".\nIt is required that your primary key field is filled otherwise the method will return "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("myModel.delete()")]),t._v(" will internally call the "),a("code",[t._v("ModelManager")]),t._v(" method "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#delete-single-entry-objects-delete"}},[a("code",[t._v("objects.delete()")])]),t._v(" with your model primary key and parents.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" album "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: GET /albums/1/")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: DELETE /albums/1/")]),t._v("\n")])])]),a("h2",{attrs:{id:"aggregation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregation"}},[t._v("#")]),t._v(" Aggregation")]),t._v(" "),a("p",[t._v("When you start to request data from a service, for example "),a("code",[t._v("Album.objects.detail('1')")]),t._v(", then the "),a("code",[t._v("Promise")]),t._v(" of the request will\nbe saved as long as the request has not been completed. So when requesting "),a("code",[t._v("Album.objects.detail('1')")]),t._v(" again (e.g from another component)\nthis request will be attached to the first request which has not been completed yet and the request of the service will only made once.")]),t._v(" "),a("p",[t._v("In case you want to avoid the request aggregation for a specific request see "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#retrieveinterfaceparams"}},[a("code",[t._v("noRequestAggregation")])]),t._v(" in "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#retrieveinterfaceparams"}},[t._v("ModelManager RetrieveInterfaceParams")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" Cache")]),t._v(" "),a("p",[t._v("With the static property "),a("code",[t._v("cacheDuration")]),t._v(" it is possible to set the duration (in seconds) of how long the result of a response\nshould be cached. The default value is 30 seconds. Currently the expired data will only be removed by requesting the same data again.")]),t._v(" "),a("ul",[a("li",[t._v("null: cache will not be removed")]),t._v(" "),a("li",[t._v("0: no caching")])]),t._v(" "),a("p",[t._v("You can manually clear the complete cache including "),a("a",{attrs:{href:"#aggregation"}},[t._v("aggregation")]),t._v(" by calling "),a("code",[t._v("model.store.clear()")]),t._v(".")]),t._v(" "),a("p",[t._v("In case you want to set cache options for a specific request see "),a("RouterLink",{attrs:{to:"/guide/model-manager.html#retrieveinterfaceparams"}},[t._v("ModelManager RetrieveInterfaceParams")]),t._v(".")],1),t._v(" "),a("p",[t._v("By default the response of a list request will not be cached.")]),t._v(" "),a("h2",{attrs:{id:"parents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parents"}},[t._v("#")]),t._v(" Parents")]),t._v(" "),a("p",[t._v("When using a nested RESTful service more information is necessary to uniquely identify a resource. You need to define "),a("code",[t._v("parentNames")]),t._v(" in your "),a("code",[t._v("ServiceModel")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Photo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define name of parents")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" parentNames "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'album'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add placeholder for parent in your url")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jsonplaceholder.typicode.com/albums/{album}/photos/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve all photos from album 1: /albums/1/photos/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" photos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Photo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("parents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("album"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve photo 2 from album 1: /albums/1/photos/2/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" photo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Photo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("parents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("album"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Access parents of photo")]),t._v("\nphoto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parents\n")])])]),a("p",[t._v("It is necessary to set exact parents otherwise a warning will be printed to the console. You can also add some custom\nvalidation of the parents by extending the "),a("code",[t._v("checkServiceParents")]),t._v(" method of your "),a("code",[t._v("ServiceModel")]),t._v(". This will be called on default "),a("RouterLink",{attrs:{to:"/guide/model-manager/"}},[a("code",[t._v("ModelManager")])]),t._v(" interfaces and when retrieving the service url from "),a("a",{attrs:{href:"#urls"}},[a("code",[t._v("getListUrl")])]),t._v(" or "),a("a",{attrs:{href:"#urls"}},[a("code",[t._v("getDetailUrl")])]),t._v(".")],1),t._v(" "),a("p",[t._v("You can provide parents to your model instance via the constructor or manually set with "),a("code",[t._v("photo.parents = {album: 1}")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);