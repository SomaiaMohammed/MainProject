import { Button, Input, Alert } from "./libs/SubModulesProject/index.js";

const app = document.getElementById("app");

app.appendChild(Button("Click Me"));
app.appendChild(Input("Enter name"));
app.appendChild(Alert("Error happened!"));
