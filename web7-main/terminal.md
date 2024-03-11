## Installations
# backend

Initialize:
- npm init -y

Dependencies:
- npm install express dotenv cors mongoose jsonwebtoken bcrypt colors validator

DevDependencies:
- npm install nodemon concurrently jest supertest cross-env -D


# frontend

Initialize:
- npx create-react-app <directory>

- npm install react-router-dom


# Running the application
# backend

- "npm run dev" or nodemon server.js 
- ("npm start" or node server.js)

# frontend

- "start" or react-scripts start


## Testing
(from backend folder)

- npm test
- npm test -- tests/file.test.js

- npm test -- -t "the name of a describe or it/test"

