export const sqlCode = `-- Table: Users
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: Products
CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

-- Table: Orders
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
`

export const diagramDefinition2 = `
    erDiagram
        PRODUCT_TYPES {
            id INT PRIMARY KEY       
            name VARCHAR(50) NOT NULL
        }
        `

export const diagramDefinition = `
    erDiagram
      USERS {
        int user_id PK "Primary Key"
        string username
        string email
        timestamp created_at
      }
      PRODUCTS {
        int product_id PK "Primary Key"
        string product_name
        decimal price
        int stock
      }
      ORDERS {
        int order_id PK "Primary Key"
        int user_id FK "Foreign Key"
        timestamp order_date
        decimal total_amount
      }
      USERS ||--o{ ORDERS : "places"
      PRODUCTS ||--o{ ORDERS : "contains"
  `
