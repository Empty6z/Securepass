import { useState, useEffect } from "react";
import AddPasswordForm from "./components/AddPasswordForm";
import PasswordList from "./components/PasswordList";
import BreachesFeed from "./components/BreachesFeed";

function App() {
  const [cuentas, setCuentas] = useState(() => {
    const saved = localStorage.getItem("cuentas");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
  }, [cuentas]);

  const agregarCuenta = (cuenta) => {
    setCuentas([...cuentas, { ...cuenta, id: Date.now() }]);
  };

  const eliminarCuenta = (id) => {
    setCuentas(cuentas.filter(c => c.id !== id));
  };

  return (
    <div className="container">
      <h1>SecurePass</h1>
      <AddPasswordForm onAdd={agregarCuenta} />
      <PasswordList cuentas={cuentas} onDelete={eliminarCuenta} />
      <BreachesFeed />
    </div>
  );
}

export default App;
