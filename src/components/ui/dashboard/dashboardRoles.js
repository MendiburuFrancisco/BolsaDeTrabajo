import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { getRolesRequest, updateRolesRequest,deleteRolesRequest, createRolesRequest } from "../../../api/roles.request";
import Swal from "sweetalert2";
import { getRoles } from "@testing-library/react";

function AdminRoles() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editar, setEditar] = useState(false);
  const [rolesList, setRolesList] = useState([]);

  const add = () => {
    createRolesRequest({name,description})
      .then(() => {
        Swal.fire({
          title: "<strong>Registro exitoso!!!</strong>",
          html: `<i>El tipo de rol <strong>${name}</strong> fue registrado con éxito!!!</i>`,
          icon: "success",
          timer: 3000,
        });
        getRoles();
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: "<i>Ocurrió un error en el momento del registro. <br>Intente de nuevo más tarde</i>",
          timer: 3000,
        });
      });
    console.log(id, name, description);
  };

  const update = () => {
    if (!id) {
      console.error("ID de tipo de rol no disponible");
      return;
    }
    updateRolesRequest({id,name,description})
      .then(() => {
        getRoles();
        limpiarCampos();
        Swal.fire({
          title: "<strong>Actualización exitosa!!!</strong>",
          html: `<i>El tipo de rol con ID <strong>${id}</strong> fue actualizado con éxito!!!</i>`,
          icon: "success",
          timer: 3000,
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            JSON.parse(JSON.stringify(error)).message === "Network Error"
              ? "Intente más tarde"
              : JSON.parse(JSON.stringify(error)).message,
        });
      });
  };

  const deleteRoles = (id) => {
    Swal.fire({
      title: "Confirmar eliminación?",
      html: `<i>Realmente desea eliminar el rol con ID <strong>${id}</strong>?</i>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRolesRequest(id)
          .then(() => {
            getRoles();
            limpiarCampos();
            Swal.fire({
              icon: "success",
              title: `El rol de usuario con ID ${id} fue eliminado.`,
              showConfirmButton: false,
              timer: 2000,
            });
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se logró eliminar el rol!",
              footer:
                JSON.parse(JSON.stringify(error)).message === "Network Error"
                  ? "Intente más tarde"
                  : JSON.parse(JSON.stringify(error)).message,
            });
          });
      }
    });
  };

  const limpiarCampos = () => {
    setId("");
    setName("");
    setDescription("");
    setEditar(false);
  };

  const editarRoles = (val) => {
    setEditar(true);
    setId(val.id);
    setName(val.name);
    setDescription(val.description);
  };

  const getRoles = () => {
    getRolesRequest()
      .then((response) => {
        const jsonData = response.data.payload;
        setRolesList(jsonData);
      })
      .catch((error) => {
        console.error("Error al obtener roles:", error);
      });
  };

  useEffect(() => {
    getRoles(); // Se llamará una vez después del montaje del componente
  }, []);

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
      GESTIÓN DE ROLES DE USUARIOS
    </h1>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nombre:
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Ingrese el nombre"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Descripción:
            </label>
            <input
              type="text"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              placeholder="Ingrese la descripción"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-300 shadow-sm ring-1 focus:ring-2 focus:ring-inset"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          {editar ? (
            <div>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mr-2"
                onClick={update}
              >
                Actualizar
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={limpiarCampos}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              onClick={add}
            >
              Registrar
            </button>
          )}
        </div>
      </div>

      
      <table className="w-full bg-white rounded-lg shadow-md my-8">
        <thead>
          <tr className="mb-8">
            <th scope="col" className="border p-2 ">
              #
            </th>
            <th scope="col" className="border p-2">
              Nombre
            </th>
            <th scope="col" className="border p-2">
              Descripción
            </th>
            <th scope="col" className="border p-2"></th>
            <th scope="col" className="border p-2"></th>
          </tr>
        </thead>
        <tbody>
          {rolesList.map((val, key) => (
            <tr key={val.id}>
              <th>{val.id}</th>
              <td className="border p-2">{val.name}</td>
              <td className="border p-2">{val.description}</td>
              <td className="border p-2">
                <button
                  type="button"
                  onClick={() => editarRoles(val)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mx-1"
                >
                  Editar
                </button>
              </td>
              <td className="border p-2">
                <button
                  type="button"
                  onClick={() => deleteRoles(val.id)}
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

export default AdminRoles;