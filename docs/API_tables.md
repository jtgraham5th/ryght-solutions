Endpoint: GET /users/{id}
- Description: Fetch a user by ID.
- Path parameters:
  - id: The ID of the user. An integer.
- Response: A JSON object containing the user's details.

Endpoint: POST ${apiUrl}generic_api/pcheck/760?tid=19
- Description: Check or update user passwords/pin numbers
- Request body: A JSON object containing the following fields:
  - UserID: The ID of the user. An interger
  - UserName: The username/email of the user
  - StringValue: The value of the password.
  - PCheckTypeID: 
  - - 1. Update Password
  - - 2. Update Pin
  - - 3. Check Password
  - - 4. Check Pin 
  - PinVAlue: 
- Response: A JSON object containing the details of the created post. -->