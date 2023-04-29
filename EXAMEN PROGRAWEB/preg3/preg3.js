function calcularTemperatura() {
    const temperatura = document.getElementById("temperatura");
    const celsius = document.getElementById("celsius");
    const fahrenheit = document.getElementById("fahrenheit");
    
    if (celsius.checked) {
      const celsius = parseFloat(temperatura.value);
      const fahrenheit = (celsius * 9/5) + 32;
      alert(`La temperatura calculada es ${fahrenheit.toFixed(2)} °F`);
    } else if (fahrenheit.checked) {
      const fahrenheit = parseFloat(temperatura.value);
      const celsius = (fahrenheit - 32) * 5/9;
      alert(`La temperatura calculada es ${celsius.toFixed(2)} °C`);
    } else {
      alert("Por favor elija una unidad de temperatura.");
    }
}