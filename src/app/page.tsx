import Link from "next/link";

export default function Home() {
  return (
    <div >
        <Link href='/workouts' > 
        <p> Go to the workouts page</p>
        </Link>
    </div>
  );
}
