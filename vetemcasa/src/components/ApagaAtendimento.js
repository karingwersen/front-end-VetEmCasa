import React from "react";
import '../ApagaAtendimento.css'
import axios from "axios";



export class ApagaAtendimentoAtendimento extends React.Component{
    constructor(props){
        super(props)
    }

    sendData(){
        var response;
        var response_status_code;
        var id_atendimento = ""; 

        form.addEventListener('submit', (event) => {event.preventDefault()})
        
        response = axios.delete("http://localhost:5000/api/v1/apagar_atendimento?id=" + id_atendimento, {
          
        }).then( function (response){
            response_status_code = response.status
            
            if (response_status_code === 204){
                window.alert("Atendimento apagado!")
            } else {
                window.alert("Atendimento não pôde ser apagado.")
            }

        })
        
    }

    render(){

        return()

    }
}