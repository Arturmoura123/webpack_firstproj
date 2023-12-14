import _ from 'lodash';
import { createRestaurantHomepage } from './homepage.js'
import { createContactPage } from "./contact.js"



document.addEventListener('DOMContentLoaded', function () {

    createRestaurantHomepage();

    const contactButton = document.getElementById("contact");
    contactButton.addEventListener("click", () => createContactPage());

    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", () => createRestaurantHomepage())


});