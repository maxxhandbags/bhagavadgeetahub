(function(){
try{(window.D||[]).forEach(function(x){if(x.t==="Evansville"){x.c="Drs. Sunaina & Sumir Bhateja";x.p="+1-812-459-7877";x.e="bhatejas@hotmail.com"}})}catch(e){}
var C='display:block;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 6px 16px #7d627226;text-decoration:none;border-top:7px solid #f4a6c6';
var BT='display:block;margin:8px 10px 12px;padding:10px 6px;border-radius:99px;background:linear-gradient(135deg,#ffd3e1,#ffe0b8);color:#7a2a50;font:800 14px system-ui,sans-serif;text-align:center';
var H='<div class="w"><h2>📖 Guru Prasad · October 2026</h2><p style="margin:-6px 0 14px;font:16px/1.5 system-ui,sans-serif;color:#7d6272">Monthly magazine of Geeta Ashram, Delhi Cantt. Read it free, in Hindi or English.</p>'
+'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:560px">'
+'<a href="Guru-Prasad-Oct-2026-Hindi.pdf" target="_blank" rel="noopener" style="'+C+'"><img src="gp-flyer-hi.jpg" alt="Guru Prasad October 2026 Hindi" loading="lazy" style="width:100%;display:block"><span style="'+BT+'">हिन्दी में पढ़ें</span></a>'
+'<a href="guruprasad.html" style="'+C+'"><img src="gp-flyer-en.jpg" alt="Guru Prasad October 2026 English" loading="lazy" style="width:100%;display:block"><span style="'+BT+'">Read in English</span></a>'
+'</div></div>';
function book(){if(document.getElementById("gpbook"))return;
var v=document.querySelector(".verse"),ab=document.getElementById("about"),s=document.createElement("section");
s.id="gpbook";
s.setAttribute("style","background:linear-gradient(135deg,#fff3c9,#ffd9b8 55%,#ffd0e0);padding:22px 0;border-top:4px solid #ffe08a;border-bottom:4px solid #ffe08a");
s.innerHTML='<div class="w" style="text-align:center"><div style="font-size:44px;line-height:1">\ud83d\udcd6</div><div style="font:800 clamp(24px,6.5vw,34px)/1.2 Georgia,serif;color:#b4457a;margin:6px 0 4px">Read the Bhagavad Geeta</div><div style="font:700 clamp(15px,4vw,18px)/1.5 system-ui,sans-serif;color:#4a2c3d;margin-bottom:12px">The complete Shrimad Bhagavad Geeta \u00b7 745 pages \u00b7 Free<br>Open any chapter or verse (\u0936\u094d\u0932\u094b\u0915) and read as you wish</div><a href="/geeta-book/" style="display:inline-block;padding:15px 30px;border-radius:99px;background:linear-gradient(135deg,#e0679a,#f97316);color:#fff;font:800 19px system-ui,sans-serif;text-decoration:none;border:3px solid #fff;box-shadow:0 8px 22px #b4457a55">\ud83d\udcd6 Open the Book</a><div style="font:14px/1.5 system-ui,sans-serif;color:#7d6272;margin-top:10px">Tap <b>Find Verse \u00b7 \u0936\u094d\u0932\u094b\u0915</b> inside the book to jump to any chapter or verse. Swipe to turn pages.</div></div>';
if(v&&v.parentNode)v.parentNode.insertBefore(s,v.nextSibling);else if(ab)ab.parentNode.insertBefore(s,ab)}
function add(){if(document.getElementById("gpcards"))return;
var ab=document.getElementById("about");if(!ab)return;
var s=document.createElement("section");s.id="gpcards";s.className="band b1";s.innerHTML=H;
ab.parentNode.insertBefore(s,ab)}
function all(){book();add()}
if(document.getElementById("about"))all();else document.addEventListener("DOMContentLoaded",all);
})();
