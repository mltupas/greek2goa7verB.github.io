var profiles = JSON.parse(localStorage.getItem("profiles"));

function validate() {
  var login = {
    email: document.getElementById('email').value,
    password: document.getElementById('pswd').value
  };

  for (var user in profiles) {
    if (login.email == profiles[user].email) {
      if (login.password == profiles[user].password) {
        localStorage.setItem("current_user", login.email);
        return true;
      } else {
        alert("Password is incorrect. Please try again");
        return false;
      }
    }
  }
  alert("This email is not registered. Please create an account.");
  return false;
}

function logout() {
  console.log(localStorage.getItem("current_user"));
  localStorage.setItem("current_user", "");
  console.log(localStorage.getItem("current_user"));
}
