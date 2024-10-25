'use client'
import { workouts } from '@/data/workouts';
import styles from '../styles/workout.module.css';

const WorkoutDetailsPage = ({id}: {id: string}) => {
  const workoutId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id || '0');

  console.log('workoutId', workoutId);
  
  
  const workout = workouts.find((w) => w.id === workoutId);

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1>{workout.title}</h1>
      {workout.exercises.map((exercise) => (
        <div key={exercise.id} className={styles.exerciseCard}>
          <h2>{exercise.title}</h2>
          <p>Machine Type: {exercise.machine_type}</p>
          <p>Video: {exercise.video_url || 'No video available'}</p>
          <h3>Repetitions:</h3>
          <ul>
            {exercise.repetitions.map((rep, index) => (
              <li key={index}>
                {rep.type === 'drop' ? 'Drop Set: ' : ''}
                {rep.weight ? `${rep.weight} - ${rep.count} reps` : `${rep.count} reps`}
                {rep.type === 'drop' && rep.repetitions && (
                  <ul>
                    {rep.repetitions.map((dropRep, dropIndex) => (
                      <li key={dropIndex}>
                        {`${dropRep.weight} - ${dropRep.count} reps`}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutDetailsPage;
