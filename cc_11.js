//Task 1: Creating a Book Class
class Book {
    constructor (title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity){
        this.copies += quantity;
    }
}

//Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2: Creatin a Borrower Class
class Borrower {
    constructor(name, borrowerId){
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(bookTitle){
        this.borrowedBooks.push(bookTitle);
    }
    returnBook(bookTitle){
        this.borrowedBooks = this.borrowedBooks.filter(book => book !==bookTitle);
    }
}

//Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []

//Task 3: Creating a Library Class
class Library {
    constructor(){
        this.books = [];
        this.borrowers = [];
    }
    addBook(book){
        this.books.push(book);
    }
    listBooks(){
        this.books.forEach(book => console.log(book.getDetails()));
    }


//Task 4: Implementing Book Borrowing
lendBook(borrowerId, isbn) {
    let book = this.books.find(bk => bk.isbn === isbn); // finds the specific book
    let borrower = this.borrowers.find(br => br.borrowerId === borrowerId); // finds the specific borrower
    if (!book) { // runs if statement to determine which action to run
        console.log(`Book was not found with this ISBN`);
    } if (borrower) {
        console.log(`No borrower was found`);
    } if (book.copies > 0) {
        book.updateCopies(-1);
    } else {
        console.log(`No books were found`);
    }
}

// Task 5: Implementing Book Returns
returnBook(borrowerId, isbn) {
    let book = this.books.find(bk => bk.isbn === isbn); // finds the specific book
    let borrower = this.borrowers.find(br => br.borrowerId === borrowerId); // finds the specific borrower

    if (!book) { // runs if statement to determine which action to run
        console.log(`Book was not found with this ISBN`);
    } if (borrower) {
        console.log(`No borrower was found`);
    } else {
        book.updateCopies(1);
    }
}
}

