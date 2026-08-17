export default async function handler(req, res) {
  const token = process.env.GITHUB_PAT_TOKEN;
  const USERNAME = process.env.GITHUB_PROFILE;

  if (!token || !USERNAME) {
    return res.status(500).json({ error: "Variáveis de ambiente ausentes." });
  }

  // GraphQL query atualizada para diferenciar repositórios
  const query = `
    query {
      user(login: "${USERNAME}") {
        publicRepos: repositories(privacy: PUBLIC, ownerAffiliations: OWNER) {
          totalCount
        }
        privateRepos: repositories(privacy: PRIVATE, ownerAffiliations: OWNER) {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
          restrictedContributionsCount
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "NodeJS-App",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (data.errors) {
      return res.status(400).json({ error: data.errors[0].message });
    }

    const userData = data.data?.user;
    if (!userData) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const publicRepos = userData.publicRepos.totalCount;
    const privateRepos = userData.privateRepos.totalCount;
    const totalRepos = publicRepos + privateRepos;

    // Commits públicos + contribuições privadas
    const commits =
      userData.contributionsCollection.totalCommitContributions +
      userData.contributionsCollection.restrictedContributionsCount;

    return res.status(200).json({
      commits,
      totalRepos,
      publicRepos,
      privateRepos,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
