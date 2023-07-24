import { Datagrid, EmailField, List, TextField, ReferenceField, SelectInput, SimpleForm, TextInput, Edit, Create, ReferenceInput } from 'react-admin';
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
    TopToolbar,
    ExportButton,
    CreateButton
} from 'react-admin';



export const ComentarioList = () => (
    <List >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="segmento_id" reference="segmentos" >
                <TextField source="segmento" />
            </ReferenceField>
            <TextField multiline source="texto" />
            <TextField source="ativo" />
        </Datagrid>
    </List>
);

export const ComentarioEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="segmento_id" reference="segmentos" >
                <SelectInput label="Segmento" optionText="segmento" validate={required()} />
            </ReferenceInput>
            <TextInput multiline source="texto" validate={required()} />
            <SelectInput source='ativo' choices={[
                { id: '1', name: 'Ativo' },
                { id: '0', name: 'Inativo' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const ComentarioCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="segmento_id" reference="segmentos">
                <SelectInput label="Segmento" optionText="segmento" validate={required()} />
            </ReferenceInput>
            <TextInput multiline source="texto" validate={required()} fullWidth />
        </SimpleForm>
    </Create>
);

export const ComentarioCreateBulk = () => (
    <Create resource="comentarios/bulk">
        <SimpleForm>
            <ReferenceInput source="segmento_id" reference="segmentos">
                <SelectInput label="Segmento" optionText="segmento" validate={required()} />
            </ReferenceInput>
            <TextInput multiline source="texto" label="Dados JSON" validate={required()} />
        </SimpleForm>
    </Create>
);