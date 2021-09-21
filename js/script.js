const pastadore = [{
        menu: 'pasta bolognese',
        ingredients: ['penne, spaghetti ou tagliatelle', 'sauce tomate', 'viande hâchée'],
        vegan: false,
        pizza: false,
        pasta: true,
        drink: false,
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
        drink: false,
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
        drink: false,
        description: 'International healthy pasta',
        prix: 8.00,
        image: "https://www.foodette.fr/files/products/pasta-pates-tagliatelles-italie-creme-citron-brocoli-pavot.JPG",
    },
    {
        menu: 'tagliatelle tricolore',
        ingredients: ['tagliatelle', 'courgette', 'basilic'],
        vegan: true,
        pizza: false,
        pasta: true,
        drink: false,
        description: 'Idéal pour le soir',
        prix: 8.00,
        image: "https://images.eatsmarter.com/sites/default/files/styles/576x432/public/tricolore-tagliatelle-with-prawns-505201.jpg",
    },
    {
        menu: 'vin rouge',
        ingredients: ['red grapes', 'ethanol'],
        prix: 10.00,
        description: 'Podere',
        image: 'https://www.demand.eu/images/productimages/big/italiaans-wijnpakketje-a.jpg',
        vegan: false,
        pizza: false,
        pasta: false,
        drink: true,
    },
    {
        menu: 'vin blanc',
        ingredients: ['white grapes', 'ethanol'],
        prix: 10.00,
        description: 'Orviete Classico',
        image: 'https://www.vins-italiens.fr/636-large_default2/orvieto-doc-classico.jpg',
        vegan: false,
        pizza: false,
        pasta: false,
        drink: true,
    },
    {
        menu: 'vin rosé',
        ingredients: ['black grapes', 'white grapes', 'ethanol'],
        prix: 10.00,
        description: 'Rosatelo',
        image: 'https://www.vins-italiens.fr/829-large_default2/rosatello-rosato.jpg',
        vegan: false,
        pizza: false,
        pasta: false,
        drink: true,
    },
    {
        menu: 'Cola',
        ingredients: ['sparkling water', 'sirop', 'caramel'],
        prix: 1.50,
        description: 'Zéro sucre validée par Romelu Lukaku',
        image: 'https://pbs.twimg.com/media/EUcoHLqXgAApD2l.jpg',
        vegan: false,
        pizza: false,
        pasta: false,
        drink: true,
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
        drink: true,
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
        drink: true,
    },
    {
        menu: 'Margharita',
        ingredients: ['pâte à pizza', 'mozarella', 'basilic', 'tomates'],
        description: 'juste un délice',
        vegan: true,
        pizza: true,
        pasta: false,
        drink: false,
        prix: 15.00,
        image: 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F13d543a6-cdf7-400e-9c5a-b274a8f22e5e.2Ejpeg/748x372/quality/90/crop-from/center/pizza-margherita.jpeg',
    },
    {
        menu: 'Pepperoni',
        ingredients: ['pâte à pizza', 'mozarella', 'basilic', 'poivrons', 'oignons', 'tranches de peperoni'],
        description: 'Préférée de tout le monde',
        vegan: false,
        pizza: true,
        pasta: false,
        drink: false,
        prix: 15.00,
        image: 'https://img-3.journaldesfemmes.fr/J-Ghr27nHaONcrz46Fxq9HYsyTg=/750x500/smart/5f3ef94c1513478a954404a7b39eb177/recipe-jdf/10000901.jpg',
    },
    {
        menu: 'Vegan Spicy Pepperoni',
        ingredients: ['pâte à pizza', 'herbes de Provence', 'poivrons rouges', 'chorizo vegan', 'huile piquante'],
        description: 'Délicieuse',
        vegan: true,
        pizza: true,
        pasta: false,
        drink: false,
        prix: 13.50,
        image: 'https://www.veganfreestyle.com/wp-content/uploads/2018/02/pizza-vegan.jpg',
    },
]

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

    let listItem1 = document.createElement("li")
    liste.appendChild(listItem1)
    listItem1.innerText = dishes.ingredients[0]

    let listItem2 = document.createElement("li")
    liste.appendChild(listItem2)
    listItem2.innerText = dishes.ingredients[1]

    let listItem3 = document.createElement("li")
    liste.appendChild(listItem3)
    listItem3.innerText = dishes.ingredients[2]


    front.style.backgroundImage = "url('" + dishes.image + "')";

}

// filter dishes

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

/* List button */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

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