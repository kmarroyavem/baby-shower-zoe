const gifts = [
  { id: 1, name: "Bañera para bebé", icon: "🛁", desc: "Para los primeros baños de Emma." },
  { id: 2, name: "Pañalera", icon: "🎒", desc: "Práctica para llevar todo lo necesario." },
  { id: 3, name: "Esterilizador", icon: "🍼", desc: "Ideal para teteros y accesorios." },
  { id: 4, name: "Manta para bebé", icon: "🧸", desc: "Suave y calentita para sus primeros meses." },
  { id: 5, name: "Gimnasio para bebé", icon: "🌈", desc: "Para estimular sus primeros movimientos." },
  { id: 6, name: "Kit de cuidado", icon: "🧴", desc: "Artículos básicos de cuidado diario." }
];

let selectedGift = null;
const giftList = document.getElementById("giftList");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const guestName = document.getElementById("guestName");

function getReservations() {
  return JSON.parse(localStorage.getItem("babyGiftReservations") || "{}");
}

function saveReservations(data) {
  localStorage.setItem("babyGiftReservations", JSON.stringify(data));
}

function renderGifts() {
  const reservations = getReservations();

  giftList.innerHTML = gifts.map(gift => {
    const reservedBy = reservations[gift.id];
    return `
      <article class="gift-card">
        <div class="gift-image">${gift.icon}</div>
        <div class="gift-body">
          <span class="status ${reservedBy ? "reserved" : "available"}">
            ${reservedBy ? "Apartado" : "Disponible"}
          </span>
          <h3>${gift.name}</h3>
          <p>${reservedBy ? `Reservado por ${reservedBy}` : gift.desc}</p>
          <button class="btn ${reservedBy ? "" : "primary"}"
            ${reservedBy ? "disabled" : ""}
            onclick="openGiftModal(${gift.id})">
            ${reservedBy ? "Regalo apartado" : "Apartar regalo"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

window.openGiftModal = function(id) {
  selectedGift = gifts.find(g => g.id === id);
  modalTitle.textContent = `Apartar: ${selectedGift.name}`;
  guestName.value = "";
  modal.classList.remove("hidden");
  setTimeout(() => guestName.focus(), 100);
}

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

document.getElementById("confirmGift").addEventListener("click", () => {
  const name = guestName.value.trim();
  if (!name) {
    alert("Escribe tu nombre para apartar el regalo.");
    return;
  }

  const reservations = getReservations();
  reservations[selectedGift.id] = name;
  saveReservations(reservations);
  modal.classList.add("hidden");
  renderGifts();
});

function updateCountdown() {
  const eventDate = new Date("2026-10-24T15:00:00-05:00");
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "¡Hoy es el gran día!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").textContent =
    `${days} días · ${hours} h · ${minutes} min`;
}

renderGifts();
updateCountdown();
setInterval(updateCountdown, 60000);
