const Database = require("better-sqlite3");

const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL
    )
`);


module.exports = db;



// // CREATE
// const insertUser = db.prepare(`
//     INSERT INTO users (name, email)
//     VALUES (?, ?)
// `);

// const insertResult = insertUser.run(
//     "Viswas",
//     "viswas@gmail.com"
// );

// console.log(
//     "Created user:",
//     insertResult.lastInsertRowid
// );


// // READ ALL
// const users = db.prepare(`
//     SELECT * FROM users
// `).all();

// console.log("All users:", users);


// // READ ONE
// const user = db.prepare(`
//     SELECT * FROM users
//     WHERE id = ?
// `).get(1);

// console.log("User:", user);


// // UPDATE
// const updateResult = db.prepare(`
//     UPDATE users
//     SET name = ?, email = ?
//     WHERE id = ?
// `).run(
//     "Viswas Kumar",
//     "viswaskumar@gmail.com",
//     1
// );

// console.log("Updated rows:", updateResult.changes);


// // DELETE
// const deleteResult = db.prepare(`
//     DELETE FROM users
//     WHERE id = ?
// `).run(1);

// console.log("Deleted rows:", deleteResult.changes);

