const joke = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener('click',generatedJoke)

generatedJoke()

    async function generatedJoke() {
        const config = {
            headers : {
                Accept : 'application/json',
            },
        }

            const res = await fetch('https://icanhazdadjoke.com',config)
            const data =  await res.json()
            joke.innerHTML = data.joke
    }