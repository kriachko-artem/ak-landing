//Change info in header
const skillsButton = document.querySelectorAll('.skills-buttons-block button');

skillsButton.forEach(item=>{
    item.addEventListener('click',changeInfo)})




function changeInfo (){
    skillsButton.forEach(item=>{
        item.classList.remove('active')});
    this.classList.add('active');
    document.querySelectorAll('.middle-block')
        .forEach(item=>{
            item.style.display='none';
        })
    document.getElementById(this.name).style.display='flex';
}

const portfolioTittle = document.querySelector('.portfolio-tittle')



// window.addEventListener('scroll',function (){
//     if ((document.querySelector('main').offsetTop-window.scrollY)
//         < window.innerHeight/100*60){
//             gsap.to(portfolioTittle,{
//                 display: 'block',
//                 opacity: 0,
//         })
//             gsap.to(portfolioTittle,{
//                 opacity: 1,
//                 height: 'auto',
//             })
//         console.log('Show')
//     } else {
//         gsap.to(portfolioTittle,{
//             height: 0,
//         })
//             gsap.to(portfolioTittle,{
//                 opacity: 1,
//                 display: 'none',
//             })
//     }
// })


$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ((document.querySelector('main').offsetTop-window.scrollY)
        < window.innerHeight/100*60) {
        // то сделать кнопку scrollup видимой
        $('.portfolio-tittle').slideDown()
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.portfolio-tittle').slideUp()
    }
});





//slider
$(document).ready(function() {
    $('.projects-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        speed: 300,
        easing: 'ease',
        touchThreshold: 30,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})

const descriptionBlock = document.querySelectorAll('.description-block');
const descriptionSection = document.querySelector('.description-section');
const descriptionArea = document.querySelector('.description-area');
const descriptions = descriptionArea.querySelectorAll('text');
const closeButton = descriptionArea.querySelector('.close-button')

closeButton.addEventListener('click', closeDescription)
descriptionSection.addEventListener('click', ()=>{
    if (!descriptionArea.contains(event.target)) {
        closeDescription()
    }
});


descriptionBlock.forEach(item=>item.addEventListener('click',openDescription))
descriptions.forEach(item=>{item.remove()})

function openDescription(){

    descriptionSection.style.display = 'flex';
    descriptions.forEach(item=>{
        if (item.classList.contains(this.classList[1])){
            descriptionArea.append(item)
        }
    })
    document.querySelector('html').style.overflow = 'hidden';
}
function closeDescription (){
    descriptionSection.classList.add('close-animation');
    setTimeout(function (){
        descriptionSection.style.display='none';
        descriptions.forEach(item=>{item.remove()})
        document.querySelector('html').style.overflow = 'auto';
        descriptionSection.classList.remove('close-animation');
    },500)

}

window.onload = function (){
    document.querySelector('body').classList.add('loaded');
    document.querySelector('html').style.overflow = 'unset'
}



//3D animation

if (window.innerWidth>600){
    document.addEventListener('DOMContentLoaded', () => {
        let centerX,centerY,xPositionFromCenter,yPositionFromCenter,transformX,transformY;
        // Custom JS

        const label = document.querySelectorAll('.preview')

        label.forEach(item=>{
            item.addEventListener('mouseover',setParameters)
            item.addEventListener('mouseout', function (event){
                target = this;
                requestAnimationFrame(returnInitial)
            })
        })


        function setParameters(){
            target = this
            centerX = target.clientWidth / 2;
            centerY = target.clientHeight / 2;

            this.addEventListener('mousemove', event => {

                xPositionFromCenter = event.offsetX - centerX;
                yPositionFromCenter = event.offsetY - centerY;

                transformX = xPositionFromCenter/10;
                transformY = -yPositionFromCenter/5;

                requestAnimationFrame(animate3D)
            })
        }
        function animate3D() {
            gsap.to(target,{
                transform: `rotateY(${transformX}deg) rotateX(${transformY}deg)`
            });

        }
        function returnInitial(){
            gsap.to(target,{
                transform: `unset`
            });
        }
    })
}












