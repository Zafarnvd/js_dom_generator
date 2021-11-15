let w = document.querySelector('.w');
let r = document.querySelector('.r');
let g = document.querySelector('.g');
let b = document.querySelector('.b');
let resultat = document.querySelector('.resultat');
let btnn = document.querySelectorAll('button');
let blanc = "white";
let rouge = "red";
let vert = "green";
let bleu = "blue";

// console.log(resultat);
// console.log(btnn);

// color
w.addEventListener('click', () => {
    resultat.style.backgroundColor = blanc;
})
r.addEventListener('click', () => {
    resultat.style.backgroundColor = rouge;
})
g.addEventListener('click', () => {
    resultat.style.backgroundColor = vert;
})
b.addEventListener('click', () => {
    resultat.style.backgroundColor = bleu;
})

let same = document.querySelectorAll('.same');

for (let i = 0; i < same.length; i++) {
    same[i].addEventListener('click', () => {
        resultat.style.border = same[i].style.border;
        borderStyle = resultat.style.border
        resultat.style.border = borderStyle;
        if (i == 3) {
            resultat.style.borderTop = "none"
        } else if (i == 4) {
            resultat.style.borderTop = "5px solid red";
        } else if (i == 5) {
            resultat.style.borderTop = "10px solid red";
        }
    })
}


let typeColor = document.getElementsByTagName('input')[0];
console.log(typeColor);

typeColor.addEventListener('input', () => {
    resultat.style.borderColor = typeColor.value;
});

let rnd = document.querySelectorAll('.rnd')
for (let i = 0; i < rnd.length; i++) {
    rnd[i].addEventListener("click", () => {
        if (i == 0) {
            resultat.style.border = `${rnd[i].value}px solid`;
        } else if(i == 1){
           resultat.style.borderTop = `${rnd[i].value}px solid`;
        } else if(i == 2){
            resultat.style.borderRight = `${rnd[i].value}px solid`;
        } else if(i == 3){
            resultat.style.borderBottom = `${rnd[i].value}px solid`;
        } else if (i == 4) {
            resultat.style.borderLeft = `${rnd[i].value}px solid`;
        } else if (i == 5) {
            resultat.style.borderRadius = `${rnd[i].value}px`;
        } else if(i == 6){
            resultat.style.borderRadius = `${rnd[i].value}px 0px 0px 0px`;
        }else if(i == 7){
            resultat.style.borderRadius = `0px ${rnd[i].value}px 0px 0px`;
        }else if(i == 8){
            resultat.style.borderRadius = `0px 0px ${rnd[i].value}px 0px`;
        } else if(i == 9){
            resultat.style.borderRadius = `0px 0px 0px ${rnd[i].value}px`;
        }
    })
    
};
