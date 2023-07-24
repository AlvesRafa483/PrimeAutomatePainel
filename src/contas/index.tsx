import { Datagrid, EmailField, List, TextField, SimpleForm, TextInput, Edit, Create, ReferenceInput } from 'react-admin';
import { required } from 'react-admin';

export const ContaList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="senha" />
        </Datagrid>
    </List>
);

export const ContaEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled/>
        <TextInput source="email" validate={required()}/>
        <TextInput source="senha" validate={required()}/>
      </SimpleForm>
    </Edit>
  );

  export const ContaCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="email" validate={required()}/>
        <TextInput source="senha" validate={required()}/>
      </SimpleForm>
    </Create>
  );