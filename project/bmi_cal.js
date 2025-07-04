const form = document.querySelector('form')

form.addEventListener('submit',function(chai){
    chai.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results') 
    // setTimeout(() => {
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight`;
    }
    else {
        const bmi = (weight / (height*height)/10000).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            result.innerHTML = `Under Weight`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `Normal Weight`
        }
        else{
            result.innerHTML = `Over Weight`
        }
        
    }
    // }, 2000); 
});