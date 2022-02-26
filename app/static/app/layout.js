document.addEventListener('DOMContentLoaded', function() {
    handleToggledNavbar();
    showLoader();
})

function cb(response) {
    document.getElementById('visits').innerText = response.value;
}

function handleToggledNavbar() {
    let contentButton = document.querySelector('#toggleButton');
        let count = 0;
        contentButton.addEventListener('click', function() {
            let contentMenu = document.querySelector('.toggled-navbar-contents');
            
            if (count == 0) {
                contentMenu.style.display = "block";
                count = 1;
            }
            else if (count == 1) {
                contentMenu.style.display = "none";
                count = 0;
            }
        });
}

function showLoader() {
    let mapLink = document.querySelectorAll('.mapview-link');
    let loader = document.querySelector('.fa-3x');
    mapLink.forEach(link => {
        link.onclick = function() {
            loader.style.display = "block";

        }
    })
    // mapLink.addEventListener('click', function() {
    //     loader.style.display = "block";
    // })
}