let button = document.getElementById('testMail');

button.onclick = function() {
    let response = email_S.get_by_index(0, 2);
    console.log(response);
}