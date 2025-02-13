import Image from "next/image";
import Header from "./_Components/Header";
import Midbar from "./_Components/Midbar";
import Container from "./_Components/Container";
import Product from "./_Components/Product";

export default function Home() {
  return (
    <div className="bg-white flex h-[2800px] flex-col">
      <Container />
      <Product />
    </div>
  );
}
