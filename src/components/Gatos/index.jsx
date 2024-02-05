import { WrapperVideo, Text } from './styles.js'
import { Link } from 'react-router-dom'

export function Gatos(){
  return(
  <>
   <WrapperVideo>
   <iframe width="866" height="487" src="https://www.youtube.com/embed/ByRSxAqArzQ"
   title="GATOS TIERNOS BEBES 🔵 GATOS LINDOS 🔵 GATOS ADORABLES 🔵 GATITOS GRACIOSISIMOS"
    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowfullscreen></iframe>

   </WrapperVideo>

   <Link to="/" style={{textDecoration: 'none'}}>
          <Text>&laquo; Voltar</Text>
       </Link> 
  
       
  </>
  )
}