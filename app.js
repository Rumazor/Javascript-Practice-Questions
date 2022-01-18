//using selectors inside the element

//Botones
const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    const btn = question.querySelector('.question-btn')
    
    btn.addEventListener('click', ()=>{
        questions.forEach((item)=>{
            item !== question ? item.classList.remove('show-text'): null
        })
        question.classList.toggle('show-text');
    })
})



// traversing the dom

//Botones
// const btns = document.querySelectorAll('.question-btn');


// btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })
