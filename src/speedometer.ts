export function setupSpeedometer(element: HTMLDivElement) {
  let speed: number | null = null;
  const setSpeed = (newSpeed: number | null) => {
    speed = newSpeed;
    element.innerHTML = `${speed ?? "--"} km/h`;
  };

  navigator.geolocation.watchPosition(
    (position) => {
      const { speed: newSpeed } = position.coords;
      setSpeed(newSpeed);
    },
    null,
    { enableHighAccuracy: true }
  );
}
