document.addEventListener('DOMContentLoaded', function() {
    handleEdit();
})

function handleEdit() {
    let editButton = document.querySelector("#edit-button");
    let saveButton = document.querySelector("#save-button");
    let firstName = document.querySelector('#v1')
    let lastName = document.querySelector('#v2')
    let username = document.querySelector('#v3')
    let formFirstName = document.querySelector('#fn');
    let formLastName = document.querySelector('#ln');
    let formUsername = document.querySelector('#un');
    let userId = document.querySelector("#user-id").value;

    saveButton.style.display = "none";

    editButton.onclick = function() {
        editButton.style.display = "none";
        saveButton.style.display = "block";
        firstName.contentEditable = true;
        lastName.contentEditable = true;
        username.contentEditable = true;
    }

    saveButton.onclick = function() {
        saveButton.style.display = "none";
        editButton.style.display = "block";
        formFirstName.value = firstName.innerText;
        formLastName.value = lastName.innerText;
        formUsername.value = username.innerText;
        firstName.contentEditable = false;
        lastName.contentEditable = false;
        username.contentEditable = false;
        fetchEditData(formFirstName.value, formLastName.value, formUsername.value, userId);
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function fetchEditData(firstName, lastName, username, userId) {
    fetch(`/profile/edit/${userId}`, {
        method: 'POST',
        headers: { 
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body: 
            JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username
            })
    })
    
    
    
}