//import { Component } from "react";
import Card from "../card-component/card.jsx"
import "./card-list.styles.css";

const CardList = ({monsters}) => {

        return (
            <div className="card-list">
                {  monsters.map((monster) => {
                    console.log(monster)
                    return(
                        <Card monster = {monster} />
                    );
                })}

            </div>
        );
}





// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;

//         return (
//             <div className="card-list">
//                 {  monsters.map((monster) => {
//                     return(
//                         <Card monster = {monster} />
//                     );
//                 })}

//             </div>
//         );
//     }
// }
export default CardList;