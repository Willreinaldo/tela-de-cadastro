class Validator {
    constructor() {
    this.Validations = [
        'data-min-length'
    ]
}

//iniciar a validação de todos os campos
validate(form){

    let inputs = form.getElementsByTagName('input');
//transroma a HTML collection em array
    let inputsArray = [...inputs];
    //lops em todas as validações existentes
    inputsArray.forEach(function(input){
        for(let i = 0; this.validations.length > i; i++){
        //verifica se a validação atual existe no input
            if(input.getAttribute(this.validations[i]) != null){
    //limpando a string para virar um metodo
                let method = this.validations[i].replace('data-','').replace('-','')
               //valor do input
                let value = input.getAttribute(this.validations[i]);
            //invocar o metodo
            this[method](input,value);
            }
          }

        },this)

    }
//verifica se um input tem um número mínimo de caracteres
minlength(input,minvalue){
   let inputlength = input.value.length;
   let errorMesssage = `O campo precisa ter pelo menos ${minvalue} caracteres`
    if(inputlength < minvalue){
        this.printMessage(input,errorMesssage)
    } 
}
//metodo para imprimir mensagens de erro na tela
printMessage(input,msg){
let template = document.querySelector('.error-validation template').cloneNode(true);
template.textContent = msg;
let inputParent = input.parentNode;
template.classlist.remove('template');
inputParent.appendChild(template)

}
   


}



let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");
    
let validator = new Validator();
    
submit.addEventListener('click', function (e) {
        e.preventDefault();
    
        validator.validate(form);
    })
//verifica se um input tem um numero minimo de caracteres