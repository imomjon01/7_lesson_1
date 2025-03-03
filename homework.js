let students = [];
let editIndex = null;

function addOrUpdate(event) {
    event.preventDefault();

    let student = {
        id: document.getElementById("id").value.trim(),
        firstName: document.getElementById("first_name").value.trim(),
        lastName: document.getElementById("last_name").value.trim(),
        age: document.getElementById("age").value.trim(),
        gender: document.getElementById("gender").value,
        faculty: document.getElementById("faculty").value
    };

    if (!student.id || !student.firstName || !student.lastName || !student.age || !student.gender || !student.faculty) {
        alert("Please fill out all fields!");
        return;
    }

    if (editIndex === null) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = null;
        document.getElementById("form-title").innerText = "Add Student";
        document.getElementById("submit-btn").innerText = "Add Student";
    }

    draw();
    event.target.reset();
}

function draw() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    students.forEach((student, index) => {
        let row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.age}</td>
                <td>${student.gender === "Male" ? "Male" : "Female"}</td>
                <td>${student.faculty}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="edit(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="remove(${index})">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function remove(index) {
    students.splice(index, 1);
    draw();
}

function edit(index) {
    let student = students[index];
    document.getElementById("id").value = student.id;
    document.getElementById("first_name").value = student.firstName;
    document.getElementById("last_name").value = student.lastName;
    document.getElementById("age").value = student.age;
    document.getElementById("gender").value = student.gender;
    document.getElementById("faculty").value = student.faculty;

    editIndex = index;
    document.getElementById("form-title").innerText = "Edit Student";
    document.getElementById("submit-btn").innerText = "Update Student";
}
