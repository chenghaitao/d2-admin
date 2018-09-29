(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c47"],{"17c9":function(t,n){t.exports="在 `columns` 中设置 `filters` `filterMethod` 属性即可开启该列的筛选，`filters` 是一个数组， `filterMethod` 是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。代码如下：\n"},b598:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("d2-container",[e("template",{slot:"header"},[t._v("筛选")]),e("d2-crud",{attrs:{columns:t.columns,data:t.data}}),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-markdown",{attrs:{source:t.doc}})],1),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-highlight",{attrs:{code:t.code}})],1),e("template",{slot:"footer"},[e("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],s=(e("cadf"),e("551c"),e("097d"),e("17c9")),r=e.n(s),l="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        },\n        {\n          title: '标签',\n          key: 'tag',\n          filters: [\n            { text: '家', value: '家' },\n            { text: '公司', value: '公司' }\n          ],\n          filterMethod (value, row) {\n            return row.tag === value\n          },\n          filterPlacement: 'bottom-end'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          tag: '家'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          tag: '公司'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          tag: '家'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          tag: '公司'\n        }\n      ]\n    }\n  }\n}\n<\/script>",o={data:function(){return{doc:r.a,code:l,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"},{title:"标签",key:"tag",filters:[{text:"家",value:"家"},{text:"公司",value:"公司"}],filterMethod:function(t,n){return n.tag===t},filterPlacement:"bottom-end"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",tag:"家"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",tag:"公司"}]}}},c=o,i=e("2877"),u=Object(i["a"])(c,a,d,!1,null,null,null);u.options.__file="index.vue";n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2c47.bc318867.js.map