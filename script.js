const myLibrary = [];   

let addButton = document.getElementById("addBtn");
let subButton = document.getElementById("subBtn");

let formToggle = document.getElementById("addForm");

let bookID = 0;




function Book(title,author,pages) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.id = bookID
    bookID++
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    bookLoop();
}

function bookLoop (){
    let list = document.getElementById("cardBox");
    let authTXT = "<strong> Author: </strong>";
    let bookTXT = "<strong> Title: </strong>";
    let pagesTXT = "<strong> Pages: </strong>";
    let div = document.createElement("div");
    let button = document.createElement("button");
    for(let i = 0; i < myLibrary.length; i++){
        div.className = "cardMan";
        div.innerHTML =bookTXT + myLibrary[i].title + authTXT + myLibrary[i].author + pagesTXT+ myLibrary[i].pages;
        list.appendChild(div);
        button.className = "bookRemove"
        div.appendChild(button);
        button.innerText = "Remove";
        button.onclick = removeBook;
    }}

function openForm(){

    formToggle.style.display = "flex";

}

function closeForm(){

    formToggle.style.display = "none";
}

function formListen (){
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;

    var book = new Book(titleInput,authorInput,pagesInput);
    addBookToLibrary(book);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
}



function removeBook(){
    this.parentElement.remove()
}

    addEventListener("submit",formListen);




addButton.addEventListener("click",openForm);
subButton.addEventListener("click", closeForm);

