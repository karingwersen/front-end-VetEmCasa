import React from "react";
import '../DetalhesAtendimento.css';
import axios from "axios";

export class DetalhesAtendimento extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            responseDataAtendimento: undefined,
            atendimentoDisplayData:<></>
        }
        
    }

    componentDidMount(){}

    componentWillUnmount(){}

    fetchData(){
        var atendimento_id = document.getElementById("id_input").value;
        var response;
        var current_state = this;
        var new_info;
        var atendimento = {};
        var displayData;
        
        response = axios.get("http://localhost:5000/api/v1/detalhes_atendimento?id=" + atendimento_id).then( function (response){

            atendimento = response.data

            current_state.setState({responseDataAtendimento: atendimento}, () => {
                new_info = current_state.state.responseDataAtendimento

                displayData = <div><p key={new_info.id}>Pet: {new_info.pet} | Tutor: {new_info.tutor} | Veterinario: {new_info.veterinario}</p><p>Data: {new_info.data} | Horario: {new_info.horario}</p></div>

                current_state.setState({atendimentoDisplayData: displayData}, () => {
                    current_state.forceUpdate();
                })
            })
        });
    }
        
    render(){
        return(
            <div className="divDetalhes">
                <p>Detalhes do atendimento
                    </p>
                    <form>
                        ID atendimento: <input id="id_input" type="text"/> <button id="fetchButton" type="button" className="botaoBusca" onClick={this.fetchData.bind(this)}>Buscar</button>
                    </form> 
                    <div>{this.state.atendimentoDisplayData}
                        </div>    
            </div>
        )

    }
        
    

}


