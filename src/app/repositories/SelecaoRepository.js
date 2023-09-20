import connection from "../database/connection.js"

class SelecaoRepository {
    create(selecao)    {
        const sql = "INSERT INTO selecoes SET ?"
        return new Promise((resolve, reject) => {
            connection.query(sql, selecao, (error, result) => {
                if (error) return reject(`A consulta ${sql} não foi cadastrada!`)
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll()   {
        const sql = "SELECT * FROM selecoes"
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if (error) return reject(`A consulta ${sql} não foi localizada!`)
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id)  {
        const sql = "SELECT * FROM selecoes WHERE idselecoes=?"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if (error) return reject(`A consulta ${sql} não foi localizada!`)
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    update(selecao, id)    {
        const sql = "UPDATE selecoes SET ? WHERE idselecoes=?"
        return new Promise((resolve, reject) => {
            connection.query(sql, [selecao, id], (error, result) => {
                if (error) return reject(`A consulta ${sql} não foi alterada!`)
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    delete(id)    {
        const sql = "DELETE FROM selecoes WHERE idselecoes=?"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if (error) return reject(`A consulta ${sql} não foi deletada!`)
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
}

export default new SelecaoRepository()