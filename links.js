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
(function(){
var s=document.createElement("style");
s.textContent=".ml h3{margin:18px 0 8px;font-size:18px;color:var(--ac2)}.ml .chips{display:flex;flex-wrap:wrap;gap:8px}.ml .chips a{padding:9px 15px;border-radius:99px;background:#fff;border:2px solid #d9c8ff;color:#5b3fb0;font:800 14px system-ui,sans-serif;text-decoration:none}";
document.head.appendChild(s);
var G=[["\ud83c\udfac Videos & Conferences",[["Geeta Conference 2022","https://bit.ly/34fBmX6"],["More conference playlists (2023\u20132025), Moments of Miracle","https://linktr.ee/ZoomBhagavadGeeta"]]],
["\u25b6 YouTube",[["Swami Harihar Ji channel","https://youtube.com/channel/UCZYjntRXT6e7gsINRBZVvyg"],["Geeta Dham India","https://youtube.com/channel/UCH3rwwqbzKdTgzWz31WwKrA"],["Geeta Ashram Delhi HQ","https://youtu.be/TYwCJlUeBPQ"],["Satya Ji","https://youtube.com/c/SATYAKALRA"],["Geeta Ashram Peru","https://youtube.com/c/GeetaAshramPeru"]]],
["\ud83d\udc4d Facebook",[["Geeta Dham News","https://www.facebook.com/geetadhamtinwari/"],["Delhi GuruMaa","https://www.facebook.com/GeetaAshramIn/"],["Las Palmas","https://www.facebook.com/groups/318696682601/"],["Malaysia","https://www.facebook.com/geetaashramyouthmalaysia/"],["Thailand","https://www.facebook.com/groups/geetaashramthailand/"],["New York","https://www.facebook.com/profile.php?id=61585774407396"],["Tenerife","https://www.facebook.com/profile.php?id=100079744565148"]]],
["\ud83c\udf10 Websites & Tools",[["Geeta Dham India","https://www.geetadhamindia.com/"],["GuruMaa's Page","https://linktr.ee/GuruMaaBhagavadGeeta"],["GitaGPT Q&A","https://bhagavadgita.com/gitagpt"],["Time Zone Converter","https://www.timeanddate.com/worldclock/converter-classic.html"],["New Jersey Geeta Satsang","https://geetasatsang.org"],["Malaysia","https://www.geetamalaysia.org/"],["Malaysia Youth","https://geetaashramyouth.com/"],["Minnesota","https://geetaashrammn.org/"],["Los Angeles","https://linktr.ee/Geetaashramla"]]]];
window.addEventListener("load",function(){
var h='<div class="w ml"><h2>\ud83d\udd17 More Links</h2>';
G.forEach(function(g){h+="<h3>"+g[0]+'</h3><div class="chips">'+g[1].map(function(l){return '<a target="_blank" rel="noopener" href="'+l[1]+'">'+l[0].replace("&","&amp;")+"</a>"}).join("")+"</div>"});
h+='<h3>\ud83d\udce9 Website questions</h3><p style="color:var(--mut)">For donations, please contact Geeta Ashram HQ, Delhi, and Geeta Dham (see above). Website host: Raju Karamchandani, <a href="mailto:Jskjgdgita@gmail.com" style="color:#0e7490;font-weight:800">Jskjgdgita@gmail.com</a>. President: <a href="mailto:presidentgd@gagdhqtrs.in" style="color:#0e7490;font-weight:800">presidentgd@gagdhqtrs.in</a></p></div>';
var sec=document.createElement("section");sec.className="band b2";sec.id="morelinks";sec.innerHTML=h;
var sv=document.getElementById("seva");sv.parentNode.insertBefore(sec,sv);
});
})();
