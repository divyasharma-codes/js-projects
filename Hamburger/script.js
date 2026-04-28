 const hamburger = document.querySelector('.hamburger-menu-container')
            const headercontent = document.querySelector('.header-content')
            const closeicon = document.querySelector('.close-icon')
            const nav = document.querySelector('nav')
            hamburger.addEventListener('click',(e)=>{
                e.stopPropagation()
                headercontent.classList.add('menu-open')
            })
            closeicon.addEventListener('click',()=>{
                headercontent.classList.remove('menu-open')
            })
            nav.addEventListener('click',(e)=>{
                e.stopPropagation()
            })
            window.addEventListener('click',()=>{
                headercontent.classList.remove('menu-open')
            })