# Users Service

## Domain
This service manages the business logic for the `users` entity. It extends the generic `Service` class from the core module and uses the `usersRepository` for data access.

## Responsibilities
- Provides standard CRUD operations (Create, Read, Update, Delete) for users.
- Implements any user-specific business logic and validation.
- Orchestrates operations between the API layer and the data access layer.

## Usage
The `usersService` is a singleton instance of the `UsersService` class and can be imported and used throughout the application.

### Basic Usage
```typescript
import { usersService } from '@/v2/services/database/users';

// Get all users
const allUsers = await usersService.GET.All();

// Get a user by ID
const user = await usersService.GET.ById(1);

// Create a new user
const newUser = await usersService.POST.Create({
  name: 'John Doe',
  email: 'john.doe@example.com',
  // ...other properties
});
```

### Extending with Custom Business Logic
To add custom business logic, you can add methods to the `UsersService` class in `users.service.ts`.

```typescript
// in users.service.ts

class UsersService extends Service<typeof users> implements IService<typeof users> {
  constructor() {
    super(usersRepository);
  }

  // Custom method to get active users
  async getActiveUsers() {
    const allUsers = await this.GET.All();
    return allUsers.filter(user => user.isActive);
  }
}