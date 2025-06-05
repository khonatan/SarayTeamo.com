const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const modal = document.getElementById('modal');
const confirmarSi = document.getElementById('confirmarSi');
const presentacion = document.getElementById('presentacion');
const hackeo = document.getElementById('hackeo');
const textoHackeo = document.getElementById('textoHackeo');
const progreso = document.getElementById('progreso');
const tarjeta = document.getElementById('tarjeta');
const razonesDiv = document.getElementById('razones');
const volver = document.getElementById('volver');
const musica = document.getElementById('musica');

btnSi.addEventListener('click', () => {
  modal.classList.remove('oculto');
});

btnNo.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;

  const scale = parseFloat(btnSi.style.transform?.replace('scale(', '')?.replace(')', '') || 1) + 0.05;
  btnSi.style.transform = `scale(${scale})`;
});

confirmarSi.addEventListener('click', () => {
  modal.classList.add('oculto');
  presentacion.classList.add('oculto');
  hackeo.classList.remove('oculto');

  const lineas = [
    "IP :92.28.211.234 N: 4.818851 Y: -75.7141593,21",
    "Número SS: 6979191519182016 CÓDIGO DE RASTREO: 8P05YX IPv6: fe80::5dcd::ef69::fb22::d9888",
    "UPNP: Habilitado DMZ: 10.112.42.15 MAC: 5A:75:3E:7E:00",
    "ISP: Ucom Unversal",
    "DNS: 8.8.8.8 ALT DNS: 1.1.1.8.1 DNS: SUFFIX: Dlink WAN: 100.23.10.15",
    "TIPO WAN: Soldado Nat GATEWAY: 192.168.0.1",
    "MASCARILLA SUBNET: 255.255.0.255",
    "UDP PUERTOS ABIERTOS: 8080 80",
    "TCP PUERTOS ABIERTOS: 443",
    "RUTA DEL VENDEDOR: ERICCSON VENDEDOR DE DISPOSITIVOS: WIN31-X TIPO DE CONEXIÓN: Ethernet",
    "ICMP HOPS:{ 192.168.01 192.168.1.1 100.73.43.4 host-132.12.32.167.ucom.com host-66.120.12.111.ucom.com 36.134.67.189 216.239.78.111 sof02s32-in-f14.1e100.net",
    "TOTAL HOPS: 8",
    "[HTTP] 192.168.3.1:80 => 92.28.211.234:80",
    "[HTTP] 192.168.3.1:443 => 92.28.211.234:443",
    "[UDP] 192.168.0.1:788 => 192.168.1.1:6657",
    "[TCP] 192.168.1.1:67891 => 92.28.211.234:345"
  ];

  let i = 0;
  const interval = setInterval(() => {
    textoHackeo.textContent += lineas[i] + '\n';
    progreso.style.width = `${(i + 1) / lineas.length * 100}%`;
    i++;
    if (i === lineas.length) {
      clearInterval(interval);
      setTimeout(() => {
        hackeo.classList.add('oculto');
        tarjeta.classList.remove('oculto');
        document.body.style.backgroundColor = '#ffd1dc';
        musica.play();
        mostrarRazones();
      }, 1000);
    }
  }, 1000);
});

