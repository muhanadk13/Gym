const buttons = document.querySelectorAll('.day-button');
let selectedDays = [];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        const day = button.getAttribute('data-day');

        if (button.classList.contains('selected')) {
            selectedDays.push(day);
        } else {
            selectedDays = selectedDays.filter(d => d !== day);
        }
    });
});

const submitButton = document.getElementById('submitButton');
const resultDiv = document.getElementById('result');

submitButton.addEventListener('click', () => {
    const times = selectedDays.length;
    let message = '';
    
let oneDay = "Full Body Workout Routine:\n" +
"Squats: 3 sets of 10-15 reps\n" +
"Push-Ups: 3 sets of 8-12 reps\n" +
"Bent-Over Rows: 3 sets of 10-15 reps\n" +
"Plank: 3 sets of 30-60 seconds\n" +
"Lunges: 3 sets of 10 reps per leg\n" +
"Overhead Dumbbell Press: 3 sets of 10-12 reps\n" +
"Deadlifts: 3 sets of 10-15 reps";

    
let twoDay = "Full Body Workout Routine:\n" +
"Upper Body Workout Routine:\n" +
"Bench Press: 3 sets of 8-12 reps\n" +
"Pull-Ups: 3 sets of 6-10 reps\n" +
"Dumbbell Shoulder Press: 3 sets of 10-12 reps\n" +
"Bent-Over Dumbbell Rows: 3 sets of 10-15 reps\n" +
"Tricep Dips: 3 sets of 8-12 reps\n" +
"Bicep Curls: 3 sets of 10-15 reps\n\n" + // Two vertical spaces
"Lower Body Workout Routine:\n" +
"Squats: 3 sets of 10-15 reps\n" +
"Deadlifts: 3 sets of 8-12 reps\n" +
"Leg Press: 3 sets of 10-15 reps\n" +
"Lunges: 3 sets of 10 reps per leg\n" +
"Calf Raises: 3 sets of 12-15 reps\n" +
"Plank: 3 sets of 30-60 seconds";
    
let threeDay ="Push Workout Routine:\n" +
"Bench Press: 3 sets of 8-12 reps\n" +
"Overhead Dumbbell Press: 3 sets of 10-12 reps\n" +
"Incline Dumbbell Flyes: 3 sets of 10-15 reps\n" +
"Tricep Dips: 3 sets of 8-12 reps\n" +
"Lateral Raises: 3 sets of 10-15 reps\n\n" + // Two vertical spaces
"Pull Workout Routine:\n" +
"Pull-Ups: 3 sets of 6-10 reps\n" +
"Bent-Over Barbell Rows: 3 sets of 10-12 reps\n" +
"Dumbbell Bicep Curls: 3 sets of 10-15 reps\n" +
"Face Pulls: 3 sets of 12-15 reps\n" +
"Deadlifts: 3 sets of 8-12 reps\n\n" + // Two vertical spaces
"Leg Workout Routine:\n" +
"Squats: 3 sets of 10-15 reps\n" +
"Leg Press: 3 sets of 10-15 reps\n" +
"Lunges: 3 sets of 10 reps per leg\n" +
"Calf Raises: 3 sets of 12-15 reps\n" +
"Plank: 3 sets of 30-60 seconds";

let fourDay = "Push Workout Routine:\n" +
"Bench Press: 3 sets of 8-12 reps\n" +
"Overhead Dumbbell Press: 3 sets of 10-12 reps\n" +
"Incline Dumbbell Flyes: 3 sets of 10-15 reps\n" +
"Tricep Dips: 3 sets of 8-12 reps\n" +
"Lateral Raises: 3 sets of 10-15 reps\n\n" + // Two vertical spaces
"Pull Workout Routine:\n" +
"Pull-Ups: 3 sets of 6-10 reps\n" +
"Bent-Over Barbell Rows: 3 sets of 10-12 reps\n" +
"Dumbbell Bicep Curls: 3 sets of 10-15 reps\n" +
"Face Pulls: 3 sets of 12-15 reps\n" +
"Deadlifts: 3 sets of 8-12 reps\n\n" + // Two vertical spaces
"Leg Workout Routine:\n" +
"Squats: 3 sets of 10-15 reps\n" +
"Leg Press: 3 sets of 10-15 reps\n" +
"Lunges: 3 sets of 10 reps per leg\n" +
"Calf Raises: 3 sets of 12-15 reps\n" +
"Plank: 3 sets of 30-60 seconds\n\n" + // Two vertical spaces
"Cardio Workout Routine:\n" +
"30 minutes of running or cycling at moderate intensity\n" +
"15 minutes of HIIT (sprints, burpees, etc.)\n" +
"Cool down with 10 minutes of stretching";



let fiveDay ="Push Workout Routine:\n" +
"Bench Press: 3 sets of 8-12 reps\n" +
"Overhead Dumbbell Press: 3 sets of 10-12 reps\n" +
"Incline Dumbbell Flyes: 3 sets of 10-15 reps\n" +
"Tricep Dips: 3 sets of 8-12 reps\n" +
"Lateral Raises: 3 sets of 10-15 reps\n\n" + // Two vertical spaces
"Pull Workout Routine:\n" +
"Pull-Ups: 3 sets of 6-10 reps\n" +
"Bent-Over Barbell Rows: 3 sets of 10-12 reps\n" +
"Dumbbell Bicep Curls: 3 sets of 10-15 reps\n" +
"Face Pulls: 3 sets of 12-15 reps\n" +
"Deadlifts: 3 sets of 8-12 reps\n\n" + // Two vertical spaces
"Leg Workout Routine:\n" +
"Squats: 3 sets of 10-15 reps\n" +
"Leg Press: 3 sets of 10-15 reps\n" +
"Lunges: 3 sets of 10 reps per leg\n" +
"Calf Raises: 3 sets of 12-15 reps\n" +
"Plank: 3 sets of 30-60 seconds\n\n" + // Two vertical spaces
"Cardio Workout Routine:\n" +
"30 minutes of running or cycling at moderate intensity\n" +
"15 minutes of HIIT (sprints, burpees, etc.)\n" +
"Cool down with 10 minutes of stretching\n\n" + // Two vertical spaces
"Abs Workout Routine:\n" +
"Crunches: 3 sets of 20-25 reps\n" +
"Leg Raises: 3 sets of 15-20 reps\n" +
"Russian Twists: 3 sets of 30 reps (15 per side)\n" +
"Bicycle Crunches: 3 sets of 20-25 reps";
    

let sixDay = "Bench Press: 3 sets of 8-12 reps\n" +
"Overhead Dumbbell Press: 3 sets of 10-12 reps\n" +
"Incline Dumbbell Flyes: 3 sets of 10-15 reps\n" +
"Lateral Raises: 3 sets of 10-15 reps\n" +
"Tricep Dips: 3 sets of 8-12 reps\n\n" + // Two vertical spaces
"Pull Workout Routine:\n" +
"Pull-Ups: 3 sets of 6-10 reps\n" +
"Bent-Over Barbell Rows: 3 sets of 10-12 reps\n" +
"Dumbbell Bicep Curls: 3 sets of 10-15 reps\n" +
"Face Pulls: 3 sets of 12-15 reps\n\n" + // Two vertical spaces
"Legs Workout Routine:\n" +
"Squats: 3 sets of 10-15 reps\n" +
"Leg Press: 3 sets of 10-15 reps\n" +
"Lunges: 3 sets of 10 reps per leg\n" +
"Calf Raises: 3 sets of 12-15 reps\n\n" + // Two vertical spaces
"Chest/Back Workout Routine:\n" +
"Flat Dumbbell Bench Press: 3 sets of 8-12 reps\n" +
"Dumbbell Flyes: 3 sets of 10-15 reps\n" +
"Lat Pulldowns: 3 sets of 10-12 reps\n" +
"Seated Cable Rows: 3 sets of 10-12 reps\n\n" + // Two vertical spaces
"Arms Workout Routine:\n" +
"Barbell Curls: 3 sets of 10-12 reps\n" +
"Skull Crushers: 3 sets of 10-12 reps\n" +
"Hammer Curls: 3 sets of 10-15 reps\n" +
"Tricep Pushdowns: 3 sets of 10-15 reps\n\n" + // Two vertical spaces
"Legs Workout Routine:\n" +
"Deadlifts: 3 sets of 8-12 reps\n" +
"Leg Extensions: 3 sets of 10-15 reps\n" +
"Leg Curls: 3 sets of 10-15 reps\n" +
"Calf Raises: 3 sets of 12-15 reps";

let sevenDay = "Push Workout Routine:\n" +
"Bench Press: 3 sets of 8-12 reps\n" +
"Overhead Dumbbell Press: 3 sets of 10-12 reps\n" +
"Incline Dumbbell Flyes: 3 sets of 10-15 reps\n" +
"Lateral Raises: 3 sets of 10-15 reps\n" +
"Tricep Dips: 3 sets of 8-12 reps\n\n" + // Two vertical spaces
"Pull Workout Routine:\n" +
"Pull-Ups: 3 sets of 6-10 reps\n" +
"Bent-Over Barbell Rows: 3 sets of 10-12 reps\n" +
"Dumbbell Bicep Curls: 3 sets of 10-15 reps\n" +
"Face Pulls: 3 sets of 12-15 reps\n\n" + // Two vertical spaces
"Legs Workout Routine:\n" +
"Squats: 3 sets of 10-15 reps\n" +
"Leg Press: 3 sets of 10-15 reps\n" +
"Lunges: 3 sets of 10 reps per leg\n" +
"Calf Raises: 3 sets of 12-15 reps\n\n" + // Two vertical spaces
"Chest/Back Workout Routine:\n" +
"Flat Dumbbell Bench Press: 3 sets of 8-12 reps\n" +
"Dumbbell Flyes: 3 sets of 10-15 reps\n" +
"Lat Pulldowns: 3 sets of 10-12 reps\n" +
"Seated Cable Rows: 3 sets of 10-12 reps\n\n" + // Two vertical spaces
"Arms Workout Routine:\n" +
"Barbell Curls: 3 sets of 10-12 reps\n" +
"Skull Crushers: 3 sets of 10-12 reps\n" +
"Hammer Curls: 3 sets of 10-15 reps\n" +
"Tricep Pushdowns: 3 sets of 10-15 reps\n\n" + // Two vertical spaces
"Legs Workout Routine:\n" +
"Deadlifts: 3 sets of 8-12 reps\n" +
"Leg Extensions: 3 sets of 10-15 reps\n" +
"Leg Curls: 3 sets of 10-15 reps\n" +
"Calf Raises: 3 sets of 12-15 reps\n\n" + // Two vertical spaces
"Cardio Workout Routine:\n" +
"30 minutes of running or cycling at moderate intensity\n" +
"15 minutes of HIIT (High-Intensity Interval Training) - alternate between 30 seconds sprinting and 1 minute walking\n" +
"Cool down with 5-10 minutes of light stretching";


    if (times === 1) {
        message = oneDay;
    } else if (times === 2) {
        message = twoDay;
    } else if (times === 3) {
        message = threeDay;
    } else if (times === 4) {
        message = fourDay;
    } else if (times === 5) {
        message = fiveDay;
    } else if (times === 6) {
        message = sixDay;
    } else if (times === 7) {
        message = sevenDay;
    } else {
        message = "Select number of days.";
    }

    resultDiv.innerHTML = message;
});