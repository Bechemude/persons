goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__37038 = e.target.readyState;
var fexpr__37037 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__37037.cljs$core$IFn$_invoke$arity$1 ? fexpr__37037.cljs$core$IFn$_invoke$arity$1(G__37038) : fexpr__37037.call(null,G__37038));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37042,handler){
var map__37043 = p__37042;
var map__37043__$1 = cljs.core.__destructure_map(map__37043);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37043__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37043__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__37041_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__37041_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___37065 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___37065)){
var response_type_37066 = temp__5753__auto___37065;
(this$__$1.responseType = cljs.core.name(response_type_37066));
} else {
}

var seq__37044_37067 = cljs.core.seq(headers);
var chunk__37045_37068 = null;
var count__37046_37069 = (0);
var i__37047_37070 = (0);
while(true){
if((i__37047_37070 < count__37046_37069)){
var vec__37055_37075 = chunk__37045_37068.cljs$core$IIndexed$_nth$arity$2(null,i__37047_37070);
var k_37076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055_37075,(0),null);
var v_37077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055_37075,(1),null);
this$__$1.setRequestHeader(k_37076,v_37077);


var G__37078 = seq__37044_37067;
var G__37079 = chunk__37045_37068;
var G__37080 = count__37046_37069;
var G__37081 = (i__37047_37070 + (1));
seq__37044_37067 = G__37078;
chunk__37045_37068 = G__37079;
count__37046_37069 = G__37080;
i__37047_37070 = G__37081;
continue;
} else {
var temp__5753__auto___37083 = cljs.core.seq(seq__37044_37067);
if(temp__5753__auto___37083){
var seq__37044_37084__$1 = temp__5753__auto___37083;
if(cljs.core.chunked_seq_QMARK_(seq__37044_37084__$1)){
var c__4638__auto___37085 = cljs.core.chunk_first(seq__37044_37084__$1);
var G__37086 = cljs.core.chunk_rest(seq__37044_37084__$1);
var G__37087 = c__4638__auto___37085;
var G__37088 = cljs.core.count(c__4638__auto___37085);
var G__37089 = (0);
seq__37044_37067 = G__37086;
chunk__37045_37068 = G__37087;
count__37046_37069 = G__37088;
i__37047_37070 = G__37089;
continue;
} else {
var vec__37061_37090 = cljs.core.first(seq__37044_37084__$1);
var k_37091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37061_37090,(0),null);
var v_37092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37061_37090,(1),null);
this$__$1.setRequestHeader(k_37091,v_37092);


var G__37093 = cljs.core.next(seq__37044_37084__$1);
var G__37094 = null;
var G__37095 = (0);
var G__37096 = (0);
seq__37044_37067 = G__37093;
chunk__37045_37068 = G__37094;
count__37046_37069 = G__37095;
i__37047_37070 = G__37096;
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