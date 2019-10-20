function adminlogin() {
  $("#admin-login-btn").on("click", async function() {
    let username = $("#InputEmail").val();
    let password = $("#InputPassword").val();

    let regxUsername = new RegExp(
      /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/
    );

    let regxPassword = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
    )

    if (!username.length) {
      alertify.notify("You have to enter email", "error", 6);
      return;
    }

    if (!regxUsername.test(username)) {
      alertify.notify("Username dose not contain special characters", "error", 6);
      return;
    }

    if (!password.length) {
      alertify.notify("You have to enter password", "error", 6);
      return;
    }

    if (!regxPassword.test(password)) {
      alertify.notify(
        "contains at least 1 uppercase letter, 1 special character, over 8 characters",
        "error",
        6);
      return;
    }


    try {
      let data =  await $.post({
        url: "/admin/login",
        data: {
          username,
          password
        }
      })

      if(data.status) {
        localStorage.setItem("token",data.token);
        return window.location.href = "http://localhost:3000/admin";
      } else {
        return alertify.notify(
          `${data.message}`,
          "error",
          6);
        
      }
    } catch (error) {
      console.log(error)
    }

  })
};

$(document).ready(function() {{
  adminlogin();
}});