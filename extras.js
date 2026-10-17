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
var ab=document.getElementById("about");
if(ab){var sec=document.createElement("section");sec.id="audiobook";
sec.innerHTML='<div style="background:linear-gradient(135deg,#312e81,#7c3aed 55%,#db2777);color:#fff;text-align:center;padding:34px 18px"><div style="max-width:620px;margin:0 auto"><div style="font:900 13px system-ui,sans-serif;letter-spacing:.12em;color:#ffe08a">NEW \u00b7 FREE \u00b7 ALL 18 CHAPTERS</div><h2 style="color:#fff;margin:6px 0 8px;font-size:clamp(26px,7vw,38px);text-shadow:0 2px 10px #0006">\ud83c\udfa7 Bhagavad Geeta Audiobook</h2><p style="margin:0 0 6px;font-size:18px">Recitation by His Holiness Shree 1008 Swami Harihar Ji Maharaj</p><p style="margin:0 0 18px;font:16px/1.5 system-ui,sans-serif;opacity:.95">Choose any chapter, tap any verse, and listen. All 700 verses, one tap away.</p><a href="audiobook.html" style="display:inline-block;padding:16px 34px;border-radius:99px;background:linear-gradient(135deg,#ffe08a,#ffb703);color:#4a1d00;font:900 19px system-ui,sans-serif;text-decoration:none;box-shadow:0 0 0 6px #ffffff33,0 8px 24px #0006">\u25b6 Open the Audiobook</a></div></div>';
ab.parentNode.insertBefore(sec,ab.nextSibling)}
setTimeout(function(){var sb=document.querySelector(".hero .sub");
if(sb)sb.innerHTML="His Holiness Shree 1008 Swami Harihar Ji Maharaj (1899\u20132000)<br>\ud83e\udeb7 Jai Shri Krishna \u00b7 Jai Gurudev \ud83e\udeb7";
document.title="Bhagavad Geeta Hub \u2013 His Holiness Shree 1008 Swami Harihar Ji Maharaj"},150);
});
document.write('<script src="hero.js"><\/script><script src="daily.js"><\/script><script src="reg.js"><\/script>');
