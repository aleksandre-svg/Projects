const users = []


const signupForm = document.getElementById("sign-up")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")


function checkUserExists(username, email, phone) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username || users[i].email === email || users[i].phone === phone) {
            return true
        }
    }
    return false
}


signupForm.addEventListener("submit", function(event) {
    event.preventDefault()
    

    if (!username.value || !email.value || !phone.value || !password.value || !confirmPassword.value) {
        alert("Please fill in all fields")
        return;
    }
    

    if (password.value !== confirmPassword.value) {
        alert("Passwords don't match")
        return
    }
    

    if (checkUserExists(username.value, email.value, phone.value)) {
        alert("A user with that username, email, or phone number already exists")
        return
    }
    

    const newUser = {
        username: username.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    }
    

    users.push(newUser)
    console.log("new user added:", newUser)
    console.log("all users:", users)
    

    alert("sign up is done!")
    

    signupForm.reset()
})


const loginForm = document.getElementById("loginForm")
const loginInput = document.getElementById("loginInput")
const loginPassword = document.getElementById("loginPassword")
function checkLogin(email, password) {
    for (var i = 0; i < users.length; i++) {
        if ((users[i].username === email || users[i].email === email) && users[i].password === password) {
            return users[i]
        }
    }
    return false
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault()
    

    if (!loginInput.value || !loginPassword.value) {
        alert("Please enter your username/email and password")
        return
    }
    

    let loggedInUser = checkLogin(loginInput.value, loginPassword.value)
    if (loggedInUser) {
        alert("login is done! Welcome back, " + loggedInUser.username)
        location.replace("index2.html")
    } else {
        alert("Invalid username/email or password")
    }
    

    loginForm.reset()
})

console.log(users)
