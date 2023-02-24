# Blog app v0.1.1

## Requirements:
	- NodeJS v16
	- Openjdk 19 (Java 19)
	- Maven 3.6
	- Postgres database with blog database created (docker-compose with database config is added, you need docker and docker-compose installed and run docker-compose up)

## frontend steps
	- cd ./frontend (access to frontend folder)
	- npm install (install dependencies)
	- npm start (run application on port 3000)

## backend steps
	- cd ./backend (access to backend folder)
	- mvn clean install package (install dependencies y crear el ejecutable)
	- cd target (access to build folder and find backend-0.1.1-SNAPSHOT.jar)
	- java -jar backend-0.1.1-SNAPSHOT.jar (run microservice on port 8081)

## Notes
	- You can change the application port and the database url and credentials on: ./backend/src/main/resources/application.properties in the variables *server.port* for port application and *spring.datasource...* (url, username, password) for database credentials.
	- If you change the port of backend, you will need to change the port in proxy localized on ./frontend/package.json and apiEndpoint constant on ./frontend/src/config/constants.js
