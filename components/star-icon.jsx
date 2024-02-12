import Image from "next/image";

const StarIcon = () => {
  return (
    <>
      <Image
        src="/icon-star.svg"
        width={24}
        height={24}
        className=" block md:hidden"
        alt="star icon"
      />
      <Image
        src="/icon-star.svg"
        width={40}
        height={40}
        className="hidden md:block"
        alt="star icon"
      />
    </>
  );
};

export default StarIcon;
