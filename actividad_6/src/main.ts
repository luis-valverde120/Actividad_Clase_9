import './style.css'
import { setupCounter } from './counter.ts'
import { add_number_animation } from './animation.ts'
import { mergeSort } from './sort.ts'

// Obtener todos los elementos del DOM
function getItemsFromInput(input: string): number[] {
  console.log(input.split(',').map((item) => parseInt(item.trim(), 10)));
  return input.split(',').map((item) => parseInt(item.trim(), 10));
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Merge Sort</h1>
    <div class="card">
      <input type="text" id="input" placeholder="Enter numbers separated by commas" />
      <button id="sortButton">Sort</button>
    </div>
    <div id="container" class="container">
      <div class="number-list" id="number-list"></div>
      <!-- Aquí se agregarán los números -->
      <div class="number-list-split" id="number-list-split"></div>
    </div>
  </div>
`

// asignar el evento de getItemsFromInput al hacer click en sort
const SortButton = document.querySelector<HTMLButtonElement>('#sortButton')!;
SortButton.addEventListener('click', () => {
  const input = document.querySelector<HTMLInputElement>('#input')!;
  const numbers = getItemsFromInput(input.value);
  add_number_animation(numbers);
  // Llamar a la función de ordenamiento
  const sortedNumbers = mergeSort(numbers);
  // Mostrar los números ordenados en el contenedor
  

  // agregar un tiempo de espera de 1 segundo antes de mostrar los números ordenados
  setTimeout(() => {
    const sortedContainer = document.getElementById("number-list-split") as HTMLDivElement;
    sortedContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos elementos
    sortedNumbers.forEach((num: number, index: number) => {
      const numberElement = document.createElement("div");
      numberElement.className = "number-item"; // Clase para aplicar estilos
      numberElement.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s`; // Animación de entrada
      numberElement.id = `number-${index}`;
      numberElement.innerText = num.toString();
      sortedContainer.appendChild(numberElement);
    });
  }
  , 1000); // 1 segundo de espera
 
});

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
