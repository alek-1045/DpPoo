import { getRepository } from "typeorm";
import responsavelViews from "./responsavelViews";
import Despesas from "../entities/despesas";
import Responsavel from "../entities/responsav";


export default {
    render (despesa: Despesas) {
        const responsavelRepository = getRepository(Responsavel)

        const responsavel = responsavelRepository.findOneOrFail(despesa?.id_responsavel)

        
        return {
            id: despesa.id,
            datadacompra: despesa.datadacompra, 
            localdacompra: despesa.localdacompra,
            valor: despesa.valor,
            Dados_responsavel: responsavel
            
        }
    },
}