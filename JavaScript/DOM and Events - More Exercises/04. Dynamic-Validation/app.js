function validate() {
    const inputElement = document.getElementById('email');
    inputElement.addEventListener('change', checkInput);
    function checkInput(e){
        const regex = /[a-z]+\@[a-z]+\.[a-z]+/g;
        if(!regex.test(e.target.value)){
           inputElement.classList.add('error');
        }
        else{
         if(inputElement.classList.contains('error')){
            inputElement.classList.remove('error');
         }
        }
    }
}