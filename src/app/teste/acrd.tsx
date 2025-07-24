export default function SkeletonCard() {
  return (
    <div className="w-full max-w-sm p-4 border border-gray-200 rounded-xl shadow bg-white space-y-4">
      <div className="skeleton h-40 w-full rounded-lg" />
      <div className="skeleton h-5 w-3/4 rounded" />
      <div className="skeleton h-4 w-1/2 rounded" />
    </div>
  );
}
