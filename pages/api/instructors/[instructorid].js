import { db } from '../../../db'

export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      return await getInstructors(req, res)
    case 'DELETE':
      return await deleteInstructors(req, res)
    case 'PUT':
      return await updateInstructors(req, res)
    default:
      break;
  }

}

const getInstructors = async (req, res) => {
  const { instructorid } = req.query;
  const [result] = await db.query('SELECT * FROM instructor WHERE instructorid = ?', [instructorid]);
  return res.status(200).json(result[0]);
}

const deleteInstructors = async (req, res) => {
  const { instructorid } = req.query;
  const result = await db.query('DELETE FROM instructor WHERE instructorid = ?', [instructorid]);
  return res.status(204).json();
}

const updateInstructors = async (req, res) => {
  const { instructorid } = req.query;
  const { name,surname,dni,tlf,email,direccion } = req.body;
  try {
    await db.query('UPDATE instructor SET name = ?, surname = ?, dni = ?, tlf = ?, email = ?, direccion = ? WHERE instructorid = ?',[name,surname,dni,tlf,email,direccion, instructorid]);
    return res.status(204).json();
  } catch (error) {
    console.log(error.message)
  }
}