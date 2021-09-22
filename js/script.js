const pastadore = [{
  menu: 'pasta bolognese',
  ingredients: ['penne, spaghetti ou tagliatelle', 'sauce tomate', 'viande hâchée'],
  vegan: false,
  pizza: false,
  pasta: true,
  drink:false,
  description: 'Du vrai fait maison',
  prix: 6.50,
  image: "https://www.sprinklesandsprouts.com/wp-content/uploads/2019/04/Authentic-Spaghetti-Bolognese-SQ.jpg",
},
{
  menu: 'carbonara',
  ingredients: ['penne, spaghetti ou tagliatelle', 'jambon', 'crème fraîche'],
  vegan: false,
  pizza: false,
  pasta: true,
  drink:false,
  description: 'Maestro des pâtes',
  prix: 5.50,
  image: "https://img.cuisineaz.com/610x610/2018/03/19/i137169-pates-aux-lardons-fumes-ricotta-et-parmesan.jpeg",
},
{
  menu: 'carbonara vegan',
  ingredients: ['penne, spaghetti ou tagliatelle', 'brocoli', 'crème fraîche'],
  vegan: true,
  pizza: false,
  pasta: true,
  drink:false,
  description: 'International healthy pasta',
  prix: 8.00,
  image: "https://www.foodette.fr/files/products/pasta-pates-tagliatelles-italie-creme-citron-brocoli-pavot.JPG",
},
{
  menu: 'tagliatelle tricolore',
  ingredients: ['tagliatelle', 'courgette', 'basilic'],
  vegan: false,
  pizza: false,
  pasta: true,
  drink:false,
  description: 'Idéal pour le soir',
  prix: 8.00,
  image: "https://www.fr.weightwatchers.be/images/2060/dynamic/foodandrecipes/2013/14/BE-FR_7021692_600x600.jpg",
},
{
  menu: 'Margharita',
  ingredients: ['mozarella', 'basilic', 'tomates'],
  description: 'juste un délice',
  vegan: false,
  pizza: true,
  pasta: false,
  drink:false,
  prix: 15.00,
  image: 'https://www.regal.fr/sites/art-de-vivre/files/pizza-margherita_istock.jpg',
},
{
  menu: 'Pepperoni',
  ingredients: ['mozarella', 'basilic', 'poivrons', 'oignons', 'tranches de peperoni'],
  description: 'Préférée de tout le monde',
  vegan: false,
  pizza: true,
  pasta: false,
  drink:false,
  prix: 15.00,
  image: 'https://images.pexels.com/photos/4109078/pexels-photo-4109078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
},
{
  menu: 'Vegan Spicy Pepperoni',
  ingredients: ['herbes de Provence', 'poivrons rouges', 'chorizo vegan', 'huile piquante'],
  description: '',
  vegan: true,
  pizza: true,
  pasta: false,
  drink:false,
  prix: 13.50,
  image: 'https://healthyalie.com/wp-content/uploads/2021/04/healthy_alie_pizza_vegan_3_ingredients_2697-684x1024.png',
},
{
  menu: 'vin rouge',
  ingredients: ['red grapes', 'ethanol'],
  prix: 10.00,
  description: 'Cioccolata di Montebello Appassimento',
  image: 'https://www.sylvies.be/Uploads/Images/219/big/LOT00230423-F00112174.jpg',
  vegan: false,
  pizza: false,
  pasta: false,
  drink:true,
},
{
  menu: 'vin blanc',
  ingredients: ['white grapes', 'ethanol'],
  prix: 10.00,
  description: 'Lampiasi Grillo',
  image: 'https://robbreport.com/wp-content/uploads/2020/04/lillie-1.jpg?w=1000',
  vegan: false,
  pizza: false,
  pasta: false,
  drink:true,
},
{
  menu: 'vin rosé',
  ingredients: ['black grapes', 'white grapes', 'ethanol'],
  prix: 10.00,
  description: 'Rosatelo',
  image: 'https://cdn.vin.co/_clients_folder/perrin/perrin_ventoux_rose_2017_macro_jpg_20248_1024.jpg',
  vegan: false,
  pizza: false,
  pasta: false,
  drink:true,
},
{
  menu: 'Coca',
  ingredients: ['sparkling water', 'sirop', 'caramel'],
  prix: 1.50,
  description: 'Zéro sucre validée par Romelu Lukaku',
  image: 'https://pbs.twimg.com/media/EUcoHLqXgAApD2l.jpg',
  vegan: false,
  pizza: false,
  pasta: false,
  drink:true,
},
{
  menu: 'Eau plate',
  ingredients: ['mineral water'],
  prix: 1.00,
  description: 'spa Reine',
  image: 'https://www.rob-brussels.be/media/catalog/product/cache/4674fdbecbe8e81d26c2d902fe2fbc48/b/e/b-ea-plcon-1015-b-ea-plcon-1015-image_1-230217_2412.jpg',
  vegan: false,
  pizza: false,
  pasta: false,
  drink:true,
},
{
  menu: 'Eau pétillante',
  ingredients: ['co2', 'mineral water'],
  prix: 1.00,
  description: 'spa Reine',
  image: 'https://shop.pure.organic/1721-medium_default/spa-reine-petillante-1l.jpg',
  vegan: false,
  pizza: false,
  pasta: false,
  drink:true,
},
];

