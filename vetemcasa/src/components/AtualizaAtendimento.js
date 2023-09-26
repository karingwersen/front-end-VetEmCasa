import React from "react";
import Popup from 'reactjs-popup';
import '../AtualizaAtendimento.css';
import axios from "axios";



export class AtualizaAtendimento extends React.Component{
    constructor(props){
        super(props)
    }

    sendData(){
        var response;
        var response_status_code;
        var form = document.getElementById("updateForm")
        var id_atendimento = this.props.atendimento.id;

        var update_pet = document.getElementById("updateFormPet").value
        if (update_pet === ""){
            return 1
        }

        var update_tutor = document.getElementById("updateFormTutor").value
        if (update_tutor === ""){
            return 1
        }

        var update_vet = document.getElementById("updateFormVet").value
        if (update_vet === ""){
            return 1
        }

        var update_data = document.getElementById("updateFormData").value
        if (update_data === ""){
            return 1
        }

        var update_horario = document.getElementById("updateFormHorario").value
        if (update_horario === ""){
            return 1
        }

        form.addEventListener('submit', (event) => {event.preventDefault()})
        
        response = axios.put("http://localhost:5000/api/v1/atualizar_atendimento?id=" + id_atendimento, {
            pet: ""+update_pet+"",
            tutor: ""+update_tutor+"",
            veterinario: ""+update_vet+"",
            data: ""+update_data+"",
            horario: ""+update_horario+""
        }).then( function (response){
            response_status_code = response.status
            
            if (response_status_code === 202){
                window.alert("Atendimento atualizado!")
            } else {
                window.alert("Atendimento não pôde ser atualizado.")
            }

            document.getElementById("updateFormPet").value = ''
            document.getElementById("updateFormTutor").value = ''
            document.getElementById("updateFormVet").value = ''
            document.getElementById("updateFormData").value = ''
            document.getElementById("updateFormHorario").value = ''

        })
        
    }

    render(){
        return(
            <Popup trigger={<span class="material-symbols-outlined">edit_square</span>} position="right center">
                <div className="divFormularioUpdate">
                    <br></br>
                    <br></br>
                    <p>Atualizar atendimento ID {this.props.id}
                    </p>
                    <form id="updateForm">
                        Pet: <input id="updateFormPet" required defaultValue={this.props.atendimento.pet}></input>
                        <br></br>
                        Tutor: <input id="updateFormTutor" required defaultValue={this.props.atendimento.tutor}></input>
                        <br></br>
                        Veterinario: <input id="updateFormVet" required defaultValue={this.props.atendimento.veterinario}></input>
                        <br></br>
                        Data: <input id="updateFormData" type="date" required defaultValue={this.props.atendimento.data}></input>
                        <br></br>
                        Horario: <input id="updateFormHorario" type="time" required defaultValue={this.props.atendimento.horario}></input>
                        <br></br>
                        <input className="submitButton" type="submit" onClick={this.sendData.bind(this)} value='Atualizar'></input>
                    </form>
                </div>
            </Popup>
        )

    }
}