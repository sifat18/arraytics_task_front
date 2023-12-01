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

<!-- // in the drive code section we are passing parameters so included the parameter here and to get a clear idea of the report format and  what the report  is about by adding the this.name -->

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

#### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
