function Employee(name, jobTitle, salary, status="full-time"){
    this.name = name
    this.job = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        return "Hello," + this.name + " welcome to the company!"
    }
}

var employees = []

// var Bob = new employee("Bob", "Engineer", 125000)
employees.push(new Employee("Bob", "Engineer", 125000), new Employee("Rick", "Janitor", 25000, "part-time"),new Employee("Jen", "CTO", 153000))

// console.log(employees[0].printEmployeeForm())
// console.log(employees);

for (var i = 0; i < employees.length; i++){
    console.log(employees[i].printEmployeeForm())
}

