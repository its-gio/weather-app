const modal = document.querySelector("#modal");
const exitModalBtn = document.querySelector("#exit-modal");
const enterModalBtn = document.querySelector("#change-location-btn");
let modalHidden = true;

const toggleModal = () => modal.classList.toggle("hidden");

exitModalBtn.addEventListener('click', toggleModal);
enterModalBtn.addEventListener('click', toggleModal);