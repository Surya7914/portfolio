function sendEmail() {
    var templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    };
  
    emailjs.send("service_iry4fs9","template_pz6xobn", templateParams,"nf7_YMSm02l_NVoWo")
      .then(function(response) {
        console.log("SUCCESS", response.status, response.text);
        alert("Email sent successfully!");
        // Clear form fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
      }, function(error) {
        console.log("FAILED", error);
        alert("Email sending failed. Please try again later.");
      });
  }