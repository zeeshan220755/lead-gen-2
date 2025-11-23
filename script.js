document
  .getElementById("leadForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = event.target.querySelector("button[type='submit']");
    submitButton.disabled = true;                 // 🔹 Disable button
    submitButton.textContent = "Submitting...";   // 🔹 Change text (optional)

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

    const responseMessage = document.getElementById("responseMessage");

    // Phone validation
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      responseMessage.textContent = "Please enter a valid 10-digit phone number.";
      responseMessage.style.color = "red";

      // Enable button again if validation fails
      submitButton.disabled = false;
      submitButton.textContent = "Submit";

      return;
    }

    responseMessage.textContent = "Submitting...";
    responseMessage.style.color = "blue";

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzo7EliT5WuyRBevSXfOA6NLLlXeyahs7kimfXUBmlUt3M8m8_omkONEitnF82G7hE/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      responseMessage.textContent =
        "Thank you! Your information has been submitted. We will get back to you shortly!";
      responseMessage.style.color = "green";

      document.getElementById("leadForm").reset();
    } catch (error) {
      responseMessage.textContent =
        "An error occurred while submitting the form. Please try again.";
      responseMessage.style.color = "red";
    }

    // Re-enable button after completion
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  });
