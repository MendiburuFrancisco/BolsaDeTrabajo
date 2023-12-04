import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Axios from "axios";

import Swal from 'sweetalert2';

function AdminEmpresa() {
  const [cuit, setCuit] = useState("");
  const [razon_social, setRazonSocial] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState();
  const [editar, setEditar] = useState(false);
  const [empresasList, setEmpresasList] = useState([]);

  const add = () => {
    Axios.post("http://localhost:8888/auth/company/register", {
      cuit: cuit,
      razon_social: razon_social,
      email: email,
      direccion: direccion,
      telefono: telefono,
      password: password,
      verified: true,
      
    }).then(() => {
       getEmpresas();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro exitoso!!!</strong>",
        html: "<i>El empleado <strong>" + razon_social + "</strong> fue registrado con éxito!!!</i>",
        icon: 'success',
        timer: 3000
      });
    }).catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
      });
    });
    console.log(cuit,razon_social,direccion,email,password,telefono)
  }

   const update = () => {
    if (!id) {
      console.error("ID del usuario no disponible");
      return;
    }
  
    Axios.put(`http://localhost:8888/company/${id}`, {
        id: id,
        cuit: cuit,
        razon_social: razon_social,
        direccion: direccion,
        email: email,
        telefono: telefono,
        password: password,
      }).then(() => {
        getEmpresas();
        limpiarCampos();
        Swal.fire({
          title: "<strong>Actualización exitosa!!!</strong>",
          html: "<i>La empresa <strong>" + razon_social + "</strong> fue actualizada con éxito!!!</i>",
          icon: 'success',
           timer: 3000
         });
       }).catch(function (error) {
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
         });
       });
    }

    const deleteEmpresa = (val) => {
      Swal.fire({
        title: 'Confirmar eliminado?',
        html: "<i>Realmente desea eliminar a <strong>" + val.razon_social + "</strong>?</i>",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Axios.delete(`http://localhost:8888/company/${val.id}`).then((res) => {
            getEmpresas();
            limpiarCampos();
            Swal.fire({
              icon: 'success',
              title: val.razon_social + ' fue eliminado.',
              showConfirmButton: false,
              timer: 2000
            });
          }).catch(function (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No se logró eliminar el empleado!',
              footer: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
            });
          });
        }
      });
    }

  const limpiarCampos = () => {
    setCuit("");
    setRazonSocial("");
    setEmail("");
    setDireccion("");
    setTelefono("");
    setPassword("");
    setId("");
    setEditar(false);
  }

    const editarEmpresa = (val) => {
      setEditar(true);
      setCuit(val.cuit);
      setRazonSocial(val.razon_social);
      setEmail(val.email);
      setDireccion(val.direccion);
      setTelefono(val.telefono);
      setPassword(val.password);
      setId(val.id);
    }

    const getEmpresas = () => {
       Axios.get("http://localhost:8888/company").then((response) => {
        const jsonData = response.data.payload;
        setEmpresasList(jsonData);
       })
       .catch((error) => {
        console.error("Error al obtener empresas:", error);
      });
    }

    useEffect(() => {
      getEmpresas(); // Se llamará una vez después del montaje del componente
    }, []);
  return (
    <div className="container mx-auto">
  <div className="bg-white rounded-lg shadow-md p-8">
    <h1 className="text-2xl font-bold text-center mb-6">
      GESTIÓN DE EMPRESAS
    </h1>
    <div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">CUIT:</label>
      <input
          type="text"
          onChange={(event) => {
            setCuit(event.target.value);
          }}
          value={cuit}
          placeholder="Ingrese un CUIT"
          aria-label="CUIT"
          aria-describedby="basic-addon1"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
        />
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Razon Social:</label>
      <input
          type="text"
          value={razon_social}
          onChange={(event) => {
            setRazonSocial(event.target.value);
          }}
          placeholder="Ingrese la Razón Social"
          aria-label="Razón Social"
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
      <label className="block text-sm font-medium text-gray-700">Direccion:</label>
        <input
          type="text"
          value={direccion}
          onChange={(event) => {
            setDireccion(event.target.value);
          }}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
          placeholder="Ingrese una Dirección"
          aria-label="Dirección"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
      <label className="block text-sm font-medium text-gray-700">Telefono:</label>
        <input
          type="text"
          value={telefono}
          onChange={(event) => {
            setTelefono(event.target.value);
          }}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
          placeholder="Ingrese un Teléfono"
          aria-label="Teléfono"
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
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"  onClick={add}>Registrar</button>
      )}
    </div>
  </div>
  <table className="w-full bg-white rounded-lg shadow-md my-8">
    <thead>
      <tr>
        <th scope="col"className="border p-2">#</th>
        <th scope="col"className="border p-2">CUIT</th>
        <th scope="col"className="border p-2">Razón Social</th>
        <th scope="col"className="border p-2">Email</th>
        <th scope="col"className="border p-2">Dirección</th>
        <th scope="col"className="border p-2">Teléfono</th>
        <th scope="col"className="border p-2">Password</th>
      </tr>
    </thead>
    <tbody>
       {empresasList.map((val, key) => (
          <tr key={val.id}>
            <th>{val.id}</th>
            <td className="border p-2">{val.cuit}</td>
            <td className="border p-2">{val.razon_social}</td>
            <td className="border p-2">{val.email}</td>
            <td className="border p-2">{val.direccion}</td>
            <td className="border p-2">{val.telefono}</td>
            <td className="border p-2">{val.password}</td>
            <td className="border p-2">     
    <button
          type="button"
          onClick={() => editarEmpresa(val)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mx-1"
        >
          Editar
        </button>
    </td>
    <td className="border p-2">
    <button
          type="button"
          onClick={() => deleteEmpresa(val)}
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

export default AdminEmpresa;
