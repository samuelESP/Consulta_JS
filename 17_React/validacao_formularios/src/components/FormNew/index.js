import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import Form from "../Forms";
import Field from "../Field";
import Button from '../Buttom';



const schema = yup.object({
    name: yup.string().min(2, 'minimo 2 caracteres').required('Campo Obrigatório'),
    email: yup.string().email("email inválido").required("Campo obrigatório"),
  }).required();


  

const FormNew = () => {


    const { register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
    });


    const newUser = (user) => {
        console.log(user);
    };



    return(
    <Form onSubmit={handleSubmit(newUser)}>
        <Field.Text label="Nome" type="text" name="name" register={register} errorMessage={errors?.name?.message}/>
        
        <Field.Text label="Email" type="email" name="email" register={register} errorMessage={errors?.email?.message}/>
        
        <Button>Enviar</Button>
    </Form>
    );
};

export default FormNew;
