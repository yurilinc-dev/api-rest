import { consulta } from "../database/connection.js"

class SelecaoRepository {
    create(selecao)    {
        const sql = "INSERT INTO selecoes SET ?"
        return consulta(sql, selecao, 'Não foi possível cadastrar.')
    }

    findAll()   {
        const sql = "SELECT * FROM selecoes"
        return consulta(sql, 'Não foi possível filtrar.')
    }

    findById(id)  {
        const sql = "SELECT * FROM selecoes WHERE idselecoes=?"
        return consulta(sql, id, 'Não foi possível filtrar por Id.')
    }

    update(selecao, id)    {
        const sql = "UPDATE selecoes SET ? WHERE idselecoes=?"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar.')
    }

    delete(id)    {
        const sql = "DELETE FROM selecoes WHERE idselecoes=?"
        return consulta(sql, id, 'Não foi possível deletar.')
    }
}

export default new SelecaoRepository()