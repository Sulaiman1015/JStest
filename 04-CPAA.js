// //Sync code
// function print(string){
//     console.log(string)
// }

// //Async code
// function print(string){
//     setTimeout(() =>{
//         console.log(string)
//     }, Math.floor(Math.random()*100) )
// }

// print('start')
// print('printing something')
// print('finish')

//Callback
// function print(string, callback){
//     setTimeout(() =>{
//         console.log(string)
//         callback()
//     }, Math.floor(Math.random()*100) )
// }
// print('start',() =>{
//     print('printing something',() => {
//         print('finish',() =>{ })
//     })
// })

//Promise
// function print(string){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log(string)
//             resolve()
//         }, Math.floor(Math.random()*100) )
//     })
// }
// print('start')
// .then(() => print('print something'))
// .then(() => print('finish'))

//Asyc Await
function print(string){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(string)
            resolve()
        }, Math.floor(Math.random()*100) )
    })
}
async function printAll() {
    await print('start')
    await print('print something')
    await print('finish')
}
printAll()