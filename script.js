// Simulated database values
const phone = "1234";
const password = "test";

function login() {
  const enteredPhone = document.getElementById("num").value;
  const enteredPass = document.getElementById("pass").value;
  const result = document.getElementById("res");

  checkPhone(enteredPhone)
    .then((isnum) => {
      if (isnum) {
        checkPass(enteredPass)
          .then((ispass) => {
            if (ispass) {
              result.innerText = "Login successful!";
              result.style.color = "green";
            }
          })
          .catch(() => {
            result.innerText = "Invalid password!";
            result.style.color = "red";
          });
      }
    })
    .catch(() => {
      result.innerText = "Invalid user!";
      result.style.color = "red";
    });
}

function checkPhone(n) {
  return new Promise((resolve, reject) => {
    if (n === phone) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

function checkPass(p) {
  return new Promise((resolve, reject) => {
    if (p === password) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
