function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data))
}

function displayUser2(data){
    const ul =document.getElementById('user-list');
    for(const user of data){
        const li =document.createElement('li');
        li.innerText= user.name;
        ul.append(li);
    }
}