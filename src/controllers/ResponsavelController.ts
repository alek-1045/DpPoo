import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import Responsavel from '../entities/responsav';
import Despesas from '../entities/despesas';


export default {
    async index (request: Request, response: Response) {
        const responsavRepository = getRepository(Responsavel);

        const responsavel = await responsavRepository.find();

        return response.json(responsavel)
    },

    async show (request: Request, response: Response) {
        const { id } = request.params;

        const responsavRepository = getRepository(Responsavel);

        const responsavel = await responsavRepository.findOneOrFail(id);

        return response.json(responsavel)
    },

    async mostraPeloGasto (request: Request, response: Response) {
        const { id } = request.params;

        const despesasRepository = getRepository(Despesas);

        const despesas = await despesasRepository.findOne(id)

        const responsavRepository = getRepository(Responsavel);

        const responsavel = await responsavRepository.findOneOrFail(despesas?.id_responsavel);

        return response.json(responsavel)
    },


    async create(request: Request, response:Response) {
        const {
            nomedoresponsavel,
            telefone,
        } = request.body;
        
        const responsavRepository = getRepository(Responsavel);
        
        const responsavel = responsavRepository.create({
            nomedoresponsavel,
            telefone,
        });
        
        await responsavRepository.save(responsavel)
        
        return response.json(responsavel)
    }
};


