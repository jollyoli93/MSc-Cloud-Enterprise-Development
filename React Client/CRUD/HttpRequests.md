#HTTP Requests

## HTTP Services

For this project the HTTP requests are performed using the HTTP Client called Axios.
Axios improves the developer experience when compared to AJAX requests, which
rely on callback-based HTTP requests with asynchronous operations, resulting in ‘callback hell’.
I have created the getAll, create, update and del methods to handle CRUD
operations in the book.js file to abstract away the logic for better code reuse and readability.

_insert figure 17_

## HTTP GET Requests

The GET request logic is accessed from a single App.jsx file in the application to provide a ‘single source of truth’. This request is nested in an asynchronous function which allows the ‘Promise’ to be fulfilled before updating the data. The React Hook useEffect here listens out for any changes to the formType variable. The formType variable is responsible for changing the format of the data that is received from the server. This is performed via the ‘Choose data type’ dropdown in the view all books page.

_insert figure 18_

## HTTP POST Requests

To create a new book entry, the create method is called within an asynchronous function which contains, the URL Path, form data and headers.

__Figre 21__

## HTTP PUT Requests

To edit a book, I’ve used the update Axios method within an asynchronous function. Once the operation is complete, the books variable is updated with the new data. Using this method updates the book list without a full refresh of the React application. The navigate hook is used to navigate to the book list page once complete.

## HTTP DELETE Requests

__figure 18 __ 

