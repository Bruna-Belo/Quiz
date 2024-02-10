const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em Javascript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console?",    
      respostas: [
        "logMessage();",
        "printMessage();",
        "console.log();"
      ],
      correta: 2
    },
    {
      pergunta: "Como se refere a um elemento HTML usando Javascript pelo seu ID?",
      respostas: [
        "getElementByID();",
        "selectElementByID();",
        "document.getElementById();"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em Javascript?",
      respostas: [
        "// This is a comment",
        "/* This is a comment */",
        "' This is a comment"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em Javascript?",
      respostas: [
        "=",
        "==",
        ":="
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em Javascript?",
      respostas: [
        "105",
        "15",
        "Erro"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em Javascript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o tipo de dado retornado pela função typeof em Javascript?",
      respostas: [
        "String",
        "Number",
        "String"
      ],    
      correta: 2
    },
    {
     pergunta: "Qual é a função usada para converter uma string em um número inteiro em Javascript?",
      respostas: [
        "parseInt()",
        "toInteger()",
        "convertToInt()"
      ],   
      correta: 0
    },
    {
    pergunta: "Qual é a maneira correta de comparar dois valores em Javascript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // Loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }  
      
      quizItem.querySelector('dl').appendChild(dt)
    } 
    
    
    quizItem.querySelector('dl dt').remove()
    
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }