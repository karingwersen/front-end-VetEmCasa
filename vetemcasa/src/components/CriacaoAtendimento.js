import React from "react";
import '../CriacaoAtendimento.css'
import axios from "axios";



export class CriacaoAtendimento extends React.Component{
    constructor(props){
        super(props)
    }

    sendData(){
        var response;
        var response_status_code;
        var form = document.getElementById("creationForm")

        var new_pet = document.getElementById("formPet").value
        if (new_pet === ""){
            return 1
        }

        var new_tutor = document.getElementById("formTutor").value
        if (new_tutor === ""){
            return 1
        }

        var new_vet = document.getElementById("formVet").value
        if (new_vet === ""){
            return 1
        }

        var new_data = document.getElementById("formData").value
        if (new_data === ""){
            return 1
        }

        var new_horario = document.getElementById("formHorario").value
        if (new_horario === ""){
            return 1
        }

        form.addEventListener('submit', (event) => {event.preventDefault()})
        
        response = axios.post("http://localhost:5000/api/v1/criar_atendimento", {
            pet: ""+new_pet+"",
            tutor: ""+new_tutor+"",
            veterinario: ""+new_vet+"",
            data: ""+new_data+"",
            horario: ""+new_horario+""
        }).then( function (response){
            response_status_code = response.status
            
            if (response_status_code === 201){
                window.alert("Atendimento criado!")
            } else {
                window.alert("Atendimento não pôde ser criado.")
            }

            document.getElementById("formPet").value = ''
            document.getElementById("formTutor").value = ''
            document.getElementById("formVet").value = ''
            document.getElementById("formData").value = ''
            document.getElementById("formHorario").value = ''

        })
        
    }

    render(){

        return(
            <div className="divFormulario">
                 <p>Criar novo atendimento
                    </p>
                <form id="creationForm">
                    Pet: <input id="formPet" required></input>
                    <br></br>
                    Tutor: <input id="formTutor" required></input>
                    <br></br>
                    Veterinario: <input id="formVet" required></input>
                    <br></br>
                    Data: <input id="formData" type="date" required></input>
                    <br></br>
                    Horario: <input id="formHorario" type="time" required></input>
                    <br></br>
                    <input className="submitButton" type="submit" onClick={this.sendData.bind(this)} value='Criar'></input>
                </form>
            </div>
        )

    }
}