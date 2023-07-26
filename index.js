 var pricedivp= document.querySelectorAll (".plus")
console.log(pricedivp)

var pricedivm= document.querySelectorAll (".minus")
console.log(pricedivm)





function increment (e) {
var clicked= e.target;
var div = clicked.parentElement;
var para= div.querySelectorAll("p")
var td = div. parentElement;
var tr = td.parentElement;
var ch = tr.children
console.log (ch)
up = ch[3].innerHTML
console.log (up)
price= ch[4].innerHTML
console.log (para)
nb= para[0].innerHTML
console.log (nb)

nb=parseInt(nb)
price = parseInt (price)
up=parseInt (up)

nb++
para[0].innerHTML=nb.toString()
price += up
console.log(typeof price)
ch[4].innerHTML= price.toString()
total()

}


for (var i=0; i<pricedivp.length; i++)
{
   pricedivp[i].addEventListener ("click",increment)
}

function decremment (e) {
    console.log ("clicked")
    var clicked= e.target;
    var div = clicked.parentElement;
    var para= div.querySelectorAll("p")
    var td = div. parentElement;
    var tr = td.parentElement;
    var ch = tr.children
    console.log (ch)
    up = ch[3].innerHTML
    console.log (up)
    price= ch[4].innerHTML
    console.log (para)
    nb= para[0].innerHTML
    console.log (nb)
    nb= parseInt(nb)
    price=parseInt (price)
    up= parseInt (up)
    if (nb>0) {
    nb--
    para[0].innerHTML=nb.toString()
    price -= up
    ch[4].innerHTML= price
    total ()
}
}
    
for (var j=0; j<pricedivm.length; j++)
    {
       pricedivm[j].addEventListener ("click",decremment)
}

function total() {
    var tt= document.querySelectorAll(".price")
    var total = document.getElementById ("total")
    console.log (total)
    var topay= 0
    for (k=0; k<tt.length ; k++) {
        var tot= Number(tt[k].innerHTML)
        topay += tot
        
    }
    console.log (topay)
    total.innerHTML= topay
}


var likebutn = document.querySelectorAll (".like")
console.log (likebutn)
for (var l=0; l<likebutn.length; l++)
    {
       likebutn[l].addEventListener ("click",like)
      
}
function like (e) {
    liked = e.target
    console.log (liked)
    var tolike = liked.parentElement
    console.log (tolike)
    if (tolike.style.color != "red" ) {
        tolike.style.color = "red"
    }
    else {
        tolike.style.color = "#808080"
    }
}



var trash = document.querySelectorAll (".delete")

function trashed (e) {
    trashedb= e.target
    divt= trashedb.parentElement.parentElement.parentElement.parentElement
    console.log (divt)
    divt.parentNode.removeChild(divt)
    total()
}

for (var m=0; m<trash.length; m++)
    {
       trash[m].addEventListener ("click",trashed)
}


