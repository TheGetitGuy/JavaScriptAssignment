import {func0} from "./func0.js" 
import {func1} from "./func1.js"
import {func2} from "./func2.js"    
import {func3} from "./func3.js"    
import {func4} from "./func4.js"    
import {func5} from "./func5.js"    
import {func6} from "./func6.js"    
import {func7} from "./func7.js"    

const numberBox = document.forms[0][0]; 
const argBox = document.forms[0][1]; 
const functionForm = document.forms[0];
const appendingTarget = document.getElementById("append")
const functionArray =[
func0,
func1,
func2,
func3,
func4,
func5,
func6,
func7,
] 

window.onload=(()=>{ 
    numberBox.addEventListener("change",handleChange)    
    functionForm.addEventListener("submit",handleSubmit)    
    
    const funcPicker = document.getElementsByClassName("funcPicker")[1];
    
    
})
const handleChange = (event) =>
{
    if (event.target.value < 1)
    {
        event.target.value = 1
    } 
    else if (event.target.value > functionArray.length)
    {
        event.target.value = functionArray.length
    }
    
}
const handleSubmit = (event) => 
{
    event.preventDefault();
    printAnswer(numberBox.value);
}
const printAnswer = (functionNumber)=>{
    appendingTarget.innerHTML = "";
    const inputJson = (argBox.value)
    try{
        JSON.parse(inputJson);
    }   catch (e){
        appendingTarget.innerText= "Non Valid JSON"
        return
    }
    const parsedJson = (JSON.parse(inputJson))
    console.log(parsedJson)
    let arrayToAppend = functionArray[functionNumber - 1](...parsedJson);
    for (let i of arrayToAppend){
        const itemToAppend = document.createElement("div");
        itemToAppend.textContent = i
        appendingTarget.append(itemToAppend)
    }
}