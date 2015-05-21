if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());if(!window.DM){DM={_apiKey:null,_session:null,_userStatus:"unknown",_logging:true,_domain:{api:"https://api.dailymotion.com",oauthAuthorizeUrl:"https://www.dailymotion.com/oauth/authorize",www:"//www.dailymotion.com",cdn:"//api.dmcdn.net"},copy:function(e,d,b,a){for(var c in d){if(b||typeof e[c]==="undefined"){e[c]=a?a(d[c]):d[c]}}return e},create:function(d,g){var f=window.DM,a=d?d.split("."):[],j=a.length;for(var e=0;e<j;e++){var b=a[e];var h=f[b];if(!h){h=(g&&e+1==j)?g:{};f[b]=h}f=h}return f},provide:function(c,b,a){return DM.copy(typeof c=="string"?DM.create(c):c,b,a)},guid:function(){return"f"+(Math.random()*(1<<30)).toString(16).replace(".","")},log:function(a){if(DM._logging){if(window.Debug&&window.Debug.writeln){window.Debug.writeln(a)}else{if(window.console){window.console.log(a)}}}if(DM.Event){DM.Event.fire("dm.log",a)}},error:function(a){if(window.console){window.console.error(a)}if(DM.Event){DM.Event.fire("dm.error",a)}},$:function(a){if(typeof a=="string"){a=document.getElementById(a)}return a},parseBool:function(a){if(a===true||a===false){return a}if(a===0){return false}if(typeof a=="string"){return !a.match(/^(?:|false|no|off|0)$/i)}return !!a},type:function(e){if(!DM._class2type){DM._class2type={};var d="Boolean Number String Function Array Date RegExp Object".split(" ");for(var c=0,a=d.length;c<a;c++){var b=d[c];DM._class2type["[object "+b+"]"]=b.toLowerCase()}DM._class2type["[object Undefined]"]="undefined"}return e===null?String(e):DM._class2type[Object.prototype.toString.call(e)]||"object"}}}DM.provide("JSON",{stringify:function(a){if(window.Prototype&&Object.toJSON){return Object.toJSON(a)}else{return JSON.stringify(a)}},parse:function(a){return JSON.parse(a)},flatten:function(c){var d={};for(var a in c){if(c.hasOwnProperty(a)){var b=c[a];if(null===b||undefined===b){continue}else{if(typeof b=="string"){d[a]=b}else{d[a]=DM.JSON.stringify(b)}}}}return d}});DM.provide("Array",{indexOf:function(a,d){if(a.indexOf){return a.indexOf(d)}var c=a.length;if(c){for(var b=0;b<c;b++){if(a[b]===d){return b}}}return -1},merge:function(c,b){for(var a=0;a<b.length;a++){if(DM.Array.indexOf(c,b[a])<0){c.push(b[a])}}return c},flatten:function(a){for(var b in a){if(a.hasOwnProperty(b)){if(DM.type(a[b])=="array"){a[b]=a[b].join(",")}}}return a},filter:function(c,e){var a=[];for(var d=0;d<c.length;d++){if(e(c[d])){a.push(c[d])}}return a},keys:function(d,c){var a=[];for(var b in d){if(c||d.hasOwnProperty(b)){a.push(b)}}return a},map:function(a,c){var b=[];for(var d=0;d<a.length;d++){b.push(c(a[d]))}return b},forEach:function(f,d,e){if(!f){return}if(Object.prototype.toString.apply(f)==="[object Array]"||(!(f instanceof Function)&&typeof f.length=="number")){if(f.forEach){f.forEach(d)}else{for(var c=0,a=f.length;c<a;c++){d(f[c],c,f)}}}else{for(var b in f){if(e||f.hasOwnProperty(b)){d(f[b],b,f)}}}}});DM.provide("Cookie",{_domain:null,_enabled:false,setEnabled:function(a){DM.Cookie._enabled=a},getEnabled:function(){return DM.Cookie._enabled},load:function(){var a=decodeURIComponent(document.cookie).match("\\bdms_"+DM._apiKey+'="([^;]*)\\b'),b;if(a){b=DM.QS.decode(a[1]);b.expires=parseInt(b.expires,10);DM.Cookie._domain=b.base_domain}return b},setRaw:function(c,a,b){document.cookie="dms_"+DM._apiKey+'="'+c+'"'+(c&&a==0?"":"; expires="+new Date(a*1000).toGMTString())+"; path=/"+(b?"; domain=."+b:"");DM.Cookie._domain=b},set:function(a){if(a){DM.Cookie.setRaw(DM.QS.encode(a),a.expires,a.base_domain)}else{DM.Cookie.clear()}},clear:function(){DM.Cookie.setRaw("",0,DM.Cookie._domain)}});DM.provide("EventProvider",{subscribers:function(){if(!this._subscribersMap){this._subscribersMap={}}return this._subscribersMap},subscribe:function(b,a){var c=this.subscribers();if(!c[b]){c[b]=[a]}else{c[b].push(a)}},unsubscribe:function(b,a){var c=this.subscribers()[b];DM.Array.forEach(c,function(e,d){if(e==a){c[d]=null}})},monitor:function(b,d){if(!d()){var a=this,c=function(){if(d.apply(d,arguments)){a.unsubscribe(b,c)}};this.subscribe(b,c)}},clear:function(a){delete this.subscribers()[a]},fire:function(){var b=Array.prototype.slice.call(arguments),a=b.shift();DM.Array.forEach(this.subscribers()[a],function(c){if(c){c.apply(this,b)}})}});DM.provide("Event",DM.EventProvider);DM.provide("",{init:function(a){a=DM.copy(a||{},{logging:true});DM._apiKey=a.apiKey;if(!a.logging&&window.location.toString().indexOf("dm_debug=1")<0){DM._logging=false}if(DM._apiKey){DM.Cookie.setEnabled(a.cookie);a.session=a.session||DM.Auth._receivedSession||DM.Cookie.load();DM.Auth.setSession(a.session,a.session?"connected":"unknown");if(a.status){DM.getLoginStatus()}}}});window.setTimeout(function(){if(window.dmAsyncInit){dmAsyncInit()}},0);DM.provide("QS",{encode:function(d,a,b){a=a===undefined?"&":a;b=b===false?function(e){return e}:encodeURIComponent;var c=[];DM.Array.forEach(d,function(f,e){if(f!==null&&typeof f!="undefined"){c.push(b(e)+"="+b(f))}});c.sort();return c.join(a)},decode:function(f){var c=decodeURIComponent,e={},b=f.split("&"),a,d;for(a=0;a<b.length;a++){d=b[a].split("=",2);if(d&&d[0]){e[c(d[0])]=d[1]?c(d[1].replace(/\+/g,"%20")):""}}return e}});DM.provide("",{api:function(){DM.ApiServer.call.apply(DM.ApiServer,arguments)}});DM.provide("ApiServer",{type:null,METHODS:["get","post","delete"],_callbacks:{},_calls:[],call:function(){var c=Array.prototype.slice.call(arguments),f=c.shift(),e=c.shift(),h,g,a,b=false;while(typeof e!=="undefined"){var d=typeof e;if(d==="string"&&!h){h=e.toLowerCase()}else{if(d==="function"&&!a){a=e}else{if(d==="object"&&!g){g=DM.ApiServer.formatCallParams(e)}else{if(d==="boolean"&&!b){b=e}else{DM.log("Invalid argument passed to DM.api(): "+e);return}}}}e=c.shift()}h=h||"get";g=g||{};if(f[0]==="/"){f=f.substr(1)}if(DM.Array.indexOf(DM.ApiServer.METHODS,h)<0){DM.log("Invalid method passed to DM.api(): "+h);return}DM.ApiServer.transport(f,h,g,a,b)},formatCallParams:function(h){var e=h.subrequests,f=[],g="";if(e){var d=DM.type(e);if(d=="object"){for(fieldName in e){var b=e[fieldName],a=[];a.push(fieldName+".fields("+(b.fields||[]).join(",")+")");delete (b.fields);for(subRequestParam in b){a.push(subRequestParam+"("+b[subRequestParam]+")")}if(a.length){f.push(a.join("."))}}}else{throw new Error('Unexpected type "'+d+'" for "subrequests" parameter. Expected type: object')}delete (h.subrequests)}if(f.length){g=f.join(",")}if(h.fields){var c=DM.type(h.fields);if(c=="array"){h.fields.push(g);h.fields=h.fields.join(",")}else{if(c=="string"){if(h.fields.length){h.fields+=","+g}else{h.fields=g}}else{throw new Error('Unexpected type "'+c+'"  for "fields" parameter, Allowed types: array, string')}}}else{if(g){h.fields=g}}return h},getSimpleCallURL:function(a,b){var d=DM.QS.encode(b),c=d.length?(a.indexOf("?")>-1?"&":"?")+d:"";return DM._domain.api+"/"+a+c},transport:function(d,g,f,a,b){try{DM.ApiServer.xhr();DM.ApiServer.transport=DM.ApiServer.ajax;DM.ApiServer.type="ajax"}catch(c){DM.ApiServer.transport=DM.ApiServer.jsonp;DM.ApiServer.type="jsonp"}DM.ApiServer.transport(d,g,f,a,b)},jsonp:function(k,a,d,c){var e=DM.guid(),j=document.createElement("script"),h,i=5;d.method=a;d.callback="DM.ApiServer._callbacks."+e;var f=DM.getSession();if(f&&f.access_token&&!d.access_token){d.access_token=f.access_token}d=DM.Array.flatten(d);var b=DM.ApiServer.getSimpleCallURL(k,d);if(b.length>2000){throw new Error("JSONP only support a maximum of 2000 bytes of input.")}DM.ApiServer._callbacks[e]=function(g){if(c){c(g)}delete DM.ApiServer._callbacks[e];j.src=null;j.parentNode.removeChild(j);if(h){clearTimeout(h);h=null}};j.async=true;j.src=b;document.getElementsByTagName("head")[0].appendChild(j);h=setTimeout(function(){DM.ApiServer._callbacks[e]({error:{code:500,message:"The request has timed out",type:"transport_error"}})},i*1000)},ajax:function(d,f,e,a,b){var c={path:d,method:f,params:e,cb:a};if(!b){DM.ApiServer._calls.push(c);DM.ApiServer.ajaxHandleQueue()}else{DM.ApiServer.performSimpleCall(d,f,e,a)}},ajaxHandleQueue:function(){if(!DM.ApiServer._callTimeout&&DM.ApiServer._calls.length>0){DM.ApiServer._callTimeout=setTimeout(function(){DM.ApiServer.performMultipleCalls(DM.ApiServer._calls);DM.ApiServer._calls=[];delete DM.ApiServer._callTimeout},0)}else{if(DM.ApiServer._calls.length==10){if(DM.ApiServer._callTimeout){clearTimeout(DM.ApiServer._callTimeout);delete DM.ApiServer._callTimeout}DM.ApiServer.performMultipleCalls(DM.ApiServer._calls);DM.ApiServer._calls=[]}}},performSimpleCall:function(d,g,f,a){var c=DM.getSession();if(c&&c.access_token&&!f.access_token){f.access_token=c.access_token}f=DM.Array.flatten(f);var b=DM.ApiServer.getSimpleCallURL(d,f);var e=DM.ApiServer.xhr();e.open(g,b);e.setRequestHeader("Content-type","application/x-www-form-urlencoded");e.send();e.onreadystatechange=function(){if(e.readyState==4){var h={error:{code:500,message:"Invalid server response",type:"transport_error"}},i;if(e.status){try{i=DM.JSON.parse(e.responseText)}catch(j){}}if(DM.type(i)!="object"){i=h;DM.error("Cannot parse call response data "+e.responseText)}if(a){a(i)}}}},performMultipleCalls:function(d){var c=[],h=DM._domain.api;for(var b=0,a=d.length;b<a;b++){var e=d[b];c.push({call:e.method.toUpperCase()+" /"+e.path,args:e.params,id:b})}var f=DM.getSession();if(f&&f.access_token){h+="?access_token="+encodeURIComponent(f.access_token)}var g=DM.ApiServer.xhr();g.open("POST",h);g.setRequestHeader("Content-type","application/x-www-form-urlencoded");g.send(DM.JSON.stringify(c));g.onreadystatechange=function(){if(g.readyState==4){var j={error:{code:500,message:"Invalid server response",type:"transport_error"}},p;if(g.status){try{p=DM.JSON.parse(g.responseText)}catch(q){}}var n=DM.type(p);if(n=="array"){for(var o=0,k=p.length;o<k;o++){var m=p[o];e="id" in m&&d[m.id]?d[m.id]:null;if(!e){DM.error("Response with no valid call id: "+DM.JSON.stringify(m));continue}if(e.cb){if("result" in m){e.cb(m.result)}else{if("error" in m){e.cb({error:m.error})}else{e.cb({error:{code:500,message:"Missing result or error key",type:"transport_error"}})}}}d[m.id]=null}}else{if(n=="object"&&"error" in p){j=p}else{DM.error("Cannot parse multicall response data "+g.responseText)}}DM.Array.forEach(d,function(i){if(i&&i.cb){i.cb(j)}})}}},xhr:function(){var a=new window.XMLHttpRequest();if(!("withCredentials" in a)){throw new Error("Browser is not CORS capable")}return a}});DM.provide("",{getLoginStatus:function(a){if(a){a({status:DM._userStatus,session:DM._session})}},getSession:function(){if(DM._session&&"expires" in DM._session&&new Date().getTime()>DM._session.expires*1000){DM.Auth.setSession(null,"notConnected")}return DM._session},login:function(g,a){var f=typeof window.screenX!="undefined"?window.screenX:window.screenLeft,d=typeof window.screenY!="undefined"?window.screenY:window.screenTop,l=typeof window.outerWidth!="undefined"?window.outerWidth:document.documentElement.clientWidth,j=typeof window.outerHeight!="undefined"?window.outerHeight:(document.documentElement.clientHeight-22),b=500,k=520,e=parseInt(f+((l-b)/2),10),i=parseInt(d+((j-k)/2.5),10),c="width="+b+",height="+k+",left="+e+",top="+i+",status,scrollbars=yes";a=DM.copy(a||{},{client_id:DM._apiKey,response_type:"token",display:"popup",scope:"",redirect_uri:document.location.href,state:"dmauth_"+DM.guid()});if(a.display==="popup"){var h=window.open(DM._domain.oauthAuthorizeUrl+"?"+DM.QS.encode(a),"dmauth",c);DM.Auth._active[a.state]={cb:g?g:function(){},win:h};DM.Auth._popupMonitor()}else{location.href=DM._domain.oauthAuthorizeUrl+"?"+DM.QS.encode(a)}},logout:function(a){DM.api("/logout",a);DM.Auth.setSession(null,"notConnected")}});DM.provide("Auth",{_active:{},_receivedSession:null,loadSiteSession:function(){if(window.location.host.match(/dailymotion\.com$/)){var a=document.cookie.match(/\bsid=([a-f0-9]+)/);if(a){DM.Auth.setSession({access_token:a[1]})}}},readFragment:function(){var b=window.location.hash.replace("%23","#"),a=b.substr(b.lastIndexOf("#")+1);if(a.indexOf("access_token=")>=0||a.indexOf("error=")>=0){var c=DM.QS.decode(a);if(window.opener&&window.opener.DM.Auth.setSession&&window.name=="dmauth"&&window.opener.name!="dmauth"){document.documentElement.style.display="none";window.opener.DM.Auth.recvSession(c)}else{if(c&&("state" in c)&&c.state.indexOf("dmauth_")==0){if("access_token" in c){DM.Auth._receivedSession=c}window.location.hash=b.substr(0,b.lastIndexOf("#"))}}}},recvSession:function(a){if(!a){DM.error("Received invalid session")}if("error" in a){DM.error("Received auth error `"+a.error+"': "+a.error_description)}if(!("state" in a)){DM.error("Received a session with not `state' field");return}if(!(a.state in DM.Auth._active)){DM.error("Received a session from an inactive window");return}DM.Auth._active[a.state].session=a},setSession:function(h,c){var e=!DM._session&&h,b=DM._session&&!h,g=false,a=e||b||(DM._session&&h&&DM._session.access_token!=h.access_token),f=c!=DM._userStatus;if(h&&"expires_in" in h){h.expires=Math.round(new Date().getTime()/1000)+parseInt(h.expires_in,10);delete h.expires_in}var d={session:h,status:c};DM._session=h;DM._userStatus=c;if(a&&DM.Cookie&&DM.Cookie.getEnabled()){DM.Cookie.set(h)}if(f){DM.Event.fire("auth.statusChange",d)}if(b||g){DM.Event.fire("auth.logout",d)}if(e||g){DM.Event.fire("auth.login",d)}if(a){DM.Event.fire("auth.sessionChange",d)}return d},_popupMonitor:function(){for(var f in DM.Auth._active){if("win" in DM.Auth._active[f]){try{if(DM.Auth._active[f].win.closed){delete DM.Auth._active[f].win;DM.Auth.recvSession({error:"access_denied",error_description:"Client closed the window",state:f})}}catch(d){}}if("session" in DM.Auth._active[f]){var a=DM.Auth._active[f];delete DM.Auth._active[f];var c=a.session;if("access_token" in c){DM.Auth.setSession(c,"connected")}else{DM.Auth.setSession(null,"notConnected")}if("win" in a){a.win.close()}if("cb" in a){a.cb({status:DM._userStatus,session:DM._session})}}}var b=false;for(var f in DM.Auth._active){b=true;break}if(b&&!DM.Auth._popupInterval){DM.Auth._popupInterval=window.setInterval(DM.Auth._popupMonitor,100)}else{if(!b&&DM.Auth._popupInterval){window.clearInterval(DM.Auth._popupInterval);DM.Auth._popupInterval=null}}}});DM.Auth.loadSiteSession();DM.Auth.readFragment();DM.provide("XDCom",{_swfPath:"/xdcom.swf",createChannel:function(f,g){if(!DM.XDCom.capable()){return}var d="",h=DM.guid(),b="id="+h;if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){d='<embed type="application/x-shockwave-flash" id="DMXDCom" width=0 height=0 src="'+DM._domain.cdn+DM.XDCom._swfPath+'" flashvars="'+b+'" allowscriptaccess="always"></embed>'}else{d='<object id="DMXDCom" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">  <param name="movie" value="'+DM._domain.cdn+DM.XDCom._swfPath+'"></param>  <param name="flashvars" value="'+b+'"></param>  <param name="allowScriptAccess" value="always"></param></object>'}var c,a=document.createElement("div"),e=a.style;e.position="absolute";e.top="-10000px";e.width=e.height=0;document.body.appendChild(a);window.onDMXDComMessage=f;window.onDMXDComReady=function(){c.addListener("onDMXDComMessage");if(g){g()}};a.innerHTML=d;c=document.getElementById("DMXDCom");c.connectionId=h;return c},capable:function(){if(!("_capable" in DM.XDCom)){DM.XDCom._capable=DM.XDCom.getFlashVersion().split(",").shift()>=9}return DM.XDCom._capable},getFlashVersion:function getFlashVersion(){try{try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{a.AllowScriptAccess="always"}catch(b){return"6,0,0"}}catch(b){}return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(b){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}}catch(b){}}return"0,0,0"}});DM.provide("",{player:function(b,a){return DM.Player.create(b,a)}});DM.provide("Player",{_INSTANCES:{},_INTERVAL_ID:null,_PROTOCOL:null,API_MODE:null,EVENT_HANDLERS:{},apiReady:false,autoplay:false,currentTime:0,bufferedTime:0,duration:NaN,seeking:false,error:null,ended:false,muted:false,volume:1,paused:true,fullscreen:false,rebuffering:false,play:function(){this.api("play")},togglePlay:function(){this.api("toggle-play")},pause:function(){this.api("pause")},seek:function(a){this.api("seek",a)},load:function(a){this.api("load",a)},setMuted:function(a){this.api("muted",a)},toggleMuted:function(){this.api("toggle-muted")},setVolume:function(a){this.api("volume",a)},setFullscreen:function(a){this.api("fullscreen",a)},watchOnSite:function(a){this.api("watch-on-site")},api:function(b,a){if(typeof a!=="undefined"){b+="="+a}this._send(b)},create:function(d,b){d=DM.$(d);if(!d||d.nodeType!=1){throw new Error("Invalid first argument sent to DM.player(), requires a HTML element or element id: "+d)}if(!b||typeof b!="object"){throw new Error("Missing `options' parameter for DM.player()")}b=DM.copy(b,{width:480,height:270,title:"video player",params:{},events:{}});if(location.search.length>1&&location.search.indexOf("dm:params")!==-1){var e=DM.QS.decode(location.search.substr(1));if("dm:params" in e){b.params=DM.copy(DM.QS.decode(e["dm:params"]),b.params)}}DM._domain.www=DM._domain.www.replace(/^https?\:/,"");DM.Player._PROTOCOL=(window.location&&/^https?:$/.test(window.location.protocol))?window.location.protocol:"http:";var c=document.createElement("iframe");DM.Array.forEach(["id","style","class"],function(f){var g=d.getAttribute(f);if(g){c.setAttribute(f,g)}});c.setAttribute("frameborder","0");c.setAttribute("allowfullscreen","true");c.setAttribute("webkitallowfullscreen","true");c.setAttribute("mozallowfullscreen","true");c.title="Dailymotion "+b.title;c.type="text/html";c.width=b.width;c.height=b.height;d.parentNode.replaceChild(c,d);DM.copy(c,DM.Player);c.init(b.video,b.params);if(typeof b.events=="object"){for(var a in b.events){c.addEventListener(a,b.events[a],false)}}return c},init:function(b,c){var a=this;DM.Player._installHandlers(function(){a._send("check")});c=typeof c=="object"?c:{};c.api=DM.Player.API_MODE;if(location.origin){c.origin=location.origin}else{c.origin="*"}if(DM.Player.API_MODE=="xdcom"){c.xdcomId=DM.Player.xdcomChannel.connectionId}if(DM._apiKey){c.apiKey=DM._apiKey}this.id=c.id=this.id?this.id:DM.guid();this.src=DM.Player._PROTOCOL+DM._domain.www+"/embed"+(b?"/video/"+b:"")+"?"+DM.QS.encode(c);if(DM.Player._INSTANCES[this.id]!=this){DM.Player._INSTANCES[this.id]=this;this.addEventListener("unload",function(){delete DM.Player._INSTANCES[this.id]})}this.autoplay=DM.parseBool(c.autoplay)},_installHandlers:function(b){if(DM.Player.API_MODE!==null){return}if(window.postMessage){DM.Player.API_MODE="postMessage";var a=function(f){if(!f.origin||f.origin.indexOf(DM.Player._PROTOCOL+DM._domain.www)!==0){return}var d=DM.QS.decode(f.data);if(!d.id||!d.event){return}var c=DM.$(d.id);c._recvEvent(d)};if(window.addEventListener){window.addEventListener("message",a,false)}else{if(window.attachEvent){window.attachEvent("onmessage",a)}}}else{if(DM.XDCom.capable()){DM.Player.API_MODE="xdcom";DM.Player.xdcomChannel=DM.XDCom.createChannel(function(e){var d=DM.QS.decode(e);if(!d.id||!d.event){return}var c=DM.$(d.id);c._recvEvent(d)},b)}}if(DM.Player.API_MODE===null){DM.Player.API_MODE="fragment";return;if(!DM.Player._INTERVAL_ID){DM.Player._INTERVAL_ID=setInterval(function(){for(var f in DM.Player._INSTANCES){var c=DM.Player._INSTANCES[f],e;if((e=c.src.indexOf("#"))!=-1){var d=DM.QS.decode(src.substring(e+1));c.src=src.substring(0,e);if(d.id&&d.event){c._recvEvent(d)}}}if(DM.Player._INSTANCES.length===0){clearInterval(DM.Player._INTERVAL_ID)}},0)}}},_send:function(b){switch(DM.Player.API_MODE){case"postMessage":this.contentWindow.postMessage(b,DM.Player._PROTOCOL+DM._domain.www);break;case"xdcom":DM.Player.xdcomChannel.postMessage(this.id,b);break;case"fragment":var a=this.src,c;if((c=a.indexOf("#"))!=-1){a=a.substring(0,c)}this.src=a+"#"+b;break}},_dispatch:document.createEvent?function(a){var b=document.createEvent("HTMLEvents");b.initEvent(a,true,true);this.dispatchEvent(b)}:function(a){if("on"+a in this){b=document.createEventObject();this.fireEvent("on"+a,b)}else{if(a in this.EVENT_HANDLERS){var b={type:a,target:this};DM.Array.forEach(this.EVENT_HANDLERS[a],function(c){c(b)})}}},_recvEvent:function(a){switch(a.event){case"apiready":if(this.apiReady){return}else{this.apiReady=true}break;case"loadedmetadata":this.error=null;this.ended=false;break;case"timeupdate":case"ad_timeupdate":this.currentTime=parseFloat(a.time);break;case"progress":this.bufferedTime=parseFloat(a.time);break;case"durationchange":this.duration=parseFloat(a.duration);break;case"seeking":this.seeking=true;this.currentTime=parseFloat(a.time);break;case"seeked":this.seeking=false;this.currentTime=parseFloat(a.time);break;case"fullscreenchange":this.fullscreen=DM.parseBool(a.fullscreen);break;case"volumechange":this.volume=parseFloat(a.volume);this.muted=DM.parseBool(a.muted);break;case"ad_start":case"ad_play":case"playing":case"play":this.paused=false;break;case"ended":this.ended=true;break;case"ad_pause":case"ad_end":case"ended":case"pause":this.paused=true;break;case"error":this.error={code:a.code,title:a.title,message:a.message};break;case"rebuffer":this.rebuffering=DM.parseBool(a.rebuffering);break}this._dispatch(a.event)},addEventListener:function(b,c,a){if("on"+b in this&&this.attachEvent){this.attachEvent("on"+b,c,a)}else{if(!(b in this.EVENT_HANDLERS)){this.EVENT_HANDLERS[b]=[]}this.EVENT_HANDLERS[b].push(c)}}});