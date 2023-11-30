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

let r1 = readline.question("Enter Any number :\n1.Display Book.\n2.Add Book to Cart\n3.Show the cart.\n4.Exit\n");

if(r1 == 1){
    showAvailableBooks();  
    r1 = readline.question("Enter Any number :\n1.Display Book.\n2.Add Book to Cart\n3.Show the cart.\n4.Exit\n");   
}
if(r1==2){
    let bookIndex = readline.question("Enter Book Index : ");
    let Quantity = readline.question("Enter Quantity of Book : ")
    addBookToCart(bookIndex,Quantity);
    r1 = readline.question("Enter Any number :\n1.Display Book.\n2.Add Book to Cart\n3.Show the cart.\n4.Exit\n");   

}
if(r1==3){
    let res = showCart();
    console.log(`Total Cart Value: ${res}`);
    r1 = readline.question("Enter Any number :\n1.Display Book.\n2.Add Book to Cart\n3.Show the cart.\n4.Exit\n");   
}
if(r1==4){
    console.log("Thank You for visiting the portal\n");
}

function showAvailableBooks() {
    console.log("Available Books:");
    console.log("+----+----------------------+-------+----------+");
    console.log("| ID |        Name          | Price | Quantity |");
    console.log("+----+----------------------+-------+----------+");

    for (let i = 0; i < bookStore.length; i++) {
        console.log(`| ${i + 1}  | ${padString(bookStore[i].name, 20)} | $${padString(bookStore[i].price.toFixed(2), 5)} | ${padString(bookStore[i].quantity.toString(), 8)}|`);
    }

    console.log("+----+----------------------+-------+----------+");
}

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
           
        if(selectedBook.quantity == 0){
            selectedBook.status = 'unavailable';
        }
        console.log("After Adding Books to cart, The available Books in List are : ");
        console.log(selectedBook);

    } else {
        console.log("Available Quantity of Book",selectedBook.name,"Invalid selection or insufficient quantity. Please try again.");
        console.log("These are the available books with this quantity",showAvailableBooks());
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
        return totalCartValue;
    }  
    else{
        console.log("Your Cart is Empty");
        exit();
    }
}

// Function to pad a string with spaces
function padString(str, length) {
    return str.padEnd(length);
}
