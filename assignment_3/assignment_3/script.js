function signup() {
  const user = document.getElementById('signupUser').value;
  const pass = document.getElementById('signupPass').value;

  if (!user || !pass) {
    document.getElementById('msg').innerText = "Please fill all fields.";
    return;
  }

  localStorage.setItem('username', user);
  localStorage.setItem('password', pass);
  document.getElementById('msg').style.color = "green";
  document.getElementById('msg').innerText = "Signup successful!";
}

function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;

  const storedUser = localStorage.getItem('username');
  const storedPass = localStorage.getItem('password');

  if (user === storedUser && pass === storedPass) {
    document.getElementById('msg').style.color = "green";
    document.getElementById('msg').innerText = "Login successful!";
  } else {
    document.getElementById('msg').style.color = "red";
    document.getElementById('msg').innerText = "Invalid credentials!";
  }
}
