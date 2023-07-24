import { Datagrid, EmailField, List, TextField, ReferenceField, SelectInput, SimpleForm, TextInput, Edit, Create, ReferenceInput, DateField, NumberField, DateInput, NumberInput, RecordContext } from 'react-admin';
import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices,
    Count,
    useGetRecordId,
    ReferenceManyField,
    ReferenceManyCount
} from 'react-admin';

const GetCurrentId = () => {
    const recordId = useGetRecordId();

    return recordId
};



export const AgendamentoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="empresa_id" reference="empresas" >
                <TextField source="nome" />
            </ReferenceField>
            <DateField source="data_inicial" />
            <DateField source="data_final" />
            <NumberField source="qtd_avaliacoes" label="Avaliacoes" />
            <ReferenceManyCount
                label="Realizadas"
                reference="avaliacoes"
                target="agendamento_id"
                filter={{ avaliado_em: "not_null" }}
                textAlign='right'
                align='right'
            />
            <NumberField source="qtd_comentarios" />
        </Datagrid>
    </List>
);

export const AgendamentoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="empresa_id" reference="empresas" >
                <SelectInput label="Empresa" optionText="nome" validate={required()} />
            </ReferenceInput>
            <DateInput source="data_inicial" validate={required()} />
            <DateInput source="data_final" validate={required()} />
            <NumberInput source="qtd_avaliacoes" validate={required()} />
            <NumberInput source="qtd_comentarios" validate={required()} />
            <SelectInput source='ativo' choices={[
                { id: '1', name: 'Ativo' },
                { id: '0', name: 'Inativo' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const AgendamentoCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="id" disabled />
            <ReferenceInput source="empresa_id" reference="empresas" >
                <SelectInput label="Empresa" optionText="nome" validate={required()} />
            </ReferenceInput>
            <DateInput source="data_inicial" validate={required()} />
            <DateInput source="data_final" validate={required()} />
            <NumberInput source="qtd_avaliacoes" validate={required()} />
            <NumberInput source="qtd_comentarios" validate={required()} />
            <SelectInput source='ativo' choices={[
                { id: '1', name: 'Ativo' },
                { id: '0', name: 'Inativo' },
            ]} />
        </SimpleForm>
    </Create>
);