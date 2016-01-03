/*! jQuery v1.7.1 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
    f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
    {for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*-----------------------------------------------------------------------------------
/* Custom JS
-----------------------------------------------------------------------------------*/
	  
/* ----------------- Start Document ----------------- */

jQuery(document).ready(function() {

/*----------------------------------------------------*/
/*	Main Navigation
/*----------------------------------------------------*/

	/* Menu */
	(function() {

		var $mainNav    = $('#navigation').children('ul');

		$mainNav.on('mouseenter', 'li', function() {
			var $this    = $(this),
				$subMenu = $this.children('ul');
			if( $subMenu.length ) $this.addClass('hover');
			$subMenu.hide().stop(true, true).slideDown('fast');
		}).on('mouseleave', 'li', function() {
			$(this).removeClass('hover').children('ul').stop(true, true).slideUp('fast');
		});
		
	})();
	
	/* Responsive Menu */
	(function() {
		selectnav('nav', {
			label: 'Menu',
			nested: true,
			indent: '-'
		});
				
	})();


/*----------------------------------------------------*/
/*	LayerSlider
/*----------------------------------------------------*/

	$(document).ready(function(){
		$('#layerslider').layerSlider({
			skin                    : 'fullwidth',
			responsive              : true,
			navPrevNext             : true,
			autoPlayVideos          : false,
			animateFirstLayer       : false,
			showBarTimer            : false,
			showCircleTimer         : false,
			navButtons              : false,
			navStartStop            : false,
			hoverPrevNext           : false
		});
	});


/*----------------------------------------------------*/
/*	FlexSlider
/*----------------------------------------------------*/

	$(window).load(function() {
		$('.flexslider').flexslider({
			animation : 'slide'
		});
	});


/*----------------------------------------------------*/
/*	Image Overlay
/*----------------------------------------------------*/

	$(document).ready(function () {
	  $('.picture a').hover(function () {
		$(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 1);
	  },function () {
		$(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 0);
	  });
	});


/*----------------------------------------------------*/
/*	Back To Top Button
/*----------------------------------------------------*/

	jQuery('#scroll-top-top a').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 300); 
		return false; 
	}); 
	
	
/*----------------------------------------------------*/
/*	Accordion
/*----------------------------------------------------*/
	(function() {

		var $container = $('.acc-container'),
			$trigger   = $('.acc-trigger');

		$container.hide();
		$trigger.first().addClass('active').next().show();

		var fullWidth = $container.outerWidth(true);
		$trigger.css('width', fullWidth);
		$container.css('width', fullWidth);
		
		$trigger.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});

		// Resize
		$(window).on('resize', function() {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width() );
			$container.css('width', $container.parent().width() );
		});

	})();
	
/*----------------------------------------------------*/
/*	Alert Boxes
/*----------------------------------------------------*/
jQuery(document).ready(function()
{
	jQuery(document.body).pixusNotifications({
			speed: 300,
			animation: 'fadeAndSlide',
			hideBoxes: false
	});
});

(function()
{
	$.fn.pixusNotifications = function(options)
	{
		var defaults = {
			speed: 200,
			animation: 'fade',
			hideBoxes: false
		};
		
		var options = $.extend({}, defaults, options);
		
		return this.each(function()
		{
			var wrapper = $(this),
				notification = wrapper.find('.notification'),
				content = notification.find('p'),
				title = content.find('strong'),
				closeBtn = $('<a class="close" href="#"></a>');
			
			$(document.body).find('.notification').each(function(i)
			{
				var i = i+1;
				$(this).attr('id', 'notification_'+i);
			});
			
			notification.filter('.closeable').append(closeBtn);
			
			closeButton = notification.find('> .close');
			
			closeButton.click(function()
			{
				hideIt( $(this).parent() );
				return false;
			});			
			
			function hideIt(object)
			{
				switch(options.animation)
				{
					case 'fade': fadeIt(object);     break;
					case 'slide': slideIt(object);     break;
					case 'box': boxAnimIt(object);     break;
					case 'fadeAndSlide': fadeItSlideIt(object);     break;
					default: fadeItSlideIt(object);
				}
			};
			
			function fadeIt(object)
			{	object
				.fadeOut(options.speed);
			}			
			function slideIt(object)
			{	object
				.slideUp(options.speed);
			}			
			function fadeItSlideIt(object)
			{	object
				.fadeTo(options.speed, 0, function() { slideIt(object) } );
			}			
			function boxAnimIt(object)
			{	object
				.hide(options.speed);
			}
			
			if (options.hideBoxes){}
			
			else if (! options.hideBoxes)
			{
				notification.css({'display': 'block', 'visiblity': 'visible'});
			}
			
		});
	};
})();

/*----------------------------------------------------*/
/*	Tabs
/*----------------------------------------------------*/

	(function() {

		var $tabsNav    = $('.tabs-nav'),
			$tabsNavLis = $tabsNav.children('li'),
			$tabContent = $('.tab-content');

		$tabsNav.each(function() {
			var $this = $(this);

			$this.next().children('.tab-content').stop(true,true).hide()
												 .first().show();

			$this.children('li').first().addClass('active').stop(true,true).show();
		});

		$tabsNavLis.on('click', function(e) {
			var $this = $(this);

			$this.siblings().removeClass('active').end()
				 .addClass('active');
			
			$this.parent().next().children('.tab-content').stop(true,true).hide()
														  .siblings( $this.find('a').attr('href') ).fadeIn();

			e.preventDefault();
		});

	})();

	
/*----------------------------------------------------*/
/*	Contact Form
/*----------------------------------------------------*/
(function() {
var animateSpeed=300;
var emailReg = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

	// Validating
	
	function validateName(name) {
		if (name.val()=='*') {name.addClass('validation-error',animateSpeed); return false;}
		else {name.removeClass('validation-error',animateSpeed); return true;}
	}

	function validateEmail(email,regex) {
		if (!regex.test(email.val())) {email.addClass('validation-error',animateSpeed); return false;}
		else {email.removeClass('validation-error',animateSpeed); return true;}
	}
		
	function validateMessage(message) {
		if (message.val()=='') {message.addClass('validation-error',animateSpeed); return false;}
		else {message.removeClass('validation-error',animateSpeed); return true;}
	}
				
	$('#send').click(function() {
	
		var result=true;
		
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var message = $('textarea[name=message]');
				
		// Validate
		if(!validateName(name)) result=false;
		if(!validateEmail(email,emailReg)) result=false;
		if(!validateMessage(message)) result=false;
		
		if(result==false) return false;
				
		// Data
		var data = 'name=' + name.val() + '&email=' + email.val() + '&message='  + encodeURIComponent(message.val());
		
		// Disable fields
		$('.text').attr('disabled','true');
		
		// Loading icon
		$('.loading').show();
		
		// Start jQuery
		$.ajax({
		
			// PHP file that processes the data and send mail
			url: "contact.php",	
			
			// GET method is used
			type: "GET",

			// Pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			// Success
			success: function (html) {				
			
				if (html==1) {	

					// Loading icon
					$('.loading').fadeOut('slow');	
						
					//show the success message
					$('.success-message').slideDown('slow');
											
					// Disable send button
					$('#send').attr('disabled',true);
					
				}
				
				else {
					$('.loading').fadeOut('slow')
					alert('Sorry, unexpected error. Please try again later.');				
				}
			}		
		});
	
		return false;
		
	});
		
	$('input[name=name]').blur(function(){validateName($(this));});
	$('input[name=email]').blur(function(){validateEmail($(this),emailReg); });
	$('textarea[name=message]').blur(function(){validateMessage($(this)); });
	   
})();


/*----------------------------------------------------*/
/*	Isotope Portfolio Filter
/*----------------------------------------------------*/
	$(window).load(function(){
		$('#portfolio-wrapper').isotope({
			  itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
		});
		$('#filters a.selected').trigger("click");
	});
	$('#filters a').click(function(e){
		e.preventDefault();

		var selector = $(this).attr('data-option-value');
		$('#portfolio-wrapper').isotope({ filter: selector });

		$(this).parents('ul').find('a').removeClass('selected');
		$(this).addClass('selected');
	});

	
/*----------------------------------------------------*/
/*	Fancybox
/*----------------------------------------------------*/
(function() {

	$('[rel=image]').fancybox({
		type        : 'image',
		openEffect  : 'fade',
		closeEffect	: 'fade',
		nextEffect  : 'fade',
		prevEffect  : 'fade',
		helpers     : {
			title   : {
				type : 'inside'
			}
		}
	});
	
	$('[rel=image-gallery]').fancybox({
		nextEffect  : 'fade',
		prevEffect  : 'fade',
		helpers     : {
			title   : {
				type : 'inside'
			},
			buttons  : {},
			media    : {}
		}
	});
	
	
})();
	
/* ------------------ End Document ------------------ */
});
/*!
 * SelectNav.js (v. 0.1)
 * Converts your <ul>/<ol> navigation into a dropdown list for small screens
 */


window.selectnav = (function(){
	
"use strict";
			
	var selectnav = function(element,options){
		
		element = document.getElementById(element);

		// return immediately if element doesn't exist	
		if( ! element) 
			return;

		// return immediately if element is not a list
		if( ! islist(element) )	
			return;

		document.documentElement.className += " js";

		// retreive options and set defaults
		var o = options || {},
			
			activeclass = o.activeclass || 'active',
			autoselect = typeof(o.autoselect) === "boolean" ? o.autoselect : true,
			nested = typeof(o.nested) === "boolean" ? o.nested : true,
			indent = o.indent || "→",
			label = o.label || "- Navigation -",
			
			// helper variables
			level = 0,
			selected = " selected ";

		// insert the freshly created dropdown navigation after the existing navigation
		element.insertAdjacentHTML('afterend', parselist(element) );

		var nav = document.getElementById(id());
		
		// autoforward on click
		if (nav.addEventListener) nav.addEventListener('change',goTo);
		if (nav.attachEvent) nav.attachEvent('onchange', goTo);
		
		return nav;
		
		function goTo(e){
			
			// Crossbrowser issues - http://www.quirksmode.org/js/events_properties.html
			var targ;
			if (!e) e = window.event;
			if (e.target) targ = e.target;
			else if (e.srcElement) targ = e.srcElement;
			if (targ.nodeType === 3) // defeat Safari bug
				targ = targ.parentNode;	
		
			if(targ.value) window.location.href = targ.value; 
		}
		
		function islist(list){
			var n = list.nodeName.toLowerCase();
			return (n === 'ul' || n === 'ol');
		}
		
		function id(nextId){
			for(var j=1; document.getElementById('selectnav'+j);j++);
			return (nextId) ? 'selectnav'+j : 'selectnav'+(j-1);
		}

		function parselist(list){

			// go one level down
			level++;
	
			var length = list.children.length,
				html = '',
				prefix = '',
				k = level-1
				;
	
			// return immediately if has no children
			if (!length) return;
		
			if(k) {
				while(k--){
					prefix += indent;
				}
				prefix += " ";
			}
			
			for(var i=0; i < length; i++){	
		
				var link = list.children[i].children[0];
				var text = link.innerText || link.textContent;		
				var isselected = '';
		
				if(activeclass){
					isselected = link.className.search(activeclass) !== -1 || link.parentElement.className.search(activeclass) !== -1 ? selected : '';	
				}
		
				if(autoselect && !isselected){
					isselected = link.href === document.URL ? selected : '';
				}
				
				html += '<option value="' + link.href + '" ' + isselected + '>' + prefix + text +'</option>';
		
				if(nested){
					var subElement = list.children[i].children[1];
					if( subElement && islist(subElement) ){
						html += parselist(subElement);
					}
				}
			}
			
			// adds label
			if(level === 1 && label) html = '<option value="">' + label + '</option>' + html;
		
			// add <select> tag to the top level of the list
			if(level === 1) html = '<select class="selectnav" id="'+id(true)+'">' + html + '</select>';
	
			// go 1 level up
			level--;
	
			return html;
		}

	};
	
	return function (element,options) { 
		selectnav(element,options);
	};



})();

/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */


;(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el),
        vars = $.extend({}, $.flexslider.defaults, options),
        namespace = vars.namespace,
        touch = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
        eventType = (touch) ? "touchend" : "click",
        vertical = vars.direction === "vertical",
        reverse = vars.reverse,
        carousel = (vars.itemWidth > 0),
        fade = vars.animation === "fade",
        asNav = vars.asNavFor !== "",
        methods = {};
    
    // Store a reference to the slider object
    $.data(el, "flexslider", slider);
    
    // Privat slider methods
    methods = {
      init: function() {
        slider.animating = false;
        slider.currentSlide = vars.startAt;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = vars.selector.substr(0,vars.selector.search(' '));
        slider.slides = $(vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(vars.sync).length > 0;
        // SLIDE:
        if (vars.animation === "slide") vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        // TOUCH/USECSS:
        slider.transitions = !vars.video && !fade && vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        // CONTROLSCONTAINER:
        if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
        // MANUAL:
        if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);
        
        // RANDOMIZE:
        if (vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }
        
        slider.doMath();
        
        // ASNAV:
        if (asNav) methods.asNav.setup();
        
        // INIT
        slider.setup("init");
        
        // CONTROLNAV:
        if (vars.controlNav) methods.controlNav.setup();
        
        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.setup();
        
        // KEYBOARD:
        if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
        }
        
        // PAUSEPLAY
        if (vars.pausePlay) methods.pausePlay.setup();
        
        // SLIDSESHOW
        if (vars.slideshow) {
          if (vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay) slider.play();
            });
          }
          // initialize animation
          (vars.initDelay > 0) ? setTimeout(slider.play, vars.initDelay) : slider.play();
        }
        
        // TOUCH
        if (touch && vars.touch) methods.touch();
        
        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && vars.smoothHeight)) $(window).bind("resize focus", methods.resize);
        
        
        // API: start() Callback
        setTimeout(function(){
          vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          slider.slides.click(function(e){
            e.preventDefault();
            var $slide = $(this),
                target = $slide.index();
            if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
              slider.direction = (slider.currentItem < target) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
            }
          });
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item;
          
          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');
          
          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              item = (vars.controlNav === "thumbnails") ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }
          
          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();
          
          methods.controlNav.active();
        
          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              slider.direction = (target > slider.currentSlide) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNavScaffold.delegate('a', "click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();
          
          slider.controlNav.live(eventType, function(event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);
                
            if (!$this.hasClass(namespace + 'active')) {
              (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNav.live("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        set: function() {
          var selector = (vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');
        
          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }
        
          methods.directionNav.update();
        
          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.directionNav.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass);
          } else if (!vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
            } else {
              slider.directionNav.removeClass(disabledClass);
            }
          } else {
            slider.directionNav.removeClass(disabledClass);
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
        
          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();
            if ($(this).hasClass(namespace + 'pause')) {
              slider.manualPause = true;
              slider.manualPlay = false;
              slider.pause();
            } else {
              slider.manualPause = false;
              slider.manualPlay = true;
              slider.play();
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.pausePlay.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false;
              
        el.addEventListener('touchstart', onTouchStart, false);
        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if (e.touches.length === 1) {
            slider.pause();
            // CAROUSEL: 
            cwidth = (vertical) ? slider.h : slider. w;
            startT = Number(new Date());
            // CAROUSEL:
            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                     (carousel && reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                     (carousel && slider.currentSlide === slider.last) ? slider.limit :
                     (carousel) ? ((slider.itemW + vars.itemMargin) * slider.move) * slider.currentSlide : 
                     (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            startX = (vertical) ? e.touches[0].pageY : e.touches[0].pageX;
            startY = (vertical) ? e.touches[0].pageX : e.touches[0].pageY;

            el.addEventListener('touchmove', onTouchMove, false);
            el.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function onTouchMove(e) {
          dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
          scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));
          
          if (!scrolling || Number(new Date()) - startT > 500) {
            e.preventDefault();
            if (!fade && slider.transitions) {
              if (!vars.animationLoop) {
                dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
              }
              slider.setProps(offset + dx, "setTouch");
            }
          }
        }
        
        function onTouchEnd(e) {
          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
            var updateDx = (reverse) ? -dx : dx,
                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
            
            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
              slider.flexAnimate(target, vars.pauseOnAction);
            } else {
              slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
            }
          }
          // finish the touch by undoing the touch session
          el.removeEventListener('touchmove', onTouchMove, false);
          el.removeEventListener('touchend', onTouchEnd, false);
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();
          
          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(vars.sync).data("flexslider"),
            target = slider.animatingTo;
        
        switch (action) {
          case "animate": $obj.flexAnimate(target, vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      }
    }
    
    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;
          
          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }
        
        slider.animating = true;
        slider.animatingTo = target;
        // API: before() animation Callback
        vars.before(slider);
        
        // SLIDESHOW:
        if (pause) slider.pause();
        
        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");
        
        // CONTROLNAV
        if (vars.controlNav) methods.controlNav.active();
        
        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
        
        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;
        
        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.update();
        
        if (target === slider.last) {
          // API: end() of cycle Callback
          vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!vars.animationLoop) slider.pause();
        }
        
        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;
          
          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = (vars.itemWidth > slider.w) ? vars.itemMargin * 2 : vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", vars.animationSpeed);
          if (slider.transitions) {
            if (!vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
          slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
        }
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
      }
    } 
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      vars.after(slider);
    }
    
    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
    }
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.playing = false;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    }
    // SLIDESHOW:
    slider.play = function() {
      slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
      slider.playing = true;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    }
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    }
    slider.getTarget = function(dir) {
      slider.direction = dir; 
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    }
    
    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());
            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }
      
      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    }
    
    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;
            
        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
        }
        slider.newSlides = $(vars.selector, slider);
        
        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE: 
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    }
    
    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = vars.itemMargin,
          minItems = vars.minItems,
          maxItems = vars.maxItems;
      
      slider.w = slider.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? maxItems * slider.itemT : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * minItems))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * maxItems))/maxItems :
                       (vars.itemWidth > slider.w) ? slider.w : vars.itemWidth;
        slider.visible = Math.floor(slider.w/(slider.itemW + slideMargin));
        slider.move = (vars.move > 0 && vars.move < slider.visible ) ? vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (vars.itemWidth > slider.w) ? ((slider.itemW + (slideMargin * 2)) * slider.count) - slider.w - slideMargin : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    }
    
    slider.update = function(pos, action) {
      slider.doMath();
      
      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }
      
      // update controlNav
      if (vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (vars.directionNav) methods.directionNav.update();
      
    }
    
    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);
      
      slider.count += 1;
      slider.last = slider.count - 1;
      
      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }
      
      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");
      
      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();
      
      //FlexSlider: added() Callback
      vars.added(slider);
    }
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
      
      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;
      
      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }
      
      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");
      
      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();
      
      // FlexSlider: removed() Callback
      vars.removed(slider);
    }
    
    //FlexSlider: Initialize
    methods.init();
  }
  
  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "slide",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode  
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    
    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
    
    // Primary Controls
    controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item
    
    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item
    
    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    
    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
                                    
    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
  }


  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};
    
    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  }  

})(jQuery);
function tz_format_twitter(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a target="_blank" href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a target="_blank" href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<li><span>'+status+'</span> <br/><b><a target="_blank" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a></b></li>');
  }
  return statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return 'bir dakikadan daha az';
  } else if(delta < 120) {
    return 'yaklaşık bir dakika önce';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' dakika önce';
  } else if(delta < (120*60)) {
    return 'yaklaşık bir saat önce';
  } else if(delta < (24*60*60)) {
    return 'yaklaşık ' + (parseInt(delta / 3600)).toString() + ' saat önce';
  } else if(delta < (48*60*60)) {
    return '1 gün önce';
  } else {
    return (parseInt(delta / 86400)).toString() + ' gün önce';
  }
}

function tz_format_instagram(instagram) {
    var statusHTML = [];
    for (var i=0; i<instagram.length; i++){
        statusHTML.push('<div class="flickr_badge_image" >');
        statusHTML.push('<a href="' + instagram[i].link + '" target="_blank" >');
        statusHTML.push('<img alt="test" height="75" src="'+ instagram[i].images.thumbnail.url +'" width="75">')
        statusHTML.push('</a>')
        statusHTML.push('</div>')
    }
    return statusHTML.join('');
}
;
/* ===========================================================
 * bootstrap-tooltip.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger != 'manual') {
        eventIn  = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , isHTML: function(text) {
      // html string detection logic adapted from jQuery
      return typeof text != 'string'
        || ( text.charAt(0) === "<"
          && text.charAt( text.length - 1 ) === ">"
          && text.length >= 3
        ) || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(text)
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.isHTML(title) ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).remove()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.remove()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.remove()
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  }

  
}(window.jQuery);

jQuery(document).ready(function() {

    $('.tooltips').tooltip({
      selector: "[rel=tooltip]"
    })

});

/*!
 * jQuery UI Effects 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */

;jQuery.effects || (function($, undefined) {

$.effects = {};



/******************************************************************************/
/****************************** COLOR ANIMATIONS ******************************/
/******************************************************************************/

// override the animation for color styles
$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor',
	'borderRightColor', 'borderTopColor', 'borderColor', 'color', 'outlineColor'],
function(i, attr) {
	$.fx.step[attr] = function(fx) {
		if (!fx.colorInit) {
			fx.start = getColor(fx.elem, attr);
			fx.end = getRGB(fx.end);
			fx.colorInit = true;
		}

		fx.elem.style[attr] = 'rgb(' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0) + ')';
	};
});

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
				return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
				return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
				return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
				return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
				return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Look for rgba(0, 0, 0, 0) == transparent in Safari 3
		if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
				return colors['transparent'];

		// Otherwise, we're most likely dealing with a named color
		return colors[$.trim(color).toLowerCase()];
}

