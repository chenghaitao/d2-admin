(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-763d"],{7062:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("修改数据")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,title:"D2 CRUD","add-mode":"",rowHandle:n.rowHandle,"form-template":n.formTemplate,"form-options":n.formOptions},on:{"row-add":n.handleRowAdd,"row-edit":n.handleRowEdit,"dialog-cancel":n.handleDialogCancel}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],a=(t("cadf"),t("551c"),t("097d"),t("985d")),s=t.n(a),i="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      title=\"D2 CRUD\"\n      add-mode\n      :rowHandle=\"rowHandle\"\n      :form-template=\"formTemplate\"\n      :form-options=\"formOptions\"\n      @row-add=\"handleRowAdd\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          forbidEdit: true,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          forbidEdit: false,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          forbidEdit: false,\n          showEditButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          forbidEdit: false,\n          showEditButton: true\n        }\n      ],\n      rowHandle: {\n        columnHeader: '编辑表格',\n        edit: {\n          icon: 'el-icon-edit',\n          text: '点我进行编辑',\n          size: 'small',\n          show (index, row) {\n            if (row.showEditButton) {\n              return true\n            }\n            return false\n          },\n          disabled (index, row) {\n            if (row.forbidEdit) {\n              return true\n            }\n            return false\n          }\n        }\n      },\n      formTemplate: {\n        date: {\n          title: '日期',\n          value: ''\n        },\n        name: {\n          title: '姓名',\n          value: ''\n        },\n        address: {\n          title: '地址',\n          value: ''\n        },\n        forbidEdit: {\n          title: '禁用按钮',\n          value: false,\n          component: {\n            show: false\n          }\n        },\n        showEditButton: {\n          title: '显示按钮',\n          value: true,\n          component: {\n            show: false\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleRowAdd (row, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(row)\n        this.$message({\n          message: '保存成功',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleRowEdit ({index, row}, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '编辑成功',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '取消编辑',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n<\/script>",l={data:function(){return{doc:s.a,code:i,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",forbidEdit:!0,showEditButton:!0},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",forbidEdit:!1,showEditButton:!0},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",forbidEdit:!1,showEditButton:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",forbidEdit:!1,showEditButton:!0}],rowHandle:{columnHeader:"编辑表格",edit:{icon:"el-icon-edit",text:"点我进行编辑",size:"small",show:function(n,e){return!!e.showEditButton},disabled:function(n,e){return!!e.forbidEdit}}},formTemplate:{date:{title:"日期",value:""},name:{title:"姓名",value:""},address:{title:"地址",value:""},forbidEdit:{title:"禁用按钮",value:!1,component:{show:!1}},showEditButton:{title:"显示按钮",value:!0,component:{show:!1}}},formOptions:{labelWidth:"80px",labelPosition:"left",saveLoading:!1}}},methods:{handleRowAdd:function(n,e){var t=this;this.formOptions.saveLoading=!0,setTimeout(function(){console.log(n),t.$message({message:"保存成功",type:"success"}),e(),t.formOptions.saveLoading=!1},300)},handleRowEdit:function(n,e){var t=this,o=n.index,d=n.row;this.formOptions.saveLoading=!0,setTimeout(function(){console.log(o),console.log(d),t.$message({message:"编辑成功",type:"success"}),e(),t.formOptions.saveLoading=!1},300)},handleDialogCancel:function(n){this.$message({message:"取消编辑",type:"warning"}),n()}}},r=l,m=t("2877"),u=Object(m["a"])(r,o,d,!1,null,null,null);u.options.__file="index.vue";e["default"]=u.exports},"985d":function(n,e){n.exports="通过给 `D2 Crud` 传入 `rowHandle` 可开启表格操作列，传入 `columnHeader` 可以自定义操作列的表头，传入 `edit` 对象可以开启编辑模式，需要传入 `form-template` 来为编辑添加模板，向`form-options` 中传入 `labelWidth` 和 `labelPosition` 来控制表单中label的显示, `saveLoading` 则控制保存按钮的loading状态， `row-edit` 事件控制数据编辑，参数： `index` 是当前编辑行的索引， `row` 是当前编辑行的数据， `done` 用于控制编辑成功，可以在 `done()` 之前加入自己的逻辑代码。代码如下：\n"}}]);
//# sourceMappingURL=chunk-763d.fbb64f72.js.map