/* Geeta Ashram Directory: two folders, "Active" and "Inactive", both closed until tapped. */
(function(){
var s=document.createElement("style");
s.textContent="#fl{display:flex;gap:10px;margin:4px 0 10px}#fl button{flex:1 1 0;padding:14px 10px;border-radius:16px;border:3px solid #8fe0b0;background:#d9f6e6;color:#1f6b45;font:800 16px/1.25 system-ui,sans-serif;cursor:pointer;text-align:center}#fl button small{display:block;font:600 13px system-ui,sans-serif;margin-top:2px}#fl button[data-f=I]{border-color:#ffc29c;background:#ffe5d2;color:#9a4a1f}#fl button.on[data-f=A]{background:#2f8f5b;border-color:#2f8f5b;color:#fff}#fl button.on[data-f=I]{background:#d2692f;border-color:#d2692f;color:#fff}.fhint{color:var(--mut);font:15px system-ui,sans-serif;margin:6px 0}";
document.head.appendChild(s);
window.addEventListener("load",function(){
var fl=document.getElementById("fl"),dv=document.getElementById("dir"),q=document.getElementById("q"),ad=document.getElementById("adet");
if(!fl||!dv||!q||typeof D==="undefined")return;
var open=null,PR=["Delhi (Headquarters)","Madrid","Minnesota","Chicago","San Francisco"];
function rk(x){var k=PR.indexOf(x.t);return k<0?99:k}
function lbl(x){var m=D.filter(function(y){return y.t==x.t}).length>1;return x.t+(m&&x.c?" ("+x.c+")":"")}
function cnt(st){return D.filter(function(x){return x.s==st}).length}
fl.innerHTML='<button type="button" data-f="A">✅ Active Geeta Ashrams<small>'+cnt("A")+' ashrams</small></button><button type="button" data-f="I">🔄 Inactive Geeta Ashrams<small>'+cnt("I")+' ashrams</small></button>';
function pick(i){if(!ad)return;ad.innerHTML=card(D[i]).replace("<details ","<details open ")+'<a class="x" id="adx">✕ Close</a>';document.getElementById("adx").onclick=function(){ad.innerHTML=""};ad.scrollIntoView({behavior:"smooth",block:"center"})}
function folder(st,term){
var out="",parts=[["I","India"],["W","Abroad"]];
parts.forEach(function(p){
var L=D.filter(function(x){return x.s==st&&x.g==p[0]&&(!term||(x.t+" "+x.l+" "+x.c+" "+x.a).toLowerCase().indexOf(term)>=0)});
if(!L.length)return;
L.sort(function(a,b){return rk(a)-rk(b)||(rk(a)<99?0:a.t.localeCompare(b.t))});
out+='<div class="grp '+(st=="A"?"a":"i")+'"><h3 class="gh">'+(st=="A"?"✅ Active":"🔄 Inactive")+" – "+p[1]+" ("+L.length+')</h3><div class="ab">'+L.map(function(x){return '<button type="button" data-i="'+D.indexOf(x)+'">'+E(lbl(x))+"</button>"}).join("")+"</div></div>"});
return out}
R=function(){
var term=q.value.trim().toLowerCase(),o="";
Array.prototype.forEach.call(fl.querySelectorAll("button"),function(b){b.className=(!term&&b.getAttribute("data-f")==open)?"on":""});
if(term){o=folder("A",term)+folder("I",term);if(!o)o='<p class="note">No ashram found. Please contact Geeta Ashram HQ, Delhi.</p>'}
else if(open){o=folder(open,"")}
else{o='<p class="fhint">👆 Tap <b>Active</b> or <b>Inactive</b> to see the list of Geeta Ashrams, or search above.</p>'}
dv.innerHTML=o;
Array.prototype.forEach.call(dv.querySelectorAll(".ab button"),function(b){b.onclick=function(){pick(+b.getAttribute("data-i"))}})};
Array.prototype.forEach.call(fl.querySelectorAll("button"),function(b){b.onclick=function(){var f=b.getAttribute("data-f");open=(open==f)?null:f;q.value="";if(ad)ad.innerHTML="";R()}});
q.oninput=R;
R()});
})();
