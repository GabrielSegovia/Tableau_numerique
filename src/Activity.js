import React from "react";
import axios from 'axios';
import "./Activity.scss";

export default class Activity extends React.Component {
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
        axios.get('https://www.boredapi.com/api/activity')
            .then( (resp) => {
                 this.setState({isLoading:false, erreur:null, data: resp.data}); //data seulement si pas de array
            }).catch((err) => {
                console.log(err);
                this.setState({isLoading:false, erreur:"Impossible de charger les données", data:null});
            }) ;
    }
    render() {
        // console.log(this.state);
        if (this.state.isLoading) {
            return (<p>En chargement ...</p>);
        }
        else if (this.state.erreur) {
            return (<p>{this.state.erreur}</p>);
        }
        else if (this.state.data) {

            const activite =  this.state.data;
            // console.log(activite)
            
            // let nomComplet = `${activite.activity}`;
            return (
                <div className="activite">                                   
                    <div className="activite-nom">                        

                        <p>{activite.activity}</p>
                    </div>
                </div>
                );
        }
        else {
            return (<div>{this.state.erreur}</div>);       
        }
    }
}

/* <p>type: {personne.type}</p>
<p>participants: {personne.participants}</p>
<p>prix: {personne.price}</p>
<p>clé: {personne.key}</p>
p>accessibilité: {personne.accessibility}</p> */