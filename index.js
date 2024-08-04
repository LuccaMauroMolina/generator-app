const api2 = "https://api.adviceslip.com/advice";
const slip_Id = document.getElementById("slip-id");
const frase = document.getElementById("consejos");
const img_dado = document.getElementById("dado");

img_dado.addEventListener("click", mostrarConsejos);
function mostrarConsejos(){
    fetch(api2, {cache: "no-cache"})
    .then((resp) => resp.json())
    .then((datos) => {
        slip_Id.textContent = "ADVICE #" + datos.slip.id;
        frase.textContent = `"${datos.slip.advice}"`;
    })
    .catch((error) => console.log(error));
}