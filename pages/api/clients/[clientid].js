import { db } from '../../../db'

export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      return await getClients(req, res)
    case 'DELETE':
      return await deleteClients(req, res)
    case 'PUT':
      return await updateClients(req, res)
    default:
      break;
  }

}

const getClients = async (req, res) => {
  const { clientid } = req.query;
  const [result] = await db.query('SELECT * FROM client WHERE clientid = ?', [clientid]);
  return res.status(200).json(result[0]);
}

const deleteClients = async (req, res) => {
  const { clientid } = req.query;
  const result = await db.query('DELETE FROM client WHERE clientid = ?', [clientid]);
  return res.status(204).json();
}

const updateClients = async (req, res) => {
  const { clientid } = req.query;
  const { name,surname,email,tlf,dni,city } = req.body;
  try {
    await db.query('UPDATE client SET name = ?, surname = ?, email = ?, tlf = ?, dni = ?, city = ? WHERE clientid = ?',[name,surname,email,tlf,dni,city, clientid]);
    return res.status(204).json();
  } catch (error) {
    console.log(error.message)
  }
}