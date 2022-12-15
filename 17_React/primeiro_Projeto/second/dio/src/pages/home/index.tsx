import { useNavigate  } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from "../../assets/banner.png";
import { Container, Title, TitleHighlight, TextContent } from './styles';

const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    
    return(<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implement<br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title='Começar' variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImage} alt="Banner Principal" />
            </div>
        </Container>
        </>)
}

export {Home};