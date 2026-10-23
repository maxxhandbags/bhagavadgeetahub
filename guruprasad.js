(function(){
var H="Geeta Ashram Delhi (Headquarters)";
var B='<div class="gpb" style="margin:12px 0 4px"><div style="font:800 14px system-ui,sans-serif;color:#b4457a;margin-bottom:6px">📖 Guru Prasad · October 2026</div><a href="guruprasad.html" style="display:inline-block;margin:0 8px 8px 0;padding:11px 18px;border-radius:99px;background:linear-gradient(135deg,#ffd3e1,#ffe0b8);color:#7a2a50;font:800 15px system-ui,sans-serif;text-decoration:none;border:2px solid #fff;box-shadow:0 3px 10px #b4457a30">View in English</a><a href="Guru-Prasad-Oct-2026-Hindi.pdf" target="_blank" rel="noopener" style="display:inline-block;margin:0 8px 8px 0;padding:11px 18px;border-radius:99px;background:#fff;color:#b4457a;font:800 15px system-ui,sans-serif;text-decoration:none;border:2px solid #ffd0e0;box-shadow:0 3px 10px #b4457a30">हिन्दी में पढ़ें (Hindi)</a></div>';
var busy=false;
function scan(){if(busy)return;busy=true;
try{var ds=document.querySelectorAll("details"),i,s,t;
for(i=0;i<ds.length;i++){if(ds[i].getAttribute("data-gp"))continue;
s=ds[i].querySelector("summary");t=s?s.textContent:"";
if(t.indexOf(H)===0){ds[i].setAttribute("data-gp","1");
var dt=ds[i].querySelector(".dt")||ds[i];dt.insertAdjacentHTML("beforeend",B)}}}catch(e){}
busy=false}
function start(){
scan();
try{new MutationObserver(scan).observe(document.body,{childList:true,subtree:true})}catch(e){setInterval(scan,800)}
var f=document.querySelector("footer");
if(f&&!document.getElementById("gpv"))f.insertAdjacentHTML("beforeend",'<br><small id="gpv" style="opacity:.55">Guru Prasad links ready</small>')}
if(document.body)start();else document.addEventListener("DOMContentLoaded",start);
})();
