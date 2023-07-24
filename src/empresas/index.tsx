import { Datagrid, EmailField, List, TextField, ReferenceField, SimpleForm, TextInput, Edit, Create, ReferenceInput, SelectInput, AutocompleteInput } from 'react-admin';
import {
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices
} from 'react-admin';

export const EmpresaList = () => (
  <List>
    <Datagrid rowClick="edit">
    <TextField source="id" />
      <ReferenceField source="segmento_id" reference="segmentos" >
        <TextField source="segmento" />
      </ReferenceField>
      <TextField source="nome" />
      <TextField source="url" />
      <TextField source="ativo" />
    </Datagrid>
  </List>
);

export const EmpresaEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="segmento_id" reference="segmentos" >
        <SelectInput label="Segmento" optionText="segmento" validate={required()} />
      </ReferenceInput>
      <TextInput source="nome" validate={required()} />
      <TextInput source="url" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const EmpresaCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="segmento_id" reference="segmentos"  >
        <SelectInput label="Segmento" optionText="segmento" validate={required()} />
      </ReferenceInput>
      <TextInput source="nome" validate={required()} />
      <TextInput source="url" validate={required()} />
    </SimpleForm>
  </Create>
);