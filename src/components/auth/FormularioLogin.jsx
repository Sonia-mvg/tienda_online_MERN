import { useNavigate } from 'react-router-dom';

export const FormularioLogin = () => {

  const navigate = useNavigate();

  const handleCancelarLogin = () => {
      navigate('/');
  };

  const handleEnviarLogin = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  }

  return (

    <div className="bg-white p-5 m-5 border-r-2 w-full max-w-screen-lg min-w-[100px] lg:min-w-[300px]">

      <h1 className="text-gray-600 font-bold mb-12 divide-y divide-gray-200">
        Ingreso
      </h1>

      <form className="max-w-md mx-auto min-w-[100px] lg:min-w-[300px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
          >
            Email o Usuario
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
          >
            Contraseña
          </label>
        </div>
        <button
          type="reset"
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:bg-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-1 mt-4"
          onClick={handleCancelarLogin}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:bg-cyan-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4"
          onClick={handleEnviarLogin}
        >
          Enviar
        </button>

      </form>

    </div>
  );

}
