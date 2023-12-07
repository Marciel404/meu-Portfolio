export default async function (req, res) {
    if (req.method === "GET") {
        try {
            const repoId = req.headers.repo;
            const content = await (
                await fetch(`https://api.github.com/repos/${repoId}`, {
                    method: "GET",
                    headers: {
                        "X-GitHub-Api-Version": "2022-11-28",
                        "Authorization": "Bearer"
                    }
                })).json()
            res.status(200).send({ response: content["stargazers_count"], status: 200 })
        } catch (e) {
            res.status(400).send({ error: `${e}`, status: 400 })
        }

    } else {
        res.status(405).send({ error: "Method Errado", status: 405 })
    }
}