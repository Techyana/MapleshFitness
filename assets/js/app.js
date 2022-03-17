document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();


//Send email

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "dynamictechwebform@gmail.com",
        Password: "ifcivfyjjktmmxiy",
        To: "info@techyana.co.za",
        From: "dynamictechwebform@gmail.com",
        Subject: `New Form Entry from ${name}`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then(message => alert("mail sent successfully"));
    
}

const inputs = document.querySelectorAll('#name, #email, #message, #subject');

    inputs.forEach(input => {
    input.value = '';
    });