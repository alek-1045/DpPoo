import Responsavel from "../entities/responsav";

export default {
    render (responsavel: Responsavel) {
        return {
            id: responsavel.id,
            nomedoresponsavel: responsavel.nomedoresponsavel, 
            telefone: responsavel.telefone,
        }
    },
}