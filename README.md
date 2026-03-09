# Payment Collection App - Backend

This is the backend API for the Payment Collection App built using **Node.js, Express, and MySQL**.

## Tech Stack
- Node.js
- Express.js
- MySQL

## Features
- Retrieve customer loan details
- Record EMI payments
- Retrieve payment history

## API Endpoints

### Get all customers
GET /api/customers

### Make payment
POST /api/payments

Body:
{
  "account_number": "ACC1001",
  "payment_amount": 5000
}

### Get payment history
GET /api/payments/:account_number

## Database Tables

### customers
- id
- account_number
- issue_date
- interest_rate
- tenure
- emi_due

### payments
- id
- customer_id
- payment_date
- payment_amount
- status

## Run Backend Locally

Install dependencies: 
npm install

Start server: 
node server.js

Server runs on: 
http://localhost:5000
