import React from "react";
import axios from 'axios';
import "./Bitcoin.scss";

export default class Bitcoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: false,
            erreur : null        
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({isLoading:true});
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((resp) => {
                console.log(resp);
                this.setState({data:resp.data.bpi.USD, isLoading:false});
                //this.setState({data:rep.data.time, isLoading:false});
            }).then((err) => {
                if(err) {
                    console.log(err);
                    this.setState({isLoading:false, erreur: err.message});
                }
            });
        }, 30000);
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

            const bitcoin =  this.state.data; //***** */
            // console.log(activite)
            
            // let nomComplet = `${activite.activity}`;
            return (
                <div className="bitcoin container">                                   
                    <div className="bitcoin-table row"> 
                        <div className="col-4">{bitcoin.code} - {bitcoin.description} - &#36; {bitcoin.rate}</div>             
                        {/* <div className="col-4">{bitcoin.code}</div>
                        <div className="col-4">{bitcoin.description}</div>
                        <div className="col-4">&#36; {bitcoin.rate}</div> */}
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