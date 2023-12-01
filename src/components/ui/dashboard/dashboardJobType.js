import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Axios from "axios";

import Swal from 'sweetalert2';

function AdminJobType() {
  const [id, setId] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editar, setEditar] = useState(false);
  const [tipoTrabajoList, setTipoTrabajoList] = useState([]);

  const add = () => {
    Axios.post("http://localhost:8888/jobtype", {
      tipo: tipo,
      descripcion: descripcion,
    }).then(() => {
      Swal.fire({
        title: "<strong>Registro exitoso!!!</strong>",
        html: `<i>El usuario con ID <strong>${id}</strong> fue registrado con éxito!!!</i>`,
        icon: 'success',
        timer: 3000
      });
    }).catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: "<i>Ocurrió un error en el momento del registro. <br>Intente de nuevo más tarde</i>",
        timer: 3000,
      });
    });
    console.log(id, tipo, descripcion);
  }

  const update = () => {
    if (!id) {
      console.error("ID del usuario no disponible");
      return;
    }

    Axios.put(`http://localhost:8888/jobtype/${id}`, {
      id: id,
      tipo: tipo,
      descripcion: descripcion,
    }).then(() => {
      getTipoTrabajo();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización exitosa!!!</strong>",
        html: `<i>El tipo de trabajo con ID <strong>${id}</strong> fue actualizado con éxito!!!</i>`,
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

  const deleteTipoTrabajo = () => {
    Swal.fire({
      title: 'Confirmar eliminación?',
      html: `<i>Realmente desea eliminar el tipo de trabajo con ID <strong>${id}</strong>?</i>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:8888/jobtype/${id}`).then(() => {
          getTipoTrabajo();
          limpiarCampos();
          Swal.fire({
            icon: 'success',
            title: `El tipo de trabajo con ID ${id} fue eliminado.`,
            showConfirmButton: false,
            timer: 2000
          });
        }).catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se logró eliminar el tipo de trabajo!',
            footer: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
          });
        });
      }
    });
  }

  const limpiarCampos = () => {
    setId("");
    setTipo("");
    setDescripcion("");
    setEditar(false);
  }

  const editarTipoTrabajo = (val) => {
    setEditar(true);
    setId(val.id);
    setTipo(val.tipo);
    setDescripcion(val.descripcion);
  }

  const getTipoTrabajo = () => {
    Axios.get("http://localhost:8888/jobtype")
      .then((response) => {
        const jsonData = response.data.payload;
        setTipoTrabajoList(jsonData);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  };

  useEffect(() => {
    getTipoTrabajo(); // Se llamará una vez después del montaje del componente
  }, []);


  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Resto del código... */}
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Tipo:</label>
            <input
              type="text"
              value={tipo}
              onChange={(event) => {
                setTipo(event.target.value);
              }}
              placeholder="Ingrese el tipo"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Descripción:</label>
            <input
              type="text"
              value={descripcion}
              onChange={(event) => {
                setDescripcion(event.target.value);
              }}
              placeholder="Ingrese la descripción"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
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
      <table className="w-full bg-white rounded-lg shadow-md mt-8">
        <thead>
          <tr className="mb-8">
            <th scope="col" className="border p-2 ">#</th>
            <th scope="col" className="border p-2">Tipo</th>
            <th scope="col" className="border p-2">Descripción</th>
            <th scope="col" className="border p-2"></th>
            <th scope="col" className="border p-2"></th>
          </tr>
        </thead>
        <tbody> 
  
{tipoTrabajoList.map((val, key) => (
 
  <tr key={val.id}>
   <th>{val.id}</th>
   <td className="border p-2">{val.tipo}</td>
    <td className="border p-2">{val.descripcion}</td>
  <td className="border p-2">     
    <button
          type="button"
          onClick={() => editarTipoTrabajo(val)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mx-1"
        >
          Editar
        </button>
    </td>
    <td className="border p-2">
    <button
          type="button"
          onClick={() => deleteTipoTrabajo(val)}
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

export default AdminJobType;
