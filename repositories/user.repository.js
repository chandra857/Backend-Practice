const db = require('../database') 

const getUsers = ()=>{

    const users = db.prepare(`SELECT * FROM users`).all();

    return users;

}


const getUserById = (id)=>{

    return db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
}


const createUser = (name,email)=>{
    
    const result = db.prepare(`INSERT INTO users (?,?) VALUES(name,email)`).run(name,email);

    return {
        id:result.lastInsertRowid,
        name,
        email
    }
}

const updateUser = (id,name,email)=>{
     
    const result = db.prepare(`UPDATE users SET name=? , email = ? WHERE id = ?`).run(id,name,email);
}

module.exports ={getUsers,getUserById,createUser} 
