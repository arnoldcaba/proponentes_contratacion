(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25db6f7c"],{3171:function(t,e,a){"use strict";a("9bc7")},"9bc7":function(t,e,a){},cda8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"adjuntos"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.dataAdjuntos},scopedSlots:t._u([{key:"item.descripcionestado",fn:function(e){var o=e.item;return[a("span",{class:[{ColorVBFalse:"REZ"===o.estado},{ColorVBTrue:"REZ"!==o.estado}]},[t._v(t._s(o.descripcionestado)+" ")])]}},{key:"item.action",fn:function(e){var o=e.item;return["Finalizado"!=t.estadoproceso?a("v-icon",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.guardarEstado(o)}}},[t._v(" save ")]):t._e()]}},{key:"item.valida",fn:function(e){var o=e.item;return[a("v-autocomplete",{attrs:{items:t.estados,"item-text":"texto","item-value":"id","hide-details":"","cache-items":!1,readonly:"Finalizado"==t.estadoproceso},model:{value:o.nuevoestado,callback:function(e){t.$set(o,"nuevoestado",e)},expression:"item.nuevoestado"}})]}},{key:"item.observacion",fn:function(e){var o=e.item;return[a("v-text-field",{attrs:{readonly:"Finalizado"==t.estadoproceso},model:{value:o.observacion,callback:function(e){t.$set(o,"observacion",e)},expression:"item.observacion"}})]}},{key:"item.carguearchivo",fn:function(e){var o=e.item;return[o.file_path?a("v-chip",{staticClass:"ma-2",staticStyle:{margin:"5px"},attrs:{color:"green darken-2","text-color":"white"},on:{click:function(e){return t.openInNewTab(o.file_path,o.file_type)}}},[t._v(" "+t._s(o.file_name.substring(0,50))+" ")]):t._e()]}}])})],1)},n=[],r=a("1da1"),i=(a("96cf"),a("7424")),s=a("af91"),c=a("7dee"),u={props:["idregistro","tipodoc","idpropconv","estadoproceso"],data:function(){return{dataAdjuntos:[],estados:[{id:"VAL",texto:"VALIDADO"},{id:"REZ",texto:"RECHAZADO"}],headers:[{text:"Descripción",align:"left",value:"descripciondocumento",class:"subtitle-1 font-weight-bold black--text"},{text:"Estado Actual",align:"left",sortable:!1,value:"descripcionestado",class:"subtitle-1 font-weight-bold black--text"},{text:"Archivo",align:"left",sortable:!1,value:"carguearchivo",class:"subtitle-1 font-weight-bold black--text"},{text:"Validación",align:"left",sortable:!1,value:"valida",class:"subtitle-1 font-weight-bold black--text"},{text:"Observación",align:"left",sortable:!1,value:"observacion",class:"subtitle-1 font-weight-bold black--text",width:450},{text:"Guardar",align:"center",sortable:!1,value:"action",class:"subtitle-1 font-weight-bold black--text"}]}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getData();case 1:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dataAdjuntos=[],e.next=3,i["b"].buscarAdjuntosDocumentoContratoRegistro({registro:t.idregistro,tipo:t.tipodoc,idpropconv:t.idpropconv});case 3:a=e.sent,o=a.data,t.dataAdjuntos=o.archivos;case 6:case"end":return e.stop()}}),e)})))()},openInNewTab:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,n,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,s["a"].getFileFromStorage(t);case 3:o=a.sent,n=o.data,r=Object(c["a"])(n,e,""),i=window.open(r,"_blank"),i.focus(),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},guardarEstado:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,i["a"].validarDocumentosContrato({registro:t.registro,proconvdoc:t.proconvdoc,estado:t.nuevoestado,observacion:t.observacion,idpropconv:e.idpropconv,tipodoc:e.tipodoc});case 2:o=a.sent,n=o.data,"1"===n||1===n?e.$toasted.success("Proceso realizado con éxito",{icon:"done",duration:5e3}):e.$toasted.error("Error desconocido",{icon:"error",duration:5e3}),e.getData();case 6:case"end":return a.stop()}}),a)})))()}},computed:{adjuntos:{get:function(){return this.dataAdjuntos},set:function(t){this.adjuntos=t}}},watch:{idregistro:function(t){this.dataAdjuntos=[],this.getData()},tipodoc:function(t){this.getData()},idpropconv:function(t){this.getData()}}},d=u,l=(a("3171"),a("2877")),p=Object(l["a"])(d,o,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-25db6f7c.a87fec4e.js.map