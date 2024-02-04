import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to TextMax Dashboard</h1>
        <p className="mt-2 text-lg">Maximize your texting ability with insights</p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        {/* Text Summaries */}
        <button className="flex flex-col items-center justify-center h-40 rounded-lg border border-gray-300 p-4 transition hover:border-blue-500 hover:bg-blue-50">
          <span className="text-lg font-semibold">Text Summaries</span>
          <p>View summaries of your texts</p>
        </button>

        {/* Sentiment Analysis */}
        <button className="flex flex-col items-center justify-center h-40 rounded-lg border border-gray-300 p-4 transition hover:border-green-500 hover:bg-green-50">
          <span className="text-lg font-semibold">Sentiment Analysis</span>
          <p>Analyze the sentiment of your texts</p>
        </button>

        {/* Score */}
        <div className="flex flex-col items-center justify-center h-40 rounded-lg border border-gray-300 p-4">
          <span className="text-lg font-semibold">Your Score</span>
          <p className="text-2xl font-bold">85/100</p>
          <p>Overall text positivity score</p>
        </div>
      </div>
    </main>
  );
}
