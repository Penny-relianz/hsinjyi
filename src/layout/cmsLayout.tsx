export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center ">
      <div className="container flex justify-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
