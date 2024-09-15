let readarray = [] ;

document.getElementById("addbookform").addEventListener("submit",function(){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    // declared book properties
    addbook(title,author,pages,read);
    // declaring bookcard and bookremove and adding the classes
    let bookcard = document.createElement("div");
    bookcard.classList.add("svg-background");
    let bookremove = document.createElement("span");
    bookremove.classList.add("bookremove");
//    adding html based on book properties
    bookcard.innerHTML = `<p> Title: ${title} <br>Author: ${author}  <br>Pages:${pages}</p>`;
    bookcard.appendChild(bookremove);
    // code to determine what background svg to use
    const bookshelf = document.getElementById("bookshelf");
    if(read === true){
        bookcard.style.backgroundImage = "url('media/book-svgrepo-com.svg')"
    }
    else{
        bookcard.style.backgroundImage = "url('media/book-bookmark-svgrepo-com.svg')"
    }

    // for deleting bookcards
    bookremove.addEventListener("click",function(){
        bookshelf.removeChild(bookcard);
        console.log(bookshelf.childNodes.length)
        if(bookshelf.childNodes.length ===2  || bookshelf.childNodes.length === 0){
            console.log("hi there")
            bookshelf.style.backgroundImage="url('media/openart-image_gCmiUbtY_1726424071484_raw.svg')";
            bookshelf.innerHTML = '<h1 id="h1tag"> GO READ SOMETHING!!!!</h1>'
            
        }

    })

    //changing background based on if you have read the book or not 
    bookcard.addEventListener("click",function(){
        if (bookcard.style.backgroundImage.includes('book-svgrepo-com.svg')) {
            bookcard.style.backgroundImage = "url('media/book-bookmark-svgrepo-com.svg')";
        } else {
            bookcard.style.backgroundImage = "url('media/book-svgrepo-com.svg')";
        }
    })
    // to remove the text after adding a card
    const h1element= hasH1Element();
    if(h1element === true){
        const h1 = document.getElementById("h1tag")
        bookshelf.removeChild(h1)
        bookshelf.style.backgroundImage="none";
    }
    bookshelf.appendChild(bookcard);
    document.getElementById("modalOverlay").style.display = "none";
}
)

function hasH1Element() {
    const bookshelf = document.getElementById("bookshelf");
    if (bookshelf) {
        const h1 = bookshelf.getElementsByTagName('h1');
        return h1.length > 0;
    }
    return false;
}

function addbook(title,author,pages,read){
    let newbook = new book(title,author,pages,read);
    readarray.push(newbook);
}

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this .pages = pages;
    this.read = read;
    bookcoll={
        title : `${this.title}`,
        author: `${this.author}`,
        pages: this.pages,
        read: this.read
    }
    console.log(bookcoll)
    return bookcoll
}


document.getElementById("openModalButton").addEventListener("click", function() {
    document.getElementById("modalOverlay").style.display = "block";
});


document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modalOverlay").style.display = "none";
});


window.addEventListener("click", function(event) {
    const modal = document.getElementById("modalOverlay");
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}); 