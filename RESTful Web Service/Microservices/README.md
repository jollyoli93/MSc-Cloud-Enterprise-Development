# Microservices

For this project, there are two microservices: the BookController, which serves the book CRUD functionality, and the GenreController, which serves the genre features. I
chose to serve the genre as a microservice to reduce the computational load that would be required to process the genre algorithms on the client-server, improving
user experience. The BookController is served at the endpoint “/api/v1/books” and it accepts HTTP requests of GET, POST, PUT and DELETE.

Part of the assignment was to implement the CRUD operation using JSON, XML and a custom Text format.

## HTTP GET
<img width="713" height="663" alt="Screenshot 2025-08-09 at 15 37 01" src="https://github.com/user-attachments/assets/9f8eff35-5dc3-4797-93ce-fe32c6725f8c" />

## HTTP POST
<img width="830" height="382" alt="Screenshot 2025-08-09 at 15 37 18" src="https://github.com/user-attachments/assets/c658a6e0-809c-4065-95f5-b18f93387d6a" />
<img width="804" height="397" alt="Screenshot 2025-08-09 at 15 37 44" src="https://github.com/user-attachments/assets/db53c32e-2b22-42a9-ab1c-7be9f8d216bf" />

## HTTP PUT

<img width="842" height="444" alt="Screenshot 2025-08-09 at 15 37 53" src="https://github.com/user-attachments/assets/6b2eb1e1-5a85-41a4-8904-5743c01a13b4" />


## HTTP DELETE
<img width="810" height="300" alt="Screenshot 2025-08-09 at 15 38 03" src="https://github.com/user-attachments/assets/dbf7ea85-4eff-45aa-9ed6-fdbeafbce512" />

## Custom Text Format

In addition to XML and JSON, I have included a custom text format. I have provided
a method in the book class to turn each book into this text format, which is of a
specific uniform standard.

<img width="835" height="98" alt="Screenshot 2025-08-09 at 15 39 32" src="https://github.com/user-attachments/assets/da93b321-7fec-42fd-9876-6264ac0a573a" />


Within the bookList class used for the XML and JSON format, I have created an
algorithm to append the custom book format together with a ‘+’ delimiter for easy
parsing.

<img width="755" height="358" alt="Screenshot 2025-08-09 at 15 39 45" src="https://github.com/user-attachments/assets/d278ce97-a825-4c2b-9ff4-a3c9f1b69f10" />

To enable the passing of data between the client and server side, I have created my
own library of tools to help parse and convert the text back into a native Java book
object, making use of the hashmap data structure.

<img width="713" height="758" alt="Screenshot 2025-08-09 at 15 40 05" src="https://github.com/user-attachments/assets/e4085ce9-b9d3-4b50-878c-765fda612b65" />

