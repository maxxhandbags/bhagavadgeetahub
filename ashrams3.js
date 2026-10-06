D=D.concat([
{"t":"Madrid","l":"Madrid, Spain","s":"A","g":"W","c":"Kamal Fabiani","a":"Geeta Ashram Temple, Av. de Gumersindo Llorente 39, San Blas-Canillejas, 28022 Madrid, Spain","p":"+34-913-612-369","e":"","w":"https://share.google/YByoElSuVW2dSsV4N"},
{"t":"New Jersey","l":"New Jersey, USA","s":"A","g":"W","c":"","a":"","p":"","e":"","w":"https://geetasatsang.org"},
{"t":"New York","l":"New York, USA","s":"A","g":"W","c":"","a":"","p":"","e":"","w":"https://www.facebook.com/profile.php?id=61585774407396"},
{"t":"Ambala Cantt.","l":"Ambala Cantt., Haryana, India","s":"I","g":"I","c":"","a":"Last known: Geeta Ashram, Ambala Cantt., Ambala, Haryana (Sh. Narender Dhanija, President / Pt. Doodnath Tiwari, Priest)","p":"9306006570 / 8708187087","e":"yajurshaurya@gmail.com","w":""},
{"t":"Mathura – Gaughat","l":"Mathura, Uttar Pradesh, India","s":"I","g":"I","c":"","a":"Last known: Geeta Ashram, Gaughat, Mathura, Uttar Pradesh (Pt. Dayanand Sharma, Priest)","p":"6398658376","e":"","w":""},
{"t":"Freetown","l":"Freetown, Sierra Leone","s":"I","g":"W","c":"","a":"Last known: Geeta Ashram, P.O. Box 570, Freetown (Mrs. Neeta Thawani Ji & Mr. Haridaswani)","p":"002322-232527","e":"mpthawani@hotmail.com","w":""},
{"t":"Mississauga","l":"Mississauga, Ontario, Canada","s":"I","g":"W","c":"","a":"Last known: Penthouse #06, 55 Kingsbridge Garden Circle, Mississauga, ON L5R 1Y1 (Mr. Peeter Gangelani)","p":"+1-905-712-3456","e":"gangelanijo@gmail.com","w":""},
{"t":"Hong Kong","l":"Hong Kong","s":"I","g":"W","c":"","a":"Last known: Room 306, 3/F, Tien Cheung Hong Bldg., 77-81 Jervois Street, Sheung Wan (Mr. Namik P. Relwani)","p":"+852-2555-9091 / +852-2815-2277","e":"nimmi@netvigator.com","w":""},
{"t":"Porto Alegre","l":"Porto Alegre, Brazil","s":"I","g":"W","c":"","a":"Last known: Geeta Ashram do Brasil Yoga Vedanta, Av. Cel. Lucas de Oliveira 2884, 90460-000 Porto Alegre, RS (Swami Krishnapriyananda Saraswati)","p":"","e":"igpsbrasil@gmail.com","w":""},
{"t":"Nigeria – Industrial Estate","l":"Lagos, Nigeria","s":"I","g":"W","c":"","a":"Last known: c/o MS Radvision Technical (NIG) Ltd., 44 Igammu Industrial Estate, P.O. 1285, Lagos (Mr. Arjun Mirchandani, Chairman)","p":"+234-812-9008418","e":"akm@sonagroupng.com","w":""}
]);
D.forEach(function(x){
if(x.t=="Long Island")x.p+=" / +1-516-496-3548";
if(x.t=="Chicago")x.p+=" / +1-708-474-1112";
if(x.t=="Las Palmas"){x.c="Prakash Nandwani";x.a="Geeta Ashram, C. Juan Rejón 71, 35008 Las Palmas de Gran Canaria, Las Palmas, Spain";x.p="+34-609-456-956";x.e="sunsea@telefonica.net / sunsea@arrakis.es"}
if(x.t=="Lima, Peru"){x.c="Kishore / Geetu Chugani";x.a="Geeta Ashram, Av. Ernesto Diez Canseco 476, Miraflores 15074, Lima, Peru";x.p="+51-1-4472332 / +51-1-2212194";x.e="mirpurilakha@hotmail.com / haseenmirpuri@hotmail.com / gchugani@me.com"}
});
var LK={"Delhi (Headquarters)":[["Google page","https://share.google/D6SQ6FdZQ3tsqJtGB"],["Facebook","https://www.facebook.com/GeetaAshramIn/"],["YouTube","https://youtu.be/TYwCJlUeBPQ"],["Geeta Dham India","https://www.geetadhamindia.com"]],"Jodhpur (Geeta Dham)":[["Website","https://www.geetadhamindia.com"],["Facebook","https://www.facebook.com/geetadhamtinwari/"],["YouTube","https://youtube.com/channel/UCH3rwwqbzKdTgzWz31WwKrA"]],"Las Palmas":[["Google page","https://g.co/kgs/Dj61qx"],["Facebook","https://www.facebook.com/groups/318696682601/"]],"Lima, Peru":[["YouTube","https://youtube.com/@GeetaAshramPeru"]],"Los Angeles":[["Links","https://linktr.ee/Geetaashramla"]],"Malaysia":[["Website","https://www.geetamalaysia.org/"],["Youth website","https://geetaashramyouth.com/"],["Facebook","https://www.facebook.com/geetaashramyouthmalaysia/"]],"San Francisco":[["Satya Ji YouTube","https://youtube.com/c/SATYAKALRA"]],"Tenerife":[["Facebook","https://www.facebook.com/profile.php?id=100079744565148"]],"Thailand":[["Google page","https://g.co/kgs/T81qFZ"],["Facebook","https://www.facebook.com/groups/geetaashramthailand/"]],"Mumbai":[["Zoom (special schedule days only)","https://us02web.zoom.us/j/83440289819?pwd=Lzh4SkdsT1d6N01WbE1aQS9XQXVFdz09"]],"Madrid":[["Directions","https://www.google.com/maps/search/?api=1&query=Geeta+Ashram+Temple+Av.+de+Gumersindo+Llorente+39+Madrid"]]};
function lab(u){return /facebook/.test(u)?"Facebook":/youtu/.test(u)?"YouTube":/google|g\.co/.test(u)?"Google page":"Website"}
window.addEventListener("load",function(){
card=function(x){var t="Geeta Ashram "+x.t+(x.c?" \u2013 "+x.c:""),b="";
if(x.a)b+="<div>\ud83d\udccd "+E(x.a)+"</div>";
if(x.p)b+="<div>\ud83d\udcde "+x.p.split(" / ").map(function(p){return '<a href="tel:'+tel(p)+'">'+E(p)+"</a>"}).join(" \u00b7 ")+"</div>";
if(x.e)b+="<div>\u2709 "+x.e.split(" / ").map(function(e){return '<a href="mailto:'+E(e)+'">'+E(e)+"</a>"}).join(" \u00b7 ")+"</div>";
var L=(LK[x.t]||[]).slice();if(x.w){var u=x.w.indexOf("http")==0?x.w:"https://"+x.w;L.unshift([lab(u),u])}
if(L.length)b+="<div>\ud83c\udf10 "+L.map(function(l){return '<a target="_blank" rel="noopener" href="'+E(l[1])+'">'+E(l[0])+"</a>"}).join(" \u00b7 ")+"</div>";
if(!b)b='<div>Contact details are not yet available. Please ask Geeta Ashram HQ, Delhi: <a href="tel:+911125694380">+91 11 25694380</a> \u00b7 <a href="mailto:adminhq@gagdhqtrs.in">adminhq@gagdhqtrs.in</a></div>';
if(x.s=="I")b+="<div><i>Not currently active. Can you help reconnect this ashram with Geeta Ashram HQ, Delhi?</i></div>";
return '<details data-k="'+E((x.t+" "+x.l+" "+x.c+" "+x.a).toLowerCase())+'"><summary>'+E(t)+"<small>"+E(x.l)+"</small></summary><div class=\"dt\">"+b+"</div></details>"};
R()});
document.write('<script src="links.js"><\/script>');
