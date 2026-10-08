D.push({"t":"Austin","l":"Austin, Texas, USA","s":"A","g":"W","c":"Manu & Madhu Karamchandani","a":"Geeta Ashram, 8025 Rimini Trail, Austin, TX 78729, USA","p":"+1-512-632-9887","e":"","w":""});
D.push({"t":"North Carolina","l":"North Carolina, USA","s":"A","g":"W","c":"Prem Sadwani & Dinesh Ahuja","a":"","p":"","e":"","w":""});
window.addEventListener("load",function(){
var h=document.querySelector(".hero"),i,yt=null;
if(!h)return;
var dn=h.querySelector('a[href="#donate"]');if(dn)dn.parentNode.removeChild(dn);
var al=h.querySelectorAll("a.btn");
for(i=0;i<al.length;i++){if(/youtube/.test(al[i].href))yt=al[i]}
function mk(t,u){var a=document.createElement("a");a.className="btn alt";a.href=u;a.target="_blank";a.rel="noopener";a.textContent=t;return a}
if(yt){yt.textContent="\u25b6 Maharaj Ji YouTube";
var hq=mk("\ud83c\udfdb Geeta Ashram HQ","https://share.google/D6SQ6FdZQ3tsqJtGB"),gd=mk("\ud83d\uded5 Geeta Dham","https://www.geetadhamindia.com");
yt.parentNode.insertBefore(hq,yt.nextSibling);yt.parentNode.insertBefore(gd,hq.nextSibling)}
});
window.addEventListener("load",function(){
var h2=document.querySelector("#about h2");if(h2)h2.textContent="\ud83e\udeb7 Gurudev's Message on the Bhagavad Geeta";
var tw=document.querySelector("#about .two");
if(tw){var v=document.createElement("div");v.innerHTML='<div style="position:relative;padding-bottom:56.25%;height:0;border-radius:18px;overflow:hidden;border:4px solid #ffe08a;background:#000"><iframe src="https://www.youtube.com/embed/vDrABaX_Zso?cc_load_policy=1&hl=en&cc_lang_pref=en" title="Gurudev pravachan on the Bhagavad Geeta" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allowfullscreen loading="lazy"></iframe></div><p style="font:15px/1.5 system-ui,sans-serif;color:var(--mut)">\ud83c\udf10 For English: tap \u2699 \u2192 Subtitles/CC \u2192 Auto-translate \u2192 English.</p><h3 style="margin:22px 0 10px;color:var(--ac2)">Gurudev\'s Vision &amp; Mission</h3>';tw.parentNode.insertBefore(v,tw)}
var m=document.getElementById("mus"),a=document.getElementById("aud");
if(m&&a){m.textContent="\ud83c\udfb5 Play Gurudev's Pravachan";m.onclick=function(){if(a.paused){a.play().then(function(){m.textContent="\u23f8 Pause Pravachan"}).catch(function(){})}else{a.pause();m.textContent="\ud83c\udfb5 Play Gurudev's Pravachan"}}}
var hs=document.querySelectorAll("#listen .c h3"),i,p;
for(i=0;i<hs.length;i++){if(/Learn Chanting/.test(hs[i].textContent)){hs[i].textContent="Gurudev's Pravachan";p=hs[i].nextElementSibling;if(p)p.textContent="Listen to Gurudev's pravachan."}}
});
window.addEventListener("load",function(){
var h=document.querySelector(".hero");if(!h)return;
var PH="Screenshot_20261008_014016_Samsung%20Browser.jpg";
var st=document.createElement("style");
st.textContent=".hero{background:radial-gradient(circle at 50% 24%,#fffbe0 0,#ffe27a 20%,#ffc9d6 58%,#e6dcff 100%)!important}.sunwrap{position:relative;width:min(82vw,330px);height:min(82vw,330px);margin:0 auto 6px;display:flex;align-items:center;justify-content:center}.sunwrap:before{content:'';position:absolute;inset:-14%;border-radius:50%;background:repeating-conic-gradient(#ffd23fdd 0 8deg,transparent 8deg 20deg);-webkit-mask:radial-gradient(circle,transparent 34%,#000 40%,transparent 72%);mask:radial-gradient(circle,transparent 34%,#000 40%,transparent 72%);animation:sunspin 50s linear infinite}.sunwrap:after{content:'';position:absolute;inset:6%;border-radius:50%;background:radial-gradient(circle,#fffef0 0,#ffe98a 45%,#ffb70388 66%,transparent 72%)}.cp{position:relative;z-index:2;width:200px;height:200px;border-radius:50%;overflow:hidden;border:6px solid #fff;box-shadow:0 0 0 6px #ffd23f,0 10px 30px #b4690080;background:#fff}.cp.big{width:min(100%,240px);height:auto;aspect-ratio:1/1;margin:auto}.cp img{width:100%!important;height:100%!important;max-width:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;animation:none!important;object-fit:cover!important;object-position:50% 50%!important;transform:scale(1.38);display:block;filter:brightness(1.3) contrast(1.05) saturate(1.1)}.sunline{font:italic 600 17px/1.5 Georgia,serif;color:#8a2b0f;margin:4px auto 14px;max-width:560px}.sunline small{display:block;font:700 13px system-ui,sans-serif;letter-spacing:.06em;color:#b4457a}@keyframes sunspin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.sunwrap:before{animation:none}}";
document.head.appendChild(st);
var im=h.querySelector("img");
if(im){var w=document.createElement("div");w.className="sunwrap";im.parentNode.insertBefore(w,im);var c=document.createElement("div");c.className="cp";w.appendChild(c);c.appendChild(im);im.src=PH}
var ai=document.querySelector("#about .two img");
if(ai){var c2=document.createElement("div");c2.className="cp big";ai.parentNode.insertBefore(c2,ai);c2.appendChild(ai);ai.src=PH}
var sb=h.querySelector(".sub");
if(sb){var p=document.createElement("p");p.className="sunline";p.innerHTML="\ud83c\udf1e As the sun gives light to the whole universe, the Bhagavad Geeta gives light to every soul.<small>18 RAYS \u00b7 18 CHAPTERS OF THE BHAGAVAD GEETA</small>";sb.parentNode.insertBefore(p,sb.nextSibling)}
});
document.write('<script src="daily.js"><\/script><script src="reg.js"><\/script>');