/* Create Menu */

function createCard(dishes) {
    let cards = document.createElement("article")
    cards.className = "card"
    document.querySelector(".container").appendChild(cards)

    let front = document.createElement("div")
    front.className = "front"
    cards.appendChild(front)

    let back = document.createElement("div")
    back.className = "back"
    cards.appendChild(back)


    let footer = document.createElement("footer")
    front.appendChild(footer)

    let plat = document.createElement("p")
    footer.appendChild(plat)
    plat.className = "prix"
    plat.innerText = dishes.menu

    let price = document.createElement("p")
    footer.appendChild(price)
    price.className = "prix"
    price.innerText = "prix : " + dishes.prix + " €"

    let platBack = document.createElement("h3")
    back.appendChild(platBack)
    platBack.innerText = dishes.menu

    let description = document.createElement("p")
    back.appendChild(description)
    description.innerText = "Description : " + dishes.description

    let ingrédients = document.createElement("h4")
    back.appendChild(ingrédients)
    ingrédients.innerText = "Liste d'ingrédient :"

    let liste = document.createElement("ul")
    back.appendChild(liste)

    for (let elem of dishes.ingredients){
      let listItem = document.createElement("li")
      liste.appendChild(listItem)
      listItem.innerText = elem
    }

    front.style.backgroundImage = "url('" + dishes.image + "')";

    /* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */
    let panierButton = document.createElement("button")
    back.appendChild(panierButton)
    panierButton.className = "panier"
    panierButton.setAttribute("onclick", "listen()")
    panierButton.innerText = "Ajouter au panier"
   /* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */

}

/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa */


/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa */

/* Filter */

function filterDish(filterToApply) {
    let container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let dishes of pastadore) {
        if (filterToApply === null) {
            createCard(dishes)
        } else {
            if ((filterToApply === "vegan") && (dishes.vegan === true)) {
                createCard(dishes)
            }
            if ((filterToApply === "pizza") && (dishes.pizza === true)) {
                createCard(dishes)
            }
            if ((filterToApply === "pasta") && (dishes.pasta === true)) {
                createCard(dishes)
            }
            if ((filterToApply === "drink") && (dishes.drink === true)) {
                createCard(dishes)
            }
        }
    }
}

filterDish(null)



/* Dark mode */

function darktheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

/* Comment zone */

let displayZone = document.querySelector('.commentZone');
displayZone.classList.add('zone');
let title = document.createElement('h1');



function getComment() {

    let comment = document.createTextNode('');
    let nameVal = document.querySelector('#name').value;
    let dateVal = document.querySelector('#date').value;
    let commentContent = document.querySelector('#comText').value;

    let input = [{
        name: nameVal,
        Date: dateVal,
        commentText: commentContent,
    }];
    for (let elt of input) {
        comment.appendData(elt.commentText + " " + " by " + elt.name + ", " + elt.Date);
    }
    return comment;

}

function cmntDisplayZone() {

    let para = document.createElement('p');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li = getComment();
    ul.appendChild(li);
    para.appendChild(ul);
    displayZone.appendChild(ul);
    document.body.appendChild(displayZone);
    displayZone.style.fontStyle = 'italic';
    displayZone.style.color = 'darkblue';

}

function display() {

    let button = document.querySelector('#button');
    button.addEventListener('click', cmntDisplayZone);
}
display();