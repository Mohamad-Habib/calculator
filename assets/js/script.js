document.title = "calculator"
const outputEl = document.querySelector(".output")
const buttons = document.querySelectorAll("button")
const clearBtn = document.querySelector(".clear")
const equalBtn = document.querySelector(".equal")
let deleteBtn = document.getElementById("delete")
 

buttons.forEach (button => {
    button.addEventListener('click', () => {
        if (button.textContent === "Clear"){
            outputEl.value = "";
        }else if (button.textContent === "="){
            try{
                outputEl.value = eval(outputEl.value)
            }catch (error) {
                outputEl.value = "Error";
            }
            

        }
        else {
            outputEl.value += button.textContent
        }

    })
})
clearBtn.addEventListener ('click', () =>{
    outputEl.value = ""
}
)
equalBtn.addEventListener ('click', () => {
   try{
    outputEl.value = eval(outputEl.value)
   } catch (error){
    outputEl.value = "Error";
   }
})
// deleteBtn.addEventListener('click', () => {
//     outputEl.value = outputEl.value.slice(0,-1);
// })