import "./styles/main.scss";
import "bootstrap";

document.querySelectorAll(".main-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "https://mypharmacyplus.shop";
  });
});
