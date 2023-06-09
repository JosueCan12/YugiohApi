import React from "react";

function Modal({ character, handleCloseModal }) {
  return (
    <div>
      <div className="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
        <div className="bg-[#0c0c0d] rounded-xl shadow-2xl  sm:w-11/12 mx-10">
          <div className=" px-6 py-8 mx-auto">
            <div className=" lg:flex lg:items-center  ">
              <img
                className="object-cover w-full lg:mx-6 lg:w-1/4 rounded-xl sm:text-center "
                src={character.card_images[0].image_url}
                style={{ width: "15rem" }}
              />
              <div className="mt-6 lg:mt-0 lg:mx-6 ">
                <p className="text-white text-2xl font-semibold md:text-3xl  pb-2">
                  Nombre: {character.name}
                </p>
                <div className="flex w-auto items-center py-5">
                  <p className=" font-semibold text-black  bg-yellow-500 rounded-md  py-1.5 px-1.5">
                    Tipo: {character.type}
                  </p>
                  <p className=" ml-5 font-semibold text-dark bg-yellow-500 py-1.5 px-1.5 rounded-md text-black ">
                    Raza: {character.race}
                  </p>
                  <p className=" ml-5 font-semibold text-dark bg-yellow-500 py-1.5 px-1.5 rounded-md text-black ">
                    Ataque: {character.atk}
                  </p>
                  <p className=" ml-5 font-semibold text-dark bg-yellow-500 py-1.5 px-1.5 rounded-md text-black ">
                    Atributo: {character.attribute}
                  </p>
                </div>
                <div className="w-auto items-center pb-5">
                  <div className="flex">
                    <p className=" font-semibold bg-yellow-500 py-2 px-2 text-black  rounded-lg">
                      Descripción: {character.desc}
                    </p>
                  </div>
                </div>

                <div className="flex w-auto items-center pb-5">
                  <p className=" font-semibold text-dark bg-yellow-500 text-black  rounded-md py-2 px-2">
                    Definitivo: {character.race}
                  </p>
                </div>
                <div className="flex w-auto items-center pb-5">
                  <p className=" font-semibold text-dark bg-yellow-500 text-black  py-2 px-2 rounded-md">
                    Arquetipo: {character.archetype}
                  </p>
                </div>
                <div className="flex w-auto items-center pb-5">
                  <p className=" font-semibold  text-dark bg-yellow-500 py-2 px-2 rounded-md text-black  ">
                    Juego de cartas: {character.card_sets[0].set_name}
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className=" font-semibold text-dark text-black  bg-yellow-500 py-2 px-2 rounded-md">
                    Precio: ${character.card_prices[0].amazon_price}
                  </p>
                </div>

                <div className="flex justify-end mt-6 text-white">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-sm bg-red-700 text-dark rounded-xl  transition-colors duration-150 ease-linear bordevibg-[#00a0b0]  focus:outline-none focus:ring-0 font-bold hover:bg-red-500 focus:bg-red-600 focus:text-indigo"
                  >
                    Salir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
