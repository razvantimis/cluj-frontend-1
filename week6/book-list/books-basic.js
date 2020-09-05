// array which contains the initial books
var books = [{
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    },
    {
        title: 'Moara cu noroc',
        author: 'Ioan Slavici',
        alreadyRead: true
    }
];

// get the element with 'myBooks' id
var myBooks = document.getElementById('myBooks');

// create a list element
var bookList = document.createElement('ul');

// append the created element to the myBooks element
myBooks.appendChild(bookList);

// call the displayBook() function for every book in the books array
for (var i = 0; i < books.length; i++) {
    displayBook(books[i]);
}

// get the buttom with the 'addNewBook' id
var button = document.getElementById('addNewBook');

// add a click event listener to this button
button.addEventListener('click', function () {

    // get the values from the title and author inputs
    var bookTitle = document.getElementsByName('title')[0].value;
    var bookAuthor = document.getElementsByName('author')[0].value;

    // create an new book object with the values that we get from the inputs
    var newBook = {
        title: bookTitle,
        author: bookAuthor,
        alreadyRead: false
    };

    // call the displayBook() function with the newBook object as argument
    displayBook(newBook);

});

function displayBook(currentBook) {
    // create a list item element
    var listItem = document.createElement('li');

    // create an input
    var checkbox = document.createElement('input');
    // set the input type attribute to checkbox
    checkbox.setAttribute('type', 'checkbox');
    // set the checked attribute based on the books alreadyRead property 
    checkbox.checked = currentBook.alreadyRead;
    // append the checkbos to the list item
    listItem.appendChild(checkbox);

    // get the book details from the title and author properites concatenated with the 'by' string
    var bookDetails = currentBook.title + ' by ' + currentBook.author;
    // create a text node which contains the bookDetails string
    var bookDetailsTextNode = document.createTextNode(bookDetails);
    // append the bookDetailsTextNode to the list item
    listItem.appendChild(bookDetailsTextNode);

    // append the list item to the bookList (global variable)
    bookList.appendChild(listItem);
}