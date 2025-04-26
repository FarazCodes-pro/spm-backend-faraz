
# Project Name

## Backend Setup

To set up and run the backend for this project, follow these instructions:

### 1. Clone the Repository

Clone the repository to your local machine using:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Create or Configure `.env` File

Create a `.env` file in the root directory if it doesn't exist. Alternatively, you can request the `.env` file from the team. This file should include the following fields:

```env
PORT=<desired-port-number>
MONGO_URI=<your-mongo-db-uri>
JWT_SECRET=<your-jwt-secret>
```

Make sure to replace the placeholders with actual values:
- `PORT`: The port on which the backend server will run.
- `MONGO_URI`: The connection string for your MongoDB database.
- `JWT_SECRET`: A secret key used for signing JWT tokens.

### 3. Install Dependencies

To install the required dependencies, run:

```bash
npm install
```

This will install all the dependencies listed in the `package.json` file.

### 4. Seed the Database (Optional)

If you have updated data to populate the database, do the following:

1. Place the updated data inside the `datascraped` folder.
2. Run the `seed.js` script to extract and store the data:

```bash
node seed.js
```

This will automatically scrape and store the data based on the logic in `seed.js`.

### 5. Start the Server

After setting everything up, you can start the backend server with:

```bash
npm start
```

The server will run on the port defined in the `.env` file.

## Additional Information

Feel free to refer to the documentation for more details on specific routes, endpoints, and authentication. Ensure you have MongoDB running locally or remotely to connect with the application.
