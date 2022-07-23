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

export const getAuthorByName = function (name: string) {
  return authors.find((author) => {
    return author.name === name;
  })
}
