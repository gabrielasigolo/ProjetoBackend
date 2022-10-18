import express from "express";
import { connectToDatabase } from "../utils/mongodb.js";


const router = express.Router()
const nomeCollection = 'prestadores'
const {db, ObjectId} = await connectToDatabase()

/**************************
 * GET /api/prestadores
 **************************/

router.get('/', async(req, res) => {
    try {
        db.collection(nomeCollection).find({},{}).sort({razao_social:1})
        .toArray((err, docs) => {
            if(!err) { res.status(200).json(docs)}
        })
    } catch (err) {
        res.status(500).json({ errors: [{msg: `Erro: ${err.message} `}]})
    }
})

export default router