const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const elements =  $$('.section-item_7-content .item')
// console.log(elements)

elements.forEach((element, index)=>{
    // console.log(element)
    element.onclick  = function(){
        if($('.item-text.animation')){
            if(element !== $('.item-text.animation')){
                $('.item-text').classList.add('hidden')
                $('.item-text.animation').classList.remove('animation')
                // element.querySelector('.item-text').classList.add('hidden')
                element.querySelector('.item-text').classList.add('animation')
                console.log('1')
            }else{
                if(element.querySelector('.item-text').matches('.hidden')){
                    element.querySelector('.item-text').classList.remove('hidden')
                    element.querySelector('.item-text').classList.add('animation')
                    console.log('rrrrr')
                }else{
                    element.querySelector('.item-text').classList.add('hidden')
                    element.querySelector('.item-text').classList.remove('animation')
                    console.log('345678')
                }
            }
        }else{
            element.querySelector('.item-text').classList.add('animation')
            element.querySelector('.item-text').classList.remove('hidden')
        }
        // $('.item-text.animation').classList.remove('animation')
 
    }
})


const navbar = document.querySelector(".menu-pc .section-menu");
const blockNavbar = navbar.offsetHeight;

const shortNavbar = document.querySelector('.header')

window.onscroll =() => {
    if (window.pageYOffset >= blockNavbar) {
        shortNavbar.classList.add("block")
      } else {
        shortNavbar.classList.remove("block");
      }
};




