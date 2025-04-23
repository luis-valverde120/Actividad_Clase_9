/**
 * Función principal de Merge Sort.
 * Divide el arreglo en mitades recursivamente y luego las combina en orden.
 * @param array - El arreglo de números a ordenar.
 * @returns Un nuevo arreglo ordenado.
 */
export function mergeSort(array: number[]): number[] {
  // Caso base: si el arreglo tiene 1 o 0 elementos, ya está ordenado.
  if (array.length <= 1) {
    return array;
  }

  // Encontrar el punto medio del arreglo.
  const middleIndex = Math.floor(array.length / 2);

  // Dividir el arreglo en dos mitades: izquierda y derecha.
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  // Llamar recursivamente a mergeSort en ambas mitades.
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Combinar las dos mitades ordenadas.
  return merge(sortedLeft, sortedRight);
}

/**
 * Función auxiliar para combinar dos arreglos ordenados en uno solo.
 * @param leftArray - El arreglo izquierdo (ordenado).
 * @param rightArray - El arreglo derecho (ordenado).
 * @returns Un nuevo arreglo combinado y ordenado.
 */
function merge(leftArray: number[], rightArray: number[]): number[] {
  const mergedArray: number[] = [];
  let leftIndex = 0; // Índice actual del arreglo izquierdo.
  let rightIndex = 0; // Índice actual del arreglo derecho.

  // Comparar elementos de ambos arreglos y agregarlos en orden al arreglo combinado.
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++; // Avanzar en el arreglo izquierdo.
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++; // Avanzar en el arreglo derecho.
    }
  }

  // Agregar los elementos restantes del arreglo izquierdo (si los hay).
  while (leftIndex < leftArray.length) {
    mergedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  // Agregar los elementos restantes del arreglo derecho (si los hay).
  while (rightIndex < rightArray.length) {
    mergedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}