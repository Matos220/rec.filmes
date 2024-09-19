let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background ("salmon");
  let  idade = campoIdade.value();
  let  gostaDeFantasia = campoFantasia.checked();
  let  gostaDeAventura = campoAventura.checked();
  let  recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Viagem ao centro da terra";
    } else {
      if (idade >= 11) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Indiana Jones";          
        } else{
         return "Os sem floresta";
        }
      } else {
        if (gostaDeFantasia) {
          return "Castelo Animado";
        } else {
          return "Toy Story";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "O menino e garca";
    } else {
      return "Ponyo";
    }
  }
}
