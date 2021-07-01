
const API_BASE_URL = 'YOUR_URL_HERE';

window.onload = async function() {
  const percent = (await navigator.getBattery()).level * 100;
  const res = await fetch(`${API_BASE_URL}/api/sendBattery?percent=${percent}`);
}
