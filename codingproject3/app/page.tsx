import Counter from "../components/counter";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <Counter />
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}
