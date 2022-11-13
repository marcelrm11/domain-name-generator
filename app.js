let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".es", ".io"]
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let extension of extensions) {
            console.log(pronoun.concat(adj, noun, extension));
        }
      }
    }
  }