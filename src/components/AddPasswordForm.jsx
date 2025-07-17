import { useState } from "react";
import { calcularNivel } from "../utils/passwordStrength";

export default function AddPasswordForm({ onAdd }) {
  const [nombreServicio, setNombreServicio] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [notas, setNotas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nivelSeguridad = calcularNivel(contraseña);
    const nuevaCuenta = {
      nombreServicio,
      usuario,
      contraseña,
      nivelSeguridad,
      fechaRegistro: new Date().toISOString().split("T")[0],
      notas
    };
    onAdd(nuevaCuenta);
    setNombreServicio(""); setUsuario(""); setContraseña(""); setNotas("");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Agregar cuenta</h2>
      <input value={nombreServicio} onChange={e => setNombreServicio(e.target.value)} placeholder="Servicio" required />
      <input value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Usuario" required />
      <input value={contraseña} onChange={e => setContraseña(e.target.value)} placeholder="Contraseña" type="password" required />
      <textarea value={notas} onChange={e => setNotas(e.target.value)} placeholder="Notas"></textarea>
      <p>Nivel: {contraseña && calcularNivel(contraseña)}</p>
      <button type="submit">Guardar</button>
    </form>
  );
}
