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
    
    front.style.backgroundImage = "url('"+ albumTitle.cover +"')";

    back.style.backgroundColor = albumTitle.color;

}