function getColor(elem, attr) {
		var color;

		do {
				color = $.curCSS(elem, attr);

				// Keep going until we find an element that has color, or we hit the body
				if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
						break;

				attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
};

// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/

var colors = {
	aqua:[0,255,255],
	azure:[240,255,255],
	beige:[245,245,220],
	black:[0,0,0],
	blue:[0,0,255],
	brown:[165,42,42],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgrey:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkviolet:[148,0,211],
	fuchsia:[255,0,255],
	gold:[255,215,0],
	green:[0,128,0],
	indigo:[75,0,130],
	khaki:[240,230,140],
	lightblue:[173,216,230],
	lightcyan:[224,255,255],
	lightgreen:[144,238,144],
	lightgrey:[211,211,211],
	lightpink:[255,182,193],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	magenta:[255,0,255],
	maroon:[128,0,0],
	navy:[0,0,128],
	olive:[128,128,0],
	orange:[255,165,0],
	pink:[255,192,203],
	purple:[128,0,128],
	violet:[128,0,128],
	red:[255,0,0],
	silver:[192,192,192],
	white:[255,255,255],
	yellow:[255,255,0],
	transparent: [255,255,255]
};



/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/

var classAnimationActions = ['add', 'remove', 'toggle'],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

function getElementStyles() {
	var style = document.defaultView
			? document.defaultView.getComputedStyle(this, null)
			: this.currentStyle,
		newStyle = {},
		key,
		camelCase;

	// webkit enumerates style porperties
	if (style && style.length && style[0] && style[style[0]]) {
		var len = style.length;
		while (len--) {
			key = style[len];
			if (typeof style[key] == 'string') {
				camelCase = key.replace(/\-(\w)/g, function(all, letter){
					return letter.toUpperCase();
				});
				newStyle[camelCase] = style[key];
			}
		}
	} else {
		for (key in style) {
			if (typeof style[key] === 'string') {
				newStyle[key] = style[key];
			}
		}
	}
	
	return newStyle;
}

function filterStyles(styles) {
	var name, value;
	for (name in styles) {
		value = styles[name];
		if (
			// ignore null and undefined values
			value == null ||
			// ignore functions (when does this occur?)
			$.isFunction(value) ||
			// shorthand styles that need to be expanded
			name in shorthandStyles ||
			// ignore scrollbars (break in IE)
			(/scrollbar/).test(name) ||

			// only colors or values that can be converted to numbers
			(!(/color/i).test(name) && isNaN(parseFloat(value)))
		) {
			delete styles[name];
		}
	}
	
	return styles;
}

function styleDifference(oldStyle, newStyle) {
	var diff = { _: 0 }, // http://dev.jquery.com/ticket/5459
		name;

	for (name in newStyle) {
		if (oldStyle[name] != newStyle[name]) {
			diff[name] = newStyle[name];
		}
	}

	return diff;
}

$.effects.animateClass = function(value, duration, easing, callback) {
	if ($.isFunction(easing)) {
		callback = easing;
		easing = null;
	}

	return this.queue(function() {
		var that = $(this),
			originalStyleAttr = that.attr('style') || ' ',
			originalStyle = filterStyles(getElementStyles.call(this)),
			newStyle,
			className = that.attr('class') || "";

		$.each(classAnimationActions, function(i, action) {
			if (value[action]) {
				that[action + 'Class'](value[action]);
			}
		});
		newStyle = filterStyles(getElementStyles.call(this));
		that.attr('class', className);

		that.animate(styleDifference(originalStyle, newStyle), {
			queue: false,
			duration: duration,
			easing: easing,
			complete: function() {
				$.each(classAnimationActions, function(i, action) {
					if (value[action]) { that[action + 'Class'](value[action]); }
				});
				// work around bug in IE by clearing the cssText before setting it
				if (typeof that.attr('style') == 'object') {
					that.attr('style').cssText = '';
					that.attr('style').cssText = originalStyleAttr;
				} else {
					that.attr('style', originalStyleAttr);
				}
				if (callback) { callback.apply(this, arguments); }
				$.dequeue( this );
			}
		});
	});
};

$.fn.extend({
	_addClass: $.fn.addClass,
	addClass: function(classNames, speed, easing, callback) {
		return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
	},

	_removeClass: $.fn.removeClass,
	removeClass: function(classNames,speed,easing,callback) {
		return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
	},

	_toggleClass: $.fn.toggleClass,
	toggleClass: function(classNames, force, speed, easing, callback) {
		if ( typeof force == "boolean" || force === undefined ) {
			if ( !speed ) {
				// without speed parameter;
				return this._toggleClass(classNames, force);
			} else {
				return $.effects.animateClass.apply(this, [(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);
			}
		} else {
			// without switch parameter;
			return $.effects.animateClass.apply(this, [{ toggle: classNames },force,speed,easing]);
		}
	},

	switchClass: function(remove,add,speed,easing,callback) {
		return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
	}
});
/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

$.extend($.effects, {
	version: "1.8.21",

	// Saves a set of properties in a data storage
	save: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
		}
	},

	setMode: function(el, mode) {
		if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
		return mode;
	},

	getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
		// this should be a little more flexible in the future to handle a string & hash
		var y, x;
		switch (origin[0]) {
			case 'top': y = 0; break;
			case 'middle': y = 0.5; break;
			case 'bottom': y = 1; break;
			default: y = origin[0] / original.height;
		};
		switch (origin[1]) {
			case 'left': x = 0; break;
			case 'center': x = 0.5; break;
			case 'right': x = 1; break;
			default: x = origin[1] / original.width;
		};
		return {x: x, y: y};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function(element) {

		// if the element is already wrapped, return it
		if (element.parent().is('.ui-effects-wrapper')) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				'float': element.css('float')
			},
			wrapper = $('<div></div>')
				.addClass('ui-effects-wrapper')
				.css({
					fontSize: '100%',
					background: 'transparent',
					border: 'none',
					margin: 0,
					padding: 0
				}),
			active = document.activeElement;

		// support: Firefox
		// Firefox incorrectly exposes anonymous content
		// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
		try {
			active.id;
		} catch( e ) {
			active = document.body;
		}

		element.wrap( wrapper );

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}
		
		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually loose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if (element.css('position') == 'static') {
			wrapper.css({ position: 'relative' });
			element.css({ position: 'relative' });
		} else {
			$.extend(props, {
				position: element.css('position'),
				zIndex: element.css('z-index')
			});
			$.each(['top', 'left', 'bottom', 'right'], function(i, pos) {
				props[pos] = element.css(pos);
				if (isNaN(parseInt(props[pos], 10))) {
					props[pos] = 'auto';
				}
			});
			element.css({position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' });
		}

		return wrapper.css(props).show();
	},

	removeWrapper: function(element) {
		var parent,
			active = document.activeElement;
		
		if (element.parent().is('.ui-effects-wrapper')) {
			parent = element.parent().replaceWith(element);
			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
			return parent;
		}
			
		return element;
	},

	setTransition: function(element, list, factor, value) {
		value = value || {};
		$.each(list, function(i, x){
			var unit = element.cssUnit(x);
			if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
		});
		return value;
	}
});


function _normalizeArguments(effect, options, speed, callback) {
	// shift params for method overloading
	if (typeof effect == 'object') {
		callback = options;
		speed = null;
		options = effect;
		effect = options.effect;
	}
	if ($.isFunction(options)) {
		callback = options;
		speed = null;
		options = {};
	}
        if (typeof options == 'number' || $.fx.speeds[options]) {
		callback = speed;
		speed = options;
		options = {};
	}
	if ($.isFunction(speed)) {
		callback = speed;
		speed = null;
	}

	options = options || {};

	speed = speed || options.duration;
	speed = $.fx.off ? 0 : typeof speed == 'number'
		? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;

	callback = callback || options.complete;

	return [effect, options, speed, callback];
}

function standardSpeed( speed ) {
	// valid standard speeds
	if ( !speed || typeof speed === "number" || $.fx.speeds[ speed ] ) {
		return true;
	}
	
	// invalid strings - treat as "normal" speed
	if ( typeof speed === "string" && !$.effects[ speed ] ) {
		return true;
	}
	
	return false;
}

$.fn.extend({
	effect: function(effect, options, speed, callback) {
		var args = _normalizeArguments.apply(this, arguments),
			// TODO: make effects take actual parameters instead of a hash
			args2 = {
				options: args[1],
				duration: args[2],
				callback: args[3]
			},
			mode = args2.options.mode,
			effectMethod = $.effects[effect];
		
		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args2.duration, args2.callback );
			} else {
				return this.each(function() {
					if ( args2.callback ) {
						args2.callback.call( this );
					}
				});
			}
		}
		
		return effectMethod.call(this, args2);
	},

	_show: $.fn.show,
	show: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._show.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'show';
			return this.effect.apply(this, args);
		}
	},

	_hide: $.fn.hide,
	hide: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._hide.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'hide';
			return this.effect.apply(this, args);
		}
	},

	// jQuery core overloads toggle and creates _toggle
	__toggle: $.fn.toggle,
	toggle: function(speed) {
		if ( standardSpeed( speed ) || typeof speed === "boolean" || $.isFunction( speed ) ) {
			return this.__toggle.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'toggle';
			return this.effect.apply(this, args);
		}
	},

	// helper functions
	cssUnit: function(key) {
		var style = this.css(key), val = [];
		$.each( ['em','px','%','pt'], function(i, unit){
			if(style.indexOf(unit) > 0)
				val = [parseFloat(style), unit];
		});
		return val;
	}
});



/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert($.easing.default);
		return $.easing[$.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

})(jQuery);
/*!
 * fancyBox - jQuery Plugin
 * version: 2.0.6 (Tue, 31 Jul 2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */


(function (window, document, $, undefined) {
	"use strict";

	var W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		didUpdate = false,
		isTouch	  = document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(value, dim) {
			value = parseInt(value, 10);

			if (dim && isPercentage(value)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.0.6',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : !isTouch,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'right', // enter
					34 : 'down',  // page down
					39 : 'right', // right arrow
					40 : 'down'   // down arrow
				},
				prev : {
					8  : 'left', // backspace
					33 : 'up',   // page up
					37 : 'left', // left arrow
					38 : 'up'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next: 'right',
				prev: 'left'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + ($.browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<div title="Close" class="fancybox-item fancybox-close"></div>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enabled helpers
			helpers : {
				overlay : {
					closeClick : true,
					speedOut   : 200,
					showEarly  : false,
					css : {
						'background-color' : 'rgba(0,0,0,0.5)'
					}
				},
				title : {
					type : 'float' // 'float', 'inside', 'outside' or 'over'
				}
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.attr('href'),
							title   : element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index || 0);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			// If the first item has been canceled, then clear everything
			if (coming.wrap) {
				coming.wrap.stop(true).trigger('onReset').remove();
			}

			if (!F.current) {
				F.trigger('afterClose');
			}

			F.coming = null;
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (immediately) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isOpen || immediately === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true).removeClass('fancybox-opened');

				if (F.wrap.css('position') === 'fixed') {
					F.wrap.css(F._getPosition( true ));
				}

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					$('body').unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						$('body').bind({
							'afterShow.player onUpdate.player'   : set,
							'onCancel.player beforeClose.player' : stop,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || (index > current.index ? 'right' : 'left');
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var pos;

			if (F.isOpen) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					F.wrap.stop(true, true).animate(pos, 200);

				} else {
					F.wrap.css(pos);
				}
			}
		},

		update: function (e) {
			var anyway = !e || (e && e.type === 'orientationchange'),
				scroll = e && e.type === 'scroll';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			// Touch devices need some help to restore document dimensions
			if (anyway && isTouch) {
				F.wrap.removeAttr('style').addClass('fancybox-tmp');

				F.trigger('onUpdate');
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				didUpdate = null;

				if (!current) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if ((current.autoResize && !scroll) || anyway) {
					F._setDimension();

					F.trigger('onUpdate');
				}

				if ((current.autoCenter && !(scroll && current.canShrink)) || anyway) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

			}, (anyway ? 20 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('keypress.fb');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			// If user will press the escape-button, the request will be canceled
			D.bind('keypress.fb', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();
					F.cancel();
				}
			});

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			// See http://bugs.jquery.com/ticket/6724
			return {
				x: W.scrollLeft(),
				y: W.scrollTop(),
				w: (isTouch && window.innerWidth ? window.innerWidth : W.width()) - F.defaults.scrollbarWidth,
				h: isTouch && window.innerHeight ? window.innerHeight : W.height()
			};
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			W.bind('resize.fb orientationchange.fb' + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'up' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'down' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (event === 'onCancel' && !F.isOpened) {
				F.isActive = false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event](opts, obj);
					}
				});
			}

			$.event.trigger(event + '.fb');
		},

		isImage: function (str) {
			return isString(str) && str.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj    = F.group[ index ] || null,
				href,
				type,
				margin,
				padding;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width;
				F.coming.height = this.height;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete === undefined || !img.complete) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).bind('load.fb', F.update).data('ready', 1);

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();

				if (previous.wrap.css('position') === 'fixed') {
					previous.wrap.css(F._getPosition( true ));
				}
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set initial dimensions and start position
			F._setDimension();

			current.wrap.removeClass('fancybox-tmp');

			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			current.pos = $.extend({}, current.dim, F._getPosition( true ));

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = margin[1] + margin[3],
				hMargin    = margin[0] + margin[2],
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto');

			wPadding = skin.outerWidth(true)  - skin.width();
			hPadding = skin.outerHeight(true) - skin.height();

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.height();
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = width / ratio;
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = height * ratio;
				}

				if (width < minWidth) {
					width  = minWidth;
					height = width / ratio;
				}

				if (height < minHeight) {
					height = minHeight;
					width  = height * ratio;
				}

			} else {
				width  = Math.max(minWidth,  Math.min(width,  maxWidth));
				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);

				inner.width( getScalar( width ) ).height( getScalar( height ) );

				wrap.width( getScalar( width + wPadding ) );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = height * ratio;

						if (width < minWidth) {
							width  = minWidth;
							height = width / ratio;
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = width / ratio;
						}

						inner.width( getScalar( width ) ).height( getScalar( height ) );

						wrap.width( getScalar( width + wPadding ) );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( getScalar( width ) ).height( getScalar( height ) );

			wrap.width( getScalar( width + wPadding ) );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (current.locked !== true) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.addClass('fancybox-opened').css('overflow', 'visible');

			F.reposition();

			// Assign a click event
			if (current.closeClick || current.nextClick) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', F.close);
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			current.wrap.focus();

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function () {
			var current = F.current;

			$('.fancybox-wrap').stop(true).trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', current);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (current.locked === true) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'up' || direction === 'left') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.nextSpeed,
				easing   : current.nextEasing,
				complete : function() {
					setTimeout(F._afterZoomIn, 10);
				}
			});
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'down' || direction === 'right' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		overlay: null,

		update: function () {
			var width, scrollWidth, offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width('100%').height('100%');

			if ($.browser.msie || isTouch) {
				scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				width = scrollWidth < offsetWidth ? W.width() : scrollWidth;

			} else {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady: function (opts, obj) {
			$('.fancybox-overlay').stop(true, true);

			if (!this.overlay) {
				$.extend(this, {
					overlay : $('<div class="fancybox-overlay"></div>').appendTo( obj.parent ),
					margin  : $('body').css('margin-right'),
					el : document.all && !document.querySelector ? $('html') : $('body')
				});
			}

			if (obj.fixed && !isTouch) {
				this.overlay.addClass('fancybox-overlay-fixed');

				if (obj.autoCenter) {
					this.overlay.append( obj.wrap );

					obj.locked = true;
				}
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var overlay = this.overlay.unbind('.fb').width('auto').height('auto').css( opts.css );

			if (opts.closeClick) {
				overlay.bind('click.fb', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						F.close();
					}
				});
			}

			if (obj.fixed && !isTouch) {
				if (obj.locked) {
					this.el.addClass('fancybox-lock');

					if (D.height() > W.height()) {
						$('body').css('margin-right', getScalar( this.margin ) + obj.scrollbarWidth);
					}
				}

			} else {
				this.update();
			}

			overlay.show();
		},

		onUpdate : function(opts, obj) {
			if (!obj.fixed || isTouch) {
				this.update();
			}
		},

		afterClose: function (opts) {
			var that  = this,
				speed = opts.speedOut || 0;

			// Older IE show black background if animating transparent element having filters
			if ($.browser.msie && getScalar($.browser.version) < 9) {
				speed = 0;
			}

			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			if (that.overlay && !F.isActive) {
				that.overlay.fadeOut(speed || 0, function () {
					$('body').css('margin-right', that.margin);

					that.el.removeClass('fancybox-lock');

					that.overlay.remove();

					that.overlay = null;
				});
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		beforeShow: function (opts) {
			var text = F.current.title,
				type = opts.type,
				title,
				target;

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title
						.appendTo('body')
						.width(title.width()) //This helps for some browsers
						.wrapInner('<span class="child"></span>');

						//Increase bottom margin so this title will also fit into viewport
						F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			if (opts.position === 'top') {
				title.prependTo(target);

			} else {
				title.appendTo(target);
			}
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);
		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		return this;
	};

	if (!$.scrollbarWidth) {
		// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
		$.scrollbarWidth = function() {
			var parent, child, width;
			parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
			child  = parent.children();
			width  = child.innerWidth() - child.height( 99 ).innerWidth();
			parent.remove();

			return width;
		};
	}

	// Tests that need a body at doc ready
	D.ready(function() {
		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});
	});

}(window, document, jQuery));

 /*!
 * Buttons helper for fancyBox
 * version: 1.0.3
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 * Options:
 *     tpl - HTML template
 *     position - 'top' or 'bottom'
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.buttons = {
		tpl  : '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',
		list : null,
		buttons: null,

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items

			if (opts.skipSingle && obj.group.length < 2) {
				obj.helpers.buttons = false;
				obj.closeBtn = true;

				return;
			}

			//Increase top margin to give space for buttons
			obj.margin[ opts.position === 'bottom' ? 2 : 0 ] += 30;
		},

		onPlayStart: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
			}
		},

		onPlayEnd: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
			}
		},

		afterShow: function (opts, obj) {
			var buttons = this.buttons;

			if (!buttons) {
				this.list = $(opts.tpl || this.tpl).addClass(opts.position || 'top').appendTo('body');

				buttons = {
					prev   : this.list.find('.btnPrev').click( F.prev ),
					next   : this.list.find('.btnNext').click( F.next ),
					play   : this.list.find('.btnPlay').click( F.play ),
					toggle : this.list.find('.btnToggle').click( F.toggle )
				}
			}

			//Prev
			if (obj.index > 0 || obj.loop) {
				buttons.prev.removeClass('btnDisabled');
			} else {
				buttons.prev.addClass('btnDisabled');
			}

			//Next / Play
			if (obj.loop || obj.index < obj.group.length - 1) {
				buttons.next.removeClass('btnDisabled');
				buttons.play.removeClass('btnDisabled');

			} else {
				buttons.next.addClass('btnDisabled');
				buttons.play.addClass('btnDisabled');
			}

			this.buttons = buttons;

			this.onUpdate(opts, obj);
		},

		onUpdate: function (opts, obj) {
			var toggle;

			if (!this.buttons) {
				return;
			}

			toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

			//Size toggle button
			if (obj.canShrink) {
				toggle.addClass('btnToggleOn');

			} else if (!obj.canExpand) {
				toggle.addClass('btnDisabled');
			}
		},

		beforeClose: function () {
			if (this.list) {
				this.list.remove();
			}

			this.list    = null;
			this.buttons = null;
		}
	};

}(jQuery));
/*! (c) Mat Marquis (@wilto). MIT License. http://wil.to/3a */


