let login = prompt("Введите логин:");

if (login === "Admin") {
  let password = prompt("Введите пароль:");

  if (password === "Господар") {
    alert("Ласкаво просимо!");
  } else if (password === "" || password === null) {
    alert("Скасовано.");
  } else {
    alert("Неправильный пароль");
  }
} else if (login === "" || login === null) {
  alert("Неправильный пароль");
} else {
  alert("Я вас не знаю.");
}
