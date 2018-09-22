counter()

function pop(){
    alert("                                       Our Whatsapp Number\n                                               0322-#######")
}


function counter(){
    // var first=document.getElementById("alter").innerHTML;
    var array=JSON.parse(localStorage.getItem("favourite"));


    document.getElementById("alter").innerHTML=array.length
}