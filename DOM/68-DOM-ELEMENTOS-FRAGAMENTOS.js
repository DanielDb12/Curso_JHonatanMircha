// creando elemento y fragmentos
//appenchild: crea un hijo en el elemento e
const $figure = document.createElement('figure'),
$img = document.createElement('img'),
$figcaption = document.createElement('figcaption'),
$figcaptionText = document.createTextNode('Animals'),
$cards = document.querySelector('.cards');
$figure2 = document.createElement('figure')



$img.setAttribute('src','https://placeimg.com/200/200/animals');
$img.setAttribute('alt','animals');
$figure.classList.add('card')

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)


$figure2.innerHTML = `
	<img src = "https://placeimg.com/200/200/people" alt="People">
	<figcaption>People</figcaption>
`;

$figure2.classList.add('card')
$cards.appendChild($figure2)

const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']
$ul = document.createElement('ul');

document.write("<h3> estaciones del año </h3> ");
document.body.appendChild($ul);

// segunda forma
estaciones.forEach( (el) => {
	const $li = document.createElement("li");
	$li.textContent = el;
	$ul.appendChild($li);

});

const continentes = ["Africa","America","Asia","Europa","Oceanía"],
$ul2 = document.createElement("ul");

document.write("<h3> Continentes del mundo </h3>")
document.body.appendChild($ul2)
$ul2.innerHTML = "";
continentes.forEach(el => ($ul2.innerHTML+=`<li> ${el} </li>`))

const meses = [
	"Enero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"

]

$ul3 = document.createElement("ul")
$fragment = document.createDocumentFragment()

meses.forEach((el) => {
	const $li = document.createElement('li');
	$li.textContent = el;
	$fragment.appendChild($li)
});

document.write('<h3> meses del añor </h3>')
$ul3.appendChild($fragment);
document.body.appendChild($ul3)
