var persons = [];
function addPerson(namep, agep) {
    persons.push({ name: namep, age: agep });
}
function printPersons() {
    console.log(persons);
}
document.addEventListener("DOMContentLoaded", function (event) {
    var form = document.getElementById('myForm');
    form.onsubmit = function (event) {
        var myname = document.getElementById('name').value;
        var myage = document.getElementById('age').value;
        console.log(myname);
        console.log(myage);
        if (myage != null && myname != null) {
            if (/^[0-9]*$/.test(myage) && /^[A-Za-z\s]*$/.test(myname)) {
                alert('Valores introducidos correctamente');
                addPerson(myname, myage);
            }
            else {
                alert('Valores incorrectos');
            }
        }
        else {
            alert('Algun Campo Vacio');
        }
        return false;
    };
    var printt = document.getElementById('buttonPrint');
    printt.addEventListener('click', printPersons);
});
