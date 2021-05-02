export default function Tag({ children }) {
  return (
    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary-500 rounded-full">
      {children}
    </span>
  );
}
