let score = 0;
let counter = document.querySelector('.score')
let btn = document.querySelector('.btn')
let timing = document.querySelector('.timing')
let yourScore = document.querySelector('.yourscore')
let div = document.querySelector('.score');
let restart = document.querySelector('.restart');
let final = document.querySelector('.final');
let time = 60;




//interval time
let timeClick = setInterval( () =>{
time--;
timing.innerHTML = time;

if(time == 0){
    yourScore.innerHTML = score;
    localStorage.setItem('lastestScore', score)
    clearInterval(timeClick)
    btn.classList.add('btn-stop')
    div.classList.add('div')
    restart.classList.add('restart2')
    final.classList.add('final2')
    timing.classList.add('timing2')
 }



},1000)

// increment score
btn.addEventListener('click', () => {
    counter.innerHTML = score++
})






//change bgcolor
let change = document.querySelector('.change')


change.addEventListener('click', () =>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
    document.body.style.background = bgColor;

// if bgcolor is black
    if( document.body.style.background == 'rgb(0, 0, 0'){
        document.body.style.color = 'rgb(255, 255, 255)';
    } else{
        document.body.style.color = 'rgb(0, 0, 0)'
    }

    })

    

    









