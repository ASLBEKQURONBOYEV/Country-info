let count = document.getElementById('count')
let inp = document.getElementById('inp')

// function data (calback){
//     const getData = new XMLHttpRequest()
//     getData.addEventListener('readystatechange',()=>{
//         if(getData.readyState===4&& getData.status===200){
//             const jsonData = JSON.parse(getData.responseText)
//             jsonData.forEach(count=> {
//                 calback(count, undefined)
//             });
//         }
//         else if (getData.readyState===4){
//             calback('Xato', undefined)
//         }
//     })

//     getData.open('GET','https://restcountries.com/v3.1/all?fields=name,flags')
//     getData.send()
// }
// data((data,err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         count.innerHTML+=`<ul class="kolya">
//         <li><img src ="${data.flags.png}"></li>
//         <li>${data.name.common}</li>
//         </ul>`
//     }
// }
// )
fetch('https://restcountries.com/v3.1/all?fields=name,flags').then((data)=>{

    return data.json()
}).then((item)=>{
    item.forEach((counts)=>{
        
        count.innerHTML+=`<ul class="kolya">
<li><img src ="${counts.flags.png}"></li>
<li>${counts.name.common}</li>
</ul>`
})

}
).catch((err)=>{
    console.log(err);
}
)



inp.addEventListener('input',()=>{
    let val = inp.value.toLowerCase()
    console.log(val);
    const name = document.querySelectorAll('.kolya')
    name.forEach((item)=>{
        if(item.lastElementChild.textContent.toLowerCase().includes(val)){
            item.classList.remove('hidden')
        }else{
               item.classList.add('hidden')
        }
    })

    })