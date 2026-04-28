const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click',(e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) < 800){
            createdHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

    const createdHeart = (e)=>{
        const heart = document.createElement('i');
        heart.classList.add('fas')
        heart.classList.add('fa-heart')

        // const x = e.clientX
        // const y = e.clienty

        // const leftOffset = e.target.leftOffsetLeft
        // const topOffset = e.target.offsetTop

        // const xOutside = x - leftOffset
        // const yOutside = y - topOffset

        // heart.style.top = `${yOutside}px`
        // heart.style.left = `${xOutside}px`

        loveMe.appendChild(heart)

        times.innerHTML = ++timesClicked
        setTimeout(()=>heart.remove(),1000)
    }