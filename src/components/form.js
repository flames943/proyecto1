import React, { Component } from 'react'
import "./from.css"
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import logo from './img/hoja.png';
import validator from 'validator' 



class Form extends Component {
    constructor() {
        super();
        this.state = {
            'nombre': '',
            'email': '',
            'telefono': '',
            'fecha': '',
            'ciudad': ''
        }
        this.onChangeValues = this.onChangeValues.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onChangeValues (e) {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    onHandleSubmit (e) {
        e.preventDefault();
        const { nombre, email, telefono } = this.state;
        const { fecha, ciudad } = this.state;

        alert(`${nombre}, ${email}, ${telefono}, ${fecha}, ${ciudad}`);
    }

    validatePhoneNumber = (telefono) => {
        const isValidPhoneNumber = validator.isMobilePhone(telefono)
        return (isValidPhoneNumber)
       }
       

    render() {
        return (
            <div>
                <img className="logi" src={logo} alt="Logo" />
                <h1 className="cuadro">Green Leaves</h1>
                <form className="formu" onSubmit={(e) => this.onHandleSubmit(e)}>
                    Nombre:<input type="text" name="nombre" onChange={(e) => this.onChangeValues(e)}  required/><br /> 
                    E-mail:<input type="text" name="email" onChange={(e) => this.onChangeValues(e)} required/><br /> 
                    Teléfono:<input type="text" name="telefono" onChange={(e) => this.onChangeValues(e)} required/><br /> 
                    <div>Fecha: <DatePicker 
                                defaultValue={new Date()}
                                valueEditFormat={{ dateStyle: "short" }}
                                valueDisplayFormat={{ dateStyle: "medium" }}
                                className="size"
                                name="fecha"
                                /></div> <br /> 
                    Ciudad y Estado:<input type="text" name="ciudad" onChange={(e) => this.onChangeValues(e)} required /><br /> 
                    <input className="envia" type="submit" value="Enviar"/> 
                </form> 
            </div>
        )
    }
}

export default Form;