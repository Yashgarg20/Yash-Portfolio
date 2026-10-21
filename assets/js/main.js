/* theme */
(function(){
  var root=document.documentElement, btn=document.getElementById('theme'), icon=document.getElementById('theme-icon');
  var sun='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  var moon='<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
  function set(t){root.setAttribute('data-theme',t);icon.innerHTML=(t==='dark')?moon:sun;try{localStorage.setItem('theme',t)}catch(e){}}
  var saved;try{saved=localStorage.getItem('theme')}catch(e){}
  if(!saved){saved=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
  set(saved);
  btn.addEventListener('click',function(){set(root.getAttribute('data-theme')==='dark'?'light':'dark')});
})();

/* mobile menu */
(function(){
  var m=document.getElementById('menu'), l=document.getElementById('links');
  m.addEventListener('click',function(){l.classList.toggle('open')});
  l.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){l.classList.remove('open')})});
})();

/* typed role */
(function(){
  var el=document.getElementById('typed'); if(!el)return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent='a full-stack developer';return;}
  var words=['a full-stack developer','a Java developer','a problem solver','an SIH 2024 finalist'],i=0,c=0,del=false;
  function tick(){
    var w=words[i];
    el.textContent=w.substring(0,c);
    if(!del&&c<w.length){c++;setTimeout(tick,75);}
    else if(del&&c>0){c--;setTimeout(tick,40);}
    else{if(!del){del=true;setTimeout(tick,1400);}else{del=false;i=(i+1)%words.length;setTimeout(tick,250);}}
  }
  tick();
})();

/* reveal on scroll */
(function(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el,idx){
    el.style.transitionDelay=(Math.min(idx%4,3)*0.07)+'s';
    io.observe(el);
  });
})();

/* scroll-up + active nav */
(function(){
  var up=document.getElementById('up');
  var secs=[].slice.call(document.querySelectorAll('main section'));
  var links=[].slice.call(document.querySelectorAll('.nav__links a'));
  addEventListener('scroll',function(){
    (scrollY>500)?up.classList.add('show'):up.classList.remove('show');
    var y=scrollY+120, cur=secs[0];
    secs.forEach(function(s){if(s.offsetTop<=y)cur=s;});
    links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+cur.id);});
  },{passive:true});
})();
