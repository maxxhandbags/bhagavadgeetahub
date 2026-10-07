(function(){
var s=document.createElement("style");
s.textContent="#ask{display:block;text-align:center;text-decoration:none;color:#fff;padding:18px 14px;background:linear-gradient(90deg,#d6336c,#f97316,#f5b800,#f97316,#d6336c);background-size:300% 100%;animation:askf 1.8s ease-in-out infinite;box-shadow:0 6px 20px #b4457a66;position:relative;z-index:7}#ask b{display:block;font:900 clamp(26px,8vw,42px)/1.15 Georgia,serif;text-shadow:0 2px 8px #0006;letter-spacing:.02em}#ask span{display:block;margin:6px 0 10px;font:700 clamp(15px,4vw,19px)/1.4 system-ui,sans-serif;text-shadow:0 1px 4px #0007}#ask i{display:inline-block;font:900 18px system-ui,sans-serif;font-style:normal;padding:11px 26px;border-radius:99px;background:#fff;color:#be123c;box-shadow:0 4px 12px #0005}@keyframes askf{0%,100%{background-position:0 0;filter:brightness(1)}50%{background-position:100% 0;filter:brightness(1.18)}}@media(prefers-reduced-motion:reduce){#ask{animation:none}}.verse small{display:block;margin-bottom:8px;font:800 13px system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#b4457a}";
document.head.appendChild(s);
var V=[
["कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।|मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥","2.47","Do your duty, but do not cling to the results of your actions."],
["मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।|आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥","2.14","Pleasure and pain come and go like heat and cold. Learn to endure them."],
["न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः ।|अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥","2.20","The soul is never born and never dies. It is eternal and is not destroyed when the body is."],
["वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि ।|तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही ॥","2.22","As we change worn-out clothes for new ones, the soul takes on new bodies."],
["योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।|सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥","2.48","Act with a steady mind, without attachment, equal in success and failure. This evenness is yoga."],
["यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।|स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥","3.21","Whatever a great person does, others follow. Lead by example."],
["यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।|अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥","4.7","Whenever righteousness declines and unrighteousness rises, I appear."],
["परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।|धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥","4.8","To protect the good, destroy evil and establish dharma, I come age after age."],
["उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।|आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥","6.5","Lift yourself by your own mind and do not degrade yourself. The mind is both friend and enemy."],
["अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।|तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥","9.22","To those who think of Me with undivided devotion, I provide what they need and protect what they have."],
["पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।|तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥","9.26","A leaf, a flower, a fruit or water offered to Me with love, I accept."],
["मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।|मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः ॥","9.34","Fix your mind on Me, be devoted to Me, worship Me and bow to Me. You will come to Me."],
["यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः ।|हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ॥","12.15","One who does not disturb others and is not disturbed by them, free from envy and fear, is dear to Me."],
["त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः ।|कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ॥","16.21","Desire, anger and greed are three gates to ruin. Give them up."],
["सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।|अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥","18.66","Surrender to Me alone. I will free you from all sins. Do not grieve."],
["यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।|तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥","18.78","Where Krishna, Lord of yoga, and Arjuna the archer are, there are prosperity, victory and sound judgment."]];
window.addEventListener("load",function(){
var a=document.createElement("a");a.id="ask";a.href="https://bhagavadgita.com/gitagpt";a.target="_blank";a.rel="noopener";
a.innerHTML="<b>\ud83e\udd9a ASK KRISHNA \ud83e\udd9a</b><span>Ask any question in any language and get answers from the Bhagavad Geeta</span><i>Ask now \u25b6</i>";
document.body.insertBefore(a,document.body.firstChild);
var v=document.querySelector(".verse");
if(v){var n=V.length,t=new Date(),d=Math.floor((new Date(t.getFullYear(),t.getMonth(),t.getDate())-new Date(2026,9,7))/864e5),x=V[((d%n)+n)%n];
v.innerHTML="<small>\ud83d\udcff Verse of the Day \u00b7 a new verse every day</small><b>"+x[0].replace("|","<br>")+"</b><span>Bhagavad Geeta "+x[1]+" \u00b7 "+x[2]+"</span>"}
});
})();
document.write('<script src="links2.js"><\/script>');
