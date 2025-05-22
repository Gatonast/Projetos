document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const gitInput = document.getElementById("git");
  const uploadInput = document.querySelector(".upload");
  const mainSection = document.querySelector(".main");
  let uploadedFile = null;
  let uploadedImageUrl = "";

  uploadInput.addEventListener("click", function () {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/jpeg, image/png";
      fileInput.addEventListener("change", function () {
          const file = fileInput.files[0];
          if (file && file.size <= 500 * 1024) {
              uploadedFile = file;
              const reader = new FileReader();
              reader.onload = function (e) {
                  uploadedImageUrl = e.target.result;
                  uploadInput.innerHTML = `<img src="${uploadedImageUrl}" width="50" height="50" alt="Uploaded Image"> File uploaded: ${file.name}`;
              };
              reader.readAsDataURL(file);
          } else {
              alert("Invalid file! Please upload a JPG or PNG file up to 500KB.");
          }
      });
      fileInput.click();
  });

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!emailInput.value.endsWith("@gmail.com")) {
          alert("Please use a Gmail address (@gmail.com)");
          return;
      }

      const userData = {
          name: nameInput.value,
          email: emailInput.value,
          github: gitInput.value,
          avatar: uploadedImageUrl
      };

      localStorage.setItem("userTicket", JSON.stringify(userData));
      mainSection.style.display = "none";
      generateTicket(userData);
  });

  function generateTicket(data) {
    const ticketSection = document.createElement("div");
    ticketSection.classList.add("ticket");

    // Criar um elemento de imagem se houver um arquivo enviado
    let avatarImg = "";
    if (uploadedFile) {
        const imgURL = URL.createObjectURL(uploadedFile);
        avatarImg = `<img class="ticket-avatar" src="${imgURL}" alt="User Avatar">`;
    }

    ticketSection.innerHTML = `
        ${avatarImg}
        <h2>Congrats, ${data.name}! Your ticket is ready.</h2>
        <p>We've emailed your ticket to ${data.email} and will send updates in the run-up to the event.</p>
        <p><strong>Coding Conf</strong><br>${new Date().toLocaleString()}</p>
    `;

    document.body.appendChild(ticketSection);
}

});
