// header funtionality 

const x = document.getElementById("nav");
const y = document.getElementById("bt");

async function MenuBurger(b=true){
    
    if(x.className === "" || !b){

       // x.className += " responsive";
       x.classList.add("responsive");

       y.disabled = true;
       y.style.cursor = "not-allowed"

       for(let i = 48; i < 410; i += 5){

            x.style.height = i + "px";

            await Delay(1);

       }

       x.style.height = "409px";
       y.disabled = false;
       y.style.cursor = "pointer"

    }

    else
    {

        y.disabled = true;
        y.style.cursor = "not-allowed"

        for(let i = 409; i > 48; i -= 5){

            x.style.height = i + "px";

            await Delay(1);

        }

        x.style.height = "48px";

        x.className = "";

        y.disabled = false;
        y.style.cursor = "pointer"

    }

}

const As = document.querySelectorAll("a");

As.forEach(AT => {

    AT.addEventListener("click", () => {

        MenuBurger(true);

    });

});