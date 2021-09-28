goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35364){
var map__35365 = p__35364;
var map__35365__$1 = cljs.core.__destructure_map(map__35365);
var m = map__35365__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35365__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35366_35531 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35367_35532 = null;
var count__35368_35533 = (0);
var i__35369_35534 = (0);
while(true){
if((i__35369_35534 < count__35368_35533)){
var f_35537 = chunk__35367_35532.cljs$core$IIndexed$_nth$arity$2(null,i__35369_35534);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35537], 0));


var G__35538 = seq__35366_35531;
var G__35539 = chunk__35367_35532;
var G__35540 = count__35368_35533;
var G__35541 = (i__35369_35534 + (1));
seq__35366_35531 = G__35538;
chunk__35367_35532 = G__35539;
count__35368_35533 = G__35540;
i__35369_35534 = G__35541;
continue;
} else {
var temp__5753__auto___35543 = cljs.core.seq(seq__35366_35531);
if(temp__5753__auto___35543){
var seq__35366_35544__$1 = temp__5753__auto___35543;
if(cljs.core.chunked_seq_QMARK_(seq__35366_35544__$1)){
var c__4638__auto___35545 = cljs.core.chunk_first(seq__35366_35544__$1);
var G__35546 = cljs.core.chunk_rest(seq__35366_35544__$1);
var G__35547 = c__4638__auto___35545;
var G__35548 = cljs.core.count(c__4638__auto___35545);
var G__35549 = (0);
seq__35366_35531 = G__35546;
chunk__35367_35532 = G__35547;
count__35368_35533 = G__35548;
i__35369_35534 = G__35549;
continue;
} else {
var f_35550 = cljs.core.first(seq__35366_35544__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35550], 0));


var G__35551 = cljs.core.next(seq__35366_35544__$1);
var G__35552 = null;
var G__35553 = (0);
var G__35554 = (0);
seq__35366_35531 = G__35551;
chunk__35367_35532 = G__35552;
count__35368_35533 = G__35553;
i__35369_35534 = G__35554;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35556 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35556], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35556)))?cljs.core.second(arglists_35556):arglists_35556)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35374_35596 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35375_35597 = null;
var count__35376_35598 = (0);
var i__35377_35599 = (0);
while(true){
if((i__35377_35599 < count__35376_35598)){
var vec__35388_35602 = chunk__35375_35597.cljs$core$IIndexed$_nth$arity$2(null,i__35377_35599);
var name_35603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388_35602,(0),null);
var map__35391_35604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388_35602,(1),null);
var map__35391_35605__$1 = cljs.core.__destructure_map(map__35391_35604);
var doc_35606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35391_35605__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35391_35605__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35603], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35607], 0));

if(cljs.core.truth_(doc_35606)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35606], 0));
} else {
}


var G__35632 = seq__35374_35596;
var G__35633 = chunk__35375_35597;
var G__35634 = count__35376_35598;
var G__35635 = (i__35377_35599 + (1));
seq__35374_35596 = G__35632;
chunk__35375_35597 = G__35633;
count__35376_35598 = G__35634;
i__35377_35599 = G__35635;
continue;
} else {
var temp__5753__auto___35636 = cljs.core.seq(seq__35374_35596);
if(temp__5753__auto___35636){
var seq__35374_35637__$1 = temp__5753__auto___35636;
if(cljs.core.chunked_seq_QMARK_(seq__35374_35637__$1)){
var c__4638__auto___35644 = cljs.core.chunk_first(seq__35374_35637__$1);
var G__35645 = cljs.core.chunk_rest(seq__35374_35637__$1);
var G__35646 = c__4638__auto___35644;
var G__35647 = cljs.core.count(c__4638__auto___35644);
var G__35648 = (0);
seq__35374_35596 = G__35645;
chunk__35375_35597 = G__35646;
count__35376_35598 = G__35647;
i__35377_35599 = G__35648;
continue;
} else {
var vec__35395_35650 = cljs.core.first(seq__35374_35637__$1);
var name_35651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395_35650,(0),null);
var map__35398_35652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395_35650,(1),null);
var map__35398_35653__$1 = cljs.core.__destructure_map(map__35398_35652);
var doc_35654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398_35653__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398_35653__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35651], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35655], 0));

if(cljs.core.truth_(doc_35654)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35654], 0));
} else {
}


var G__35666 = cljs.core.next(seq__35374_35637__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__35374_35596 = G__35666;
chunk__35375_35597 = G__35667;
count__35376_35598 = G__35668;
i__35377_35599 = G__35669;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35402 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35403 = null;
var count__35404 = (0);
var i__35405 = (0);
while(true){
if((i__35405 < count__35404)){
var role = chunk__35403.cljs$core$IIndexed$_nth$arity$2(null,i__35405);
var temp__5753__auto___35682__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35682__$1)){
var spec_35683 = temp__5753__auto___35682__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35683)], 0));
} else {
}


