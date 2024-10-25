// Import necessary styles and data
import styles from '@/app/workouts/styles/workout.module.css';
import { countDowns } from '@/data/countdown';
import React, { useEffect, useState } from 'react';

// Types for the countdown
type CountDown = {
  id: string;
  title: string;
  endDate: string;
};

type CountDownCardProps = {
  countdown: CountDown;
};

const CountDownCard: React.FC<CountDownCardProps> = ({ countdown }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const endDate = new Date(countdown.endDate);
    const diffInMs = endDate.getTime() - now.getTime();

    if (diffInMs <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    return {
      days: diffInDays,
      hours: diffInHours % 24,
      minutes: diffInMinutes % 60,
      seconds: diffInSeconds % 60,
    };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={styles.card}>
      <h2>{countdown.title}</h2>
      <p>{`Remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`}</p>
    </div>
  );
};

export default function CountDownScreen() {
  return (
    <div className={styles.workoutsContainer}>
      <h1>Days remaining</h1>
      <div className={styles.cardContainer}>
        {countDowns.map((countDown: CountDown) => (
          <React.Fragment key={countDown.id}>
            <CountDownCard countdown={countDown} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
