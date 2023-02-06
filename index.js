var n = document.querySelector("#um")
var n2 = document.querySelector("#dois")
var n3 = document.querySelector("#tres")
var n4 = document.querySelector("#quatro")
var n5 = document.querySelector("#cinco")
var botao = document.querySelector(".botao")
var display = document.querySelector(".display")
var agradecimento = document.querySelector(".agradecimento")
var container = document.querySelector(".container")
var rate = 0;


n.addEventListener("click", (e)=>{
    if(!n2.classList.contains("selecionado") && !n3.classList.contains("selecionado") &&
    !n4.classList.contains("selecionado") && !n5.classList.contains("selecionado")
    ){
        e.target.classList.toggle("selecionado")
        rate = 1;
    }
})
n2.addEventListener("click", (e)=>{
    if(!n.classList.contains("selecionado") && !n3.classList.contains("selecionado") &&
    !n4.classList.contains("selecionado") && !n5.classList.contains("selecionado")
    ){
        e.target.classList.toggle("selecionado")
        rate = 2;
    }
})
n3.addEventListener("click", (e)=>{
    if(!n.classList.contains("selecionado") && !n2.classList.contains("selecionado") &&
    !n4.classList.contains("selecionado") && !n5.classList.contains("selecionado")
    ){
        e.target.classList.toggle("selecionado")
        rate = 3;
    }
})
n4.addEventListener("click", (e)=>{
    if(!n.classList.contains("selecionado") && !n2.classList.contains("selecionado") &&
    !n3.classList.contains("selecionado") && !n5.classList.contains("selecionado")
    ){
        e.target.classList.toggle("selecionado")
        rate = 4;
    }
})
n5.addEventListener("click", (e)=>{
    
    if(!n.classList.contains("selecionado") && !n2.classList.contains("selecionado") &&
    !n3.classList.contains("selecionado") && !n4.classList.contains("selecionado")
    ){
        e.target.classList.toggle("selecionado")
        rate = 5;
    }
    
})

botao.addEventListener("click", (e)=>{
    if(!n.classList.contains("selecionado") && !n2.classList.contains("selecionado") &&
    !n3.classList.contains("selecionado") && !n4.classList.contains("selecionado")
    && !n5.classList.contains("selecionado")
    ){
        
        console.log("Deu errado")
    }else{
        console.log("Deu certo")
        container.style.display = "none"
        agradecimento.style.display = "flex"
        display.innerHTML = `
        
        <div class="display">You selected out ${rate} of 5</div>
        
        `
    }
})

// PARTE DO AGRADEÇIMENTO

