import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import {api} from '../../services/api';

import { IFormData } from "./types";


import { Container, Title, Column, TitleLogin, SubtitleLogin, TextBtn, Row, Wrapper, InfoText, LoginText } from './styles';



const Sign = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        reValidateMode: "onChange",
        mode: "onChange",
    });

  const onSubmit = async (formData: IFormData) => {
    try {
        const {data} = await api.get(`/users?email=${formData.email}&password=${formData.password}`);
        if(data.length && data[0].id){
            alert('Email já cadatrado')
            return;
        }
        alert("Não estamos aceitando novos cadastros no momento")
    }catch(e){
        alert('Houve um error, tente novamente. Tipo Do error: '+ e)
    }
}; 




    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
            <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>


                <Input name="person" control={control}  placeholder="Nome Completo" leftIcon={<MdPerson />} />
                {errors.person && <span>Nome é obrigatório</span>}


                <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                {errors.email && <span>E-mail é obrigatório</span>}


                <Input name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                {errors.password && <span>Senha é obrigatório</span>}    
                <br/><br/>
                
                <Button title="Criar minha conta" variant="secondary" type="submit" />


            </form>
            <Row>
                <InfoText>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as
                    Políticas de Privacidade e os Termos de Uso da DIO.
              </InfoText>
            </Row>
            <Row>
              <LoginText>Já tenho conta.</LoginText>
              <TextBtn>Fazer login </TextBtn>
            </Row>
            </Wrapper>
                
            </Column>
        </Container>
        </>)
}

export {Sign};

