import { Datagrid, ReferenceArrayField, ReferenceManyField, Loading, SearchInput, EmailField, List, TextField, SimpleForm, ReferenceField, SelectInput, TextInput, Edit, Create, ReferenceInput, DateField, DateInput } from 'react-admin';
import { required, useRecordContext, Count, TopToolbar, ExportButton, Button } from 'react-admin';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { dataProvider } from '../dataProvider';

const Avaliar = () => {
    // DataProvider
    const data = dataProvider.getOne('bot/avaliar', { id: 1 })
    alert('Bot Inicializado!')

    // Request
    // GET http://my.api.url/posts/123

    // Response
    // HTTP/1.1 200 OK
    // Content-Type: application/json
    // { "id": 123, "title": "hello, world", "author_id": 12 }
};

// const myFilters = [
//     <TextInput label="Empresa" source="nome_empresa" alwaysOn />
//     // <TextInput label="Conta" source="email" defaultValue="Hello, World!" />,
// ];

const ListActions = () => (
    <TopToolbar>
        <ExportButton />
        <Button
            onClick={() => { Avaliar(); }}
            label="Avaliar"
        >
            <PlayCircleIcon/>
        </Button>
    </TopToolbar>
);

export const AvaliacaoList = () => (
    <List >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="agendamento_id" />
            <TextField source="nome_empresa" />
            <ReferenceField source="conta_id" reference="contas" >
                <TextField source="email" />
            </ReferenceField>
            <TextField source="item" />
            <DateField source="data" />
            <DateField source="avaliado_em" />
            <DateField source="erro_em" />
        </Datagrid>
    </List>
);

const AvaliacoesPanel = () => {
    const record = useRecordContext();
    return (
        <ReferenceManyField source='id' reference="contas/avaliacoes/dia" target='conta_id'>
            <Datagrid isRowSelectable={record => false}>
                <TextField source="id" />
                <TextField source="nome_empresa" />
            </Datagrid>
        </ReferenceManyField >
    );
};

export const AvaliacaoDiaList = () => (
    <List actions={<ListActions />}>
        <Datagrid rowClick="edit" expand={<AvaliacoesPanel />} isRowSelectable={record => false}>
            <TextField source="id" />
            <TextField source="email" />
        </Datagrid>
    </List>
);

export const AvaliacaoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="agendamento_id" disabled />
            <TextInput source="item" disabled />
            <DateInput source="data" validate={required()} />
            <ReferenceInput source="conta_id" reference="contas" >
                <SelectInput label="Conta" optionText="email" validate={required()} />
            </ReferenceInput>
            <TextInput source="mensagem" multiline disabled />
        </SimpleForm>
    </Edit>
);