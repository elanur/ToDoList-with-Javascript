let listDOM = document.querySelector("#list");
let TaskDOM = document.querySelector("#task");

/*******************Başlangıç Ekranı********************/
window.addEventListener('DOMContentLoaded',()=>{

    let myListArray=getArray();//LocalStorage'dan bilgileri al ve listele
    for(let i=0;i<myListArray.length;i++){
    let LiDOM= document.createElement('li');
    LiDOM.className='d-flex justify-content-between align-items-start';
    LiDOM.innerHTML = `<p>${myListArray[i]}</p> <span class="listRemove">sil</span>`;
    listDOM.appendChild(LiDOM);
        

    }

})



/********************* Yeni eleman ekleme *******************/
function newElement(){

    if(TaskDOM.value && TaskDOM.value.trim() )

    {
        /* d-flex justify-content-between align-items-start */
    let LiDOM= document.createElement('li');
    LiDOM.className='d-flex justify-content-between align-items-start';
    LiDOM.innerHTML = `<p>${TaskDOM.value}</p> <span class="listRemove">sil</span>`;
    listDOM.appendChild(LiDOM);
    let myListArray =getArray();
    myListArray.push(TaskDOM.value);
    localStorage.setItem("myListArray",JSON.stringify(myListArray));
    
    TaskDOM.value="";
    $('.success').toast("show")// Toast eklendi
    }

    else
    {
        $('.error.toast').toast("show") //toast eklendi
        console.log("Boş karakter girilemez")

    }
}
/********************Eleman Silme işlemi************/
listDOM.addEventListener('click',(e)=>
{
    if(e.target.classList.contains('listRemove')){
        e.target.parentElement.remove();
        let myListArray=getArray();
        let text=e.target.previousElementSibling.textContent;
        index=myListArray.indexOf(text);
        myListArray.splice(index,1);
        localStorage.setItem('myListArray',JSON.stringify(myListArray));
        console.log(index);

    }
    
})


/********************Check ekleme *********************/
listDOM.addEventListener('click',function(e){
    if(e.target.classList.contains('d-flex')){
        e.target.style.backgroundColor="#5BC0F8";
        e.target.style.textDecoration="line-through"
        e.target.classList.toggle("checked");//check eklendi
    }
})

/****************** local Storage*********/
function getArray()
{
    let myListArray;
    if(localStorage.getItem('myListArray')){
        myListArray=JSON.parse(localStorage.getItem('myListArray'));
    }else{
        myListArray=[];
    }
    return myListArray;
}









