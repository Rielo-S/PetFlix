import { Link } from 'react-router-dom'

import { ImagesWrapper, ImageContainer, RoundedImage, Text }  from './styles.js'

import cachorroImage from './images/cachorro.jpeg';
import gatitoImage from './images/gatito.jpeg';




export function Main(){

  return (

    <>

    <ImagesWrapper>
      <ImageContainer>
        <Link to="/cachorros">
          <RoundedImage src={cachorroImage} alt="foto-cachorro" />
        </Link>
        <Text>Cachorrildo</Text>
      </ImageContainer>
      <ImageContainer>
        <Link to="/gatos">
          <RoundedImage src={gatitoImage} alt="foto-gato" />
        </Link>
        <Text>Gatildo</Text>
      </ImageContainer>
    </ImagesWrapper>

  </>


  )
   
}

