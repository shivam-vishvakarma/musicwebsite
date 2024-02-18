export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <h1>inner layout</h1>
      {children}
    </>
  );
}
