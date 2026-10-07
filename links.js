(function(){
var s=document.createElement("style");
s.textContent=".tdb{display:inline-block;margin:10px 8px 0 0;padding:12px 20px;border-radius:99px;border:2px solid #fff;background:linear-gradient(135deg,#ffd3e1,#ffe0b8);color:#7a2a50;font:800 15px system-ui,sans-serif;text-decoration:none;cursor:pointer}#tdc details{border-left:8px solid #ffb199}";
document.head.appendChild(s);
window.addEventListener("load",function(){
var z=document.querySelector("#zoom .g");
if(z)z.innerHTML='<div class="c"><h3>Geeta Ashram Madrid</h3><p>Satsang: please call or write for timings.<br>\ud83d\udccd Av. de Gumersindo Llorente 39, 28022 Madrid<br>Contact: Kamal Fabiani<br>\ud83d\udcde <a href="tel:+34913612369">+34 913 612 369</a></p><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Geeta+Ashram+Temple+Av.+de+Gumersindo+Llorente+39+Madrid">Directions \u2192</a></div>'
+'<div class="c"><h3>Vivek Ji \u00b7 Geeta Ashram Minnesota</h3><p>Sundays, 11:30am\u201312:30pm US Central</p><a target="_blank" rel="noopener" href="https://us04web.zoom.us/j/8582502621">Join Zoom \u2192</a></div>'
+'<div class="c"><h3>Geeta Kiran Sharing (Chicago time)</h3><p>Saturdays, 9:00\u201310:29am Chicago<br>9:00\u201310:29pm Bangkok</p><a target="_blank" rel="noopener" href="https://us02web.zoom.us/j/81533325398?pwd=dU14YVJqTnlRL2lKQU5SVDFsTktyZz09">Join Zoom \u2192</a></div>'
+'<div class="c"><h3>Satya Kalra Ji \u00b7 San Francisco</h3><p>Sundays, 8:30\u20139:30am US Pacific</p><a target="_blank" rel="noopener" href="https://us02web.zoom.us/j/85370424865?pwd=U1ZIUkprUmc0Q2loSW01MDNWOHZXUT09">Join Zoom \u2192</a></div>';
var pr=["Madrid","Minnesota","Chicago","San Francisco"],A=D.filter(function(x){return x.s=="A"}),L=[];
pr.forEach(function(n){A.forEach(function(x){if(x.t==n&&L.indexOf(x)<0)L.push(x)})});
A.forEach(function(x){if(L.indexOf(x)<0)L.push(x)});
var n=L.length,st=new Date(2026,9,7),now=new Date(),d=Math.floor((new Date(now.getFullYear(),now.getMonth(),now.getDate())-st)/864e5),o=0;
var sec=document.createElement("section");sec.id="today";sec.className="band b1";
sec.innerHTML='<div class="w"><h2>\ud83c\udf1f Geeta Ashram of the Day</h2><p style="color:var(--mut);margin-top:-6px">A different Geeta Ashram is featured every day. Tap Next to see more.</p><div id="tdc"></div><a class="tdb" id="tdn">Next ashram \u25b6</a><a class="tdb" href="#ashrams">All ashrams</a></div>';
var ab=document.getElementById("about");ab.parentNode.insertBefore(sec,ab);
function show(){var i=(((d+o)%n)+n)%n;document.getElementById("tdc").innerHTML=card(L[i]).replace("<details ","<details open ")}
document.getElementById("tdn").onclick=function(){o++;show()};show();
});
})();
document.write('<script src="links2.js"><\/script>');
