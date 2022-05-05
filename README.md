# Central Bank of Labo

The backend for an online banking system, built using Node, Express and MongoDB

## *API Use Guide:*

To run unit tests, use the **'dev'** branch

### **User:**

* To login as a user to the online bank, send a **POST** request to **/auth/users/**, with a JSON object:

    ``` JSON

        {
            "email": "user@example.com",
            "password": "foobar123"
        }

    ```

* **To view your dashboard with the list of your transactions, send a *GET* request with your token included in the header, to */dashboard/***

* To deposit money into your account, send a **POST** request with your token included in the header, to **/dashboard/deposit/**, with a JSON object:

    ``` JSON

        {
            "amount": 5000,
            "description": "My First Deposit"
        }

    ```

* To withdraw money from your account, send a **POST** request with your token included in the header, to **/dashboard/withdraw/**, with a JSON object:

    ``` JSON

        {
            "amount": 5000,
            "description": "My First Withdrawal"
        }

    ```

* To transfer money from your account to another account, send a **POST** request with your token included in the header, to **/dashboard/transfer/**, with a JSON object:

    ``` JSON

        {
            "amount": 2000,
            "recipientAccountNumber": "1234567890",
            "description": "My First Transfer"
        }

    ```

### **Admin:**

*Important Note:* **Admins are seeded on server startup, using information from your .env file. Please check the *'dev.example.env'* file for the list of needed variables**

* To login as a admin to the online bank, send a **POST** request to **/auth/admin/**, with a JSON object:

    ``` JSON

        {
            "email": "admin@example.com",
            "password": "foobar123"
        }

    ```

* To add a new user, send a **POST** request with your token included in the header, to **/users/**, with a JSON object:

    ``` JSON

        {
            "email": "user@example.com",
            "password": "foobar123",
            "firstName": "The",
            "lastName": "User",
            "startDeposit": 5000
        }

    ```

* To deactivate a user, send a **PATCH** request with your token included in the header, to **/users/deactivate/**, with a JSON object:

    ``` JSON

        {
            "userId": "61b2666dbb5f2e898b5eb27e"
        }

    ```

* To reactivate a user, send a **PATCH** request with your token included in the header, to **/users/reactivate/**, with a JSON object:

    ``` JSON

        {
            "userId": "61b2666dbb5f2e898b5eb27e"
        }

    ```

* To delete a user, send a **DELETE** request with your token included in the header, to **/users/delete/**, with a JSON object:

    ``` JSON

        {
            "userId": "61b2666dbb5f2e898b5eb27e"
        }

    ```

* To reverse a transfer of funds between two users, send a **POST** request with your token included in the header, to **/users/reverse/**, with a JSON object:

    ``` JSON

        {
            "transactionId": "61b2762a20e737e9bb50d519"
        }

    ```

Enjoy!!!
