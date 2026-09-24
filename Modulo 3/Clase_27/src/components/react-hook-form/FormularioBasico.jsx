import { useForm } from "react-hook-form";

const FormularioBasico = () => {
  const {
    register,
    handleSubmit,
    //control,
    formState: { errors },
    watch,
  } = useForm({});

  const nombre = watch("nombre");

  /*
    const nombre = useWatch({
    control,
    name: "nombre",   
  });
 */
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre: </label>

        <input
          {...register("nombre", { required: "El nombre es obligatorio" })}
          placeholder="Ingresa tu nombre"
          type="text"
        />

        {errors.nombre && (
          <p style={{ color: "red" }}>{errors.nombre.message}</p>
        )}

        <p>Escribiendo: {nombre}</p>

        <br />
        <br />

        <div>
          <label>Email: </label>
          <input
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "El formato del email no es valido",
              },
            })}
            placeholder="Ingresa tu apellido"
            type="email"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioBasico;
