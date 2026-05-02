export default function DashboardFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-4 text-center text-xs text-gray-400 md:px-8">
      © {new Date().getFullYear()} RootBuilders. Talent Engagement Dashboard.
    </footer>
  );
}
