import { useEffect, useState } from "react";
import './css/counter.css';

function Counter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(true);

  const countDown = () => {
    const endDate = new Date("February 8, 2022 20:00:00").getTime();
    const today = new Date().getTime();
    const timeDiff = endDate - today;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    let timeDays = Math.floor(timeDiff / d);
    let timeHours = Math.floor((timeDiff % d) / h);
    let timeMinutes = Math.floor((timeDiff % h) / m);
    let timeSeconds = Math.floor((timeDiff % m) / s);

    timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
  };

  useEffect(() => {
    const id = setInterval(countDown, 1000);
    setLoading(false);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="counter-color ">
          <div className="counter-container container-fluid py-5">
            <div className="countdown">
              <article>
                <p>{days}</p>
                <h3 className="text -white">Days</h3>
              </article>
              <article>
                <p>{hours}</p>
                <h3 className="text- white">Hours</h3>
              </article>
              <article>
                <p>{minutes}</p>
                <h3 className="text-w hite">Minutes</h3>
              </article>
              <article>
                <p>{seconds}</p>
                <h3 className="text-wh ite">Seconds</h3>
              </article>

            </div>
            <h1>Mint A Mystic Alien NFT Today And Enjoy The Passive Income And All The Other Cool Benefits </h1>
          </div>
        </section>
      )}
    </>
  );
}

export default Counter;
