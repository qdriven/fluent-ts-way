type AuthorProps = {
  name: string;
  avatar: string;
  githubUserName: string;
}

export const authors: AuthorProps[] = [
  {
    name: "fluentqa",
    avatar: "/images/fluentqa.png",
    githubUserName: "fluentqa",
  },
];

export const getAuthorFromName = function (name: string) {
  return authors.find((author) => {
    return author.name === name;
  })
}
