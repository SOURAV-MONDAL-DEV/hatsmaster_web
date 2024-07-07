import AboutUsBanner from "@/components/AboutUs/aboutUsBanner";
import AboutUsDetails from "@/components/AboutUs/AboutUsDetails";
import WorkLineShort from "@/components/WorkLine/WorkLineShort";

export default function About() {
  return (
  <div>
    {/* <h1 className="text-3xl font-bold underline">About Page</h1> */}
    <AboutUsBanner/>
    <WorkLineShort/>
    <AboutUsDetails/>
  </div>
);
}
