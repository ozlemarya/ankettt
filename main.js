const correctAnswers=['E','E','E','E'];
const form=document.querySelector('.questions-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    const userAnsers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,];

    userAnsers.forEach((answer,index) =>{
    if(answer === correctAnswers[index])
    {
        score +=25; 
    }

    })

    //console.log(score);
    result.classList.remove('d-none');
   let puan=0;
   const bastir= setInterval(() => {
   result.querySelector('span').textContent = `${puan}%`;
   if(puan == score) {
    clearInterval(bastir);
   }
   else {
    puan++;
   }
    }, 20);

   
})
