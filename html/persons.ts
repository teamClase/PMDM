interface Person {
    name: string,
    age: string
}
let persons: Person[] = [];
function addPerson(namep: string, agep: string) {
    persons.push({ name: namep, age: agep });
}
function printPersons() {
    console.log(persons);
}


document.addEventListener("DOMContentLoaded", function (event) {
    let form = <HTMLFormElement>document.getElementById('myForm');
    form.onsubmit = (event: any) => {

        let myname = (<HTMLInputElement>document.getElementById('name')).value;
        let myage = (<HTMLInputElement>document.getElementById('age')).value;
        console.log(myname);
        console.log(myage);
        if (myage != null && myname != null) {
            if (/^[0-9]*$/.test(myage) && /^[A-Za-z\s]*$/.test(myname)) {
                alert('Valores introducidos correctamente');
                addPerson(myname, myage);
            } else {
                alert('Valores incorrectos');
            }
        } else {
            alert('Algun Campo Vacio');
        }
        return false;
    }
    let printt = <HTMLElement>document.getElementById('buttonPrint');
    printt.addEventListener('click', printPersons);

});

