# MSc Cloud and Enterprise Development

## Online Bookstop

The purpose of this assignment is to demonstrate my ability to implement highly scalable web applications built
using the two prominent architectural styles (MVC and RESTful web services) using Java and Tomcat Servlets. The RESTful web
service will serve data in three formats (JSON, XML and Text), which will then be consumed by a
JS client application that will facilitate full CRUD functionality on the database.

Learning outcomes being assessed:
1. Create highly scalable software solutions using contemporary cloud computing services and tools.
2. Critically evaluate the competing cloud providers, selecting an appropriate provider for a
specific problem, system or use case.
3. Create and critically review distributed applications in a suitable language.
4. Apply knowledge of web services technology to create distributed systems.
5. Critically analyse and implement Design Patterns in appropriate programming contexts.

Due to university guidelines on academic dishonesty, I can't provide the raw code, but I will demonstrate my learning
through screenshots and write-ups.

## Bookshop Overview

### Front Page
<img width="1710" height="1026" alt="image" src="https://github.com/user-attachments/assets/6bc0d470-e7b4-4bf6-8138-56ce3ca2072b" />
<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/a00a0193-6f74-42a7-9cd4-7493178eb415" />
<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/f22a58ee-50e1-4a55-86f4-e5e53aa8c7bc" />
<br/>

### Books Listing View
<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/0b728256-d97e-4233-8678-133a0422c288" />
<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/984f4559-49d6-40f1-8cfa-5596135a4074" />
<img width="1702" height="952" alt="image" src="https://github.com/user-attachments/assets/8d5aa691-bf22-4ccb-b1fc-9a20115e2933" />

<br/>
### Genre Listing View

Showing all genres using reusable cards.
<img width="941" height="539" alt="image" src="https://github.com/user-attachments/assets/32a85108-e466-4b33-af6f-ef469a4e94c0" />
<img width="1703" height="1022" alt="image" src="https://github.com/user-attachments/assets/6bf33b05-79af-4ef0-8a8b-55990d39a13c" />

### CRUD
All CRUD operations can be served with JSON, XML and a Custom Text format with a dropdown selector.
<img width="953" height="604" alt="Screenshot 2025-08-09 at 08 21 11" src="https://github.com/user-attachments/assets/ee0c0654-e4dd-4a27-afeb-dde33a0adca2" />

## Cloud Deployment

### RESTFUL Web Deployment
The RESTful Web application was deployed to MS Azure’s Web App. This is a Platform-as-a-Service, abstracting away the management of the infrastructure.
The runtime stack for this application uses Java 17, using the Tomcat 9.0 web server with Linux as the underlying operating system. This was deployed to the UK South regional data centre on the B1 basic App Service plan, which equates to one virtual machine instance.

<img width="934" height="463" alt="Screenshot 2025-08-09 at 08 32 30" src="https://github.com/user-attachments/assets/d536d007-9675-4017-9364-df84286e013a" />

## Client-Side Cloud Deployment

The client-side application was deployed using the Azure Static Web Apps service. The deployment process was straightforward and integrated seamlessly with GitHub Actions. After building the React application for production using the npm run build command, the application was automatically deployed through a GitHub Workflow configuration provided by Azure. Once deployed, the URL was included in the CORS filter in the REST API.

<img width="874" height="532" alt="Screenshot 2025-08-09 at 08 41 18" src="https://github.com/user-attachments/assets/468badb0-d10c-44eb-8bb8-12714d1ae028" />
*New Book being inserted into the deployment backend from the client Azure Web App.*
