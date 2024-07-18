document.addEventListener("DOMContentLoaded", () => {
  const showOfferBtn = document.querySelector(".show-offer-btn");
  const acceptOffer = document.querySelector(".accept-offer");
  const acceptOfferCross = document.querySelector(".accept-offer-cross");
  const acceptOfferBtn = document.querySelector(".accept-offer-container-btn");
  const offerAccepted = document.querySelector(".offer-accepted");

  const toggleDisplay = (element, displayStyle) => {
    element.style.display = displayStyle;
  };

  showOfferBtn.addEventListener("click", () => {
    const display =
      acceptOffer.style.display === "none" || acceptOffer.style.display === ""
        ? "flex"
        : "none";
    toggleDisplay(acceptOffer, display);
  });

  acceptOfferCross.addEventListener("click", () => {
    toggleDisplay(acceptOffer, "none");
  });

  acceptOfferBtn.addEventListener("click", () => {
    toggleDisplay(acceptOffer, "none");
    showOfferBtn.remove();
    offerAccepted.innerHTML = "Hurrah! Offer Accepted :)";
  });
});
