(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1154:function(e,t,o){e.exports=o.p+"assets/img/workflow.26dce45d.png"},1155:function(e,t,o){e.exports=o.p+"assets/img/Set_node.cb24fa92.png"},1156:function(e,t,o){e.exports=o.p+"assets/img/QuickBase_node.3c51ea95.png"},1157:function(e,t,o){e.exports=o.p+"assets/img/Set1_node.e861b365.png"},1158:function(e,t,o){e.exports=o.p+"assets/img/QuickBase1_node.a0c257fc.png"},1159:function(e,t,o){e.exports=o.p+"assets/img/QuickBase2_node.024aef7e.png"},1905:function(e,t,o){"use strict";o.r(t);var a=o(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quick-base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-base"}},[e._v("#")]),e._v(" Quick Base")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.quickbase.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quick Base"),a("OutboundLink")],1),e._v(" is a low-code application development platform. It allows you to connect data, integrate your systems in real-time, and orchestrate automated workflows using simple business logic.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/QuickBase/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.quickbase"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create, update, and get all records in Quick Base. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/805",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Quick Base")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1154),alt:"A workflow with the Quick Base node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-set-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),a("p",[e._v("We will use the Set node to set the name and age for a new record.")]),e._v(" "),a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("name")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("n8n")]),e._v(" in the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("age")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Set the value to "),a("code",[e._v("8")]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that node sets the value for name and age.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1155),alt:"Using the Set node to set the data"}})]),e._v(" "),a("h3",{attrs:{id:"_3-quick-base-node-create-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-quick-base-node-create-record"}},[e._v("#")]),e._v(" 3. Quick Base node (create: record)")]),e._v(" "),a("p",[e._v("This node will create a new record in a table.")]),e._v(" "),a("h4",{attrs:{id:"creating-a-quick-base-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-quick-base-table"}},[e._v("#")]),e._v(" Creating a Quick Base table")]),e._v(" "),a("ol",[a("li",[e._v("Create a new table with the fields "),a("code",[e._v("name")]),e._v(" and "),a("code",[e._v("age")]),e._v(".")]),e._v(" "),a("li",[e._v("Copy the string of characters located between "),a("code",[e._v("db/")]),e._v(" and "),a("code",[e._v("?a=td")]),e._v(" in your Quick Base URL. This string is the Table ID that we will use in the Quick Base node.")])]),e._v(" "),a("h4",{attrs:{id:"configure-the-quick-base-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-quick-base-node"}},[e._v("#")]),e._v(" Configure the Quick Base node")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Quick Base node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/QuickBase/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Paste the Table ID you copied in the previous step, in the "),a("em",[a("strong",[e._v("Table ID")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("name,age")]),e._v(" in the "),a("em",[a("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new record in Quick Base using the information from the previous node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1156),alt:"Using the Quick Base node to create an entry"}})]),e._v(" "),a("h3",{attrs:{id:"_4-set1-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-set1-node"}},[e._v("#")]),e._v(" 4. Set1 node")]),e._v(" "),a("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set the value of "),a("code",[e._v("age")]),e._v(" and "),a("code",[e._v("Record ID#")]),e._v(" in this node.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("age")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Set the value to "),a("code",[e._v("10")]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Record ID#")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Quick Base > Output Data > JSON > Record ID#. You can also add the following expression: "),a("code",[e._v('{{$node["Quick Base"].json["Record ID#"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Keep Only Set")])]),e._v(" to "),a("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node sets the value of "),a("code",[e._v("age")]),e._v(" and "),a("code",[e._v("Record ID#")]),e._v(". This value is passed to the next node in the workflow.")]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(1157),alt:"Using the Set node to set the values for age and Record ID#"}})]),e._v(" "),a("h3",{pre:!0,attrs:{id:"_5-quick-base1-node-update-record"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-quick-base1-node-update-record"}},[e._v("#")]),e._v(" 5. Quick Base1 node (update: record)")]),e._v(" "),a("p",[e._v("This node will update the age field with the new value that we set in the previous node.")]),e._v(" "),a("div",{pre:!0,attrs:{"v-pre":""}},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Update' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Table ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Quick Base > Parameters > tableId. You can also add the following expression: "),a("code",[e._v('{{$node["Quick Base"].parameter["tableId"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("age")]),e._v(" in the "),a("em",[a("strong",[e._v("Columns")])]),e._v(" field. If you want to update a different column, enter that column name instead.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Record ID#")]),e._v(" in the "),a("em",[a("strong",[e._v("Update Key")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])])]),a("p",[e._v("In the screenshot below, you will notice that the node updates the age field with the new value that we set in the previous node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1158),alt:"Using the Quick Base node to update an entry"}})]),e._v(" "),a("h3",{attrs:{id:"_6-quick-base2-node-getall-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-quick-base2-node-getall-record"}},[e._v("#")]),e._v(" 6. Quick Base2 node (getAll: record)")]),e._v(" "),a("p",[e._v("This node returns all the records from Quick Base.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Get All' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Table ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Quick Base > Parameters > tableId. You can also add the following expression: "),a("code",[e._v('{{$node["Quick Base"].parameter["tableId"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node returns all the records from Quick Base.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1159),alt:"Using the Quick Base node to get all the records"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);