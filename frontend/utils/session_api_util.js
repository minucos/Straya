export const signup = (athlete) => (
    $.ajax({
        method: "POST",
        url: "api/athletes",
        data: { athlete }
    })
);

export const login = (athlete) => (
    $.ajax({
        method: "POST",
        url: "api/session",
        data: { athlete }
    })
);

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "api/session",
    })
);