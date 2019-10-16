// $(document).ready(function() {{
//   $("#admin-login-btn").on("click", function() {
//     let username = $("#InputEmail").val();
//     let password = $("#InputPassword").val();

//     let regxUsername = new RegExp(
//       /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
//     );

//     let regxPassword = new RegExp(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
//     )

//     if (!username.length) {
//       alertify.notify("You have to enter email", "error", 6);
//       return;
//     }

//     if (!regxUsername.test(username)) {
//       alertify.notify("Invalid email, example: example@gmail.com", "error", 6);
//       return;
//     }

//     if (!password.length) {
//       alertify.notify("You have to enter password", "error", 6);
//       return;
//     }

//     if (!regxPassword.test(password)) {
//       alertify.notify(
//         "contains at least 1 uppercase letter, 1 special character, over 8 characters",
//         "error",
//         6);
//       return;
//     }

//   })
// }})