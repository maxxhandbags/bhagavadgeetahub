(function(){
var P1="Screenshot_20261008_014016_Samsung%20Browser.jpg",P2="krishna-arjuna.jpg";
window.addEventListener("load",function(){
var h=document.querySelector(".hero");if(!h)return;
document.title="Bhagavad Geeta Hub \u2013 His Holiness Shree Swami Harihar Ji Maharaj";
var st=document.createElement("style");
st.textContent=".hero{background:radial-gradient(circle at 50% 22%,#fffbe0 0,#ffe27a 20%,#ffc9d6 58%,#e6dcff 100%)!important}.prow{display:flex;justify-content:center;align-items:center;gap:4px;margin:0 -8px 6px}.sunwrap{position:relative;flex:1 1 0;max-width:210px;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center}.sunwrap:before{content:'';position:absolute;inset:-10%;border-radius:50%;background:repeating-conic-gradient(#ffd23fdd 0 8deg,transparent 8deg 20deg);-webkit-mask:radial-gradient(circle,transparent 34%,#000 40%,transparent 72%);mask:radial-gradient(circle,transparent 34%,#000 40%,transparent 72%);animation:sunspin 50s linear infinite}.sunwrap:after{content:'';position:absolute;inset:4%;border-radius:50%;background:radial-gradient(circle,#fffef0 0,#ffe98a 45%,#ffb70388 66%,transparent 72%)}.kr:before{inset:-6%;background:radial-gradient(circle,#ffffffdd 0,#bfe3ffcc 55%,transparent 72%);-webkit-mask:none;mask:none;animation:none}.cp{position:relative;z-index:2;width:68%;aspect-ratio:1/1;border-radius:50%;overflow:hidden;border:5px solid #fff;box-shadow:0 0 0 5px #ffd23f,0 8px 22px #b4690080;background:#fff}.cp.big{width:min(100%,240px);margin:auto}.cp img{display:block;width:100%!important;height:100%!important;max-width:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;animation:none!important;object-fit:cover!important;object-position:50% 50%;filter:brightness(1.3) contrast(1.05) saturate(1.1)}.cp.k img{transform:none;filter:none}.cp:not(.k) img{transform:scale(1.38)}.sunline{font:italic 600 17px/1.5 Georgia,serif;color:#8a2b0f;margin:4px auto 10px;max-width:560px}.sunline small{display:block;font:700 13px system-ui,sans-serif;letter-spacing:.06em;color:#b4457a}.hero #ask{margin:12px auto 14px;max-width:620px;border-radius:20px}@keyframes sunspin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.sunwrap:before{animation:none}}";
document.head.appendChild(st);
var im=h.querySelector("img");
if(im){var row=document.createElement("div");row.className="prow";im.parentNode.insertBefore(row,im);
var w=document.createElement("div");w.className="sunwrap";var c=document.createElement("div");c.className="cp";c.appendChild(im);w.appendChild(c);im.src=P1;row.appendChild(w);
var k=document.createElement("div");k.className="sunwrap kr";var c3=document.createElement("div");c3.className="cp k";var i2=document.createElement("img");i2.src=P2;i2.alt="Lord Krishna and Arjuna";c3.appendChild(i2);k.appendChild(c3);row.appendChild(k)}
var ai=document.querySelector("#about .two img");
if(ai){var c2=document.createElement("div");c2.className="cp big";ai.parentNode.insertBefore(c2,ai);c2.appendChild(ai);ai.src=P1}
var sb=h.querySelector(".sub");
if(sb){sb.innerHTML="His Holiness Shree Swami Harihar Ji Maharaj (1899\u20132000)<br>\ud83e\udeb7 Jai Shri Krishna \u00b7 Jai Gurudev \ud83e\udeb7";var p=document.createElement("p");p.className="sunline";p.innerHTML="\ud83c\udf1e The Sun is for all - so is Bhagavad Geeta<small>18 RAYS \u00b7 18 CHAPTERS OF THE BHAGAVAD GEETA</small>";sb.parentNode.insertBefore(p,sb.nextSibling)}
setTimeout(function(){var a=document.getElementById("ask"),sl=h.querySelector(".sunline");if(a&&sl)sl.parentNode.insertBefore(a,sl.nextSibling)},0);
});
})();
