# Task manager api v1.0

## What is

A small and consistent api with a functional task CRUD

## Glossary
- URL: Current url (on local env might be http://localhost:3500)

## Endpoints
- {URL}/tasks
  - Method: **GET**
  - Parameters: None
  - Description: Return all the saved tasks
  - Return: {tasks: [Task]}
- {URL}/tasks
  - Method: **POST**
  - Parameters: { title: String!, description: String }
  - Description: Create a new task
  - Return: { task: Task }
- {URL}/tasks/:id
  - Method: **GET**
  - Parameters: None
  - Description: Get a task
  - Return: {task: Task}
- {URL}/tasks/:id
  - Method: **PUT**
  - Parameters: { title: String!, description: String }
  - Description: Update a task
  - Return: {task: Task}
- {URL}/tasks/:id
  - Method: **DELETE**
  - Parameters: None
  - Description: Deleta a task
  - Return: {task: Task}
