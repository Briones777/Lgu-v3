
/* Header scroll effect */
const hdr=document.getElementById('hdr');
window.addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>40));

/* Intersection Observer for fade-ins */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis')}});
},{threshold:0.1});
document.querySelectorAll('.fi,.fi-l').forEach(el=>io.observe(el));

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});

/* Mobile drawer */
const drawer=document.getElementById('drawer');
document.getElementById('hamBtn').addEventListener('click',()=>drawer.classList.add('open'));
document.getElementById('drawerClose').addEventListener('click',()=>drawer.classList.remove('open'));
function closeDrawer(){drawer.classList.remove('open')}