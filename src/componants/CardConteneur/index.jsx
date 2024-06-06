//Génerer <Card /> pour la longueur du tableau!
import { logementList } from '../../data/logements/logementList'
import Card from '../Card/index'


function CardConteneur(){
    for (let i =0; i < logementList.length; i++) {
        <Card />
    }
    return(
        <div className="card-conteneur">

    
        </div>
    )
}

export default CardConteneur