
const START=new Date(2026,9,4),DAYS=90;
let LANG=localStorage.getItem("gc:lang")||"en";
let CURRENT_ROUTE="home";

const P={
 lely:{name:"Lujain",short:"Lely",nameAr:"لجين",shortAr:"لجين",icon:"🎀",theme:"lely",tag:"pink tennis · café · quiet luxury",tagAr:"تنس وردي · كافيهات · كوايت لوكسري",quote:"soft discipline, pretty results",quoteAr:"انضباط ناعم ونتايج حلوة",bg:"lelyBg",moods:["🎾 tennis mornings","☕ Monaco café","🎀 baby pink"],moodsAr:["🎾 صباحات التنس","☕ كافيه موناكو","🎀 بيبي بنك"]},
 rand:{name:"Rand",short:"Rand",nameAr:"رند",shortAr:"رند",icon:"🐆",theme:"rand",tag:"navy luxury · burgundy · quiet edge",tagAr:"كحلي لوكسري · برغندي · هدوء قوي",quote:"consistency looks expensive",quoteAr:"الاستمرارية شكلها فخم",bg:"randBg",moods:["🌙 navy nights","🐆 subtle jaguar","🍷 burgundy"],moodsAr:["🌙 ليالي كحلية","🐆 لمسة جاغوار","🍷 برغندي"]},
 renad:{name:"Renad",short:"Renad",nameAr:"رناد",shortAr:"رناد",icon:"🐚",theme:"renad",tag:"seafoam · pearls · island girl",tagAr:"سي فوم · لؤلؤ · بنت البحر",quote:"flow, glow, repeat",quoteAr:"هدوء وجلو واستمرار",bg:"renadBg",moods:["🌊 clear water","🫧 pearls","⛵ yacht day"],moodsAr:["🌊 مويه صافية","🫧 لؤلؤ","⛵ يوم يخت"]},
 munira:{name:"Munira",short:"Munira",nameAr:"منيرة",shortAr:"منيرة",icon:"👑",theme:"munira",tag:"old money · equestrian · blush gold",tagAr:"أولد موني · فروسية · وردي وذهبي",quote:"grace with a little power",quoteAr:"نعومة وأناقة مع قوة",bg:"muniraBg",moods:["🐎 equestrian","🌸 princess blush","🥂 champagne gold"],moodsAr:["🐎 فروسية","🌸 وردي أميرة","🥂 ذهبي شامبانيا"]}
};

const daily=["Water goal","Movement","Skincare AM","Skincare PM","Protein focus","Tidy 10 min","Sleep routine"];
const weekly=["Hair ritual","Room reset","Plan the week","One self-care appointment","Progress photo"];
const monthly=["Measurements","Progress photos","Monthly reflection","Choose a little reward"];
const moods=["🥰","🙂","😌","😴","🥲"];

const AR_HABITS={
 "Water goal":"هدف المويه","Movement":"حركة","Skincare AM":"روتين البشرة الصباحي","Skincare PM":"روتين البشرة المسائي",
 "Protein focus":"التركيز على البروتين","Tidy 10 min":"ترتيب ١٠ دقايق","Sleep routine":"روتين النوم",
 "Hair ritual":"روتين الشعر","Room reset":"ترتيب الغرفة","Plan the week":"تخطيط الأسبوع",
 "One self-care appointment":"موعد عناية واحد","Progress photo":"صورة التقدم","Measurements":"القياسات",
 "Progress photos":"صور التقدم","Monthly reflection":"مراجعة الشهر","Choose a little reward":"اختيار مكافأة صغيرة"
};

