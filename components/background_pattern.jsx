import Image from "next/image";

const BackgroundPattern = () => {
  return (
    <>
      <Image
        src="/background-pattern-mobile.svg"
        width={375}
        height={232}
        className=" block w-full object-cover md:hidden"
        alt="background pattern"
      />
      <Image
        src="/background-pattern-desktop.svg"
        width={1440}
        height={320}
        className="hidden w-full object-cover md:block"
        alt="background pattern"
      />
    </>
  );
};

export default BackgroundPattern;
