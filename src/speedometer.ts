export function setupSpeedometer(element: HTMLDivElement) {
  let speed: number | null = null;
  const setSpeed = (newSpeed: number | null) => {
    speed = newSpeed;
    element.innerHTML = `${speed ?? "--"} km/h`;
  };

  let clearSpeedTimeout: number | undefined;

  navigator.geolocation.watchPosition(
    (position) => {
      if (clearSpeedTimeout !== undefined) clearTimeout(clearSpeedTimeout);

      const { speed: newSpeed } = position.coords;
      if (newSpeed === null) {
        setSpeed(null);
        return;
      }

      const speedInKMH = newSpeed * 3.6;
      setSpeed(Math.round(speedInKMH * 100) / 100);

      clearSpeedTimeout = setTimeout(() => setSpeed(null), 5000);
    },
    () => setSpeed(null),
    { enableHighAccuracy: true }
  );
}
