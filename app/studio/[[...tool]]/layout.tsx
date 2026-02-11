export const metadata = {
  title: "Studio | Mark Hallam",
  description: "Content management studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sanity-studio-wrapper">
      {children}
    </div>
  );
}
