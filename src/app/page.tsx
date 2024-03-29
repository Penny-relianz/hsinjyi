import DefaultLayout from "@/layout/defaultLayout";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <DefaultLayout>
      <div className=" flex flex-col items-center justify-center py-10 text-ui-text-success">
        <div className=" text-center">
          幫粘老闆打工
          <picture>
            <img
              src="/1166386.jpg"
              alt="logo"
              width={140}
              className="mb-2"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>
    </DefaultLayout>
  );
}
