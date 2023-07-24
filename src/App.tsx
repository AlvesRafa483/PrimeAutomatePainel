
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { ContaList, ContaEdit, ContaCreate } from './contas';
import { EmpresaList, EmpresaEdit, EmpresaCreate } from './empresas';
import { ComentarioList, ComentarioEdit, ComentarioCreate } from './comentarios';
import { SegmentoList, SegmentoEdit, SegmentoCreate } from './segmentos';
import { AgendamentoList, AgendamentoEdit, AgendamentoCreate } from './agendamentos';
import { AvaliacaoList, AvaliacaoEdit, AvaliacaoDiaList} from './avaliacoes';


export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name='agendamentos' list={AgendamentoList} edit={AgendamentoEdit} create={AgendamentoCreate} />  
        <Resource name='avaliacoes' list={AvaliacaoList} edit={AvaliacaoEdit} />  
        <Resource name='bot/avaliacoes/dia' list={AvaliacaoDiaList} options={{ label: 'Bot Avaliacoes' }} />  
        <Resource name='contas' list={ContaList} edit={ContaEdit} create={ContaCreate} />  
        <Resource name='empresas' list={EmpresaList} edit={EmpresaEdit} create={EmpresaCreate} />  
        <Resource name='comentarios' list={ComentarioList} edit={ComentarioEdit} create={ComentarioCreate} />  
        <Resource name='segmentos' list={SegmentoList} edit={SegmentoEdit} create={SegmentoCreate} />  
    </Admin>
);

    