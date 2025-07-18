const productContainer = document.querySelector(".product-list")

if(productContainer){
    dispayProducts();
}

function dispayProducts(){
    products.forEach(product =>{
     const productCard = document.createElement("div");
     productCard.classList.add("product-card"); 
     productCard.innerHTML =`
     <div class="img-box">
        <img src="${product.colors[0].mainImage}"></img>
     </div>
    <h2 class="title">${product.title}</h2>
    <span class="price">${product.price}</span>
    `;
    productContainer.appendChild(productCard);

    const imgbox = productCard.querySelector(".img-box");
    imgbox.addEventListener("click", () => {  
        sessionStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "product-detail.html";
    });
    });
}