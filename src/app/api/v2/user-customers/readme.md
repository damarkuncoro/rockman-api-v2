# User Customers API

This API manages the relationship between users and customers.

## Endpoints

### `GET /api/v2/user_customers`

-   **Method:** `GET`
-   **Description:** Retrieves a list of all user-customer relationships.
-   **Response:**
    -   `200 OK`: A JSON array of user-customer objects.
    -   `500 Internal Server Error`: If an error occurs.

### `POST /api/v2/user_customers`

-   **Method:** `POST`
-   **Description:** Creates a new user-customer relationship.
-   **Request Body:**
    ```json
    {
      "userId": "string",
      "customerId": "string"
    }
    ```
-   **Response:**
    -   `201 Created`: The newly created user-customer object.
    -   `400 Bad Request`: If the request body is invalid.
    -   `500 Internal Server Error`: If an error occurs.

### `GET /api/v2/user_customers/[id]`

-   **Method:** `GET`
-   **Description:** Retrieves a specific user-customer relationship by its ID.
-   **Response:**
    -   `200 OK`: The user-customer object.
    -   `404 Not Found`: If the user-customer relationship is not found.
    -   `500 Internal Server Error`: If an error occurs.

### `DELETE /api/v2/user_customers/[id]`

-   **Method:** `DELETE`
-   **Description:** Deletes a specific user-customer relationship by its ID.
-   **Response:**
    -   `200 OK`: A success message.
    -   `404 Not Found`: If the user-customer relationship is not found.
    -   `500 Internal Server Error`: If an error occurs.