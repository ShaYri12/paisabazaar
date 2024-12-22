export default function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[20px] rounded-full bg-greenish/[5%] z-999">
      <div
        className="h-full bg-greenish transition-all rounded-full min-w-[40px] flex items-center justify-center text-white font-semibold tracking-[1px] duration-500 text-[12px] text-center"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}
