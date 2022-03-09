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
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.readStatus;
}

var theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info())