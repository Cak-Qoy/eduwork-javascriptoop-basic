class Table {
    constructor(init) {
      this.init = init;
    }
  
    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
          </tr>
        `;
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
  }
  
  const table = new Table({
    columns: ["First Name", "Last Name", "Email"],
    data: [
      ["Abdul", "Qoyyum", "abdulqoyyum2020@gmail.com"],
      ["Edi", "Nugroho", "edinugroho@gmail.com"],
      ["Joko", "Santoso", "jokosantoso@gmail.com"]
    ]
  });
  const app = document.getElementById("app");
  table.render(app);




// class Person {
//     firstName = ''
//     lastName = ''
//     email = ''

//     constructor (firstName, lastName, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//     }

//     render() {
//         let app = document.getElementById('app');
        
//         app.textContent = this.firstName + '    ' + this.lastName + '   ' + this.email;
//     }

// }

// let person1 = new Person('abdul', 'qoyyum', 'abdulqoyyum2020@gmail.com');
// let person2 = new Person('adi', 'nugroho', 'adinugroho@gmail.com');


// person1.render();
// person2.render();