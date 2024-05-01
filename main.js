// 1 taks

// function submit() {
//   let username = document.getElementById("username").value;
//   let password = Number(document.getElementById("password")).value;
//   if (username === "admin") {
//     if (password === 123) {
//       alert("SUCCESS");
//     } else {
//       alert("Password xato");
//     }
//   } else if (password === 123) {
//     alert("Username xato");
//   } else {
//     alert("Username va password xato");
//   }
// }
// const isShow = () => {
//   let password = document.getElementById("password");
//   if (password.type === "password") {
//     password.type = "text";
//   } else {
//     password.type = "password";
//   }
// };

// 2 taks

const create = (e) => {
  e.preventDefault();
  let result = document.getElementById("result");
  let text = document.getElementById("title");
  let width = e.target[0].value;
  let height = e.target[1].value;
  let bg_color = e.target[2].value;
  let border_r = e.target[3].value;
  let title = e.target[0].value;
  console.log(width, height, bg_color, border_r);
  result.style.width = "s{width}px";
  result.style.height = "s{width}px";
  result.style.backgroundColor = bg_color;
  result.style.borderRadius = "${border_r}";
  text.innerText = title;
};
