(function(){
var s=document.createElement("style");
s.textContent=".ml h3{margin:18px 0 8px;font-size:18px;color:var(--ac2)}.ml .chips{display:flex;flex-wrap:wrap;gap:8px}.ml .chips a{padding:9px 15px;border-radius:99px;background:#fff;border:2px solid #d9c8ff;color:#5b3fb0;font:800 14px system-ui,sans-serif;text-decoration:none}.ab{display:flex;flex-wrap:wrap;gap:8px}.ab button{padding:8px 13px;border-radius:99px;border:2px solid #8fe0b0;background:#d9f6e6;color:#1f6b45;font:800 14px system-ui,sans-serif;cursor:pointer}.grp.i .ab button{border-color:#ffc29c;background:#ffe5d2;color:#9a4a1f}#adet{margin:10px 0}#adet .x{display:inline-block;margin:6px 0 0;color:#b4457a;font:800 14px system-ui,sans-serif;cursor:pointer}.gh{font-size:17px;margin:14px 0 6px}";
document.head.appendChild(s);
var ML=[["\ud83c\udfac Videos & Conferences",[["Geeta Conference 2022","https://bit.ly/34fBmX6"],["More conference playlists (2023\u20132025), Moments of Miracle","https://linktr.ee/ZoomBhagavadGeeta"]]],
["\u25b6 YouTube",[["Swami Harihar Ji channel","https://youtube.com/channel/UCZYjntRXT6e7gsINRBZVvyg"],["Geeta Dham India","https://youtube.com/channel/UCH3rwwqbzKdTgzWz31WwKrA"],["Geeta Ashram Delhi HQ","https://youtu.be/TYwCJlUeBPQ"],["Satya Ji","https://youtube.com/c/SATYAKALRA"],["Geeta Ashram Peru","https://youtube.com/c/GeetaAshramPeru"]]],
["\ud83d\udc4d Facebook",[["Geeta Dham News","https://www.facebook.com/geetadhamtinwari/"],["Delhi GuruMaa","https://www.facebook.com/GeetaAshramIn/"],["Las Palmas","https://www.facebook.com/groups/318696682601/"],["Malaysia","https://www.facebook.com/geetaashramyouthmalaysia/"],["Thailand","https://www.facebook.com/groups/geetaashramthailand/"],["New York","https://www.facebook.com/profile.php?id=61585774407396"],["Tenerife","https://www.facebook.com/profile.php?id=100079744565148"]]],
["\ud83c\udf10 Websites & Tools",[["Geeta Dham India","https://www.geetadhamindia.com/"],["GuruMaa's Page","https://linktr.ee/GuruMaaBhagavadGeeta"],["GitaGPT Q&A","https://bhagavadgita.com/gitagpt"],["Time Zone Converter","https://www.timeanddate.com/worldclock/converter-classic.html"],["New Jersey Geeta Satsang","https://geetasatsang.org"],["Malaysia","https://www.geetamalaysia.org/"],["Malaysia Youth","https://geetaashramyouth.com/"],["Minnesota","https://geetaashrammn.org/"],["Los Angeles","https://linktr.ee/Geetaashramla"]]]];
window.addEventListener("load",function(){
var h='<div class="w ml"><h2>\ud83d\udd17 More Links</h2>';
ML.forEach(function(g){h+="<h3>"+g[0]+'</h3><div class="chips">'+g[1].map(function(l){return '<a target="_blank" rel="noopener" href="'+l[1]+'">'+l[0].replace("&","&amp;")+"</a>"}).join("")+"</div>"});
h+="</div>";
var sec=document.createElement("section");sec.className="band b2";sec.id="morelinks";sec.innerHTML=h;
var sv=document.getElementById("seva");sv.parentNode.insertBefore(sec,sv);
var f=document.querySelector("footer");if(f)f.innerHTML+='<br>Website host: Raju Karamchandani \u00b7 <a href="mailto:Jskjgdgita@gmail.com">Jskjgdgita@gmail.com</a>';
var dv=document.getElementById("dir"),ad=document.createElement("div");ad.id="adet";dv.parentNode.insertBefore(ad,dv);
var PR=["Delhi (Headquarters)","Madrid","Minnesota","Chicago","San Francisco"];
function rk(x){var k=PR.indexOf(x.t);return k<0?99:k}
function lbl(x){var m=D.filter(function(y){return y.t==x.t}).length>1;return x.t+(m&&x.c?" ("+x.c+")":"")}
function pick(i){ad.innerHTML=card(D[i]).replace("<details ","<details open ")+'<a class="x" id="adx">\u2715 Close</a>';document.getElementById("adx").onclick=function(){ad.innerHTML=""};ad.scrollIntoView({behavior:"smooth",block:"center"})}
R=function(){var q=document.getElementById("q").value.trim().toLowerCase(),o="";
G.forEach(function(g){if(F=="A"&&g[0]!="A"||F=="I"&&g[0]!="I"||F=="IN"&&g[1]!="I"||F=="AB"&&g[1]!="W")return;
var L=D.filter(function(x){return x.s==g[0]&&x.g==g[1]&&(!q||(x.t+" "+x.l+" "+x.c+" "+x.a).toLowerCase().indexOf(q)>=0)});
if(!L.length)return;
L.sort(function(a,b){return rk(a)-rk(b)||(rk(a)<99?0:a.t.localeCompare(b.t))});
o+='<div class="grp '+(g[0]=="A"?"a":"i")+'"><h3 class="gh">'+g[2]+" ("+L.length+')</h3><div class="ab">'+L.map(function(x){return '<button data-i="'+D.indexOf(x)+'">'+E(lbl(x))+"</button>"}).join("")+"</div></div>"});
var d=document.getElementById("dir");d.innerHTML=o||'<p class="note">No ashram found. Please contact Geeta Ashram HQ, Delhi.</p>';
d.querySelectorAll("button").forEach(function(b){b.onclick=function(){pick(+b.getAttribute("data-i"))}})};
document.getElementById("q").oninput=R;R();
});
})();
