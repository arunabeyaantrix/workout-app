import WorkoutDetailsScreen from "@/app/workouts/components/WorkoutDetailsScreen";

const Page = ({params}: {params: {id: string}}) => {

  return (
    <div>
      <WorkoutDetailsScreen id={params.id}/>
    </div>
  )
}

export default Page
