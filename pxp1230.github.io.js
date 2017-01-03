d = document;
//判断是否是index.html
var isIndex=false;
var str=window.location.pathname;
a=str.substr(str.lastIndexOf("/")+1);
a=a.substr(0,a.lastIndexOf(".")).toLowerCase();
if(a==""||a=="index"){isIndex=true;}
//JSLoader
var JSLoader=function(){var scripts={};function getScript(url){var script=scripts[url];if(!script){script={loaded:false,funs:[]};scripts[url]=script;add(script,url)}return script}function run(script){var funs=script.funs,len=funs.length,i=0;for(;i<len;i++){var fun=funs.pop();fun()}}function add(script,url){var scriptdom=document.createElement('script');scriptdom.type='text/javascript';scriptdom.loaded=false;scriptdom.src=url;scriptdom.onload=function(){scriptdom.loaded=true;run(script);scriptdom.onload=scriptdom.onreadystatechange=null};scriptdom.onreadystatechange=function(){if((scriptdom.readyState==='loaded'||scriptdom.readyState==='complete')&&!scriptdom.loaded){run(script);scriptdom.onload=scriptdom.onreadystatechange=null}};document.getElementsByTagName('head')[0].appendChild(scriptdom)}return{load:function(url){var arg=arguments,len=arg.length,i=1,script=getScript(url),loaded=script.loaded;for(;i<len;i++){var fun=arg[i];if(typeof fun==='function'){if(loaded){fun()}else{script.funs.push(fun)}}}}}}();
if(!isIndex){
	//处理title
	var ch=d.title.charAt(d.title.length-1);
	if(ch==" "){
		d.title=d.title.substr(0,d.title.length-3);
	}else if(ch=="-"){
		d.title=d.title.substr(0,d.title.length-2);
	}
	//监听键盘事件
	d.onkeydown=function(e){if(typeof(disableListenKeyDownEvent)=='undefined'){if(e.keyCode==88||e.keyCode==27||e.keyCode==46){window.open('','_self');window.close()}else if(e.keyCode==37)window.open('index.html','_self')}}
}else{
	//监听键盘事件
	function FindFirstChar(str,ch){for(var i=0;i<str.length;i++){var testChar=str.charAt(i).toUpperCase();var testCharCode=testChar.charCodeAt(0);if((testCharCode<=57&&testCharCode>=48)||(testCharCode<=90&&testCharCode>=65)){if(testChar==ch)return true;break}}return false}
	d.onkeydown=function(e){if(typeof(disableListenKeyDownEvent)=='undefined')if(e.keyCode==37)window.open('../index.html','_self');else if(e.keyCode==27||e.keyCode==46){window.open('','_self');window.close()}else if((e.keyCode<=57&&e.keyCode>=48)||(e.keyCode<=90&&e.keyCode>=65)){var keychar=String.fromCharCode(e.keyCode);var links=d.links;for(var i=0;i<links.length;i++){if(!links[i].onclick&&FindFirstChar(links[i].innerText,keychar)){window.open(links[i].href,links[i].target=='_blank'?'_blank':'_self');break}}}}
}
//创建首部元素
c = d.createElement('style');
c.type = "text/css";
var css = "#navbar{background:#333;background:-webkit-gradient(linear,0% 0%,0% 100%,from(#333),to(#232323));margin:20px 0;border:none;box-shadow:4px 8px 20px #000;border-radius:2px;height:35px;}#navbar .m-nav{margin:0 auto;text-align:center;}#navbar a{display:inline-flex;justify-content:center;align-items:center;color:#666;font:bold 15px 'Hiragino Sans GB','Microsoft YaHei','微软雅黑',tahoma,arial,simsun,'宋体';width:16%;min-width:80px;max-width:250px;line-height:35px;text-decoration:none;margin:0;}#navbar a:hover{color:#666;background:#282828;background:-webkit-gradient(linear,0% 0%,0% 100%,from(#333),to(#15292f));box-shadow:0px 0px 4px #111;}#logo{display:block;margin:0 auto -20px;width:40%;min-width:320px;max-width:640px;z-index:-1;position:relative;}#busuanzi{width:100%;text-align:center;color:rgba(73,73,73,0.7);font:bold 12px 'Hiragino Sans GB','Microsoft YaHei','微软雅黑',tahoma,arial,simsun,'宋体';margin:20px auto 16px;line-height:1.6;}#busuanzi .no-break-span{display:inline-block !important;margin:0 10px;}";
nav = d.createElement("div");
nav.id="navbar";
var iii=window.location.href.indexOf("#");
var hhh=(iii<0?(window.location.href):(window.location.href.substr(0,iii)))+"#disqus_thread";
nav.innerHTML="<div class=\"m-nav\">"+
		"<a href=\"/\">首页</a>"+
		"<a href=\"./\">目录</a>"+
		"<a href=\"/README.html\">关于</a>"+
		"<a href=\""+hhh+"\" onclick=\"load_disqus()\">评论</a>"+
	"</div>";
