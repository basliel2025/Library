const myLibrary =[];
function Book(title , author , pages , read){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = read;
    this.id= crypto.randomUUID();
}
function addBookToLibrary(book){
myLibrary.push(book);
}
const book1 = new Book("To kill a Mockingbird" , "Harper Lee" , 281 , "Read" );
const book2 = new Book("1984" , "George Orwell" , 328 , "Not-read");
function display(){
const shelf = document.getElementById('shelf');
shelf.innerHTML = '';
myLibrary.forEach(all =>{
    const booked= document.createElement('div');
    booked.classList.add('booked-list');
booked-list.innerHTML = '<h3> Book Title: ' + all.title+ '</h3>'
booked-list.innerHTML = '<p> Author: '  + all.author + '</p>'
booked-list.innerHTML = '<p> Number of pages: ' + all.pages + '</P>'
booked-list.innerHTML = '<p>Have Read: ' + if(shelf.read === true){
    return 'yes';
}
else{
    return 'No';
} '</p>';



}
)}