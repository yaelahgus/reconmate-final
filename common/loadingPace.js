const loadingPace = () => {
    let preloader = document.querySelector("#preloader");

    if (!preloader) return;

    if (document.body.classList.contains("pace-done")) preloader.classList.add("isdone");

    document.addEventListener("load", () => preloader.classList.add("isdone"));

    if (typeof Pace === 'undefined') return;

    Pace.on("start", () => preloader.classList.remove("isdone"));

    Pace.on("done", () => preloader.classList.add("isdone"));
}

export default loadingPace