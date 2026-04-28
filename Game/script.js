const screen = document.querySelectorAll('.screen');
const chooseInsect = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const time = document.getElementById('time');
const scores = document.getElementById('score');
const message = document.getElementById('message')

let score = 0;
let seconds = 0;
let selected_insect = {}

startBtn.addEventListener('click',()=>screen[0].classList.add('up'))

    chooseInsect.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const img = btn.querySelector('img')
            const src = img.getAttribute('src')
            const alt = img.getAttribute('alt')
            selected_insect = {src,alt}
            screen[1].classList.add('up')
            setTimeout(createInsect,1000)
            startGame()
        })
    })

            function startGame(){
                setInterval(increaseTime,1000)
            }

                function increaseTime(){
                    let m = Math.floor(seconds/60)
                    let s = seconds%60
                    m = m < 10 ? `0${m}` : m
                    s = s < 10 ? `0${s}` : s
                    time.innerHTML = `Time : ${m}:${s}`
                    seconds++
                }


            function createInsect(){
                const insect = document.createElement('div')
                insect.classList.add('insect')
                const {x,y} = getRandomLocation()
                insect.style.top = `${y}px`
                insect.style.left = `${x}px`
                insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform:rotate(${Math.random()*360}deg)"/>`
                insect.addEventListener('click',catchInsect)

                gameContainer.appendChild(insect)
            }

                function getRandomLocation(){
                    const width = window.innerWidth
                    const height = window.innerHeight
                    const x = Math.random()* (width - 200)+100
                    const y = Math.random()* (height - 200)+100
                    return {x,y}
                }


                function catchInsect(){
                    increaseScore()
                    this.classList.add('caught')
                    setTimeout(()=>this.remove(),200)
                    addInsects()
                }

                function addInsects(){
                    setTimeout(createInsect,1000)
                    setTimeout(createInsect,1500)
                }

                function increaseScore(){
                    score++
                    if(score<20){
                        message.classList.add('visible')
                    }
                    scores.innerHTML = `score :${score}`

                }