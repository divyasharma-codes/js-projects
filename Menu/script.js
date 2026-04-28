const menu = [
  {
    id: 1,
    title: "Parantha with custurd and souce",
    category: "breakfast",
    price: 15.99,
    img: "https://eatwhatweeat.com/wp-content/uploads/2022/04/north-indian-breakfast-recipes-new-start-your-mornings-with-these-simple-north-indian-of-north-indian-breakfast-recipes.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Mix veg",
    category: "lunch",
    price: 13.99,
    img: "https://flymetotheveganbuffet.com/wp-content/uploads/2022/01/vegan-party-buffet-1.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  }, 
  {
    id: 3,
    title: "Chocolate Shake",
    category: "shakes",
    price: 6.99,
    img: "https://tse3.mm.bing.net/th/id/OIP.veC8Vfj_FBLQE8oExn3QywHaLH?pid=Api&P=0&h=180",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Indian Dhokla",
    category: "breakfast",
    price: 20.99,
    img: "https://img.freepik.com/premium-photo/dhokla-is-veg-food-snack-breakfast-item-from-indian-state-gujarat_466689-68685.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Crunchy Burger",
    category: "lunch",
    price: 22.99,
    img: "https://img.freepik.com/premium-photo/vegetarian-fast-food-options_198067-446.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Cherry Vanilla Shake",
    category: "shakes",
    price: 18.99,
    img: "https://tse1.mm.bing.net/th/id/OIP.lnPZmBhlM9L4sBGzHA8rawHaHa?pid=Api&P=0&h=180",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Macroni and Toast",
    category: "breakfast",
    price: 8.99,
    img: "https://moonandspoonandyum.com/wp-content/uploads/2023/04/vegetarian-american-food-768x768.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Daal tadka with Chawal",
    category: "lunch",
    price: 12.99,
    img: "https://cdn.realfakeblogs.com/ce47c3b3-edfb-4960-a2e0-1531c463765b/normal/6f4f4182a6ea49d7892882ea14cccf3c.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "banana shake",
    category: "shakes",
    price: 16.99,
    img: "https://foodtasia.com/wp-content/uploads/2021/07/banana-milkshake-41.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "tasty dinner",
    category: "dinner",
    price: 22.99,
    img: "https://tse2.mm.bing.net/th/id/OIP.lMXzuGVHpf4d6zzFm382xQHaFj?pid=Api&P=0&h=180",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const sectioncenter = document.querySelector('.section-center');
const btncontainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded',function(){
    displayMenu(menu);
    dispalayMenuButtons();
});

    function displayMenu(menuItems){
        let displayMenu = menuItems.map((item)=>{
            return `<img src=${item.img} alt=${item.title} class="photo"/>
                    <div class="item-info">
                    <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                    </div>
                </article>`
        })
        .join('');
        sectioncenter.innerHTML = displayMenu;
    }


        function dispalayMenuButtons(){
            const categories = menu.reduce((values,item)=>{
                if(!values.includes(item.category)){
                    values.push(item.category)
                }
                return values;
            },['all'])
            
            const categoryBtns = categories.map((category)=>{
                return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
            })
            .join('');
            btncontainer.innerHTML = categoryBtns;

            const filterbtn = document.querySelectorAll('.filter-btn');

            filterbtn.forEach((btn)=>{
                btn.addEventListener('click',(e)=>{
                    const category = e.currentTarget.dataset.id;
                    const menucategory = menu.filter((menuItem)=>{
                        if(menuItem.category===category){
                            return menuItem;
                        }
                    });
                    if(category === 'all'){
                        displayMenu(menu);
                    }else{
                        displayMenu(menucategory);
                    }
                });
            });
        }