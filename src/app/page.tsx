import Homepage from "./-home/page";

export default function Home() {
  const nodeEnv = process.env.NODE_ENV;
  return (
    <>
      <Homepage />
    </>
  );
}
