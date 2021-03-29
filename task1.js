function createInputField(title, type, inputClass) {
    const container = document.createElement("div");
    container.className = "input-field";

    const span = document.createElement("span");
    span.className = "input-title"
    span.innerText = title;

    const input = document.createElement("input");
    input.type = type;
    input.className = inputClass;

    container.appendChild(span);
    container.appendChild(input);

    return { container, input };
}

function createButton(text) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "btn";
    button.innerText = text;

    return button;
}


function createForm() {
    const form = document.createElement("form");
    form.className = "login-form";

    const emailElements = createInputField("Email", "text", "email-valid");
    const passwordElements = createInputField("Password", "password", "password-valid");
    const loginButton = createButton("Login");
            loginButton.disabled = true
            loginButton.classList.add("invalid-button")


    form.addEventListener("keyup", function () {
        const email = emailElements.input.value;
        const password = passwordElements.input.value;

        const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const regPassword = /(?=.*[0-9])(?=.*[@$#!?&])(?=.*[a-z])[0-9a-z@$#!?&]{8,}/;

        if (regEmail.test(email) === false) {
            document.querySelector(".email-valid").classList.add("invalid");
        } else if (regEmail.test(email) === true) {
            document.querySelector(".email-valid").classList.remove("invalid");
        };
        if (regPassword.test(password) === false) {
            document.querySelector(".password-valid").classList.add("invalid");
        } else if (regPassword.test(password) === true) {
            document.querySelector(".password-valid").classList.remove("invalid")
        };
        if(regEmail.test(email) === true && regPassword.test(password) === true){
            loginButton.disabled = false;
            loginButton.classList.remove("invalid-button")
        }else{
            loginButton.disabled = true
            loginButton.classList.add("invalid-button")
        }
    })

    loginButton.addEventListener("click", function () {

        const email = emailElements.input.value;
        const password = passwordElements.input.value;

        console.log(JSON.stringify(`Email: ${email}, password: ${password}`));

        emailElements.input.value = "";
        passwordElements.input.value = ""
    });


    form.appendChild(emailElements.container);
    form.appendChild(passwordElements.container);
    form.appendChild(loginButton);

    return form;
}

const form = createForm();
document.body.appendChild(form);