const container = document.getElementById('productContainer')
const searchInput = document.querySelector('.search-input')

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click',()=>{
        document.querySelectorAll('.menu a').forEach(l=>{
            l.classList.remove('active')
            link.classList.add('active')
        })
    })
})

let allProducts = []
let cartCount = 0;

function addToCart(){
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
}

function displayProducts(items){
    container.innerHTML="";

    items.forEach(p=>{
        container.innerHTML += `<div class='card'>
                                <img src='${p.images[0]}>' />
                                <h3>${p.title}</h3>
                                <p>${Math.round(p.price*80)}</p>
                                <button onclick='addToCart()'>Add to Cart</button>
                                </div>`;
    })
}

async function fetchProducts(params) {
    try{
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json()
        allProducts = data.products
        displayProducts(data.products)
    }catch(error){
        container.innerHTML = '<h2>Something went wrong </h2>'
    }
}
fetchProducts();

searchInput.addEventListener('input',()=>{
    const value = searchInput.value.toLowerCase();
    const filtered = allProducts.filter(p=>
        p.title.toLowerCase().includes(value) || p.cateory.toLowerCase().includes(value)
    )
    displayProducts(filtered)
})

function filterProducts(type){
    let filtered = []

    if(type === 'all'){
        filtered = allProducts;
    }else if(type === 'men'){
        filtered = allProducts.filter(p=>p.cateory==="men's clothing")
    }else if(type === 'women'){
        filtered === allProducts.filter(p=>p.cateory==="women's clothing")
    }else if(type === 'beauty'){
        filtered = allProducts.filter(p=>p.cateory==='jewelery')
    }else if(type === 'genz'){
        filtered = allProducts.filter(p=>p.cateory==='electroincs')
    }
    displayProducts(filtered)
}

