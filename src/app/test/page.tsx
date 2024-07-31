'use client'

import { useState, useEffect } from 'react'

import MarkmapView from '@/components/response/Markmap'

const code = `
# SQL Schema Overview
## Tables
- **Users Table**
  - Columns
    - id: INTEGER, PRIMARY KEY
    - name: VARCHAR(100)
    - email: VARCHAR(100), UNIQUE
    - created_at: TIMESTAMP
  - Description: Stores user information including name, email, and account creation timestamp.
- **Orders Table**
  - Columns
    - id: INTEGER, PRIMARY KEY
    - user_id: INTEGER, FOREIGN KEY REFERENCES Users(id)
    - product: VARCHAR(100)
    - amount: DECIMAL(10, 2)
    - order_date: TIMESTAMP
  - Description: Stores order details including user association, product information, amount, and date.
- **Relationships**
  - Each order is linked to a user via \`user_id\`.
  - The \`Users\` table is referenced by the \`Orders\` table.

## Business Logic
- **User Table**:
  - Ensures unique email addresses.
  - Timestamp for tracking user account creation.
- **Order Table**:
  - Associates orders with users.
  - Maintains detailed records of products and amounts.

## SQL Queries
- **Select all users**
  \`\`\`sql
  SELECT * FROM Users;
  \`\`\`
- **Select all orders**
  \`\`\`sql
  SELECT * FROM Orders;
  \`\`\`
- **Select orders with user information**
  \`\`\`sql
  SELECT Orders.id, Users.name, Orders.product, Orders.amount, Orders.order_date
  FROM Orders
  JOIN Users ON Orders.user_id = Users.id;
  \`\`\`
`

const initialCode = `
# database
`

const page = () => {
	const [markdown, setMarkdown] = useState('')

	useEffect(() => {
		setMarkdown(initialCode)
	}, [])

	return (
		<main className='flex h-screen w-full items-center justify-center'>
      <div>
        <textarea value={markdown} onChange={(e) => {setMarkdown(e.target.value)}}/>
      </div>
			<div className='border border-pink-700'>
				<MarkmapView markdown={markdown} />
			</div>
		</main>
	)
}

export default page
