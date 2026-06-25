/* ==========================
   ELEMENTS
========================== */

const generateBtn =

document.getElementById(
    "generateBtn"
);

const colorBoxes =

document.querySelectorAll(
    ".color-preview"
);

const hexCodes =

document.querySelectorAll(
    ".hex-code"
);

const toast =

document.getElementById(
    "toast"
);

/* ==========================
   MATCHING COLOR PAIRS
========================== */

const colorPairs = [

["#7C3AED","#06B6D4"],
["#FF6B6B","#FFD93D"],
["#2563EB","#DBEAFE"],
["#0F172A","#F8FAFC"],
["#0F766E","#99F6E4"],

["#581C87","#C084FC"],
["#1E293B","#38BDF8"],
["#4C1D95","#A78BFA"],
["#065F46","#6EE7B7"],
["#7C2D12","#FDBA74"],

["#164E63","#67E8F9"],
["#881337","#FDA4AF"],
["#14532D","#86EFAC"],
["#3F3F46","#E4E4E7"],
["#78350F","#FCD34D"],

["#111827","#22D3EE"],
["#172554","#60A5FA"],
["#7F1D1D","#F87171"],
["#052E16","#4ADE80"],
["#451A03","#FB923C"]

];

/* ==========================
   PREVIOUS INDEX
========================== */

let previousIndex = -1;

/* ==========================
   RANDOM INDEX
========================== */

function getRandomIndex(){

    let randomIndex;

    do{

        randomIndex =

        Math.floor(

            Math.random()

            *

            colorPairs.length
        );

    }

    while(

        randomIndex
        ===
        previousIndex
    );

    previousIndex =
    randomIndex;

    return randomIndex;
}

/* ==========================
   GENERATE PAIR
========================== */

function generatePair(){

    const index =

    getRandomIndex();

    const pair =

    colorPairs[index];

    const color1 =
    pair[0];

    const color2 =
    pair[1];

    /* Card 1 */

    colorBoxes[0]
    .style.background =

    color1;

    hexCodes[0]
    .textContent =

    color1;

    /* Card 2 */

    colorBoxes[1]
    .style.background =

    color2;

    hexCodes[1]
    .textContent =

    color2;
}

/* ==========================
   GENERATE BUTTON
========================== */

generateBtn
.addEventListener(

    "click",

    generatePair
);

/* ==========================
   INITIAL LOAD
========================== */

window.addEventListener(

    "load",

    () => {

        generatePair();
    }
);

/* ==========================
   SHOW TOAST
========================== */

function showToast(
    message
){

    toast.textContent =
    message;

    toast.classList.add(
        "show"
    );

    setTimeout(

        () => {

            toast.classList.remove(
                "show"
            );

        },

        2000
    );
}

/* ==========================
   COPY COLOR
========================== */

function copyColor(
    color
){

    navigator.clipboard
    .writeText(
        color
    );

    showToast(

        `Copied ${color}`
    );
}

/* ==========================
   CLICK CARD TO COPY
========================== */

document
.querySelectorAll(
    ".color-card"
)
.forEach(

    (
        card,
        index
    ) => {

        card
        .addEventListener(

            "click",

            () => {

                const color =

                hexCodes[index]
                .textContent;

                copyColor(
                    color
                );
            }
        );
    }
);

/* ==========================
   SPACEBAR SHORTCUT
========================== */

document.addEventListener(

    "keydown",

    (event) => {

        if(

            event.code
            ===
            "Space"

            &&

            event.target
            ===
            document.body
        ){

            event.preventDefault();

            generatePair();

            showToast(

                "New Pair Generated 🎨"
            );
        }
    }
);

/* ==========================
   EXTRA SAFETY
========================== */

if(
    colorBoxes.length < 2
){

    console.error(

    "PaletteX Error: Two color cards required."

    );
}

/* ==========================
   WELCOME MESSAGE
========================== */

console.log(

"🎨 PaletteX Loaded Successfully"

);

console.log(

"✨ Press Spacebar To Generate New Color Pair"

);

/* ==========================
   PROJECT COMPLETE
========================== */