import React from "react";
import '../ListaAtendimentos.css'
import axios from 'axios'


export class ListaAtendimentos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            responseDataAtendimentos: [],
            atendimentosDisplayData: <></>
        }
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.fetchData(),
            5000
        );

    }

    componentWillUnmount(){
        clearInterval(
            this.timerID
        );

    }

    fetchData(){
        var response;
        var atendimentos = [];
        var current_state = this;

        response = axios.get("http://localhost:5000/api/v1/listar_atendimentos").then( function (response){
  
            response.data.forEach(function (atendimento_info) {
  
                atendimentos.push(atendimento_info)
            })

            current_state.setState({responseDataAtendimentos: atendimentos})
        })

        if (this.state.responseDataAtendimentos.length > 0){
            this.state.atendimentosDisplayData = this.state.responseDataAtendimentos.map(function (atendimento) {
                return <p key={atendimento.id}>Pet: {atendimento.pet} | Atendimento: {atendimento.id}   <span class="material-symbols-outlined">edit_square</span>   <span class="material-symbols-outlined">close</span> </p> 
            })
        }

        this.forceUpdate();

    }

    render(){
        return(
            <div className="divLista">
              <p>Atendimentos já existentes
                </p>
                {
                    this.state.atendimentosDisplayData
                }  
            </div>
        );
    }

}