// SIMULADOR TIENDA DE ARTICULOS MUSICALES- Pedales



//  A realizar

// Aplicar funciones para simplificar el codigo
// Ocupar tolowerCase
// triple===
// utilizar funcion constructora



// Formulario de ingreso 

const formulario = document.getElementById("formulario")
const inputMail = document.getElementById("inputNombre")
const inputContraseña = document.getElementById("inputPassword")
const btn = document.getElementById("btnEnviar")


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)


    const userData = {
        nombre: inputMail.value,
        contraseña: inputContraseña.value,
    }
    console.log(userData)

    formulario.reset()


})



// Definicion de constantes
const RepeatSpectralV = 230000
const ChurchlostV = 200000
const tremolookV = 150000
const tunerV = 50000
const O240V = 100000
const compV = 65000








// Declaracion de variables
let tipo = ""
let seleccion = ""
let cantidad = ""








// Array de elementos
const contenedorProductos = document.getElementById("contenedor-productos")

const tipoSpedales = [{
        id: 1,
        nombre: "RepeatSpectral",
        tipo: "delay",
        color: "azul",
        valor: 230000,
        familia: "modulacion",
        cantidad: 2,

    }, {
        id: 2,
        nombre: "Churchlost",
        tipo: "reverb",
        color: "rojo",
        valor: 200000,
        familia: "modulacion",
        cantidad: 1



    }, {
        id: 3,
        nombre: "tremolook",
        tipo: "tremolo",
        color: "verde",
        valor: 150000,
        familia: "modulacion",
        cantidad: 5


    }, {
        id: 4,
        nombre: "t-uner",
        tipo: "afinador",
        color: "azul",
        valor: 50000,
        familia: "otros",
        cantidad: 4


    }, {
        id: 5,
        nombre: "a240",
        tipo: "overdrive",
        color: "celeste",
        valor: 100000,
        familia: "overdrive",
        cantidad: 3,

    }, {

        id: 6,
        nombre: "xerocomp",
        tipo: "compresor",
        color: "rojo",
        valor: 65000,
        familia: "otros",
        cantidad: 2,


    }


]


// let div2;


// variables
let botonMostrar = document.getElementById("mostrar")
let botonBorrar = document.getElementById("borrar")

// Funcion para muestra de disponibilidad 
const fmuestra = () => {

    for (const iterator of tipoSpedales) {
        div2 = document.createElement("div2")
        div2.innerHTML = `<h3 class="text-center"> ${iterator.nombre} <h3>
<h6 class="text-center">Disponibles: ${iterator.cantidad}<h6>
`
        document.body.appendChild(div2)
    }

}

// boton para activar 
botonMostrar.addEventListener("click", fmuestra)



// Transformar a cards-- array de elementos a traves de un for each
tipoSpedales.forEach((pedal) => {
    let column = document.createElement("div")
    column.className = "col-md-2 mt-2"

    column.nombre = `columna-${pedal.nombre}`
    column.innerHTML = `
<div class="card"> 
<div class="card-body">
<p class="card-text"> Nombre: <h4>${pedal.nombre}<h4><p>
<p class="card-text"> Precio: <b>${pedal.valor}<p>
<p class="card-text"> Tipo: <b>${pedal.tipo} <p>
<p class="card-text"> Color: <b>${pedal.color}<p>

<div>
<div> 



`

    contenedorProductos.append(column)
})













// boton que activa la compra

let boton1 = document.getElementById("boton1")

