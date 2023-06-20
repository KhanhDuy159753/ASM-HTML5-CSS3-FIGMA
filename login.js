check.onclick = togglePassword;

function togglePassword() {
    if (check.checked) pass.type = "text";
    else pass.type = "password";
}

function saveData() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("pass").value;
    localStorage.setItem("Email", email);
    localStorage.setItem("pass", password);
    alert("Đăng nhập thành công!");
}
