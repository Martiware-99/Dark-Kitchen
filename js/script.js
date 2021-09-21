const pastadore = [{
        menu: 'pasta bolognese',
        ingredients: ['penne, spaghetti ou tagliatelle', 'sauce tomate', 'viande hâchée'],
        vegan: 'false',
        description: 'Du vrai fait maison',
        prix: 6.50,
    },
    {
        menu: 'carbonara',
        ingredients: ['penne, spaghetti ou tagliatelle', 'jambon', 'crème fraîche'],
        vegan: 'false',
        description: 'Maestro des pâtes',
        prix: 5.50,
    },
    {
        menu: 'carbonara vegan',
        ingredients: ['penne, spaghetti ou tagliatelle', 'brocoli', 'crème fraîche'],
        vegan: 'true',
        description: 'International healthy pasta',
        prix: 8.00,
    },
    {
        menu: 'tagliatelle tricolore',
        ingredients: ['tagliatelle', 'courgette', 'basilic'],
        vegan: 'true',
        description: 'Idéal pour le soir',
        prix: 8.00,
    }
];

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