(function(){
var K="gh_reg",EP="https://formsubmit.co/ajax/Jskjgdgita@gmail.com";
function g(k){try{return localStorage.getItem(k)}catch(e){return null}}
function sg(k){try{return sessionStorage.getItem(k)}catch(e){return null}}
window.addEventListener("load",function(){
if(g(K)||sg("gh_skip"))return;
setTimeout(function(){
var s=document.createElement("style");
s.textContent=".rgo{position:fixed;inset:0;z-index:9999;background:#4a2c3dcc;display:flex;align-items:center;justify-content:center;padding:14px;overflow:auto}.rgb{background:#fff;border-radius:22px;max-width:430px;width:100%;box-shadow:0 12px 40px #0008;overflow:hidden;font:16px/1.5 system-ui,sans-serif;color:#4a2c3d}.rgb h2{margin:0;padding:18px 18px 12px;background:linear-gradient(135deg,#ffd6e5,#ffe8b8);color:#b4457a;font:800 22px/1.25 Georgia,serif}.rgb form{padding:14px 18px 6px}.rgb label{display:block;margin:10px 0 3px;font-weight:700;font-size:14px}.rgb input{width:100%;padding:12px;border:2px solid #f4a6c6;border-radius:12px;font:16px system-ui,sans-serif}.rgb .sm{font-size:13px;color:#7d6272;margin:8px 0}.rgb button{width:100%;margin-top:10px;padding:14px;border:0;border-radius:99px;background:linear-gradient(135deg,#e0679a,#f97316);color:#fff;font:800 17px system-ui,sans-serif;cursor:pointer}.rgb .lt{display:block;text-align:center;padding:10px;color:#7d6272;font-size:14px;cursor:pointer;text-decoration:underline}.rgb .er{color:#c0143c;font-weight:700;font-size:14px;min-height:20px}";
document.head.appendChild(s);
var o=document.createElement("div");o.className="rgo";
o.innerHTML='<div class="rgb"><h2>\ud83d\ude4f Jai Shri Krishna! Please update your profile</h2><form><p class="sm" style="margin-top:0">Stay connected for Guru Prasad and news of events at Geeta Ashrams worldwide. It takes one minute, and only once.</p><label>Your name *</label><input id="rn" autocomplete="name"><label>City, State / Country</label><input id="rc" autocomplete="address-level2"><label>Email</label><input id="re" type="email" autocomplete="email"><label>WhatsApp number (with country code)</label><input id="rw" type="tel" placeholder="+1 555 123 4567" autocomplete="tel"><p class="sm">Please give your name and at least one of email or WhatsApp.</p><div class="er" id="rr"></div><button type="submit">Register \ud83d\ude4f</button><span class="lt" id="rl">Maybe later</span><p class="sm">\ud83d\udd12 Your information stays private. It is used only by Geeta Ashram to send you updates, and is never sold or shared with anyone else.</p></form></div>';
document.body.appendChild(o);
function $(i){return document.getElementById(i)}
$("rl").onclick=function(){try{sessionStorage.setItem("gh_skip","1")}catch(e){}o.remove()};
o.querySelector("form").onsubmit=function(ev){ev.preventDefault();
var n=$("rn").value.trim(),c=$("rc").value.trim(),e=$("re").value.trim(),w=$("rw").value.trim(),er=$("rr"),d=w.replace(/\D/g,"");
if(!n){er.textContent="Please enter your name.";return}
if(!e&&!w){er.textContent="Please give an email or a WhatsApp number.";return}
if(e&&!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(e)){er.textContent="Please check your email address.";return}
if(w&&(d.length<7||d.length>15)){er.textContent="Please include the country code in your WhatsApp number.";return}
er.textContent="Sending...";
fetch(EP,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:n,city:c,email:e,whatsapp:w,_subject:"New Geeta Hub registration",_cc:"adminhq@gagdhqtrs.in",_template:"table",_captcha:"false"})}).then(function(r){return r.json()}).then(function(j){
if(j&&j.success==="false"){er.textContent="Sorry, please try again a little later.";return}
try{localStorage.setItem(K,"1")}catch(x){}
o.querySelector(".rgb").innerHTML='<h2>\ud83d\ude4f Thank you, '+n.replace(/</g,"")+'!</h2><p style="padding:18px">You are registered. Jai Shri Krishna!</p>';
setTimeout(function(){o.remove()},2200)}).catch(function(){er.textContent="Could not send. Please check your internet and try again."})}
},2500)});
})();
document.write('<script src="order.js"><\/script>');
