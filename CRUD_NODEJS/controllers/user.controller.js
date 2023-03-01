const db = require('../db')
const e = require("express");

class UserController {
    async createUser(req, res, next) {
        try {
            const {name, email, password} = req.body
            const newPerson = await db.query(`INSERT INTO person (name, email, password)
                                              values ($1, $2, $3) RETURNING *`, [name, email, password])
            res.status(200).json(newPerson.rows[0])
        } catch (err) {
            next(err)
        }
    }

    async getUser(req, res, next) {
        try {
            const users = await db.query(`SELECT *
                                          FROM person`)
            res.status(200).json(users.rows)
        } catch (err) {
            next(err)
        }
    }

    async getOneUser(req, res, next) {
        try {
            const id = req.params.id
            const users = await db.query(`SELECT *
                                          FROM person
                                          WHERE id = $1`, [id])
            res.status(200).json(users.rows[0])
        } catch (err) {
            next(err)
        }
    }

    async updateUser(req, res, next) {
        try {
            const {id, name, email, password} = req.body
            const user = await db.query(`UPDATE person
                                         SET name     = $1,
                                             email    = $2,
                                             password = $3
                                         where id = $4 RETURNING *`,
                [name, email, password, id])
            res.status(200).json(user.rows[0])
        } catch (err) {
            next(err)
        }

    }

    async deleteUser(req, res, next) {
        try {
            const id = req.params.id
            const user = db.query(`DELETE
                                   FROM person
                                   WHERE id = $1`, [id])
            res.status(200).json("User has been deleted")
        } catch (err) {
            next(err)
        }
    }

}

module.exports = new UserController()