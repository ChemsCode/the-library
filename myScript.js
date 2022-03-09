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


function addBookToLibrary(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    console.log(title + author + pages + read)

    myLibrary.push(new Book(title, author, pages, read))

    console.log(myLibrary[0].info())
}