(function( $, undefined ) {
	var inst = 0;
	
	$.fn.getPercentage = function() {
		var oPercent = this.attr('style').match(/margin\-left:(.*[0-9])/i) && parseInt(RegExp.$1);
		
		return oPercent;
	};
	
	$.fn.adjRounding = function(slide) {
		var $el = $(this),
			$slides = $el.find( slide ),
			diff = $el.parent().width() - $($slides[0]).width();
		
		if (diff !== 0) { 
			$($slides).css( "position", "relative" );
			
			for (var i = 0; i < $slides.length; i++) {
				$($slides[i]).css( "left", (diff * i) + "px" );
			}
		}

		return this;
	};
	
	$.fn.carousel = function(config) {
		
		// Prevent re-init:
		if( this.data( "carousel-initialized" ) ) { return; }
		
		// Carousel is being initialized:
		this.data( "carousel-initialized", true );

		var defaults = {
			slider			: '.carousel',
			slide			: '.testimonial',
			prevSlide		: null,
			nextSlide		: null,
			slideHed		: null,
			addPagination	: false,
			addNav			: ( config != undefined && ( config.prevSlide || config.nextSlide ) ) ? false : true,
			namespace		: 'carousel',
			speed			: 300
		},
		opt               = $.extend(defaults, config),
		$slidewrap        = this,
		dBody            = (document.body || document.documentElement),
		transitionSupport = function() {
			dBody.setAttribute('style', 'transition:top 1s ease;-webkit-transition:top 1s ease;-moz-transition:top 1s ease;');
			var tSupport = !!(dBody.style.transition || dBody.style.webkitTransition || dBody.style.msTransition || dBody.style.OTransition || dBody.style.MozTransition )
			
			return tSupport;
		},
		carousel = {
			init : function() {				
				inst++;
								
				$slidewrap.each(function(carInt) {
						var $wrap      = $(this),
							$slider    = $wrap.find(opt.slider),
							$slide     = $wrap.find(opt.slide),			
							slidenum   = $slide.length,
							transition = "margin-left " + ( opt.speed / 1000 ) + "s ease",
							tmp        = 'carousel-' + inst + '-' + carInt;

						if( $slide.length <= 1 ) {
							return; /* No sense running all this code if the carousel functionality is unnecessary. */
						}
						
						$wrap
							.css({
								overflow             : "hidden",
								width                : "100%"
							})
							.attr('role' , 'application');
						
						$slider
							.attr( 'id', ( $slider[0].id || 'carousel-' + inst + '-' + carInt ) )
							.css({
								"marginLeft"         : "0px",
								"float"              : "left",
								"width"              : 100 * slidenum + "%",
								"-webkit-transition" : transition,
								"-moz-transition"    : transition,
								"-ms-transition"     : transition,
								"-o-transition"      : transition,
								"transition"         : transition
							})
							.bind( 'carouselmove' , carousel.move )
							.bind( 'nextprev'     , carousel.nextPrev )
							.bind( 'navstate'     , carousel.navState );

						$slide
							.css({
								"float": "left",
								width: (100 / slidenum) + "%"				
							})
							.each(function(i) {
								var $el = $(this);

								$el.attr({
									role : "tabpanel document",
									id   : tmp + '-slide' + i
								});

								if( opt.addPagination ) {
									$el.attr('aria-labelledby', tmp + '-tab' + i);
								}
							});
	
						// Build and insert navigation/pagination, if specified in the options:
						opt.addPagination   && carousel.addPagination();
						opt.addNav 			&& carousel.addNav();
						
						$slider.trigger( "navstate", { current: 0 });
				});
			},
			addNav : function() {
				$slidewrap.each(function(i) {						
					var $oEl = $(this),
						$slider = $oEl.find(opt.slider),
						currentSlider = $slider[0].id,
						navMarkup = [
							'',
							'	<a href="#' + currentSlider + '" class="' + opt.namespace + '-next"></a>',
							'	<a href="#' + currentSlider + '" class="' + opt.namespace + '-prev"></a>',
							''
							].join(''),
						nextprev = {
							nextSlide : '.' + opt.namespace + '-next',
							prevSlide : '.' + opt.namespace + '-prev'
						};

					opt = $.extend(opt, nextprev);
					
					$oEl.prepend(navMarkup);
				});
			},
			addPagination : function() {
				$slidewrap.each(function(i) {
					var $oEl        = $(this),
						$pagination = $('<ol class="' + opt.namespace + '-tabs" role="tablist navigation" />'),
						$slider     = $oEl.find(opt.slider),
						$slides     = $oEl.find(opt.slide)
						slideNum    = $slides.length,
						associated  = 'carousel-' + inst + '-' + i;
						
					while( slideNum-- ) {
						var hed = $( $slides[ slideNum ] ).find( opt.slideHed ).text() || 'Page ' + ( slideNum + 1 ),
							tabMarkup = [
								'<li role="presentation">',
									'<a href="#' + associated + '-slide' + slideNum +'"',
									' aria-controls="' + associated + '-slide' + slideNum +'"',
									' id="' + associated + '-tab' + slideNum + '" role="tab">' + hed + '</a>',
								'</li>'
							].join('');
						
						$pagination.prepend(tabMarkup);
					};

					$pagination
						.appendTo( $oEl )
						.find('li').keydown( function(e) {
							var $el      = $(this),
								$prevTab = $el.prev().find('a'),
								$nextTab = $el.next().find('a');

							switch( e.which ) {
								case 37:
								case 38:		
									$prevTab.length && $prevTab.trigger('click').focus();
									e.preventDefault();
									break;
								case 39: 
								case 40:
									$nextTab.length && $nextTab.trigger('click').focus();
									e.preventDefault();
									break;
							}
						})
						.find('a').click( function(e) {
							var $el = $(this);
							
							if( $el.attr('aria-selected') == 'false' ) { 
								var current = $el.parent().index(),
									move    = -( 100 * ( current ) ),
									$slider = $oEl.find( opt.slider );

								$slider.trigger( 'carouselmove', { moveTo: move });
							}
							e.preventDefault();
						});
				});
			},
			roundDown : function(oVal) {
				var val = parseInt(oVal, 10);

				return Math.ceil( (val - (val % 100 ) ) / 100) * 100;
			},
			navState : function(e, ui) {
				var $el          = $(this),
					$slides      = $el.find(opt.slide),
					ind          = -(ui.current / 100),
					$activeSlide = $($slides[ind]);
								
				$el.attr('aria-activedescendant', $activeSlide[0].id);

				// Update state of active tabpanel:
				$activeSlide
					.addClass( opt.namespace + "-active-slide" )
					.attr( 'aria-hidden', false )
					.siblings()	
						.removeClass( opt.namespace + "-active-slide" )
						.attr( 'aria-hidden', true );
						
				// Update state of next/prev navigation:
				if( ( !!opt.prevSlide || !!opt.nextSlide ) ) {
					var $target = $('[href*="#' + this.id + '"]');
					
					$target.removeClass( opt.namespace + '-disabled' );

					if( ind == 0 ) {
						$target.filter(opt.prevSlide).addClass( opt.namespace + '-disabled' );
					} else if( ind == $slides.length - 1 ) {
						$target.filter(opt.nextSlide).addClass( opt.namespace + '-disabled' );
					}
				}
								
				// Update state of pagination tabs:
				if( !!opt.addPagination ) {
					var tabId = $activeSlide.attr('aria-labelledby'),
						$tab  = $('#' + tabId );
					
					$tab
						.parent()
						.addClass(opt.namespace + '-active-tab')
						.siblings()
						.removeClass(opt.namespace + '-active-tab')
						.find('a')
							.attr({
								'aria-selected' : false,
								'tabindex' : -1
							});
							
					$tab.attr({
						'aria-selected' : true,
						'tabindex' : 0
					});
				}
			},
			move : function(e, ui) {
				var $el = $(this);

				$el
					.trigger(opt.namespace + "-beforemove")
					.trigger("navstate", { current: ui.moveTo });
				
				if( transitionSupport() ) {

					$el
						.adjRounding( opt.slide ) /* Accounts for browser rounding errors. Lookin’ at you, iOS Safari. */
						.css('marginLeft', ui.moveTo + "%")
						.one("transitionend webkitTransitionEnd OTransitionEnd", function() {
							$(this).trigger( opt.namespace + "-aftermove" );
						});
						
				} else {					
					$el
						.adjRounding( opt.slide )
						.animate({ marginLeft: ui.moveTo + "%" }, { duration : opt.speed, queue : false }, function() {
							$(this).trigger( opt.namespace + "-aftermove" );
						});
				}
			},
			nextPrev : function(e, ui) {				
				var $el = $(this),
					left = ( $el ) ? $el.getPercentage() : 0,
					$slide = $el.find(opt.slide),
					constrain = ui.dir === 'prev' ? left != 0 : -left < ($slide.length - 1) * 100,
					$target = $( '[href="#' + this.id + '"]');

				if (!$el.is(":animated") && constrain ) {

					if ( ui.dir === 'prev' ) {
						left = ( left % 100 != 0 ) ? carousel.roundDown(left) : left + 100;
					} else {
						left = ( ( left % 100 ) != 0 ) ? carousel.roundDown(left) - 100 : left - 100;
					}

					$el.trigger('carouselmove', { moveTo: left });

					$target
						.removeClass( opt.namespace + '-disabled')
						.removeAttr('aria-disabled');

					switch( left ) {
						case ( -($slide.length - 1) * 100 ):
							$target.filter(opt.nextSlide)
								.addClass( opt.namespace + '-disabled')
								.attr('aria-disabled', true);
							break;
						case 0:
							$target.filter(opt.prevSlide)
								.addClass( opt.namespace + '-disabled')
								.attr('aria-disabled', true);
							break;
					}
				} else {
					var reset = carousel.roundDown(left);

					$el.trigger('carouselmove', { moveTo: reset });
				}

			}
		};
	
		carousel.init(this);

		$(opt.nextSlide + ',' + opt.prevSlide)
			.bind('click', function(e) {				
				var $el = $(this),
					link = this.hash,
					dir = ( $el.is(opt.prevSlide) ) ? 'prev' : 'next',
					$slider = $(link);

					if ( $el.is('.' + opt.namespace + '-disabled') ) { 
						return false;
					}

					$slider.trigger('nextprev', { dir: dir });
				
				e.preventDefault();
			})
			.bind('keydown', function(e) {
				var $el = $(this),
					link = this.hash;

				switch (e.which) {
					case 37:
					case 38:
						$('#' + link).trigger('nextprev', { dir: 'next' });
						e.preventDefault();
						break;
					case 39:
					case 40:
						$('#' + link).trigger('nextprev', { dir: 'prev' });
						e.preventDefault();
						break;
				}
			});

		var setup = {
			wrap : this,
			slider : opt.slider
		};
		$slidewrap.bind( "dragSnap", setup, function(e, ui){
			var $slider = $(this).find( opt.slider ),
				dir = ( ui.direction === "left" ) ? 'next' : 'prev';
			
			$slider.trigger("nextprev", { dir: dir });	
		});


		$slidewrap.filter('[data-autorotate]').each(function() {
			var auto,
				$el         = $(this),
				speed       = $el.attr('data-autorotate'),
				slidenum    = $el.find(opt.slide).length,
				autoAdvance = function() {
					var $slider  = $el.find(opt.slider),
						active   = -( $(opt.slider).getPercentage() / 100 ) + 1;

					switch( active ) {
						case slidenum: 
							clearInterval(auto);

							auto = setInterval(function() {
								autoAdvance();
								$slider.trigger("nextprev", { dir: 'prev' });	
							}, speed);

							break;
						case 1:
							clearInterval(auto);

							auto = setInterval(function() {
								autoAdvance();								
								$slider.trigger("nextprev", { dir: 'next' });	
							}, speed);

							break;
					}
				};

			auto = setInterval(autoAdvance, speed);

			$el
				.attr('aria-live', 'polite')
				.bind('mouseenter click touchstart', function() {
					clearInterval(auto);
				});
		});

		return this;
	};
})(jQuery);


$.event.special.dragSnap = {
	setup: function(setup) {

		var $el = $(this),
			transitionSwap = function($el, tog) {
				var speed = .3,
					transition = ( tog ) ? "margin-left " + speed + "s ease" : 'none';

				$el.css({
					"-webkit-transition" : transition,
					"-moz-transition"    : transition,
					"-ms-transition"     : transition,
					"-o-transition"      : transition,
					"transition"         : transition
				});
			},
			roundDown = function(left) {
				var left = parseInt(left, 10);
				
				return Math.ceil( (left - (left % 100 ) ) / 100) * 100;
			},
			snapBack = function(e, ui) {
				var $el = ui.target,
					currentPos = ( $el.attr('style') != undefined ) ? $el.getPercentage() : 0,
					left = (ui.left === false) ? roundDown(currentPos) - 100 : roundDown(currentPos),
					dBody = document.body,
					transitionSupport = function() {
						dBody.setAttribute('style', 'transition:top 1s ease;-webkit-transition:top 1s ease;-moz-transition:top 1s ease;');
						var tSupport = !!(dBody.style.transition || dBody.style.webkitTransition || dBody.style.MozTransition )

						return tSupport;
					};

				transitionSwap($el, true);

				if( transitionSupport() ) {
					$el.css('marginLeft', left + "%");
				} else {
					$el.animate({ marginLeft: left + "%" }, opt.speed);
				}
			};

		$el
			.bind("snapback", snapBack)
			.bind("touchstart", function(e) {
				var data = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
					start = {
						time: ( (new Date).getTime() ),
						coords: [ data.pageX, data.pageY ],
						origin: $(e.target).closest( setup.wrap ),
						interacting: false
					},
					stop,
					$tEl = $(e.target).closest( setup.slider ),
					currentPos = ( $tEl.attr('style') != undefined ) ? $tEl.getPercentage() : 0;
				
				transitionSwap($tEl, false);

				function moveHandler(e) {
					var data = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
						stop = {
							time: (new Date()).getTime(),
							coords: [ data.pageX, data.pageY ]
						},
						deltaX = Math.abs( start.coords[0] - data.pageX ),
						deltaY = Math.abs( start.coords[1] - data.pageY );

					if( !start || deltaX < deltaY || deltaX < 15 ) {
						return;
					}

					// prevent scrolling
					if ( deltaX >= 15 ) {
						start.interacting = true;
						$tEl.css({"margin-left": currentPos + ( ( (stop.coords[0] - start.coords[0]) / start.origin.width() ) * 100 ) + '%' });
						e.preventDefault();
					} else {
						return;
					}
				};

				$el
					.bind("gesturestart", function(e) {
						$el
							.unbind("touchmove", moveHandler)
							.unbind("touchend", moveHandler);
					})
					.bind("touchmove", moveHandler)
					.one("touchend", function(e) {
						$el.unbind("touchmove", moveHandler);

						transitionSwap($tEl, true);

					if (start && stop ) {
						var deltaX = Math.abs(start.coords[0] - stop.coords[0]),
							deltaY = Math.abs(start.coords[1] - stop.coords[1]),
							left = start.coords[0] > stop.coords[0],
							jumppoint;

							if( deltaX > 20 && ( deltaX > deltaY ) ) {
								e.preventDefault();
							} else {
								if( start.interacting ) {
									$el.trigger('snapback', { target: $tEl, left: left });
								}
								return;
							}

							jumppoint = start.origin.width() / 4;

							if( -deltaX > jumppoint || deltaX > jumppoint ) {
								start.origin.trigger("dragSnap", {direction: left ? "left" : "right"});
							} else {
								$el.trigger('snapback', { target: $tEl, left: left });
							}
					}
					start = stop = undefined;
				});
		});
	}
};

		$(document).ready(function() {
			$('.testimonials-carousel').carousel({ 
					namespace: "mr-rotato" // Defaults to “carousel”.
				})
		});
/**
 * Isotope v1.5.19
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */

