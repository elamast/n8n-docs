(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1819:function(e,t,o){"use strict";o.r(t);var n=o(27),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"gotowebinar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gotowebinar"}},[e._v("#")]),e._v(" GoToWebinar")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.gotomeeting.com/webinar",target:"_blank",rel:"noopener noreferrer"}},[e._v("GoToWebinar"),n("OutboundLink")],1),e._v(" is a platform that helps you create and deliver online video conferences.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/GoToWebinar/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.goToWebinar"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get a webinar. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/960",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("GoToWebinar")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(908),alt:"A workflow with the GoToWebinar node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-gotowebinar-node-create-webinar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-gotowebinar-node-create-webinar"}},[e._v("#")]),e._v(" 2. GoToWebinar node (create: webinar)")]),e._v(" "),n("p",[e._v("This node will create a new webinar in GoToWebinar.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the GoToWebinar node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/GoToWebinar/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Webinar' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a subject in the "),n("em",[n("strong",[e._v("Subject")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Time Range")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Set the start time in the "),n("em",[n("strong",[e._v("Start Time")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Set the end time in the "),n("em",[n("strong",[e._v("End Time")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new webinar.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(909),alt:"Using the GoToWebinar node to create a new webinar"}})]),e._v(" "),n("h3",{attrs:{id:"_3-gotowebinar1-node-update-webinar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-gotowebinar1-node-update-webinar"}},[e._v("#")]),e._v(" 3. GoToWebinar1 node (update: webinar)")]),e._v(" "),n("p",[e._v("This node will update the description of the webinar that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Webinar' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Webinar Key")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > webinarKey. You can also add the following expression: "),n("code",[e._v('{{$json["webinarKey"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'Description' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter a description in the "),n("em",[n("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the description of the webinar that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(910),alt:"Using the GoToWebinar node to update a webinar"}})]),e._v(" "),n("h3",{attrs:{id:"_4-gotowebinar2-node-get-webinar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-gotowebinar2-node-get-webinar"}},[e._v("#")]),e._v(" 4. GoToWebinar2 node (get: webinar)")]),e._v(" "),n("p",[e._v("This node will get the information about the webinar that we created earlier.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Webinar' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Get' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Webinar Key")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > GoToWebinar > Output Data > JSON > webinarKey. You can also add the following expression: "),n("code",[e._v('{{$node["GoToWebinar"].json["webinarKey"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information about the webinar.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(911),alt:"Using the GoToWebinar node to get information of a webinar"}})])],1)}),[],!1,null,null,null);t.default=r.exports},908:function(e,t,o){e.exports=o.p+"assets/img/workflow.abb01059.png"},909:function(e,t,o){e.exports=o.p+"assets/img/GoToWebinar_node.b5d789bc.png"},910:function(e,t,o){e.exports=o.p+"assets/img/GoToWebinar1_node.fba20608.png"},911:function(e,t,o){e.exports=o.p+"assets/img/GoToWebinar2_node.3d585553.png"}}]);