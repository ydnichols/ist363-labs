const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=temperature_2m,precipitation,cloud_cover&temperature_unit=fahrenheit&precipitation_unit=inch";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temp = data.current.temperature_2m;
    const precip = data.current.precipitation;
    const cloud = data.current.cloud_cover;

    let weatherEmoji = cloud > 50 ? "☁️" : "☀️";

    document.getElementById("temperature").innerText = temp + "°F";
    document.getElementById("precipitation").innerText = precip + '"';
    document.getElementById("cloudcover").innerText = weatherEmoji;
  })
  .catch(error => console.log("Error: " + error));