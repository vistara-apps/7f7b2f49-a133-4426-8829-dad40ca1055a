interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <main className="pb-20">
        {children}
      </main>
    </div>
  );
}
