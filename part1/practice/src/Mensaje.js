// fragment return, this don't render a div component
const Mensaje = (props) => {
  return (
    <>
      <h1>hola</h1>
      <h1 style={{background: props.bg}}>{props.msg}</h1>
    </>
  );
}

export default Mensaje;