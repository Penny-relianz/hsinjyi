import Navbar from "@/app/components/navBar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="  min-h-dvh bg-black">
      <Navbar />
      <div className="container ">{children}</div>
    </div>
  );
}
