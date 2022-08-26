import React from "react";
import axios from 'axios';
import "./Chien.scss";

export default class Chien extends React.Component { //comprend pas ici...
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: false,
            erreur : null        
        };
    }
    componentDidMount() {
        this.setState({isLoading:true});
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then( (resp) => {
                 this.setState({isLoading:false, erreur:null, data: resp.data});
            }).catch((err) => {
                console.log(err);
                this.setState({isLoading:false, erreur:"Impossible de charger les données", data:null});
            }) ;
    }
    render() { //dans le render #34 on doit mettre la bd pcq c'est le c'est ici qu'il vas s'afficher
        console.log(this.state);
        if (this.state.isLoading) {
            return (<p>Loading ...</p>);        
        }
        else if (this.state.erreur) {
            return (<p>{this.state.erreur}</p>);        
        }
        else if (this.state.data) {
            const chien =  this.state.data;

            return (
                <div className="chien">                    
                    <div className="chien-img">                        
                        <img src={chien.message} alt="Chien" width="200" height="200" />                   
                    </div>                    
             
                </div>            
                );
        }
        else {
            return <div></div>
        }
    }
}