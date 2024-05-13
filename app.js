/*Adding a book in Library Function*/
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    displayBooks();  // After adding a book, update the display
}

function displayBooks() {
    const tableBody = document.getElementById("table-body-item");

    //Clear Existing Table rows
    tableBody.innerHTML = "";

    //Loop through each book in the library   
    myLibrary.forEach( (book) => {

    // Create a new row for each book
    const row = tableBody.insertRow();

    // Insert cells for book details
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);

    // Set the text content of each cell
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    readCell.textContent = book.read ? "Read" : "Not read";

    }); 
}
