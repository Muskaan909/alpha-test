// var form = document.getElementById("data-form");
// function handleForm(event) { event.preventDefault(); }
// form.addEventListener('submit', handleForm);

// called on submit
function GetValues() {
    let packet = {
        "productname": document.getElementById("productname").value,
        "measurement": document.getElementById("measurement").value,
        "price": document.getElementById("price").value,
        "description": document.getElementById("description").value
    }

    // Clear the storage if problem occurs
    // localStorage.clear();

    let data = localStorage.getItem("data")
    // console.log(localStorage.getItem("data"))
    if (data === null) {
        data = [packet]
        localStorage.setItem("data", JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem("data")))
    }
    else {
        data = JSON.parse(localStorage.getItem("data"))
        data.push(packet)
        localStorage.setItem("data", JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem("data")))
    }
}