const T={
 en:{
  saved:"Saved ♡",brand:"Glow Club",yourWorld:"YOUR 90-DAY WORLD",who:"Who are you today?",pick:"Pick your profile and open your own little world.",remember:"Remember me on this device ♡",
  home:"Home",switchGirl:"Switch Girl",quote:"♡ we don't restart.<br>we continue.",day:"Day",week:"Week",
  ourProgress:"OUR GLOW PROGRESS ♡",fourGirls:"Four girls, one glow club.",overallDesc:"Overall adherence across daily habits + weekly resets + monthly rituals.",clubAdherence:"club adherence",
  dayStreak:"day streak",todayTogether:"today together",collectiveStreak:"collective streak",dayClub:"90 day club",
  mostConsistent:"Most Consistent",longestStreak:"Longest Streak",perfectDays:"Perfect Days",biggestComeback:"Biggest Comeback",waiting:"waiting to crown",
  perfectGlow:"✨ Perfect Glow Day — all four of you did it ♡",challenge:"THE 90-DAY GLOW CLUB",pretty:"Pretty habits.<br>Real progress.",
  heroDesc:"A soft, motivating dashboard for the four of you — today first, with streaks, hearts, weekly resets and monthly rituals without turning your life into a spreadsheet.",
  clubEnergy:"CLUB ENERGY",glowing:"glowing",tiny:"Every tiny check counts toward the same 90-day story.",today:"TODAY",together:"together",days:"days",
  todayGlance:"Today at a glance",live:"♡ live",thisWeek:"This week",smallWins:"small wins compound",
  personalWorld:"PERSONAL WORLD",corner:"corner",overallAdherence:"OVERALL ADHERENCE",weekly:"WEEKLY",month:"MONTH",
  todayFocus:"TODAY'S FOCUS",perfectDay:"Perfect day ♡",oneTiny:"One tiny tap. Keep the momentum soft and simple.",allChecked:"Every daily habit is checked. Main-character behavior.",markDone:"Mark it done ♡",
  currentStreak:"CURRENT STREAK",countsAt:"A day counts at 80%+ completion.",mood:"MOOD CHECK-IN",how:"How are you?",
  currentMonth:"Current month",glowNotes:"Glow notes",gentle:"gentle reminders",mostImportant:"♡ Most important",consistency:"consistency > perfection",
  currentLevel:"✦ Current level",streakRule:"🔥 Streak rule",keepsAlive:"80%+ keeps it alive",
  warming:"warming up",rhythm:"finding rhythm",glowingLevel:"glowing",era:"in her era",main:"main character"
 },
 ar:{
  saved:"تم الحفظ ♡",brand:"نادي الجلو",yourWorld:"عالمك لمدة ٩٠ يوم",who:"مين أنتِ اليوم؟",pick:"اختاري ملفك وادخلي عالمك الخاص.",remember:"تذكريني على هذا الجهاز ♡",
  home:"الرئيسية",switchGirl:"تغيير البنت",quote:"♡ ما نبدأ من جديد.<br>نكمل من مكاننا.",day:"اليوم",week:"الأسبوع",
  ourProgress:"تقدمنا في الجلو ♡",fourGirls:"أربع بنات، نادي جلو واحد.",overallDesc:"نسبة الالتزام تشمل العادات اليومية + الريست الأسبوعي + طقوس الشهر.",clubAdherence:"التزام المجموعة",
  dayStreak:"يوم متواصل",todayTogether:"إنجازنا اليوم",collectiveStreak:"الستريك الجماعي",dayClub:"تحدي ٩٠ يوم",
  mostConsistent:"الأكثر التزامًا",longestStreak:"أطول ستريك",perfectDays:"الأيام الكاملة",biggestComeback:"أقوى رجعة",waiting:"بانتظار التتويج",
  perfectGlow:"✨ يوم جلو مثالي — كلكم الأربع كملتوه ♡",challenge:"تحدي الجلو لـ ٩٠ يوم",pretty:"عادات حلوة.<br>تقدّم حقيقي.",
  heroDesc:"داشبورد ناعم ومحفّز لكم الأربع — يركز على اليوم، الستريك، القلوب، الريست الأسبوعي وطقوس الشهر بدون ما نحول حياتنا لجدول إكسل.",
  clubEnergy:"طاقة المجموعة",glowing:"جلو",tiny:"كل تشيكة صغيرة تدخل في قصة الـ٩٠ يوم.",today:"اليوم",together:"مع بعض",days:"أيام",
  todayGlance:"نظرة سريعة على اليوم",live:"♡ مباشر",thisWeek:"هذا الأسبوع",smallWins:"الإنجازات الصغيرة تتراكم",
  personalWorld:"عالمك الخاص",corner:"ركن",overallAdherence:"نسبة الالتزام الكلية",weekly:"أسبوعي",month:"الشهر",
  todayFocus:"تركيز اليوم",perfectDay:"يوم كامل ♡",oneTiny:"خطوة صغيرة بس، وخلي الاستمرارية خفيفة وسهلة.",allChecked:"كل عادات اليوم مكتملة. بطلة القصة فعلًا.",markDone:"تمّت ♡",
  currentStreak:"الستريك الحالي",countsAt:"اليوم ينحسب في الستريك إذا وصلتي ٨٠٪ أو أكثر.",mood:"مزاج اليوم",how:"كيفك اليوم؟",
  currentMonth:"هذا الشهر",glowNotes:"ملاحظات الجلو",gentle:"تذكيرات لطيفة",mostImportant:"♡ الأهم",consistency:"الاستمرارية أهم من المثالية",
  currentLevel:"✦ مستواك الحالي",streakRule:"🔥 قاعدة الستريك",keepsAlive:"٨٠٪+ يحافظ عليه",
  warming:"بداية حلوة",rhythm:"داخلة بالجو",glowingLevel:"قاعدة تلمعين",era:"في إيرتها",main:"بطلة القصة"
 }
};

