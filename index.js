const object = {
    name : "jesata naam",
    roll : 14 ,
    batch : "bhala batch",
    functionOne : () => {
        console.log("function call")
    }
}
const array = [ { name : "jesata naam",
    roll : 14 ,
    batch : "bhala batch",
    functionOne : () => {
        console.log("function call")
    }} , { name : "jesata naam",
        roll : 14 ,
        batch : "bhala batch",
        functionOne : () => {
            console.log("function call")
        }}]
        console.log(array[0])
object.functionOne()
console.log(object)
const objectString = JSON.stringify(object)
console.log(objectString)
const objectParse = JSON.parse(objectString)
console.log(objectParse)

fetch("public.json")
.then(response => response.json() )
.then(data => dataFetching(data))

const dataFetching = (data) => {
const allData = data ;
const container = document.getElementById("container")
for(var i = 0 ; i < allData.length; i++){
    console.log(allData[i].id ,":", allData[i].title)
    const ul = document.createElement("ul")
    ul.innerHTML = `
    <li>id : ${allData[i].id}</li>
    <li> title : ${allData[i].title}</li>
    <li> body : ${allData[i].body}</li>
    `
    container.appendChild(ul)
    
}
}
