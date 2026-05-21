// Navbar Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});

// =========================
// GALLERY MODAL
// =========================

const galleryItems = document.querySelectorAll(".gallery-item");

const galleryModal = document.getElementById("galleryModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalDesc = document.getElementById("modalDesc");

const closeGallery = document.getElementById("closeGallery");

// Open Modal

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const img = item.getAttribute("data-img");
        const title = item.getAttribute("data-title");
        const desc = item.getAttribute("data-desc");

        modalImage.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;

        galleryModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

// Close Modal

closeGallery.addEventListener("click", () => {

    galleryModal.classList.remove("active");

    document.body.style.overflow = "auto";

});

// Click Outside

galleryModal.addEventListener("click", (e) => {

    if (e.target === galleryModal) {

        galleryModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

