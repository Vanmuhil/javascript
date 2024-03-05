document.getElementById('click').addEventListener('click',async()=>
{
    var product=await fetch("https://fakestoreapi.com/products");
    var data=await product.json();
    var emptystr="";
    data.map((value)=>
    {
        emptystr +=`
        <div class="card"  style="width: 18rem;">
           <img src="`+value.image+`" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">`+value.title+`</h5>
               <h4 class="card-text">`+value.price+`</h4>
             </div>
</div>`
                                        
    });
    document.getElementById('content').innerHTML=emptystr;
});