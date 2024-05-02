const container = document.querySelector("#container");

function createGrid(size) {
    //clear the previous grid
    container.replaceChildren();

    //create new grid
    const div_size = container.clientWidth / size;

    //track mouse down
    let mouseDown = 0;
    document.body.onmousedown = function() { 
    ++mouseDown;
    }
    document.body.onmouseup = function() {
    --mouseDown;
    }

    //add elements to the grid
    for (let i = 0; i < (size ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("grid-element");
        div.style.width = div_size + "px";
        div.style.height = div_size + "px";

        div.addEventListener("mouseover", () => {
            if (mouseDown) {
                div.style.backgroundColor = "lightgreen";
            }
        });
        container.appendChild(div);
    }

}

const grid_btn = document.querySelector("#new_grid_button");
grid_btn.addEventListener("click", () => {
    const grid_size = prompt("What grid size do you want?");
    createGrid(grid_size);
});
