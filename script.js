async function getInfo() {
    const promise = await fetch('./data.json');
    const response = await promise.json(); 
    console.log(response);

    const btn = document.querySelectorAll(".planet-name");
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener("click",function(){
            document.querySelector('.ima').src = response.destinations[i].images.png;
            document.querySelector('.lkname').textContent = response.destinations[i].name;
            document.querySelector('.desc').textContent = response.destinations[i].description;
            document.getElementById('planetDistance').textContent = response.destinations[i].distance;
            document.getElementById('planetTravel').textContent = response.destinations[i].travel;
        })
        
    };
    const circle = document.querySelectorAll('.btn');
    for(let i=0;i<circle.length;i++){
        circle[i].addEventListener('click',function(){
            document.querySelector('.adam').src = response.crew[i].images.png;
            document.querySelector('.name').textContent = response.crew[i].name;
            document.querySelector('.role').textContent = response.crew[i].role;
            document.querySelector('.bio').textContent = response.crew[i].bio;
        });
    };

    const one = document.querySelectorAll('.one');
    for(let i=0;i<one.length;i++){
        one[i].addEventListener('click',function(){
            document.querySelector('.start').src = response.technology[i].images.portrait;
            document.querySelector('.namme').textContent = response.technology[i].name;
            document.querySelector('.sm').textContent = response.technology[i].description;
        });
    };
};

getInfo();  
