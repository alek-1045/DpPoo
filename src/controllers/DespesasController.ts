import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Despesas from '../entities/despesas';
import Responsavel from '../entities/responsav';
import despesasServi from '../Service/despesasServi';


export default {

    async index (request: Request, response: Response) {
        const despesasRepository = getRepository(Despesas);

        const responsavRepository = getRepository(Responsavel);

        const despesa = await despesasRepository.find();
 

        return response.json(despesa)
    },

    async show (request: Request, response: Response) {
        const { id } = request.params;

        const despesasRepository = getRepository(Despesas);

        const despesa = await despesasRepository.findOneOrFail(id);
        
        
        return response.json(despesasServi.render(despesa))
    },

    async update(request: Request, response: Response) {
        const { id } = request.params;

        const { localdacompra, valor, id_responsavel } = request.body;

        const despesasRepository = getRepository(Despesas);

        const despesa = await despesasRepository.findOne(id);

        if (!despesa) {
            throw new Error('o ID não existe');
        }

        await despesasRepository.update(id, {
            localdacompra, 
            valor, 
            id_responsavel,
        });
        return response.json({ mensagem: 'atualizado' });
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const despesasRepository = getRepository(Despesas);

        const despesa = await despesasRepository.findOne(id)

        if (!despesa) {
            return response.json({ mensagem: 'o ID não foi encontrado' });
        }
        else{
            await despesasRepository.delete(id);

            return response.json({ mensagem: 'removido' });
        }

        // await despesasRepository.delete(id);

        // return response.json({ mensagem: 'removido' });
    },

    async create(request: Request, response:Response){
        const {
            localdacompra,
            valor,
            id_responsavel,
        } = request.body;

        const despesasRepository = getRepository(Despesas);

        const despesa = despesasRepository.create({
            localdacompra,
            valor,
            id_responsavel,
        });

        await despesasRepository.save(despesa)
        
        return response.json(despesa)

    }
    
}