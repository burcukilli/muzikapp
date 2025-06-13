<script>
  async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/giris", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = "index.html";
    } else {
      document.getElementById("error").textContent = result.message;
    }
  }
</script>
