# Node.js Balance Update Application

This application provides an API for updating a user's balance. It is built with Express, uses Bull for job processing, and integrates with PostgreSQL for database storage.

## Prerequisites

1. **Node.js**: The application is built with Node.js. Make sure you have Node.js installed. If not, download and install it from [here](https://nodejs.org/).

2. **Redis**: This application uses Bull for job processing which requires a Redis server. Ensure you have Redis installed and running. You can download and follow installation instructions from the [official Redis website](https://redis.io/).

3. **PostgreSQL**: This app uses Sequelize to connect to a PostgreSQL database. Ensure you have PostgreSQL installed and running. If not, you can download it from [here](https://www.postgresql.org/download/).

## Getting Started

1. **Clone the repository**:
   ````bash
   git clone https://github.com/Nerses99/update-balance-app.git
   cd update-balance-app
   ````

2. **Setup environment variables**:
   - Rename `.env.example` to `.env`.
   - Update the variables in `.env` to match your local environment.

3. **Install dependencies**:
   ````bash
   npm install
   ````

4. **Start the application**:
   ````bash
   npm start
   ````

You should now have the app running on `http://localhost:5000`

## API Endpoints

- **Update Balance**:
  - Method: `POST`
  - Endpoint: `/update_balance/:userId/:amount`
  - Description: Withdraw from the balance of the user. If the user's balance is insufficient, it returns a corresponding message.
