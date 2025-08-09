# Data Access Objects and Connections
The Data Access Object (DAO) class controls the flow of data from the database into a Java class defined by the Model. This instantiates a connection to a SQL database and submits requests using prepared statements to prevent malicious intent. The DAO is an ENUM type, as I have made use of the Singleton pattern for the SQL connection to ensure consistency when dealing with the database and allowing only one instance to be updated at a time.

## Connection

The connector class is of the abstract class type, which provides me with a reusable, extensible way of adding new connections to a database without having to modify the code.

<img width="677" height="825" alt="Screenshot 2025-08-09 at 22 44 37" src="https://github.com/user-attachments/assets/4de0e069-efe5-4fe3-b0b8-58dc594530cf" />

<img width="765" height="643" alt="Screenshot 2025-08-09 at 22 47 25" src="https://github.com/user-attachments/assets/a47a884b-9bfa-4de2-bb56-ca0e679ba4dd" />


## DAO


<img width="525" height="357" alt="Screenshot 2025-08-09 at 22 39 55" src="https://github.com/user-attachments/assets/a333997b-da56-49b1-8333-fa83730d6de0" />

<img width="726" height="792" alt="Screenshot 2025-08-09 at 22 42 06" src="https://github.com/user-attachments/assets/e7e5583e-740c-42f8-bf01-1763cb2942b1" />

<img width="735" height="580" alt="Screenshot 2025-08-09 at 22 38 11" src="https://github.com/user-attachments/assets/c929a053-1bc2-47d8-b755-1ad79ea6db09" />
<img width="776" height="808" alt="Screenshot 2025-08-09 at 22 38 35" src="https://github.com/user-attachments/assets/7bafaac8-27ce-4e08-8077-02e94f340c51" />
