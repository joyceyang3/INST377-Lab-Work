const first = document.querySelectorAll(".carousel-item first-item--visible");
const last = document.querySelectorAll("carousel-item last-item");

let current = last;

document.querySelector("previous-button").onclick = (e) => {
    if (current.previousElementSibiling) {
        current.classlist.remove("visible");
        current.previousElementSibling.classList.add("visible");
        current = current.previousElementSibiling;
    } else {
        current.classList.remove("visible");
        first.classList.add("visible");
        current = last;
    }
};

document.querySelector("next-button").onclick = (e) => {
    if (current.nextElementSibiling) {
        current.classlist.remove("visible");
        current.nextElementSibling.classList.add("visible");
        current = current.nextElementSibiling;
    } else {
        current.classList.remove("visible");
        first.classList.add("visible");
        current = first;
    }
};