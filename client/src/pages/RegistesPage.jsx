import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Logo";

function RegistesPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/usuarios");
  }, [isAuthenticated]);

  return (
    <div className="flex items-end justify-center h-full ">
      <article className="w-full flex justify-center h-full items-center blackBlock">
        <div className="w-2/6 h-full rounded-md flex flex-col justify-center">
          <div className="border 2xl:py-5 xl:py-3 px-10 rounded-xl  h-[90%] contain shadow-2xl">
            <div className="h-[20%] flex justify-center items-center">
              <Logo className={`2xl:w-32 w-24`} />
            </div>
            <h1 className="text-2xl font-bold  h-[10%] text-white flex items-start">Registrarse</h1>
            <form onSubmit={onSubmit} className=" h-[50%]">
              <div className="h-[26%] ">
                <input
                  type="text"
                  {...register("username", { required: true })}
                  className="w-full bg-transparent border outline-none text-xl text-white px-4 py-2 rounded-md 2xl:h-[70%] xl:h-[65%] placeholder:text-white shadow-lg"
                  placeholder="nombre de usuario"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">el nombre de usuario es requerida</p>
                )}
              </div>
              <div className="h-[26%]">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-transparent border outline-none text-xl text-white px-4 py-2 rounded-md 2xl:h-[70%] xl:h-[65%] placeholder:text-white shadow-xl"
                  placeholder="Correo"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm flex items-center">El correo es requerido </p>
                )}
              </div>
              <div className="h-[26%] ">
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="w-full bg-transparent border outline-none text-xl text-white px-4 py-2 rounded-md 2xl:h-[70%] xl:h-[65%] placeholder:text-white shadow-lg"
                  placeholder="Contraseña"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">La contraseña es requerida</p>
                )}
              </div>

              <div className="h-[20%] flex items-center">
                <button className=" bg-red-700 px-3 w-full h-full flex justify-center items-center py-1 rounded-md hover:bg-red-800 text-xl text-white font-semibold" type="submit">Registrarse</button>
              </div>
            </form>
            <p className="flex gap-2 text-xl items-center justify-between h-[5%] text-white">
              No tienes una cuenta?<Link to="/register" className="text-red-700 hover:text-red-800 font-bold">Registrate</Link>
            </p>
            <div className="h-[10%]">
              {RegisterErrors.map((error, i) => (
                <div className="text-red-500 " key={i}>
                  {error}
                </div>
              ))}
            </div>
          </div>

        </div>
      </article>

    </div>
  );
}

export default RegistesPage;
