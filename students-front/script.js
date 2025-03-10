const table = document.querySelector('tbody');

async function loadStudents(){
    try{
        let students;
        let url = 'http://localhost:3000/students';
        const response = await fetch(url);
        students = await response.json();
        let tr;
        let i = 0;
        students.forEach(student => {
            tr = document.createElement('tr');
            tr.innerHTML = `<th>${++i}</th><td>${student.firstName}</td><td>${student.lastName}</td>`;
            table.appendChild(tr);
        })
    }
    catch(err){
        console.log(err);
    }
}
loadStudents();