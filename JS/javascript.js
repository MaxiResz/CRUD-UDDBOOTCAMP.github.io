const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.querySelector('#listaActividades');
let arrayActividades = [];

const CrearItem = () => {
    let item = {
        actividad: '',
        estado: false 
    }
    arrayActividades.push(item);
    return item;
     
}
const GuardarDB = (actividad)=>{

    localStorage.setItem('nombres',JSON.stringify(arrayActividades)); 

}

const LeerDB = () =>{

}


formularioUI.addEventListener('submit', (e) =>{

    e.preventDefault();
    let actividadUI = document.querySelector ('#actividad').value;
    CrearItem(actividadUI)
    GuardarDB();

    formularioUI.reset();

})

document.addEventListener('DOMContentLoaded', LeerDB);

 
