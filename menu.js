window.addEventListener("scroll", function(){
    let nav = document.querySelector('#nav1')
    nav.classList.toggle('rolagem', window.scrollY > 510)
})