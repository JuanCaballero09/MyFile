var inputId = document.getElementById('id');
var button = document.getElementById('button');

button.addEventListener('click', function(){
    var id = inputId.value

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => {
        var user = document.querySelector("body > main > table > tbody > tr:nth-child(1) > td:nth-child(2)");
        var ids = document.querySelector("body > main > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        var title = document.querySelector("body > main > table > tbody > tr:nth-child(3) > td:nth-child(2)");
        var completed = document.querySelector("body > main > table > tbody > tr:nth-child(4) > td:nth-child(2)");
        
        if (id <= 200){
            user.innerHTML = json.userId;
            ids.innerHTML = json.id;
            title.innerHTML = json.title;
            completed.innerHTML = json.completed;
        }else{
            user.innerHTML = 'Error: No se econtraron datos';
            ids.innerHTML = 'Error: No se econtraron datos';
            title.innerHTML = 'Error: No se econtraron datos';
            completed.innerHTML = 'Error: No se econtraron datos';
        }

    })
})