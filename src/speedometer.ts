export function setupSpeedometer(element: HTMLDivElement) {
  let speed: number | null = null;
  const setSpeed = (newSpeed: number | null) => {
    speed = newSpeed;
    element.innerHTML = `${speed ?? "--"} km/h`;
  };

  const updateSpeed = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { speed: newSpeed } = position.coords;
        if (newSpeed === null) {
          setSpeed(null);
          return;
        }

        const speedInKMH = newSpeed * 3.6;
        setSpeed(Math.round(speedInKMH * 100) / 100);
      },
      null,
      { enableHighAccuracy: true }
    );
  };

  setInterval(updateSpeed, 1000);
}
