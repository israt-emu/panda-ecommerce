// 2
const h1 = document.getElementsByTagName('h3');
for(const element of h1){
    element.style.color = 'blue';
}
// 3
document.getElementById('backpack').style.backgroundColor = 'tomato';

// 4
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px'
}
// 5
function clickHandle(){
    console.log('Thanks for clicking me');
}
//6
const buyNowBtns = document.getElementsByClassName('buy-now-button');
for(const btn of buyNowBtns){
    btn.addEventListener('click',function(event){
        event.target.style.display = 'none';
    });
};
//7
document.getElementById('input').addEventListener('keyup', function(event){
    if(event.target.value == 'email'){
        document.getElementById('submit').removeAttribute('disabled');
    }
    else{
        document.getElementById('submit').setAttribute('disabled', true);
    }
});
//8
document.getElementById('change-img').addEventListener('mouseenter', function(event){
    event.target.src = 'images/categories/bag.png';
});
//9
document.getElementById('contact').addEventListener('dblclick', function(event){
   event.target.style.backgroundColor = 'blue'; 
});

