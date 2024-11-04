if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 


function Work() {
    let cislo1;
    let cislo2;
    var operace;
    let output;
    event.preventDefault();
    document.getElementById("911").hidden = true;
    try {

         cislo1 = parseFloat(document.getElementById('cislo1').value);
         var e = document.getElementById('operace');
         operace = e.value;
         cislo2 = parseFloat(document.getElementById('cislo2').value);
    } catch (error) {
        console.log('Nefunnguje to', error);
    }
    if (isNaN(cislo1) || isNaN(cislo2)) {
        document.getElementById('Vysledek').innerText = "Invalid input";
        console.log("Invalid input detected");
        return;
    }
    
    


switch (operace) {
    case "+":
        output = cislo1 + cislo2;
        document.getElementById('Vysledek').innerText = output;
        break;
    case "-":
        output = cislo1 - cislo2;
        document.getElementById('Vysledek').innerText = output;
        break;
    case "*":
        output = cislo1 * cislo2;
        document.getElementById('Vysledek').innerText = output;
        break;
    case "/":
        if (cislo1 == 9 && cislo2 == 11) {
            document.getElementById("911").hidden = false;
            document.getElementById('Vysledek').innerText = "They hit the second tower 💀";
            return;
        }
        if (cislo2 == 0) {
            document.getElementById('Vysledek').innerText = "Chuj nedel nulou";
            
        }
        else
        {
            output = cislo1 / cislo2;
            document.getElementById('Vysledek').innerText = output;
        }
        break;
    default:
        document.getElementById('Vysledek').innerText = "Invalid input";
        break;
    }
}  