const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector("form");
const resultTag = document.querySelector(".info");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

function isBetween(x, min, max) {
  return x >= min && x <= max;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let size = heightInput.value.trim() / 100;
  let weight = parseInt(weightInput.value.trim());

  if (heightInput.value === "" || weightInput.value === "") {
    return (resultTag.innerHTML = `
        <p class="result">Veuillez renseigner une valeur pour les 2 champs</p>
      `);
  }

  form.reset();

  result = Math.round(weight / size ** 2);
  // resultTag.innerHTML = result

  for (let data of BMIData) {
    if (data.range >= 40) {
      return (resultTag.innerHTML = `
        <p class="bmi-value" style="color:${data.color}">${result}</p>
        <p class="result">Résultat : ${data.name}</p>
      `);
    } else if (isBetween(result, data.range[0], data.range[1])) {
      return (resultTag.innerHTML = `
        <p class="bmi-value" style="color:${data.color}">${result}</p>
        <p class="result">Résultat : ${data.name}</p>
      `);
    }
  }
});
