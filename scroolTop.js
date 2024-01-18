const scroll = document.querySelector(".scrollTop")
window.addEventListener("scroll", () =>{
        scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

scroll.addEventListener('click', backTop)