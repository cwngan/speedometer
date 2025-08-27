import "./style.css";
import { setupSpeedometer } from "./speedometer.ts";

setupSpeedometer(document.querySelector<HTMLDivElement>("#speed")!);
