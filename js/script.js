const imagesArray = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
];

let imagesTags = '';

const slider = document.querySelector('.items-wrapper');

const next = document.querySelector('.down');
const prev = document.querySelector('.top');

const numImages = 5;

let counterImages = 0;


for(let i = 0; i <= imagesArray.length; i++){
    
    imagesTags += `
        <img class="item" src="img/${imagesArray[i]}" alt="">
    `;
    
}


slider.innerHTML += imagesTags;

const items = document.getElementsByClassName('item');


items[counterImages].classList.add('active');

prev.addEventListener('click',function(){
    nextPrev(false);
  })
  next.addEventListener('click',function(){
    nextPrev(true);
  })
  
  
  
  
  function nextPrev(isNext){
    items[counterImages].classList.remove('active');
    // listthumbs[counterImages].classList.remove('active');
    if(isNext){
      counterImages--;
      if(counterImages < 0) counterImages = numImages ;
    }else{
      counterImages++;
      if(counterImages === numImages) counterImages = 0;
    }
    items[counterImages].classList.add('active');
    // listthumbs[counterImages].classList.add('active');
  }


let isOver = false;

setInterval(function(){
    if(!isOver) nextPrev(false);
}, 1000);

slider.addEventListener('mouseover', function(){
    isOver = true;

})

slider.addEventListener('mouseout', function(){
    isOver = false;
    
})