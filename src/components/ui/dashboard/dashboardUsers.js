import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import {registerRequest } from "../../../api/auth.request";
import { getUsersRequest, updateUserRequest, deleteUserRequest } from "../../../api/users.request";
import Swal from 'sweetalert2';

function AdminUsers() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [legajo, setLegajo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState();
  const [editar, setEditar] = useState(false);
  const [usuariosList, setUsuariosList] = useState([]);  

  const add = () => {

    // Axios.post("http://localhost:8888/auth/user/register", {
  
  const new_user =  {
    nombre: nombre,
    apellido: apellido,
    legajo: legajo,
    email: email,
    password: password,    
    id_role:'2',
    verified:'1',
  }

  registerRequest(new_user).then((res) => {
      console.log(res)
      if(res.status !== 200 ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: "<i>"+res.data+"</i>",
          timer: 3000,
        });
        
      }
      Swal.fire({
        title: "<strong>Registro exitoso!!!</strong>",
        html: "<i>El usuario <strong>" + nombre + " " + apellido + "</strong> fue registrado con éxito!!!</i>",
        icon: 'success',
        timer: 3000
      });
      getUsuarios();

    }).catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: "<i>Ocurrió un error en el momento del registro. <br>Intente de nuevo más tarde</i>",
        timer: 3000,
      });
    });
    console.log(nombre, apellido,email,password)
  }

  const update = () => {
    if (!id) {
      console.error("ID del usuario no disponible");
      return;
    }
  
    // Axios.put(`http://localhost:8888/users/${id}`,{
    //   id:id,
    //   nombre:nombre,
    //   apellido:apellido,
    //   email:email,
    //   password:password,
    //   legajo:legajo
    // })
    updateUserRequest({id,nombre,apellido,email,password,legajo})
    .then(() => {
      getUsuarios();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización exitosa!!!</strong>",
        html: "<i>El usuario <strong>"+nombre+" " +apellido+"</strong> fue actualizado con éxito!!!</i>",
        icon: 'success',
        timer:3000
      });
    }).catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
        });
      });
  }

  const deleteUsuario = (val) => {
    Swal.fire({
      title: 'Confirmar eliminación?',
      html: "<i>Realmente desea eliminar a <strong>" + val.nombre + " " + val.apellido + "</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
       // Axios.delete(`http://localhost:8888/users/${val.id}`).then((res) => {
         deleteUserRequest(val.id).then((res) => {
          getUsuarios();
          limpiarCampos();
          Swal.fire({
            icon: 'success',
            title: val.nombre + " " + val.apellido + ' fue eliminado.',
            showConfirmButton: false,
            timer: 2000
          });
        }).catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se logró eliminar el usuario!',
            footer: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
          });
        });
      }
    });
    
  }

  const limpiarCampos = () => {
    setNombre("");
    setApellido("");
    setLegajo("");
    setEmail("");
    setPassword("");
    setId("");
    setEditar(false);
  }

  const editarUsuario = (val) => {
    console.log(val.id)
    setEditar(true);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setLegajo(val.legajo);
    setEmail(val.email);
    setPassword(val.password);
    setId(val.id);
  }
  const getUsuarios = () => {
    //Axios.get("http://localhost:8888/users")
    getUsersRequest()
      .then((response) => {
        const jsonData = response.data.payload;
        setUsuariosList(jsonData);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  };
  

  useEffect(() => {
    getUsuarios(); // Se llamará una vez después del montaje del componente
  }, []);
  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          GESTIÓN DE USUARIOS
        </h1>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nombre:</label>
            <input
              type="text"
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              value={nombre}
              placeholder="Ingrese un nombre"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Apellido:</label>
            <input
              type="text"
              value={apellido}
              onChange={(event) => {
                setApellido(event.target.value);
              }}
              placeholder="Ingrese el apellido"
              aria-label="Apellido"
              aria-describedby="basic-addon1"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Legajo:</label>
            <input
              type="text"
              value={legajo}
              onChange={(event) => {
                setLegajo(event.target.value);
              }}
              placeholder="Ingrese el legajo"
              aria-label="Legajo"
              aria-describedby="basic-addon1"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
              placeholder="Ingrese un Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
              placeholder="Ingrese una Contraseña"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          {editar ? (
            <div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mr-2" onClick={update}>Actualizar</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={limpiarCampos}>Cancelar</button>
            </div>
          ) : (
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded" onClick={add}>Registrar</button>
          )}
        </div>
      </div>
      <table className="w-full bg-white rounded-lg shadow-md my-8">
        <thead>
          <tr className="mb-8">
            <th scope="col" className="border p-2 ">#</th>
            <th scope="col" className="border p-2">Nombre</th>
            <th scope="col" className="border p-2">Apellido</th>
            <th scope="col" className="border p-2">Legajo</th>
            <th scope="col" className="border p-2">Email</th>
            <th scope="col" className="border p-2">Password</th>
            <th scope="col" className="border p-2"></th>
            <th scope="col" className="border p-2"></th>
          </tr>
        </thead>
        <tbody> 
  
{usuariosList.map((val, key) => (
 
  <tr key={val.id}>
   <th>{val.id}</th>
   <td className="border p-2">{val.nombre}</td>
    <td className="border p-2">{val.apellido}</td>
    <td className="border p-2">{val.legajo}</td>
   <td className="border p-2">{val.email}</td>
  <td className="border p-2">{val.password}</td>
  <td className="border p-2">     
    <button
          type="button"
          onClick={() => editarUsuario(val)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mx-1"
        >
          Editar
        </button>
    </td>
    <td className="border p-2">
    <button
          type="button"
          onClick={() => deleteUsuario(val)}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mx-1"
        >
          Eliminar
        </button>
    </td>
    
  </tr>
  
))}
        </tbody>
      </table>
    </div>
  );
}
export default AdminUsers;