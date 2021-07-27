const averageExams = (valuesExam) =>{
    //Cek apakah setiap elemen dari valuesExam adalah array:
    const cek = valuesExam.every(exam=>typeof(exam)==='number');
    //Melakukan penjumlahan kepada Array:
    const sumArray = valuesExam.reduve((acc,cu)=>acc+cu,0);
return sumArray/sumArray.length;
}

const isStudentPassExam = (valuesExam,name)=>{
    const minValues = 75;
    const avarage = avarageExams(valuesExam)
    if(avarage>minValues){
        console.log(`${name} is pass the exams`)
        return true;
    }else{
        console.log(`${name} is fail the exams`)
        return false
    }

}

export {averageExams, isStudentPassExam}

