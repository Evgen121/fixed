function sendEmail(name, email, message, recaptcha) {
    fetch('https://daladit.com/magic/modules/4k-util/send-email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            message,
            recaptcha
        })
    })
        .then(responce => responce.json())
        .then(responce => {
            if(!responce?.success){
                throw new Error("Bad request")
            }
        })
        .then(() => {
            var el = document.getElementById('form');
            el.className = "fade-out";
        }).catch((err)=>{
            console.log(err)
        })
}


function onSubmit() {
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LfVd20fAAAAAC2tcJ55RvOEkraQL390cDw2yiT2", { action: "submit" })
        .then(function (token) {
          sendEmail(
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("message").value,
            token
          );
        });
    });
  

    return false;
}