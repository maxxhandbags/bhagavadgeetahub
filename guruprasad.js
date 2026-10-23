(function(){
var C='display:block;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 6px 16px #7d627226;text-decoration:none;border-top:7px solid #f4a6c6';
var BT='display:block;margin:8px 10px 12px;padding:10px 6px;border-radius:99px;background:linear-gradient(135deg,#ffd3e1,#ffe0b8);color:#7a2a50;font:800 14px system-ui,sans-serif;text-align:center';
var H='<div class="w"><h2>📖 Guru Prasad · October 2026</h2><p style="margin:-6px 0 14px;font:16px/1.5 system-ui,sans-serif;color:#7d6272">Monthly magazine of Geeta Ashram, Delhi Cantt. Read it free, in Hindi or English.</p>'
+'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:560px">'
+'<a href="Guru-Prasad-Oct-2026-Hindi.pdf" target="_blank" rel="noopener" style="'+C+'"><img src="gp-flyer-hi.jpg" alt="Guru Prasad October 2026 Hindi" loading="lazy" style="width:100%;display:block"><span style="'+BT+'">हिन्दी में पढ़ें</span></a>'
+'<a href="guruprasad.html" style="'+C+'"><img src="gp-flyer-en.jpg" alt="Guru Prasad October 2026 English" loading="lazy" style="width:100%;display:block"><span style="'+BT+'">Read in English</span></a>'
+'</div></div>';
function add(){if(document.getElementById("gpcards"))return;
var ab=document.getElementById("about");if(!ab)return;
var s=document.createElement("section");s.id="gpcards";s.className="band b1";s.innerHTML=H;
ab.parentNode.insertBefore(s,ab)}
if(document.getElementById("about"))add();else document.addEventListener("DOMContentLoaded",add);
})();
