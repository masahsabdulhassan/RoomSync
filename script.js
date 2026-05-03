function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Login system still in progress");
    window.location.href = "dashboard.html";
    return false;
}

function filterUsers() {
    let filter = document.getElementById("filter").value;
    let users = document.querySelectorAll(".user");

    users.forEach(user => {
        if (filter === "all" || user.dataset.clean === filter) {
            user.style.display = "block";
        } else {
            user.style.display = "none";
        }
    });
}