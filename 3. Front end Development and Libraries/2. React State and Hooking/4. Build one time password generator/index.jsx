const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  
  const [otp, setOTP] = useState(null)
  const [time, setTime] = useState(null)
  const [counting, setCounting] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!counting) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTime(null);
          setCounting(false);
          setFirstTime(false)
          return 0;
        }else{
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [counting]);

  function generateNewOTP(){
    const code = Math.floor(100000 + Math.random() * 900000);
    setOTP(code);
    setTime(5);
    setCounting(true);
  }
  


  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{!counting ? "Click 'Generate OTP' to get a code" : otp.toString()}</h2>
      <p id="otp-timer" aria-live="assertive">{time != null ? `Expires in: ${time} seconds` : firstTime ? "" : "OTP expired. Click the button to generate a new OTP."}</p>
      <button disabled={counting} onClick={generateNewOTP} id="generate-otp-button">Generate OTP</button>
    </div>
  )

};