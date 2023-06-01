import { db } from '../../../db'

export default async function handler(req, res) {

    switch (req.method) {
        case 'GET': {
            return await getClients(req, res)
        }
        case 'POST':
            return await saveClient(req, res)
    }
}

const getClients = async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM client')
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error });
    }

}

const saveClient = async (req, res) => {
    const { name, surname, email, tlf, dni, city } = req.body
    const [result] = await db.query('INSERT INTO client SET ?', {
        name,
        surname,
        email,
        tlf,
        dni,
        city
    });
    return res.status(200).json(result)
}