document.getElementById('button').addEventListener('click', loadtext)

function loadtext(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'sample.txt', true)
    xhr.onload = function(){
        if(this.status == 200){
            //console.log(this.responseText);
        }
    }
    //sends request
    xhr.send()
}