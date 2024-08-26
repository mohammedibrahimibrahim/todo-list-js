const input =document.getElementById("text")
const button =document.getElementById("button")
const ul =document.getElementById("list")

button.addEventListener('click',()=>{
    if(input.value == ''){
        alert('enter the latters')
    }
    else{
        console.log(input.value)
        const li = document.createElement('li')
       li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i> `
       ul.appendChild(li)
       li.querySelector('.fa-trash').addEventListener('click', (event) => {
        ul.removeChild(li);
    });
    input.value = '';
    }
});

