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
    listBoks(){
        this.books.forEach(book => console.log(book.getDetails()));
    }
    lendBook(borrowerId,isbn){
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(br => br.borrowerId === borrowerId);

        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        } else {
            console.log("Cannot lend book: either book is unavailable or borrower not found.");
        }
    }
    returnBook(borrowerId, isbn){
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(br => br.borrowerId === borrowerId);

        if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
            book.updateCopies(1);
            borrower.returnBook(book.title);
        } else {
            console.log("Cannot return book: either book not found or borrower has not borrowed it.");
        }
    }
}

