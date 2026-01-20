const textoCompleto = `
bueno majo tuve que agregar esto porque son dos horas de diferencia que impide que te lo mande a las 12 aqui
y sean las 8 alla y lo leas, estuve pensando todo el dia en eso jaja,pero ya no alcanzo a programar algo mas pro que te
bloquee la hora, osea tengo una idea pero si falla y no te llega mi mensaje jajaja, asi que dije
programo un correo a maria.coque@mail.udp.cl pero sabes que nunca programe uno tampoco y si no lo ves Zzz
asi que confiare en que lo abriras en dos horas mas como corresponde, 

"Holaa Majo,espero no estes leyendo esto antes del 25 de Enero, la verdad lo dudo osea 
siento que si esperarias, pero quien sabe la curiosidad le gana a cualquiera
bueno la verdad ni siquiera se si esto deberia tener una estrutura.
busque pero la verdad como que no jaj osea sentia que si lo hacia con la estructura
que vi en internet le estaba escribiendo a un profe y era muy formal, aunque aqui siento
que te estoy escribiendo un mensaje por chat jaja, bueno Majo que decir, soy timido uwu , 
ya perdon ahora si es que jaja es que creo que nunca habia escrito una carta que no sea para mi profe
de ingles, osea jaja , por tareas quiero decir. buneo Majitoo que decirte, Primero que nada te Deseo un muy feliz
cumplea;nos*(mi teclado esta en ingles jaja perdon). Que Dios te bendiga mucho <3,
Que este nuevo año de vida esté lleno de Su presencia, y que puedas crecer aún más en tu amor por Él. Si tuviera que escribir la bonita
persona que eres como dice en Juan: si se escribiera cada una de ellas, creo que no cabrían en el mundo todos los libros que serían escritos
poeta soy uwu, jajaja pero literalemente escribo lo primero que se me viene a la mente, asi que esta carta no tiene orden logico, eres una
personita tan amable Majo, veo reflejado ese Amor que pone cristo en nuestros corazones en ti,tan atenta con los sentimientos de los demas,
aunque a veces me da ternura cuando te da rabia la actitud de personas jaja no en especifico pero situaciones especificas jaja, con un corazon 
siempre que quiere agradar y buscar a Dios. has sido de mucha bendicion para mi vida realmente y agrazdesco a Dios la bendicion de poder haberte conocido este a;o en la 
ultima reunion de GBU que asisti, cuando hicimos de emos caminando hasta que llego la luz del mundo, y nuestro mision es expandirla a los demas, y yo se que toda persona que te 
conoce puede conocer de Cristo a traves de ti, Se que Dios tiene grandes planes para ti, pensaba escribir top mejores momentos pero la verdad si me pongo a pensar y dejo de escribir
se me va a ir la motivacion jaj, pero a ver, sabes que me acorde que ese dia tenias un vestido de cebra que nunca mas vi que usaras jjsjsj que le paso ? 
----top 10 -----
10. no poder prender el fuego del asado jaja, fue bonito ese dia
9.Lana mirandome sentado en tu mesa mientras me tomaba un cafe(muy bueno, traeme cafe de tus tierras)
8.cuando ibamos tirando burbujas (5mil el jugetito o 4 ya no me acuerdo jsjs)
7.sabes que cuando se unio la se;ora a cantar ese dia con su Hija fue muy hermoso la verdad
6.bebes abortados asldk; que bonita pelicula (Mujer obligada a vivir en iran por su esposo sufre) adasdk no me esperaba que tu mami me pregunta que tal la pelicula
5.el dia de la piscina , nooo no me despedi, top 10 peores momentos jaja, pero ese dia en el corazon.
4.sabes que me acorde jaja que cuando fuimos al wendys, te tire el vaso de pepsi en la boca osea no tirar jaja si no te di de beber como dice la biblia porque
tuve sed y me diste de beber asi hice, as;ldk no pero fue porque se le habia ido el gas creo y te dije a ver prueba y tenias la bandeja en la mano y te puse el vaso en
la boca, que verguenza ahora que lo pieso en fin pollito con papas
3.La vigilia tambien, de mucha bendicioon,
2.La marcha de jesus (vamos al mcdonalds esta super cerca as;ldkas) hermoso dia tambien
1.Mi pelotazo en la cara, nunca lo olvidare (tu polera de fanta clave)
    <img src="img/foto2.jpg" alt="Recuerdo 2">

aunque unos de los mas bonito fue ir a la iglesia juntos , gracias por la invitacion <3. hay mas pero ahora que lo pienso el top ni siquiera es un top jaja ignora el orden,
Espero tengas un hermoso y bendecido junto a tu familia y tus seres queridos. Te quiero mucho Majo, Espero
Que sigamos caminando juntos en Cristo, animándonos unos a otros como dice su palabra,

Estas vestidad de Fortaleza y dignidad y puedes reirte sin miedo al futuro poque tu confianza esta en el
Proverbios 31:25

"El Señor te bendiga y te guarde;
el Señor haga resplandecer su rostro sobre ti y tenga de ti misericordia;
el Señor alce sobre ti su rostro y te dé paz."
Números 6:24-26

Te mando un Gran Abrazo, Se te quiero mucho ❤️❤️. 🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳

Atte un Chilenito de cristal 😛💌




`;

const textoElemento = document.getElementById("texto");
const musica = document.getElementById("musica");
const boton = document.getElementById("play");

let index = 0;

function escribirTexto() {
    if (index < textoCompleto.length) {
        textoElemento.textContent += textoCompleto.charAt(index);
        index++;
        setTimeout(escribirTexto, 150); // velocidad de escritura
    }
}

// Inicia escritura automáticamente
escribirTexto();

// Control de música
boton.addEventListener("click", () => {
    musica.play();
});

// ❤️
