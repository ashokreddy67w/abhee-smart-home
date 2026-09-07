export default function AdvisorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.4a.6.6 0 0 1-.98-.47V16h-.32A2.5 2.5 0 0 1 2 13.5v-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="12.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
    </svg>
  );
}
