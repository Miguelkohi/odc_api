import agendasController from  './controller/agendasController.js';
import preAvaliacaoController from './controller/preAvaliacaoController.js';
import loginAdmController from './controller/loginAdmController.js';


export default function adicionarRotas (servidor){
    servidor.use (agendasController); 
    servidor.use (preAvaliacaoController);
    servidor.use (loginAdmController);
}