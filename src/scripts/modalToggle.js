export default function toggleModal() {
  const modal = document.querySelector("#modal");
  modal.classList.toggle("hidden");
}

const exitModalBtn = document.querySelector("#exit-modal");
const enterModalBtn = document.querySelector("#change-location-btn");


exitModalBtn.addEventListener('click', toggleModal);
enterModalBtn.addEventListener('click', toggleModal);