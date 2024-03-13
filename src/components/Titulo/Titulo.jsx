import "./Titulo.css";

function Titulo({ children }) {
  return (
    <div className="titulo_container">
      {children}
    </div>
  );
}

export default Titulo;