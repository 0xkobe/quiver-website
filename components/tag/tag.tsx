export default function Tag({ children }) {
  return (
    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-primary to-secondary rounded-full">
      {children}
    </span>
  );
}
