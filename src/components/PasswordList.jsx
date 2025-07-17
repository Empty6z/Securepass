export default function PasswordList({ cuentas, onDelete }) {
  return (
    <div className="lista">
      <h2>Mis cuentas</h2>
      {cuentas.length === 0 && <p>No hay cuentas registradas.</p>}
      <ul>
        {cuentas.map(c => (
          <li key={c.id}>
            <strong>{c.nombreServicio}</strong> ({c.usuario})  
            <span style={{color: c.nivelSeguridad === "Alta" ? "green" : c.nivelSeguridad === "Media" ? "orange" : "red"}}>
              {c.nivelSeguridad}
            </span>
            <button onClick={() => onDelete(c.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
