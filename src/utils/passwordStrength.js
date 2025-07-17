export function calcularNivel(contraseña) {
  let nivel = 0;
  if (contraseña.length >= 8) nivel++;
  if (/[A-Z]/.test(contraseña)) nivel++;
  if (/[0-9]/.test(contraseña)) nivel++;
  if (/[^A-Za-z0-9]/.test(contraseña)) nivel++;

  if (nivel <= 1) return "Débil";
  if (nivel === 2) return "Media";
  return "Alta";
}
