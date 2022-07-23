import Link from "next/link";

export default function FirstPage(){
  return (
    <>
    <h1>My First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to Home &rarr;</a>
      </Link>
    </h2>
    </>
  );
}
