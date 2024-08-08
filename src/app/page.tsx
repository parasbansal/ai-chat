import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Chat />
      <p className="my-4 text-neutral-300">
        <span className="opacity-50">Built by</span> Paras Bansal
      </p>
    </main>
  );
}
