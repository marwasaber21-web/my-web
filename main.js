const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
    const trigger = window.innerHeight-100;
    reveals.forEach(el =>{
        if (el.getBoundingClientRect().top < trigger){
            el.classList.add('active');
        }
    });
});