var G__35684 = seq__35402;
var G__35685 = chunk__35403;
var G__35686 = count__35404;
var G__35687 = (i__35405 + (1));
seq__35402 = G__35684;
chunk__35403 = G__35685;
count__35404 = G__35686;
i__35405 = G__35687;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35402);
if(temp__5753__auto____$1){
var seq__35402__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35402__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35402__$1);
var G__35690 = cljs.core.chunk_rest(seq__35402__$1);
var G__35691 = c__4638__auto__;
var G__35692 = cljs.core.count(c__4638__auto__);
var G__35693 = (0);
seq__35402 = G__35690;
chunk__35403 = G__35691;
count__35404 = G__35692;
i__35405 = G__35693;
continue;
} else {
var role = cljs.core.first(seq__35402__$1);
var temp__5753__auto___35702__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35702__$2)){
var spec_35703 = temp__5753__auto___35702__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35703)], 0));
} else {
}


var G__35704 = cljs.core.next(seq__35402__$1);
var G__35705 = null;
var G__35706 = (0);
var G__35707 = (0);
seq__35402 = G__35704;
chunk__35403 = G__35705;
count__35404 = G__35706;
i__35405 = G__35707;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35718 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35719 = cljs.core.ex_cause(t);
via = G__35718;
t = G__35719;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35418 = datafied_throwable;
var map__35418__$1 = cljs.core.__destructure_map(map__35418);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35418__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35419 = cljs.core.last(via);
var map__35419__$1 = cljs.core.__destructure_map(map__35419);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35420 = data;
var map__35420__$1 = cljs.core.__destructure_map(map__35420);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35421 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35421__$1 = cljs.core.__destructure_map(map__35421);
var top_data = map__35421__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35425 = phase;
var G__35425__$1 = (((G__35425 instanceof cljs.core.Keyword))?G__35425.fqn:null);
switch (G__35425__$1) {
case "read-source":
var map__35426 = data;
var map__35426__$1 = cljs.core.__destructure_map(map__35426);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35431 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35431__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35431,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35431);
var G__35431__$2 = (cljs.core.truth_((function (){var fexpr__35432 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35432.cljs$core$IFn$_invoke$arity$1 ? fexpr__35432.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35432.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35431__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35431__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35431__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35431__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35433 = top_data;
var G__35433__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35433,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35433);
var G__35433__$2 = (cljs.core.truth_((function (){var fexpr__35434 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35434.cljs$core$IFn$_invoke$arity$1 ? fexpr__35434.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35434.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35433__$1);
var G__35433__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35433__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35433__$2);
var G__35433__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35433__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35433__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35433__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35433__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35435 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435,(3),null);
var G__35438 = top_data;
var G__35438__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35438,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35438);
var G__35438__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35438__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35438__$1);
var G__35438__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35438__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35438__$2);
var G__35438__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35438__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35438__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35438__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35438__$4;
}

break;
case "execution":
var vec__35439 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35417_SHARP_){
var or__4212__auto__ = (p1__35417_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__35442 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35442.cljs$core$IFn$_invoke$arity$1 ? fexpr__35442.cljs$core$IFn$_invoke$arity$1(p1__35417_SHARP_) : fexpr__35442.call(null,p1__35417_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__35443 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35443__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35443,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35443);
var G__35443__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35443__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35443__$1);
var G__35443__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35443__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35443__$2);
var G__35443__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35443__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35443__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35443__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35443__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35425__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35447){
var map__35453 = p__35447;
var map__35453__$1 = cljs.core.__destructure_map(map__35453);
var triage_data = map__35453__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35469 = phase;
var G__35469__$1 = (((G__35469 instanceof cljs.core.Keyword))?G__35469.fqn:null);
switch (G__35469__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35470 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35472 = loc;
var G__35473 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35475_35731 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35476_35732 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35477_35733 = true;
var _STAR_print_fn_STAR__temp_val__35478_35734 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35477_35733);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35478_35734);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35445_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35445_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35476_35732);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35475_35731);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35470,G__35471,G__35472,G__35473) : format.call(null,G__35470,G__35471,G__35472,G__35473));

break;
case "macroexpansion":
var G__35486 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35487 = cause_type;
var G__35488 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35489 = loc;
var G__35490 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35486,G__35487,G__35488,G__35489,G__35490) : format.call(null,G__35486,G__35487,G__35488,G__35489,G__35490));

break;
case "compile-syntax-check":
var G__35492 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35493 = cause_type;
var G__35494 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35495 = loc;
var G__35496 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35492,G__35493,G__35494,G__35495,G__35496) : format.call(null,G__35492,G__35493,G__35494,G__35495,G__35496));

break;
case "compilation":
var G__35497 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35498 = cause_type;
var G__35499 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35500 = loc;
var G__35501 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35497,G__35498,G__35499,G__35500,G__35501) : format.call(null,G__35497,G__35498,G__35499,G__35500,G__35501));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35503 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35504 = symbol;
var G__35505 = loc;
var G__35506 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35507_35741 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35508_35742 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35509_35743 = true;
var _STAR_print_fn_STAR__temp_val__35510_35744 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35509_35743);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35510_35744);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35446_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35446_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35508_35742);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35507_35741);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35503,G__35504,G__35505,G__35506) : format.call(null,G__35503,G__35504,G__35505,G__35506));
} else {
var G__35513 = "Execution error%s at %s(%s).\n%s\n";
var G__35514 = cause_type;
var G__35515 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35516 = loc;
var G__35517 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35513,G__35514,G__35515,G__35516,G__35517) : format.call(null,G__35513,G__35514,G__35515,G__35516,G__35517));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35469__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