(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[j],r=h("transitionDuration"));var s=b.event,t;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",t&&clearTimeout(t),t=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var u=["width","height"],v=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=u.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&v.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){var c=this,d=function(){c.$allAtoms=c.$allAtoms.not(a),a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this.$filteredAtoms=this.$filteredAtoms.not(a),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),v.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var w=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){w("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){w("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

/*! 
 * modified for LayerSlider
 */




eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(j(e){j r(e){7(e K t.F)q e;k n=["2o","3n","O","29"];k r=e.37(0).33()+e.35(1);7(e K t.F){q e}1c(k i=0;i<n.3l;++i){k s=n[i]+r;7(s K t.F){q s}}}j i(){t.F[n.C]="";t.F[n.C]="16(3m)";q t.F[n.C]!==""}j f(e){7(E e==="1m"){4.1U(e)}q 4}j l(e,t,n){7(t===J){e.11(n)}L 7(t){e.11(t,n)}L{n()}}j c(t){k n=[];e.1g(t,j(t){t=e.2G(t);t=e.H.1H[t]||e.2O[t]||t;t=d(t);7(e.2P(t,n)===-1){n.Y(t)}});q n}j h(t,n,r,i){k s=c(t);7(e.1e[r]){r=e.1e[r]}k o=""+m(n)+" "+r;7(1z(i,10)>0){o+=" "+m(i)}k u=[];e.1g(s,j(e,t){u.Y(t+" "+o)});q u.1y(", ")}j p(t,r){7(!r){e.2H[t]=J}e.H.1H[t]=n.C;e.P[t]={N:j(n){k r=e(n).13("H:C");q r.N(t)},G:j(n,r){k i=e(n).13("H:C");i.1n(t,r);e(n).13({"H:C":i})}}}j d(e){q e.27(/([A-Z])/g,j(e){q"-"+e.1Y()})}j v(e,t){7(E e==="1m"&&!e.2J(/^[\\-0-9\\.]+$/)){q e}L{q""+e+t}}j m(t){k n=t;7(e.1C.1D[n]){n=e.1C.1D[n]}q v(n,"29")}e.H={2W:"0.9.9",2S:J,1H:{3j:"1k",2U:"1k",2T:"1k",2V:"1k",2Z:"1f",2Y:"1f",2X:"1f",2R:"1f"},1N:J,1L:1Q};k t=2Q.2K("2I");k n={};k s=2L.2M.1Y().2N("30")>-1;n.I=r("I");n.26=r("26");n.C=r("C");n.T=r("T");n.1X=i();k o={I:"1S",3h:"3g",3f:"3i",3k:"3e",3c:"34"};k u=n.1S=o[n.I]||D;1c(k a K n){7(n.1V(a)&&E e.1J[a]==="B"){e.1J[a]=n[a]}}t=D;e.1e={1E:"1h","K":"1h-K",1j:"1h-1j","K-1j":"1h-K-1j",36:"w-z(0,1,.5,1)",3b:"w-z(.14, .3a, .38, .19)",2a:"w-z(.2e,.2h,.1M,1)",2f:"w-z(.2d,.1R,.1M,1)",2z:"w-z(.6,.2y,.2x,.2A)",2E:"w-z(.2C,.2v,.1K,1)",2n:"w-z(.2m,.2l,.15,.20)",2k:"w-z(.1T,.1r,.2p,.2t)",2s:"w-z(.19,1,.22,1)",2r:"w-z(1,0,0,1)",2q:"w-z(.14,.2u,.1Z,.2D)",2j:"w-z(.25,.46,.45,.2B)",2w:"w-z(.2F,.1P,.2c,.2b)",2g:"w-z(.2i,.1P,.31,.22)",49:"w-z(.1K,.3S,.44,1)",42:"w-z(.4d,0,.1W,1)",4b:"w-z(.3X,.1r,.3Y,.3Z)",40:"w-z(.23,1,.32,1)",3W:"w-z(.20,0,.3U,1)",3V:"w-z(.47,0,.41,.4c)",4a:"w-z(.39,.43,.48,1)",3T:"w-z(.3Q,.1r,.14,.1T)",3y:"w-z(.6,-.28,.3x,.1R)",3z:"w-z(.1W, .3A,.32,1.3o)",3w:"w-z(.1Z,-.14,.3v,1.14)"};e.P["H:C"]={N:j(t){q e(t).21("C")||24 f},G:j(t,r){k i=r;7(!(i 3q f)){i=24 f(i)}7(n.C==="3p"&&!s){t.F[n.C]=i.1x(J)}L{t.F[n.C]=i.1x()}e(t).21("C",i)}};e.P.C={G:e.P["H:C"].G};7(e.1I.3r<"1.8"){e.P.T={N:j(e){q e.F[n.T]},G:j(e,t){e.F[n.T]=t}};e.P.I={N:j(e){q e.F[n.I]},G:j(e,t){e.F[n.I]=t}}}p("S");p("1u");p("U");p("R");p("1p");p("1d");p("16");p("1v");p("18");p("1t");p("1s");p("x",J);p("y",J);f.1l={1n:j(e,t){k n=E t==="1m"?t.1w(","):t.3s===1O?t:[t];n.3u(e);f.1l.G.Q(4,n)},G:j(e){k t=1O.1l.3R.Q(3t,[1]);7(4.1o[e]){4.1o[e].Q(4,t)}L{4[e]=t.1y(",")}},N:j(e){7(4.1q[e]){q 4.1q[e].Q(4)}L{q 4[e]||0}},1o:{1p:j(e){4.1p=v(e,"V")},1d:j(e){4.1d=v(e,"V")},16:j(e){4.16=v(e,"V")},S:j(e,t){7(t===B){t=e}4.S=e+","+t},1u:j(e,t,n){7(t===B){t=e}7(n===B){n=e}4.1u=e+","+t+","+n},1t:j(e){4.1t=v(e,"V")},1s:j(e){4.1s=v(e,"V")},18:j(e){4.18=v(e,"M")},x:j(e){4.G("U",e,D)},y:j(e){4.G("U",D,e)},3C:j(e){4.G("R",e,D,D)},3D:j(e){4.G("R",D,e,D)},3M:j(e){4.G("R",D,D,e)},U:j(e,t){7(4.X===B){4.X=0}7(4.W===B){4.W=0}7(e!==D&&e!==B){4.X=v(e,"M")}7(t!==D&&t!==B){4.W=v(t,"M")}4.U=4.X+","+4.W},R:j(e,t,n){7(4.1i===B){4.1i=0}7(4.1b===B){4.1b=0}7(4.17===B){4.17=0}7(e!==D&&e!==B){4.1i=v(e,"M")}7(t!==D&&t!==B){4.1b=v(t,"M")}7(n!==D&&n!==B){4.17=v(n,"M")}4.R=4.1i+","+4.1b+","+4.17}},1q:{x:j(){q 4.X||0},y:j(){q 4.W||0},S:j(){k e=(4.S||"1,1,1").1w(",");7(e[0]){e[0]=1a(e[0])}7(e[1]){e[1]=1a(e[1])}7(e[2]){e[2]=1a(e[2])}q e[0]===e[1]===e[2]?e[0]:e},1v:j(){k e=(4.1v||"0,0,0,3L").1w(",");1c(k t=0;t<=3;++t){7(e[t]){e[t]=1a(e[t])}}7(e[3]){e[3]=v(e[3],"V")}q e}},1U:j(e){k t=4;e.27(/([a-3N-3O-9]+)\\((.*?)\\)/g,j(e,n,r){t.1n(n,r)})},1x:j(e){k t=[];1c(k r K 4){7(4.1V(r)){7(!n.1X&&(r==="1d"||r==="16"||r==="18"||r==="T")){3P}7(r[0]!=="3K"){7(e&&r==="S"){t.Y(r+"3d("+4[r]+",1)")}L 7(e&&r==="U"){t.Y(r+"3d("+4[r]+",0)")}L{t.Y(r+"("+4[r]+")")}}}}q t.1y(" ")}};e.1I.I=e.1I.H=j(t,r,i,s){k o=4;k a=0;k f=J;7(E r==="j"){s=r;r=B}7(E i==="j"){s=i;i=B}7(E t.1F!=="B"){i=t.1F;12 t.1F}7(E t.1A!=="B"){r=t.1A;12 t.1A}7(E t.1G!=="B"){s=t.1G;12 t.1G}7(E t.11!=="B"){f=t.11;12 t.11}7(E t.1B!=="B"){a=t.1B;12 t.1B}7(E r==="B"){r=e.1C.1D.1E}7(E i==="B"){i=e.1e.1E}r=m(r);k c=h(t,r,i,a);k p=e.H.1N&&n.I;k d=p?1z(r,10)+1z(a,10):0;7(d===0){k v=j(e){o.13(t);7(s){s.Q(o)}7(e){e()}};l(o,f,v);q o}k g={};k y=j(r){k i=1Q;k a=j(){7(i){o.3J(u,a)}7(d>0){o.1g(j(){4.F[n.I]=g[4]||D})}7(E s==="j"){s.Q(o)}7(E r==="j"){r()}};7(d>0&&u&&e.H.1L){i=J;o.3F(u,a)}L{3E.3G(a,d)}o.1g(j(){7(d>0){4.F[n.I]=c}e(4).13(t)})};k b=j(e){4.3H;y(e)};l(o,f,b);q 4};e.H.3I=h})(3B)',62,262,'||||this|||if||||||||||||function|var||||||return||||||cubic|||bezier||undefined|transform|null|typeof|style|set|transit|transition|true|in|else|px|get||cssHooks|apply|translate3d|scale|transformOrigin|translate|deg|_translateY|_translateX|push|||queue|delete|css|55||rotateY|_translate3dZ|perspective||parseFloat|_translate3dY|for|rotateX|cssEase|padding|each|ease|_translate3dX|out|margin|prototype|string|setFromString|setter|rotate|getter|05|skewY|skewX|scale3d|rotate3d|split|toString|join|parseInt|duration|delay|fx|speeds|_default|easing|complete|propertyMap|fn|support|165|useTransitionEnd|355|enabled|Array|03|false|045|transitionEnd|95|parse|hasOwnProperty|175|transform3d|toLowerCase|68|86|data|||new||transitionDelay|replace||ms|easeOutCubic|955|515|645|215|easeInOutCubic|easeInQuart|61|895|easeOutQuad|easeInExpo|135|785|easeInOutCirc|Moz|795|easeInQuad|easeInOutExpo|easeOutExpo|035|085|82|easeInOutQuad|98|04|easeInCirc|335|94|075|53|easeOutCirc|455|camelCase|cssNumber|div|match|createElement|navigator|userAgent|indexOf|cssProps|inArray|document|paddingTop|modifiedForLayerSlider|marginBottom|marginRight|marginTop|version|paddingBottom|paddingRight|paddingLeft|chrome|685||toUpperCase|MSTransitionEnd|substr|snap|charAt|675||055|easeInCubic|msTransition||webkitTransitionEnd|OTransition|transitionend|MozTransition|oTransitionEnd|marginLeft|WebkitTransition|length|90deg|Webkit|275|WebkitTransform|instanceof|jquery|constructor|arguments|unshift|265|easeInOutBack|735|easeInBack|easeOutBack|885|jQuery|t3dx|t3dy|window|bind|setTimeout|offsetWidth|getTransitionValue|unbind|_|0deg|t3dz|zA|Z0|continue|445|slice|84|easeInOutSine|07|easeInSine|easeInOutQuint|755|855|06|easeOutQuint|745|easeInOutQuart|575|||||565|easeOutQuart|easeOutSine|easeInQuint|715|77'.split('|')))
;

/*
	* 2D & 3D Transitions for LayerSlider
	*
	* (c) 2011-2013 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* Licenses: 			http://codecanyon.net/licenses/
*/




eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('23 26={1W:[{i:"13 M B",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"1e",b:F,h:"u"}},{i:"13 M u",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"1e",b:F,h:"B"}},{i:"13 M N",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"1e",b:F,h:"K"}},{i:"13 M K",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"1e",b:F,h:"N"}},{i:"20",d:1,g:1,f:{e:0,j:"n"},c:{o:"14",a:"1e",b:F,h:"u"}},{i:"Z R n",d:[2,4],g:[4,7],f:{e:1j,j:"n"},c:{o:"14",a:"z",b:F,h:"u"}},{i:"Z R D",d:[2,4],g:[4,7],f:{e:1j,j:"D"},c:{o:"14",a:"z",b:F,h:"u"}},{i:"Z R 1k-n",d:[2,4],g:[4,7],f:{e:1j,j:"1k-n"},c:{o:"14",a:"z",b:F,h:"u"}},{i:"Z R 1k-D",d:[2,4],g:[4,7],f:{e:1j,j:"1k-D"},c:{o:"14",a:"z",b:F,h:"u"}},{i:"Z R (k)",d:[2,4],g:[4,7],f:{e:1j,j:"k"},c:{o:"14",a:"z",b:F,h:"u"}},{i:"1x 1G M B",d:1,g:1r,f:{e:25,j:"D"},c:{o:"14",a:"22",b:T,h:"u"}},{i:"1x 1G M u",d:1,g:1r,f:{e:25,j:"n"},c:{o:"14",a:"v",b:T,h:"u"}},{i:"1x 1G M N",d:1r,g:1,f:{e:25,j:"1k-D"},c:{o:"14",a:"v",b:T,h:"u"}},{i:"1x 1G M K",d:1r,g:1,f:{e:25,j:"1k-n"},c:{o:"14",a:"v",b:T,h:"u"}},{i:"1x Y M B",d:1,g:25,f:{e:1j,j:"D"},c:{o:"X",a:"v",b:1g,h:"u"}},{i:"1x Y M u",d:1,g:25,f:{e:1j,j:"n"},c:{o:"X",a:"v",b:1g,h:"B"}},{i:"1x 1U M N",d:25,g:1,f:{e:1j,j:"1k-D"},c:{o:"X",a:"v",b:1g,h:"K"}},{i:"1x Y M K",d:25,g:1,f:{e:1j,j:"1k-n"},c:{o:"X",a:"v",b:1g,h:"N"}},{i:"13 R m B (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"X",a:"z",b:1l,h:"B"}},{i:"13 R m u (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"X",a:"z",b:1l,h:"u"}},{i:"13 R m N (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"X",a:"z",b:1l,h:"N"}},{i:"13 R m K (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"X",a:"z",b:1l,h:"K"}},{i:"13 k R m k 1P",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"X",a:"z",b:1l,h:"k"}},{i:"13 d m B (n)",d:[7,11],g:1,f:{e:1a,j:"n"},c:{o:"X",a:"v",b:p,h:"B"}},{i:"13 d m B (D)",d:[7,11],g:1,f:{e:1a,j:"D"},c:{o:"X",a:"v",b:p,h:"B"}},{i:"13 d m B (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"X",a:"v",b:p,h:"B"}},{i:"13 d m u (n)",d:[7,11],g:1,f:{e:1a,j:"n"},c:{o:"X",a:"v",b:p,h:"u"}},{i:"13 d m u (D)",d:[7,11],g:1,f:{e:1a,j:"D"},c:{o:"X",a:"v",b:p,h:"u"}},{i:"13 d m u (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"X",a:"v",b:p,h:"u"}},{i:"13 d M K m N (n)",d:[7,11],g:1,f:{e:1a,j:"n"},c:{o:"X",a:"v",b:p,h:"N"}},{i:"13 d M K m N (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"X",a:"v",b:p,h:"N"}},{i:"13 d M N m K (D)",d:[7,11],g:1,f:{e:1a,j:"D"},c:{o:"X",a:"v",b:p,h:"K"}},{i:"13 d M N m K (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"X",a:"v",b:p,h:"K"}},{i:"13 O m N (n)",d:1,g:[12,16],f:{e:q,j:"n"},c:{o:"X",a:"v",b:p,h:"N"}},{i:"13 O m N (D)",d:1,g:[12,16],f:{e:q,j:"D"},c:{o:"X",a:"v",b:p,h:"N"}},{i:"13 O m N (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"X",a:"v",b:p,h:"N"}},{i:"13 O m K (n)",d:1,g:[12,16],f:{e:q,j:"n"},c:{o:"X",a:"v",b:p,h:"K"}},{i:"13 O m K (D)",d:1,g:[12,16],f:{e:q,j:"D"},c:{o:"X",a:"v",b:p,h:"K"}},{i:"13 O m K (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"X",a:"v",b:p,h:"K"}},{i:"13 O M u m B (n)",d:1,g:[12,16],f:{e:q,j:"n"},c:{o:"X",a:"v",b:p,h:"B"}},{i:"13 O M u m B (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"X",a:"v",b:p,h:"B"}},{i:"13 O M B m u (D)",d:1,g:[12,16],f:{e:q,j:"D"},c:{o:"X",a:"v",b:p,h:"u"}},{i:"13 O M B m u (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"X",a:"v",b:p,h:"u"}},{i:"Z t Y R m B (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"Q",a:"z",b:1l,h:"B"}},{i:"Z t Y R m u (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"Q",a:"z",b:1l,h:"u"}},{i:"Z t Y R m N (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"Q",a:"z",b:1l,h:"N"}},{i:"Z t Y R m K (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"Q",a:"z",b:1l,h:"K"}},{i:"Z t Y k R m k 1P",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"Q",a:"z",b:1l,h:"k"}},{i:"Z t Y R M K-u (n)",d:[2,4],g:[4,7],f:{e:1f,j:"n"},c:{o:"Q",a:"z",b:1l,h:"1Y"}},{i:"Z t Y R M N-B (D)",d:[2,4],g:[4,7],f:{e:1f,j:"D"},c:{o:"Q",a:"z",b:1l,h:"24"}},{i:"Z t Y R M K-B (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"Q",a:"z",b:1l,h:"1T"}},{i:"Z t Y R M N-u (k)",d:[2,4],g:[4,7],f:{e:1f,j:"k"},c:{o:"Q",a:"z",b:1l,h:"1X"}},{i:"Z t Y d m B (n)",d:[7,11],g:1,f:{e:1a,j:"n"},c:{o:"Q",a:"v",b:p,h:"B"}},{i:"Z t Y d m B (D)",d:[7,11],g:1,f:{e:1a,j:"D"},c:{o:"Q",a:"v",b:p,h:"B"}},{i:"Z t Y d m B (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"Q",a:"v",b:p,h:"B"}},{i:"Z t Y d m u (n)",d:[7,11],g:1,f:{e:1a,j:"n"},c:{o:"Q",a:"v",b:p,h:"u"}},{i:"Z t Y d m u (D)",d:[7,11],g:1,f:{e:1a,j:"D"},c:{o:"Q",a:"v",b:p,h:"u"}},{i:"Z t Y d m u (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"Q",a:"v",b:p,h:"u"}},{i:"Z t Y d M K m N (n)",d:[7,11],g:1,f:{e:1a,j:"n"},c:{o:"Q",a:"v",b:p,h:"N"}},{i:"Z t Y d M K m N (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"Q",a:"v",b:p,h:"N"}},{i:"Z t Y d M N m K (D)",d:[7,11],g:1,f:{e:1a,j:"D"},c:{o:"Q",a:"v",b:p,h:"K"}},{i:"Z t Y d M N m K (k)",d:[7,11],g:1,f:{e:1a,j:"k"},c:{o:"Q",a:"v",b:p,h:"K"}},{i:"Z t Y O m N (n)",d:1,g:[12,16],f:{e:q,j:"n"},c:{o:"Q",a:"v",b:p,h:"N"}},{i:"Z t Y O m N (D)",d:1,g:[12,16],f:{e:q,j:"D"},c:{o:"Q",a:"v",b:p,h:"N"}},{i:"Z t Y O m N (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"Q",a:"v",b:p,h:"N"}},{i:"Z t Y O m K (n)",d:1,g:[12,16],f:{e:q,j:"n"},c:{o:"Q",a:"v",b:p,h:"K"}},{i:"Z t Y O m K (D)",d:1,g:[12,16],f:{e:q,j:"D"},c:{o:"Q",a:"v",b:p,h:"K"}},{i:"Z t Y O m K (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"Q",a:"v",b:p,h:"K"}},{i:"Z t Y O M u m B (n)",d:1,g:[12,16],f:{e:q,j:"n"},c:{o:"Q",a:"v",b:p,h:"B"}},{i:"Z t Y O M u m B (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"Q",a:"v",b:p,h:"B"}},{i:"Z t Y O M B m u (D)",d:1,g:[12,16],f:{e:q,j:"D"},c:{o:"Q",a:"v",b:p,h:"u"}},{i:"Z t Y O M B m u (k)",d:1,g:[12,16],f:{e:q,j:"k"},c:{o:"Q",a:"v",b:p,h:"u"}},{i:"1t",d:1,g:1,f:{e:0,j:"n"},c:{o:"Q",a:"1e",b:T,h:"u",1h:.5}},{i:"1t d",d:4,g:1,f:{e:1f,j:"n"},c:{o:"Q",a:"1e",b:T,h:"B",1h:.5}},{i:"1t g",d:1,g:4,f:{e:1f,j:"n"},c:{o:"Q",a:"1e",b:T,h:"B",1h:.5}},{i:"1t R A",d:3,g:4,f:{e:1r,j:"n"},c:{o:"Q",a:"1e",b:T,h:"u",1h:.5,y:w}},{i:"1t R G",d:3,g:4,f:{e:1r,j:"n"},c:{o:"Q",a:"1e",b:T,h:"K",1h:.5,x:-w}},{i:"1t-1H R A",d:3,g:4,f:{e:15,j:"n"},c:{o:"Q",a:"1e",b:T,h:"u",1h:.5,y:w}},{i:"1t-1H R G",d:3,g:4,f:{e:15,j:"n"},c:{o:"Q",a:"1e",b:T,h:"K",1h:.5,x:-w}},{i:"1t 1H d",d:4,g:1,f:{e:1f,j:"n"},c:{o:"Q",a:"1e",b:T,h:"B",1h:.5}},{i:"1t 1H g",d:1,g:4,f:{e:1f,j:"n"},c:{o:"Q",a:"1e",b:T,h:"u",1h:.5}},{i:"1b f M u",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"z",b:T,h:"B",y:w}},{i:"1b f M B",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"z",b:T,h:"u",y:-w}},{i:"1b f M K",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"z",b:T,h:"N",x:-w}},{i:"1b f M N",d:1,g:1,f:{e:0,j:"n"},c:{o:"X",a:"z",b:T,h:"K",x:w}},{i:"1b R M u",d:[3,4],g:[3,4],f:{e:19,j:"n"},c:{o:"14",a:"z",b:T,h:"u",y:w}},{i:"1b R M B",d:[3,4],g:[3,4],f:{e:19,j:"D"},c:{o:"14",a:"z",b:T,h:"u",y:-w}},{i:"1b R M K",d:[3,4],g:[3,4],f:{e:19,j:"n"},c:{o:"14",a:"z",b:T,h:"u",x:-w}},{i:"1b R M N",d:[3,4],g:[3,4],f:{e:19,j:"D"},c:{o:"14",a:"z",b:T,h:"u",x:w}},{i:"1b d M K",d:[6,12],g:1,f:{e:19,j:"n"},c:{o:"14",a:"z",b:T,h:"u",x:w}},{i:"1b d M N",d:[6,12],g:1,f:{e:19,j:"D"},c:{o:"14",a:"z",b:T,h:"u",x:-w}},{i:"1b g M u",d:1,g:[6,12],f:{e:19,j:"n"},c:{o:"14",a:"z",b:T,h:"u",y:-w}},{i:"1b g M B",d:1,g:[6,12],f:{e:19,j:"D"},c:{o:"14",a:"z",b:T,h:"u",y:w}},{i:"1u d M u",d:[3,10],g:1,f:{e:19,j:"n"},c:{o:"14",a:"z",b:T,h:"u",y:w}},{i:"1u d M B",d:[3,10],g:1,f:{e:19,j:"D"},c:{o:"14",a:"z",b:T,h:"u",y:-w}},{i:"1u g M K",d:1,g:[3,10],f:{e:19,j:"n"},c:{o:"14",a:"z",b:T,h:"u",x:-w}},{i:"1u g M N",d:1,g:[3,10],f:{e:19,j:"D"},c:{o:"14",a:"z",b:T,h:"u",x:w}},{i:"1u t 1z f M u",d:1,g:1,f:{e:q,j:"n"},c:{o:"Q",a:"z",b:T,h:"B",1h:.1,1y:-w,y:w}},{i:"1u t 1z f M B",d:1,g:1,f:{e:q,j:"n"},c:{o:"Q",a:"z",b:T,h:"u",1h:.1,1y:w,y:-w}},{i:"1u t 1z R M u",d:[3,4],g:[3,4],f:{e:19,j:"n"},c:{o:"Q",a:"z",b:T,h:"B",1y:-1v}},{i:"1u t 1z R M B",d:[3,4],g:[3,4],f:{e:19,j:"n"},c:{o:"Q",a:"z",b:T,h:"u",1y:-1v}},{i:"1u t 1z R M k",d:[3,4],g:[3,4],f:{e:19,j:"k"},c:{o:"Q",a:"z",b:T,h:"k",1y:-1v}},{i:"E f 1M",d:1,g:1,f:{e:0,j:"n"},c:{o:"14",a:"z",b:T,h:"u",1h:.1}},{i:"E f M 1L",d:1,g:1,f:{e:0,j:"n"},c:{o:"14",a:"z",b:T,h:"u",1h:2}},{i:"E R k",d:[3,4],g:[3,4],f:{e:1r,j:"k"},c:{o:"14",a:"z",b:T,h:"u",1h:.1}},{i:"E R M 1L k",d:[3,4],g:[3,4],f:{e:1r,j:"k"},c:{o:"14",a:"z",b:T,h:"u",1h:2}},{i:"E 1M t 1z R k",d:[3,4],g:[3,4],f:{e:1r,j:"k"},c:{o:"14",a:"z",b:T,h:"u",1h:.1,1y:w}},{i:"E t 1z R M 1L k",d:[3,4],g:[3,4],f:{e:1r,j:"k"},c:{o:"14",a:"z",b:T,h:"u",1h:2,1y:-w}},{i:"1B-Y R 21",d:3,g:4,f:{e:15,j:"n"},c:{o:"X",a:"v",b:1Z,h:"1T"}},{i:"1B-Y d A",d:6,g:1,f:{e:0,j:"n"},c:{o:"Q",a:"z",b:T,h:"u"}},{i:"1B-Y d G",d:6,g:1,f:{e:0,j:"n"},c:{o:"Q",a:"z",b:T,h:"K"}},{i:"1B-Y g A",d:1,g:8,f:{e:0,j:"n"},c:{o:"Q",a:"z",b:T,h:"u"}},{i:"1B-Y g G",d:1,g:8,f:{e:0,j:"n"},c:{o:"Q",a:"z",b:T,h:"K"}}],1V:[{i:"1c f m B (l&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{y:1E},a:"1K",b:F,h:"A"},C:{c:{y:l},a:"z",b:F,h:"A"}},{i:"1c f m u (l&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{y:-1E},a:"1K",b:F,h:"A"},C:{c:{y:-l},a:"z",b:F,h:"A"}},{i:"1c f m N (l&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{x:-1E},a:"1K",b:1w,h:"G"},C:{c:{x:-l},a:"z",b:1w,h:"G"}},{i:"1c f m K (l&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{x:1E},a:"1K",b:1w,h:"G"},C:{c:{x:l},a:"z",b:1w,h:"G"}},{i:"1c R m B (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"n"},s:{c:{y:l},a:"v",b:F,h:"A"}},{i:"1c R m u (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"D"},s:{c:{y:-l},a:"v",b:F,h:"A"}},{i:"1c R m N (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"1k-n"},s:{c:{x:-l},a:"v",b:F,h:"G"}},{i:"1c R m K (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"1k-D"},s:{c:{x:l},a:"v",b:F,h:"G"}},{i:"1D S R k (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"k"},s:{c:{y:l},a:"v",b:1I,h:"A"}},{i:"1C S R k (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"k"},s:{c:{x:l},a:"v",b:1I,h:"G"}},{i:"E t S R m B (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"n"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{i:"E t S R m u (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"D"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{y:-l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{i:"E t S R m N (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"1k-n"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{i:"E t S R m K (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"1k-D"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{x:l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{i:"E t A S R k (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"k"},L:{c:{I:.1A,x:1j},b:1m,a:"18"},s:{c:{y:l},a:"H",b:1I,h:"A"},C:{c:{x:0},b:1g,a:"H"}},{i:"E t G S R k (l&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"k"},L:{c:{I:.1A,y:-15},b:1m,a:"18"},s:{c:{x:l},a:"H",b:1I,h:"G"},C:{c:{y:0},b:1g,a:"H"}},{i:"1c d m B (l&#r;)",d:[5,9],g:1,f:{e:q,j:"n"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{i:"1c d m u (l&#r;)",d:[5,9],g:1,f:{e:q,j:"n"},s:{c:{y:-l},a:"v",b:1d,h:"A"}},{i:"1c d m N (l&#r;)",d:[5,9],g:1,f:{e:q,j:"n"},s:{c:{x:-l},a:"v",b:F,h:"G"}},{i:"1c d m K (l&#r;)",d:[5,9],g:1,f:{e:q,j:"D"},s:{c:{x:l},a:"v",b:F,h:"G"}},{i:"1D S d k (l&#r;)",d:[5,9],g:1,f:{e:q,j:"k"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{i:"1C S d k (l&#r;)",d:[5,9],g:1,f:{e:q,j:"k"},s:{c:{x:-l},a:"v",b:1d,h:"G"}},{i:"1C S d k (1F&#r;)",d:[3,7],g:1,f:{e:1S,j:"k"},s:{c:{x:-1F},a:"v",b:1Q,h:"G"}},{i:"E t S d m B (l&#r;)",d:[5,9],g:1,f:{e:19,j:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:1n,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t S d m u (l&#r;)",d:[5,9],g:1,f:{e:19,j:"D"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-l},a:"H",b:1n,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t S d m N (l&#r;)",d:[5,9],g:1,f:{e:19,j:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"v",b:p,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t S d m K (l&#r;)",d:[5,9],g:1,f:{e:19,j:"D"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"v",b:p,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t A S d k (l&#r;)",d:[5,9],g:1,f:{e:19,j:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:1n,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t G S d k (l&#r;)",d:[5,9],g:1,f:{e:19,j:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:p,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"1c O m B (l&#r;)",d:1,g:[5,9],f:{e:q,j:"n"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{i:"1c O m u (l&#r;)",d:1,g:[5,9],f:{e:q,j:"n"},s:{c:{y:-l},a:"v",b:1d,h:"A"}},{i:"1c O m N (l&#r;)",d:1,g:[5,9],f:{e:q,j:"n"},s:{c:{x:-l},a:"v",b:F,h:"G"}},{i:"1c O m K (l&#r;)",d:1,g:[5,9],f:{e:q,j:"D"},s:{c:{x:l},a:"v",b:F,h:"G"}},{i:"1D S O k (l&#r;)",d:1,g:[5,9],f:{e:q,j:"k"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{i:"1C S O k (l&#r;)",d:1,g:[5,9],f:{e:q,j:"k"},s:{c:{x:-l},a:"v",b:1d,h:"G"}},{i:"1D S O k (1F&#r;)",d:1,g:[4,9],f:{e:1S,j:"k"},s:{c:{y:1F},a:"v",b:1Q,h:"A"}},{i:"E t S O m B (l&#r;)",d:1,g:[7,11],f:{e:19,j:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"v",b:p,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t S O m u (l&#r;)",d:1,g:[7,11],f:{e:19,j:"D"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-l},a:"v",b:p,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t S O m N (l&#r;)",d:1,g:[7,11],f:{e:19,j:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:1n,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t S O m K (l&#r;)",d:1,g:[7,11],f:{e:q,j:"D"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"H",b:1n,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t A S O k (l&#r;)",d:1,g:[7,11],f:{e:q,j:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:p,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t G S O k (l&#r;)",d:1,g:[7,11],f:{e:q,j:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:1n,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"1R 1N 1O t S m B (l&#r;)",d:1,g:[7,11],f:{e:q,j:"n"},L:{c:{I:.P,x:-1j},b:p,a:"z"},s:{c:{x:1j,y:l},a:"v",b:F,h:"A"},C:{c:{x:0,e:W},a:"z",b:p}},{i:"1R 1N 1O t S m u (l&#r;)",d:1,g:[7,11],f:{e:q,j:"D"},L:{c:{I:.P,x:-1j},b:p,a:"z"},s:{c:{x:1j,y:-l},a:"v",b:F,h:"A"},C:{c:{x:0,e:W},a:"z",b:p}},{i:"1b 1s m B (w&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{y:w},a:"v",b:1d,h:"A"}},{i:"1b 1s m u (w&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{y:-w},a:"v",b:1d,h:"A"}},{i:"1b 1s m N (w&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{x:-w},a:"v",b:1d,h:"G"}},{i:"1b 1s m K (w&#r;)",d:1,g:1,f:{e:q,j:"n"},s:{c:{x:w},a:"v",b:1d,h:"G"}},{i:"E t 17 1s m B (w&#r;)",d:1,g:1,f:{e:q,j:"k"},s:{c:{I:.8,x:1j,y:1v},a:"1e",b:1w,h:"A"},C:{c:{x:0,y:w},b:1w,a:"1e"}},{i:"E t 17 1s m u (w&#r;)",d:1,g:1,f:{e:q,j:"k"},s:{c:{I:.8,x:1j,y:-1v},a:"1e",b:1w,h:"A"},C:{c:{x:0,y:-w},b:1w,a:"1e"}},{i:"E t 17 1o m B (w&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"n"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{i:"E t 17 1o m u (w&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"D"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:-w},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{i:"E t 17 1o m N (w&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"1k-n"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{i:"E t 17 1o m K (w&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"1k-D"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:w},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{i:"E t A 17 1o k (w&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"k"},L:{c:{I:.1i,x:-15},b:1p,a:"18"},s:{c:{y:q},a:"H",b:1p,h:"A"},C:{c:{y:w,x:0},b:1p,a:"H"}},{i:"E t G 17 1o k (w&#r;)",d:[2,4],g:[4,7],f:{e:q,j:"k"},L:{c:{I:.1i,y:15},b:1p,a:"18"},s:{c:{x:q},a:"H",b:1p,h:"G"},C:{c:{x:w,y:0},b:1p,a:"H"}},{i:"1b d m B (w&#r;)",d:[5,9],g:1,f:{e:q,j:"n"},s:{c:{y:w},a:"v",b:1d,h:"A"}},{i:"1b d m u (w&#r;)",d:[5,9],g:1,f:{e:q,j:"n"},s:{c:{y:-w},a:"v",b:1d,h:"A"}},{i:"1D 17 d k (w&#r;)",d:[5,9],g:1,f:{e:q,j:"k"},s:{c:{y:w},a:"v",b:1d,h:"A"}},{i:"E t 17 d m B (w&#r;)",d:[5,9],g:1,f:{e:q,j:"n"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W,x:0},a:"J",b:p}},{i:"E t 17 d m u (w&#r;)",d:[5,9],g:1,f:{e:q,j:"D"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:-w},a:"H",b:F,h:"A"},C:{c:{e:W,x:0},a:"J",b:p}},{i:"E t 17 d m N (w&#r;)",d:[5,9],g:1,f:{e:q,j:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t 17 d m K (w&#r;)",d:[5,9],g:1,f:{e:q,j:"D"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t A 17 d k (w&#r;)",d:[5,9],g:1,f:{e:q,j:"k"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W,x:0},a:"J",b:p}},{i:"E t G 17 d k (w&#r;)",d:[5,9],g:1,f:{e:q,j:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t A 17 1J d m B (w&#r;)",d:[7,11],g:1,f:{e:q,j:"n"},s:{c:{I:.P,x:5,y:1v},a:"18",b:F,h:"A"},C:{c:{x:0,y:w},a:"18",b:F}},{i:"E t A 17 1J d m u (w&#r;)",d:[7,11],g:1,f:{e:q,j:"D"},s:{c:{I:.P,x:5,y:-1v},a:"18",b:F,h:"A"},C:{c:{x:0,y:-w},a:"18",b:F}},{i:"1b O m N (w&#r;)",d:1,g:[5,9],f:{e:q,j:"n"},s:{c:{x:-w},a:"v",b:F,h:"G"}},{i:"1b O m K (w&#r;)",d:1,g:[5,9],f:{e:q,j:"D"},s:{c:{x:w},a:"v",b:F,h:"G"}},{i:"1C 17 O k (w&#r;)",d:1,g:[5,9],f:{e:q,j:"k"},s:{c:{x:-w},a:"v",b:F,h:"G"}},{i:"E t 17 O m N (w&#r;)",d:1,g:[7,11],f:{e:q,j:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t 17 O m K (w&#r;)",d:1,g:[7,11],f:{e:q,j:"D"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t 17 O m B (w&#r;)",d:1,g:[7,11],f:{e:q,j:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t 17 O m u (w&#r;)",d:1,g:[7,11],f:{e:q,j:"D"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-w},a:"H",b:F,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t A 17 O k (w&#r;)",d:1,g:[7,11],f:{e:q,j:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W},a:"J",b:p}},{i:"E t G 17 O k (w&#r;)",d:1,g:[7,11],f:{e:q,j:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{i:"E t G 17 1J O m B (w&#r;)",d:1,g:[7,11],f:{e:q,j:"n"},s:{c:{I:.P,x:1v,y:-5},a:"18",b:F,h:"G"},C:{c:{x:w,y:0},a:"18",b:F}},{i:"E t G 17 1J O m u (w&#r;)",d:1,g:[7,11],f:{e:q,j:"D"},s:{c:{I:.P,x:-1v,y:-5},a:"18",b:F,h:"G"},C:{c:{x:-w,y:0},a:"18",b:F}},{i:"1c 1s m B (l&#r;, U V)",d:1,g:1,f:{e:q,j:"n",V:"U"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{i:"1c 1s m u (l&#r;, U V)",d:1,g:1,f:{e:q,j:"n",V:"U"},s:{c:{y:-l},a:"v",b:1d,h:"A"}},{i:"1c 1s m N (l&#r;, U V)",d:1,g:1,f:{e:q,j:"n",V:"U"},s:{c:{x:-l},a:"v",b:1d,h:"G"}},{i:"1c 1s m K (l&#r;, U V)",d:1,g:1,f:{e:q,j:"n",V:"U"},s:{c:{x:l},a:"v",b:1d,h:"G"}},{i:"E t S 1o m B (l&#r;, U V)",d:[2,4],g:[4,7],f:{e:q,j:"n",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{i:"E t S 1o m u (l&#r;, U V)",d:[2,4],g:[4,7],f:{e:q,j:"D",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:-l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{i:"E t S 1o m N (l&#r;, U V)",d:[2,4],g:[4,7],f:{e:q,j:"1k-n",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{i:"E t S 1o m K (l&#r;, U V)",d:[2,4],g:[4,7],f:{e:q,j:"1k-D",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{i:"E t A S 1o k (l&#r;, U V)",d:[2,4],g:[4,7],f:{e:q,j:"k",V:"U"},L:{c:{I:.1i},b:1p,a:"18"},s:{c:{y:l},a:"H",b:1p,h:"A"},C:{b:1p,a:"H"}},{i:"E t G S 1o k (l&#r;, U V)",d:[2,4],g:[4,7],f:{e:q,j:"k",V:"U"},L:{c:{I:.1i},b:1p,a:"18"},s:{c:{x:l},a:"H",b:1p,h:"G"},C:{b:1p,a:"H"}},{i:"E t S d m B (l&#r;, U V)",d:[5,9],g:1,f:{e:1i,j:"n",V:"U"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:l},a:"v",b:1n,h:"A"},C:{c:{e:W,x:0},a:"z",b:1q}},{i:"E t S d m u (l&#r;, U V)",d:[5,9],g:1,f:{e:1i,j:"D",V:"U"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:-l},a:"v",b:1n,h:"A"},C:{c:{e:W,x:0},a:"z",b:1q}},{i:"E t S d m N (l&#r;, U V)",d:[5,9],g:1,f:{e:1i,j:"n",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{c:{e:W},a:"z",b:1q}},{i:"E t S d m K (l&#r;, U V)",d:[5,9],g:1,f:{e:1i,j:"D",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"H",b:F,h:"G"},C:{c:{e:W},a:"z",b:1q}},{i:"E t A S d k (l&#r;, U V)",d:[5,9],g:1,f:{e:1i,j:"k",V:"U"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:l},a:"v",b:1n,h:"A"},C:{c:{e:W,x:0},a:"z",b:1q}},{i:"E t G S d k (l&#r;, U V)",d:[5,9],g:1,f:{e:1i,j:"k",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{c:{e:W},a:"z",b:1q}},{i:"E t S O m N (l&#r;, U V)",d:1,g:[7,11],f:{e:1i,j:"n",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"v",b:1n,h:"G"},C:{c:{e:W},a:"z",b:1q}},{i:"E t S O m K (l&#r;, U V)",d:1,g:[7,11],f:{e:1i,j:"D",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"v",b:1n,h:"G"},C:{c:{e:W},a:"z",b:1q}},{i:"E t S O m B (l&#r;, U V)",d:1,g:[7,11],f:{e:1i,j:"n",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{c:{e:W},a:"z",b:1q}},{i:"E t S O m u (l&#r;, U V)",d:1,g:[7,11],f:{e:1i,j:"D",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-l},a:"H",b:F,h:"A"},C:{c:{e:W},a:"z",b:1q}},{i:"E t A S O k (l&#r;, U V)",d:1,g:[7,11],f:{e:1i,j:"k",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{c:{e:W},a:"z",b:1q}},{i:"E t G S O k (l&#r;, U V)",d:1,g:[7,11],f:{e:1i,j:"k",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"v",b:1n,h:"G"},C:{c:{e:W},a:"z",b:1q}}]}',62,131,'||||||||||easing|duration|transition|rows|delay|tile|cols|direction|name|sequence|random|180|to|forward|type|600|75|176|animation|and|left|easeInOutQuart|90|rotateX|rotateY|easeOutQuart|horizontal|right|after|reverse|Scaling|1e3|vertical|easeInOutBack|scale3d|easeOutBack|top|before|from|bottom|columns|85|mixed|tiles|spinning|750|large|depth|200|slide|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|100|Turning|Spinning|1500|easeInOutQuad|50|350|scale|65|30|col|500|450|1200|cuboids|700|400|35|cuboid|Carousel|Flying|45|800|Smooth|rotate|rotating|95|Mirror|Vertical|Horizontal|91|540|fading|mirror|1300|drunk|easeInQuart|out|in|colums|scaling|directions|2e3|Drunk|150|topright|sliging|t3d|t2d|bottomleft|topleft|850|Crossfading|diagonal|linear|var|bottomright||layerSliderTransitions'.split('|'),0,{}))
;

/*
	* LayerSlider
	*
	* (c) 2011-2013 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* Licenses: 			http://codecanyon.net/licenses/
*/




eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('13 8p(e,t,n){6(26 e=="bB"){11 r=36("#"+e)}18 6(26 e=="8e"){11 r=e}11 i,s;2G(t){1h"7p":i="bC 36 5m";s="7m 7l 7q bA 4q 3c 3l 7x 7y 58 3l 7I bz 8t an 8s 8r 3c 2k 36 6x 4Y 7N a bw bx 4A 3b 5R 6b\'t 2M 3l 6R. <1T>8w 8x 4U 3l 49 6K 8v 2R 8u 14 6R 4A 8y 2k \\"8z 70 8G 2R 3h\\" 8E 3j 2k 8D 8A 8B 2k 8C 7O.</1T><br><br>4v 14 bD\'t 6Y 3l 85, 7E 91 2R bE bJ 7x 4J 4q-by-4q 2R 17 92 4Y 4q 7N 14 5m. 4v 3M bK 9I 2k bI 4J, 7E 8K 7P 2k 4J 8J 2R 6Y 14 1h. 4v 1G 3c 3l 7y 7N 14 85, 7G bH be 3l 7I 4A 3M bF 8K 7P 2k 8J 3c 2k 7I. bv 8M 4R bu 2R 56 bj bk 3c 2k 36 6x.<br><br>4v bi 3O bh 4q 2R 8M 3M, 7E 9g a bc 3j 2k bd 7O 3c 2k bf 4U 9a.";1j;1h"8d":i="5D 36 5m";s="7m 7l 7q 3M 8P 8O an 5D 2q ("+n+\') 3c 2k 36 6x. 3b bl at bm 2q 1.7.0 58 bs. 4v 3M 8P 8O 2k 49 2q 3c 3b, 3M 6b 91 92 2k "36 bt" 4J 4R 2k 5R 4J bq. 4v 3M bp\\\'t bn bo 2R do, 3M 6b 9g bL a bM c8 4R c9 9a c7 c6. c4 c5 a 96 5R 6K 99 (58 a 96 ca 99 3j cb cg) 2R 6Y 14 5m.\';1j;1h"6L":i="36 8F 5m";s=\'7m 7l 7q 4q 3c 3l 7x 7y cc cd 36 8F 4A 8t an 8s 8r 3c 14 6x 4Y 6b bb bR. 8w 8x 4U 3l 49 6K 8v 2R 8u 14 6R 4A 8y 2k "8z 70 8G 2R 3h" 8E 3j 3l 8D 8A 8B 2k 8C 7O.\';1j}r.1q("10-6X");r.3G(\'<p 1l="10-c0">!</p>\');r.3G(\'<p 1l="10-6X-c1">3b: \'+i+"</p>");r.3G(\'<p 1l="10-6X-7k">\'+s+"</p>")}(13(e){e.8q.2K=13(n){11 r="1.7.0";11 i=e.8q.7p;11 s=e(14);11 o=13(e,t){11 n=e.1X(".");11 r=t.1X(".");2t(11 i=0;i<n.1u;++i){6(r.1u==i){1O 1d}6(n[i]==r[i]){bW}18 6(n[i]>r[i]){1O 1d}18{1O 19}}6(n.1u!=r.1u){1O 19}1O 19};6(!o("1.8.0",i)){s.1q("10-8c")}6(!o(r,i)){8p(s,"8d",i)}18{6((26 n).3n("8e|32")){1O 14.1W(13(e){3q t(14,n)})}18{6(n=="12"){11 u=e(14).12("3b").g;6(u){1O u}}18{1O 14.1W(13(t){11 r=e(14).12("3b");6(r){6(!r.g.2W&&!r.g.3A){6(26 n=="3F"){6(n>0&&n<r.g.2D+1&&n!=r.g.27){r.48(n)}}18{2G(n){1h"1N":r.o.5E(r.g);r.1N("6i");1j;1h"1P":r.o.5I(r.g);r.1P("6i");1j;1h"22":6(!r.g.2C){r.o.9l(r.g);r.g.2V=19;r.22()}1j}}}6(n=="4D"){r.d.7t()}6((r.g.2C||!r.g.2C&&r.g.2V)&&n=="1g"){r.o.9m(r.g);r.g.2V=1d;r.g.1H.17(\'2i[1r*="4O.4X"], 2i[1r*="4T.4C"]\').1W(13(){3e(e(14).12("5H"))});r.1g()}6(n=="8g 1g"){r.8Q()}}})}}}};11 t=13(s,o){11 u=14;u.$8f=e(s).1q("10-2f");u.$8f.12("3b",u);u.2M=13(){u.o=e.4H({},t.9s,o);u.g=e.4H({},t.6s);u.g.4i=e(s).3V("10-8c")?1d:19;6(26 8b!="32"){u.t=e.4H({},8b)}6(26 88!="32"){u.ct=e.4H({},88)}6(!u.g.89){u.g.89=19;u.4D();6(e("4j").17(\'8a[7V*="49"]\').1u){u.g.7e=e("4j").17(\'8a[7V*="49"]\').1f("7V").1X("49")[1]}6(e("4j").17(\'7R[1r*="68"]\').1u){6(e("4j").17(\'7R[1r*="68"]\').1f("1r").1w("?")!=-1){u.g.74=e("4j").17(\'7R[1r*="68"]\').1f("1r").1X("?")[1].1X("=")[1]}}u.d.aT("3b aw");u.d.aU(\'<a 2e="#">1N</a> | <a 2e="#">1P</a> | <a 2e="#">22</a> | <a 2e="#">1g</a> | <a 2e="#">8g 1g</a>\');u.d.3x.17("a").1W(13(){e(14).2h(13(t){t.33();e(s).2K(e(14).7k())})});u.d.aT("3b 2q ax");u.d.aU("70 2q: <1T>"+u.g.2q+"</1T>");6(u.g.74){u.d.aL("5R 2q: <1T>"+u.g.74+"</1T>")}6(u.g.7e){u.d.aL("49 2q: <1T>"+u.g.7e+"</1T>")}u.d.aL("36 2q: <1T>"+e().7p+"</1T>");6(e(s).1f("4l")){u.d.aT("3b 2f");u.d.aU("#"+e(s).1f("4l"))}6(!u.o.2F||u.o.2F==""||!u.o.3X||u.o.3X==""){u.d.aT("ao av 2F. ap: ak 2F 4A / 58 3X.");u.4w()}18{u.d.aT("as 2R 2M 7P 2F: "+u.o.2F,19);e(s).1q("10-"+u.o.2F);11 n=u.o.3X+u.o.2F+"/2F.16";7j=e("8h");6(!e("8h").1u){7j=e("3h")}6(e(\'66[2e="\'+n+\'"]\').1u){u.d.aU(\'ag "\'+u.o.2F+\'" 3O ai 3D.\');r=e(\'66[2e="\'+n+\'"]\');6(!u.g.3D){u.g.3D=19;2g(13(){u.4w()},53)}}18{6(2n.8n){2n.8n(n);11 r=e(\'66[2e="\'+n+\'"]\')}18{11 r=e(\'<66 6f="ba" 2e="\'+n+\'" 4g="7k/16" />\').1n(7j)}}r.2M(13(){6(!u.g.3D){u.d.aU("8o.2M(); 7h");u.g.3D=19;2g(13(){u.4w()},53)}});e(2T).2M(13(){6(!u.g.3D){u.d.aU("$(2T).2M(); 7h");u.g.3D=19;2g(13(){u.4w()},53)}});2g(13(){6(!u.g.3D){u.d.aT("b1 aZ: aY 8o.2M(); 58 $(2T).2M(); aX 7h");u.g.3D=19;u.4w()}},3J)}}};u.4w=13(){6(!e("4j").1f("4l")){e("4j").1f("4l","10-6s")}18 6(!e("3h").1f("4l")){e("3h").1f("4l","10-6s")}u.g.1C=13(){6(u.g.4k&&u.g.3W){1O u.g.4k}18{1O e(s).1a()}};u.g.1F=13(){6(u.g.4m&&u.g.3W){1O u.g.4m}18{1O e(s).1c()}};6(e(s).17(".10-1S").1u==1){u.o.6m=1d;u.o.6I=1d;u.o.5S=1d;u.o.6d=1d;u.o.44=0;u.o.6k=1d;u.o.3Z=19;u.o.2b=1;u.o.2U="az"}6(u.o.1a){u.g.81=u.g.2x=""+u.o.1a}18{u.g.81=u.g.2x=e(s)[0].1I.1a}6(u.o.1c){u.g.3K=""+u.o.1c}18{u.g.3K=e(s)[0].1I.1c}6(u.g.2x.1w("%")==-1&&u.g.2x.1w("1z")==-1){u.g.2x+="1z"}6(u.g.3K.1w("%")==-1&&u.g.3K.1w("1z")==-1){u.g.3K+="1z"}6(u.o.9F&&u.g.2x.1w("1z")!=-1&&u.g.3K.1w("1z")!=-1){u.g.3C=19}18{u.g.3C=1d}e(s).17(\'*[1l*="10-s"], *[1l*="10-bg"]\').1W(13(){6(!e(14).2l().3V("10-1S")){e(14).b6(e(14).2l())}});e(s).17(".10-1S").1W(13(){e(14).2Y(\':a9([1l*="10-"])\').1W(13(){e(14).56()})});e(s).17(\'.10-1S, *[1l*="10-s"]\').1W(13(){6(e(14).1f("6f")||e(14).1f("1I")){6(e(14).1f("6f")){11 t=e(14).1f("6f").3k().1X(";")}18{11 t=e(14).1f("1I").3k().1X(";")}2t(x=0;x<t.1u;x++){3i=t[x].1X(":");6(3i[0].1w("3R")!=-1){3i[1]=u.8N(3i[1])}11 n="";6(3i[2]){n=":"+e.52(3i[2])}6(3i[0]!=" "&&3i[0]!=""){e(14).12(e.52(3i[0]),e.52(3i[1])+n)}}}11 r=e(14);r.12("43",r[0].1I.1i);r.12("3Y",r[0].1I.1s);6(e(14).3O("a")&&e(14).2Y().1u>0){r=e(14).2Y()}11 i=r.1a();11 s=r.1c();6(r[0].1I.1a&&r[0].1I.1a.1w("%")!=-1){i=r[0].1I.1a}6(r[0].1I.1c&&r[0].1I.1c.1w("%")!=-1){s=r[0].1I.1c}r.12("2Z",i);r.12("2X",s);r.12("6J",r.16("23-1i"));r.12("6P",r.16("23-1J"));r.12("6U",r.16("23-1s"));r.12("6V",r.16("23-1o"));6(!u.g.1M){11 o=26 3T(r.16("2w"))=="3F"?1v.5o(3T(r.16("2w"))*1Z)/1Z:1;e(14).12("5P",o)}6(r.16("3f-1i-1a").1w("1z")==-1){r.12("5W",r[0].1I.8T)}18{r.12("5W",r.16("3f-1i-1a"))}6(r.16("3f-1J-1a").1w("1z")==-1){r.12("5T",r[0].1I.8U)}18{r.12("5T",r.16("3f-1J-1a"))}6(r.16("3f-1s-1a").1w("1z")==-1){r.12("63",r[0].1I.8V)}18{r.12("63",r.16("3f-1s-1a"))}6(r.16("3f-1o-1a").1w("1z")==-1){r.12("64",r[0].1I.9j)}18{r.12("64",r.16("3f-1o-1a"))}r.12("8S",r.16("8Z-8X"));r.12("8Y",r.16("8W-1c"))});6(2n.7u.8m){2t(11 t=0;t<e(s).17(".10-1S").1u;t++){6(e(s).17(".10-1S").3B(t).12("aS")==2n.7u.8m.1X("#")[1]){u.o.2b=t+1}}}e(s).17(\'*[1l*="10-7o-"]\').1W(13(){11 t=e(14).1f("1l").1X(" ");2t(11 n=0;n<t.1u;n++){6(t[n].1w("10-7o-")!=-1){11 r=1b(t[n].1X("10-7o-")[1]);e(14).16({aG:"aH"}).2h(13(t){t.33();e(s).2K(r)})}}});u.g.2D=e(s).17(".10-1S").1u;6(u.o.65&&u.g.2D>2){u.o.2b=="2p";u.o.6N=1d}18{u.o.65=1d}6(u.o.2b=="2p"){u.o.2b=1v.28(1v.2p()*u.g.2D+1)}u.o.2b=u.o.2b<u.g.2D+1?u.o.2b:1;u.o.2b=u.o.2b<1?1:u.o.2b;u.g.3Q=1;6(u.o.4E){u.g.3Q=0}11 n=2n.7u.2e.1w("aE:")==-1?"":"aD:";e(s).17(\'2i[1r*="4O.4X"]\').1W(13(){e(14).2l().1q("10-62-1S");6(e(14).2l(\'[1l*="10-s"]\')){11 t=e(14);e.8j(n+"//aA.8l.75/aB/8k/aC/"+e(14).1f("1r").1X("8i/")[1].1X("?")[0]+"?v=2&aI=8H&8I=?",13(e){t.12("5Z",1b(e["aJ"]["aP$aQ"]["aO$2r"]["aN"])*3J)});11 r=e("<1e>").1q("10-55").1n(e(14).2l());e("<20>").1n(r).1q("10-3N").1f("1r",n+"//20.8l.75/aK/"+e(14).1f("1r").1X("8i/")[1].1X("?")[0]+"/"+u.o.9u);e("<1e>").1n(r).1q("10-98");e(14).2l().16({1a:e(14).1a(),1c:e(14).1c()}).2h(13(){u.g.2W=19;6(u.g.3r){6(u.o.3Z!=1d){u.g.3r=1d}u.g.2V=19}18{u.g.2V=u.g.2C}6(u.o.3Z!=1d){u.1g()}u.g.5n=19;e(14).17("2i").1f("1r",e(14).17("2i").12("5g"));e(14).17(".10-55").1E(u.g.v.d).31(u.g.v.6M,13(){6(u.o.3Z=="1V"&&u.g.2V==19){11 e=2g(13(){u.22()},t.12("5Z")-u.g.v.d);t.12("5H",e)}u.g.2W=1d;6(u.g.3a==19){u.3w(u.g.1H,13(){u.g.3a=1d})}})});11 i="&";6(e(14).1f("1r").1w("?")==-1){i="?"}e(14).12("5g",e(14).1f("1r")+i+"97=1");e(14).12("2Z",e(14).1f("1a"));e(14).12("2X",e(14).1f("1c"));e(14).1f("1r","")}});e(s).17(\'2i[1r*="4T.4C"]\').1W(13(){e(14).2l().1q("10-62-1S");6(e(14).2l(\'[1l*="10-s"]\')){11 t=e(14);11 r=e("<1e>").1q("10-55").1n(e(14).2l());e.8j(n+"//4C.75/8k/dt/62/"+e(14).1f("1r").1X("62/")[1].1X("?")[0]+".8H?8I=?",13(n){e("<20>").1n(r).1q("10-3N").1f("1r",n[0]["dr"]);t.12("5Z",1b(n[0]["2r"])*3J);e("<1e>").1n(r).1q("10-98")});e(14).2l().16({1a:e(14).1a(),1c:e(14).1c()}).2h(13(){u.g.2W=19;6(u.g.3r){6(u.o.3Z!=1d){u.g.3r=1d}u.g.2V=19}18{u.g.2V=u.g.2C}6(u.o.3Z!=1d){u.1g()}u.g.5n=19;e(14).17("2i").1f("1r",e(14).17("2i").12("5g"));e(14).17(".10-55").1E(u.g.v.d).31(u.g.v.6M,13(){6(u.o.3Z=="1V"&&u.g.2V==19){11 e=2g(13(){u.22()},t.12("5Z")-u.g.v.d);t.12("5H",e)}u.g.2W=1d;6(u.g.3a==19){u.3w(u.g.1H,13(){u.g.3a=1d})}})});11 i="&";6(e(14).1f("1r").1w("?")==-1){i="?"}e(14).12("5g",e(14).1f("1r")+i+"97=1");e(14).12("2Z",e(14).1f("1a"));e(14).12("2X",e(14).1f("1c"));e(14).1f("1r","")}});6(u.o.4E){u.o.2b=u.o.2b-1==0?u.g.2D:u.o.2b-1}u.g.27=u.o.2b;u.g.1H=e(s).17(".10-1S:3B("+(u.g.27-1)+")");e(s).17(".10-1S").dv(\'<1e 1l="10-2a"></1e>\');e("<1e>").1q("10-3t-dw").6a(e(s));6(u.o.9P){u.g.3y=e("<1e>").1q("10-dB-5a").1n(e(s).17(".10-2a"))}6(u.o.9K&&!u.g.1M){u.g.2L=e("<1e>").1q("10-dC-5a").1n(e(s).17(".10-2a"));u.g.2L.3G(e(\'<1e 1l="10-ct-1i"><1e 1l="10-ct-1A"><1e 1l="10-ct-93"><1e 1l="10-ct-94"></1e></1e></1e></1e><1e 1l="10-ct-1J"><1e 1l="10-ct-1A"><1e 1l="10-ct-93"><1e 1l="10-ct-94"></1e></1e></1e></1e><1e 1l="10-ct-dx"></1e>\'))}u.g.30=e("<1e>").16({a1:-1,1x:"1G"}).1q("10-95-2f").1n(e(s));e("<1e>").1q("10-95-dy").1n(u.g.30);6(e(s).16("3g")=="dn"){e(s).16("3g","9b")}e(s).17(".10-2a").16({dm:u.o.9N});6(u.o.7v){e(s).17(".10-2a").16({dc:"5q("+u.o.7v+")"})}6(u.g.3C&&u.g.82()!=19&&u.o.9r&&(26 4d(2n,"9d")!="32"||26 4d(2n,"9e")!="32")){11 r=e("<a>").16("1x","1G").1q("10-5O").2h(13(){u.87()}).1n(e(s).17(".10-2a"));e(s).1K(13(){6(u.g.1M){r.16({1x:"29"})}18{r.1g(19,19).2v(2s)}},13(){6(u.g.1M){r.16({1x:"1G"})}18{r.1g(19,19).31(2s)}});2n.77("dd",13(){6(!2n.5O){u.4Q()}18{}},1d);2n.77("db",13(){6(!2n.da){u.4Q()}18{}},1d);2n.77("d7",13(){6(!2n.d8){u.4Q()}18{}},1d)}6(u.o.6I){e(\'<a 1l="10-1k-1N" 2e="#" />\').2h(13(t){t.33();e(s).2K("1N")}).1n(e(s));e(\'<a 1l="10-1k-1P" 2e="#" />\').2h(13(t){t.33();e(s).2K("1P")}).1n(e(s));6(u.o.9D){e(s).17(".10-1k-1N, .10-1k-1P").16({1x:"1G"});e(s).1K(13(){6(!u.g.7T){6(u.g.1M){e(s).17(".10-1k-1N, .10-1k-1P").16("1x","29")}18{e(s).17(".10-1k-1N, .10-1k-1P").1g(19,19).2v(2s)}}},13(){6(u.g.1M){e(s).17(".10-1k-1N, .10-1k-1P").16("1x","1G")}18{e(s).17(".10-1k-1N, .10-1k-1P").1g(19,19).31(2s)}})}}6(u.o.5S||u.o.6d){11 i=e(\'<1e 1l="10-1o-1k-2I" />\').1n(e(s));u.g.2Q=i;6(u.o.2U=="47"){i.1q("10-9i-4B")}6(u.o.6d&&u.o.2U!="47"){e(\'<4K 1l="10-1o-4b" />\').1n(e(s).17(".10-1o-1k-2I"));6(u.o.2U=="1K"){11 o=e(\'<1e 1l="10-1y-1K"><1e 1l="10-1y-1K-2a"><1e 1l="10-1y-1K-bg"></1e><1e 1l="10-1y-1K-20"><20></1e><4K></4K></1e></1e>\').1n(e(s).17(".10-1o-4b"))}2t(x=1;x<u.g.2D+1;x++){11 a=e(\'<a 2e="#" />\').1n(e(s).17(".10-1o-4b")).2h(13(t){t.33();e(s).2K(e(14).4L()+1)});6(u.o.2U=="1K"){e(s).17(".10-1y-1K, .10-1y-1K-20").16({1a:u.o.73,1c:u.o.5f});11 f=e(s).17(".10-1y-1K");11 l=f.17("20").16({1c:u.o.5f});11 c=e(s).17(".10-1y-1K-2a").16({1Y:"2J",1x:"29"});a.1K(13(){11 t=e(s).17(".10-1S").3B(e(14).4L());6(t.17(".10-6u").1u){11 n=t.17(".10-6u").1f("1r")}18 6(t.17(".10-3N").1u){11 n=t.17(".10-3N").1f("1r")}18 6(t.17(".10-bg").1u){11 n=t.17(".10-bg").1f("1r")}18{11 n=u.o.3X+u.o.2F+"/7U.7S"}e(s).17(".10-1y-1K-20").16({1i:1b(f.16("23-1i")),1s:1b(f.16("23-1s"))});l.2M(13(){6(e(14).1a()==0){l.16({3g:"9b",2S:"0 1V",1i:"1V"})}18{l.16({3g:"d9",2z:-e(14).1a()/2,1i:"50%"})}}).1f("1r",n);f.16({1x:"29"}).1g().24({1i:e(14).3g().1i+(e(14).1a()-f.4I())/2},79,"5U");c.16({1x:"1G",1Y:"2u"}).1g().2v(79)},13(){c.1g().31(79,13(){f.16({1Y:"2J",1x:"29"})})})}}6(u.o.2U=="1K"){o.1n(e(s).17(".10-1o-4b"))}e(s).17(".10-1o-4b a:3B("+(u.o.2b-1)+")").1q("10-1k-1R")}6(u.o.5S){11 h=e(\'<a 1l="10-1k-22" 2e="#" />\').2h(13(t){t.33();e(s).2K("22")}).6a(e(s).17(".10-1o-1k-2I"));11 p=e(\'<a 1l="10-1k-1g" 2e="#" />\').2h(13(t){t.33();e(s).2K("1g")}).1n(e(s).17(".10-1o-1k-2I"))}18 6(u.o.2U!="47"){e(\'<4K 1l="10-1k-9h 10-1k-df" />\').6a(e(s).17(".10-1o-1k-2I"));e(\'<4K 1l="10-1k-9h 10-1k-dj" />\').1n(e(s).17(".10-1o-1k-2I"))}6(u.o.5Y&&u.o.2U!="47"){i.16({1x:"1G"});e(s).1K(13(){6(!u.g.7T){6(u.g.1M){i.16("1x","29")}18{i.1g(19,19).2v(2s)}}},13(){6(u.g.1M){i.16("1x","1G")}18{i.1g(19,19).31(2s)}})}}6(u.o.2U=="47"){u.g.3u=e(\'<1e 1l="10-1y-2I"></1e>\').1n(e(s));11 o=e(\'<1e 1l="10-1y"><1e 1l="10-1y-2a"><1e 1l="10-1y-1L-2f"><1e 1l="10-1y-1L"></1e></1e></1e></1e>\').1n(u.g.3u);u.g.4B=e(s).17(".10-1y-1L-2f");6(!("6n"3j 2T)){u.g.4B.1K(13(){e(14).1q("10-1y-1L-1K")},13(){e(14).2P("10-1y-1L-1K");u.7Q()}).di(13(t){11 n=1b(t.dE-e(14).83().1i)/e(14).1a()*(e(14).1a()-e(14).17(".10-1y-1L").1a());e(14).17(".10-1y-1L").1g().16({2z:n})})}18{u.g.4B.1q("10-dh")}e(s).17(".10-1S").1W(13(){11 t=e(14).4L()+1;6(e(14).17(".10-6u").1u){11 n=e(14).17(".10-6u").1f("1r")}18 6(e(14).17(".10-3N").1u){11 n=e(14).17(".10-3N").1f("1r")}18 6(e(14).17(".10-bg").1u){11 n=e(14).17(".10-bg").1f("1r")}6(n){11 r=e(\'<a 2e="#" 1l="10-3z-\'+t+\'"><20 1r="\'+n+\'"></a>\')}18{11 r=e(\'<a 2e="#" 1l="10-7U 10-3z-\'+t+\'"><20 1r="\'+u.o.3X+u.o.2F+\'/7U.7S"></a>\')}r.1n(e(s).17(".10-1y-1L"));6(!("6n"3j 2T)){r.1K(13(){e(14).2Y().1g().5F(2s,u.o.7d/1Z)},13(){6(!e(14).2Y().3V("10-3z-1R")){e(14).2Y().1g().5F(2s,u.o.7b/1Z)}})}r.2h(13(n){n.33();e(s).2K(t)})});6(h&&p){11 d=u.g.2Q=e(\'<1e 1l="10-1o-1k-2I 10-dD-4B"></1e>\').1n(e(s));h.6y().2h(13(t){t.33();e(s).2K("22")}).1n(d);p.6y().2h(13(t){t.33();e(s).2K("1g")}).1n(d)}6(u.o.5Y){u.g.3u.16("1x","1G");6(d){u.g.2Q=d.16("1x")=="29"?d:e(s).17(".10-9i-4B");u.g.2Q.16("1x","1G")}e(s).1K(13(){e(s).1q("10-1K");6(!u.g.7T){6(u.g.1M){u.g.3u.16("1x","29");6(u.g.2Q){u.g.2Q.16("1x","29")}}18{u.g.3u.1g(19,19).2v(2s);6(u.g.2Q){u.g.2Q.1g(19,19).2v(2s)}}}},13(){e(s).2P("10-1K");6(u.g.1M){u.g.3u.16("1x","1G");6(u.g.2Q){u.g.2Q.16("1x","1G")}}18{u.g.3u.1g(19,19).31(2s);6(u.g.2Q){u.g.2Q.1g(19,19).31(2s)}}})}}u.g.3v=e(\'<1e 1l="10-3v"></1e>\').1n(e(s));6(u.g.3v.16("1x")=="29"&&!u.g.3v.17("20").1u){u.g.6g=13(){u.g.3v.16({1x:"1G",1Y:"2u"}).2v(41,13(){u.g.6g=1d})};u.g.4p=e("<20>").1f("1r",u.o.3X+u.o.2F+"/3v.7S").1n(u.g.3v);u.g.84=26 1b(e(s).16("23-1o"))=="3F"?1b(e(s).16("23-1o")):0}u.6B();6(u.o.9p&&e(s).17(".10-1S").1u>1){e("3h").6l("dM",13(e){6(!u.g.2W&&!u.g.3A){6(e.4Y==37){u.o.5E(u.g);u.1N("6i")}18 6(e.4Y==39){u.o.5I(u.g);u.1P("6i")}}})}6("6n"3j 2T&&e(s).17(".10-1S").1u>1&&u.o.9G){e(s).17(".10-2a").6l("dK",13(e){11 t=e.4o?e.4o:e.9f.4o;6(t.1u==1){u.g.6r=u.g.4S=t[0].9c}});e(s).17(".10-2a").6l("dP",13(e){11 t=e.4o?e.4o:e.9f.4o;6(t.1u==1){u.g.4S=t[0].9c}6(1v.3P(u.g.6r-u.g.4S)>45){e.33()}});e(s).17(".10-2a").6l("cy",13(t){6(1v.3P(u.g.6r-u.g.4S)>45){6(u.g.6r-u.g.4S>0){u.o.5I(u.g);e(s).2K("1P")}18{u.o.5E(u.g);e(s).2K("1N")}}})}6(u.o.9M==19&&e(s).17(".10-1S").1u>1){e(s).17(".10-2a").1K(13(){u.o.9n(u.g);6(u.g.2C){u.g.3r=19;u.1g();6(u.g.3y){u.g.3y.1g()}6(u.g.2L){u.g.2L.17(".10-ct-1A").1g()}u.g.3s=(3q 4s).4z()}},13(){6(u.g.3r==19){u.22();u.g.3r=1d}})}u.7A();6(u.o.1m){u.g.1m=e("<20>").1q("10-cx").1n(e(s)).1f("1I",u.o.9O).16({1Y:"2J",1x:"cB"}).2M(13(){11 t=0;6(!u.g.1m){t=3J}2g(13(){u.g.1m.12("2Z",u.g.1m.1a());u.g.1m.12("2X",u.g.1m.1c());6(u.g.1m.16("1i")!="1V"){u.g.1m.12("43",u.g.1m[0].1I.1i)}6(u.g.1m.16("1J")!="1V"){u.g.1m.12("4M",u.g.1m[0].1I.1J)}6(u.g.1m.16("1s")!="1V"){u.g.1m.12("3Y",u.g.1m[0].1I.1s)}6(u.g.1m.16("1o")!="1V"){u.g.1m.12("59",u.g.1m[0].1I.1o)}6(u.o.7M!=1d){e("<a>").1n(e(s)).1f("2e",u.o.7M).1f("cC",u.o.9C).16({cG:"1G",d6:"1G"}).3G(u.g.1m)}u.g.1m.16({1x:"1G",1Y:"2u"});u.7F()},t)}).1f("1r",u.o.1m)}e(2T).3a(13(){u.g.3a=19;6(!u.g.2W){u.3w(u.g.1H,13(){6(u.g.2E){u.g.2E.5N()}u.g.3a=1d});6(u.g.1m){u.7F()}}});u.g.8L=19;6(u.o.4E==19){6(u.o.6m){u.g.2C=19;e(s).17(".10-1k-22").1q("10-1k-22-1R")}18{e(s).17(".10-1k-1g").1q("10-1k-1g-1R")}u.1P()}18{u.5l(u.g.1H,13(){u.g.1H.2v(3J,13(){u.g.3A=1d;e(14).1q("10-1R");6(u.o.7X){e(14).1E(e(14).12("4N")+25).cF(13(){e(14).17(".10-3N").2h();e(14).6A()})}u.g.1H.17(\' > *[1l*="10-s"]\').1W(13(){6(e(14).12("5x")>0){11 t=e(14);t.12("5z",2g(13(){u.7Z(t)},t.12("5x")))}})});u.7W(u.g.27);6(u.o.6m){u.g.3A=1d;u.22()}18{e(s).17(".10-1k-1g").1q("10-1k-1g-1R")}})}u.o.9o(e(s))};u.87=13(){6(!u.g.2W&&!u.g.3A){6(4d(2n,"9d")||4d(2n,"9e")){4d(2n,"cD");u.4Q()}18{u.g.4k=u.g.1C();u.g.4m=u.g.1F();u.g.5r=u.g.1B;4d(e(s)[0],"cw");e(s).1q("10-2f-5O")}}};u.4Q=13(){u.g.3W=19;e(s).2P("10-2f-5O")};u.22=13(){6(u.g.2C){6(u.g.2c=="1N"&&u.o.6N){u.1N()}18{u.1P()}}18{u.g.2C=19;6(!u.g.2W&&!u.g.3A){u.5a()}}e(s).17(".10-1k-22").1q("10-1k-22-1R");e(s).17(".10-1k-1g").2P("10-1k-1g-1R")};u.5a=13(){11 t=e(s).17(".10-1R").12("5A")?1b(e(s).17(".10-1R").12("5A")):u.o.7H;6(!u.o.4E&&!e(s).17(".10-1R").12("5A")){11 n=e(s).17(".10-1S:3B("+(u.o.2b-1)+")").12("5A");t=n?n:u.o.7H}3e(u.g.42);6(u.g.3s){6(!u.g.3S){u.g.3S=(3q 4s).4z()}6(u.g.3S>u.g.3s){u.g.3s=(3q 4s).4z()}6(!u.g.34){u.g.34=t}u.g.34-=u.g.3s-u.g.3S;u.g.3s=1d;u.g.3S=(3q 4s).4z()}18{u.g.34=t;u.g.3S=(3q 4s).4z()}u.g.42=2T.2g(13(){u.g.3S=u.g.3s=u.g.34=1d;u.22()},u.g.34);6(u.g.3y){u.g.3y.24({1a:u.g.1C()},u.g.34,"5C",13(){e(14).16({1a:0})})}6(u.g.2L){11 r=u.g.2L.17(".10-ct-1J .10-ct-1A");11 i=u.g.2L.17(".10-ct-1i .10-ct-1A");6(u.g.2L.16("1x")=="1G"){r.16({1A:0});i.16({1A:0});u.g.2L.2v(cn)}11 o=13(){i.24({1A:6c},t/2,"5C")};11 a=r;11 f=u.g.34-t/2;6(u.g.34<t/2){a=i;f=u.g.34;o=13(){}}a.1g(19,19).24({1A:6c},f,"5C",13(){o()})}};u.1g=13(){u.g.3s=(3q 4s).4z();6(u.g.3y){u.g.3y.1g()}6(u.g.2L){u.g.2L.17(".10-ct-1A").1g()}6(!u.g.3r&&!u.g.2V){e(s).17(".10-1k-1g").1q("10-1k-1g-1R");e(s).17(".10-1k-22").2P("10-1k-22-1R")}3e(u.g.42);u.g.2C=1d};u.8Q=13(){e(s).17("*").1g(19,1d).6A();6(!u.g.3r&&!u.g.2V){e(s).17(".10-1k-1g").1q("10-1k-1g-1R");e(s).17(".10-1k-22").2P("10-1k-22-1R")}3e(u.g.42);u.g.2C=1d};u.cl=13(){e(s).17("*").1g();3e(u.g.42);u.48(u.g.27,u.g.2c)};u.8N=13(t){6(e.52(t.3k())=="cs"||e.52(t.3k())=="5C"){1O t.3k()}18{1O t.2A("cr","cq").2A("cH","cI").2A("cX","cW").2A("cV","cZ").2A("d0","d4").2A("d3","d2").2A("d1","cU").2A("cT","cM").2A("cL","cK").2A("cJ","cN").2A("cO","cS").2A("5t","cR").2A("cQ","cP")}};u.1N=13(e){6(u.g.27<2){u.g.3Q+=1}6(u.g.3Q>u.o.44&&u.o.44>0&&!e){u.g.3Q=0;u.1g();6(u.o.6k==1d){u.o.44=0}}18{11 t=u.g.27<2?u.g.2D:u.g.27-1;u.g.2c="1N";u.48(t,u.g.2c)}};u.1P=13(e){6(!u.o.65){6(!(u.g.27<u.g.2D)){u.g.3Q+=1}6(u.g.3Q>u.o.44&&u.o.44>0&&!e){u.g.3Q=0;u.1g();6(u.o.6k==1d){u.o.44=0}}18{11 t=u.g.27<u.g.2D?u.g.27+1:1;u.g.2c="1P";u.48(t,u.g.2c)}}18 6(!e){11 t=u.g.27;11 n=13(){t=1v.28(1v.2p()*u.g.2D)+1;6(t==u.g.27){n()}18{u.g.2c="1P";u.48(t,u.g.2c)}};n()}18 6(e){11 t=u.g.27<u.g.2D?u.g.27+1:1;u.g.2c="1P";u.48(t,u.g.2c)}};u.48=13(t,n){u.g.3S=u.g.3s=u.g.34=1d;6(u.g.3y){u.g.3y.1g(19,19).16({1a:0})}6(u.g.2L){u.g.2L.1E(2s).31(41).17(".10-ct-1A").1g().1E(2s).24({1A:0},cY)}6(u.g.5n==19){u.g.5n=1d;u.g.2C=u.g.2V;u.g.1H.17(\'2i[1r*="4O.4X"], 2i[1r*="4T.4C"]\').1W(13(){e(14).2l().17(".10-55").2v(u.g.v.6T,13(){e(14).2l().17("2i").1f("1r","")})})}e(s).17(\'2i[1r*="4O.4X"], 2i[1r*="4T.4C"]\').1W(13(){3e(e(14).12("5H"))});3e(u.g.42);u.g.5j=t;u.g.1t=e(s).17(".10-1S:3B("+(u.g.5j-1)+")");6(!n){6(u.g.27<u.g.5j){u.g.2c="1P"}18{u.g.2c="1N"}}11 r=0;6(e(s).17(\'2i[1r*="4O.4X"], 2i[1r*="4T.4C"]\').1u>0){r=u.g.v.6T}3e(u.g.80);u.g.80=2g(13(){11 e=13(){6(u.g.3W){2g(13(){e()},41)}18{u.5l(u.g.1t,13(){u.24()})}};e()},r)};u.5l=13(t,n){u.g.3A=19;6(u.g.8L){e(s).16({1Y:"2u"})}6(u.o.5l){11 r=[];11 i=0;6(t.16("4e-4t")!="1G"&&t.16("4e-4t").1w("5q")!=-1){11 o=t.16("4e-4t");o=o.3n(/5q\\((.*)\\)/)[1].2A(/"/8R,"");r.4x(o)}t.17("20").1W(13(){r.4x(e(14).1f("1r"))});t.17("*").1W(13(){6(e(14).16("4e-4t")!="1G"&&e(14).16("4e-4t").1w("5q")!=-1){11 t=e(14).16("4e-4t");t=t.3n(/5q\\((.*)\\)/)[1].2A(/"/8R,"");r.4x(t)}});6(r.1u==0){e(".10-1y-2I, .10-1k-1P, .10-1k-1N, .10-1o-1k-2I").16({1Y:"2u"});u.3w(t,n)}18{6(u.g.1M){u.g.30.16("1x","29")}18{u.g.30.1E(cv).2v(2s)}2t(x=0;x<r.1u;x++){e("<20>").2M(13(){6(++i==r.1u){u.g.30.1g(19,19).16({1x:"1G"});e(".10-1y-2I, .10-1k-1P, .10-1k-1N, .10-1o-1k-2I").16({1Y:"2u"});u.3w(t,n)}}).1f("1r",r[x])}}}18{e(".10-1y-2I, .10-1k-1P, .10-1k-1N, .10-1o-1k-2I").16({1Y:"2u"});u.3w(t,n)}};u.3w=13(t,n){t.16({1Y:"2J",1x:"29"});6(u.g.6g){u.g.6g()}u.7A();6(u.o.2U=="47"){u.a6()}t.2Y().1W(13(){11 t=e(14);11 n=t.12("43")?t.12("43"):"0";11 r=t.12("3Y")?t.12("3Y"):"0";6(t.3O("a")&&t.2Y().1u>0){t.16({1x:"29"});t=t.2Y()}11 i="1V";11 s="1V";6(t.12("2Z")){6(26 t.12("2Z")=="3F"){i=1b(t.12("2Z"))*u.g.1B}18 6(t.12("2Z").1w("%")!=-1){i=t.12("2Z")}}6(t.12("2X")){6(26 t.12("2X")=="3F"){s=1b(t.12("2X"))*u.g.1B}18 6(t.12("2X").1w("%")!=-1){s=t.12("2X")}}11 o=t.12("6J")?1b(t.12("6J"))*u.g.1B:0;11 a=t.12("6P")?1b(t.12("6P"))*u.g.1B:0;11 f=t.12("6U")?1b(t.12("6U"))*u.g.1B:0;11 l=t.12("6V")?1b(t.12("6V"))*u.g.1B:0;11 c=t.12("5W")?1b(t.12("5W"))*u.g.1B:0;11 h=t.12("5T")?1b(t.12("5T"))*u.g.1B:0;11 p=t.12("63")?1b(t.12("63"))*u.g.1B:0;11 d=t.12("64")?1b(t.12("64"))*u.g.1B:0;11 v=t.12("8S");11 m=t.12("8Y");6(u.g.3C||u.o.4h>0){6(t.3O("20")&&!t.3V("10-bg")){t.16({1a:"1V",1c:"1V"});6((i==0||i=="1V")&&26 s=="3F"&&s!=0){i=s/t.1c()*t.1a()}6((s==0||s=="1V")&&26 i=="3F"&&i!=0){s=i/t.1a()*t.1c()}6(i=="1V"){i=t.1a()*u.g.1B}6(s=="1V"){s=t.1c()*u.g.1B}t.16({1a:i,1c:s})}6(!t.3O("20")){t.16({1a:i,1c:s,"8Z-8X":1b(v)*u.g.1B+"1z","8W-1c":1b(m)*u.g.1B+"1z"})}6(t.3O("1e")&&t.17("2i").12("5g")){11 g=t.17("2i");g.1f("1a",1b(g.12("2Z"))*u.g.1B).1f("1c",1b(g.12("2X"))*u.g.1B);t.16({1a:1b(g.12("2Z"))*u.g.1B,1c:1b(g.12("2X"))*u.g.1B})}t.16({23:f+"1z "+a+"1z "+l+"1z "+o+"1z ",8T:c+"1z",8U:h+"1z",8V:p+"1z",9j:d+"1z"})}6(!t.3V("10-bg")){11 y=t;6(t.2l().3O("a")){t=t.2l()}11 b=u.o.7n>0?(u.g.1C()-u.o.7n)/2:0;b=b<0?0:b;6(n.1w("%")!=-1){t.16({1i:u.g.1C()/1Z*1b(n)-y.1a()/2-o-c})}18 6(b>0||u.g.3C||u.o.4h>0){t.16({1i:b+1b(n)*u.g.1B})}6(r.1w("%")!=-1){t.16({1s:u.g.1F()/1Z*1b(r)-y.1c()/2-f-p})}18 6(u.g.3C||u.o.4h>0){t.16({1s:1b(r)*u.g.1B})}}18{t.16({1a:"1V",1c:"1V"});i=t.1a();s=t.1c();11 w=u.g.1B;6(u.g.2x.1w("%")!=-1){6(u.g.1C()>i){w=u.g.1C()/i;6(u.g.1F()>s*w){w=u.g.1F()/s}}18 6(u.g.1F()>s){w=u.g.1F()/s;6(u.g.1C()>i*w){w=u.g.1C()/i}}}t.16({1a:1v.5o(i*w),1c:1v.5o(s*w),2z:-1v.5o(i*w)/2+"1z",2O:-1v.5o(s*w)/2+"1z"})}});t.16({1x:"1G",1Y:"2u"});u.6B();n();e(14).6A();6(u.g.4k&&u.g.3W){u.g.4k=1d;u.g.4m=1d;u.g.5r=1d;u.g.3W=1d}};u.6B=13(){6(u.g.4p){11 e=13(){6(u.g.4p.1c()>0){6(u.g.84>0){u.g.3v.16({1c:u.g.4p.1c()/2})}18{u.g.3v.16({1c:u.g.4p.1c(),2O:-u.g.4p.1c()/2})}}18{2g(13(){e()},50)}};e()}};u.7A=13(){6(u.o.4h>0){6(e(2T).1a()<u.o.4h){u.g.3C=19;u.g.2x=u.o.4h+"1z"}18{u.g.3C=1d;u.g.2x=u.g.81;u.g.1B=1}}6(u.g.3C){11 t=e(s).2l();6(u.g.5r&&u.g.3W){e(s).16({1a:u.g.4k});u.g.1B=u.g.5r;e(s).16({1c:u.g.4m})}18{e(s).16({1a:t.1a()-1b(e(s).16("23-1i"))-1b(e(s).16("23-1J"))});u.g.1B=e(s).1a()/1b(u.g.2x);e(s).16({1c:u.g.1B*1b(u.g.3K)})}}18{u.g.1B=1;e(s).16({1a:u.g.2x,1c:u.g.3K})}6(e(s).5k(".10-5u-4W-2f").1u){e(s).5k(".10-5u-4W-86").16({1c:e(s).4G(19)});e(s).5k(".10-5u-4W-2f").16({1c:e(s).4G(19)});e(s).5k(".10-5u-4W-86").16({1a:e(2T).1a(),1i:-e(s).5k(".10-5u-4W-2f").83().1i});6(u.g.2x.1w("%")!=-1){11 n=1b(u.g.2x);11 r=e("3h").1a()/1Z*n-(e(s).4I()-e(s).1a());e(s).1a(r)}}e(s).17(".10-2a, .10-6C-2f").16({1a:u.g.1C(),1c:u.g.1F()});6(u.g.1H&&u.g.1t){u.g.1H.16({1a:u.g.1C(),1c:u.g.1F()});u.g.1t.16({1a:u.g.1C(),1c:u.g.1F()})}18{e(s).17(".10-1S").16({1a:u.g.1C(),1c:u.g.1F()})}};u.7F=13(){u.g.1m.16({1a:u.g.1m.12("2Z")*u.g.1B,1c:u.g.1m.12("2X")*u.g.1B});6(u.g.1M){u.g.1m.16("1x","29")}18{u.g.1m.2v(2s)}11 t=5M=5L=5K="1V";6(u.g.1m.12("43")&&u.g.1m.12("43").1w("%")!=-1){t=u.g.1C()/1Z*1b(u.g.1m.12("43"))-u.g.1m.1a()/2+1b(e(s).16("23-1i"))}18{t=1b(u.g.1m.12("43"))*u.g.1B}6(u.g.1m.12("4M")&&u.g.1m.12("4M").1w("%")!=-1){5M=u.g.1C()/1Z*1b(u.g.1m.12("4M"))-u.g.1m.1a()/2+1b(e(s).16("23-1J"))}18{5M=1b(u.g.1m.12("4M"))*u.g.1B}6(u.g.1m.12("3Y")&&u.g.1m.12("3Y").1w("%")!=-1){5L=u.g.1F()/1Z*1b(u.g.1m.12("3Y"))-u.g.1m.1c()/2+1b(e(s).16("23-1s"))}18{5L=1b(u.g.1m.12("3Y"))*u.g.1B}6(u.g.1m.12("59")&&u.g.1m.12("59").1w("%")!=-1){5K=u.g.1F()/1Z*1b(u.g.1m.12("59"))-u.g.1m.1c()/2+1b(e(s).16("23-1o"))}18{5K=1b(u.g.1m.12("59"))*u.g.1B}u.g.1m.16({1i:t,1J:5M,1s:5L,1o:5K})};u.a6=13(){u.7Y("4U");11 t=u.g.2x.1w("%")==-1?1b(u.g.2x):u.g.1C();e(s).17(".10-1y-1L a").16({1a:1b(u.o.73*u.g.1B),1c:1b(u.o.5f*u.g.1B)});e(s).17(".10-1y-1L a:3L").16({2S:0});e(s).17(".10-1y-1L").16({1c:1b(u.o.5f*u.g.1B)});11 n=e(s).17(".10-1y");11 r=u.o.5V.1w("%")==-1?1b(u.o.5V):1b(t/1Z*1b(u.o.5V));n.16({1a:r*1v.28(u.g.1B*1Z)/1Z});6(n.1a()>e(s).17(".10-1y-1L").1a()){n.16({1a:e(s).17(".10-1y-1L").1a()})}u.7Y("a5")};u.7W=13(t){11 n=t?t:u.g.5j;e(s).17(".10-1y-1L a:a9(.10-3z-"+n+")").2Y().1W(13(){e(14).2P("10-3z-1R").1g().5F(6O,u.o.7b/1Z)});e(s).17(".10-1y-1L a.10-3z-"+n).2Y().1q("10-3z-1R").1g().5F(6O,u.o.7d/1Z)};u.7Q=13(){6(!e(s).17(".10-1y-1L-2f").3V("10-1y-1L-1K")){11 t=e(s).17(".10-3z-1R").1u?e(s).17(".10-3z-1R").2l():1d;6(t){11 n=t.3g().1i+t.1a()/2;11 r=e(s).17(".10-1y-1L-2f").1a()/2-n;r=r<e(s).17(".10-1y-1L-2f").1a()-e(s).17(".10-1y-1L").1a()?e(s).17(".10-1y-1L-2f").1a()-e(s).17(".10-1y-1L").1a():r;r=r>0?0:r;e(s).17(".10-1y-1L").24({2z:r},72,"5U")}}};u.7Y=13(t){6(u.o.5Y&&!e(s).3V("10-1K")){2G(t){1h"4U":u.g.3u.16({1Y:"2J",1x:"29"});1j;1h"a5":u.g.3u.16({1Y:"2u",1x:"1G"});1j}}};u.24=13(){u.g.2W=19;u.g.3A=1d;3e(u.g.42);3e(u.g.80);u.g.ae=u.g.1H;u.o.9w(u.g);6(u.o.2U=="47"){u.7W();6(!("6n"3j 2T)){u.7Q()}}u.g.1t.1q("10-ad");11 t=7g=6e=7s=5X=76=6h=7c=69=dq=67=dz="1V";11 o=7f=u.g.1C();11 a=6Z=u.g.1F();11 f=u.g.2c=="1N"?u.g.1H:u.g.1t;11 l=f.12("3p")?f.12("3p"):u.o.7z;11 c=u.g.6G[u.g.2c][l];6(c=="1i"||c=="1J"){o=6e=7f=6h=0;67=0}6(c=="1s"||c=="1o"){a=t=6Z=5X=0;69=0}2G(c){1h"1i":7g=5X=0;69=-u.g.1C();1j;1h"1J":t=76=0;69=u.g.1C();1j;1h"1s":7s=6h=0;67=-u.g.1F();1j;1h"1o":6e=7c=0;67=u.g.1F();1j}u.g.1H.16({1i:t,1J:7g,1s:6e,1o:7s});u.g.1t.16({1a:7f,1c:6Z,1i:5X,1J:76,1s:6h,1o:7c});11 h=u.g.1H.12("6v")?1b(u.g.1H.12("6v")):u.o.7C;11 p=u.g.1H.12("4u")?1b(u.g.1H.12("4u")):u.o.6j;11 d=u.g.1H.12("4n")?u.g.1H.12("4n"):u.o.5G;11 v=u.g.1t.12("4N")?1b(u.g.1t.12("4N")):u.o.7a;11 m=u.g.1t.12("5Q")?1b(u.g.1t.12("5Q")):u.o.6S;11 g=u.g.1t.12("6o")?u.g.1t.12("6o"):u.o.6E;11 y=13(){u.g.1H.1E(h+p/15).24({1a:o,1c:a},p,d,13(){b()})};11 b=13(){u.g.ae.17(\' > *[1l*="10-s"]\').1g(19,19);u.o.7B(u.g);u.g.1H=u.g.1t;u.g.27=u.g.5j;e(s).17(".10-1S").2P("10-1R");e(s).17(".10-1S:3B("+(u.g.27-1)+")").1q("10-1R").2P("10-ad");e(s).17(".10-1o-4b a").2P("10-1k-1R");e(s).17(".10-1o-4b a:3B("+(u.g.27-1)+")").1q("10-1k-1R");6(u.g.2C){u.5a()}u.g.2W=1d;6(u.g.3a==19){u.3w(u.g.1H,13(){u.g.3a=1d})}};11 w=13(t){u.g.1H.17(\' > *[1l*="10-s"]\').1W(13(){11 n=e(14).12("3p")?e(14).12("3p"):c;11 r,i;2G(n){1h"1i":r=-u.g.1C();i=0;1j;1h"1J":r=u.g.1C();i=0;1j;1h"1s":i=-u.g.1F();r=0;1j;1h"1o":i=u.g.1F();r=0;1j}11 s=e(14).12("5y")?e(14).12("5y"):1d;2G(s){1h"1i":r=u.g.1C();i=0;1j;1h"1J":r=-u.g.1C();i=0;1j;1h"1s":i=u.g.1F();r=0;1j;1h"1o":i=-u.g.1F();r=0;1j}11 o=1b(e(14).1f("1l").1X("10-s")[1]);6(o==-1){11 a=1b(e(14).16("1i"));11 f=1b(e(14).16("1s"));6(i<0){i=-(u.g.1F()-f+1)}18 6(i>0){i=f+e(14).4G()+1}6(r<0){r=-(u.g.1C()-a+1)}18 6(r>0){r=a+e(14).4I()+1}11 l=1}18{11 h=u.g.1H.12("61")?1b(u.g.1H.12("61")):u.o.7J;11 l=o*h}11 p=e(14).12("6v")?1b(e(14).12("6v")):u.o.7C;11 d=e(14).12("4u")?1b(e(14).12("4u")):u.o.6j;11 v=e(14).12("4n")?e(14).12("4n"):u.o.5G;6(t){p=0;d=t}11 m="1G";6(!u.g.1M&&u.g.4i){m=e(14).12("6w")?e(14).12("6w"):0}11 g="1G";6(!u.g.1M&&u.g.4i){g=e(14).12("6t")?e(14).12("6t"):1}6(e(14).12("5z")){3e(e(14).12("5z"))}6(s=="4c"||!s&&n=="4c"){6(!u.g.1M){e(14).1g(19,1d).1E(p).24({2w:0,1A:m,1Q:g},d,v,13(){e(14).16({1Y:"2J",2w:e(14).12("5P")})})}18{e(14).1g(19,19).1E(p).31(d,v,13(){e(14).16({1Y:"2J",1x:"29"})})}}18{e(14).1g(19,1d).1E(p).24({1A:m,1Q:g,2z:-r*l,2O:-i*l},d,v)}})};11 E=13(){u.g.1t.1E(h+v).24({1a:u.g.1C(),1c:u.g.1F()},m,g)};11 S=13(){6(u.g.3m){h=0}u.g.1t.17(\' > *[1l*="10-s"]\').1W(13(){11 t=e(14).12("3p")?e(14).12("3p"):c;11 n,r;2G(t){1h"1i":n=-u.g.1C();r=0;1j;1h"1J":n=u.g.1C();r=0;1j;1h"1s":r=-u.g.1F();n=0;1j;1h"1o":r=u.g.1F();n=0;1j;1h"4c":r=0;n=0;1j}11 i=1b(e(14).1f("1l").1X("10-s")[1]);6(i==-1){11 s=1b(e(14).16("1i"));11 o=1b(e(14).16("1s"));6(r<0){r=-(o+e(14).4G()+1)}18 6(r>0){r=u.g.1F()-o+1}6(n<0){n=-(s+e(14).4I()+1)}18 6(n>0){n=u.g.1C()-s+1}11 a=1}18{11 f=u.g.1t.12("a4")?1b(u.g.1t.12("a4")):u.o.af;11 a=i*f}11 l=e(14).12("4N")?1b(e(14).12("4N")):u.o.7a;11 p=e(14).12("5Q")?1b(e(14).12("5Q")):u.o.6S;11 d=e(14).12("6o")?e(14).12("6o"):u.o.6E;11 m=e(14);11 g=13(){6(u.o.7X==19){m.17(".10-3N").2h()}6(m.12("5x")>0){m.12("5z",2g(13(){u.7Z(m)},m.12("5x")))}};11 y="1G";6(!u.g.1M&&u.g.4i){y=e(14).12("9T")?e(14).12("9T"):0}11 b="1G";6(!u.g.1M&&u.g.4i){b=e(14).12("9Y")?e(14).12("9Y"):1}6(t=="4c"){6(!u.g.1M){e(14).16({1U:"1A("+y+"1D) 1Q("+b+")","-4Z-1U":"1A("+y+"1D) 1Q("+b+")","-3t-1U":"1A("+y+"1D) 1Q("+b+")","-o-1U":"1A("+y+"1D) 1Q("+b+")","-4V-1U":"1A("+y+"1D) 1Q("+b+")",2w:0,1Y:"2u",2z:0,2O:0}).1g().1E(h+v+l).24({1Q:1,1A:0,2w:e(14).12("5P")},p,d,13(){g()})}18{e(14).16({1x:"1G",1Y:"2u",2z:0,2O:0}).1g(19,19).1E(h+v+l).2v(p,d,13(){g()})}}18{6(!u.g.1M){e(14).16({2w:e(14).12("5P")})}e(14).16({1U:"1A("+y+"1D) 1Q("+b+")","-4Z-1U":"1A("+y+"1D) 1Q("+b+")","-3t-1U":"1A("+y+"1D) 1Q("+b+")","-o-1U":"1A("+y+"1D) 1Q("+b+")","-4V-1U":"1A("+y+"1D) 1Q("+b+")",2z:n*a,2O:r*a,1x:"29",1Y:"2u"});e(14).1g().1E(h+v+l).24({2z:0,2O:0,1Q:1,1A:0},p,d,13(){g()})}})};11 x=13(){6(n(e(s))&&26 e.6L!="32"&&(u.g.1t.12("4F")||u.g.1t.12("5s"))){6(u.g.1t.12("4F")&&u.g.1t.12("5s")){11 t=1v.28(1v.2p()*2);11 r=[["3d",u.g.1t.12("4F")],["a2",u.g.1t.12("5s")]];N(r[t][0],r[t][1])}18 6(u.g.1t.12("4F")){N("3d",u.g.1t.12("4F"))}18{N("a2",u.g.1t.12("5s"))}}18{6(u.g.1t.12("5p")&&u.g.1t.12("5v")){11 t=1v.28(1v.2p()*2);11 r=[["2d",u.g.1t.12("5p")],["9Z",u.g.1t.12("5v")]];N(r[t][0],r[t][1])}18 6(u.g.1t.12("5p")){N("2d",u.g.1t.12("5p"))}18 6(u.g.1t.12("5v")){N("9Z",u.g.1t.12("5v"))}18{N("2d","6p")}}};11 T=13(){6(n(e(s))&&4P.1w("3d")!=-1){N("3d",4P.1X(":")[1])}18{6(4P.1w("3d")!=-1){N("2d","6p")}18{N("2d",4P.1X(":")[1])}}};11 N=13(e,t){11 n=e.1w("de")==-1?u.t:u.ct;11 r="3d",s,o;6(e.1w("2d")!=-1){r="2d"}6(t.1w("3L")!=-1){o=n["t"+r].1u-1;s="3L"}18 6(t.1w("6p")!=-1){o=1v.28(1v.2p()*i(n["t"+r]));s="2p 4R 6p"}18{11 a=t.1X(",");11 f=a.1u;o=1b(a[1v.28(1v.2p()*f)])-1;s="2p 4R dl"}C(r,n["t"+r][o])};11 C=13(t,n){11 i=e(s).17(".10-2a");11 o=u.g.1H.17(\'*[1l*="10-s"]\').1u>0?3J:0;11 a=n.6H.3k().1w("dH")==-1?1d:19;11 f=26 n.5b=="3F"?n.5b:1v.28(1v.2p()*(n.5b[1]-n.5b[0]+1))+n.5b[0];11 l=26 n.5h=="3F"?n.5h:1v.28(1v.2p()*(n.5h[1]-n.5h[0]+1))+n.5h[0];6(u.g.82()==19&&u.o.9L==19||u.g.1M&&u.o.9A==19){6(f>=15){f=7}18 6(f>=5){f=4}18 6(f>=4){f=3}18 6(f>2){f=2}6(l>=15){l=7}18 6(l>=5){l=4}18 6(l>=4){l=3}18 6(l>2){l=2}6(l>2&&f>2){l=2;6(f>4){f=4}}}11 c=e(s).17(".10-2a").1a()/f;11 h=e(s).17(".10-2a").1c()/l;6(!u.g.2E){u.g.2E=e("<1e>").1q("10-6C-2f").1q("10-3U-2J").16({1a:i.1a(),1c:i.1c()}).6a(i)}18{u.g.2E.5N().16({1a:i.1a(),1c:i.1c()})}11 p=i.1a()-1v.28(c)*f;11 d=i.1c()-1v.28(h)*l;11 v=[];v.9V=13(){11 e=14.1u,t,n,r;6(e==0)1O 1d;a3(--e){t=1v.28(1v.2p()*(e+1));n=14[e];r=14[t];14[e]=r;14[t]=n}1O 14};2t(11 m=0;m<f*l;m++){v.4x(m)}2G(n.3I.dF){1h"6q":v.6q();1j;1h"9U-7i":v=r(l,f,"7i");1j;1h"9U-6q":v=r(l,f,"6q");1j;1h"2p":v.9V();1j}6(t=="3d"){u.g.3m=o+(f*l-1)*n.3I.1E;11 g=0;6(n.2H&&n.2H.2r){g+=n.2H.2r}6(n.21&&n.21.2r){g+=n.21.2r}6(n.3o&&n.3o.2r){g+=n.3o.2r}u.g.3m+=g;11 y=0;6(n.2H&&n.2H.1E){y+=n.2H.1E}6(n.21&&n.21.1E){y+=n.21.1E}6(n.3o&&n.3o.1E){y+=n.3o.1E}u.g.3m+=y}18{u.g.3m=o+(f*l-1)*n.3I.1E+n.1p.2r;u.g.4y=e("<1e>").1q("10-dJ").1n(u.g.2E);u.g.6D=e("<1e>").1q("10-cz").1n(u.g.2E)}11 E=u.g.2c;2t(11 x=0;x<f*l;x++){11 T=x%f==0?p:0;11 N=x>(l-1)*f-1?d:0;11 C=e("<1e>").1q("10-6C-3I").16({1a:1v.28(c)+T,1c:1v.28(h)+N}).1n(u.g.2E);11 k,L;6(t=="3d"){C.1q("10-3d-2f");11 A=1v.28(c)+T;11 O=1v.28(h)+N;11 M;6(n.21.51=="9R"){6(1v.3P(n.21.1p.2o)>90&&n.3I.9k!="aa"){M=1v.28(A/7)+T}18{M=A}}18{6(1v.3P(n.21.1p.2j)>90&&n.3I.9k!="aa"){M=1v.28(O/7)+N}18{M=O}}11 3H=A/2;11 D=O/2;11 P=M/2;11 H=13(t,n,r,i,s,o,u,a,f){e("<1e>").1q(t).16({1a:r,1c:i,1U:"5e("+s+"1z, "+o+"1z, "+u+"1z) 2j("+a+"1D) 2o("+f+"1D) 5d(5c) 4r(1, 1, 1)","-o-1U":"5e("+s+"1z, "+o+"1z, "+u+"1z) 2j("+a+"1D) 2o("+f+"1D) 5d(5c) 4r(1, 1, 1)","-4Z-1U":"5e("+s+"1z, "+o+"1z, "+u+"1z) 2j("+a+"1D) 2o("+f+"1D) 5d(5c) 4r(1, 1, 1)","-4V-1U":"5e("+s+"1z, "+o+"1z, "+u+"1z) 2j("+a+"1D) 2o("+f+"1D) 5d(5c) 4r(1, 1, 1)","-3t-1U":"5e("+s+"1z, "+o+"1z, "+u+"1z) 2j("+a+"1D) 2o("+f+"1D) 5d(5c) 4r(1, 1, 1)"}).1n(n)};H("10-3d-3E",C,0,0,0,0,-P,0,0);11 B=0;11 j=0;11 F=0;6(n.21.51=="cE"&&1v.3P(n.21.1p.2j)>90){H("10-3d-5t",C.17(".10-3d-3E"),A,O,-3H,-D,-P,6c,0)}18{H("10-3d-5t",C.17(".10-3d-3E"),A,O,-3H,-D,-P,0,6c)}H("10-3d-1o",C.17(".10-3d-3E"),A,M,-3H,D-P,0,-90,0);H("10-3d-1s",C.17(".10-3d-3E"),A,M,-3H,-D-P,0,90,0);H("10-3d-9v",C.17(".10-3d-3E"),A,O,-3H,-D,P,0,0);H("10-3d-1i",C.17(".10-3d-3E"),M,O,-3H-P,-D,0,0,-90);H("10-3d-1J",C.17(".10-3d-3E"),M,O,3H-P,-D,0,0,90);k=C.17(".10-3d-9v");6(n.21.51=="9R"){6(1v.3P(n.21.1p.2o)>90){L=C.17(".10-3d-5t")}18{L=C.17(".10-3d-1i, .10-3d-1J")}}18{6(1v.3P(n.21.1p.2j)>90){L=C.17(".10-3d-5t")}18{L=C.17(".10-3d-1s, .10-3d-1o")}}11 I=o+v[x]*n.3I.1E;11 q=u.g.2E.17(".10-3d-2f:3B("+x+") .10-3d-3E");6(n.2H&&n.2H.1p){n.2H.1p.1E=n.2H.1p.1E?n.2H.1p.1E+I:I;q.1p(n.2H.1p,n.2H.2r,n.2H.3R)}18{n.21.1p.1E=n.21.1p.1E?n.21.1p.1E+I:I}q.1p(n.21.1p,n.21.2r,n.21.3R);6(n.3o){q.1p(e.4H({},{4r:1},n.3o.1p),n.3o.2r,n.3o.3R)}}18{11 R=2N=2y=2B="1V";11 U=5i=1;6(n.1p.51=="2p"){11 z=["1s","1o","1J","1i"];11 W=z[1v.28(1v.2p()*z.1u)]}18{11 W=n.1p.51}6(n.6H.3k().1w("9B")!=-1&&x%2==0){6(E=="1N"){E="1P"}18{E="1N"}}6(E=="1N"){2G(W){1h"1s":W="1o";1j;1h"1o":W="1s";1j;1h"1i":W="1J";1j;1h"1J":W="1i";1j;1h"6Q":W="6F";1j;1h"6W":W="6z";1j;1h"6z":W="6W";1j;1h"6F":W="6Q";1j}}2G(W){1h"1s":R=2y=-C.1c();2N=2B=0;1j;1h"1o":R=2y=C.1c();2N=2B=0;1j;1h"1i":R=2y=0;2N=2B=-C.1a();1j;1h"1J":R=2y=0;2N=2B=C.1a();1j;1h"6Q":R=C.1c();2y=0;2N=C.1a();2B=0;1j;1h"6W":R=C.1c();2y=0;2N=-C.1a();2B=0;1j;1h"6z":R=-C.1c();2y=0;2N=C.1a();2B=0;1j;1h"6F":R=-C.1c();2y=0;2N=-C.1a();2B=0;1j}u.g.2m=n.1p.1Q?n.1p.1Q:1;6(a==19&&u.g.2m!=1){R=R/2;2y=2y/2;2N=2N/2;2B=2B/2}2G(n.1p.4g){1h"4c":R=2y=2N=2B=0;U=0;5i=1;1j;1h"cm":U=0;5i=1;6(u.g.2m==1){2y=2B=0}1j}6((n.1p.1A||n.1p.2j||n.1p.2o||u.g.2m!=1)&&!u.g.1M&&n.1p.4g!="1L"){C.16({3U:"2u"})}18{C.16({3U:"2J"})}6(a==19){u.g.4y.16({3U:"2u"})}18{u.g.4y.16({3U:"2J"})}6(n.1p.4g=="1L"||a==19){11 X=C.1n(u.g.4y);11 V=C.6y().1n(u.g.6D);k=e("<1e>").1q("10-ck").1n(X)}18{11 V=C.1n(u.g.6D)}L=e("<1e>").1q("10-cp").1n(V).16({1s:-R,1i:-2N,cu:"29",2w:U});11 J=o+v[x]*n.3I.1E;6(u.g.9y&&26 e.6L!="32"){11 K=n.1p.1A?n.1p.1A:0;11 Q=n.1p.2j?n.1p.2j:0;11 G=n.1p.2o?n.1p.2o:0;6(E=="1N"){K=-K;Q=-Q;G=-G}6(Q!=0||G!=0||K!=0||u.g.2m!=1){L.16({1U:"1A("+K+"1D) 2j("+Q+"1D) 2o("+G+"1D) 1Q("+u.g.2m+","+u.g.2m+")","-o-1U":"1A("+K+"1D) 2j("+Q+"1D) 2o("+G+"1D) 1Q("+u.g.2m+","+u.g.2m+")","-4Z-1U":"1A("+K+"1D) 2j("+Q+"1D) 2o("+G+"1D) 1Q("+u.g.2m+","+u.g.2m+")","-4V-1U":"1A("+K+"1D) 2j("+Q+"1D) 2o("+G+"1D) 1Q("+u.g.2m+","+u.g.2m+")","-3t-1U":"1A("+K+"1D) 2j("+Q+"1D) 2o("+G+"1D) 1Q("+u.g.2m+","+u.g.2m+")"})}L.1p({1E:J,1s:0,1i:0,2w:5i,1A:0,2j:0,2o:0,1Q:1},n.1p.2r,n.1p.3R);6((n.1p.4g=="1L"||a==19)&&n.6H.3k().1w("9B")==-1){11 Y=0;6(K!=0){Y=-K}k.1p({1E:J,1s:2y,1i:2B,1A:Y,1Q:u.g.2m,2w:U},n.1p.2r,n.1p.3R)}}18{L.1E(J).24({1s:0,1i:0,2w:5i},n.1p.2r,n.1p.3R);6(n.1p.4g=="1L"){k.1E(J).24({1s:2y,1i:2B},n.1p.2r,n.1p.3R)}}}11 Z=u.g.1H.17(".10-bg");6(Z.1u){6(t=="3d"||t=="2d"&&(n.1p.4g=="1L"||a==19)){k.3G(e("<20>").1f("1r",Z.1f("1r")).16({1a:Z[0].1I.1a,1c:Z[0].1I.1c,2z:i.1a()/2+3T(Z.16("2S-1i"))-1b(C.3g().1i),2O:i.1c()/2+3T(Z.16("2S-1s"))-1b(C.3g().1s)}))}18 6(u.g.4y.2Y().1u==0){u.g.4y.3G(e("<20>").1f("1r",Z.1f("1r")).16({1a:Z[0].1I.1a,1c:Z[0].1I.1c,2z:i.1a()/2+3T(Z.16("2S-1i")),2O:i.1c()/2+3T(Z.16("2S-1s"))}))}}11 4f=u.g.1t.17(".10-bg");6(4f.1u){L.3G(e("<20>").1f("1r",4f.1f("1r")).16({1a:4f[0].1I.1a,1c:4f[0].1I.1c,2z:i.1a()/2+3T(4f.16("2S-1i"))-1b(C.3g().1i),2O:i.1c()/2+3T(4f.16("2S-1s"))-1b(C.3g().1s)}))}}11 7L=u.g.1H;11 38=u.g.1t;38.17(".10-bg").16({1Y:"2J"});w(o);2g(13(){7L.16({1a:0});u.g.2E.2P("10-3U-2J")},o);11 7K=1b(38.12("5B"))?1b(38.12("5B")):0;11 7G=u.g.3m+7K>0?u.g.3m+7K:0;2g(13(){6(u.g.3a==19){u.g.2E.5N();7L.2P("10-1R");u.3w(38,13(){u.g.3a=1d})}S();38.16({1a:u.g.1C(),1c:u.g.1F()})},7G);2g(13(){u.g.2E.1q("10-3U-2J");38.1q("10-1R");6(38.17(".10-bg").1u){38.17(".10-bg").16({1x:"1G",1Y:"2u"});6(u.g.1M){38.17(".10-bg").16("1x","29");2g(13(){b()},41)}18{38.17(".10-bg").2v(41,13(){b()})}}18{b()}},u.g.3m)};7D=(u.g.1t.12("4F")||u.g.1t.12("5p"))&&u.t||(u.g.1t.12("5s")||u.g.1t.12("5v"))&&u.ct?"3q":"5D";6(u.o.4E&&!u.g.9x){6(u.g.2D==1){11 h=0;u.o.7B(u.g)}18{11 k=1b(u.g.1t.12("5B"))?1b(u.g.1t.12("5B")):0;11 L=7D=="3q"?0:p;2g(13(){b()},L+1v.3P(k))}u.g.3m=19;S();u.g.1t.16({1a:u.g.1C(),1c:u.g.1F()});6(!u.g.1M){u.g.1t.17(".10-bg").16({1x:"1G"}).2v(41)}u.g.9x=19;u.g.3A=1d}18{2G(7D){1h"5D":u.g.3m=1d;6(u.g.2E){u.g.2E.5N()}y();w();E();S();1j;1h"3q":6(26 4P!="32"){T()}18{x()}1j}}};u.7Z=13(e){11 t=u.g.1H;6(u.g.2c!="1N"&&u.g.1t){t=u.g.1t}11 n=t.12("3p")?t.12("3p"):u.o.7z;11 r=u.g.6G[u.g.2c][n];11 i=e.12("3p")?e.12("3p"):r;11 s,o;2G(i){1h"1i":s=-u.g.1C();o=0;1j;1h"1J":s=u.g.1C();o=0;1j;1h"1s":o=-u.g.1F();s=0;1j;1h"1o":o=u.g.1F();s=0;1j}11 a=e.12("5y")?e.12("5y"):1d;2G(a){1h"1i":s=u.g.1C();o=0;1j;1h"1J":s=-u.g.1C();o=0;1j;1h"1s":o=u.g.1F();s=0;1j;1h"1o":o=-u.g.1F();s=0;1j}11 f=1b(e.1f("1l").1X("10-s")[1]);6(f==-1){11 l=1b(e.16("1i"));11 c=1b(e.16("1s"));6(o<0){o=-(u.g.1F()-c+1)}18 6(o>0){o=c+e.4G()+1}6(s<0){s=-(u.g.1C()-l+1)}18 6(s>0){s=l+e.4I()+1}11 h=1}18{11 p=u.g.1H.12("61")?1b(u.g.1H.12("61")):u.o.7J;11 h=f*p}11 d=e.12("4u")?1b(e.12("4u")):u.o.6j;11 v=e.12("4n")?e.12("4n"):u.o.5G;11 m="1G";6(!u.g.1M&&u.g.4i){m=e.12("6w")?e.12("6w"):0}11 g="1G";6(!u.g.1M&&u.g.4i){g=e.12("6t")?e.12("6t"):1}6(a=="4c"||!a&&i=="4c"){6(!u.g.1M){e.24({2w:0,1A:m,1Q:g},d,v)}18{e.31(d,v)}}18{e.24({1A:m,1Q:g,2z:-s*h,2O:-o*h},d,v)}};u.4D=13(){u.d={3x:e("<1e>"),aT:13(t){e("<a7>"+t+"</a7>").1n(u.d.3x)},9E:13(){e("<4a>").1n(u.d.3x)},aU:13(t){e("<4a><30>"+t+"</30></4a>").1n(u.d.3x)},aL:13(t){e("<30>"+t+"</30>").1n(u.d.3x.17("4a:3L"))},78:13(t){e("<4a>").1n(u.d.3x.17("4a:3L 30:3L"))},aF:13(e){u.d.3x.17("4a:3L 30:3L").1K(13(){e.16({3f:"cA d5 dg",2O:1b(e.16("2S-1s"))-2,2z:1b(e.16("2S-1i"))-2})},13(){e.16({3f:"9z",2O:1b(e.16("2S-1s"))+2,2z:1b(e.16("2S-1i"))+2})})},7t:13(){6(!e("3h").17(".10-4D-7r").1u){6(!u.d.9S){u.d.aT("dL dI");u.d.9E();2t(11 t 3j u.o){u.d.aL(t+": <1T>"+u.o[t]+"</1T>")}u.d.aT("3b dG");u.d.aU("dN 3c dO 9I: <1T>"+e(s).17(".10-1S").1u+"</1T>");e(s).17(\'.10-2a .10-1S, .10-2a *[1l*="10-s"]\').1W(13(){6(e(14).3V("10-1S")){u.d.aU("<1T>9J "+(e(14).4L()+1)+"</1T>");u.d.78();u.d.aL("<1T>9J "+(e(14).4L()+1)+" a8:</1T><br><br>")}18{u.d.aU("    dk ( "+e(14).9q("9t")+" )");u.d.aF(e(14));u.d.78();u.d.aL("<1T>"+e(14).9q("9t")+" 1S a8:</1T><br><br>");u.d.aL("dA / 1l: <1T>"+e(14).1f("1l")+"</1T>")}e.1W(e(14).12(),13(e,t){u.d.aL(e+": <1T>"+t+"</1T>")})});u.d.9S=19}11 n=e("<1e>").1q("10-4D-7r").16({3g:"dp",a1:"ds",1s:"54",1J:"54",1a:"du",23:"co",4e:"bT","3f-cj":"54",1c:e(2T).1c()-60,2w:0,71:53}).1n(e("3h")).24({71:0,2w:.9},72,"5U").2h(13(t){6(t.a0&&t.9Q){e(14).24({71:53,2w:0},72,"5U",13(){e(14).56()})}});11 r=e("<1e>").16({1a:"1Z%",1c:"1Z%",3U:"1V"}).1n(n);11 i=e("<1e>").16({1a:"1Z%"}).1n(r).3G(u.d.3x)}},aM:13(){e("3h").17(".10-4D-7r").56()}};e(s).2h(13(e){6(e.a0&&e.9Q){u.d.7t()}})};u.2M()};11 n=13(t){11 n=e("<1e>"),r=1d,i=1d,s=["aR","b5","b4","b9","b8"];1U=["b3","b2","aW","aV","b0"];2t(11 o=s.1u-1;o>=0;o--){r=r?r:n[0].1I[s[o]]!=32}2t(11 o=1U.1u-1;o>=0;o--){n.16("1U-1I","9H-3d");i=i?i:n[0].1I[1U[o]]=="9H-3d"}6(r&&n[0].1I[s[4]]!=32){n.1f("4l","10-ah").1n(t);r=n[0].ay===3&&n[0].au===9;n.56()}1O r&&i};11 r=13(e,t,n){11 r=[];6(n=="7i"){2t(11 i=0;i<e;i++){2t(11 s=0;s<t;s++){r.4x(i+s*e)}}}18{2t(11 i=e-1;i>-1;i--){2t(11 s=t-1;s>-1;s--){r.4x(i+s*e)}}}1O r};11 i=13(e){11 t=0;2t(11 n 3j e){6(e.aj(n)){++t}}1O t};11 s=13(){9W=13(e){e=e.3k();11 t=/(ab)[ \\/]([\\w.]+)/.57(e)||/(3t)[ \\/]([\\w.]+)/.57(e)||/(am)(?:.*2q|)[ \\/]([\\w.]+)/.57(e)||/(5J) ([\\w.]+)/.57(e)||e.1w("al")<0&&/(aq)(?:.*? ar:([\\w.]+)|)/.57(e)||[];1O{7w:t[1]||"",2q:t[2]||"0"}};11 e=9W(40.46),t={};6(e.7w){t[e.7w]=19;t.2q=e.2q}6(t.ab){t.3t=19}18 6(t.3t){t.b7=19}1O t};4d=13(e,t){11 n=["3t","ci","4V","4Z","o",""];11 r=0,i,s;a3(r<n.1u&&!e[i]){i=t;6(n[r]==""){i=i.9X(0,1).3k()+i.9X(1)}i=n[r]+i;s=26 e[i];6(s!="32"){n=[n[r]];1O s=="13"?e[i]():e[i]}r++}};t.6s={2q:"4.5.5",82:13(){6(40.46.3n(/bX/i)||40.46.3n(/bY/i)||40.46.3n(/bZ/i)||40.46.3n(/bV/i)||40.46.3n(/bU/i)||40.46.3n(/bP/i)||40.46.3n(/bO bN/i)){1O 19}18{1O 1d}},bQ:13(e){6(e.16("23-1o")=="1V"||e.16("23-1o")=="1G"||e.16("23-1o")==0||e.16("23-1o")=="9z"){1O 19}18{1O 1d}},9y:!s().5J||s().5J&&s().2q>9?19:1d,1M:s().5J&&s().2q<9?19:1d,4k:1d,4m:1d,5r:1d,3W:1d,3r:1d,5n:1d,2C:1d,2W:1d,2D:5w,2c:"1P",42:5w,1C:5w,1F:5w,6G:{1N:{1i:"1J",1J:"1i",1s:"1o",1o:"1s"},1P:{1i:"1i",1J:"1J",1s:"1s",1o:"1o"}},v:{d:41,6M:6O,6T:41}};t.9s={6m:19,2b:1,6N:19,9p:19,5l:19,6I:19,5S:19,6d:19,2F:"bS",3X:"/68/c2/",9M:19,9N:"c3",7v:1d,4E:19,1m:1d,9O:"1i: -54; 1s: -54;",7M:1d,9C:"ce",9G:19,44:0,6k:19,7X:19,3Z:"1V",9u:"cf.ch",9F:19,65:1d,4h:0,7n:0,2U:"1K",73:1Z,5f:60,5V:"60%",7d:35,7b:1Z,9D:19,5Y:1d,9P:1d,9K:19,9L:19,9A:19,9r:1d,9o:13(e){},9l:13(e){},9m:13(e){},9n:13(e){},9w:13(e){},7B:13(e){},5E:13(e){},5I:13(e){},7z:"1J",7H:bG,af:.45,7J:.45,6S:3J,6j:3J,6E:"ac",5G:"ac",7a:0,7C:0}})(36)',62,858,'||||||if||||||||||||||||||||||||||||||||||||||||||||||||||||||||ls|var|data|function|this||css|find|else|true|width|parseInt|height|false|div|attr|stop|case|left|break|nav|class|yourLogo|appendTo|bottom|transition|addClass|src|top|nextLayer|length|Math|indexOf|display|thumbnail|px|rotate|ratio|sliderWidth|deg|delay|sliderHeight|none|curLayer|style|right|hover|slide|ie78|prev|return|next|scale|active|layer|strong|transform|auto|each|split|visibility|100|img|animation|start|padding|animate||typeof|curLayerIndex|floor|block|inner|firstLayer|prevNext||href|container|setTimeout|click|iframe|rotateX|the|parent|scale2D|document|rotateY|random|version|duration|300|for|visible|fadeIn|opacity|sliderOriginalWidth|T2|marginLeft|replace|L2|autoSlideshow|layersNum|ltContainer|skin|switch|before|wrapper|hidden|layerSlider|circleTimer|load|L1|marginTop|removeClass|bottomWrapper|to|margin|window|thumbnailNavigation|originalAutoSlideshow|isAnimating|originalHeight|children|originalWidth|li|fadeOut|undefined|preventDefault|curSlideTime||jQuery||nt||resize|LayerSlider|of||clearTimeout|border|position|body|param|in|toLowerCase|your|totalDuration|match|after|slidedirection|new|paused|pausedSlideTime|webkit|thumbsWrapper|shadow|makeResponsive|history|barTimer|thumb|isLoading|eq|responsiveMode|loaded|box|number|append|_|tile|1e3|sliderOriginalHeight|last|you|videopreview|is|abs|nextLoop|easing|startSlideTime|parseFloat|overflow|hasClass|goingNormal|skinsPath|originalTop|autoPauseSlideshow|navigator|500|slideTimer|originalLeft|loops||userAgent|always|change|WordPress|ul|slidebuttons|fade|lsPrefixes|background|et|type|responsiveUnder|enableCSS3|html|normalWidth|id|normalHeight|easingout|touches|shadowImg|one|scale3d|Date|image|durationout|If|init|push|curTiles|getTime|and|thumbnails|vimeo|debug|animateFirstLayer|transition3d|outerHeight|extend|outerWidth|plugin|span|index|originalRight|delayin|www|LSCustomTransition|escFullScreen|from|touchEndX|player|on|moz|fullwidth|youtu|which|ms||direction|trim|150|10px|vpcontainer|remove|exec|or|originalBottom|timer|cols|0deg|rotateZ|translate3d|tnHeight|videoSrc|rows|O2|nextLayerIndex|closest|imgPreload|issue|pausedByVideo|round|transition2d|url|normalRatio|customtransition3d|back|wp|customtransition2d|null|showuntil|slideoutdirection|showUntilTimer|slidedelay|timeshift|linear|old|cbPrev|fadeTo|easingOut|videoTimer|cbNext|msie|oB|oT|oR|empty|fullscreen|originalOpacity|durationin|WP|navStartStop|originalBorderRight|easeInOutQuad|tnContainerWidth|originalBorderLeft|nextLayerLeft|hoverBottomNav|videoDuration||parallaxout|video|originalBorderTop|originalBorderBottom|randomSlideshow|link|layerMarginTop|layerslider|layerMarginLeft|prependTo|can|180|navButtons|curLayerTop|rel|showShadow|nextLayerTop|clicked|durationOut|forceLoopNum|bind|autoStart|ontouchstart|easingin|all|reverse|touchStartX|global|scaleout|tn|delayout|rotateout|library|clone|bottomleft|dequeue|resizeShadow|lt|nextTiles|easingIn|bottomright|slideDirections|name|navPrevNext|originalPaddingLeft|admin|transit|fo|twoWaySlideshow|750|originalPaddingRight|topleft|slider|durationIn|fi|originalPaddingTop|originalPaddingBottom|topright|error|solve|nextLayerHeight|JS|marginRight|600|tnWidth|lswpVersion|com|nextLayerRight|addEventListener|aUU|250|delayIn|tnInactiveOpacity|nextLayerBottom|tnActiveOpacity|wpVersion|nextLayerWidth|curLayerRight|fired|forward|cssContainer|text|looks|It|sublayerContainer|linkto|jquery|like|console|curLayerBottom|show|location|globalBGImage|browser|other|plugins|slideDirection|resizeSlider|cbAnimStop|delayOut|transitionType|please|resizeYourLogo|it|slideDelay|theme|parallaxOut|rt|tt|yourLogoLink|causes|section|with|scrollThumb|script|png|forceHideControls|nothumb|content|changeThumb|autoPlayVideos|bottomNavSizeHelper|sublayerShowUntil|changeTimer|sliderOriginalWidthRU|isMobile|offset|shadowBtmMod|problem|helper|goFullScreen|layerSliderCustomTransitions|initialized|meta|layerSliderTransitions|norotate|oldjquery|object|el|force|head|embed|getJSON|api|youtube|hash|createStyleSheet|curSkin|lsShowNotice|fn|copy|extra|loads|edit|area|Please|navigate|enable|Put|Settings|under|Troubleshooting|Global|option|Transit|includes|json|callback|author|contact|showSlider|help|ieEasing|using|are|forcestop|gi|originalFontSize|borderLeftWidth|borderRightWidth|borderTopWidth|line|size|originalLineHeight|font||try|out|hider|half|loading|temporary|autoplay|playvideo|account|CodeCanyon|relative|clientX|FullScreen|IsFullScreen|originalEvent|write|sides|above|borderBottomWidth|depth|cbStart|cbStop|cbPause|cbInit|keybNav|prop|allowFullScreenMode|options|tagName|youtubePreview|front|cbAnimStart|firstLayerAnimated|cssTransitions|0px|optimizeForIE78|mirror|yourLogoTarget|hoverPrevNext|aeU|responsive|touchNav|preserve|found|SLIDE|showCircleTimer|optimizeForMobile|pauseOnHover|globalBGColor|yourLogoStyle|showBarTimer|altKey|horizontal|putData|rotatein|col|randomize|uaMatch|substr|scalein|custom2d|shiftKey|zIndex|custom3d|while|parallaxin|off|resizeThumb|h1|properties|not|large|chrome|easeInOutQuint|animating|stopLayer|parallaxIn|Skin|test3d|already|hasOwnProperty|mistyped|compatible|opera||Loading|Possibilities|mozilla|rv|Trying||offsetLeft|without|controls|information|offsetHeight|disabled|gdata|feeds|videos|http|file||cursor|pointer|alt|entry|vi||hide|seconds|yt|media|group|perspective|deeplink|||MozTransformStyle|msTransformStyle|were|Neither|mode|WebkitTransformStyle|Fallback|OTransformStyle|transformStyle|msPerspective|OPerspective|insertBefore|safari|WebkitPerspective|MozPerspective|stylesheet|cause|comment|comments||item||no|there|any|duplicates|requires|least|know|what|don|depository||newer|Updater|them|Ask|Javascript|conflict||itself|that|string|multiple|doesn|disable|should|4e3|must|corresponding|every|have|us|private|Phone|Windows|BlackBerry|isHideOn3D|issues|glass|black|iPod|iPad|continue|Android|webOS|iPhone|exclam|title|skins|transparent|We|need|page|profile|message|our|FTP|some|also|uses|_blank|maxresdefault|cases|jpg|khtml|radius|curtile|restart|mixed|350|20px|nexttile|easeInOut|easeinout|swing||dispay|400|RequestFullScreen|yourlogo|touchend|nexttiles|2px|bock|target|CancelFullScreen|vertical|queue|textDecoration|easein|easeIn|circ|Expo|expo|Sine|Circ|elastic|Bounce|bounce|Back|Elastic|sine|Quint|quad|easeOut|easeout|450|Quad|quart|quint|Cubic|cubic|Quart|solid|outline|webkitfullscreenchange|webkitIsFullScreen|absolute|mozFullScreen|mozfullscreenchange|backgroundImage|fullscreenchange|custom|sideleft|red|touchscroll|mousemove|sideright|Layer|specified|backgroundColor|static||fixed|layerMarginRight|thumbnail_large|10000000000|v2|300px|wrapAll|hack|center|indicator|layerMarginBottom|distance|bar|circle|below|pageX|sequence|Content|carousel|code|curtiles|touchstart|Init|keydown|Number|slides|touchmove'.split('|'),0,{}))
;















