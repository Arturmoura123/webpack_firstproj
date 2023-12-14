export function createContactPage () {
    const contact_container = document.getElementById("content");
    contact_container.innerHTML = '';

    const header = document.createElement("header");
    header.innerHTML = "<h1>Os contactos do restaurante:"
    contact_container.appendChild(header)

    const main = document.createElement("main")
    
    const restaurantContactsDiv = document.createElement("div");
    restaurantContactsDiv.innerHTML = "<h2>Contacts:</h2>";

    const contact1 = document.createElement("p")
    contact1.innerHTML = "Artur Moura: 968270371"

    restaurantContactsDiv.appendChild(contact1)
    main.append(restaurantContactsDiv)


    const donorsContactsDiv = document.createElement("div");
    donorsContactsDiv.innerHTML = "<h2>Donors Contact:</h2>";

    const donorcontact1 = document.createElement("p");
    donorcontact1.innerHTML = "Soros";

    donorsContactsDiv.appendChild(donorcontact1);
    main.append(donorsContactsDiv)

    contact_container.appendChild(main)


}