export function createRestaurantHomepage() {
    const the_big_container = document.getElementById("content");
    the_big_container.innerHTML = ""


    
    const header = document.createElement("header");
    header.innerHTML = "<h1>Este é o melhor restaurante do mundo </h1>";
    the_big_container.appendChild(header);

    const main = document.createElement("main");
    main.innerHTML = `
    <section class="restaurant-info">
        <img src="restaurant-image.jpg" alt="Restaurant Interior">
        <div>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>We take pride in serving delicious dishes made from fresh, local ingredients.</p>
        </div>
    </section>  
    `;

    the_big_container.appendChild(main);


    const footer = document.createElement("footer");
    footer.innerHTML = "<p>&copy; 2023 Restaurant Name. All rights reserved.</p>"
    the_big_container.appendChild(footer);
}