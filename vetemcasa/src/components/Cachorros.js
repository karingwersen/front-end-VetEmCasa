import React from "react";
import '../Cachorros.css';
import axios from "axios";

export class Cachorros extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            responseDataCachorros: [],
            cachorrosDisplayData: <></>
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
        var cachorros = []
        var current_state = this;
        
        response = axios.get("https://api.thedogapi.com/v1/images/search", {}).then( function (response){
            response.data.forEach(function (cachorro_info) {
  
                cachorros.push(cachorro_info)
            })

            current_state.setState({responseDataCachorros: cachorros})
        })

        if (this.state.responseDataCachorros.length > 0){
            this.state.cachorrosDisplayData = this.state.responseDataCachorros.map(function (cachorro) {
                return <img key={cachorro.id} src={cachorro.url} className="imagemCachorros" /> 
            })
        }

        this.forceUpdate();
        
    }

    render() {
        return(
            <div className="divImagemCachorros">
                {
                    this.state.cachorrosDisplayData
                }
            </div>
        )
    }
}