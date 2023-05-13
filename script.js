let searchbtn = document.getElementById("searchbtn");
let countryimp = document.getElementById("form-control");
let result = document.getElementById("result");


searchbtn.addEventListener("click", () => {
    let countryname = countryimp.value;
    let url = `https://restcountries.com/v3.1/name/${countryname}`;
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag"/>
            <h1>${data[0].name.common}</h1>
            <div class="wrapper">
                <div class="data">
                    <h5>Captial: </h5>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
            <div class="data">
                <h5>Continent: </h5>
                <span>${data[0].continents[0]}</span>
            </div>
            </div>
                <div class="wrapper">
                    <div class="data">
                        <h5>Population: </h5>
                        <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data">
                    <h5>Currency: </h5>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>
            </div>
            </div>
        <div class="wrapper">
        <div class="data">
            <h5>Commem Lanuages: </h5>
            <span>${Object.values(data[0].languages).toString().split(",  ").join(",  ")}</span>
            </div>
        </div>
            `;
            countryimp.value = "";
        })
        .catch(() => {
            if (countryname == 0) {
                result.innerHTML = `
                <div class="msg">
                    <h1>Input field cannot be empty</h1>
                </div>
                `
            } else {
                result.innerHTML = `
                <div class="msg">
                    <h1>Country not found</h1>
                    `
            }
        });
});
