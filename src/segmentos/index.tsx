import { Datagrid, EmailField, List, TextField, SimpleForm, TextInput, Edit, Create, ReferenceInput } from 'react-admin';

export const SegmentoList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="segmento" />
    </Datagrid>
  </List>
);

export const SegmentoEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="segmento" />
    </SimpleForm>
  </Edit>
);

export const SegmentoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="segmento" />
    </SimpleForm>
  </Create>
);