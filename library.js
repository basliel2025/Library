const myLibrary =[];
function Book(title , author , pages , read){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = read;
    this.id= crypto.randomUUID();
}
function addBookToLibrary(book){
    const store = myLibrary;
    store.push(book);
}