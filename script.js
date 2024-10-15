function sayHello(firstname, hour)
{
    let matin = "Bonjour", soir = "Bonsoir";

    if (hour < 18)
        message = `${matin} ${firstname} !`;
    else
        message = `${soir} ${firstname} !`;
    document.querySelector('h1').innerText = message;
}

sayHello(prompt("Entre un prénom."), 17);
