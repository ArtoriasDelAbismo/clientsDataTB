
function sendEmail() {
    (function() {
      emailjs.init("EPwTdvT0qLc1pF6zu");
  })()

  let serviceID = "service_vsco4tf";
  let templateID = "template_32fzf6u";

  let params = {
    clientname: document.querySelector("#name").value,
    clientlastname: document.querySelector("#lastname").value,
    clientemail: document.querySelector("#email").value,
    clientphone: document.querySelector("#phone").value,
    clientstring: document.querySelector("#string").value
  };

  emailjs.send(serviceID, templateID, params)
    .then(() => {
        alert("Thank you " + params["clientname"] + "!");
      })
    .catch();
  }

 