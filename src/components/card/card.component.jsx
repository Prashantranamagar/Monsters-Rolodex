// import { Component } from "react";


const Card = (props) => {     // for futher destructuring const card =({monster: {id, name, email}}) =>
    const {name, id, email} = props.monster  //destructuring 
    // const {monsters} = this.props.monster  //for class component
    return(
        <div className="card-container" key ={id}>
            <img
                alt={`monster ${name}`}
                src = {`https://robohash.org/${id}?set=set2`}
            >
            </img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}


export default Card;