document.querySelector('#button-jokes').addEventListener('click',function(e){
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload = function(e){
        let output = '';
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                })
            }
            else{
             output += '<li>Something\'s went wrong.</li>'
            }
        }
        else{
            output = '<li>Something\'s went wrong.</li>'
        }

        document.querySelector('#jokes-list').innerHTML = output;

    }
    xhr.send();


    e.preventDefault();
})