const readline = require("readline-sync");

// Task 1
let bookStore = [
    {
        name: "Book 1",
        price: 15,
        status: "available",
        quantity: 5
    },
    {
        name: "Book 2",
        price: 25,
        status: "available",
        quantity: 8
    },
    {
        name: "Book 3",
        price: 20,
        status: "unavailable",
        quantity: 0
    }
];

let cart = [];

let r1 = readline.question("Enter the 1, for Show the books 2, for Add Book to Cart 3, Show the cart : ");

if(r1 == 1){
    showAvailableBooks();  
    r1 = readline.question("Enter the 1, for Show the books 2, for Add Book to Cart 3, Show the cart : ");   
}
if(r1==2){
    let bookIndex = readline.question("Enter Book Index : ");
    let Quantity = readline.question("Enter Quantity of Book : ")
    addBookToCart(bookIndex,Quantity);
}
if(r1==3){
    showCart();
}
function showAvailableBooks() {
        console.log("Available Books:");
        for (let i = 0; i < bookStore.length; i++) {
            console.log(`${i + 1}. Name: ${bookStore[i].name}, Price: $${bookStore[i].price}, Quantity: ${bookStore[i].quantity}`);
        }
          }
    
//Add book to cart

function addBookToCart(bookIndex, quantity) {
    const selectedBook = bookStore[bookIndex - 1];

    if (selectedBook && selectedBook.status === "available" && selectedBook.quantity >= quantity) {
        cart.push({
            name: selectedBook.name,
            price: selectedBook.price,
            quantity: quantity,
            totalPrice: selectedBook.price * quantity
        });

        // Update bookStore quantity
        selectedBook.quantity -= quantity;

        console.log(`${selectedBook.name} has been added to the cart.\n`);
        showCart()
        console.log("After Adding Books to cart, The available Books in List are : ",selectedBook)
    } else {
        console.log("Available Quantity of Book",selectedBook.name,"Invalid selection or insufficient quantity. Please try again.");
    }
}

function showCart() {
    let totalCartValue = 0;
    if(!cart.length == 0){
        console.log("Your Books in Cart");
    for (const book of cart) {
        console.log(`Name: ${book.name}, Price: $${book.price}, Quantity: ${book.quantity}, Total Price: $${book.totalPrice}`);
        totalCartValue += book.totalPrice;
    }
    console.log(`Total Cart Value: $${totalCartValue}`);
    }  
    else{
        console.log("Your Cart is Empty")
    }
    
  
   
    // showAvailableBooks();
}