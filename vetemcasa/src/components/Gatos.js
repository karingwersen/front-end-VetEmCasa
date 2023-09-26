import React from "react";
import '../Gatos.css';
import axios from "axios";

export class Gatos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            responseDataGatos: [],
            gatosDisplayData: <></>
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
        var gatos = []
        var current_state = this;
        
        response = axios.get("https://api.thecatapi.com/v1/images/search", {}).then( function (response){
            response.data.forEach(function (gato_info) {
  
                gatos.push(gato_info)
            })

            current_state.setState({responseDataGatos: gatos})
        })

        if (this.state.responseDataGatos.length > 0){
            this.state.gatosDisplayData = this.state.responseDataGatos.map(function (gato) {
                return <img key={gato.id} src={gato.url} className="imagemGatos"/> 
            })
        }

        this.forceUpdate();
        
    }

    render() {
        return(
            <div className="divImagemGatos">
                {
                    this.state.gatosDisplayData
                }
            </div>
        )
    }
}