document.body.onload = load;

function load(){
    let div = document.getElementById("demo");
	let data = email_S.getHeader(0, 5);

    let table = new Table(div, "demo_table", data);
    table.func_drawListElement = function(mail, index, listElement) {
        let output = document.createElement("p");
        output.innerText = mail.from;
        listElement.appendChild(output);

        let output1 = new DOMElement(null, "p", listElement);
        output1.Cla
        output1.innerHTML = mail.from;
    }
    table.draw();


    new Example();
}