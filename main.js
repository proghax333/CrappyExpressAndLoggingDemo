

window.onload = async function() {
  const percent = (await navigator.getBattery()).level * 100;
  const res = await fetch(`http://localhost:5000/api/sendBattery?percent=${percent}`);
}
