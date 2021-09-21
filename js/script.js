const pastadore = [{
  menu: 'pasta bolognese',
  ingredients: ['penne, spaghetti ou tagliatelle', 'sauce tomate', 'viande hâchée'],
  vegan: false,
  description: 'Du vrai fait maison',
  prix: 6.50,
  image: "https://www.allesoveritaliaanseten.nl/wp-content/uploads/2015/03/Pasta-Bolognese.jpg",
},
{
  menu: 'carbonara',
  ingredients: ['penne, spaghetti ou tagliatelle', 'jambon', 'crème fraîche'],
  vegan: false,
  description: 'Maestro des pâtes',
  prix: 5.50,
  image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg",
},
{
  menu: 'carbonara vegan',
  ingredients: ['penne, spaghetti ou tagliatelle', 'brocoli', 'crème fraîche'],
  vegan: true,
  description: 'International healthy pasta',
  prix: 8.00,
  image: "https://choosingchia.com/jessh-jessh/uploads/2020/09/vegan-carbonara-4.jpg",
},
{
  menu: 'tagliatelle tricolore',
  ingredients: ['tagliatelle', 'courgette', 'basilic'],
  vegan: true,
  description: 'Idéal pour le soir',
  prix: 8.00,
  image: "https://images.eatsmarter.com/sites/default/files/styles/576x432/public/tricolore-tagliatelle-with-prawns-505201.jpg",
}
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
  plat.innerText = dishes.menu

  let price = document.createElement("p")
  footer.appendChild(price)
  price.className = "prix"
  price.innerText = dishes.prix


  let platBack = document.createElement("h3")
  back.appendChild(platBack)
  platBack.innerText = dishes.menu

  let description = document.createElement("p")
  back.appendChild(description)
  description.innerText = dishes.description

  let ingrédients = document.createElement("h4")
  back.appendChild(ingrédients)
  ingrédients.innerText = "liste d'ingrédient"

  let liste = document.createElement("ul")
  back.appendChild(liste)

  let listItem1 = document.createElement("li")
  liste.appendChild(listItem1)
  listItem1.innerText  = dishes.ingredients[0]

  let listItem2 = document.createElement("li")
  liste.appendChild(listItem2)
  listItem2.innerText  = dishes.ingredients[1]

  let listItem3 = document.createElement("li")
  liste.appendChild(listItem3)
  listItem3.innerText  = dishes.ingredients[2]


  front.style.backgroundImage = "url('"+ dishes.image +"')";

}

for (let dishes of pastadore){
  console.log(dishes);
  createCard(dishes)
}

/* tri button */


/* Dark mode */

  function darktheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }