let xml = new XMLHttpRequest();
let loader = document.getElementById("loader");
let list = document.getElementById("items");
xml.open('GET', 'https://netology-slow-rest.herokuapp.com');
xml.send();

xml.onreadystatechange = function() {
    if(xml.readyState === 4 && xml.status === 200){
        loader.classList.remove("loader_active");
        let valuteJSON = xml.responseText;
        let valuteParce = JSON.parse(valuteJSON);
        let valutes = valuteParce.response.Valute;
        for (let key in valutes) {
            list.innerHTML += `<div class="item">
                                <div class="item__code">
                                    ${key}
                                </div>
                                <div class="item__value">
                                    ${valutes[key]["Value"]}
                                </div>
                                <div class="item__currency">
                                    руб.
                                </div>
                                </div>`
        }
      }
}