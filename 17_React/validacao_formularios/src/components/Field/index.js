import React from 'react';

import Label from './Label';
import Content from "./Content";
import Input from './Input';


import {  ErrorMessage } from "./styles";


const Text = ( {label, type, name, register, errorMessage} ) => {
   return(<>
   <Label>
        <Content>{label}</Content>
        <Input type={type} name={name} {...register(name)}/>
    </Label>
    {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null};
    </>);
}

const Field = {
    Text,
}
export default Field;