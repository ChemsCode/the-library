function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        var readStatus;
        if(read){
            readStatus = "has been read."
        }
        else{
            readStatus = "has not been read."
        }
        return title + " by " + author + ", " + pages + " pages, " + readStatus;
    }
}

var theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info())