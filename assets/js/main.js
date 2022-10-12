const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const elements =  $$('.section-item_7-content .item')


elements.forEach((element, index)=>{
    // console.log(element)
    element.onclick  = function(){
        if(element.querySelector('.item-text').matches('.animation')){
            
            element.querySelector('.item-text.animation').classList.remove('animation')
        }else{
            if($('.item-text.animation')){
                
                $('.item-text.animation').classList.remove('animation')
            }
            
            element.querySelector('.item-text').classList.add('animation')
        
            
        }
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




