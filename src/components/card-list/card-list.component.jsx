import Card from '../card/card.component';
import './card-list.style.css';

const CardList = ({monsters}) => {
    //const {monsters} = props   //for this use props parameter instead of{monsters}
    return(
        <div className="card-list">
            {monsters.map(monster =>{
                return (
                    <Card monster={monster}></Card>
                )
                
                
                })}
        </div>
    );
}


export default CardList;