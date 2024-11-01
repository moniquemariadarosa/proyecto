    const itemCart = JSON.parse(localStorage.getItem('itemCard'));
    const list = document.getElementById("product-list");
    if (!itemCart){
        resume = document.getElementById("resume");
        resume.style.display = "none";
        list.innerHTML += `
            <div class="container">
                <div class="alert alert-danger text-center" role="alert">
                    <h4 class="alert-heading">Aún no tienes productos en el carrito.</h4>
                </div>
                <a href="categories.html"><button class="mt-3 py-3 px-auto border rounded border-0 fs-5" id="comCompra">Comenzar a comprar</button></a>
            </div>`;
        console.error ("No hay elementos en el local storage!")
    } else {
        const list = document.getElementById("product-list");
        console.log(itemCart);
        list.innerHTML += `
            <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-4">
                        <img src="${itemCart.image[0]}" alt="${itemCart.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${itemCart.name}</h4>
                            <h4>${itemCart.currency} ${itemCart.cost}</h4>
                        </div>
                        <p><i class="bi bi-trash"></i></p>
                        <p><i class="bi bi-heart"></i></p>
                        <small class="text-muted"></small>
                    </div>
                </div>
            </div>`;
}


document.getElementById("contCompra").addEventListener("click", function() {
    window.location.href = "categories.html";
});

document.getElementById("finCompra").addEventListener("click", function() {

});