import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Axios from "axios";

import Swal from 'sweetalert2';

function AdminJobs() {
  const [titulo, setTitulo] = useState("");
  const [fecha_desde, setFechaDesde] = useState("");
  const [fecha_hasta, setFechaHasta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sueldo, setSueldo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [id, setId] = useState();
  const [editar, setEditar] = useState(false);
  const [trabajosList, setTrabajosList] = useState([]);

  const add = () => {
    Axios.post("http://localhost:8888/jobs", {
      titulo: titulo,
      fecha_desde: fecha_desde,
      fecha_hasta: fecha_hasta,
      descripcion: descripcion,
      direccion: direccion,
      sueldo: sueldo,
      ubicacion: ubicacion,
      verified: true,
      id_usuario: 19,
      id_empresa: 1,
      id_tipo_trabajo: 1,
      
    }).then(() => {
       getTrabajos();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro exitoso!!!</strong>",
        html: "<i>La oferta de trabajo <strong>" + titulo + "</strong> fue registrada con éxito!!!</i>",
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
    console.log(titulo,fecha_desde,direccion,descripcion,ubicacion,sueldo)
  }

   const update = () => {
    if (!id) {
      console.error("ID del trabajo no disponible");
      return;
    }
  
    Axios.put(`http://localhost:8888/jobs/${id}`, {
        id: id,
        titulo: titulo,
        fecha_desde: fecha_desde,
        fecha_hasta: fecha_hasta,
        direccion: direccion,
        descripcion: descripcion,
        sueldo: sueldo,
        ubicacion: ubicacion,
        id_usuario: 19,
        id_empresa: 4,
        id_tipo_trabajo: 1,

      }).then(() => {
        getTrabajos();
        limpiarCampos();
        Swal.fire({
          title: "<strong>Actualización exitosa!!!</strong>",
          html: "<i>La oferta de trabajo <strong>" + titulo + "</strong> fue actualizada con éxito!!!</i>",
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

    const deleteTrabajo = (val) => {
      Swal.fire({
        title: 'Confirmar eliminado?',
        html: "<i>Realmente desea eliminar el trabajo <strong>" + val.titulo+ "</strong>?</i>",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Axios.delete(`http://localhost:8888/jobs/${val.id}`).then((res) => {
            getTrabajos();
            limpiarCampos();
            Swal.fire({
              icon: 'success',
              title: val.titulo + ' fue eliminado.',
              showConfirmButton: false,
              timer: 2000
            });
          }).catch(function (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No se logró eliminar el trabajo!',
              footer: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
            });
          });
        }
      });
    }

  const limpiarCampos = () => {
    setTitulo("");
    setFechaDesde("");
    setFechaHasta("");
    setDescripcion("");
    setDireccion("");
    setSueldo("");
    setUbicacion("");
    setId("");
    setEditar(false);
  }

    const editarTrabajo = (val) => {
      setEditar(true);
      setTitulo(val.titulo);
      setFechaDesde(val.fecha_desde);
      setFechaHasta(val.fecha_hasta);
      setDescripcion(val.descripcion);
      setDireccion(val.direccion);
      setSueldo(val.sueldo);
      setUbicacion(val.ubicacion);
      setId(val.id);
    }

    const getTrabajos = () => {
       Axios.get("http://localhost:8888/jobs").then((response) => {
        const jsonData = response.data;
        setTrabajosList(jsonData);
       })
       .catch((error) => {
        console.error("Error al obtener empresas:", error);
      });
    }

    useEffect(() => {
      getTrabajos(); // Se llamará una vez después del montaje del componente
    }, []);
  return (
    <div className="container mx-auto">
  <div className="bg-white rounded-lg shadow-md p-8">
    <h1 className="text-2xl font-bold text-center mb-6">
      GESTIÓN DE TRABAJOS
    </h1>
    <div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Titulo:</label>
      <input
          type="text"
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
          value={titulo}
          placeholder="Ingrese un titulo"
          aria-label="titulo"
          aria-describedby="basic-addon1"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
        />
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Fecha Desde:</label>
      <input
          type="date"
          value={fecha_desde}
          onChange={(event) => {
            setFechaDesde(event.target.value);
          }}
          placeholder="Ingrese la Razón Social"
          aria-label="Razón Social"
          aria-describedby="basic-addon1"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Fecha Hasta:</label>
      <input
          type="date"
          value={fecha_hasta}
          onChange={(event) => {
            setFechaHasta(event.target.value);
          }}
          placeholder="Ingrese la Razón Social"
          aria-label="Razón Social"
          aria-describedby="basic-addon1"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
        />
      </div>
      <div className="mb-4">        
      <label className="block text-sm font-medium text-gray-700">Descripcion:</label>
        <textarea
          type="textarea"
          value={descripcion}
          onChange={(event) => {
            setDescripcion(event.target.value);
          }}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
          placeholder="Ingrese un Descripcion"
          aria-label="Descripcion"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
      
      </div>
      <div className="input-group mb-3">
      <label className="block text-sm font-medium text-gray-700">Sueldo:</label>
        <input
          type="text"
          value={sueldo}
          onChange={(event) => {
            setSueldo(event.target.value);
          }}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
          placeholder="Ingrese un Teléfono"
          aria-label="Teléfono"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
      <label className="block text-sm font-medium text-gray-700">Ubicacion:</label>
        <input
          type="text"
          value={ubicacion}
          onChange={(event) => {
            setUbicacion(event.target.value);
          }}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
          placeholder="Ingrese ubicacion del puesto: "
          aria-label="ubicacion"
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
  <table className="w-full table-fixed border-collapse bg-white rounded-lg shadow-md mt-8">
  <thead>
    <tr>
      <th scope="col" className="border p-2 w-1/8">#</th>
      <th scope="col" className="border p-2 w-1/8">Titulo</th>
      <th scope="col" className="border p-2 w-1/8">Fecha desde</th>
      <th scope="col" className="border p-2 w-1/8">Fecha hasta</th>
      <th scope="col" className="border p-2 w-1/4">Descripcion</th>
      <th scope="col" className="border p-2 w-1/8">Sueldo</th>
      <th scope="col" className="border p-2 w-1/8">Ubicacion</th>
    </tr>
  </thead>
    <tbody>
       {trabajosList.map((val, key) => (
          <tr key={val.id}>
            <th>{val.id}</th>
            <td className="border p-2">{val.titulo}</td>
            <td className="border p-2">{val.fecha_desde}</td>
            <td className="border p-2">{val.fecha_hasta}</td>
            <td className="border p-2">{val.descripcion}</td>
            <td className="border p-2">{val.sueldo}</td>
            <td className="border p-2">{val.ubicacion}</td>
            <td className="border p-2">     
    <button
          type="button"
          onClick={() => editarTrabajo(val)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mx-1"
        >
          Editar
        </button>
    </td>
    <td className="border p-2">
    <button
          type="button"
          onClick={() => deleteTrabajo(val)}
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

export default AdminJobs;