const qs=q=>document.querySelector(q);
const qsa=q=>[...document.querySelectorAll(q)];
const t=k=>T[LANG][k]||k;
const shortName=id=>LANG==="ar"?P[id].shortAr:P[id].short;
const fullName=id=>LANG==="ar"?P[id].nameAr:P[id].name;
const personTag=id=>LANG==="ar"?P[id].tagAr:P[id].tag;
const personQuote=id=>LANG==="ar"?P[id].quoteAr:P[id].quote;
const personMoods=id=>LANG==="ar"?P[id].moodsAr:P[id].moods;
const habitLabel=item=>LANG==="ar"?(AR_HABITS[item]||item):item;

function nowDay(){return Math.max(0,Math.min(DAYS-1,Math.floor((new Date()-START)/86400000)))}
function dkey(i=nowDay()){let d=new Date(START);d.setDate(d.getDate()+i);return d.toISOString().slice(0,10)}
function widx(){return Math.floor(nowDay()/7)}
function mkey(){return new Date().toISOString().slice(0,7)}
function key(type,id,sub,item){return "gc:"+[type,id,sub,item].join("|")}
function done(type,id,sub,item){return localStorage.getItem(key(type,id,sub,item))==="1"}
function setDone(type,id,sub,item,v){localStorage.setItem(key(type,id,sub,item),v?"1":"0")}
function pct(type,id,sub,items){let n=items.filter(x=>done(type,id,sub,x)).length;return Math.round(n/items.length*100)}
function dayPct(id,i=nowDay()){return pct("d",id,dkey(i),daily)}
function weekPct(id){return pct("w",id,"w"+(widx()+1),weekly)}
function monthPct(id){return pct("m",id,mkey(),monthly)}
function adherence(id){let upto=nowDay(),sum=0,n=0;for(let i=0;i<=upto;i++){sum+=dayPct(id,i);n++}sum+=weekPct(id);n++;sum+=monthPct(id);n++;return Math.round(sum/n)}
function streak(id){let s=0;for(let i=nowDay();i>=0;i--){if(dayPct(id,i)>=80)s++;else break}return s}
function perfectDays(id){let n=0;for(let i=0;i<=nowDay();i++)if(dayPct(id,i)===100)n++;return n}
function hearts(p,big=false){let n=Math.round(p/12.5);return '<div class="heart '+(big?'big':'')+'">'+Array.from({length:8},(_,i)=>'<span class="'+(i<n?'on':'')+'">♥</span>').join('')+'</div>'}
function level(a){return a<25?t("warming"):a<55?t("rhythm"):a<80?t("glowingLevel"):a<95?t("era"):t("main")}
function groupStreak(){let s=0;for(let i=nowDay();i>=0;i--){let ok=Object.keys(P).every(id=>dayPct(id,i)>=80);if(ok)s++;else break}return s}
function clubPct(){let a=Object.keys(P).map(adherence);return Math.round(a.reduce((x,y)=>x+y,0)/a.length)}
function todayTogether(){let a=Object.keys(P).map(id=>dayPct(id));return Math.round(a.reduce((x,y)=>x+y,0)/a.length)}
function badgeData(){let ids=Object.keys(P),cons=[...ids].sort((a,b)=>adherence(b)-adherence(a))[0],st=[...ids].sort((a,b)=>streak(b)-streak(a))[0],perf=[...ids].sort((a,b)=>perfectDays(b)-perfectDays(a))[0];return {cons,st,perf}}

