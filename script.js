document.addEventListener('DOMContentLoaded',()=>{
  // Mobile menu
  const burger=document.querySelector('.hamburger');
  const links=document.querySelector('.nav-links');
  if(burger&&links){burger.addEventListener('click',()=>links.classList.toggle('open'))}

  // Mark active nav link
  const page=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===page) a.classList.add('active');
  });

  // Contact form
  const form=document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      document.querySelector('#formStatus').textContent='Thanks! We will get back to you shortly.';
      form.reset();
    });
  }
});
