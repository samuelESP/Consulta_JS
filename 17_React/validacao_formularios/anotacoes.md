# Ferramentas Usadas:

- React (npx create-react-app validacao_formularios);

- styled-components (npm install --save styled-components);

- react-hook-forms (npm install react-hook-form);

- @hookforms/yup (npm install @hookform/resolvers yup).

### Video explicativo
[Marco Bruno](https://www.youtube.com/watch?v=oD30xo6DGVg&t=0s)

<br>

# Usando o Use Forms

[Documentação do UseForms](https://react-hook-form.com/api/useform);

```JS
 import { useForm } from "react-hook-form"; //Primeramente ele precisar ser importado para a página onde será usado.

//Geralmente ele tem uma sintaxe similar a essa:
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
```
<br><br>

## **Register:** *(name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })*
Este método permite que você registre uma entrada ou selecione um elemento e aplique regras de validação ao React Hook Form. As regras de validação são todas baseadas no padrão HTML e também permitem métodos de validação personalizados.

Ao invocar a função register e fornecer o nome de uma entrada, você receberá os seguintes métodos:

Name | Tipo | Descrição
---- | ---- |----------
onChange | ChangeHandler | onChange prop to subscribe the input change event.
onBlur | ChangeHandler | onBlur prop to subscribe the input blur event.
ref | React.Ref``<any>`` | Input reference for hook form to register.
name | string | Input's name being registered.

<br>

Lembrando que ele guardar o Input pelo valor do ``name``:
Input Name|Submit Result
--------- | ------------
register("firstName")| {firstName: 'value'}
register("name.firstName")|{name: { firstName: 'value' }}
register("name.firstName.0")|{name: { firstName: [ 'value' ] }}

<br>

***Return:***
```JS
const { onChange, onBlur, name, ref } = register('firstName'); 

        
<input 
  onChange={onChange} 
  onBlur={onBlur} 
  name={name}
  ref={ref}
/>

<input {...register('firstName')} />
````

<br><br>

## **handleSubmit:** *((data: Object, e?: Event) => void, (errors: Object, e?: Event) => void) => Function*

<br>

Esta função receberá os dados do formulário se a validação do formulário for bem-sucedida.


Name|Type|Description
--- | -- | ---------
SubmitHandler|(data: Object, e?: Event) => void|A successful callback.
SubmitErrorHandler|(errors: Object, e?: Event) => void|An error callback.

<br><br>

## **watch:** *(names?: string | string[] | (data, options) => void) => unknown*

Este método observará as entradas especificadas e retornará seus valores. É útil para renderizar o valor de entrada e para determinar o que renderizar por condição.

Type|Description
--- | ----
string|Watch input value by name (similar to lodash get function)
string[]|Watch multiple inputs
undefined|Watch all inputs
(data: unknown, { name: string, type: string }) => void|Watch all inputs and invoke a callback

<br>

***Return:***

Example|Return
------ | -----
watch('inputName')|unknown
watch(['inputName1'])|unknown[]
watch()|{[key:string]: unknown}
watch((data, { name, type }) => console.log(data, name, type))|{ unsubscribe: () => void }

<br><br>

## formState: Object

Este objeto contém informações sobre todo o estado do formulário. Ele ajuda você a acompanhar a interação do usuário com seu aplicativo de formulário.

**Principais:**
Name|Type|Description
--- | -- | --------
errors|object|An object with field errors. There is also an ErrorMessage component to retrieve error message easily.
isValid|boolean|Set to true if the form doesn't have any errors.
isSubmitting|boolean|true if the form is currently being submitted. false otherwise.
isLoading|boolean|true if the form is currently loading async default values.
submitCount|number|Number of times the form was submitted
entre Outros....

<br><br>

## control: Object

Este objeto contém métodos para registrar componentes no React Hook Form.

*Importante: não acesse nenhuma das propriedades dentro deste objeto diretamente. É apenas para uso interno.*

```JS
import { useForm, Controller } from "react-hook-form";

function App() {
  const { control } = useForm();
  
  return (
    <Controller
      render={({ field }) => <input {...field} />}
      name="firstName"
      control={control}
      defaultValue=""
    />
  );
}
```
****Existe outras propriedades que vale o esforço dar uma olha na documentação oficiao do Hook Forms https://react-hook-form.com/api****

<br><br><br>

# YUP

O yup será usado para validação de um formulário:
```JS
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Obs: essa parte abaixo deve ser feita fora da minha função.
const schema = yup.object({//A partir daqui eu defino as coissas como JSON(chave: key):
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

```

