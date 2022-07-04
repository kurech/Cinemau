async function GetUser() {
    const response = await fetch("/api/users", {
        method: "GET",
        headers:
        {
            "Accept": "application/json"
        }
    });
}

function EditCon() {
    document.forms["setCon"].addEventListener("submit", e => {
        e.preventDefault();
        alert("Данные успешно изменены!");
        const form = document.forms["setCon"];
        const userEmail = form.elements["Email"].value;
        const userPhone = form.elements["Phone"].value;
        fetch("/api/users/" + userId, {
            method: "PUT",

            headers: {
                "Accept": "application/json", "Content-Type":
                    "application/json"
            },
            body: JSON.stringify({
                id: parseInt(userId, 10),
                email: userEmail,
                phone: userPhone
            })
        });
        
    });
    document.forms["setPas"].addEventListener("submit", e => {
        e.preventDefault();
        alert("Данные успешно изменены!");
        const form = document.forms["setCon"];
        const userEmail = form.elements["Email"].value;
        const userPhone = form.elements["Phone"].value;
        fetch("/api/users/" + userId, {
            method: "PUT",

            headers: {
                "Accept": "application/json", "Content-Type":
                    "application/json"
            },
            body: JSON.stringify({
                id: parseInt(userId, 10),
                email: userEmail,
                phone: userPhone
            })
        });

    });
}

function InitialFunction() {
    document.forms["userForm"].addEventListener("submit", e => {
        e.preventDefault();
        const form = document.forms["userForm"];
        const email = form.elements["Email"].value;
        const phone = form.elements["Phone"].value;
        const password = form.elements["Password"].value;
        fetch("api/users", {
            method: "POST",
            headers: {
                "Accept": "application/json", "Content-Type":
                    "application/json"
            },
            body: JSON.stringify({
                email: email,
                phone: phone,
                password: password
            })
        });
    });
}


function AuthFunction() {
    document.forms["authForm"].addEventListener("submit", e => {
        e.preventDefault();
        const form = document.forms["authForm"];
        const email = form.elements["Email"].value;
        const password = form.elements["Password"].value;
        fetch("/api/users", {
            method: "GET",
            headers:
            {
                "Accept": "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            let flag = false;
            data.forEach(el => {
                if (el.email == email && el.password == password) {
                    flag = true;
                }
            })
            if (flag == true) {
                alert("Авторизирован");
                window.location.href = 'main2.html';
                return 1;
            }
            else {
                alert("Неавторизирован");
                return 2;
            }
        });
    });
}

function accFunc(email) {
    const $elem = document.querySelector('#ema');
    $elem.textContent = email; // "Некоторый текст"
    console.log(email);
}