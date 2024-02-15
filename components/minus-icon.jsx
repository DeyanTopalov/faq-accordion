import Image from "next/image";

const MinusIcon = () => {
  return (
    <Image
      src="/icon-minus.svg"
      width={30}
      height={30}
      alt="minus icon"
      className="transition-all duration-1000 ease-in-out"
    />
  );
};

export default MinusIcon;
