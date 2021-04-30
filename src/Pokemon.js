import React from 'react';
import logo from './pokeball.png'
import './App.css';


class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;
        
        return (
            <div className="pokemon">
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                   <a href={moreInfo} target="_blank"><img src={logo} className="pokeball-info" alt=""></img> </a> 
                </div>
                <img  className="imgPokemon"src={image} alt={`${name} sprite`} />
        
            </div>
        );
    }
}



export default Pokemon;