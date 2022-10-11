const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const elements =  $$('.section-item_7-content .item')
console.log(elements)

elements.forEach((element, index)=>{
    // console.log(element)
    element.onclick  = function(){
            $('.item-text.animation').classList.remove('animation')
            $('.item-text.animation').style.animation = ''
            if(element.querySelector('.item-text').matches('.animation')){
                element.querySelector('.item-text').classList.remove('animation')
            }else{
                element.querySelector('.item-text').classList.add('animation')
            }
 
    }
})
