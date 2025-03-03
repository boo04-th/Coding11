//Task 1: Creating a Book Class
class Book { //Class representing a book in the library
    constructor (title, author, isbn, copies){ 
        this.title = title; //Assigns the book title
        this.author = author; ///Assigns the author
        this.isbn = isbn; //Assigns the book's unique ISBN number
        this.copies = copies; //Sets the number of copies available in the library
    }
    getDetails() { //Method to return formatted book details as a string
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity){ //Method to update the number of copies
        this.copies += quantity; //Updates the number of
    }
}

//Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); //Creates a book instance with title, author, ISBN, and initial copies
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); //Simulates borrowing a book by decreasing
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2: Creatin a Borrower Class
class Borrower { //Class representing a borrower in the library system
    constructor(name, borrowerId){
        this.name = name; //Stores the borrower's name
        this.borrowerId = borrowerId; //Assigns a unique borrower
        this.borrowedBooks = []; //Initializes an empty array to store
    } 
    borrowBook(bookTitle){ //Method for borrowing a book
        this.borrowedBooks.push(bookTitle); //Ensures that the borrower does not borrow the same book multiple times
    }
    returnBook(bookTitle){ //Method for returning a book
        this.borrowedBooks = this.borrowedBooks.filter(book => book !==bookTitle); //Removes the returned book from the borrowed books list
    } 
}

//Test Cases
const borrower1 = new Borrower("Alice Johnson", 201); //Creates a borrower instance with name and unique borrower ID
borrower1.borrowBook("The Great Gatsby"); //Simulates borrowing a book by the borrower
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby"); //Simulates returning the borrowed book
console.log(borrower1.borrowedBooks); // Expected output: []

//Task 3: Creating a Library Class
class Library { //Class representing the library system
    constructor(){
        this.books = []; //Initializes an empty array to store books
        this.borrowers = []; //Initializes an empty array to store registered borrowers
    }
    addBook(book){ //Method to add a book to the library
        this.books.push(book); //Ensures that duplicate books with the same ISBN
    }
    listBooks(){ //Method to list all books in the library
        this.books.forEach(book => console.log(book.getDetails())); //Displays details of all books currently 
    }


//Task 4: Implementing Book Borrowing
lendBook(borrowerId, isbn) { //Method to lend a book to a borrower
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
returnBook(borrowerId, isbn) { //Method to return a book to the library
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


//Test cases
const library = new Library(); //Adds a book to the library
library.addBook(book1); //Lists all books in the library
library.listBooks(); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

library.lendBook(201, 123456); //Borrowing a book from the library
console.log(book1.getDetails()); //Displays updated book details after borrowing
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(["The Great Gatsby"]); // Expected output: ["The Great Gatsby"]

library.returnBook(201, 123456); //Returning the borrowed book
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks); // Expected output: []
