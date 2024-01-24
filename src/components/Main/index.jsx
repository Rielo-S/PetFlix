import { Link } from 'react-router-dom'

import { ImagesWrapper, ImageContainer, RoundedImage, Text }  from './styles.js'

export function Main(){
    <>

        <ImagesWrapper>
          <ImageContainer>
            <Link to="/cachorros">
              <RoundedImage src="PetFlix/src/images/cachorro.jpeg" alt="foto-cachorro" />
            </Link>
            <Text>Cachorrildo</Text>
          </ImageContainer>
          <ImageContainer>
            <Link to="/gatos">
              <RoundedImage src="PetFlix/src/images/gatito.jpeg" alt="foto-gato" />
            </Link>
            <Text>Gatildo</Text>
          </ImageContainer>
        </ImagesWrapper>

    </>

}

