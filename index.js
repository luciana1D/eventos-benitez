const conteiner = document.querySelector("#contenedor");
const form = document.querySelector("#formulario")
const addBtn = document.querySelector("#btn-agregar");
const tareaIngresada = document.querySelector("#tarea");
const list = document.querySelector("#lista");
const usuario = document.querySelector("#user")
const input = document.querySelector("#name");
const btnIngresar = document.querySelector("#btn-ingresar");
const h2 = document.querySelector("#bienvenida");
const tareas = [];


btnIngresar.addEventListener("click", () => {
    const nombre = input.value;
    if (nombre != "") {
        conteiner.style.display = "block";
        user.style.display = "none";

        h2.innerText = `Hola ${nombre}`;
    }

})


addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const ingreso = tareaIngresada.value;
    tareas.push(ingreso);

    const li = document.createElement("li");
    li.className = ("list")

    const p = document.createElement("p");

    li.appendChild(eliminar());
    li.appendChild(p);
    list.appendChild(li);

    p.textContent = ingreso;

    form.reset();
});



function eliminar() {
    const botonEliminar = document.createElement("button");

    botonEliminar.textContent = "X"
    botonEliminar.className = ("btn-delete")

    botonEliminar.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        list.removeChild(item)
    });
    return botonEliminar;
}