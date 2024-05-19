const getData = () => {
  fetch("https://restcountries.com/v3.1/all").then((result) =>
    result.json().then((data) => {
      console.log(data);
      let result = "";
      data.forEach((element) => {
        result += `<div class="card" style="width: 40%; height=300px">
      <img src=${element.flags.png} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name.common}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`;
      });
      document.querySelector(".section").innerHTML = result;
    })
  );
};
getData();
