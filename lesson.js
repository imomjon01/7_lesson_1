let arr = [];


function add(event) {
    event.preventDefault();
    let obj = {
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        age: event.target[2].value
    }
    arr.push(obj)
    draw()
    event.target.reset();
}

function draw() {
    let tbody = document.getElementById("tbody");
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += `<tr>
           <td>
               ${arr[i].firstName}
           </td>  <td>
               ${arr[i].lastName}
           </td>  <td>
               ${arr[i].age}
           </td>
       </tr>`
    }
    tbody.innerHTML = s;
}