function mostrarRazones() {
  const razones = [
      "1-te amo", "2-por que no amarte ?", "3-la paciencia y tiempo que invertiste en mi",
  "4-tu belleza", "5-tus labios", "6-tus ojos", "7-tu forma de ser", "8-tu cabello",
  "9-tus outfits", "10-tu forma de ver amar a los animales", "11-tu curiosidades",
  "12-tus debilidades", "13-tus fortalezas", "14-las metas que te propones",
  "15-tu forma de afrontar tus problemas", "16-tus gustos,amorosos/fetiches",
  "17-tu sonrisa", "18-la forma en q eres ordenada", "19-tus cejas", "20-tus pestañas",
  "21-tu ser completo", "22-tu voz", "23-tu me haces sentir vivo", "24-tu me haces sentir en casa",
  "25-tu me haces sentir seguro de mi mismo", "26-me valoras", "27-me respetas (a tu modo)",
  "28-tu forma de molestarme", "29-tu madurez", "30-eres mi premio", "31-eres mi tesoro",
  "32-me haces reír cuando te necesito", "33-eres más que mi mejor mi amiga y una hermana",
  "34-eres mi otra mitad (mi media puchaina)", "35-me haces sentir orgulloso de ti",
  "36-eres una inspiración a seguir", "37-me gusta copiarme de ti",
  "38-contigo no se acaba el amor y admiración", "39-contigo me pierdo en el tiempo",
  "40- me comprendes", "41-me escuchas", "42-me soportas", "43-me quieres bb muak (admítelo ya pendeja)",
  "44-tus sueños ahora serán mis sueños", "45-tus anhelos serán mis anhelos",
  "46-tus deseos ahora serán mis deseos", "47-tu sonrisa y motivo de felicidad ahora serán mis motivos",
  "48-tus metas serán mis metas", "49-me haces sentir completo", "50-tu voz es mi consuelo y guía",
  "51-tus ojos bonitos me dan paz", "52-a tu lado hay tranquilidad", "53- tus manos son tan hermosas",
  "54-eres un regalo de Dios", "55-tu eres una gran muestra de amor", "56-contigo quiero estar siempre",
  "57-a tu lado quiero vivir bien y sin preocupaciones", "58-aprendiste junto a mi",
  "59-y yo aprendí muchas cosas junto a ti", "60-tu forma de ser conmigo es pura",
  "61-buscas lo mejor para ambos", "62-tu cuidas de mi", "63-yo cuido de ti", "64-me viste cuando nadie me vio",
  "65-me demostraste cariño cuando nadie quiso", "66-me escuchaste cuando nadie lo hizo",
  "67-a tu lado no tengo miedo", "68-amo tu forma de querer la vida aunque aveces no esté de tu lado",
  "69-amo tu forma de ser", "70-amo lo cariñosa q puedes llegar a ser", "71-tu humor es el q amo y es mi favorito",
  "72-me hiciste mejor persona", "73-me haces reír", "74-tus pequeños detalles/indirectas",
  "75-tu paciencia hacia mi", "76-eres preciosa", "77-eres linda", "78-lo inteligente que eres",
  "79-siempre esforzándote en la vida", "80-tu me entiendes mejor q nadie", "81-la manera que me hablas",
  "82-la manera que eres con los bebés", "83- tu tiempo dedicado para nosotros",
  "84-las amanecida que nos dimos juntos", "85-tu lealtad", "86-tu amor por la ensalada",
  "87-tu amor por el agua", "88-tu amor por la bella", "89-tu amor por la Lily",
  "90-tu amor por Annie", "91-tu amor por Akira", "92-tu amor por canela", "93-tu amor por mia",
  "94-tu amor por mawin", "95-tu amor por yusei", "96-tu amor por mango", "97-tu amor por Milo",
  "98-tu amor por los más animales que tienes obviamente no me voy a olvidar de todo ese amor y cariño q le guardas a tu negro",
  "99-tu amor a la música", "100-eres única", "101-eres dulce", "102- eres ambiciosa",
  "103-juegas free fire y roblox conmigo y espero un día jugar l4d2 contigo", "104-tu lado deportista",
  "105-tu lado nerd", "106-tus apariciones por la noche (hot)", "107-me despiertas con un mensaje o yo a ti",
  "108-te miras hermosa al dormir", "109-tu narizita hermosa", "110-gracia por tu perdón",
  "111-gracias por tu compresión hacia mi", "112-cambiaste mi perspectiva de la vida",
  "113-me calmas en momento de angustia", "114-tu me dices todo", "115-eres honesta conmigo",
  "116-crecemos juntos día a día", "117-nuestras conversaciones profundas", "118-tus consejos",
  "119-amar el tiempo que pasamos juntos", "120-tu personalidad", "121-nunca me juzgas",
  "122-de vez en cuando dudas de mí pero ya no", "123-me enseñaste el cariño más sincero",
  "124-me tratas de la mejor manera", "125-la manera que te expresas", "126-tus pequeños  cambios por nosotros",
  "127-admiro como eres", "128-juntos superamos todo", "129-a tu lado siento que soy fuerte",
  "130-me das paz emocional", "131-eres bondadosa", "132-comoartes conmigo lo que quieres lograr",
  "133-te desahogas conmigo en momento que no puedes sola", "134-como reímos juntos",
  "135-tu manera de enojar conmigo", "136-tu valentía", "137-tu manera de pensar",
  "138-tu manera de consolar", "139-tu apoyo en días difíciles", "140-por ser mi escape del mundo",
  "141-tus lunares", "142-tu manera de ser feliz", "143-me dices cosas bonitas",
  "144-nunca dejas de sorprenderme", "145-tus respiros al dormir", "146-me gusta estar contigo",
  "147-la suavidad de tu piel", "148-tu curiosidad", "149-tu timidez", "150-por aceptarme",
  "151-por ayudarme", "152-por hacerme feliz", "153-por robarme el corazón", "154-por aguantar mis dramas",
  "155-por aguantar mis berrinches", "156-por quedarte a mi lado", "157-por que me enamoraste desde el día 1",
  "158-nunca te rindes", "159-no me guardas rencord", "160-el bullying que nos hacemos",
  "161-por creer en mi", "162-por ser tu misma", "163-eres auténtica", "164-eres autista",
  "165-eres trasparente", "166-sabes todo sobre mi", "167-amas lo q amo (ejem two feet)",
  "168-me das confianza", "169-nos tenemos cariñoso", "170-eres mi cielo", "171-eres mi luz",
  "172-eres mi estrella", "173-eres mi vida", "174-eres mi sol y luna", "175-siempre estás cuando te necesito",
  "176-tus fortalezas", "177-tus habilidades", "178-el respeto que tienes a ti misma",
  "179-te preocupas cuando me pasa algo", "180-me soportas por más tonto que sea",
  "181-cada momento sin ti te extraño más", "182-por ser mi niña berrinchuda",
  "183-por ser mi niña caprichosa", "184-me has enseñado a vivir", "185-se que quieres lo mejor para mí",
  "186-por que me apoyas en mis decisiones", "187-por que te gustan los gatos", "188-eres mi futura esposa",
  "189-por que me conquistaste", "190-contigo me siento invencible", "191-contigo soy más fuerte",
  "192-por dejarme entrar en tus pensamientos", "193-por dejarme entrar de a pasitos a tu corazón",
  "194-por que siemplemente te amo", "195-te adoro", "196-te deseo", "197-por que serás mi señora",
  "198-por que serás mi mujer", "199-oor que serás la madre de mis hij@s",
  "200-por que no me importa nadie más que tú Saray 🩷"
];


  razones.forEach((r, i) => {
    const p = document.createElement('p');
    p.textContent = `${i + 1}- ${r}`;
    razonesDiv.appendChild(p);
  });
}

razonesDiv.addEventListener('scroll', () => {
  const bottom = razonesDiv.scrollTop + razonesDiv.clientHeight >= razonesDiv.scrollHeight;
  if (bottom) {
    volver.classList.remove('oculto');
  }
});

volver.addEventListener('click', () => {
  tarjeta.classList.add('oculto');
  presentacion.classList.remove('oculto');
  document.body.style.backgroundColor = '#ffd1dc';
  musica.pause();
  musica.currentTime = 0;
});