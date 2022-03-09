let myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    var readStatus;
    if(this.read){
        readStatus = "has been read."
    }
    else{
        readStatus = "has not been read."
    }
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + readStatus;
}


var theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info())


let counter = 0;

function addBookToLibrary(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    console.log(title + author + pages + read)

    myLibrary.push(new Book(title, author, pages, read))

    closeForm();

    addBookToMain(myLibrary[counter]);

    counter++;
}



//logic for opening form

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}


//logic for adding book into page


function addBookToMain(book){
    var card = document.createElement("div");
    card.classList.add("cards");
    card.innerHTML =  "<br/>" + "BOOK" + "<br/>"
    // card.innerHTML = Book.info();
    for(var name in book){
        if((typeof book[name]) == "function")
        continue;
        console.log(typeof book[name])

        card.innerHTML += "<br/>" +name + ": "+ book[name] + "<br/>";
    }
    document.getElementById("main").appendChild(card);
}