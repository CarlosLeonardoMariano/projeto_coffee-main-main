let radioButtons = document.querySelectorAll('.radio-controls input') // Botões radio
let imagens = document.querySelectorAll('.imagens img') // Todas as imagens




let intervalo = 0;

function acao(){

    setInterval( ()=> {
    // Esconde a imagem atual
    imagens[intervalo].style.display = 'none';

    // Avança para a próxima imagem
    intervalo++

    // Volta ao início se passar da última imagem
        if(intervalo >= imagens.length){
            intervalo = 0;
        }
        
        // Mostra a próxima imagem
        imagens[intervalo].style.display = 'block';

    },3000) // Intervalo de 3 segundos
}

acao()

// RADIO
// Função para bolinha do radio acompanhar a imagem 1 PARTE
function showImage(index){
    imagens.forEach( (img,i)=> {
        img.style.display = i === index ? 'block' : 'none'
    });

        // Atualiza o botão radio correspondente
    radioButtons[index].checked = true;
}

    // 2 PARTE
    function start(){
        setInterval( ()=> {
            currentIndex = (currentIndex + 1) % imagens.length
            showImage(currentIndex)
        },3000);
    }

    radioButtons.forEach( (radio, index) => {
        radio.addEventListener('change', ()=> {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    start()




//==========================================================================================================================//
// FUNÇÕES PARA O CARROUSSEL DE IMAGENS PARTE 2


let radioButtons2 = document.querySelectorAll('.radio-controls1 input')
let imagens2 = document.querySelectorAll('.imagens1 img')

let current = 0
let parada = 0


function acao2(){
setInterval( ()=> {
    imagens2[parada].style.display = 'none';
        parada++
        if(parada >= imagens2.length){
            parada = 0;
        }
        imagens2[parada].style.display = 'block';

},3000)}

acao2()


function show(index) {
    imagens2.forEach( (img,i)=> {
        img.style.display = i === index ? 'block' : 'none'
    });
    radioButtons2[index].checked = true
}

 function iniciar(){
    setInterval( ()=>{
        current = (current + 1) % imagens2.length
        show(current)
    }, 3000);
 }


radioButtons2.forEach( (radio,index)=>{
    radio.addEventListener('change', ()=> {
        current = index;
        show(current);
    });
});

iniciar()







































    AOS.init();
