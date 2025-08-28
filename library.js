const myLibrary =[];
const shelf = document.getElementById('shelf');
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
addBookToLibrary(book1);
addBookToLibrary(book2);
function status(read){
    if (!read) {
        return 'Unknown';
    }
    if(read.toLowerCase() === 'read'){
        return 'yes, you have read this book';
    }
    else{
        return 'No, why don\'t you try it';
    }
}
function display(){
shelf.innerHTML = '';
myLibrary.forEach(all =>{
    const booked= document.createElement('div');
    booked.classList.add('booked-list');
    booked.dataset.bookId = all.id;
    booked.innerHTML = '<h3> Book Title: ' + all.title+ '</h3>' ;
    booked.innerHTML += '<p> Author: '  + all.author + '</p>' ;
    booked.innerHTML += '<p> Number of pages: ' + all.pages + '</p>' ;
    booked.innerHTML += '<p>Have Read: ' + status(all.read)+ '</p>';
    booked.innerHTML += '<button class="delete"> Remove </button> <button class="status"> status</button>'; 
    shelf.appendChild(booked);
}
);
}
display();
const look = document.querySelector('#look');
const add = document.querySelector('.add');
add.addEventListener('click', function(){
    look.showModal();
});
const form = document.querySelector('#books');
form.addEventListener('submit', function(e){
    e.preventDefault();
const titles = document.querySelector('#book').value ;
const authors = document.querySelector('#author').value ;
const pages = document.querySelector('#pages').value ;
const reading = document.querySelector('#read').value ;
const newBook = new Book(titles , authors , pages , reading);
addBookToLibrary(newBook);
display();
look.close();
form.reset();
});
shelf.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        const list = e.target.closest('.booked-list');
        const bookId = list.dataset.bookId;
        const outcome = myLibrary.findIndex(book =>book.id === bookId);
        myLibrary.splice(outcome ,1);
        display();
    }
    else if(e.target.className === 'status'){
        const list = e.target.closest('.booked-list');
        const bookId = list.dataset.bookId;
        const change = myLibrary.find(book => book.id === bookId);
        if(change.read==='Read'){
            change.read = 'Not-read';
        }
        else{
            change.read = 'Read';
        }
    }
    else{
        return '';
    }
    display();
});
