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
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center h-[82%]">
      <article className="w-full flex justify-center h-full items-center blackBlock">
        <div className="w-2/6 p-10 h-full rounded-md flex flex-col justify-center">
          <div className="border py-5 px-10 rounded-xl  h-[90%] contain shadow-2xl">
            <div className="h-[20%] flex justify-center items-center">
              <Logo className={`w-32`} />
            </div>
            <h1 className="text-2xl font-bold  h-[10%] text-white flex items-start">Registrarse</h1>
            <form onSubmit={onSubmit} className=" h-[50%]">
              <div className="h-[26%] ">
                <input
                  type="text"
                  {...register("username", { required: true })}
                  className="w-full bg-transparent border outline-none text-xl text-white px-4 py-2 rounded-md h-[70%] placeholder:text-white shadow-lg"
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
                  className="w-full bg-transparent border outline-none text-xl text-white px-4 py-2 rounded-md h-[70%] placeholder:text-white shadow-xl"
                  placeholder="Correo"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">El correo es requerido </p>
                )}
              </div>
              <div className="h-[26%] ">
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="w-full bg-transparent border outline-none text-xl text-white px-4 py-2 rounded-md h-[70%] placeholder:text-white shadow-lg"
                  placeholder="Contraseña"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">La contraseña es requerida</p>
                )}
              </div>

              <div className="h-[20%] flex items-center">
                <button className=" bg-red-700 px-3 w-full h-5/6 py-1 rounded-md hover:bg-red-800 text-xl text-white font-semibold" type="submit">Registrarse</button>
              </div>
            </form>
            <p className="flex gap-2 text-xl items-center justify-between h-[5%] text-white">
              No tienes una cuenta?<Link to="/register" className="text-red-700 hover:text-lime-600">Registrate</Link>
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
