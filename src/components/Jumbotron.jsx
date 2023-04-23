import React from "react";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <section id="jumbotron" className="flex h-[250px] items-center justify-center gap-x-3">
      <Image src={require("dizeto-links/assets/images/logo/dizeto.svg")} width={100} height={100} alt="" />
      <div>
        <h1 className="text-5xl font-semibold">
          <span className="text-5xl font-semibold text-red-600">DI</span>ZETO
        </h1>
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">LINKS</h2>
      </div>
    </section>
  );
}