if(isIndex){
	surrounderEnable = false;
	var pathname=window.location.pathname;
	if(pathname=="/"||pathname=="/index.html")
		d.title = "DEATH MATCH";
}else{
	css += "div#surrounder{max-width:700px;margin:25px auto;}";
	d.title += " - pxp1230.github.io";
	surrounderEnable = true;
}
if(c.styleSheet){
	c.styleSheet.cssText = css;
}else{
	c.appendChild(d.createTextNode(css));
}
//https://highlightjs.org/，使用过的样式：pojoaque.min.css
highlight_style = d.createElement('link');
highlight_style.rel = "stylesheet";
highlight_style.href = "//cdn.bootcss.com/highlight.js/9.3.0/styles/railscasts.min.css";
//创建尾部元素
mathjax = d.createElement('script');
mathjax.src = '//cdn.bootcss.com/mathjax/2.6.1/MathJax.js?config=TeX-AMS_HTML';
disqus = d.createElement("div");
disqus.id="disqus_thread";
disqus.style.margin="40px 5px 0px 5px";
busuanzi = d.createElement("div");
busuanzi.id="busuanzi";
var year = new Date().getFullYear();
busuanzi.innerHTML = "<span class='no-break-span'>© 2015"+(year==2015?"":"－"+year)+" 潘霄鹏</span><span id='busuanzi_container_page_pv' class='no-break-span'>本页已被阅读 <span id='busuanzi_value_page_pv'>-</span> 次</span><span id='busuanzi_container_site_uv' class='no-break-span'>博客已被 <span id='busuanzi_value_site_uv'>-</span> 人访问</span>";
//添加所有元素
if(surrounderEnable){
	surrounder = d.createElement("div");
	surrounder.id="surrounder";
	while(d.body.hasChildNodes())
		surrounder.appendChild(d.body.firstChild);
	d.body.appendChild(surrounder);
}
d.head.appendChild(c);
d.body.insertBefore(nav,d.body.firstChild);
if(!isIndex && a!="readme"){
	var cc=d.createElement("p");
	cc.innerHTML="<br><br><br><br><strong>✲</strong> <em>版权声明：转载时请以超链接形式标明 <a href='"+window.location.href+"'>文章原始出处</a> 和 <a href='http://pxp1230.github.io/README.html'>作者信息</a> 及 <a href='http://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh'>本声明</a></em><br><strong>✲</strong> <em>署名-非商业性使用-禁止演绎 4.0 国际</em><br><strong>✲</strong> <em>Attribution-NonCommercial-NoDerivatives 4.0 International (<a href='http://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh'>CC BY-NC-ND 4.0</a>)</em>";
	surrounder.appendChild(cc);
}
d.body.appendChild(disqus);
d.body.appendChild(busuanzi);
window.onload = function() {
	//https://highlightjs.org/
	d.head.appendChild(highlight_style);
	JSLoader.load('//cdn.bootcss.com/highlight.js/9.3.0/highlight.min.js',function(){hljs.initHighlighting();});
	(d.head || d.body).appendChild(mathjax);
	(function() {
		//http://ibruce.info/
		var s1 = d.createElement('script');
		s1.src = '//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js';
		s1.async = true;
		d.body.appendChild(s1);
		//https://disqus.com/
		var s2 = d.createElement('script');
		s2.id = 'dsq-count-scr';
		s2.src = '//pxp1230.disqus.com/count.js';
		s2.async = true;
		(d.head || d.body).appendChild(s2);
	})();
	if(isIndex||a=="readme"){
		var logo = d.createElement("img");
		logo.id = "logo";
		//http://www.tietuku.com/upload
		logo.src = "//p1.bqimg.com/1949/4eab887b8097f4df.png";
		d.body.insertBefore(logo,nav);
		//https://github.com/hustcc/canvas-nest.js/blob/master/README-zh.md
		!function(){function o(w,v,i){return w.getAttribute(v)||i}function j(i){return document.getElementsByTagName(i)}function l(){var i=j("script"),w=i.length,v=i[w-1];return{l:w,z:o(v,"zIndex",-2),o:o(v,"opacity",0.5),c:o(v,"color","0,204,255"),n:o(v,"count",90)}}function k(){r=u.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=u.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function b(){e.clearRect(0,0,r,n);var w=[f].concat(t);var x,v,A,B,z,y;t.forEach(function(i){i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>r||i.x<0?-1:1,i.ya*=i.y>n||i.y<0?-1:1,e.fillRect(i.x-0.5,i.y-0.5,1,1);for(v=0;v<w.length;v++){x=w[v];if(i!==x&&null!==x.x&&null!==x.y){B=i.x-x.x,z=i.y-x.y,y=B*B+z*z;y<x.max&&(x===f&&y>=x.max/2&&(i.x-=0.03*B,i.y-=0.03*z),A=(x.max-y)/x.max,e.beginPath(),e.lineWidth=A/2,e.strokeStyle="rgba("+s.c+","+(A+0.2)+")",e.moveTo(i.x,i.y),e.lineTo(x.x,x.y),e.stroke())}}w.splice(w.indexOf(i),1)}),m(b)}var u=document.createElement("canvas"),s=l(),c="c_n"+s.l,e=u.getContext("2d"),r,n,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(i){window.setTimeout(i,1000/45)},a=Math.random,f={x:null,y:null,max:20000};u.id=c;u.style.cssText="position:fixed;top:0;left:0;z-index:"+s.z+";opacity:"+s.o;j("body")[0].appendChild(u);k(),window.onresize=k;window.onmousemove=function(i){i=i||window.event,f.x=i.clientX,f.y=i.clientY},window.onmouseout=function(){f.x=null,f.y=null};for(var t=[],p=0;s.n>p;p++){var h=a()*r,g=a()*n,q=2*a()-1,d=2*a()-1;t.push({x:h,y:g,xa:q,ya:d,max:6000})}setTimeout(function(){b()},100)}();
	}
};
function load_disqus(){
	if(typeof(disableListenKeyDownEvent)!='undefined')return;
	disableListenKeyDownEvent = true;
	var s1 = d.createElement('script');
	s1.src = '//pxp1230.disqus.com/embed.js';
	s1.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s1);
}

