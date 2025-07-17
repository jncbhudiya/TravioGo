import Homepage from "./main/-home/page";

export default function Home() {
  const nodeEnv = process.env.NODE_ENV;
  return (
    <>
      <Homepage />
    </>
  );
}
