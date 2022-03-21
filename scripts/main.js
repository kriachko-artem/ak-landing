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

$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>50) {
        // то сделать кнопку scrollup видимой
        $('.portfolio-tittle').slideDown();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.portfolio-tittle').slideUp();
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















