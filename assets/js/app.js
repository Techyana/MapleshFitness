

function sendEmail() {
	//Get values
	let name = document.querySelector(".name").value;
	let email = document.querySelector(".email").value;
	let subject = document.querySelector(".subject").value;
	let message = document.querySelector(".message").value;

	//Send Mail
	Email.send({
	Host: "smtp.gmail.com",
	Username : "dynamictechwebform@gmail.com",
	Password : "ricoh123",
	To : 'info@techyana.co.za',
	From : "donotreply@techyana.co.za",
	Subject : "new form entry",
	Body : `Name: ${name} <br/> Subject: ${subject} <br/> Message: ${message}`,
	}).then(
		message => alert("mail sent successfully")
	);

}

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  //Submitting a form
event.preventDefault();

//Clear Input Fields
const inputs = document.querySelectorAll('.name, .email, .subject, .message');

inputs.forEach(input => {
    input.value = '';
});
});