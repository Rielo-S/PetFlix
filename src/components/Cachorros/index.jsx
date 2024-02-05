import { WrapperVideo, Text } from './styles.js'
import { Link } from 'react-router-dom'

export function Cachorros(){
    return(
    <>
      <WrapperVideo>
      <iframe width="866" height="487" src="https://www.youtube.com/embed/rsTLyukvxGU"
       title="CACHORROS TIERNOS Y BONITOS 🧡 ¡Vídeos de Perros Cachorros! Lunacreciente"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen></iframe>
       </WrapperVideo>

       
       <Link to="/" style={{textDecoration: 'none'}}>
          <Text>&laquo; Voltar</Text>
       </Link>  

       
         
    </>
    )
  }
  