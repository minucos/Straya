const filterWorkouts = (state) => {
    let workoutArr = Object.values(state.entities.workouts).filter( workout => workout.athlete_id === state.session.id);
    
    let sorted;

    switch (state.ui.sortBy) {
        case "dateASC":
            sorted = workoutArr.sort((w1,w2) => {
                let date1 = w1.created_at;
                let date2 = w2.created_at;

                if (date1 < date2) {
                    return -1;
                }
                if (date1 > date2) {
                    return 1;
                }
                return 0;
            })

            return sorted;

        case "dateDESC":
            sorted = workoutArr.sort((w1, w2) => {
                let date1 = w1.created_at;
                let date2 = w2.created_at;

                if (date1 > date2) {
                    return -1;
                }
                if (date1 < date2) {
                    return 1;
                }
                return 0;
            })

            return sorted;
        
        case "titleASC":
            sorted = workoutArr.sort((w1, w2) => {
                let title1 = w1.title;
                let title2 = w2.title;

                if (title1 < title2) {
                    return -1;
                }
                if (title1 > title2) {
                    return 1;
                }
                return 0;
            })

            return sorted;
        
        case "titleDESC":
            sorted = workoutArr.sort((w1, w2) => {
                let title1 = w1.title;
                let title2 = w2.title;

                if (title1 > title2) {
                    return -1;
                }
                if (title1 < title2) {
                    return 1;
                }
                return 0;
            })

            return sorted;
        
        case "timeASC":
            sorted = workoutArr.sort((w1,w2) => {
                return w1.duration - w2.duration;
            })

            return sorted;
        
        case "timeDESC":
            sorted = workoutArr.sort((w1, w2) => {
                return w1.duration - w2.duration;
            })

            return sorted.reverse();
        
        case "distanceASC":
            sorted = workoutArr.sort((w1, w2) => {
                return w1.distance - w2.distance;
            })

            return sorted;
        
        case "distanceDESC":
            sorted = workoutArr.sort((w1, w2) => {
                return w1.distance - w2.distance;
            })

            return sorted.reverse();
        
        default:
            return workoutArr;
    }
}

export default filterWorkouts;