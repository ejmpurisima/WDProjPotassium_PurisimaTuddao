document.querySelectorAll(".profile").forEach(profile => {
    const img = profile.querySelector(".profile-img");

    img.addEventListener("click", () => {
        profile.classList.toggle("active");
    });
});
