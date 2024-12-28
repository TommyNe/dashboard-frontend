export const useProjectsGetResponse = async () => {
        const data = await fetch("http://localhost:8080/api/projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    if (!data.ok) {
            throw new Error('Network response was not ok' );
        }
        return await data.json();
}