# User Repository

The `users.repository.ts` file manages all database operations for users, such as creating, reading, updating, and deleting user data. It acts as a bridge between the application's business logic and the database, ensuring that data is handled consistently and efficiently.

## How It Works

The repository pattern in this project is implemented using a generic base class and specific repository implementations.

1.  **Generic `Repository` Class**: The `src/core/core.repository.ts` file defines a generic `Repository` class. This class is designed to work with any database table and contains all the common database operations: `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.

2.  **`UsersRepository` Inherits from `Repository`**: The `users.repository.ts` file creates a specific repository for the `users` table. It does this by extending the generic `Repository` class and passing the `users` table schema to it. This means that the `UsersRepository` automatically gets all the `SELECT`, `INSERT`, `UPDATE`, and `DELETE` methods from the base `Repository`, but they are now specifically typed to work with the `users` table.

3.  **How It's Used**: When other parts of the application need to interact with the `users` table, they don't write SQL queries directly. Instead, they use the `usersRepository`. For example, to get all users, they would call `usersRepository.SELECT.All()`.

This approach has several advantages:

*   **Clean and Reusable Code**: You don't have to write the same database logic over and over again for different tables.
*   **Type Safety**: The repository ensures that you can't, for example, try to insert data that doesn't match the `users` table schema.
*   **Easy to Maintain**: If you need to change how you interact with the database, you only need to update the generic `Repository` class, and the changes will apply to all repositories that inherit from it.

## Usage Example

To use the `usersRepository`, you would import it into the part of your application that needs to interact with the `users` table, typically a "service" file. Then, you can call its methods to perform database operations.

Here is a practical example of how you might use it in a `UsersService`:

```typescript
// Import the repository instance
import { usersRepository } from './path/to/your/repositories/users.repository';
import { NewUser } from './path/to/your/db/schema'; // Assuming you have a NewUser type

class UsersService {
  // Get all users
  async getAllUsers() {
    try {
      const allUsers = await usersRepository.SELECT.All();
      return allUsers;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  }

  // Get a single user by their ID
  async getUserById(id: number) {
    try {
      const user = await usersRepository.SELECT.ById(id);
      if (!user) {
        console.log(`User with ID ${id} not found.`);
        return null;
      }
      return user;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new user
  async createUser(userData: NewUser) {
    try {
      const newUser = await usersRepository.INSERT.One(userData);
      console.log("New user created:", newUser);
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  // Update an existing user
  async updateUser(id: number, updates: Partial<NewUser>) {
    try {
      const updatedUser = await usersRepository.UPDATE.One(id, updates);
      if (!updatedUser) {
        console.log(`User with ID ${id} not found for update.`);
        return null;
      }
      console.log("User updated:", updatedUser);
      return updatedUser;
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a user
  async deleteUser(id: number) {
    try {
      const wasDeleted = await usersRepository.DELETE.One(id);
      if (wasDeleted) {
        console.log(`User with ID ${id} was deleted.`);
      } else {
        console.log(`User with ID ${id} not found for deletion.`);
      }
      return wasDeleted;
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      throw error;
    }
  }
}

// Example of how to use the service
const usersService = new UsersService();
// await usersService.createUser({ name: 'John Doe', email: 'john.doe@example.com' });
// const user = await usersService.getUserById(1);
```

# User Repository Tests

To run the tests for the user repository, use the following command:

```bash
# It seems there is an issue with the current environment.
# The following command is a placeholder based on the project structure.
# You may need to adjust it based on your local setup.
pnpm tsx -r tsconfig-paths/register path/to/your/user-repository-test.ts