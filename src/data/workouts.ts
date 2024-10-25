export const workouts = [
  {
    id: 1,
    title: "Shoulders and Abs",
    exercises: [
      {
        id: 1,
        title: "Seated Dumbbell Shoulder Press",
        machine_type: "Dumbbells",
        video_url: "", // URL for a video demonstrating the exercise
        repetitions: [
          {
            weight: "15kg",
            type: "normal", // Corrected spelling from "nomal" to "normal"
            count: "20",
          },
          {
            weight: "20kg",
            type: "normal",
            count: "15",
          },
          {
            weight: "25kg",
            type: "normal",
            count: "12",
          },
          {
            type: "drop", // Indicates a drop set
            repetitions: [
              {
                weight: "20kg",
                count: "10",
              },
              {
                weight: "17.5kg",
                count: "10",
              },
              {
                weight: "15kg",
                count: "10",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Seated Dumbbell Arnold Press",
        machine_type: "Dumbbells",
        video_url: "",
        repetitions: [
          {
            weight: "12.5kg",
            type: "normal",
            count: "15",
          },
          {
            weight: "15kg",
            type: "normal",
            count: "15",
          },
          {
            weight: "17.5kg",
            type: "normal",
            count: "12",
          },
          {
            weight: "17.5kg",
            type: "normal",
            count: "12",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Legs",
    exercises: [
      {
        id: 1,
        title: "Leg Press",
        machine_type: "Machine",
        video_url: "",
        repetitions: [
          {
            weight: "100kg",
            type: "normal",
            count: "20",
          },
          {
            weight: "120kg",
            type: "normal",
            count: "15",
          },
          {
            weight: "140kg",
            type: "normal",
            count: "12",
          },
          {
            weight: "160kg",
            type: "normal",
            count: "10",
          },
        ],
      },
      {
        id: 4,
        title: "Leg Extension",
        machine_type: "Machine",
        video_url: "",
        repetitions: [
          {
            weight: "30kg",
            type: "normal",
            count: "20",
          },
          {
            weight: "40kg",
            type: "normal",
            count: "15",
          },
          {
            weight: "50kg",
            type: "normal",
            count: "12",
          },
          {
            weight: "60kg",
            type: "normal",
            count: "10",
          },
        ],
      },
    ],
  }
];
