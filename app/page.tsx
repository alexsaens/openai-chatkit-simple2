// app/page.tsx  (Next.js App Router)
export default function Home() {
  const workflowId = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <openai-chatkit
        className="block h-[90vh] w-full rounded-2xl shadow-sm"
        data-color-scheme="light"
        workflow={workflowId}
      />
    </main>
  );
}
