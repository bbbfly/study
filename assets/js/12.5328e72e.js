(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{810:function(e,l,t){"use strict";t.r(l);t(53);var n={data:function(){return{form:{table:[{name:"111",age:"20"},{name:"111",age:"20"},{name:"111",age:"20"}]},table2:[{name:"111",age:"20"},{name:"111",age:"20"},{name:"",age:""}],rules:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],age:[{required:!0,message:"年龄不能为空",trigger:"blur"}]},code1:'<el-form :model="_data" ref="formtable">\n                <el-table style="width:100%" :data="table2" border>\n                  <el-table-column label="姓名" align="center">\n                    <template slot-scope="scope"><el-form-item :prop="`table2.${scope.$index}.name`" :rules="rules.name"><el-input v-model="scope.row.name"></el-input>\n                      </el-form-item>\n                    </template>\n                  </el-table-column>\n                  <el-table-column label="年龄" align="center">\n                    <template slot-scope="scope"><el-form-item :prop="`table2.${scope.$index}.age`" :rules="rules.age"><el-input v-model="scope.row.age"></el-input>\n                      </el-form-item>\n                    </template>\n                  </el-table-column>\n                  <el-table-column label="操作" align="center">\n                    <template slot-scope="scope">\n                      <el-button icon="el-icon-delete" @click="onDelete(scope.$index)"></el-button>\n                    </template>\n                  </el-table-column>\n                </el-table>\n                <el-button @click="validTable">较验</el-button>\n              </el-form>'}},methods:{validTable:function(){this.$refs.formtable.validate((function(e){}))},onDelete:function(e){this.form.table.splice(e,1)}}},a=t(74),o=Object(a.a)(n,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("h-card",{scopedSlots:e._u([{key:"code",fn:function(){return[t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("\r\n        "),t("code",{staticClass:"vue"},[e._v("\r\n          "+e._s(e.code1)+"\r\n        ")]),e._v("\r\n      ")])]},proxy:!0}])},[t("el-form",{ref:"formtable",attrs:{model:e._data}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.table2,border:""}},[t("el-table-column",{attrs:{label:"姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-form-item",{attrs:{prop:"table2."+l.$index+".name",rules:e.rules.name}},[t("el-input",{model:{value:l.row.name,callback:function(t){e.$set(l.row,"name",t)},expression:"scope.row.name"}})],1)]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"年龄",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-form-item",{attrs:{prop:"table2."+l.$index+".age",rules:e.rules.age}},[t("el-input",{model:{value:l.row.age,callback:function(t){e.$set(l.row,"age",t)},expression:"scope.row.age"}})],1)]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(t){return e.onDelete(l.$index)}}})]}}])})],1),e._v(" "),t("el-button",{on:{click:e.validTable}},[e._v("较验")])],1)],1)],1)}),[],!1,null,null,null);l.default=o.exports}}]);