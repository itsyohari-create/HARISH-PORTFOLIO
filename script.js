const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((card) => {

    const video = card.querySelector("video");
    const playButton = card.querySelector(".play-button");

    if (!video || !playButton) return;


    // =========================
    // CLICK VIDEO
    // =========================

    card.addEventListener("click", () => {

        if (video.paused) {

            // Turn sound ON
            video.muted = false;
            video.volume = 1;

            video.play();

            // Hide play button while playing
            playButton.style.opacity = "0";

        } else {

            // Pause video
            video.pause();

            // Show play button
            playButton.textContent = "▶";
            playButton.style.opacity = "1";

        }

    });


    // =========================
    // VIDEO PAUSED
    // =========================

    video.addEventListener("pause", () => {

        if (!video.ended) {
            playButton.textContent = "▶";
            playButton.style.opacity = "1";
        }

    });


    // =========================
    // VIDEO PLAYING
    // =========================

    video.addEventListener("play", () => {

        playButton.style.opacity = "0";

    });


    // =========================
    // VIDEO FINISHED
    // =========================

    video.addEventListener("ended", () => {

        playButton.textContent = "▶";
        playButton.style.opacity = "1";

    });

});
// =========================================
// CLIENT REVIEW SLIDER
// =========================================

const reviews = document.querySelectorAll(".review");
const reviewDots = document.querySelectorAll(".review-dot");

let currentReview = 0;

function showReview(index) {

    // Remove active from all reviews
    reviews.forEach((review) => {
        review.classList.remove("active");
    });

    // Remove active from all dots
    reviewDots.forEach((dot) => {
        dot.classList.remove("active");
    });


    // Activate selected review
    reviews[index].classList.add("active");

    // Activate selected dot
    reviewDots[index].classList.add("active");
}


// Automatically change review

if (reviews.length > 0) {

    setInterval(() => {

        currentReview++;

        if (currentReview >= reviews.length) {
            currentReview = 0;
        }

        showReview(currentReview);

    }, 4000);

}