function renderProperties(properties) {
	const section = document.querySelector(".properties-container");

	// Create card elements
	properties.forEach(property => {
		const card = document.createElement("div");
		card.className = "property-card";
		card.innerHTML = `
		<img src="${property.image}" alt="Property Image">
		<p>${property.price}</p>
		<p>${property.size} m²</p>
		<div class="rooms">
		<div class="bedroms"><p>${property.bedrooms} quartos</p></div>
		<div class="bathrooms"><p>${property.bathrooms} banheiros</p></div>
		</div>
		`;
		section.appendChild(card);
	});
}

	//fetch JSON file
	fetch("./assets/json/properties.json")
	.then(response => response.json())
	.then(properties => renderProperties(properties))
	.catch(error => console.error("Error fetching properties:", error));