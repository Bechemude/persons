goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__38086 = e.target.readyState;
var fexpr__38085 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__38085.cljs$core$IFn$_invoke$arity$1 ? fexpr__38085.cljs$core$IFn$_invoke$arity$1(G__38086) : fexpr__38085.call(null,G__38086));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__38093,handler){
var map__38094 = p__38093;
var map__38094__$1 = cljs.core.__destructure_map(map__38094);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38094__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38094__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38094__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38094__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38094__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38094__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38094__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__38090_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__38090_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___38128 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___38128)){
var response_type_38129 = temp__5753__auto___38128;
(this$__$1.responseType = cljs.core.name(response_type_38129));
} else {
}

var seq__38098_38130 = cljs.core.seq(headers);
var chunk__38099_38131 = null;
var count__38100_38132 = (0);
var i__38101_38133 = (0);
while(true){
if((i__38101_38133 < count__38100_38132)){
var vec__38109_38134 = chunk__38099_38131.cljs$core$IIndexed$_nth$arity$2(null,i__38101_38133);
var k_38135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38109_38134,(0),null);
var v_38136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38109_38134,(1),null);
this$__$1.setRequestHeader(k_38135,v_38136);


var G__38137 = seq__38098_38130;
var G__38138 = chunk__38099_38131;
var G__38139 = count__38100_38132;
var G__38140 = (i__38101_38133 + (1));
seq__38098_38130 = G__38137;
chunk__38099_38131 = G__38138;
count__38100_38132 = G__38139;
i__38101_38133 = G__38140;
continue;
} else {
var temp__5753__auto___38141 = cljs.core.seq(seq__38098_38130);
if(temp__5753__auto___38141){
var seq__38098_38142__$1 = temp__5753__auto___38141;
if(cljs.core.chunked_seq_QMARK_(seq__38098_38142__$1)){
var c__4638__auto___38143 = cljs.core.chunk_first(seq__38098_38142__$1);
var G__38144 = cljs.core.chunk_rest(seq__38098_38142__$1);
var G__38145 = c__4638__auto___38143;
var G__38146 = cljs.core.count(c__4638__auto___38143);
var G__38147 = (0);
seq__38098_38130 = G__38144;
chunk__38099_38131 = G__38145;
count__38100_38132 = G__38146;
i__38101_38133 = G__38147;
continue;
} else {
var vec__38112_38148 = cljs.core.first(seq__38098_38142__$1);
var k_38149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112_38148,(0),null);
var v_38150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112_38148,(1),null);
this$__$1.setRequestHeader(k_38149,v_38150);


var G__38151 = cljs.core.next(seq__38098_38142__$1);
var G__38152 = null;
var G__38153 = (0);
var G__38154 = (0);
seq__38098_38130 = G__38151;
chunk__38099_38131 = G__38152;
count__38100_38132 = G__38153;
i__38101_38133 = G__38154;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4212__auto__ = body;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
