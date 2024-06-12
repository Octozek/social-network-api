# Social Network API

## Description

This project is a backend API for a social network application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Development Stages](#development-stages)
- [Video Demonstration](#video-demonstration)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/social-network-api.git
   ```
2. Navigate to the project directory:

   ```bash
   cd social-network-api
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start the MongoDB server on your local machine.

5. Run the application:

   ```bash
   npm start
   ```

### Users

- **GET all users**
  - URL: `/api/users`
  - Method: GET
  - Expected Response: JSON array of all users.

- **GET a single user by ID**
  - URL: `/api/users/:id`
  - Method: GET
  - Expected Response: JSON object of the user with the specified ID.

- **POST a new user**
  - URL: `/api/users`
  - Method: POST
  - Body:
    ```json
    {
      "username": "newuser",
      "email": "newuser@example.com"
    }
    ```
   - Expected Response: JSON object of the created user.

- **PUT to update a user by ID**
  - URL: `/api/users/:id`
  - Method: PUT
  - Body:
    ```json
    {
      "username": "updateduser",
      "email": "updateduser@example.com"
    }
    ```
  - Expected Response: JSON object of the updated user.

- **DELETE a user by ID**
  - URL: `/api/users/:id`
  - Method: DELETE
  - Expected Response: Confirmation message and deletion of associated thoughts.

- **POST to add a friend to a user's friend list**
  - URL: `/api/users/:userId/friends/:friendId`
  - Method: POST
  - Expected Response: JSON object of the updated user with the new friend added.

- **DELETE to remove a friend from a user's friend list**
  - URL: `/api/users/:userId/friends/:friendId`
  - Method: DELETE
  - Expected Response: JSON object of the updated user with the friend removed.

#### Thoughts

- **GET all thoughts**
  - URL: `/api/thoughts`
  - Method: GET
  - Expected Response: JSON array of all thoughts.

- **GET a single thought by ID**
  - URL: `/api/thoughts/:id`
  - Method: GET
  - Expected Response: JSON object of the thought with the specified ID.

- **POST a new thought**
  - URL: `/api/thoughts`
  - Method: POST
  - Body:
    ```json
    {
      "thoughtText": "This is a new thought",
      "username": "newuser",
      "userId": "user_id_here"
    }
    ```
  - Expected Response: JSON object of the created thought.

- **PUT to update a thought by ID**
  - URL: `/api/thoughts/:id`
  - Method: PUT
  - Body:
    ```json
    {
      "thoughtText": "This is an updated thought"
    }
    ```
  - Expected Response: JSON object of the updated thought.

- **DELETE a thought by ID**
  - URL: `/api/thoughts/:id`
  - Method: DELETE
  - Expected Response: Confirmation message.

- **POST a reaction to a thought**
  - URL: `/api/thoughts/:thoughtId/reactions`
  - Method: POST
  - Body:
    ```json
    {
      "reactionBody": "This is a reaction",
      "username": "newuser"
    }
    ```
  - Expected Response: JSON object of the updated thought with the new reaction.

- **DELETE a reaction by ID**
  - URL: `/api/thoughts/:thoughtId/reactions/:reactionId`
  - Method: DELETE
  - Expected Response: JSON object of the updated thought with the reaction removed.

  ### Development Stages

#### Initial Setup

- Basic project structure and placeholder files.
- Placeholder for user and thought models, controllers, and routes.

#### Middle Stage

- Partially implemented user and thought models.
- Basic CRUD operations for users and thoughts.
- Initial routes setup for users and thoughts.

**Commit Message:**
```bash
git commit -m "Partially implemented user and thought models, controllers, and routes"
```

#### Final Stage

- Fully implemented user and thought models, controllers, and routes.
- Complete CRUD functionality.
- Friend and reaction functionalities added and tested.

**Commit Message:**
```bash
git commit -m "Complete implementation of user and thought models, controllers, and routes"
```


## Video Demonstration

Watch the full demonstration and testing of the Social Network API using Postman: [Social Network API - Postman Testing and Demonstration](https://youtu.be/7yNQ6H_yb8I)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
