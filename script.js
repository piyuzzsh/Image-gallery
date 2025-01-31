const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) => {
    // Remove active class from currently active button
    document.querySelector(".active").classList.remove("active");
    // Add active class to the clicked button
    e.target.classList.add("active");

    // Filter cards based on the data-name attribute
    filterableCards.forEach((card) => {
        card.classList.add("hide"); // Hide all cards initially

        // Show cards that match the filter or if "all" is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

// Attach event listeners to all filter buttons
filterButtons.forEach((button) => button.addEventListener("click", filterCards));
