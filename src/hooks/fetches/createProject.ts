"use server"
export async function createProject(project: any) {
    const data = await fetch("http://localhost:8080/api/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    if (!data.ok) {
        throw new Error('Network response was not ok');
    }
    return await data.json();
}