function renderGroup(){
 let c=clubPct(),b=badgeData(),all=Object.keys(P).every(id=>dayPct(id)===100);
 qs("#group").innerHTML='<div class="group glass"><div class="grouphead"><div><div class="eyebrow">'+t("ourProgress")+'</div><h2>'+t("fourGirls")+'</h2><p>'+t("overallDesc")+'</p></div><div class="bigscore">'+hearts(c,true)+'<strong>'+c+'%</strong><small class="sub">'+t("clubAdherence")+'</small></div></div><div class="girls">'+Object.keys(P).map(id=>{let p=P[id],a=adherence(id);return '<button class="girl" data-route="'+id+'"><div class="girltop"><span>'+p.icon+' '+shortName(id)+'</span><strong>'+a+'%</strong></div>'+hearts(a)+'<div class="girlmeta"><span>🔥 '+streak(id)+' '+t("dayStreak")+'</span><span>✦ '+level(a)+'</span></div></button>'}).join('')+'</div><div class="clubstats"><div class="clubstat"><strong>'+todayTogether()+'%</strong><span>'+t("todayTogether")+'</span></div><div class="clubstat"><strong>'+groupStreak()+'</strong><span>'+t("collectiveStreak")+'</span></div><div class="clubstat"><strong>'+DAYS+'</strong><span>'+t("dayClub")+'</span></div></div><div class="badges"><span class="badge">♡ '+t("mostConsistent")+': <b>'+shortName(b.cons)+'</b></span><span class="badge">🔥 '+t("longestStreak")+': <b>'+shortName(b.st)+'</b></span><span class="badge">✨ '+t("perfectDays")+': <b>'+shortName(b.perf)+'</b></span><span class="badge">↗ '+t("biggestComeback")+': <b>'+t("waiting")+'</b></span></div>'+(all?'<div class="perfect">'+t("perfectGlow")+'</div>':'')+'</div>';
}

function home(){
 let c=clubPct();
 return '<div class="hero"><div class="heroCard glass"><div class="eyebrow">'+t("challenge")+'</div><h1>'+t("pretty")+'</h1><p>'+t("heroDesc")+'</p><div class="moodshape"></div></div><div class="miniStack"><div class="card glass"><div class="eyebrow">'+t("clubEnergy")+'</div><h3>'+c+'% '+t("glowing")+'</h3><p class="sub">'+t("tiny")+'</p>'+hearts(c,true)+'</div><div class="card glass"><div class="eyebrow">'+t("today")+'</div><h3>'+todayTogether()+'% '+t("together")+'</h3><p class="sub">'+t("collectiveStreak")+': 🔥 '+groupStreak()+' '+t("days")+'</p></div></div></div><div class="profiles">'+Object.keys(P).map(id=>{let p=P[id],a=adherence(id);return '<article class="profileCard '+p.bg+'" data-route="'+id+'"><div class="tag">'+p.icon+' '+personTag(id)+'</div><h3>'+shortName(id)+'</h3><div class="score"><span>'+hearts(a)+'</span><b>'+a+'%</b></div></article>'}).join('')+'</div><div class="grid2"><div class="card glass"><div class="sectionTitle"><div><h3>'+t("todayGlance")+'</h3><div class="sub">'+t("day")+' '+(nowDay()+1)+' / 90</div></div><span class="pill">'+t("live")+'</span></div><div class="todayCards">'+Object.keys(P).map(id=>'<div class="todayOne"><header><span>'+P[id].icon+' '+shortName(id)+'</span><b>'+dayPct(id)+'%</b></header>'+hearts(dayPct(id))+'<small>'+level(adherence(id))+'</small></div>').join('')+'</div></div><div class="card glass"><div class="sectionTitle"><div><h3>'+t("thisWeek")+'</h3><div class="sub">'+t("smallWins")+'</div></div></div>'+Object.keys(P).map(id=>'<div class="row"><span>'+P[id].icon+' '+shortName(id)+'</span><span>'+hearts(weekAvg(id))+'</span><b>'+weekAvg(id)+'%</b></div>').join('')+'</div></div>';
}

