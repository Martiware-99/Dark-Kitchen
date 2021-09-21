const pastadore = [{
  menu: 'pasta bolognese',
  ingredients: ['penne, spaghetti ou tagliatelle', 'sauce tomate', 'viande hâchée'],
  vegan: false,
  pizza: false,
  pasta: true,
  drink:false,
  description: 'Du vrai fait maison',
  prix: 6.50,
  image: "https://www.allesoveritaliaanseten.nl/wp-content/uploads/2015/03/Pasta-Bolognese.jpg",
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
  image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg",
},
{
  menu: 'carbonara vegan',
  ingredients: ['penne, spaghetti ou tagliatelle', 'brocoli', 'crème fraîche'],
  vegan: true,
  pizza: false,
  pasta: false,
  drink:false,
  description: 'International healthy pasta',
  prix: 8.00,
  image: "https://choosingchia.com/jessh-jessh/uploads/2020/09/vegan-carbonara-4.jpg",
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
  image: "https://images.eatsmarter.com/sites/default/files/styles/576x432/public/tricolore-tagliatelle-with-prawns-505201.jpg",
}
];



function createCard(dishes) {
  let cards = document.createElement("div")
  
  if (dishes.vegan === true){
    cards.id = "vegan"
  } else if (dishes.pizza === true){
    cards.id = "pizza"
  } else if (dishes.pasta === true){
    cards.id = "pasta";
  } else if(dishes.drink === true){
    cards.id = "drink"
  } else {}
  
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



function filterDish(filterToApply){
  let container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  for (let dishes of pastadore){
  if (filterToApply === null){
    createCard(dishes)
  } else {
    if ((filterToApply === "vegan") && (dishes.vegan === true)){
      createCard(dishes)
    }
    if ((filterToApply === "pizza") && (dishes.pizza === true)){
      createCard(dishes)
    }
    if ((filterToApply === "pasta") && (dishes.pasta === true)){
      createCard(dishes)
    }
    if ((filterToApply === "drink") && (dishes.drink === true)){
      createCard(dishes)
    }
  }
}
}

filterDish(null)



// function that'll hide dishes that do not apply to the filter
function sortDishes() {
  var x = document.querySelectorAll("#vegan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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