const table = document.querySelector('tbody');
const defaultApi = 'http://localhost:3000/students/';
const firstNameField = document.querySelector('input#firstName');
const lastNameField = document.querySelector('input#lastName');
const form = document.querySelector('form');
let editId;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    var employee = {
        firstName: firstNameField.value,
        lastName: lastNameField.value,
    }
    if (editId) {
        console.log(employee);
        await fetch(defaultApi+editId, {
            method: 'PUT',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
        editId = null;
        firstNameField.value = '';
        lastNameField.value = '';
    }
    else {
        await fetch(defaultApi, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    firstNameField.value = '';
    lastNameField.value = '';
    table.innerHTML = '';
    loadStudents();
})


function editStudent(student){
    console.log(`Editing id: ${ student.id }`);
    editId = student.id;
    firstNameField.value = student.firstName;
    lastNameField.value = student.lastName;
}
async function deleteStudent(student){
    console.log(`Deleting id: ${ student.id }`);
    let url = defaultApi + student.id;
    await fetch(url, {
        method: 'DELETE',
    });
    table.innerHTML = '';
    loadStudents();
}
async function loadStudents(){
    try{
        let students;
        const response = await fetch(defaultApi);
        students = await response.json();
        let tr;
        students.forEach(student => {
            tr = document.createElement('tr');
            tr.innerHTML = `<td>${student.firstName}</td><td>${student.lastName}</td>`;
            let td = document.createElement('td');
            let editButton = document.createElement('button');
            editButton.innerText = 'Upravit';
            editButton.classList.add('btn', 'btn-warning', 'btn-sm');
            editButton.addEventListener('click', () => {
                editStudent(student);
            })
            td.appendChild(editButton);
            let deleteButton = document.createElement('button');
            deleteButton.innerText = 'Smazat';
            deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
            deleteButton.addEventListener('click', () => {
                deleteStudent(student);
            })
            td.appendChild(deleteButton);
            tr.appendChild(td);
            table.appendChild(tr);
        })
    }
    catch(err){
        console.log(err);
    }
}
loadStudents();