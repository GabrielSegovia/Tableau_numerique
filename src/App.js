import React from 'react';
import './App.scss';
import Activity from "./Activity.js";
import Bitcoin from "./Bitcoin.js";
import Chien from "./Chien.js"

class App extends React.Component {

  constructor(props) { // on mets {quand on fait un tableau (table)}
    super(props);
    this.state = {
      chiens:[]
    }
  }

  ajouterChien() {
    let chien= (<Chien/>); //ajouter une personne nouvelle de la database
    let chiens = this.state.chiens.concat(chien); //personnes vien de la table de la BD
    this.setState({chiens:chiens});
  }

  render() {  
    return (
      <div>
        <h1>Mon babillare</h1>
        <div className= "activities row">
          <br/>
          <br/>
          <div className= "bitcoin">
            <Bitcoin/> 
          </div>
          <br/>
          <br/>
          <br/>

          <div className= "activities row">
            <div className= "col-2"></div>
            <div className= "activite col-2"> <Activity/> </div>
            <div className= "activite col-2"> <Activity/> </div>
            <div className= "activite col-2"> <Activity/> </div>
            <div className= "col-2"></div>
          </div>
          <div>
            <button onClick={() => this.ajouterChien()}>Ajouter un chien</button>
          </div>

          <div className="chiens"> 
            {this.state.chiens}
          </div>

        </div>


      </div>
    );
  }


}

export default App;