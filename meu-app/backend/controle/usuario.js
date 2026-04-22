import { db } from '../../src/db.js';
export const getUsuarios =(_, res) =>{
    const q = "SELECT * FROM usuarios";
    db.query(q, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    });
}