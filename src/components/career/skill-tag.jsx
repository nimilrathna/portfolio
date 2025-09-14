export default function SkillTags({ tags = []}) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-4 py-1.5 rounded-full bg-[#0f1c2e] text-[#16f2b3] text-sm font-medium shadow-md shadow-cyan-900/40 hover:shadow-cyan-400/50 hover:scale-105 transition"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}