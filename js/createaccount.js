var profiles = JSON.parse(localStorage.getItem("profiles")) || [];

function createAccount() {
  var emailExists = false;
  var new_user = {
    firstName: document.getElementById('first_name').value,
    lastName: document.getElementById('last_name').value,
    email: document.getElementById('new_email').value,
    password: document.getElementById('new_pswd').value,
    events: []
  };

  for (var user in profiles) {
    if (new_user.email == profiles[user].email) {
      emailExists = true;
    }
  }

  if (emailExists) {
    alert("This email is already registered. Please use a different email.");
    return false;
  } else {
    profiles.push(new_user);
    localStorage.setItem("profiles", JSON.stringify(profiles));
    localStorage.setItem("current_user", new_user.email);
    alert("Thank you for registering.");
    return true;
  }
}
