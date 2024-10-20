// Selecting popup box, popup overlay, and add button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting cancel button
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Selecting container, add-book, book-title-input, book-description-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Lock/Unlock and delete functionality for default container
var defaultLockerButton = document.querySelector('.locker'); // Pre-existing lock button
var defaultDeleteButton = document.querySelector('.Delete'); // Pre-existing delete button

// Function to toggle lock and hide/show delete for default book
defaultLockerButton.addEventListener("click", function () {
    toggleLock(defaultLockerButton, defaultDeleteButton);
});

// Add event listener to delete button in default book
defaultDeleteButton.addEventListener("click", function () {
    defaultDeleteButton.parentElement.remove();
});

// Adding new book when clicking the add book button
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Validation: check if any field is empty
    if (booktitleinput.value.trim() === '' || bookauthorinput.value.trim() === '' || bookdescriptioninput.value.trim() === '') {
        alert("Please fill out all fields before adding the book.");
        return;
    }

    // Create the book container dynamically
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <button class="locker"><i class="fa-solid fa-lock-open"></i></button>
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="Delete">Delete</button>`;

    // Append the new book container to the container
    container.append(div);

    // Close the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Reset the form inputs
    booktitleinput.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';

    // Attach the lock functionality to the newly created locker button
    var lockerButton = div.querySelector('.locker');
    var deleteButton = div.querySelector('.Delete');

    lockerButton.addEventListener("click", function () {
        toggleLock(lockerButton, deleteButton);
        
    });
});


function toggleLock(lockerButton, deleteButton) {
    if (lockerButton.querySelector('i').classList.contains('fa-lock-open')) {
        lockerButton.querySelector('i').classList.remove('fa-lock-open');
        lockerButton.querySelector('i').classList.add('fa-lock');
        deleteButton.style.display = 'none';
    } else {
        lockerButton.querySelector('i').classList.remove('fa-lock');
        lockerButton.querySelector('i').classList.add('fa-lock-open');
        deleteButton.style.display = 'block';
        alert("Are you sure unlock you notes?");
    }
}
function deletebook(event) {
    event.target.parentElement.remove();
}
