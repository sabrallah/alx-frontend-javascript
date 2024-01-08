// 100-weak.js

// Crear una nueva instancia de WeakMap para rastrear el número de veces que se llama a cada endpoint
const weakMap = new WeakMap();

// Definir la función queryAPI que acepta un objeto endpoint como argumento
function queryAPI(endpoint) {
  // Obtener el recuento actual de llamadas para este endpoint del weakMap, o inicializar a 0 si no está presente
  let count = weakMap.get(endpoint) || 0;

  // Si el recuento de llamadas es 4 o más, lanzar un error
  if (count >= 4) {
    throw new Error('Endpoint load is high');
  }

  // Si no se ha alcanzado el límite, incrementar el contador y actualizar el weakMap
  weakMap.set(endpoint, count + 1);
}

// Exportar la función queryAPI y la instancia weakMap para que puedan ser utilizadas en otros módulos
export { queryAPI, weakMap };
