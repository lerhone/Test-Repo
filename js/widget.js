/**
 * Twitter - http://twitter.com
 * Copyright (C) 2010 Twitter
 * Author: Dustin Diaz (dustin@twitter.com)
 *
 * V 2.2.5 Twitter search/profile/faves/list widget
 * http://twitter.com/widgets
 * For full documented source see http://twitter.com/javascripts/widgets/widget.js
 * Hosting and modifications of the original source IS allowed.
 */
TWTR=window.TWTR||{};if(!Array.forEach){Array.prototype.filter=function(E,F){var D=F||window;var A=[];for(var C=0,B=this.length;C<B;++C){if(!E.call(D,this[C],C,this)){continue}A.push(this[C])}return A};Array.prototype.indexOf=function(B,C){var C=C||0;for(var A=0;A<this.length;++A){if(this[A]===B){return A}}return -1}}(function(){if(TWTR&&TWTR.Widget){return }function B(D,G,C){for(var F=0,E=D.length;F<E;++F){G.call(C||window,D[F],F,D)}}function A(C,E,D){this.el=C;this.prop=E;this.from=D.from;this.to=D.to;this.time=D.time;this.callback=D.callback;this.animDiff=this.to-this.from}A.canTransition=function(){var C=document.createElement("twitter");C.style.cssText="-webkit-transition: all .5s linear;";return !!C.style.webkitTransitionProperty}();A.prototype._setStyle=function(C){switch(this.prop){case"opacity":this.el.style[this.prop]=C;this.el.style.filter="alpha(opacity="+C*100+")";break;default:this.el.style[this.prop]=C+"px";break}};A.prototype._animate=function(){var C=this;this.now=new Date();this.diff=this.now-this.startTime;if(this.diff>this.time){this._setStyle(this.to);if(this.callback){this.callback.call(this)}clearInterval(this.timer);return }this.percentage=(Math.floor((this.diff/this.time)*100)/100);this.val=(this.animDiff*this.percentage)+this.from;this._setStyle(this.val)};A.prototype.start=function(){var C=this;this.startTime=new Date();this.timer=setInterval(function(){C._animate.call(C)},15)};TWTR.Widget=function(C){this.init(C)};(function(){var R={};var O=location.protocol.match(/https/);var Q=/^.+\/profile_images/;var W="https://s3.amazonaws.com/twitter_production/profile_images";var f={};var d=function(h){var g=f[h];if(!g){g=new RegExp("(?:^|\\s+)"+h+"(?:\\s+|$)");f[h]=g}return g};var D=function(l,p,m,n){var p=p||"*";var m=m||document;var h=[],g=m.getElementsByTagName(p),o=d(l);for(var j=0,k=g.length;j<k;++j){if(o.test(g[j].className)){h[h.length]=g[j];if(n){n.call(g[j],g[j])}}}return h};var e=function(){var g=navigator.userAgent;return{ie:g.match(/MSIE\s([^;]*)/)}}();var H=function(g){if(typeof g=="string"){return document.getElementById(g)}return g};var X=function(g){return g.replace(/^\s+|\s+$/g,"")};var V=function(){var g=self.innerHeight;var h=document.compatMode;if((h||e.ie)){g=(h=="CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight}return g};var c=function(i,g){var h=i.target||i.srcElement;return g(h)};var T=function(h){try{if(h&&3==h.nodeType){return h.parentNode}else{return h}}catch(g){}};var U=function(h){var g=h.relatedTarget;if(!g){if(h.type=="mouseout"){g=h.toElement}else{if(h.type=="mouseover"){g=h.fromElement}}}return T(g)};var Z=function(h,g){g.parentNode.insertBefore(h,g.nextSibling)};var a=function(h){try{h.parentNode.removeChild(h)}catch(g){}};var Y=function(g){return g.firstChild};var C=function(i){var h=U(i);while(h&&h!=this){try{h=h.parentNode}catch(g){h=this}}if(h!=this){return true}return false};var G=function(){if(document.defaultView&&document.defaultView.getComputedStyle){return function(h,k){var j=null;var i=document.defaultView.getComputedStyle(h,"");if(i){j=i[k]}var g=h.style[k]||j;return g}}else{if(document.documentElement.currentStyle&&e.ie){return function(g,i){var h=g.currentStyle?g.currentStyle[i]:null;return(g.style[i]||h)}}}}();var b={has:function(g,h){return new RegExp("(^|\\s)"+h+"(\\s|$)").test(H(g).className)},add:function(g,h){if(!this.has(g,h)){H(g).className=X(H(g).className)+" "+h}},remove:function(g,h){if(this.has(g,h)){H(g).className=H(g).className.replace(new RegExp("(^|\\s)"+h+"(\\s|$)","g"),"")}}};var E={add:function(i,h,g){if(i.addEventListener){i.addEventListener(h,g,false)}else{i.attachEvent("on"+h,function(){g.call(i,window.event)})}},remove:function(i,h,g){if(i.removeEventListener){i.removeEventListener(h,g,false)}else{i.detachEvent("on"+h,g)}}};var N=function(){function h(j){return parseInt((j).substring(0,2),16)}function g(j){return parseInt((j).substring(2,4),16)}function i(j){return parseInt((j).substring(4,6),16)}return function(j){return[h(j),g(j),i(j)]}}();var I={bool:function(g){return typeof g==="boolean"},def:function(g){return !(typeof g==="undefined")},number:function(g){return typeof g==="number"&&isFinite(g)},string:function(g){return typeof g==="string"},fn:function(g){return typeof g==="function"},array:function(g){if(g){return I.number(g.length)&&I.fn(g.splice)}return false}};var M=["January","February","March","April","May","June","July","August","September","October","November","December"];var S=function(j){var m=new Date(j);if(e.ie){m=Date.parse(j.replace(/( \+)/," UTC$1"))}var h="";var g=function(){var n=m.getHours();if(n>0&&n<13){h="am";return n}else{if(n<1){h="am";return 12}else{h="pm";return n-12}}}();var i=m.getMinutes();var l=m.getSeconds();function k(){var n=new Date();if(n.getDate()!=m.getDate()||n.getYear()!=m.getYear()||n.getMonth()!=m.getMonth()){return" - "+M[m.getMonth()]+" "+m.getDate()+", "+m.getFullYear()}else{return""}}return g+":"+i+h+k()};var K=function(m){var o=new Date();var k=new Date(m);if(e.ie){k=Date.parse(m.replace(/( \+)/," UTC$1"))}var n=o-k;var h=1000,i=h*60,j=i*60,l=j*24,g=l*7;if(isNaN(n)||n<0){return""}if(n<h*2){return"right now"}if(n<i){return Math.floor(n/h)+" seconds ago"}if(n<i*2){return"about 1 minute ago"}if(n<j){return Math.floor(n/i)+" minutes ago"}if(n<j*2){return"about 1 hour ago"}if(n<l){return Math.floor(n/j)+" hours ago"}if(n>l&&n<l*2){return"yesterday"}if(n<l*365){return Math.floor(n/l)+" days ago"}else{return"over a year ago"}};var F={link:function(g){return g.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g,function(m,l,j,i,h){var k=j.match(/w/)?"http://":"";return'<a class="twtr-hyperlink" target="_blank" href="'+k+l+'">'+((l.length>25)?l.substr(0,24)+"...":l)+"</a>"+h})},at:function(g){return g.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g,function(h,i){return'@<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+i+'">'+i+"</a>"})},list:function(g){return g.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g,function(h,i){return'@<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+i+'">'+i+"</a>"})},hash:function(g){return g.replace(/(^|\s+)#(\w+)/gi,function(h,i,j){return i+'<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23'+j+'">#'+j+"</a>"})},clean:function(g){return this.hash(this.at(this.list(this.link(g))))}};function P(h,i,g){this.job=h;this.decayFn=i;this.interval=g;this.decayRate=1;this.decayMultiplier=1.25;this.maxDecayTime=3*60*1000}P.prototype={start:function(){this.stop().run();return this},stop:function(){if(this.worker){window.clearTimeout(this.worker)}return this},run:function(){var g=this;this.job(function(){g.decayRate=g.decayFn()?Math.max(1,g.decayRate/g.decayMultiplier):g.decayRate*g.decayMultiplier;var h=g.interval*g.decayRate;h=(h>=g.maxDecayTime)?g.maxDecayTime:h;h=Math.floor(h);g.worker=window.setTimeout(function(){g.run.call(g)},h)})},destroy:function(){this.stop();this.decayRate=1;return this}};function J(h,g,i){this.time=h||6000;this.loop=g||false;this.repeated=0;this.callback=i;this.haystack=[]}J.prototype={set:function(g){this.haystack=g},add:function(g){this.haystack.unshift(g)},start:function(){if(this.timer){return this}this._job();var g=this;this.timer=setInterval(function(){g._job.call(g)},this.time);return this},stop:function(){if(this.timer){window.clearInterval(this.timer);this.timer=null}return this},_next:function(){var g=this.haystack.shift();if(g&&this.loop){this.haystack.push(g)}return g||null},_job:function(){var g=this._next();if(g){this.callback(g)}return this}};function L(i){function g(){if(i.needle.metadata&&i.needle.metadata.result_type&&i.needle.metadata.result_type=="popular"){return'<span class="twtr-popular">'+i.needle.metadata.recent_retweets+"+ recent retweets</span>"}else{return""}}if(O){i.avatar=i.avatar.replace(Q,W)}var h='<div class="twtr-tweet-wrap">         <div class="twtr-avatar">           <div class="twtr-img"><a target="_blank" href="http://twitter.com/'+i.user+'"><img alt="'+i.user+' profile" src="'+i.avatar+'"></a></div>         </div>         <div class="twtr-tweet-text">           <p>             <a target="_blank" href="http://twitter.com/'+i.user+'" class="twtr-user">'+i.user+"</a> "+i.tweet+'             <em>            <a target="_blank" class="twtr-timestamp" time="'+i.timestamp+'" href="http://twitter.com/'+i.user+"/status/"+i.id+'">'+i.created_at+'</a>             <a target="_blank" class="twtr-reply" href="http://twitter.com/?status=@'+i.user+"%20&in_reply_to_status_id="+i.id+"&in_reply_to="+i.user+'">reply</a>             </em> '+g()+"           </p>         </div>       </div>";var j=document.createElement("div");j.id="tweet-id-"+ ++L._tweetCount;j.className="twtr-tweet";j.innerHTML=h;this.element=j}L._tweetCount=0;R.loadStyleSheet=function(i,h){if(!TWTR.Widget.loadingStyleSheet){TWTR.Widget.loadingStyleSheet=true;var g=document.createElement("link");g.href=i;g.rel="stylesheet";g.type="text/css";document.getElementsByTagName("head")[0].appendChild(g);var j=setInterval(function(){var k=G(h,"position");if(k=="relative"){clearInterval(j);j=null;TWTR.Widget.hasLoadedStyleSheet=true}},50)}};(function(){var g=false;R.css=function(j){var i=document.createElement("style");i.type="text/css";if(e.ie){i.styleSheet.cssText=j}else{var k=document.createDocumentFragment();k.appendChild(document.createTextNode(j));i.appendChild(k)}function h(){document.getElementsByTagName("head")[0].appendChild(i)}if(!e.ie||g){h()}else{window.attachEvent("onload",function(){g=true;h()})}}})();TWTR.Widget.isLoaded=false;TWTR.Widget.loadingStyleSheet=false;TWTR.Widget.hasLoadedStyleSheet=false;TWTR.Widget.WIDGET_NUMBER=0;TWTR.Widget.matches={mentions:/^@[a-zA-Z0-9_]{1,20}\b/,any_mentions:/\b@[a-zA-Z0-9_]{1,20}\b/};TWTR.Widget.jsonP=function(h,i){var g=document.createElement("script");g.type="text/javascript";g.src=h;document.body.insertBefore(g,document.body.firstChild);i(g);return g};TWTR.Widget.prototype=function(){var j=O?"https://":"http://";var l=j+"search.twitter.com/search.";var m=j+"api.twitter.com/1/statuses/user_timeline.";var i=j+"twitter.com/favorites/";var k=j+"twitter.com/";var h=25000;var g=O?"https://twitter-widgets.s3.amazonaws.com/j/1/default.gif":"http://widgets.twimg.com/j/1/default.gif";return{init:function(o){var n=this;this._widgetNumber=++TWTR.Widget.WIDGET_NUMBER;TWTR.Widget["receiveCallback_"+this._widgetNumber]=function(p){n._prePlay.call(n,p)};this._cb="TWTR.Widget.receiveCallback_"+this._widgetNumber;this.opts=o;this._base=l;this._isRunning=false;this._hasOfficiallyStarted=false;this._hasNewSearchResults=false;this._rendered=false;this._profileImage=false;this._isCreator=!!o.creator;this._setWidgetType(o.type);this.timesRequested=0;this.runOnce=false;this.newResults=false;this.results=[];this.jsonMaxRequestTimeOut=19000;this.showedResults=[];this.sinceId=1;this.source="TWITTERINC_WIDGET";this.id=o.id||"twtr-widget-"+this._widgetNumber;this.tweets=0;this.setDimensions(o.width,o.height);this.interval=o.interval||6000;this.format="json";this.rpp=o.rpp||50;this.subject=o.subject||"";this.title=o.title||"";this.setFooterText(o.footer);this.setSearch(o.search);this._setUrl();this.theme=o.theme?o.theme:this._getDefaultTheme();if(!o.id){document.write('<div class="twtr-widget" id="'+this.id+'"></div>')}this.widgetEl=H(this.id);if(o.id){b.add(this.widgetEl,"twtr-widget")}if(o.version>=2&&!TWTR.Widget.hasLoadedStyleSheet){if(O){R.loadStyleSheet("https://twitter-widgets.s3.amazonaws.com/j/2/widget.css",this.widgetEl)}else{if(o.creator){R.loadStyleSheet("/stylesheets/widgets/widget.css",this.widgetEl)}else{R.loadStyleSheet("http://widgets.twimg.com/j/2/widget.css",this.widgetEl)}}}this.occasionalJob=new P(function(p){n.decay=p;n._getResults.call(n)},function(){return n._decayDecider.call(n)},h);this._ready=I.fn(o.ready)?o.ready:function(){};this._isRelativeTime=true;this._tweetFilter=false;this._avatars=true;this._isFullScreen=false;this._isLive=true;this._isScroll=false;this._loop=true;this._showTopTweets=(this._isSearchWidget)?true:false;this._behavior="default";this.setFeatures(this.opts.features);this.intervalJob=new J(this.interval,this._loop,function(p){n._normalizeTweet(p)});return this},setDimensions:function(n,o){this.wh=(n&&o)?[n,o]:[250,300];if(n=="auto"||n=="100%"){this.wh[0]="100%"}else{this.wh[0]=((this.wh[0]<150)?150:this.wh[0])+"px"}this.wh[1]=((this.wh[1]<100)?100:this.wh[1])+"px";return this},setRpp:function(n){var n=parseInt(n);this.rpp=(I.number(n)&&(n>0&&n<=100))?n:30;return this},_setWidgetType:function(n){this._isSearchWidget=false,this._isProfileWidget=false,this._isFavsWidget=false,this._isListWidget=false;switch(n){case"profile":this._isProfileWidget=true;break;case"search":this._isSearchWidget=true,this.search=this.opts.search;break;case"faves":case"favs":this._isFavsWidget=true;break;case"list":case"lists":this._isListWidget=true;break}return this},setFeatures:function(o){if(o){if(I.def(o.filters)){this._tweetFilter=o.filters}if(I.def(o.dateformat)){this._isRelativeTime=!!(o.dateformat!=="absolute")}if(I.def(o.fullscreen)&&I.bool(o.fullscreen)){if(o.fullscreen){this._isFullScreen=true;this.wh[0]="100%";this.wh[1]=(V()-90)+"px";var p=this;E.add(window,"resize",function(s){p.wh[1]=V();p._fullScreenResize()})}}if(I.def(o.loop)&&I.bool(o.loop)){this._loop=o.loop}if(I.def(o.behavior)&&I.string(o.behavior)){switch(o.behavior){case"all":this._behavior="all";break;case"preloaded":this._behavior="preloaded";break;default:this._behavior="default";break}}if(I.def(o.toptweets)&&I.bool(o.toptweets)){this._showTopTweets=o.toptweets;var n=(this._showTopTweets)?"inline-block":"none";R.css("#"+this.id+" .twtr-popular { display: "+n+"; }")}if(!I.def(o.toptweets)){this._showTopTweets=true;var n=(this._showTopTweets)?"inline-block":"none";R.css("#"+this.id+" .twtr-popular { display: "+n+"; }")}if(I.def(o.avatars)&&I.bool(o.avatars)){if(!o.avatars){R.css("#"+this.id+" .twtr-avatar, #"+this.id+" .twtr-user { display: none; } #"+this.id+" .twtr-tweet-text { margin-left: 0; }");this._avatars=false}else{var q=(this._isFullScreen)?"90px":"40px";R.css("#"+this.id+" .twtr-avatar { display: block; } #"+this.id+" .twtr-user { display: inline; } #"+this.id+" .twtr-tweet-text { margin-left: "+q+"; }");this._avatars=true}}else{if(this._isProfileWidget){this.setFeatures({avatars:false});this._avatars=false}else{this.setFeatures({avatars:true});this._avatars=true}}if(I.def(o.hashtags)&&I.bool(o.hashtags)){(!o.hashtags)?R.css("#"+this.id+" a.twtr-hashtag { display: none; }"):""}if(I.def(o.timestamp)&&I.bool(o.timestamp)){var r=o.timestamp?"block":"none";R.css("#"+this.id+" em { display: "+r+"; }")}if(I.def(o.live)&&I.bool(o.live)){this._isLive=o.live}if(I.def(o.scrollbar)&&I.bool(o.scrollbar)){this._isScroll=o.scrollbar}}else{if(this._isProfileWidget){this.setFeatures({avatars:false});this._avatars=false}if(this._isProfileWidget||this._isFavsWidget){this.setFeatures({behavior:"all"})}}return this},_fullScreenResize:function(){var n=D("twtr-timeline","div",document.body,function(o){o.style.height=(V()-90)+"px"})},setTweetInterval:function(n){this.interval=n;return this},setBase:function(n){this._base=n;return this},setUser:function(o,n){this.username=o;this.realname=n||" ";if(this._isFavsWidget){this.setBase(i+o+".")}else{if(this._isProfileWidget){this.setBase(m+this.format+"?screen_name="+o)}}this.setSearch(" ");return this},setList:function(o,n){this.listslug=n.replace(/ /g,"-").toLowerCase();this.username=o;this.setBase(k+o+"/lists/"+this.listslug+"/statuses.");this.setSearch(" ");return this},setProfileImage:function(n){this._profileImage=n;this.byClass("twtr-profile-img","img").src=O?n.replace(Q,W):n;this.byClass("twtr-profile-img-anchor","a").href="http://twitter.com/"+this.username;return this},setTitle:function(n){this.title=n;this.widgetEl.getElementsByTagName("h3")[0].innerHTML=this.title;return this},setCaption:function(n){this.subject=n;this.widgetEl.getElementsByTagName("h4")[0].innerHTML=this.subject;return this},setFooterText:function(n){this.footerText=(I.def(n)&&I.string(n))?n:"Join the conversation";if(this._rendered){this.byClass("twtr-join-conv","a").innerHTML=this.footerText}return this},setSearch:function(o){this.searchString=o||"";this.search=encodeURIComponent(this.searchString);this._setUrl();if(this._rendered){var n=this.byClass("twtr-join-conv","a");n.href="http://twitter.com/"+this._getWidgetPath()}return this},_getWidgetPath:function(){if(this._isProfileWidget){return this.username}else{if(this._isFavsWidget){return this.username+"/favorites"}else{if(this._isListWidget){return this.username+"/lists/"+this.listslug}else{return"#search?q="+this.search}}}},_setUrl:function(){var o=this;function n(){return"&"+(+new Date)+"=cachebust"}function p(){return(o.sinceId==1)?"":"&since_id="+o.sinceId+"&refresh=true"}if(this._isProfileWidget){this.url=this._base+"&callback="+this._cb+"&include_rts=true&count="+this.rpp+p()+"&clientsource="+this.source}else{if(this._isFavsWidget||this._isListWidget){this.url=this._base+this.format+"?callback="+this._cb+p()+"&include_rts=true&clientsource="+this.source}else{this.url=this._base+this.format+"?q="+this.search+"&include_rts=true&callback="+this._cb+"&rpp="+this.rpp+p()+"&clientsource="+this.source;if(!this.runOnce){this.url+="&result_type=mixed"}}}this.url+=n();return this},_getRGB:function(n){return N(n.substring(1,7))},setTheme:function(t,n){var r=this;var p=" !important";var s=((window.location.hostname.match(/twitter\.com/))&&(window.location.pathname.match(/goodies/)));if(n||s){p=""}this.theme={shell:{background:function(){return t.shell.background||r._getDefaultTheme().shell.background}(),color:function(){return t.shell.color||r._getDefaultTheme().shell.color}()},tweets:{background:function(){return t.tweets.background||r._getDefaultTheme().tweets.background}(),color:function(){return t.tweets.color||r._getDefaultTheme().tweets.color}(),links:function(){return t.tweets.links||r._getDefaultTheme().tweets.links}()}};var q="#"+this.id+" .twtr-doc,                      #"+this.id+" .twtr-hd a,                      #"+this.id+" h3,                      #"+this.id+" h4,                      #"+this.id+" .twtr-popular {            background-color: "+this.theme.shell.background+p+";            color: "+this.theme.shell.color+p+";          }          #"+this.id+" .twtr-popular {            color: "+this.theme.tweets.color+p+";            background-color: rgba("+this._getRGB(this.theme.shell.background)+", .3)"+p+";          }          #"+this.id+" .twtr-tweet a {            color: "+this.theme.tweets.links+p+";          }          #"+this.id+" .twtr-bd, #"+this.id+" .twtr-timeline i a,           #"+this.id+" .twtr-bd p {            color: "+this.theme.tweets.color+p+";          }          #"+this.id+" .twtr-new-results,           #"+this.id+" .twtr-results-inner,           #"+this.id+" .twtr-timeline {            background: "+this.theme.tweets.background+p+";          }";if(e.ie){q+="#"+this.id+" .twtr-tweet { background: "+this.theme.tweets.background+p+"; }"}R.css(q);return this},byClass:function(q,n,o){var p=D(q,n,H(this.id));return(o)?p:p[0]},render:function(){var p=this;if(!TWTR.Widget.hasLoadedStyleSheet){window.setTimeout(function(){p.render.call(p)},50);return this}this.setTheme(this.theme,this._isCreator);if(this._isProfileWidget){b.add(this.widgetEl,"twtr-widget-profile")}if(this._isScroll){b.add(this.widgetEl,"twtr-scroll")}if(!this._isLive&&!this._isScroll){this.wh[1]="auto"}if(this._isSearchWidget&&this._isFullScreen){document.title="Twitter search: "+escape(this.searchString)}this.widgetEl.innerHTML=this._getWidgetHtml();var o=this.byClass("twtr-timeline","div");if(this._isLive&&!this._isFullScreen){var q=function(r){if(p._behavior==="all"){return }if(C.call(this,r)){p.pause.call(p)}};var n=function(r){if(p._behavior==="all"){return }if(C.call(this,r)){p.resume.call(p)}};this.removeEvents=function(){E.remove(o,"mouseover",q);E.remove(o,"mouseout",n)};E.add(o,"mouseover",q);E.add(o,"mouseout",n)}this._rendered=true;this._ready();return this},removeEvents:function(){},_getDefaultTheme:function(){return{shell:{background:"#8ec1da",color:"#ffffff"},tweets:{background:"#ffffff",color:"#444444",links:"#1985b5"}}},_getWidgetHtml:function(){var p=this;function r(){if(p._isProfileWidget){return'<a target="_blank" href="http://twitter.com/" class="twtr-profile-img-anchor"><img alt="profile" class="twtr-profile-img" src="'+g+'"></a>                      <h3></h3>                      <h4></h4>'}else{return"<h3>"+p.title+"</h3><h4>"+p.subject+"</h4>"}}function o(){return p._isFullScreen?" twtr-fullscreen":""}var q=O?"https://twitter-widgets.s3.amazonaws.com/i/widget-logo.png":"http://widgets.twimg.com/i/widget-logo.png";if(this._isFullScreen){q="https://twitter-widgets.s3.amazonaws.com/i/widget-logo-fullscreen.png"}var n='<div class="twtr-doc'+o()+'" style="width: '+this.wh[0]+';">            <div class="twtr-hd">'+r()+'             </div>            <div class="twtr-bd">              <div class="twtr-timeline" style="height: '+this.wh[1]+';">                <div class="twtr-tweets">                  <div class="twtr-reference-tweet"></div>                  <!-- tweets show here -->                </div>              </div>            </div>            <div class="twtr-ft">              <div><a target="_blank" href="http://twitter.com"><img alt="" src="'+q+'"></a>                <span><a target="_blank" class="twtr-join-conv" style="color:'+this.theme.shell.color+'" href="http://twitter.com/'+this._getWidgetPath()+'">'+this.footerText+"</a></span>              </div>            </div>          </div>";return n},_appendTweet:function(n){this._insertNewResultsNumber();Z(n,this.byClass("twtr-reference-tweet","div"));return this},_slide:function(o){var p=this;var n=Y(o).offsetHeight;if(this.runOnce){new A(o,"height",{from:0,to:n,time:500,callback:function(){p._fade.call(p,o)}}).start()}return this},_fade:function(n){var o=this;if(A.canTransition){n.style.webkitTransition="opacity 0.5s ease-out";n.style.opacity=1;return this}new A(n,"opacity",{from:0,to:1,time:500}).start();return this},_chop:function(){if(this._isScroll){return this}var s=this.byClass("twtr-tweet","div",true);var t=this.byClass("twtr-new-results","div",true);if(s.length){for(var p=s.length-1;p>=0;p--){var r=s[p];var q=parseInt(r.offsetTop);if(q>parseInt(this.wh[1])){a(r)}else{break}}if(t.length>0){var n=t[t.length-1];var o=parseInt(n.offsetTop);if(o>parseInt(this.wh[1])){a(n)}}}return this},_appendSlideFade:function(o){var n=o||this.tweet.element;this._chop()._appendTweet(n)._slide(n);return this},_createTweet:function(n){n.timestamp=n.created_at;n.created_at=this._isRelativeTime?K(n.created_at):S(n.created_at);this.tweet=new L(n);if(this._isLive&&this.runOnce){this.tweet.element.style.opacity=0;this.tweet.element.style.filter="alpha(opacity:0)";this.tweet.element.style.height="0"}return this},_getResults:function(){var n=this;this.timesRequested++;this.jsonRequestRunning=true;this.jsonRequestTimer=window.setTimeout(function(){if(n.jsonRequestRunning){clearTimeout(n.jsonRequestTimer);n.jsonRequestTimer=null}n.jsonRequestRunning=false;a(n.scriptElement);n.newResults=false;n.decay()},this.jsonMaxRequestTimeOut);TWTR.Widget.jsonP(n.url,function(o){n.scriptElement=o})},clear:function(){var o=this.byClass("twtr-tweet","div",true);var n=this.byClass("twtr-new-results","div",true);o=o.concat(n);B(o,function(p){a(p)});return this},_sortByMagic:function(n){var o=this;if(this._tweetFilter){if(this._tweetFilter.negatives){n=n.filter(function(p){if(!o._tweetFilter.negatives.test(p.text)){return p}})}if(this._tweetFilter.positives){n=n.filter(function(p){if(o._tweetFilter.positives.test(p.text)){return p}})}}switch(this._behavior){case"all":this._sortByLatest(n);break;case"preloaded":default:this._sortByDefault(n);break}if(this._isLive&&this._behavior!=="all"){this.intervalJob.set(this.results);this.intervalJob.start()}return this},_loadTopTweetsAtTop:function(p){var q=[],r=[],o=[];B(p,function(s){if(s.metadata&&s.metadata.result_type&&s.metadata.result_type=="popular"){r.push(s)}else{q.push(s)}});var n=r.concat(q);return n},_sortByLatest:function(n){this.results=n;this.results=this.results.slice(0,this.rpp);this.results=this._loadTopTweetsAtTop(this.results);this.results.reverse();return this},_sortByDefault:function(o){var p=this;var n=function(r){return new Date(r).getTime()};this.results.unshift.apply(this.results,o);B(this.results,function(r){if(!r.views){r.views=0}});this.results.sort(function(s,r){if(n(s.created_at)>n(r.created_at)){return -1}else{if(n(s.created_at)<n(r.created_at)){return 1}else{return 0}}});this.results=this.results.slice(0,this.rpp);this.results=this._loadTopTweetsAtTop(this.results);var q=this.results;this.results=this.results.sort(function(s,r){if(s.views<r.views){return -1}else{if(s.views>r.views){return 1}}return 0});if(!this._isLive){this.results.reverse()}},_prePlay:function(o){if(this.jsonRequestTimer){clearTimeout(this.jsonRequestTimer);this.jsonRequestTimer=null}if(!e.ie){a(this.scriptElement)}if(o.error){this.newResults=false}else{if(o.results&&o.results.length>0){this.response=o;this.newResults=true;this.sinceId=o.max_id;this._sortByMagic(o.results);if(this.isRunning()){this._play()}}else{if((this._isProfileWidget||this._isFavsWidget||this._isListWidget)&&I.array(o)&&o.length&&o.length>0){this.newResults=true;if(!this._profileImage&&this._isProfileWidget){var n=o[0].user.screen_name;this.setProfileImage(o[0].user.profile_image_url);this.setTitle(o[0].user.name);this.setCaption('<a target="_blank" href="http://twitter.com/'+n+'">'+n+"</a>")}this.sinceId=o[0].id;this._sortByMagic(o);if(this.isRunning()){this._play()}}else{this.newResults=false}}}this._setUrl();if(this._isLive){this.decay()}},_play:function(){var n=this;if(this.runOnce){this._hasNewSearchResults=true}if(this._avatars){this._preloadImages(this.results)}if(this._isRelativeTime&&(this._behavior=="all"||this._behavior=="preloaded")){B(this.byClass("twtr-timestamp","a",true),function(o){o.innerHTML=K(o.getAttribute("time"))})}if(!this._isLive||this._behavior=="all"||this._behavior=="preloaded"){B(this.results,function(p){if(p.retweeted_status){p=p.retweeted_status}if(n._isProfileWidget){p.from_user=p.user.screen_name;p.profile_image_url=p.user.profile_image_url}if(n._isFavsWidget||n._isListWidget){p.from_user=p.user.screen_name;p.profile_image_url=p.user.profile_image_url}n._createTweet({id:p.id,user:p.from_user,tweet:F.clean(p.text),avatar:p.profile_image_url,created_at:p.created_at,needle:p});var o=n.tweet.element;(n._behavior=="all")?n._appendSlideFade(o):n._appendTweet(o)});if(this._behavior!="preloaded"){return this}}return this},_normalizeTweet:function(o){var n=this;o.views++;if(this._isProfileWidget){o.from_user=n.username;o.profile_image_url=o.user.profile_image_url}if(this._isFavsWidget||this._isListWidget){o.from_user=o.user.screen_name;o.profile_image_url=o.user.profile_image_url}if(this._isFullScreen){o.profile_image_url=o.profile_image_url.replace(/_normal\./,"_bigger.")}this._createTweet({id:o.id,user:o.from_user,tweet:F.clean(o.text),avatar:o.profile_image_url,created_at:o.created_at,needle:o})._appendSlideFade()},_insertNewResultsNumber:function(){if(!this._hasNewSearchResults){this._hasNewSearchResults=false;return }if(this.runOnce&&this._isSearchWidget){var q=this.response.total>this.rpp?this.response.total:this.response.results.length;var n=q>1?"s":"";var p=(this.response.warning&&this.response.warning.match(/adjusted since_id/))?"more than":"";var o=document.createElement("div");b.add(o,"twtr-new-results");o.innerHTML='<div class="twtr-results-inner"> &nbsp; </div><div class="twtr-results-hr"> &nbsp; </div><span>'+p+" <strong>"+q+"</strong> new tweet"+n+"</span>";Z(o,this.byClass("twtr-reference-tweet","div"));this._hasNewSearchResults=false}},_preloadImages:function(n){if(this._isProfileWidget||this._isFavsWidget||this._isListWidget){B(n,function(p){var o=new Image();o.src=p.user.profile_image_url})}else{B(n,function(o){(new Image()).src=o.profile_image_url})}},_decayDecider:function(){var n=false;if(!this.runOnce){this.runOnce=true;n=true}else{if(this.newResults){n=true}}return n},start:function(){var n=this;if(!this._rendered){setTimeout(function(){n.start.call(n)},50);return this}if(!this._isLive){this._getResults()}else{this.occasionalJob.start()}this._isRunning=true;this._hasOfficiallyStarted=true;return this},stop:function(){this.occasionalJob.stop();if(this.intervalJob){this.intervalJob.stop()}this._isRunning=false;return this},pause:function(){if(this.isRunning()&&this.intervalJob){this.intervalJob.stop();b.add(this.widgetEl,"twtr-paused");this._isRunning=false}if(this._resumeTimer){clearTimeout(this._resumeTimer);this._resumeTimer=null}return this},resume:function(){var n=this;if(!this.isRunning()&&this._hasOfficiallyStarted&&this.intervalJob){this._resumeTimer=window.setTimeout(function(){n.intervalJob.start();n._isRunning=true;b.remove(n.widgetEl,"twtr-paused")},2000)}return this},isRunning:function(){return this._isRunning},destroy:function(){this.stop();this.clear();this.runOnce=false;this._hasOfficiallyStarted=false;this._profileImage=false;this._isLive=true;this._tweetFilter=false;this._isScroll=false;this.newResults=false;this._isRunning=false;this.sinceId=1;this.results=[];this.showedResults=[];this.occasionalJob.destroy();if(this.jsonRequestRunning){clearTimeout(this.jsonRequestTimer)}b.remove(this.widgetEl,"twtr-scroll");this.removeEvents();return this}}}()})()})();