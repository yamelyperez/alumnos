// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs,
  doc, deleteDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCri5FQ_YjwdoD2HPBLQGIpS8ge3cdPaPc",
    authDomain: "mybd1-ee9d8.firebaseapp.com",
    projectId: "mybd1-ee9d8",
    storageBucket: "mybd1-ee9d8.firebasestorage.app",
    messagingSenderId: "405375264804",
    appId: "1:405375264804:web:8cf04dd520b35b9ff990b1",
    measurementId: "G-G9MSY7J3LH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const alumnosRef = collection(db, "alumnos");

let modoEdicion = false;
let idActual = "";

// Guardar o actualizar alumno
const form = document.getElementById("alumnoForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: form.nombre.value,
    apellido: parseInt(form.apellido.value),
    edad: form.edad.value,
    Numcontrol: form.numcontrol.value,
    materias: form.materias.value.split(",").map(m => m.trim()),
    calificacion: form.email.value,
    calificacionesadeudadas: form.calificacionesadeudadas.value
     };

  if (modoEdicion) {
    const alumnoDoc = doc(db, "alumnos", idActual);
    await updateDoc(alumnoDoc, datos);
    modoEdicion = false;
    idActual = "";
    form.querySelector("button").textContent = "Guardar";
  } else {
    await addDoc(alumnosRef, datos);
  }

  form.reset();
  mostrarAlumnos();
});

// Mostrar alumnos
async function mostrarAlumnos() {
  const contenedor = document.getElementById("listaAlumnos");
  contenedor.innerHTML = "";
  const snapshot = await getDocs(alumnosRef);

  snapshot.forEach((docu) => {
    const data = docu.data();
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${data.nombre}</h3>
      <p><strong>Edad:</strong> ${data.apellido}</p>
      <p><strong>Carrera:</strong> ${data.edad}</p>
      <p><strong>Materias:</strong> ${data.numcontrol.join(", ")}</p>
      <p><strong>Email:</strong> ${data.materias}</p>
      <p><strong>Teléfono:</strong> ${data.calificacion}</p>
      <button onclick="editarAlumno('${docu.id}', ${JSON.stringify(data).replace(/"/g, '&quot;')})">Editar</button>
      <button onclick="eliminarAlumno('${docu.id}')">Eliminar</button>
    `;
    contenedor.appendChild(div);
  });
}

// Eliminar
window.eliminarAlumno = async (id) => {
  await deleteDoc(doc(db, "alumnos", id));
  mostrarAlumnos();
};

// Editar
window.editarAlumno = (id, datos) => {
  form.nombre.value = datos.nombre;
  form.apellido.value = datos.edad;
  form.edad.value = datos.carrera;
  form.numcontrol.value = datos.materias.join(", ");
  form.califiaciones.value = datos.contacto.email;
  form.materiasadeudadas.value = datos.contacto.telefono;
  idActual = id;
  modoEdicion = true;
  form.querySelector("button").textContent = "Actualizar";
};

mostrarAlumnos();