import express, { request, response } from 'express';
import cors from 'cors';
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes)


app.listen(3333);













// import express from 'express';
// import { getRepository } from 'typeorm';
// // import responsavel from './entities/responsavel';
// import './database/connection';
// import responsavel from './entities/responsavel';

// const app = express();

// app.use(express.json());


// app.post('/responsavel', async(request, response) =>{
//     const {
//         nomedoresponsavel,
//         telefone,
//     } = request.body;

//     const responsavelRepository = getRepository(responsavel);

//     const responsavel = responsavelRepository.create({
//         nomedoresponsavel,
//         telefone
//     });

//     responsavelRepository.save(responsavel);

//     return response.json({message :'Hello World'});
// });

// app.listen(3333);