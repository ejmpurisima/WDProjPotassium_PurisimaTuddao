document.querySelectorAll(".profile").forEach(profile => {
    const image = profile.querySelector(".character-photo");

    image.addEventListener("click", () => {
        profile.classList.toggle("active");
    });
});
