import SortableListDemo from "@/components/clutui/sortable-list-component";
import BoxRevealDemo from "@/components/magicui/box-reveal-component";

export default function Home() {
  return (
    <main className="md:px-10 px-1 flex flex-col justify-center items-center py-10">
      <div className="h-full md:min-h-[70vh] flex w-full flex-col md:flex-row items-center justify-center gap-16">
        <div className="w-full md:w-[65%] h-full md:h-[75vh] flex px-5 items-center justify-center">
          <BoxRevealDemo />
        </div>
        <div className="w-full md:w-[60%] h-full md:h-[60vh] items-center justify-center flex">
          <SortableListDemo />
        </div>
      </div>
    </main>
  );
}
