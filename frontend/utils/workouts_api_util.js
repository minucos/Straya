export const fetchWorkouts = ({query,category}) => (
    $.ajax({
        method: "GET",
        url: `api/workouts?query=${query}&category=${category}`
    })
);

export const fetchWorkout = (id) => (
    $.ajax({
        method: "GET",
        url: `api/workouts/${id}`,
    })
);

export const createWorkout = (workout) => (
    $.ajax({
        method: "POST",
        url: "api/workouts",
        data: workout,
        contentType: false,
        processData: false
    })
);

export const updateWorkout = (workout) => (
    $.ajax({
        method: "PATCH",
        url: `api/workouts/${workout.id}`,
        data: { workout },
    })
);

export const deleteWorkout = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/workouts/${id}`,
    })
);