function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white via-gray-100 to-black-200">
      <div className="text-center">
        <h1 className="text-4xl font-light">Cuidad</h1>
        <div className="w-20 mx-auto border-t border-black my-8"></div>
        <h1 className="text-9xl font-light mt-4">34°</h1>
        <h2 className="text-xl font-light mt-4">Descripción</h2>
        <div className="w-20 mx-auto border-t border-black my-8"></div>
        <form className="pt-8 text-center">
        <div className="relative mb-6">
          <label
            htmlFor="city"
            className="absolute -top-4 left-0 text-gray-800 text-sm"
          >
            Ingresa la ciudad
          </label>
          <input
            type="text"
            id="city"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg bg-transparent py-1 placeholder-gray-400"
            placeholder="Ingresa la ciudad"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Buscar
        </button>
      </form>
      </div>
    </div>
  );
}

export default App;
