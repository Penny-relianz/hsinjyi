export default function UnSignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="wide-navbar navbar-fixed flex h-16 items-center justify-between bg-nav-bg px-4">
        <picture>
          <img
            src="/customer/logo.png"
            alt="logo"
            width={140}
            className="mb-2"
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="flex justify-center ">
        <div className="container flex justify-center">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
