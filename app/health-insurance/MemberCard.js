import { FiMinus, FiPlus } from "react-icons/fi";

export default function MemberCard({
  member,
  selected,
  onToggle,
  onUpdateQuantity,
}) {
  const Icon = member.icon;
  const isSelected =
    typeof selected === "boolean" ? selected : selected.selected;
  const quantity = typeof selected === "object" ? selected.quantity : 1;

  return (
    <div
      onClick={onToggle}
      className={`relative cursor-pointer px-2 md:px-4 py-2 md:py-3 md:mb-2 rounded-lg border-2 text-left w-full transition-all ${
        isSelected
          ? "border-greenish bg-white hover:border-emerald-600"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
      aria-pressed={isSelected}
    >
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
          <Icon
            className="w-[25px] h-[25px] text-gray-600"
            aria-hidden="true"
          />
        </div>
        <span
          className={`text-[16px] ${
            isSelected ? "text-greenish font-[500]" : "text-gray-700"
          }`}
        >
          {member.name}
        </span>
      </div>

      {member.hasQuantity && isSelected && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex items-center bg-white py-[2px] px-2 rounded-lg border border-greenish gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUpdateQuantity?.(-1);
            }}
            className="flex items-center justify-center text-greenish"
            aria-label={`Decrease ${member.name} quantity`}
          >
            <FiMinus size={20} strokeWidth={4} />
          </button>
          <span className="text-gray-700">{quantity}</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUpdateQuantity?.(1);
            }}
            className="flex items-center justify-center text-greenish"
            aria-label={`Increase ${member.name} quantity`}
          >
            <FiPlus size={20} strokeWidth={4} />
          </button>
        </div>
      )}
    </div>
  );
}
