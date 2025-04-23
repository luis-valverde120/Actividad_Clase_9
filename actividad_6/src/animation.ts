
// Animación de agregar el arreglo de numeros
export function add_number_animation(arr: number[]): void {
    const container = document.getElementById("number-list") as HTMLDivElement;
    container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos elementos

    arr.forEach((num, index) => {
        const numberElement = document.createElement("div");
        numberElement.className = "number-item"; // Clase para aplicar estilos
        numberElement.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s`; // Animación de entrada
        numberElement.id = `number-${index}`;
        numberElement.innerText = num.toString();
        container.appendChild(numberElement);
    });
}
