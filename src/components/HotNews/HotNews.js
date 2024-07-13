import HotNewsSlider from "./HotNewsSlider";

export default function HotNews() {
  return (
    <section className="m-10">
        <div className=" flex gap-2 relative mb-8 ">
          <div className="w-4 h-18 bg-red-600"></div>
          <div>
            <h2 className="text-4xl font-bold mb-3">Hot News</h2>
            <p className="text-lg">
              Provide you with the latest enterprise and industry news.
            </p>
          </div>
        </div>
        <HotNewsSlider />
    </section>
  );
}
