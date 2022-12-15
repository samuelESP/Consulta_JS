
import { FiThumbsUp } from 'react-icons/fi'
import { 
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
  } from './styles';

const Card = () => {
  return(
    <CardContainer>
        <ImageBackground src="https://www.lance.com.br/files/article_main/uploads/2022/12/09/639377d1ca83a.jpeg"/>
        <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/62106502?v=4"/>
          <div>
            <h4>Samuel Espindola</h4>
            <p>Há 3 minutos</p>
          </div> 
          </UserInfo>
          <PostInfo>
            <h4>Como entregar um jogo da Copa do mundo no Qatar </h4>
            <p>Ai acaba com minha semana ne produção...<strong>Saiba Mais</strong></p>
          </PostInfo>
          <HasInfo>
            <h4>#Perdemo #Chorei #AbaloTotal</h4>
            <p>
              <FiThumbsUp />210000000
            </p>
          </HasInfo>
        </Content>
    </CardContainer>
  )
}


export {Card}