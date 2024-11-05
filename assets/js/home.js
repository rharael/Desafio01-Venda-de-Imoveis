const modal = document.getElementById("property-modal");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-price");
const modalSize = document.getElementById("modal-size");
const modalBedrooms = document.getElementById("modal-bedrooms");
const modalBathrooms = document.getElementById("modal-bathrooms");
const closeButton = document.querySelector(".close-button");

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

		// Event to open modal
		card.addEventListener("click", () => {
			openModal(property);
		  });

		section.appendChild(card);
	});
}

function openModal(property) {
	modalImage.src = property.image;
	modalPrice.textContent = property.price;
	modalSize.textContent = `${property.size} m²`;
	modalBedrooms.textContent = `${property.bedrooms} quarto(s)`;
	modalBathrooms.textContent = `${property.bathrooms} banheiro(s)`;
  
	modal.classList.add('showing');
	modal.classList.remove('hide');
	setTimeout(() => {
		modal.classList.add('show')
		modal.classList.remove('showing')
		}, 850); // animation time
}

function closeModal() {
	modal.classList.add('hiding');
	modal.classList.remove('show');
	setTimeout(() => {
		modal.classList.add('hide')
		modal.classList.remove('hiding')
	}, 750); // animation time
}

// Event listener for close button
closeButton.addEventListener("click", closeModal);

// Event listener for clicking outside of modal content to close
window.addEventListener("click", (event) => {
	if (event.target === modal) {closeModal()};
});


	//fetch JSON file
	fetch("./assets/json/properties.json")
	.then(response => response.json())
	.then(properties => renderProperties(properties))
	.catch(error => console.error("Error fetching properties:", error));


