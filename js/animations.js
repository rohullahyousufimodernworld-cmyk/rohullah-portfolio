(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,
fine=matchMedia('(hover:hover) and (pointer:fine)').matches,
$$=s=>document.querySelectorAll(s);

// Scroll reveal
const rv=$$('.reveal');
if(rm||!('IntersectionObserver' in window))rv.forEach(e=>e.classList.add('in'));
else{const io=new IntersectionObserver(es=>es.forEach(n=>{if(n.isIntersecting){n.target.classList.add('in');io.unobserve(n.target)}}),{threshold:.12});rv.forEach(e=>io.observe(e))}

// Mouse tilt (desktop only)
if(!rm&&fine)$$('[data-tilt]').forEach(el=>{
 el.addEventListener('pointermove',e=>{
  const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  el.style.transform=`perspective(800px) rotateX(${(.5-y)*8}deg) rotateY(${(x-.5)*10}deg)`;
  el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');
 });
 el.addEventListener('pointerleave',()=>{el.style.transform=''});
});

// Technology marquee: duplicate items for a seamless loop
if(!rm)$$('.track').forEach(t=>[...t.children].forEach(n=>{const c=n.cloneNode(true);c.setAttribute('aria-hidden','true');t.appendChild(c)}));

// Typing effect
const ty=document.querySelector('.typing');
if(ty&&!rm){
 const T=ty.dataset.titles.split('|');let i=0,j=0,del=false;
 (function tick(){
  const w=T[i];j+=del?-1:1;ty.textContent=w.slice(0,j);
  let ms=del?35:70;
  if(!del&&j===w.length){del=true;ms=1500}else if(del&&j===0){del=false;i=(i+1)%T.length;ms=300}
  setTimeout(tick,ms);
 })();
}
})();
