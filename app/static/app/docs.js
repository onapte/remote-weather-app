document.addEventListener('DOMContentLoaded', function() {
    handleDocList();
})

function handleDocList() {
    let docListButton = document.querySelector('.small-screen-list-button');
    let count = 0;
    docListButton.addEventListener('click', function() {
        let docList = document.querySelector('#sidebar');
        if (count == 0) {
            docList.style.display = "block";
            count = 1;
        }
        else {
            docList.style.display = "none";
            count = 0;
        }
        console.log(count);
    })    
}