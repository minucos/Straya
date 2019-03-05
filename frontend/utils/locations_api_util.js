export const createLocation = (location) => (
    $.ajax({
        method: "POST",
        url: "api/locations",
        data: {location},
    })
);

export const deleteLocation = (locationId) => (
    $.ajax({
        method: "DELETE",
        url: `api/locations/${locationId}`,
        data: locationId,
    })
);