function weekAvg(id){let s=widx()*7,e=Math.min(nowDay(),s+6),sum=0,n=0;for(let i=s;i<=e;i++){sum+=dayPct(id,i);n++}return n?Math.round(sum/n):0}
function nextFocus(id){return daily.find(x=>!done("d",id,dkey(),x))||null}
function checkList(type,id,sub,items){return '<div class="checks">'+items.map(item=>'<label class="check"><span>'+habitLabel(item)+'</span><input type="checkbox" data-check data-t="'+type+'" data-id="'+id+'" data-sub="'+sub+'" data-item="'+item.replace(/"/g,'&quot;')+'" '+(done(type,id,sub,item)?'checked':'')+'></label>').join('')+'</div>'}
function weekStrip(id){let s=widx()*7,letters=LANG==="ar"?["ح","ن","ث","ر","خ","ج","س"]:["S","M","T","W","T","F","S"];return '<div class="weekstrip">'+Array.from({length:7},(_,j)=>{let i=s+j,p=i<=nowDay()?dayPct(id,i):0;return '<div class="daydot '+(i===nowDay()?'today':'')+'"><span>'+letters[j]+'</span><b>'+p+'%</b></div>'}).join('')+'</div>'}

function profile(id){
 let p=P[id],a=adherence(id),focus=nextFocus(id),m=localStorage.getItem("gc:mood:"+id+":"+dkey())||"",pm=personMoods(id);
 return '<div class="profileTop"><div class="moodboard glass"><div class="moodTile big '+p.bg+'"><span>'+pm[0]+'</span></div><div class="moodTile '+p.bg+'"><span>'+pm[1]+'</span></div><div class="moodTile '+p.bg+'"><span>'+pm[2]+'</span></div></div><div class="profileInfo glass"><div class="eyebrow">'+p.icon+' '+t("personalWorld")+' · '+t("day")+' '+(nowDay()+1)+'</div><h2>'+(LANG==="ar"?t("corner")+' '+fullName(id):fullName(id)+'&apos;s<br>'+t("corner"))+'</h2><p class="sub">'+personTag(id)+'</p><p style="font:600 20px '+(LANG==="ar"?'Noto Kufi Arabic':'Cormorant Garamond')+',serif;margin-top:14px">“'+personQuote(id)+'”</p><div class="adherence"><div><strong>'+a+'%</strong><div class="sub">'+t("overallAdherence")+'</div>'+hearts(a,true)+'</div><div class="streaks"><span>🔥 '+streak(id)+' '+t("dayStreak")+'</span><span>♡ '+perfectDays(id)+' '+t("perfectDays")+'</span><span>✦ '+level(a)+'</span></div></div><div class="profileStats"><div class="stat"><strong>'+dayPct(id)+'%</strong><small>'+t("today")+'</small></div><div class="stat"><strong>'+weekPct(id)+'%</strong><small>'+t("weekly")+'</small></div><div class="stat"><strong>'+monthPct(id)+'%</strong><small>'+t("month")+'</small></div></div></div></div><div class="insights"><div class="insight glass"><div class="eyebrow">'+t("todayFocus")+'</div><h3>'+(focus?habitLabel(focus):t("perfectDay"))+'</h3><p class="sub">'+(focus?t("oneTiny"):t("allChecked"))+'</p>'+(focus?'<button class="switch" data-focus="'+id+'" data-item="'+focus+'">'+t("markDone")+'</button>':'')+'</div><div class="insight glass"><div class="eyebrow">'+t("currentStreak")+'</div><h3>🔥 '+streak(id)+' '+t("days")+'</h3><p class="sub">'+t("countsAt")+'</p>'+weekStrip(id)+'</div><div class="insight glass"><div class="eyebrow">'+t("mood")+'</div><h3>'+t("how")+'</h3><div class="moods">'+moods.map(x=>'<button data-mood="'+id+'" data-value="'+x+'" class="'+(m===x?'active':'')+'">'+x+'</button>').join('')+'</div></div></div><div class="taskGrid"><div class="card glass"><div class="sectionTitle"><div><h3>'+t("today")+'</h3><div class="sub">'+dkey()+'</div></div><span class="pill">'+dayPct(id)+'%</span></div>'+checkList("d",id,dkey(),daily)+'</div><div class="card glass"><div class="sectionTitle"><div><h3>'+t("thisWeek")+'</h3><div class="sub">'+t("week")+' '+(widx()+1)+'</div></div><span class="pill">'+weekPct(id)+'%</span></div>'+checkList("w",id,"w"+(widx()+1),weekly)+'</div><div class="card glass"><div class="sectionTitle"><div><h3>'+t("currentMonth")+'</h3><div class="sub">'+mkey()+'</div></div><span class="pill">'+monthPct(id)+'%</span></div>'+checkList("m",id,mkey(),monthly)+'</div><div class="card glass"><div class="sectionTitle"><div><h3>'+t("glowNotes")+'</h3><div class="sub">'+t("gentle")+'</div></div></div><div class="row"><span>'+t("mostImportant")+'</span><small>'+t("consistency")+'</small></div><div class="row"><span>'+t("currentLevel")+'</span><small>'+level(a)+'</small></div><div class="row"><span>'+t("streakRule")+'</span><small>'+t("keepsAlive")+'</small></div></div></div>';
}

function updateStatic(){
 document.documentElement.lang=LANG;
 document.documentElement.dir=LANG==="ar"?"rtl":"ltr";
 qsa("#langSwitch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===LANG));
 qs("#toast").textContent=t("saved");
 qsa(".brand").forEach(x=>x.innerHTML=t("brand")+' <span>♡</span>');
 qs(".gate .eyebrow").textContent=t("yourWorld");
 qs(".gate h1").textContent=t("who");
 qs(".gate .sub").textContent=t("pick");
 const rememberLabel=qs(".remember");
 rememberLabel.childNodes[rememberLabel.childNodes.length-1].nodeValue=" "+t("remember");
 const picks=qsa(".pick");
 const descEn={lely:"the dreamer · baby pink 🎀",rand:"the icon · navy luxe 🐆",renad:"the explorer · seafoam 🐚",munira:"the princess · blush gold 👑"};
 ["lely","rand","renad","munira"].forEach((id,i)=>{
   picks[i].querySelector("strong").textContent=fullName(id);
   picks[i].querySelector("small").textContent=LANG==="ar"?personTag(id):descEn[id];
 });
 const navs=qsa(".nav [data-route]");
 navs[0].innerHTML="⌂ "+t("home");
 ["lely","rand","renad","munira"].forEach((id,i)=>navs[i+1].innerHTML=P[id].icon+" "+shortName(id));
 qs(".quote").innerHTML=t("quote");
 qs("#switch").textContent=t("switchGirl");
 const mobile=qsa(".mobileNav [data-route]");
 mobile[0].innerHTML="⌂<br>"+t("home");
 ["lely","rand","renad","munira"].forEach((id,i)=>mobile[i+1].innerHTML=P[id].icon+"<br>"+shortName(id));
 clock();
}

function route(r){
 CURRENT_ROUTE=r;
 qsa("[data-route]").forEach(x=>x.classList.toggle("active",x.dataset.route===r));
 if(r==="home"){document.body.dataset.theme="club";qs("#view").innerHTML=home()}
 else{document.body.dataset.theme=P[r].theme;qs("#view").innerHTML=profile(r)}
 renderGroup();
 window.scrollTo({top:0,behavior:"smooth"});
}
function setLang(lang){LANG=lang;localStorage.setItem("gc:lang",LANG);updateStatic();route(CURRENT_ROUTE)}
function toast(){let el=qs("#toast");el.textContent=t("saved");el.classList.add("show");setTimeout(()=>el.classList.remove("show"),900)}
function showGate(){qs("#gate").classList.add("show")}
function hideGate(){qs("#gate").classList.remove("show")}
function selectGirl(id){if(qs("#remember").checked)localStorage.setItem("gc:user",id);else sessionStorage.setItem("gc:user",id);hideGate();route(id)}

document.addEventListener("click",e=>{
 let lb=e.target.closest("[data-lang]");if(lb)return setLang(lb.dataset.lang);
 let p=e.target.closest("[data-pick]");if(p)return selectGirl(p.dataset.pick);
 let r=e.target.closest("[data-route]");if(r)return route(r.dataset.route);
 if(e.target.closest("#switch"))return showGate();
 let f=e.target.closest("[data-focus]");if(f){setDone("d",f.dataset.focus,dkey(),f.dataset.item,true);toast();return route(f.dataset.focus)}
 let mo=e.target.closest("[data-mood]");if(mo){localStorage.setItem("gc:mood:"+mo.dataset.mood+":"+dkey(),mo.dataset.value);toast();return route(mo.dataset.mood)}
});
document.addEventListener("change",e=>{if(!e.target.matches("[data-check]"))return;let x=e.target;setDone(x.dataset.t,x.dataset.id,x.dataset.sub,x.dataset.item,x.checked);toast();route(x.dataset.id)});

function clock(){
 let d=new Date();
 qs("#clock").textContent=d.toLocaleTimeString(LANG==="ar"?"ar-SA":"en-US",{hour:"2-digit",minute:"2-digit"});
 qs("#date").textContent=d.toLocaleDateString(LANG==="ar"?"ar-SA-u-ca-gregory":"en-GB",{weekday:"long",day:"numeric",month:"long"});
 qs("#daypill").textContent=t("day")+" "+(nowDay()+1)+" / 90";
}

updateStatic();
route("home");
let remembered=localStorage.getItem("gc:user")||sessionStorage.getItem("gc:user");
if(remembered&&P[remembered])route(remembered);else showGate();
setInterval(clock,30000);
