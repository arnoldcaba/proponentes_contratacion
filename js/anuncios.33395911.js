(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["anuncios"],{"0ccb":function(t,e,a){var o=a("50c4"),r=a("577e"),n=a("1148"),s=a("1d80"),i=Math.ceil,c=function(t){return function(e,a,c){var u,l,d=r(s(e)),p=d.length,f=void 0===c?" ":r(c),b=o(a);return b<=p||""==f?d:(u=b-p,l=n.call(f,i(u/f.length)),l.length>u&&(l=l.slice(0,u)),t?d+l:l+d)}};t.exports={start:c(!1),end:c(!0)}},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("d3b7");function o(t,e,a,o,r,n,s){try{var i=t[n](s),c=i.value}catch(u){return void a(u)}i.done?e(c):Promise.resolve(c).then(o,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function i(t){o(s,r,n,i,c,"next",t)}function c(t){o(s,r,n,i,c,"throw",t)}i(void 0)}))}}},"31c9":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"wrap",attrs:{align:"center","no-gutters":""}},[a("v-col",{attrs:{md:"3",sm:"12",lg:"3"}},[a("v-text-field",{attrs:{label:"Título",outlined:"",dense:"",autocomplete:"off","cache-items":!1,"prepend-icon":"list_alt"},model:{value:t.busTitulo,callback:function(e){t.busTitulo=e},expression:"busTitulo"}})],1),a("v-col",{attrs:{md:"3",sm:"12",lg:"3"}},[a("v-text-field",{attrs:{outlined:"",dense:"",label:"Descripción",autocomplete:"off","cache-items":!1,"prepend-icon":"list_alt"},model:{value:t.busDescripcion,callback:function(e){t.busDescripcion=e},expression:"busDescripcion"}})],1),a("v-col",{staticClass:"text-center",attrs:{md:"3",sm:"12",lg:"3"}},[a("v-text-field",{attrs:{label:"Referencia",outlined:"",dense:"",autocomplete:"off","cache-items":!1,"prepend-icon":"list_alt"},model:{value:t.busReferencia,callback:function(e){t.busReferencia=e},expression:"busReferencia"}})],1),"1"==t.visEstado?a("v-col",{staticClass:"text-center",attrs:{md:"3",sm:"12",lg:"3"}},[a("v-autocomplete",{attrs:{items:t.estadospropuestas,outlined:"",dense:"",label:"Estado",autocomplete:"off","cache-items":!1,"prepend-icon":"list_alt",clearable:""},model:{value:t.busEstadoSel,callback:function(e){t.busEstadoSel=e},expression:"busEstadoSel"}})],1):t._e(),a("v-col",{attrs:{md:"3",sm:"12",lg:"3"}},[a("v-text-field",{attrs:{label:"Publicado Entre",outlined:"",dense:"",type:"date",autocomplete:"off","cache-items":!1,"prepend-icon":"event",clearable:""},model:{value:t.busFecPubIni,callback:function(e){t.busFecPubIni=e},expression:"busFecPubIni"}})],1),a("v-col",{attrs:{md:"3",sm:"12",lg:"3"}},[a("v-text-field",{attrs:{outlined:"",dense:"",type:"date",label:"Y",autocomplete:"off","cache-items":!1,readonly:"","prepend-icon":"event"},model:{value:t.busFecPubFin,callback:function(e){t.busFecPubFin=e},expression:"busFecPubFin"}})],1),a("v-col",{attrs:{md:"3",sm:"12",lg:"3"}},[a("v-text-field",{attrs:{label:"Fecha Límite Entre",outlined:"",dense:"",type:"date",autocomplete:"off","cache-items":!1,readonly:"","prepend-icon":"event"},model:{value:t.busFecLimIni,callback:function(e){t.busFecLimIni=e},expression:"busFecLimIni"}})],1),a("v-col",{attrs:{md:"3",sm:"12",lg:"3"}},[a("v-text-field",{attrs:{outlined:"",dense:"",type:"date",label:"Y",autocomplete:"off","cache-items":!1,"prepend-icon":"event",clearable:""},model:{value:t.busFecLimFin,callback:function(e){t.busFecLimFin=e},expression:"busFecLimFin"}})],1),a("v-col",{attrs:{md:"3",sm:"12",lg:"3"}},[a("v-autocomplete",{attrs:{items:t.tiposcontratacion,"item-text":"text","item-value":"value",label:"Tipo Contratación",outlined:"",dense:"",autocomplete:"off","cache-items":!1,"prepend-icon":"list_alt",clearable:""},model:{value:t.busTipoContratacion,callback:function(e){t.busTipoContratacion=e},expression:"busTipoContratacion"}})],1)],1),a("v-row",{attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.save}},[t._v(" Buscar ")])],1)],1)},r=[],n=a("1da1"),s=(a("d3b7"),a("25f0"),a("4d90"),a("96cf"),a("7424")),i={props:["busEstado","visEstado"],data:function(){return{busTitulo:"",busDescripcion:"",busReferencia:"",busFecPubIni:"",busFecPubFin:"",busFecLimIni:"",busFecLimFin:"",busTipoContratacion:"",busEstadoSel:"",tiposcontratacion:[],estadospropuestas:[]}},mounted:function(){this.setFechaActual(),this.getEstadospropuestas(),this.getTiposcontratacion()},methods:{getEstadospropuestas:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s["b"].getEstadoPropuesta;case 3:a=e.sent,o=a.data,t.estadospropuestas=o,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,8,11,13]])})))()},save:function(){this.$emit("search",{busTitulo:this.busTitulo,busDescripcion:this.busDescripcion,busReferencia:this.busReferencia,busFecPubIni:this.busFecPubIni,busFecPubFin:this.busFecPubFin,busFecLimIni:this.busFecLimIni,busFecLimFin:this.busFecLimFin,busTipoContratacion:this.busTipoContratacion,busEstado:""!==this.busEstado?this.busEstado:this.busEstadoSel})},setFechaActual:function(){var t=new Date,e=t.getDate(),a=t.getMonth()+1,o=t.getFullYear(),r=o.toString()+"-"+a.toString().padStart(2,"00")+"-"+e.toString().padStart(2,"00");this.busFecPubFin=r,this.busFecLimIni=r},getTiposcontratacion:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o,r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s["b"].getTipoContratacion;case 3:a=e.sent,o=a.data,r=o,n=0;case 7:if(!(n<r.length)){e.next=26;break}i=r[n],e.t0=i,e.next="dir_personal"===e.t0?12:"dir_bien"===e.t0?14:"dir_juridica"===e.t0?16:"lista_corta"===e.t0?18:"conv_publica"===e.t0?20:22;break;case 12:return t.tiposcontratacion.push({text:"CONVOCATORIA DE PERSONA NATURAL",value:i}),e.abrupt("break",23);case 14:return t.tiposcontratacion.push({text:"PRESTACIÓN DE SERVICIOS / CONSULTORÍAS INDIVIDUALES",value:i}),e.abrupt("break",23);case 16:return t.tiposcontratacion.push({text:"CONVOCATORIA DE PERSONA JURÍDICA",value:i}),e.abrupt("break",23);case 18:return t.tiposcontratacion.push({text:"LISTA CORTA",value:i}),e.abrupt("break",23);case 20:return t.tiposcontratacion.push({text:"CONVOCATORÍA PÚBLICA",value:i}),e.abrupt("break",23);case 22:return e.abrupt("break",23);case 23:n++,e.next=7;break;case 26:e.next=31;break;case 28:e.prev=28,e.t1=e["catch"](0),console.log(e.t1);case 31:return e.prev=31,e.finish(31);case 33:case"end":return e.stop()}}),e,null,[[0,28,31,33]])})))()}}},c=i,u=a("2877"),l=Object(u["a"])(c,o,r,!1,null,null,null);e["a"]=l.exports},"4d90":function(t,e,a){"use strict";var o=a("23e7"),r=a("0ccb").start,n=a("9a0c");o({target:"String",proto:!0,forced:n},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},7424:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return c}));var o=a("bc3a"),r=a.n(o),n={getTiposEmpresa:function(t){return r.a.post("getTiposEmpresa",t)},getPrefijosTelefonos:function(t){return r.a.post("getPrefijosTelefonos",t)},getPaises:function(t){return r.a.post("Paises")},getCiudades:function(t){return r.a.post("Ciudades")},getDataRegistro:function(t){return r.a.post("getFormularioRegistro",t)},getUnspscXFiltro:function(t){return r.a.post("UnspscXFiltro",t)},getRegistroUnspsc:function(t){return r.a.post("getRegistroUnspsc",t)},saveRegistroNatural:function(t){return r.a.post("guardarDataFormRegistroNatural",t)},saveRegistroJuridica:function(t){return r.a.post("guardarDataFormRegistroJuridica",t)},delRegistroUnspsc:function(t){return r.a.post("delRegistroUnspsc",t)},saveRegistroUnspsc:function(t){return r.a.post("addRegistroUnspsc",t)},actualizaTCRegistro:function(t){return r.a.post("actualizaTCRegistro",t)}},s={getTipoContratacion:r.a.post("getTipoContratacioEnum"),getEstadoPropuesta:r.a.post("getEstadosPropuestasEnum"),buscarPropuesta:function(t){return r.a.post("buscarPropuesta",t)},expresarInteres:function(t){return r.a.post("expresarInteres",t)},getMsgConvocatoriaRegistro:function(t){return r.a.post("getMsgConvocatoriaRegistro",t)},getMsgHijos:function(t){return r.a.post("getMsgHijos",t)},actualizaMsgleidos:function(t){return r.a.post("actualizarMsgleidos",t)},agregarMensaje:function(t){return r.a.post("nuevoMensaje",t)},getNovedades:function(t){return r.a.post("novedadesProceso",t)},buscarDocumentosTermRef:function(t){return r.a.post("buscarDocumentosTermRef",t)},buscarIdProponenteTermRefAdj:function(t){return r.a.post("buscarIdProponenteTermRefAdj",t)},guardardatosAdjuntosPropTermRef:function(t){return r.a.post("guardardatosAdjuntosPropTermRef",t)},traerDocumentosGenerales:function(t){return r.a.post("traerDocumentosGenerales",t)},postularse:function(t){return r.a.post("postularse",t)},agregaDocumentoContratoRegistro:function(t){return r.a.post("agregaDocumentoContratoRegistro",t)},buscarAdjuntosDocumentoContratoRegistro:function(t){return r.a.post("buscarAdjuntosDocumentoContratoRegistro",t)},guardardatosAdjuntosDocContratacion:function(t){return r.a.post("guardardatosAdjuntosDocContratacion",t)},enviarDocumentosContratoJuridica:function(t){return r.a.post("enviarDocumentosContratoJuridica",t)}},i={login:function(t){return r.a.post("loginxArea",t)},actualizapropuestaConvocatoria:function(t){return r.a.post("actualizapropuestaConvocatoria",t)},adicionarDocumentosGenerales:function(t){return r.a.post("adicionarDocumentosGenerales",t)},propuestasCerradas:function(t){return r.a.post("propuestasCerradas")},oferentesPropuestas:function(t){return r.a.post("oferentesPropuestas",t)},adjudicarProceso:function(t){return r.a.post("adjudicarProceso",t)},propuestasAdjudicadas:function(t){return r.a.post("propuestasAdjudicadas")},oferentePropuestaAdjudicada:function(t){return r.a.post("oferentePropuestaAdjudicada",t)},personalPorArea:function(t){return r.a.post("PersonalXArea",t)},addDatosAnexosPropuestaConvocatoria:function(t){return r.a.post("addDatosAnexosPropuestaConvocatoria",t)},userXArea:function(t){return r.a.post("userXArea",t)},guardarVoBoPropuestaConvocatoria:function(t){return r.a.post("addVoBoPropuestaConvocatoria",t)},contratosXAbogado:function(t){return r.a.post("buscarPropuestasAdjudicadasAbogado",t)},PropuestaConvocatoriaDocumentos:function(t){return r.a.post("PropuestaConvocatoriaDocumentos",t)},agregarPropuestaConvocatoriaDocumento:function(t){return r.a.post("agregarPropuestaConvocatoriaDocumento",t)},actualizarPropuestaConvocatoriaDocumento:function(t){return r.a.post("actualizarPropuestaConvocatoriaDocumento",t)},eliminarPropuestaConvocatoriaDocumento:function(t){return r.a.post("eliminarPropuestaConvocatoriaDocumento",t)},validarDocumentosContrato:function(t){return r.a.post("validarDocumentosContrato",t)},buscarMinutaContrato:function(t){return r.a.post("buscarMinutaContrato",t)},guardardatosAdjuntosMinuta:function(t){return r.a.post("guardardatosAdjuntosMinuta",t)},voboMinutaContrato:function(t){return r.a.post("voboMinutaContrato",t)},actualizarAbogadoProcesos:function(t){return r.a.post("actualizarAbogadoProcesos",t)},finalizarProceso:function(t){return r.a.post("finalizarProceso",t)},tipoNovedadProcesos:function(t){return r.a.post("tiposNovedadProcesos")},NovedadesProcesos:function(t){return r.a.post("NovedadesProcesos",t)},guardarNovedadProceso:function(t){return r.a.post("guardarNovedadProceso",t)},buscarArchivosAdicionalesContrato:function(t){return r.a.post("buscarArchivosAdicionalesContrato",t)},guardardatosAdjuntosArcAdicionalesContrato:function(t){return r.a.post("guardardatosAdjuntosArcAdicionalesContrato",t)}},c={addUpdNovedad:function(t){return r.a.post("AddUdpNovedadproceso",t)},eliminarNovedad:function(t){return r.a.post("eliminarNovedad",t)},eliminarArcNovedad:function(t){return r.a.post("eliminarArcNovedadproceso",t)}}},"9a0c":function(t,e,a){var o=a("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},b7da:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Anuncios")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{justify:"center"}},[a("v-flex",[a("v-card",{staticClass:"mx-auto"},[a("v-card-title",{staticClass:"justify-center"},[t._v("Buscar Procesos de Adquisición")]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("span",{staticClass:"h2 font-weight-bold black--text"},[t._v(t._s("Estado: "+t.dataRegistro.estadotxt))])])],1),"R"!=t.dataRegistro.estado?a("div",[a("br"),a("v-window",[a("v-window-item",{key:"card-1"},[a("v-card",{attrs:{color:"white",elevation:"2"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("span",{staticClass:"error--text"},[t._v(" Solo se podrá expresar interés en un proceso, si el estado actual de su cuenta es REGISTRADO. Hasta que no tenga sus datos completos y acepte los términos y condiciones no podrá presentarse. Solo se podrá consultar. ")])])],1)],1)],1)],1)],1):t._e(),a("FormBusqueda",{attrs:{busEstado:"",visEstado:"1"},on:{search:t.realizarConsulta}})],1)],1),a("br"),a("v-card",{staticClass:"mx-auto"},[a("v-card-title",{staticClass:"justify-center"},[t._v("Resultados de la Búsqueda")]),a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("br"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.dataConsulta,search:t.search},scopedSlots:t._u([{key:"item.expinteres",fn:function(e){var o=e.item;return[""==o.proconregest&&"R"==t.dataRegistro.estado&&"conv_publica"==o.tipo_contratacion?a("v-icon",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){t.itemactual=o,t.dialog_expresarinteres=!0}}},[t._v(" thumb_up ")]):t._e()]}},{key:"item.verdocs",fn:function(e){var o=e.item;return["R"==t.dataRegistro.estado?a("v-icon",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.verDocumentos(o)}}},[t._v(" view_list ")]):t._e()]}},{key:"item.cargardocs",fn:function(e){var o=e.item;return["R"==t.dataRegistro.estado&&"I"==o.proconregest?a("v-icon",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.abrirDialogoFiles(o)}}},[t._v(" file_upload ")]):t._e()]}}])})],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.dialog_expresarinteres,callback:function(e){t.dialog_expresarinteres=e},expression:"dialog_expresarinteres"}},[a("v-card",{attrs:{elevation:"10"}},[a("v-card-title",[a("span",{staticClass:"headline justify-center red--text"},[t._v("Expresar Interes")])]),a("v-card-text",[t._v(" ¿Está Seguro que desea expresar interés en el Proceso? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success",text:""},on:{click:t.expresarInteres}},[t._v("Aceptar")]),a("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(e){t.itemactual="",t.dialog_expresarinteres=!1}}},[t._v("Cancelar")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"1000",scrollable:""},model:{value:t.dialog_infodocumentacion,callback:function(e){t.dialog_infodocumentacion=e},expression:"dialog_infodocumentacion"}},[a("v-card",{attrs:{elevation:"10"}},[a("v-card-title",{staticClass:"headline justify-center blue--text"},[t._v(" Documentación ")]),a("v-card-text",[a("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",{key:"P"},[t._v("Proceso")]),a("v-tab",{key:"R"},[t._v(t._s(t.itemactual.referencia+" - "+t.itemactual.titulo))]),a("v-tab",{key:"C"},[t._v("Correspondencia")]),a("v-tab",{key:"N"},[t._v("Novedades al Proceso")])],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{key:"P"},[a("TabProc",{attrs:{itemactual:t.itemactual},on:{"update:itemactual":function(e){t.itemactual=e}}})],1),a("v-tab-item",{key:"R"},[a("TabRef",{attrs:{itemactual:t.itemactual,naturalezajuridica:t.dataRegistro.naturalezajuridica,correo:t.dataRegistro.email},on:{"update:itemactual":function(e){t.itemactual=e},"update:naturalezajuridica":function(e){return t.$set(t.dataRegistro,"naturalezajuridica",e)},"update:correo":function(e){return t.$set(t.dataRegistro,"email",e)}}})],1),a("v-tab-item",{key:"C"},[a("TabMsg",{attrs:{itemactual:t.itemactual},on:{"update:itemactual":function(e){t.itemactual=e}}})],1),a("v-tab-item",{key:"N"},[a("TabNovedades",{attrs:{itemactual:t.itemactual},on:{"update:itemactual":function(e){t.itemactual=e}}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(e){t.item="",t.itemactual="",t.dialog_infodocumentacion=!1}}},[t._v("Cancelar")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"1200",scrollable:""},model:{value:t.dialog_loadfiles,callback:function(e){t.dialog_loadfiles=e},expression:"dialog_loadfiles"}},[a("v-card",{attrs:{elevation:"10"}},[a("v-card-title",{staticClass:"headline justify-center blue--text"},[t._v(" Cargar Documentación ")]),a("v-card-text",[a("loadFiles",{attrs:{idregistro:t.dataRegistro.codigo,tipoContratacion:t.itemactual.tipo_contratacion,naturalezajuridica:t.dataRegistro.naturalezajuridica,id_termref:t.itemactual.id_termref},on:{"update:idregistro":function(e){return t.$set(t.dataRegistro,"codigo",e)},"update:tipoContratacion":function(e){return t.$set(t.itemactual,"tipo_contratacion",e)},"update:tipo-contratacion":function(e){return t.$set(t.itemactual,"tipo_contratacion",e)},"update:naturalezajuridica":function(e){return t.$set(t.dataRegistro,"naturalezajuridica",e)},"update:id_termref":function(e){return t.$set(t.itemactual,"id_termref",e)},cerrarDialogo:t.cerrarDialogoFiles}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:function(e){t.dialog_loadfiles=!1}}},[t._v("Cancelar")])],1)],1)],1)],1)},s=[],i=a("1da1"),c=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("7424")),u=a("31c9"),l={name:"anuncios",props:["codigo","estadotxt","estado"],components:{TabProc:function(){return a.e("chunk-2d0b9258").then(a.bind(null,"3269"))},TabRef:function(){return Promise.all([a.e("chunk-35c1faf3"),a.e("chunk-2d207b66")]).then(a.bind(null,"a265"))},TabMsg:function(){return a.e("chunk-4164cc01").then(a.bind(null,"8e1c"))},TabNovedades:function(){return Promise.all([a.e("chunk-35c1faf3"),a.e("chunk-2d22939b")]).then(a.bind(null,"dd16"))},loadFiles:function(){return Promise.all([a.e("chunk-35c1faf3"),a.e("chunk-50b84ea6"),a.e("chunk-3b344bb4")]).then(a.bind(null,"1cf0"))},FormBusqueda:u["a"]},data:function(){return{dataRegistro:[],dataConsulta:[],search:"",itemactual:"",dialog_expresarinteres:!1,dialog_infodocumentacion:!1,tab:null,ultimaBusqueda:"",dialog_loadfiles:!1,headers:[{text:"Título del proceso",align:"left",value:"titulo",class:"subtitle-1 font-weight-bold black--text"},{text:"Fecha límite",align:"left",value:"fecha_cierre_format",class:"subtitle-1 font-weight-bold black--text"},{text:"Publicado",align:"left",value:"fecha_apertura_format",class:"subtitle-1 font-weight-bold black--text"},{text:"Tipo de proceso",align:"left",value:"tipo_contratacion",class:"subtitle-1 font-weight-bold black--text"},{text:"Estado",align:"left",value:"estado",class:"subtitle-1 font-weight-bold black--text"},{text:"Referencia",align:"left",value:"referencia",class:"subtitle-1 font-weight-bold black--text"},{text:"Documentación",align:"center",value:"verdocs",class:"subtitle-1 font-weight-bold black--text"},{text:"Expresar interés",align:"center",value:"expinteres",class:"subtitle-1 font-weight-bold black--text"},{text:"Cargar Docs.",align:"center",value:"cargardocs",class:"subtitle-1 font-weight-bold black--text"}]}},methods:{realizarConsulta:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.ultimaBusqueda=t,e.dataConsulta=[],""!==t.busTitulo||""!==t.busDescripcion||""!==t.busReferencia||""!==t.busFecPubIni||""!==t.busFecLimFin||""!==t.busTipoContratacion||""!==t.busEstado){a.next=6;break}e.$toasted.error("Debe ingresar al menos un criterio de búsqueda",{icon:"error",duration:5e3}),a.next=20;break;case 6:return a.prev=6,a.next=9,c["b"].buscarPropuesta({titulo:t.busTitulo,descripcion:t.busDescripcion,referencia:t.busReferencia,fecha_apertura_ini:t.busFecPubIni,fecha_apertura_fin:t.busFecPubFin,fecha_cierre_ini:t.busFecLimIni,fecha_cierre_fin:t.busFecLimFin,estado:t.busEstado,tipo_contratacion:t.busTipoContratacion,pubfreid:e.dataRegistro.codigo});case 9:o=a.sent,r=o.data,e.dataConsulta=r,0===e.dataConsulta.length&&e.$toasted.error("No se encontraron resultados según los criterios de búsqueda",{icon:"error",duration:5e3}),a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](6),console.log(a.t0);case 18:return a.prev=18,a.finish(18);case 20:case"end":return a.stop()}}),a,null,[[6,15,18,20]])})))()},expresarInteres:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["b"].expresarInteres({idpropuestaconvocatoria:t.itemactual.id,idregistro:t.dataRegistro.codigo,correo:t.dataRegistro.email,id_termref:t.itemactual.id_termref});case 3:a=e.sent,o=a.data,o?(t.$toasted.success("Se actualizó el estado del Proceso",{icon:"done",duration:5e3}),t.dialog_expresarinteres=!1,t.realizarConsulta(t.ultimaBusqueda)):t.$toasted.error("No se pudo actualizar el estado del Proceso",{icon:"error",duration:5e3}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$toasted.error(e.t0,{icon:"error",duration:5e3});case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,8,11,13]])})))()},verDocumentos:function(t){this.itemactual="",this.itemactual=t,this.dialog_infodocumentacion=!0,this.tab="P"},abrirDialogoFiles:function(t){this.itemactual="",this.itemactual=t,this.dialog_loadfiles=!0},cerrarDialogoFiles:function(){this.itemactual="",this.dialog_loadfiles=!1}},watch:{"$store.state.dataRegistro":{handler:function(t){t&&(this.dataRegistro=t)},immediate:!0}},mounted:function(){}},d=l,p=a("2877"),f=Object(p["a"])(d,n,s,!1,null,null,null),b=f.exports,v={components:{Anuncios:b}},m=v,g=Object(p["a"])(m,o,r,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=anuncios.33395911.js.map