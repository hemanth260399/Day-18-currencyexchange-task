async function foo(){
    try{
    let  data=await fetch("https://api.fxratesapi.com/historical")
    let res=await data.json()
    console.log(res.rates)
    let select_ele=document.querySelector("#nameid")
    for(let i in res.rates){
        select_ele.innerHTML+=`<option>${i}</option>`
    }
    document.querySelector("button").addEventListener("click",displayresult)
function displayresult(){
    var price=document.getElementById("price").value
    var currencytype=document.getElementById("nameid").value
    var total=price*res.rates[currencytype]
    var resultarea=document.querySelector(".resultarea")
    resultarea.innerHTML=`${total}  ${currencytype}`
}
}
catch(error){
    console.log(error)
}
}

foo()