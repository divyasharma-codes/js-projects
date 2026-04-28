// const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue';

// const page_url = 'href=http://en.wikipedia.org/?curid=${pageid}';

const url ='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const fromDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultDOM = document.querySelector('.results');

fromDOM.addEventListener('submit',(e)=>{
    e.preventDefault();

    const value = inputDOM.value;
    if(!value){
        resultDOM.innerHTML = '<div class="error">please enter a valid search term</div>';
        return;
    }
    fetchpage(value);
});

    const fetchpage = async (searchValue)=>{
        resultDOM.innerHTML = '<div class="loading"></div>';
        try{
            const res = await fetch(`${url}${searchValue}`);
            const data = await res.json();
            const results = data.query.search

            if(results.length<1){
                resultDOM.innerHTML = '<div class="error">no matching found</div>';
                return;
            }
            renderResult(results);
        }catch(error){
            resultDOM.innerHTML = '<div class="error">there was an error...</div>'
        }
    };

        const renderResult = (list)=>{
            const cardList = list.map((item)=>{
                const {title,snippet,pageid} =item;
                return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
                        <h4>${title}</h4>
                        <p>${snippet}</p>
                        </a>`;
            })
            .join('');
            resultDOM.innerHTML = `<div class="articles">${cardList}</div`;
        }