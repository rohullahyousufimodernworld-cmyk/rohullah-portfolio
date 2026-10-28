(()=>{
const S=window.SITE||{},$=s=>document.querySelector(s),
page=(location.pathname.split('/').pop()||'index').replace('.html','')+'.html',
esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';'),
nav=[['index.html','Home'],['about.html','About'],['skills.html','Skills'],['services.html','Services'],['projects.html','Projects'],['contact.html','Contact']];

// Shared header + footer
const h=$('#site-header');
if(h){
 h.innerHTML=`<header class="site"><div class="wrap nav"><a class="logo" href="index.html">Rohullah<span>.</span>Yousufi</a><button class="burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="Toggle menu"><span></span><span></span><span></span></button><ul class="menu" id="menu">${nav.map(([u,t])=>`<li><a href="${u}"${u===page?' aria-current="page"':''}>${t}</a></li>`).join('')}</ul></div></header>`;
 const b=h.querySelector('.burger'),m=h.querySelector('.menu'),set=o=>{m.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
 b.onclick=()=>set(!m.classList.contains('open'));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open')){set(false);b.focus()}});
}
const f=$('#site-footer');
if(f)f.innerHTML=`<footer class="site"><div class="wrap foot"><p>© ${new Date().getFullYear()} Rohullah Yousufi. Built with HTML, CSS and vanilla JavaScript.</p><nav aria-label="Footer">${nav.map(([u,t])=>`<a href="${u}">${t}</a>`).join('')}</nav></div></footer>`;

// Skills (from data.js)
const sk=$('#skills');
if(sk&&S.skills)sk.innerHTML=S.skills.map(c=>`<div class="cat"><h2>${esc(c.cat)}</h2><div class="grid">${c.items.map(([n,l,ic])=>`<article class="card skill reveal" data-tilt><span class="ico" aria-hidden="true">${esc(ic)}</span><h3>${esc(n)}</h3>${c.learning?'<span class="tag learn">Learning</span>':`<span class="tag">Current skill</span><div class="bar" role="progressbar" aria-label="${esc(n)} level" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i style="--w:${l}%"></i></div><small>${l<50?'Foundational':l<70?'Working knowledge':'Comfortable'}</small>`}</article>`).join('')}</div></div>`).join('');

// Projects (from data.js)
const pj=$('#projects'),d=$('#pd');
if(pj&&S.projects){
 const link=(u,t)=>u?`<a class="btn ghost" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${t}</a>`:`<span class="btn ghost off" role="link" aria-disabled="true" title="URL not added yet (edit js/data.js)">${t}</span>`,
 chips=a=>`<ul class="chips">${a.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;
 pj.innerHTML=S.projects.map((p,k)=>`<article class="card reveal${p.placeholder?' ph':''}"${p.placeholder?'':' data-tilt'}><span class="tag${p.placeholder?' learn':''}">${esc(p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>${chips(p.tech)}${p.placeholder?'':`<div class="row"><button class="btn primary" type="button" data-k="${k}">View details</button>${link(p.repo,'GitHub')}${link(p.demo,'Live demo')}</div>`}</article>`).join('');
 pj.addEventListener('click',e=>{
  const b=e.target.closest('[data-k]');if(!b||!d)return;const p=S.projects[b.dataset.k];
  d.innerHTML=`<button class="x" type="button" aria-label="Close">×</button><h2>${esc(p.title)}</h2><p>${esc(p.overview||p.summary)}</p><h3>Technologies</h3>${chips(p.tech)}<h3>Verified features</h3><ul>${p.features.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="row">${link(p.repo,'GitHub')}${link(p.demo,'Live demo')}</div>`;
  d.showModal();d.querySelector('.x').onclick=()=>d.close();
 });
}

// Page transition between pages
addEventListener('pageshow',()=>document.body.classList.remove('leaving'));
document.addEventListener('click',e=>{
 const a=e.target.closest('a[href]');
 if(!a||a.target||e.metaKey||e.ctrlKey||e.shiftKey||a.origin!==location.origin||(a.pathname===location.pathname&&a.hash)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>{location.href=a.href},180);
});
})();
