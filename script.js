const myLibrary = [];   

let addButton = document.getElementById("addBtn")
let subButton = document.getElementById("subBtn")

let formToggle = document.getElementById("addForm")





function Book(title,author,pages) {
    this.title = title;
    this.pages = pages;
    this.author = author;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook)
    bookLoop()
}

function bookLoop (){
    let list = document.getElementById("cardBox")
    let authTXT = " Author: "
    let bookTXT = " Title: "
    let pagesTXT = " Pages: "
    let div = document.createElement("div");
    for(let i = 0; i < myLibrary.length; i++){
        div.className = "cardMan"
        div.innerHTML =bookTXT + myLibrary[i].title + authTXT + myLibrary[i].author + pagesTXT+ myLibrary[i].pages;
        list.appendChild(div)
        console.log(myLibrary[i])
    }}

function openForm(){

    formToggle.style.display = "flex"

}

function closeForm(){

    formToggle.style.display = "none"
}

function formListen (){
    let titleInput = document.getElementById("title").value
    let authorInput = document.getElementById("author").value
    let pagesInput = document.getElementById("pages").value

    var book = new Book(titleInput,authorInput,pagesInput)
    addBookToLibrary(book)

    document.getElementById("addForm").reset;
}

    addEventListener("submit",formListen)




addButton.addEventListener("click",openForm)
subButton.addEventListener("click", closeForm)




// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages
//     this.read = read
//     this.info = function(){
//         console.log(this)
//     }
// }

// const hobbit = new Book("The Hobbit","J.R.R Tolkien","295 Pages", "Not yet read")
// hobbit.info()


// function Player(name,marker){
//     this.name = name;
//     this.marker = marker;

// }

// Player.prototype.sayName = function(){
//     console.log(`Hello, I'm ${this.name}!`)
// }
// Player.prototype.getMarker = function(){
//     console.log(`My marker is ${this.marker}!`)
// }

// const player1 = new Player(`Steve`,`X`)
// const player2 = new Player(`Anna`,`O`)

// player1.sayName();
// player2.sayName();
// player1.getMarker();
// player2.getMarker();