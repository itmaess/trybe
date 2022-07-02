// 1. Acesse o elemento elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta')
console.log(document.getElementById('elementoOndeVoceEsta'))

// 2. ??? Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'red'

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilho').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum eget ligula sit amet fringilla. Cras sed pulvinar dolor. Vestibulum iaculis vitae lectus sit amet semper. Quisque dapibus erat at risus tincidunt, sodales finibus urna blandit. Sed vulputate nulla quis ullamcorper mollis. Praesent iaculis est in aliquet pulvinar. Etiam vitae molestie lacus, vel faucibus ipsum. Maecenas suscipit sagittis vehicula. Vivamus sem massa, volutpat eget iaculis vel, aliquam vitae tortor. Mauris elementum erat id nisl egestas, ut commodo enim viverra. Aenean quam nisi, gravida vel imperdiet sit amet, porttitor vitae erat. Proin rutrum quam nec nisl aliquet tempus. Mauris pretium mauris a nisl tincidunt, in interdum dolor placerat."

// 4. Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').firstElementChild
console.log(document.getElementById('pai').firstElementChild)

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').previousElementSibling
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextSibling
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextElementSibling
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

// 8. Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').lastElementChild.previousElementSibling
console.log(document.getElementById('pai').lastElementChild.previousElementSibling)