boton1.addEventListener("click", () => {



    alert("Bienvenido a libra Pedales")
    while (seleccion !== 0) {

        seleccion = parseInt(prompt("Qué tipo de pedal está buscando? Ingrese el numero de la opcion o ingrese un 0 para salir\n1 Modulaciones \n2 Overdrive \n3 Otros"))

        // switch menu inicial
        switch (seleccion) {

            case 1:
                // FILTRO FAMILIA
                const filtro1 = tipoSpedales.filter(t => t.familia == "modulacion");
                console.log(filtro1);
                let tipoMod = parseInt(prompt("¿Qué tipo de modulación busca? \n1-Reverb \n2-Delay\n3-Tremolo"))



                if (tipoMod == 1) {
                    const filtroRev = tipoSpedales.find(r => r.tipo == "reverb")

                    // FILTRO TIPO
                    console.log(filtroRev);
                    alert("\nChurch-lost Disponible-" + "su precio es de " + ChurchlostV + "$");


                    let seleccionf = prompt("¿Desea comprarlo?, Ingrese un si para continuar con la compra")

                    if (seleccionf == "si" || seleccionf == "SI") {


                        cantidad = parseInt(prompt("Ingrese la cantidad"))


                        let cupon = prompt("Ingrese su cupon de descuento, si no lo tiene ingrese un no.")
                        if (cupon === "veinteoff") {

                            descuento20(ChurchlostV, cantidad)
                        } else if (cupon === "cuarentaoff") {

                            descuento40(ChurchlostV, cantidad)


                        } else {
                            precio(ChurchlostV, cantidad)
                        }



                        // buscar como se imprime el nombre del elemento
                    } else {
                        alert("Será para la proxima")
                    }

                } else if (tipoMod === 2) {


                    // FILTRO TIPO
                    const filtroDel = tipoSpedales.find(d => d.tipo == "delay")
                    console.log(filtroDel);
                    alert("\nRepeat Spectral disponible-" + "su valor es de " + RepeatSpectralV + "$");
                    let seleccionf = prompt("¿Desea comprarlo?,ingrese un si para continuar")

                    if (seleccionf === "si" || seleccionf === "SI") {


                        cantidad = parseInt(prompt("Ingrese la cantidad"));


                        let cupon = prompt("Ingrese su cupon de descuento, si no lo tiene ingrese un no.")
                        if (cupon === "veinteoff") {

                            descuento20(RepeatSpectralV, cantidad)
                        } else if (cupon === "cuarentaoff") {

                            descuento40(RepeatSpectralV, cantidad)


                        } else {
                            precio(RepeatSpectralV, cantidad)
                        }



                        // buscar como se pone el nombre del elemento
                    } else {
                        alert("Será para la proxima")
                    }









                } else if (tipoMod == 3) {

                    const filtroTrem = tipoSpedales.find(t => t.tipo == "tremolo")
                    console.log(filtroTrem);
                    alert("\nTremo-look disponible-" + "su valor es de " + tremolookV + "$");
                    let seleccionf = prompt("¿desea comprarlo?, Ingrese un si para continuar")

                    if (seleccionf == "si" || seleccionf == "SI") {


                        cantidad = parseInt(prompt("Ingrese la cantidad"));


                        let cupon = prompt("Ingrese su cupon de descuento, si no lo tiene ingrese un no.")
                        if (cupon === "veinteoff") {

                            descuento20(tremolookV, cantidad)
                        } else if (cupon === "cuarentaoff") {

                            descuento40(tremolookV, cantidad)


                        } else {
                            precio(tremolookV, cantidad)
                        }



                        // buscar como se pone el nombre del elemento
                    } else {
                        alert("Será para la proxima")
                    }





                }


                break;

            case 2:
                const filtroOV = tipoSpedales.find(o => o.tipo == "overdrive")
                console.log(filtroOV);
                alert("\n O240 Disponible- " + " su valor es de " + O240V)

                let seleccionf = prompt("¿Desea comprarlo?, Ingrese un si para continuar")

                if (seleccionf == "si") {


                    cantidad = parseInt(prompt("Ingrese la cantidad"));


                    let cupon = prompt("Ingrese su cupon de descuento, si no lo tiene ingrese un no.")
                    if (cupon === "veinteoff") {

                        descuento20(O240V, cantidad)
                    } else if (cupon === "cuarentaoff") {

                        descuento40(O240V, cantidad)


                    } else {
                        precio(O240V, cantidad)
                    }



                    // buscar como se pone el nombre del elemento
                } else {
                    alert("Será para la proxima")
                }



                break;

            case 3:

                const filtro3 = tipoSpedales.filter(t => t.familia == "otros")
                console.log(filtro3);

                let tipoOtros = parseInt(prompt(" Accesorios \n1-Afinador \n2-Compresor"))
                if (tipoOtros == 1) {


                    const filtroAf = tipoSpedales.find(a => a.tipo == "afinador")
                    console.log(filtroAf);
                    alert("\nT-unner Disponible" + "su precio es de " + tunerV + "$");


                    let seleccionf = prompt("¿Desea comprarlo?, ingrese un si para continuar")

                    if (seleccionf === "si") {




                        cantidad = parseInt(prompt("Ingrese la cantidad"));


                        let cupon = prompt("Ingrese su cupon de descuento, si no lo tiene ingrese un no.")
                        if (cupon === "veinteoff") {

                            descuento20(tunerV, cantidad)
                        } else if (cupon === "cuarentaoff") {

                            descuento40(tunerV, cantidad)


                        } else {
                            precio(tunerV, cantidad)
                        }



                        // buscar como se pone el nombre del elemento
                    } else {
                        alert("Será para la proxima")
                    }








                } else if (tipoOtros == "2") {


                    const filtroCom = tipoSpedales.find(c => c.tipo == "afinador")
                    console.log(filtroCom);
                    alert("\n Xerocomp Disponible-" + "su precio es de " + compV + "$");


                    let seleccionf = prompt("¿Desea comprarlo?,ingrese un si para continuar")

                    if (seleccionf === "si") {




                        cantidad = parseInt(prompt("Ingrese la cantidad"));


                        let cupon = prompt("Ingrese su cupon de descuento, si no lo tiene ingrese un no.")
                        if (cupon === "veinteoff") {

                            descuento20(compV, cantidad)
                        } else if (cupon === "cuarentaoff") {

                            descuento40(compV, cantidad)


                        } else {
                            precio(compV, cantidad)
                        }





                        // buscar como se pone el nombre del elemento
                    } else {
                        alert("Será para la proxima")
                    }



                }











                break;

            default:
                alert("Ingrese una opción disponible, intente nuevamente")
                break;



        }


    }



    // FUNCION 20% DESCUENTO
    function descuento20(dato1, dato2) {

        alert("Cupon Ingresado con exito")

        let total = (dato1 * dato2);
        let des = (dato1 * dato2) * 0.20;
        let totalFin = (total - des)




        alert("Su valor final includio el 20% de descuesto es de " + totalFin)
    }

    // FUNCION 40% DE DESCUENTO
    function descuento40(dato1, dato2) {

        alert("Cupon Ingresado con exito")

        let total = (dato1 * dato2);
        let des = (dato1 * dato2) * 0.20;
        let totalFin = (total - des)




        alert("Su valor final includio el 40% de descuesto es de " + totalFin)
    }





    // FUNCION SIN DESCUENTO

    function precio(dato1, dato2) {

        let total = (dato1 * dato2)

        alert("tu valor final sin descuento es de " + total)
    }
})