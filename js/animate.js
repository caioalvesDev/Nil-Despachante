const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.scrollTop) {
            element.classList.add(animationClass)
            console.log(element.scrollTop)
        }else{
            element.classList.remove(animationClass)
        }
    })
}


animeScroll();