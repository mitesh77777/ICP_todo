# Coco To-Do List App on MOI Blockchain

This is a simple to-do list application developed in Coco programming language and deployed on the MOI protocol blockchain. It showcases the capabilities of Coco for building decentralized applications.

## Features
- Create and manage to-do items on the MOI blockchain
- Mark items as completed
- Delete items
- Filter items based on completion status
- Immutable data storage on the blockchain
- Transparent and secure access to data

## Prerequisites
- Coco programming language installed and configured
- MOI protocol client (e.g., MOI wallet)
- Account address on the MOI blockchain

## Installation
1. Clone this repository using your preferred Git client.
2. Navigate to the cloned directory.
3. Run `coco install` to install all dependencies.
4. Connect your MOI wallet to the MOI blockchain.
5. Update the `config.json` file with your MOI account address.

## Usage
1. Run `coco run` to start the application.
2. You will be prompted to connect your MOI wallet.
3. Once connected, the application will display a prompt for user input.
4. Type your command and press Enter.
   - Available commands are the same as the non-MOI version:
     - `add <task>`: Add a new task to the to-do list.
     - `list`: List all tasks in the to-do list.
     - `complete <task_id>`: Mark a task as completed.
     - `delete <task_id>`: Delete a task from the to-do list.
     - `filter <completed|pending>`: Filter tasks based on completion status.
     - `help`: Display this help message.
     - `exit`: Exit the application.
