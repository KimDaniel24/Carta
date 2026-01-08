const textoCompleto = `
"Sed ut perspiciatis unde omnis iste nat
us error sit voluptatem accusantium doloremque l
audantium, totam rem aperiam, eaque ipsa quae a
b illo inventore veritatis et quasi architecto 
beatae vitae dicta sunt explicabo. Nemo enim ipsa
m voluptatem quia voluptas sit aspernatur aut odit
 aut fugit, sed quia consequuntur magni dolores eo
 s qui ratione voluptatem sequi nesciunt. Neque por
 ro quisquam est, qui dolorem ipsum quia dolor sit 
 amet, consectetur, adipisci velit, sed quia non nu
 mquam eius modi tempora incidunt ut labore et dolo
 re magnam aliquam quaerat voluptatem. Ut enim ad m
 inima veniam, quis nostrum exercitationem ullam 
 corporis suscipit laboriosam, nisi ut aliquid ex 
 ea commodi consequatur? Quis autem vel eum iure r
 eprehenderit qui in ea voluptate velit esse quam
  nihil molestiae consequatur, vel illum qui dolo
  rem eum fugiat quo voluptas nulla pariatur?"
  "Sed ut perspiciatis unde omnis iste nat
us error sit voluptatem accusantium doloremque l
audantium, totam rem aperiam, eaque ipsa quae a
b illo inventore veritatis et quasi architecto 
beatae vitae dicta sunt explicabo. Nemo enim ipsa
m voluptatem quia voluptas sit aspernatur aut odit
 aut fugit, sed quia consequuntur magni dolores eo
 s qui ratione voluptatem sequi nesciunt. Neque por
 ro quisquam est, qui dolorem ipsum quia dolor sit 
 amet, consectetur, adipisci velit, sed quia non nu
 mquam eius modi tempora incidunt ut labore et dolo
 re magnam aliquam quaerat voluptatem. Ut enim ad m
 inima veniam, quis nostrum exercitationem ullam 
 corporis suscipit laboriosam, nisi ut aliquid ex 
 ea commodi consequatur? Quis autem vel eum iure r
 eprehenderit qui in ea voluptate velit esse quam
  nihil molestiae consequatur, vel illum qui dolo
  rem eum fugiat quo voluptas nulla pariatur?"
  "Sed ut perspiciatis unde omnis iste nat
us error sit voluptatem accusantium doloremque l
audantium, totam rem aperiam, eaque ipsa quae a
b illo inventore veritatis et quasi architecto 
beatae vitae dicta sunt explicabo. Nemo enim ipsa
m voluptatem quia voluptas sit aspernatur aut odit
 aut fugit, sed quia consequuntur magni dolores eo
 s qui ratione voluptatem sequi nesciunt. Neque por
 ro quisquam est, qui dolorem ipsum quia dolor sit 
 amet, consectetur, adipisci velit, sed quia non nu
 mquam eius modi tempora incidunt ut labore et dolo
 re magnam aliquam quaerat voluptatem. Ut enim ad m
 inima veniam, quis nostrum exercitationem ullam 
 corporis suscipit laboriosam, nisi ut aliquid ex 
 ea commodi consequatur? Quis autem vel eum iure r
 eprehenderit qui in ea voluptate velit esse quam
  nihil molestiae consequatur, vel illum qui dolo
  rem eum fugiat quo voluptas nulla pariatur?"
`;

const textoElemento = document.getElementById("texto");
const musica = document.getElementById("musica");
const boton = document.getElementById("play");

let index = 0;

function escribirTexto() {
    if (index < textoCompleto.length) {
        textoElemento.textContent += textoCompleto.charAt(index);
        index++;
        setTimeout(escribirTexto, 1); // velocidad de escritura
    }
}

// Inicia escritura automáticamente
escribirTexto();

// Control de música
boton.addEventListener("click", () => {
    musica.play();
});

// ❤️