import Image from "next/image";

export default async function Home() {
  const data = await fetch("http://localhost:8080/api/projects", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
    const products = await data.json();
    console.log('post', products);
  return (
   <div className={'container m-3'}>
    <h1>My First Next.js App</h1>
    <p>Welcome to my first Next.js app.</p>
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      width={72}
      height={16}
    />
   </div>
  );
}
