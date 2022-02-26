document.addEventListener('DOMContentLoaded', function() {
    colorMetarTable();
    countClicks();
    submitCityRequest();
})

function colorMetarTable() {
    let metarTable = document.querySelector('.metar-table');

    for (let i = 1; i < metarTable.rows.length; i++) {
        let data = metarTable.rows[i].cells[6].innerHTML;
        let val = '';
        for (let j = 0; j < data.length; j++) {
            if (data[j] != ' ') {
                val += data[j];
            }
            else {
                break;
            }
        }
        let v = parseInt(val);
        if (v <= 1000) {
            metarTable.rows[i].style.backgroundColor = "#ffccca";
        }
        else if (v <= 1500) {
            metarTable.rows[i].style.backgroundColor = "yellow";
        }
        else {
            metarTable.rows[i].style.backgroundColor = "lightgreen";
        }
    }
}

function countClicks() {
    let countButton = document.querySelector('#bt');
    countButton.onclick = function() {

        fetch('http://127.0.0.1:8000/livedata', {
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(response => response.text())
        .then(response => {

            console.log(response)

        })
        // .then((data) => {
        //     console.log(data);
        //     let value = parseInt(document.querySelector('#heading1').innerHTML)
        //     document.querySelector('#heading1').innerHTML = value+1
        // });
        // .then((response) => {response.json()})
        // .then((data) => {
        //     console.log(data);
        //     let value = parseInt(document.querySelector('#heading1').innerHTML)
        //     document.querySelector('#heading1').innerHTML = value+1
        // })
            
            
            
        
    }
}

function submitCityRequest() {
    let form = document.querySelector('#req-form');
    form.onsubmit = function(e) {
        fetch('http://127.0.0.1:8000/livedata', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        e.preventDefault();
    }
}