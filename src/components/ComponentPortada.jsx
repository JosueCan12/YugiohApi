import React from "react";

function ComponentPortada() {
  return (
    <div className="relative w-screen h-screen">
      <img
        src="/src/assets/fondoportada.jpg"
        alt=""
        className="w-screen h-screen object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold uppercase flex-col">
        <div className="mb-4">
          <p>Nombre de la escuela: Universidad Tecnologica Metropolitana</p>
        </div>
        <div className="mt-4 mb-4">
          <p>Asignatura: Aplicaciones web para industria 14.0</p>
        </div>
        <div className="mt-4 mb-4">
          <p>Nombre de la maestra: ISC. Ruth Martínez Domínguez</p>
        </div>
        <div className="mt-4 mb-4">
          <p>Nombre del Alumno: Josue Emmanuel Calam Can </p>
        </div>
        <div className="mt-4 mb-4">
          <p>Cuatrimestre: 5</p>
        </div>
        <div className="mt-4 mb-4">
          <p>Grado y Grupo: 5-A</p>
        </div>
      </div>
    </div>
  );
}

export default ComponentPortada;
