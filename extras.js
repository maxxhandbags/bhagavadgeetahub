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
document.write('<script src="daily.js"><\/script><script src="reg.js"><\/script>');
