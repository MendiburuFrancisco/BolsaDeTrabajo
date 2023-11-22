
import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import Footer from '../components/ui/Footer'
import LogoNegro from './../assets/img/logo-utn-n.png'
import { Form, Link } from 'react-router-dom';
import FormInput from '../components/form/FormInput';



export const SignUpCompany = () => {

 const [formData, setFormData] = useState({ inputField: '' });
 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
   };
   const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.inputField === '') {
       alert('Por favor, complete el campo de texto antes de enviar el formulario.');
    } 
   };
    return (
    <> 
    <div className="login-card bg-white-100 p-6 rounded-lg  shadow-md min-w-fit  mb-8" >
    <div className=' grid justify-items-center p-4'>
        <img className="login-logo  shadow-md  w-60 m-6" alt="logo" src={LogoNegro} />
        <h2 className="text-xl font-semibold">REGISTRO</h2>
        <p>Para empresas</p> 
        <form onSubmit={handleSubmit} className=' grid justify-items-center p-4'>
            <FormControl fullWidth className="mb-4 mt-4 ">
            <InputLabel htmlFor="cuit" className="block text-gray-700  font-semibold mb-1 ml-2 " >CUIT</InputLabel>
            <Input
                id="cuit"
                name="cuit"
                value={formData.cuit}
                onChange={handleChange}
                required
                className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 "
            />
            </FormControl>
            <FormControl fullWidth className="mb-4 mt-4 ">
            <InputLabel htmlFor="razSoc" className="block text-gray-700 font-semibold mb-1 ml-2" >Razon Social</InputLabel>
            <Input
                id="razSoc"
                name="razSoc"
                value={formData.razSoc}
                onChange={handleChange}
                required
                className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 "
            />
            </FormControl>
            <FormControl fullWidth className="mb-4 mt-4 ">
            <InputLabel htmlFor="mail" className="block text-gray-700 font-semibold mb-1 ml-2" >Email</InputLabel>
            <Input
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                required
                className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 "
            />
            </FormControl>
            <FormControl fullWidth className="mb-4 mt-4 ">
            <InputLabel htmlFor="rubro" className="block text-gray-700  font-semibold mb-1 ml-2" >Rubro</InputLabel>
            <Input
                id="rubro"
                name="rubro"
                value={formData.rubro}
                onChange={handleChange}
                required
                className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 "
            />
            </FormControl>
            <button className="w-40 mt-5 bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 mb-2">
            Registrarme
            </button>
            <FormInput  type="submit" value="Registrarme" />
        </form>  
        <Link to={"/login"}> 
        <p className=' text-gray-400 '>¿Tenes cuenta?</p>
        </Link>
    </div>
    </div>
        <Footer/>
      
      </>
    );
        }