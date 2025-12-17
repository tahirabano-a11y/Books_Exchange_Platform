// JavaScript interactivity for borrowing books
function borrowBook(bookName) {
    const confirmBorrow = confirm(`Do you want to borrow "${bookName}"?`);
    if(confirmBorrow) {
        alert(`You have successfully requested: ${bookName}`);
    } else {
        alert(`Request cancelled for: ${bookName}`);
    }
}
