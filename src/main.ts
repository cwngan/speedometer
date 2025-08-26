import "./style.css";
import { setupSpeedometer } from "./speedometer.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Speedometer</h2>
    <h3>Current Speed</h3>
    <h1 id="speed">-- km/h</h1>
  </div>
`;

setupSpeedometer(document.querySelector<HTMLDivElement>("#speed")!);
