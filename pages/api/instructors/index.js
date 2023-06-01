import { db } from '../../../db'

export default async function handler(req, res) {

    switch (req.method) {
        case 'GET': {
            return await getInstructors(req, res)
        }
        case 'POST':
            return await saveInstructor(req, res)
    }
}

const getInstructors = async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM instructor')
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error });
    }

}

const saveInstructor = async (req, res) => {
    const { name,surname,dni,tlf,email,direccion } = req.body
    const [result] = await db.query('INSERT INTO instructor SET ?', {
        name,
        surname,
        dni,
        tlf,
        email,
        direccion
    });
    return res.status(200).json(result)
}