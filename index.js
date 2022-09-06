import {func0} from "./func0.js" 
import {func1} from "./func1.js"
import {func2} from "./func2.js"    
import {func3} from "./func3.js"    
import {func4} from "./func4.js"    
import {func5} from "./func5.js"    
import {func6} from "./func6.js"    
import {func7} from "./func7.js"    
import {func8} from "./func8.js"    
import {func9} from "./func9.js"    
import {func10} from "./func10.js"    
import {func11} from "./func11.js"    
import {func12} from "./func12.js"    
import {func13} from "./func13.js"    
import {func14} from "./func14.js"    
import {func15} from "./func15.js"    
import {func16} from "./func16.js"    
import {func17} from "./func17.js"    
import {func18} from "./func18.js"    
import {func19} from "./func19.js"    

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
func8,
func9,
func10,
func11,
func12,
func13,
func14,
func15,
func16,
func17,
func18,
func19,
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