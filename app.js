let table = document.getElementById("employeesTable");
let openFormButton = document.getElementById("openFormButton");
let deleteButton = document.getElementById("deleteButton");
let formContainer = document.getElementById("formContainer");
let submitEmployeeButton = document.getElementById("submitEmployeeButton");

openFormButton.addEventListener("click", () => {
    formContainer.style.display = "block";
});

submitEmployeeButton.addEventListener("click", () => {
    let name = document.getElementById("employeeName").value;
    let age = document.getElementById("employeeAge").value;
    let phone = document.getElementById("employeePhone").value;
    let address = document.getElementById("employeeAddress").value;

    if (name && age && phone && address) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${phone}</td>
            <td>${address}</td>
        `;
        table.appendChild(row);

        document.getElementById("employeeName").value = "";
        document.getElementById("employeeAge").value = "";
        document.getElementById("employeePhone").value = "";
        document.getElementById("employeeAddress").value = "";
        formContainer.style.display = "none";
    } else {
        alert("Please fill in all fields.");
    }
});

deleteButton.addEventListener("click", () => {
    let rows = table.getElementsByTagName("tr");
    if (rows.length > 1) {
        table.deleteRow(rows.length - 1);
    } else {
        alert("No employees to delete.");
    }
});