#HTTP Requests

## HTTP Services

For this project the HTTP requests are performed using the HTTP Client called Axios.
Axios improves the developer experience when compared to AJAX requests, which
rely on callback-based HTTP requests with asynchronous operations, resulting in ‘callback hell’.
I have created the getAll, create, update and del methods to handle CRUD
operations in the book.js file to abstract away the logic for better code reuse and readability.

<img width="612" height="524" alt="Screenshot 2025-08-09 at 13 47 23" src="https://github.com/user-attachments/assets/9b93ad56-d4f6-42c4-a815-278ed59b78dc" />


## HTTP GET Requests

The GET request logic is accessed from a single App.jsx file in the application to provide a ‘single source of truth’. This request is nested in an asynchronous function which allows the ‘Promise’ to be fulfilled before updating the data. The React Hook useEffect here listens out for any changes to the formType variable. The formType variable is responsible for changing the format of the data that is received from the server. This is performed via the ‘Choose data type’ dropdown in the view all books page.

<img width="729" height="732" alt="Screenshot 2025-08-09 at 13 47 07" src="https://github.com/user-attachments/assets/3033b544-1019-4552-a760-6a9e59c67e28" />

<img width="847" height="532" alt="Screenshot 2025-08-09 at 13 47 51" src="https://github.com/user-attachments/assets/029cce70-3fb4-40c7-9bfb-d0389c342d41" />

## HTTP POST Requests

To create a new book entry, the create method is called within an asynchronous function which contains the URL Path, form data and headers.

<img width="750" height="361" alt="Screenshot 2025-08-09 at 13 48 11" src="https://github.com/user-attachments/assets/7f4e3b14-1635-46a9-83e4-9b1df774135a" />

<img width="857" height="541" alt="Screenshot 2025-08-09 at 13 48 23" src="https://github.com/user-attachments/assets/69d811e2-09d9-495e-b4d8-9b770c979e7d" />

## HTTP PUT Requests

To edit a book, I’ve used the update Axios method within an asynchronous function. Once the operation is complete, the book's variable is updated with the new data. Using this method updates the book list without a full refresh of the React application. The navigate hook is used to navigate to the book list page once complete.
<img width="622" height="472" alt="Screenshot 2025-08-09 at 13 48 41" src="https://github.com/user-attachments/assets/051eb822-a546-4477-b51b-80f11ce77a80" />

<img width="857" height="536" alt="Screenshot 2025-08-09 at 13 49 13" src="https://github.com/user-attachments/assets/497d8807-2b9e-4be5-a649-312938c4b985" />

## HTTP DELETE Requests

The delete logic has been abstracted into a single handleDelete button for reusability
across the application. This typical async/await function that calls upon the del
method, which passes the book.id to the server via the request URL. The user has
the option to confirm their request to prevent accidental deletion. The book state is
updated with the latest books using the JS filter method to prevent a full refresh of the
application.

<img width="706" height="536" alt="Screenshot 2025-08-09 at 13 49 49" src="https://github.com/user-attachments/assets/d947d73a-d447-4b25-88e5-66d6defd6701" />

<img width="744" height="471" alt="Screenshot 2025-08-09 at 13 50 38" src="https://github.com/user-attachments/assets/56849343-8294-4e99-9718-017299312d9c" />

