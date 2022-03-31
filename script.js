// Código comentado para fins de estudo.

const img = document.getElementById("img");
// Atribuo a imagem do semafóro à const "img".
const buttons = document.getElementById("buttons");
// Atribuo a div "buttons" (onde estão todos os 4 botões) à const "buttons".
let colorIndex = 0;
// Crio a let "colorIndex" (não pode ser uma constante, pois irá variar) e a atribuo o valor de zero. Ela será usada na função "changeColor".
let intervalId = null;
// Crio a let "intervalId" (não pode ser uma constante, pois irá variar) e a atribuo o valor nulo. Ela será usada no método "automatic" do objeto "turnOn".

const trafficLight = (event) => {
  stopAutomatic();
  // Antes de tudo, roda a função "stopAutomatic" que irá encerrar a execução do método "automatic" do objeto "turnOn".
  turnOn[event.target.id]();
  // Estou chamando os métodos do obejto "turnOn" de acordo com o id (definido no HTML) do target do evento disparado (do botão clicado).
};

const nextIndex = () => (colorIndex = colorIndex < 2 ? ++colorIndex : 0);
// Trata-se de um modo mais resumido de se fazer um if/else. Leia-se: se "colorIndex" é menor que 2 então a let "colorIndex" recebe mais 1, porém se "colorIndex" é maior que 2, então a let "colorIndex" receberá o valor 0.

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};
// A função "changeColor" é disparada pelo método "automatic" do objeto "turnOn" e ela está sofrendo ação do método "setInterval", de modo que está sempre sendo executada após 1000 milisegundos. Essa função cria o array "colors" que recebe as strings "red", "yellow" e "green". Após, é criado a constante "color" que recebe a string que está no index "colorIndex" (que se inicia definido em zero) do array "colors". Ex: color = colors[0] -> color = "red". Após, é executado o método do objeto "turnOn" correspondente ao valor da consatnte color. Ex: turnOn["red"]. Por fim, é executada a função "nextIndex" que será responsável por conferir se o index é menor que 2 e então chamar o próximo index ou, caso seja maior que 2, reinicia-lo a 0.

const stopAutomatic = () => {
  clearInterval(intervalId);
};
// A função "stopAutomatic" é chamada pela função "trafficLight" e é responsável por limpar o ID presente em "intervalId" (toda vez que o método "setInterval" é executado, é atribuido a ele um ID e esse é, por sua vez, armazenado na variável "intervalId"). Desse modo, é parada a execução do método "automatic" do objeto "turnOn".

const turnOn = {
  'red': () => img.src = "img/red.png",
  'yellow': () => img.src = "img/yellow.png",
  'green': () => img.src = "img/green.png",
  'automatic': () => intervalId = setInterval(changeColor, 1000)
};
// A constante "turnOn" recebe um objeto literal que possue quatro propriedades (associação entre nome e valor). Essas propriedades, por sua vez, estão recebendo como valor funções, ou seja métodos do objeto "turnOn". Essas funções realizam a troca da propriedade source da constante "img". Dito de outra forma, essas funções trocam a imagem do semáforo vista na tela.

buttons.addEventListener("click", trafficLight);
// Adiciono o evento "click" (quando alguém clicar o mouse) aos elementos da div "buttons". Quando esse evento for disparado, será executada a função trafficLight. Esses eventos estão sendo usados como parâmetros da função trafficLight e eles possuem diversas propiedades, dentra elas a propiedade "target" que é toda a tag HMTL do botão clicado e suas propiedades. Exemplo: cliquei no botão Red. Essa ação gerará um evento que possue a propriedade target como sendo a tag HTML desse botão. Nessa tag encontra-se a id "red" que será usada na função "trafficLight".
