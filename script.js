const bookingButton = document.querySelector("#bookingButton");

bookingButton?.addEventListener("click", () => {
    const form = bookingButton.closest("form");
    const data = new FormData(form);
    const name = data.get("name") || "Customer";
    const bike = data.get("bike") || "motor saya";
    const packageName = data.get("package") || "Basic Wash";
    const message = `Halo ShineRide, saya ${name}. Saya mau booking ${packageName} untuk ${bike}.`;
    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/6281234567890?text=${encoded}`, "_blank", "noopener,noreferrer");
});