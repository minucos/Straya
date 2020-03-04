export const fetchRoutes = (page) => (
    $.ajax({
        method: "GET",
        url: `api/routes?page=${page}`,
    })
);

export const fetchRoute = (id) => (
    $.ajax({
        method: "GET",
        url: `api/routes/${id}`,
    })
);

export const createRoute = (route, locations) => (
    $.ajax({
        method: "POST",
        url: "api/routes",
        data: { route, locations },
    })
);

export const updateRoute = (route) => (
    $.ajax({
        method: "PATCH",
        url: `api/routes/${route.id}`,
        data: { route },
    })
);

export const deleteRoute = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/routes/${id}`,
    })
);