
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from './styles';
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo percentual={83} nome="Neymar Júnior" image="https://st1.uvnimg.com/d6/9b/7870e6f544dcb36fc8a409d16010/neymar-chorando-catar-1222-1400x800.jpg"/>
                <UserInfo nome="Anthony" image="https://pbs.twimg.com/media/FjjiIDcX0AA8ZuG.jpg:large" percentual={93}/>
                <UserInfo nome="Richarlison" image="https://f.i.uol.com.br/fotografia/2022/12/09/167061720963939879ac9fb_1670617209_3x2_md.jpg" percentual={75}/>
                <UserInfo nome="Tite" image="https://conteudo.imguol.com.br/c/esporte/23/2022/12/07/tite-tecnico-da-selecao-brasileira-durante-entrevista-coletiva-1670465490477_v2_450x600.jpg" percentual={45}/>
                <UserInfo nome="Modric" image="https://www.minhatorcida.com.br/wp-content/uploads/2022/12/1337946.max-1280x1280-1-614x440.jpg.webp" percentual={100}/>
            </Column>
        </Container>
        </>)
}

export {Feed};