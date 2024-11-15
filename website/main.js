document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Masukkan email yang valid.");
      return;
  }

  alert(`Terimakasih telah mengisi!`);
  
  document.getElementById("commentForm").reset();
});
