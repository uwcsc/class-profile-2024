export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {new Array(100).fill(0).map((i) => (
        <p key={i}>x</p>
      ))}
    </div>
  );
}
