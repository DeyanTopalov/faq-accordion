const Skeleton = () => {
  return (
    <div className=" grid h-[300px]  w-[279px] place-content-center rounded-lg bg-white p-4 md:h-[387px] md:w-[520px]  md:p-10">
      <div className="grid animate-pulse gap-2 md:gap-4">
        <div className="grid place-content-center gap-4 md:gap-6">
          <div className="flex items-center gap-1 md:gap-3">
            <div className=" h-12 w-[190px] rounded-lg bg-slate-200 md:h-16 md:w-[415px] "></div>
            <div className="size-12 rounded-lg bg-slate-200 md:size-16"></div>
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <div className=" h-12 w-[190px] rounded-lg bg-slate-200 md:h-16 md:w-[415px] "></div>
            <div className="size-12 rounded-lg bg-slate-200 md:size-16"></div>
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <div className=" h-12 w-[190px] rounded-lg bg-slate-200 md:h-16 md:w-[415px] "></div>
            <div className="size-12 rounded-lg bg-slate-200 md:size-16"></div>
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <div className=" h-12 w-[190px] rounded-lg bg-slate-200 md:h-16 md:w-[415px] "></div>
            <div className="size-12 rounded-lg bg-slate-200 md:size-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
