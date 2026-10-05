document.addEventListener("DOMContentLoaded", () => {
    const lm = document.getElementById("lastModified");
    if(lm) lm.textContent = `Last Modified: ${document.lastModified}`;
    
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    if(menuBtn) menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

    const visitMsg = document.getElementById("visitMessage");
    if(visitMsg){
        const lastVisit = localStorage.getItem("lastVisit");
        const now = Date.now();
        if(!lastVisit){
            visitMsg.textContent = "Welcome! First time here? Get 10% off!";
        } else {
            const days = Math.floor((now - lastVisit)/(1000*60*60*24));
            if(days < 1) visitMsg.textContent = "Back so soon! Awesome!";
            else if(days === 1) visitMsg.textContent = `You last visited 1 day ago. Welcome back!`;
            else visitMsg.textContent = `You last visited ${days} days ago. Welcome back!`;
        }
        localStorage.setItem("lastVisit", now);
    }

    const products = [
        {id:1, name:"Fresh Tomatoes", category:"vegetables", price:5000, unit:"kg"},
        {id:2, name:"Green Pepper", category:"vegetables", price:7000, unit:"kg"},
        {id:3, name:"Matoke", category:"vegetables", price:15000, unit:"bunch"},
        {id:4, name:"Mangoes", category:"fruits", price:10000, unit:"kg"},
        {id:5, name:"Pineapples", category:"fruits", price:6000, unit:"piece"},
        {id:6, name:"Watermelon", category:"fruits", price:12000, unit:"piece"}
    ];

    const productList = document.getElementById("productList");
    const cartCountEl = document.getElementById("cartCount");
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    if(cartCountEl) cartCountEl.textContent = cartCount;

    function displayProducts(filter="all"){
        if(!productList) return;
        productList.innerHTML = "";
        const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
        filtered.forEach(product => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p><strong>UGX ${product.price}</strong> per ${product.unit}</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(card);
        });
        productList.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", (e) => {
                cartCount++;
                localStorage.setItem("cartCount", cartCount);
                cartCountEl.textContent = cartCount;
                e.target.textContent = "Added ✓";
                setTimeout(()=> e.target.textContent = "Add to Cart", 1000);
            });
        });
    }

    if(productList){
        displayProducts();
        document.querySelectorAll(".filter-btns button").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".filter-btns button").forEach(b=>b.classList.remove("active-filter"));
                btn.classList.add("active-filter");
                displayProducts(btn.dataset.filter);
            });
        });
    }

    const form = document.getElementById("orderForm");
    const formMsg = document.getElementById("formMessage");
    if(form){
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const name = data.get("name");
            const location = data.get("location");
            if(!name || !location){
                formMsg.textContent = "Please fill all fields.";
                formMsg.style.color = "red";
            } else {
                const orders = JSON.parse(localStorage.getItem("orders")) || [];
                orders.push({name, location, date: new Date().toISOString()});
                localStorage.setItem("orders", JSON.stringify(orders));
                formMsg.textContent = `Thank you ${name}! Your order for ${location} received. We will call you soon.`;
                formMsg.style.color = "green";
                form.reset();
            }
        });
    }
});
