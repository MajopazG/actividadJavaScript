const productos = [
    {nombre: "harina", precio: 50},
    {nombre: "frijol", precio: 30},
    {nombre: "arroz", precio: 60},
    {nombre: "lentejas", precio: 90},
    {nombre: "galletas", precio: 10},
    {nombre: "cerveza", precio: 20},
    {nombre: "leche", precio: 80}
];
let carrito = []

let seleccion = prompt("hola desea comprar algun producto si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algun producto si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todoLosProductos = productos.map((productos)=>productos.nombre +
    " " + productos.precio + "$");
    alert(todoLosProductos.join(" - "));
}else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio=0
    
    if(producto == "harina" || producto == "frijol" || producto == "arroz" || producto == "lentejas"
    || producto == "galletas" || producto == "cerveza" || producto == "leche"){
        switch(producto){
            case "harina":
                precio = 50;
                break;
            case "frijol":
                precio = 30;
                break;
            case "arroz":
                precio = 60;
                break;
            case "lentejas":
                precio = 90;
                break;
            case "galletas":
                precio = 10;
                break;
            case "cerveza":
                precio = 20;
                break;   
            case "leche":
                precio = 80;
                break; 
            default:
                break;                
        }
    let unidades = parseInt(prompt("cuantos unidades quiere llevar"))  
    
    carrito.push({producto, unidades,precio})
    console.log(carrito)
    }else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando??")

    while(seleccion === "no"){
        alert("gracias por la compra!! hasta pronto")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades*carritoFinal.precio}`)
        })
    break;    
    }
}

const total = carrito.reduce((acc, el)=> acc + el.precio*el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)