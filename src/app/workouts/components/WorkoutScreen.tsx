// /src/app/workouts/page.js
import styles from '@/app/workouts/styles/workout.module.css';
import { workouts } from '@/data/workouts';
import Link from 'next/link';

export default function WorkoutsPage() {
  return (
    <div className={styles.workoutsContainer}>
      <h1>Workouts</h1>
      <div className={styles.cardContainer}>
        {workouts.map((workout) => (
          <Link key={workout.id} href={`/workouts/${workout.id}`}>
            <div className={styles.card}>
              <h2>{workout.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
