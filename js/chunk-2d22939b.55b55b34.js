(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22939b"],{dd16:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{justify:"center"}},[a("v-flex",[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline justify-center blue--text"},[e._v(" "+e._s(e.itemactual.referencia+" - "+e.itemactual.titulo)+" ")]),a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("br"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.dataNovedades,search:e.search},scopedSlots:e._u([{key:"item.archivo",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(t){return e.downloadFile(n.rutasarchivo,n.archivo)}}},[e._v(" file_download ")])]}}])})],1)],1)],1)],1)},c=[],r=a("1da1"),i=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("7424")),o=a("bc3a"),s=a.n(o),l={name:"anunciosTabNov",props:["itemactual"],data:function(){return{search:"",dataNovedades:[],headers:[{text:"Descripción",align:"left",value:"descripcion",class:"subtitle-1 font-weight-bold black--text"},{text:"Fecha",align:"center",value:"fecha",class:"subtitle-1 font-weight-bold black--text"},{text:"Descargar",align:"center",value:"archivo",class:"subtitle-1 font-weight-bold black--text"}]}},methods:{getNovedades:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["b"].getNovedades({codigoproceso:e.itemactual.id});case 2:a=t.sent,n=a.data,e.dataNovedades=n.data;case 5:case"end":return t.stop()}}),t)})))()},downloadFile:function(e,t){var a=this;s()({method:"get",url:e,responseType:"arraybuffer"}).then((function(e){a.forceFileDownload(e,t)})).catch((function(){return console.log("error occured")}))},forceFileDownload:function(e,t){var a=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",t),document.body.appendChild(n),n.click()}},watch:{itemactual:{handler:function(e){e&&this.getNovedades()},immediate:!0}},mounted:function(){this.getNovedades()}},d=l,u=a("2877"),h=Object(u["a"])(d,n,c,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d22939b.55b55b34.js.map