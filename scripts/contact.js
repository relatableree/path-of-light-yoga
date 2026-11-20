// Checks the contact form before "sending" it.
// The original exercise only checked the e-mail field with an alert();
// this version checks every field and shows the message on the page instead.
// It's a demo site, so nothing is actually sent.

function validateForm(event) {
	event.preventDefault();

	var form = event.target;
	var status = form.querySelector(".form-status");
	var fields = [
		{ input: form.contactName, label: "your name" },
		{ input: form.myEmail, label: "an e-mail address" },
		{ input: form.myComments, label: "a comment" }
	];

	for (var i = 0; i < fields.length; i++) {
		var input = fields[i].input;
		if (input.value.trim() === "") {
			status.textContent = "Please enter " + fields[i].label + ".";
			status.hidden = false;
			input.focus();
			return;
		}
		if (input.type === "email" && !input.checkValidity()) {
			status.textContent = "Please enter a valid e-mail address.";
			status.hidden = false;
			input.focus();
			return;
		}
	}

	status.textContent = "Thank you, " + form.contactName.value.trim() +
		"! This is a demo site, so your message wasn't sent anywhere.";
	status.hidden = false;
	form.reset();
}

document.getElementById("contact-form").addEventListener("submit", validateForm);
