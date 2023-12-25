const text1 = document.getElementById('text')
const btn =document.getElementById('btn1')


let count = 0;
btn.addEventListener('click', () => {
    text1.innerText = "yeni mesaj"
    text1.innerText = count++

    prompt('deneme prompttu')
})
