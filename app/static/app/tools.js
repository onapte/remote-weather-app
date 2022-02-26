document.addEventListener("DOMContentLoaded", function () {
  loadSatDiv();
  loadRadDiv();
  loadButtons();
  loadRadar();
  loadMetarDecoder();
  loadLatLong();
  getDecodedMetar();
  getLatLongValue();
});

function hideButtons() {
  document.querySelector(".all-tools").style.display = "none";
}

function showButtons() {
  document.querySelector(".all-tools").style.display = "block";
}

function loadSatDiv() {
  let satButton = document.querySelector("#sat");
  satButton.onclick = function () {
    hideButtons();
    document.querySelector(".satellite-images").style.display = "block";
    document.querySelector(".button-section").style.display = "block";
  };
}

function loadRadDiv() {
  let radButton = document.querySelector("#rad");
  radButton.onclick = function () {
    hideButtons();
    document.querySelector(".radars").style.display = "block";
    document.querySelector(".button-section").style.display = "block";
  };
}

function loadMetarDecoder() {
  let metarButton = document.querySelector("#met");
  metarButton.onclick = function() {
    hideButtons();
    document.querySelector(".metar-code-decode").style.display = "block";
    document.querySelector(".button-section").style.display = "block";
  }
}

function loadButtons() {
  let backButton = document.querySelector("#back");
  backButton.onclick = function () {
    document.querySelector(".satellite-images").style.display = "none";
    document.querySelector(".button-section").style.display = "none";
    showButtons();
    document.querySelector(".radars").style.display = "none";
    document.querySelector('.metar-code-decode').style.display = 'none';
    document.querySelector('.lat-and-long').style.display = 'none';
  };
}

function loadRadar() {
  let radarButtons = document.querySelectorAll(".radar-buttons");
  radarButtons.forEach((radarButton) => {
    let count = 0;
    radarButton.onclick = function () {
      let city = radarButton.innerText;
      if (count == 0) {
        document.querySelector(`#radar-${city}`).style.display = "block";
        count = 1;
      } else {
        document.querySelector(`#radar-${city}`).style.display = "none";
        count = 0;
      }
    };
  });
}

function loadLatLong() {
  let latLongButton = document.querySelector("#long-lat");
  latLongButton.onclick = function() {
    hideButtons();
    document.querySelector(".lat-and-long").style.display = "block";
    document.querySelector(".button-section").style.display = "block";
  }
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function getDecodedMetar() {
  let formButton = document.querySelector("#metar-button");
  formButton.onclick = function (e) {
    e.preventDefault();
    let metarCode = document.querySelector("#metar-value").value;
    sendMetar(metarCode);
    //e.preventDefault();
    //getMetar(metarCode);
  };
}

// function getMetar(metarCode) {
//   fetch("/tools", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       alert(data);
//     });
// }

// function sendMetar(metarCode) {
//   fetch('/tools', {
//     method: "POST",
//     headers: {
//       "X-CSRFToken": getCookie("csrftoken"),
//     },
//     body: JSON.stringify({
//         Metar: metarCode,
//     }),
//   });
// }

function getLatLongValue() {
  let latLongButton = document.querySelector('#lat-long-submit');
  latLongButton.onclick = function(e) {
    e.preventDefault();
    let city = document.querySelector('#lat-long-city').value;
    sendLatLong(city);
  }
}

async function sendLatLong(city) {
  const response = await fetch('/tools', {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body: JSON.stringify({
      'Type': 'Lat-Long',
      'City': city,
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector('.lat-long-value').innerHTML = "Latitude: "+data['latitude']
    document.querySelector('.lat-long-value').innerHTML += ", Longitude: "+data['longitude']
  })
}


async function sendMetar(metarCode) {
  const response = await fetch('/tools', {
     method: "POST",
     headers: {
       "X-CSRFToken": getCookie("csrftoken"),
     },
     body: JSON.stringify({
       'Type': "METAR",
        'Metar': metarCode,
     }),
   })
   .then(response => response.json())
   .then(data => {
     console.log(data);
     // extract the decoded value from the data sent back from the view
     // display it by targeting the element in your html that you want
     // to display it
     document.querySelector('.decodedValue').innerHTML = data;
   });
}

// async function sendMetar(metarCode) {
//   const response = await fetch('/tools', {
//      method: "GET",
//      headers: {
//        "X-CSRFToken": getCookie("csrftoken"),
//      },
//    })
//    .then(response => response.json())
//    .then(data => {
//      console.log(data);
//      // extract the decoded value from the data sent back from the view
//      // display it by targeting the element in your html that you want
//      // to display it
//    });
// }

