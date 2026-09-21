document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#primaryNav');
  if(menu&&nav) menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  document.querySelectorAll('.js-lead-form').forEach(form=>{
    const started=Date.now();
    form.addEventListener('submit',e=>{
      const status=form.querySelector('.form-status');
      if(form.querySelector('[name="_honey"]').value){e.preventDefault();return;}
      if(Date.now()-started<2500){e.preventDefault();if(status)status.textContent='Please take a moment to review the form, then submit again.';return;}
      const codes=[105,110,102,111,64,101,121,101,116,111,97,100,46,99,111,109];
      const destination=codes.map(n=>String.fromCharCode(n)).join('');
      form.action='https://formsubmit.co/'+destination;
      if(status)status.textContent='Sending your request…';
    });
  });
});
