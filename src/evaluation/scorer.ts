export function evaluateAnswers(answers:any){
    let score=0;
    Object.values(answers).forEach((value:any)=>{
        if(value && value.length>20){
            score+=20;
        }
    });
    return{
        score,
        passed:score>=70
    }
}
