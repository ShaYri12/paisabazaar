export function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <button
        className={`${
          currentStep > 1 ? "visible" : "invisible"
        } p-2 rounded-lg bg-gray-100 hover:bg-gray-200`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <div className="text-sm font-medium text-gray-600">
        Steps {currentStep}/{totalSteps}
      </div>
    </div>
  );
}
