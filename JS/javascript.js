const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.querySelector('#listaActividades');
let arrayActividades = [];

const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false   
    }
    arrayActividades.push(item);

    return item;
     
}
const GuardarDB = (actividad)=>{

    localStorage.setItem('nombres',JSON.stringify(arrayActividades)); 
    LeerDB();

}

const LeerDB = () =>{
    listaActividadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('nombres'));

    if(arrayActividades === null){
        arrayActividades = [];
    }else{
        arrayActividades.forEach(element =>{
           listaActividadesUI.innerHTML += `<div class="alert alert-primary" role="alert"><b>${element.actividad}</b> - ${element.estado} <span class="float-end"><i class="material-icons-outlined float-right">delete</i><i class="material-icons-outlined float-right">done</i></span></div></div>`
        })
    }

}

const eliminarDB = (actividad) =>{
    let indexArray;
    arrayActividades.forEach((elemento, index) =>{
        if (elemento.actividad === actividad){
            indexArray = index;
        }
        
    })

    arrayActividades.splice(indexArray,1)
    LeerDB();

}


formularioUI.addEventListener('submit', (e) =>{

    e.preventDefault();
    let actividadUI = document.querySelector ('#actividad').value;
     
    CrearItem(actividadUI);
    GuardarDB();

    formularioUI.reset();

})

document.addEventListener('DOMContentLoaded', LeerDB);

listaActividadesUI.addEventListener('click', (e) =>{

e.preventDefault();

if(e.target.innerHTML === 'done' ||e.target.innerHTML === 'delete'){
   const texto= e.composedPath[2].childNodes[0].innerHTML;
    if (e.target.innerHTML === 'delete'){
        eliminarDB(texto);
    }
    if (e.target.innerHTML === 'done'){

    }
}

});

 
