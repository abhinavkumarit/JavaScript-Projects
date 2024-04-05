let EmployeeDetails={
    name:"abhinav",
    age:24,
    designation:"Developer",

    address:{
        state:"Karnatka",
        city:"Banglore",
        pin:50062
    }

}
let newEmpDetails=JSON.parse(JSON.stringify(EmployeeDetails));
newEmpDetails.address.state="Kerla"
console.log(newEmpDetails.address.state);
console.log(EmployeeDetails.address.state);  // as it doesnt affect to original array.

console.log(EmployeeDetails);
