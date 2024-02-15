import Image from "next/image";

const PlusIcon = () => {
  return (
    <Image
      src="/icon-plus.svg"
      width={30}
      height={30}
      alt="plus icon"
      className="transition-all duration-1000 ease-in-out"
    />
  );
};

export default PlusIcon;
