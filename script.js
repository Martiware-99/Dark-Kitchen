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

function createCard(dishName) {
    let cards = document.createElement("div")
    cards.className = albumTitle.className
    cards.className = "card"
    document.querySelector(".container").appendChild(cards)

    let front = document.createElement("div")
    front.className = "front"
    cards.appendChild(front)

    let back = document.createElement("div")
    back.className = "back"
    cards.appendChild(back)

    let main = document.createElement("main")
    back.appendChild(main)

    let header = document.createElement("header")
    main.appendChild(header)

    let article = document.createElement("article")
    main.appendChild(article)

    let footer = document.createElement("footer")
    main.appendChild(footer)

    let title = document.createElement("div")
    title.className = "title"
    header.appendChild(title)

    let date = document.createElement("div")
    date.className = "date"
    header.appendChild(date)

    let albumName = document.createElement("h1")
    title.appendChild(albumName)
    albumName.innerText = albumTitle.album

    let albumDate = document.createElement("p")
    date.appendChild(albumDate)
    albumDate.innerText = albumTitle.year

    let albumAuthor = document.createElement("p")
    title.appendChild(albumAuthor)
    albumAuthor.innerText = albumTitle.artist

    let albumdescription = document.createElement("p")
    article.appendChild(albumdescription)
    albumdescription.innerText = albumTitle.description

    let albumGenre = document.createElement("p")
    footer.appendChild(albumGenre)
    albumGenre.innerText = albumTitle.genre

    front.style.backgroundImage = "url('" + albumTitle.cover + "')";

    back.style.backgroundColor = albumTitle.color;

}

function getComment() {

    let commentZone = document.querySelector('textarea');
    let comment = commentZone.value;
    return comment;
}

function cmntDisplayZone() {

    let displayZone = document.createElement('section');
    let title = document.createElement('h1');
    let para = document.createElement('p');
    title.innerText = 'Customers comments';
    para.innerText = getComment();
    displayZone.appendChild(title);
    displayZone.appendChild(para);
    document.body.appendChild(displayZone);

}

function display() {
    let button = document.querySelector('#button');

    button.addEventListener('click', cmntDisplayZone);

}
display();