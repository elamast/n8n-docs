(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{1516:function(e,t,a){"use strict";a.r(t);var n=a(27),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"general-guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-guidelines"}},[e._v("#")]),e._v(" General Guidelines")]),e._v(" "),a("p",[e._v("Please make sure that everything works correctly and that no unnecessary code gets added. It is important to follow the following guidelines:")]),e._v(" "),a("h3",{attrs:{id:"do-not-change-incoming-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-not-change-incoming-data"}},[e._v("#")]),e._v(" Do not change incoming data")]),e._v(" "),a("p",[e._v("Never change the incoming data a node receives (which can be queried with "),a("code",[e._v("this.getInputData()")]),e._v(") as it gets shared by all nodes. If data has to get added, changed or deleted it has to be cloned and the new data returned. If that is not done, sibling nodes which execute after the current one will operate on the altered data and would process different data than they were supposed to.\nIt is however not needed to always clone all the data. If a node for, example only, changes only the binary data but not the JSON data, a new item can be created which reuses the reference to the JSON item.")]),e._v(" "),a("p",[e._v("An example can be seen in the code of the "),a("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ReadBinaryFile.node.ts#L69-L83",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReadBinaryFile-Node"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"write-nodes-in-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-nodes-in-typescript"}},[e._v("#")]),e._v(" Write nodes in TypeScript")]),e._v(" "),a("p",[e._v("All code of n8n is written in TypeScript and hence, the nodes should also be written in TypeScript. That makes development easier, faster, and avoids at least some bugs.")]),e._v(" "),a("h3",{attrs:{id:"use-the-built-in-request-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-built-in-request-library"}},[e._v("#")]),e._v(" Use the built in request library")]),e._v(" "),a("p",[e._v("Some third-party services have their own libraries on npm which make it easier to create an integration. It can be quite tempting to use them. The problem with those is that you add another dependency and not only one, you add but also all the dependencies of the dependencies. This means more and more code gets added, has to get loaded, can introduce security vulnerabilities, bugs, and so on. So please use the built-in module which can be used like this:")]),e._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("That is using the npm package "),a("a",{attrs:{href:"https://github.com/request/request-promise-native",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("request-promise-native")]),a("OutboundLink")],1),e._v(" which is the basic npm "),a("code",[e._v("request")]),e._v(" module but with promises. For a full set of "),a("code",[e._v("options")]),e._v(" consider looking at "),a("a",{attrs:{href:"https://github.com/request/request#requestoptions-callback",target:"_blank",rel:"noopener noreferrer"}},[e._v("the underlying "),a("code",[e._v("request")]),e._v(" options documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"reuse-parameter-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reuse-parameter-names"}},[e._v("#")]),e._v(" Reuse parameter names")]),e._v(" "),a("p",[e._v('When a node can perform multiple operations like edit and delete some kind of entity, for both operations, it would need an entity-id. Do not call them "editId" and "deleteId", call them "id". n8n can handle multiple parameters with the same name without a problem as long as only one is visible. To make sure that is the case, the "displayOptions" can be used. By keeping the same name, the value can be kept if a user switches the operation from "edit" to "delete".')]),e._v(" "),a("h3",{attrs:{id:"create-an-additional-fields-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-additional-fields-parameter"}},[e._v("#")]),e._v(" Create an 'Additional Fields' parameter")]),e._v(" "),a("p",[e._v("Some nodes may need a lot of options. Add only the very important ones to the top level and for all others, create an 'Additional Fields' parameter where they can be added if needed. This ensures that the interface stays clean and does not unnecessarily confuse people. A good example of that would be the XML node.")]),e._v(" "),a("h3",{attrs:{id:"follow-existing-parameter-naming-guideline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follow-existing-parameter-naming-guideline"}},[e._v("#")]),e._v(" Follow existing parameter naming guideline")]),e._v(" "),a("p",[e._v('There is not much of a guideline yet but if your node can do multiple things, call the parameter which sets the behavior either "mode" (like "Merge" and "XML" node) or "operation" like the most other ones. If these operations can be done on different resources (like "User" or "Order) create a "resource" parameter (like "Pipedrive" and "Trello" node).')]),e._v(" "),a("h3",{attrs:{id:"node-icons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-icons"}},[e._v("#")]),e._v(" Node Icons")]),e._v(" "),a("p",[e._v("Check existing node icons as a reference when you create own ones. The resolution of an icon should be 60x60px and saved as PNG.")])])}),[],!1,null,null,null);t.default=s.exports}}]);