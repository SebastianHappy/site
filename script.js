let moveCount = 0;
const maxMoves = 7;

const trickBtn = document.getElementById("trickBtn");

function nextScreen(id) {
    document.querySelectorAll(".screen").forEach(s =>
        s.classList.remove("active")
    );
    document.getElementById(id).classList.add("active");
}

/* JUEGO */
trickBtn.addEventListener("mouseover", () => {
    if (moveCount < maxMoves) {
        moveButton(trickBtn);
        moveCount++;
    }
});

trickBtn.addEventListener("click", () => {
    nextScreen("win");
});


function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    btn.style.position = "fixed";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
