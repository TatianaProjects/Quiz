const button = document.querySelector(".btn")
const answers = document.querySelectorAll (".answer")
const show = document.querySelector("#show");

button.addEventListener ("click", result)


function result(e) {
    e.preventDefault ();

    let points = 0;

   answers.forEach(answer => {
    if (answer.checked) points++;
   })
    
    show.textContent = `Your points: ${points} / 5`;

}
