export function ProgressBar({ currentStep, totalSteps, handleBack }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <button
        onClick={handleBack}
        className={`${
          currentStep > 1 ? "visible" : "invisible"
        } p-2 rounded-lg bg-greenish/10 hover:bg-greenish/[15%] transition-colors`}
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
      <div className="text-[13px] font-[600] text-green-800">
        Steps {currentStep}/{totalSteps}
      </div>
    </div>
  );
}
