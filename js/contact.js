(()=>{
const S=window.SITE||{},P=S.profile||{},$=id=>document.getElementById(id),
esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');

// Email / GitHub / LinkedIn links come from js/data.js
const L=[['Email',P.email&&'mailto:'+P.email,P.email],['GitHub',P.github,P.github],['LinkedIn',P.linkedin,P.linkedin]];
$('links').innerHTML=L.map(([n,h,t])=>h?`<li><a href="${esc(h)}"${n==='Email'?'':' target="_blank" rel="noopener noreferrer"'}>${n}: ${esc(t.replace(/^https?:\/\//,''))}</a></li>`:`<li class="mut">${n}: to be added</li>`).join('');

const f=$('cf'),st=$('status'),q=new URLSearchParams(location.search).get('service');
if(q&&[...$('type').options].some(o=>o.value===q))$('type').value=q;

const rules=[
 ['name',v=>v.trim().length>=2,'Enter your full name.'],
 ['email',v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),'Enter a valid email address, like name@example.com.'],
 ['type',v=>!!v,'Choose a project type.'],
 ['msg',v=>v.trim().length>=20,'Describe your project in at least 20 characters.']
];

f.addEventListener('submit',async e=>{
 e.preventDefault();st.className='';st.textContent='';
 let ok=true;
 rules.forEach(([id,test,msg])=>{
  const el=$(id),bad=!test(el.value);
  $('e-'+id).textContent=bad?msg:'';el.setAttribute('aria-invalid',bad);
  if(bad&&ok){el.focus();ok=false}
 });
 if(!ok){st.className='bad';st.textContent='Fix the highlighted fields and send again.';return}
 if(f.elements.website.value)return; // honeypot: bots fill this hidden field
 if(!S.formEndpoint){st.className='warn';st.textContent='Your details look good, but this form is not connected to an email service yet, so nothing was sent. Contact me directly with the links on this page.';return}
 const b=f.querySelector('button');b.disabled=true;st.textContent='Sending...';
 try{
  const r=await fetch(S.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:$('name').value.trim(),email:$('email').value.trim(),projectType:$('type').selectedOptions[0].text,budget:$('budget').value||'Not specified',message:$('msg').value.trim()})});
  if(!r.ok)throw new Error(r.status);
  st.className='ok';st.textContent='Message sent. Thank you for getting in touch.';f.reset();
 }catch(err){st.className='bad';st.textContent='The message could not be sent. Try again, or contact me directly with the links on this page.'}
 b.disabled=false;
});
})();
