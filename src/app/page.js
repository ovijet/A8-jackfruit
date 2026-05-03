import AllProduct from "@/component/AllProduct";
import HomePage from "@/component/HomePage";
import SummerCareTip from "@/component/SummerCareTip";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage></HomePage>
      <AllProduct></AllProduct>
      <SummerCareTip />
    </div>
  );
}
