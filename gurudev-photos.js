/* Gurudev photos across the front page.
   Photos are files named gd-photo-1.jpg, gd-photo-2.jpg, gd-photo-3.jpg ... (square, any number).
   To add a photo later, upload the next number (e.g. gd-photo-4.jpg). No code change needed. */
(function(){
var MAX=24,found=[];
var css=document.createElement("style");
css.textContent=
".gdr{width:76px;height:76px;object-fit:cover;border-radius:50%;border:4px solid #fff;box-shadow:0 0 0 3px #ffd23f,0 6px 16px #b4457a45;flex:0 0 auto;animation:gdglow 3.2s ease-in-out infinite}"+
".gdh{display:flex!important;align-items:center;justify-content:space-between;gap:12px}"+
".gdband{background:linear-gradient(135deg,#ffb347 0%,#ff6f91 52%,#8b6bd6 100%);padding:30px 18px;text-align:center;color:#fff}"+
".gdband .gdf{max-width:760px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap}"+
".gdband img{width:190px;height:190px;object-fit:cover;border-radius:50%;border:6px solid #fff;box-shadow:0 0 0 6px #ffe27a,0 12px 34px #4a1d6a66;animation:gdglow 3.2s ease-in-out infinite}"+
".gdband .gdt{font-family:Georgia,serif;text-shadow:0 2px 10px #0004;text-align:left}"+
".gdband .gdt b{display:block;font-size:clamp(26px,6vw,38px);line-height:1.15}"+
".gdband .gdt span{display:block;margin-top:6px;font-size:clamp(16px,4vw,20px);opacity:.95}"+
".gdband .gda{display:inline-block;margin-top:12px;background:#fff;color:#b4457a;font:800 15px system-ui,sans-serif;padding:10px 18px;border-radius:30px;text-decoration:none;text-shadow:none}"+
"@keyframes gdglow{50%{box-shadow:0 0 0 7px #ffe27a,0 10px 30px #b4457a77}}"+
"@media(max-width:600px){.gdband .gdt{text-align:center}.gdband img{width:170px;height:170px}.gdr{width:64px;height:64px}}"+
"@media(prefers-reduced-motion:reduce){.gdr,.gdband img{animation:none}}";
document.head.appendChild(css);
function photo(i){return "gd-photo-"+found[i%found.length]+".jpg"}
function run(){
if(!found.length)return;
var k=0;
["#listen","#zoom","#ashrams","#seva","#donate","#contact"].forEach(function(sel){
var h=document.querySelector(sel+" h2");if(!h||h.querySelector(".gdr"))return;
var im=document.createElement("img");im.className="gdr";im.src=photo(k+1);im.alt="His Holiness Shree 1008 Swami Harihar Ji Maharaj";im.loading="lazy";k++;
h.className=(h.className+" gdh").trim();h.appendChild(im)});
Array.prototype.forEach.call(document.querySelectorAll("#bgh-news .item"),function(it,n){if(it.querySelector(".gph"))return;var d=document.createElement("div");d.className="gph";d.innerHTML='<img src="'+photo(n)+'" width="640" height="640" alt="His Holiness Shree 1008 Swami Harihar Ji Maharaj">';it.insertBefore(d,it.firstChild)});
[["#listen",0],["#donate",2]].forEach(function(b){
var s=document.querySelector(b[0]);if(!s||!s.parentNode)return;
var d=document.createElement("section");d.className="gdband";
d.innerHTML='<div class="gdf"><img src="'+photo(b[1])+'" alt="His Holiness Shree 1008 Swami Harihar Ji Maharaj"><div class="gdt"><b>🙏 Jai Gurudev 🙏</b><span>His Holiness Shree 1008 Swami Harihar Ji Maharaj</span><a class="gda" href="gurudev-album.html">📸 Photo Album · Download</a></div></div>';
s.parentNode.insertBefore(d,s)})}
function probe(n){
if(n>MAX){run();return}
var im=new Image();
im.onload=function(){found.push(n);probe(n+1)};
im.onerror=function(){run()};
im.src="gd-photo-"+n+".jpg"}
if(document.readyState==="complete")probe(1);else window.addEventListener("load",function(){probe(1)});
})();
