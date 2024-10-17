import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementById("inputFiled");
const boto = document.getElementById("afegir");

const appSettings = {
    databaseURL: "https://lista-de-tareas-andreu-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "tareas")


boto.addEventListener("click", function(){
    push(tasks, input.value)
    alert("Afegir a la BD") 
})

