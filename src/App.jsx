import { useRef, useState } from "react";
import "./App.css";

function App() {
  const celsiusRef = useRef();
  const fahrenheitRef = useRef();
  const kelvinRef = useRef();
  const [tempValue, setTempValue] = useState({
    celsius: "",
    fahrenheit: "",
    kelvin: "",
  });

  function handleSubmit() {
    if (celsiusRef.current.value) {
      celsiusValue();
    } else if (fahrenheitRef.current.value) {
      fahrenheitValue();
    } else if (kelvinRef.current.value) {
      kelvinValue();
    }
  }

  function celsiusValue() {
    if (celsiusRef.current.value) {
      const celsiusValue = +celsiusRef.current.value;
      setTempValue({
        celsius: celsiusValue,
        fahrenheit: ((celsiusValue * 9) / 5 + 32).toFixed(2),
        kelvin: +(celsiusValue + 273.15).toFixed(2),
      });
    }
  }

  function fahrenheitValue() {
    if (fahrenheitRef.current.value) {
      const fahrenheitValue = +fahrenheitRef.current.value;
      setTempValue({
        celsius: (((fahrenheitValue - 32) * 5) / 9).toFixed(2),
        fahrenheit: fahrenheitValue,
        kelvin: (((fahrenheitValue - 32) * 5) / 9 + 273.15).toFixed(2),
      });
    }
  }

  function kelvinValue() {
    if (kelvinRef.current.value) {
      const kelvinValue = +kelvinRef.current.value;
      setTempValue({
        celsius: (kelvinValue - 273.15).toFixed(2),
        fahrenheit: (((kelvinValue - 273.15) * 9) / 5 + 32).toFixed(2),
        kelvin: kelvinValue,
      });
    }
  }
  console.log(tempValue);

  function handleCelsiusChange() {
    setTempValue({
      celsius: celsiusRef.current.value,
      fahrenheit: "",
      kelvin: "",
    });
  }

  function handleFahrenheitChange() {
    setTempValue({
      celsius: "",
      fahrenheit: fahrenheitRef.current.value,
      kelvin: "",
    });
  }

  function handleKelvinChange() {
    setTempValue({
      celsius: "",
      fahrenheit: "",
      kelvin: kelvinRef.current.value,
    });
  }

  function handleReset(){
    setTempValue({
      celsius: "",
      fahrenheit: "",
      kelvin: "",
    })
  }

  return (
    <div className="box">
      <h1>Temperature Converter</h1>
      <div className="units">
        <div className="unitBox">
          <label>Celcius</label>
          <input
            type="number"
            ref={celsiusRef}
            value={tempValue.celsius}
            onChange={handleCelsiusChange}
          />
        </div>
        <div className="unitBox">
          <label>Fahrenheit</label>
          <input
            type="number"
            ref={fahrenheitRef}
            value={tempValue.fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </div>
        <div className="unitBox">
          <label>Kelvin</label>
          <input
            type="number"
            ref={kelvinRef}
            value={tempValue.kelvin}
            onChange={handleKelvinChange}
          />
        </div>
      </div>
      <button onClick={handleSubmit} className="submit">Submit</button>
      <button onClick={handleReset} className="reset">reset</button>
    </div>
  );
}

export default App;
