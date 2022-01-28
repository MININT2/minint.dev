function init() {
    const img = document.querySelector("#cursor");
    const {width} = img.getBoundingClientRect();
    img.addEventListener("mousemove", function(e) {
        const xPos = e.pageX - img.offsetLeft;
        this.classList.remove("cursor-prev", "cursor-next");
        if (xPos > halfImgWidth) {
            this.classList.add("cursor-next");
        } else {
            this.classList.add("cursor-prev");
        }
    });
}