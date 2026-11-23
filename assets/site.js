document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#primaryNav');
  if(menu&&nav) menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
});
