/* Gurudev Janmotsav 2027 flyers: shown on the front page just below Gurudev and Krishna-Arjuna. */
(function(){
function go(){
if(document.getElementById("gjm"))return;
var h=document.querySelector(".hero");if(!h||!h.parentNode)return;
var st=document.createElement("style");
st.textContent="@keyframes gjshine{0%{background-position:0% 50%}100%{background-position:200% 50%}}@keyframes gjpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}@keyframes gjglow{0%,100%{box-shadow:0 0 0 3px #ffd23f,0 8px 26px #ff8a0088}50%{box-shadow:0 0 0 3px #fff3a8,0 10px 34px #ffb300cc}}#gjm .gjt{background:linear-gradient(90deg,#fff3a8,#ffd23f,#ffffff,#ffd23f,#fff3a8);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:gjshine 4s linear infinite}#gjm .gjb{animation:gjpulse 2.2s ease-in-out infinite}#gjm .gjc{animation:gjglow 3s ease-in-out infinite}@media(prefers-reduced-motion:reduce){#gjm .gjt,#gjm .gjb,#gjm .gjc{animation:none}}";
document.head.appendChild(st);
var C='display:block;background:#fff;border-radius:18px;overflow:hidden;text-decoration:none;border:3px solid #ffd23f';
var BT='display:block;margin:8px 8px 10px;padding:10px 6px;border-radius:99px;background:linear-gradient(135deg,#ffd23f,#ff9a1f);color:#3b1200;font:800 15px system-ui,sans-serif;text-align:center';
var s=document.createElement("section");s.id="gjm";
s.setAttribute("style","background:linear-gradient(160deg,#1c2a6b 0%,#3a1f7a 45%,#b4457a 100%);padding:22px 0 26px;border-top:4px solid #ffd23f;border-bottom:4px solid #ffd23f;color-scheme:only light");
s.innerHTML='<div class="w" style="text-align:center;max-width:620px;margin:0 auto;padding:0 14px">'
+'<div class="gjb" style="display:inline-block;background:linear-gradient(135deg,#ffd23f,#ff9a1f);color:#3b1200;font:800 13px system-ui,sans-serif;letter-spacing:.12em;padding:7px 16px;border-radius:99px;margin-bottom:10px">✨ SAVE THE DATE ✨</div>'
+'<div class="gjt" style="font:800 clamp(28px,8vw,42px)/1.15 Georgia,serif;margin:2px 0 4px">Gurudev Janmotsav 2027</div>'
+'<div style="font:800 clamp(18px,5vw,24px)/1.3 Georgia,serif;color:#ffe9a8;margin-bottom:4px">गुरुदेव जन्मोत्सव २०२७</div>'
+'<div style="font:700 clamp(15px,4.2vw,18px)/1.5 system-ui,sans-serif;color:#fff;margin:6px 0 4px">20–23 March 2027 · Geeta Dham, Tinwari, Jodhpur</div>'
+'<div id="gjcd" style="font:800 clamp(16px,4.5vw,20px)/1.4 system-ui,sans-serif;color:#ffd23f;margin-bottom:6px"></div>'
+'<div style="font:600 clamp(14px,3.9vw,16px)/1.5 system-ui,sans-serif;color:#ffe9f2;margin-bottom:14px">A new format. The same devotion.<br>स्मरण • साधना • सेवा • समर्पण</div>'
+'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:560px;margin:0 auto">'
+'<a class="gjc" href="gj-flyer-en.jpg" target="_blank" rel="noopener" style="'+C+'"><img src="gj-flyer-en.jpg" alt="Gurudev Janmotsav 2027 flyer, English" loading="lazy" style="width:100%;display:block;background:linear-gradient(#fff,#fff) #fff"><span style="'+BT+'">View in English</span></a>'
+'<a class="gjc" href="gj-flyer-hi.jpg" target="_blank" rel="noopener" style="'+C+'"><img src="gj-flyer-hi.jpg" alt="Gurudev Janmotsav 2027 flyer, Hindi" loading="lazy" style="width:100%;display:block;background:linear-gradient(#fff,#fff) #fff"><span style="'+BT+'">हिन्दी में देखें</span></a>'
+'</div>'
+'<div style="font:600 14px/1.5 system-ui,sans-serif;color:#ffe9f2;margin-top:12px">Tap a flyer to open it full size. Please share it with family and friends. 🙏</div></div>';
var anchor=document.querySelector(".tiles");
if(anchor&&anchor.parentNode===h.parentNode)h.parentNode.insertBefore(s,anchor);else h.parentNode.insertBefore(s,h.nextSibling);
function cd(){var el=document.getElementById("gjcd");if(!el)return;
var now=new Date(),start=new Date(2027,2,20),end=new Date(2027,2,24);
if(now>=end){s.style.display="none";return}
if(now>=start){el.textContent="🎉 Happening now · Jai Gurudev!";return}
var d=Math.ceil((start-now)/86400000);
el.textContent="⏳ "+d+(d===1?" day":" days")+" to go · Jai Gurudev!"}
cd()}
if(document.querySelector(".hero"))go();else document.addEventListener("DOMContentLoaded",go);
})();
