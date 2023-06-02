import mysql from 'mysql';
import bcrypt from 'bcrypt';

const db = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zgzgym',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export function connectDB() {
    db.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos: ', err);
            return;
        }
        console.log('Conexión exitosa a la base de datos');
    });
}

export function closeDB() {
    db.end((err) => {
        if (err) {
            console.error('Error al cerrar la conexión con la base de datos: ', err);
            return;
        }
        console.log('Conexión cerrada exitosamente');
    });
}

export function createUser(email, password, callback) {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error al crear el usuario: ', err);
            return callback(err);
        }

        const user = {
            email: email,
            password: hashedPassword,
        };

        db.query('INSERT INTO users SET ?', user, (err, result) => {
            if (err) {
                console.error('Error al crear el usuario: ', err);
                return callback(err);
            }
            return callback(null, result.insertId);
        });
    });
}

export function getUserByEmail(email, callback) {
    db.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
        if (err) {
            console.error('Error al obtener el usuario: ', err);
            return callback(err);
        }
        return callback(null, results[0]);
    });
}

export function comparePasswords(password, hashedPassword, callback) {
    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
        if (err) {
            console.error('Error al comparar las contraseñas: ', err);
            return callback(err);
        }
        return callback(null, isMatch);
    });
}
