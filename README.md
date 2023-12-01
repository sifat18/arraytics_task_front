## Shopping Application

- JWT based Authorization system
- Admin Can create new Items
- Client users can order Items
- Admin Can view All users list and delete user
- All field based filter and searching system
- dockarization of backend and frontend
- [server](https://github.com/sifat18/arraytics_task_backend)
- [server_docker](https://hub.docker.com/repository/docker/ibnsifat/arraytics_backend/general)
- [client_docker](https://hub.docker.com/repository/docker/ibnsifat/arraytics_front/general)
- admin credentials admin@admin.com - 123456
- client credentials demo@gmail.com - 123456
-

## Code Optimization

class Car {

  <!-- // The constructor will take a 'name' parameter to set the car name otherwise it will be hard to identify distinct car object. -->

constructor(name) {
this.name = name;
}

  <!-- //  the 'name' property, should be initialized within the constructor thats its removed from here -->

printName() {
console.log("Car name: " + this.name);
}

printAssembly() {
console.log("The Tesla Car finishes assembly every Friday at 5pm.");
}
}

class TeslaCar extends Car {

  <!-- // as TeslaCar is a child of Car so to access parents constructor to give it a distinct name we call the super function with the name -->

constructor(name) {
super(name);
}

<!-- // in the driver code section we are passing parameters so included the parameter here and to get a clear idea of the report format and  what is the report about by adding the this.name -->

generateAssemblyReports(reportFormat) {
console.log("Generating assembly reports for " + this.name + "...");
console.log("Exporting " + reportFormat + " format reports...");
console.log("Printing reports...");
}
}

// Driver code
const myCar = new TeslaCar("Model_3");
myCar.printName();
myCar.generateAssemblyReports("Excel");
