import { ArrowUpTray } from "../../svg";

export default function SelectFile() {
  return (
    <label
      htmlFor="select-file"
      className="flex flex-col gap-1 items-center justify-center w-[400px] aspect-[12/8] outline-3 outline-cyan-400/50 rounded-xl cursor-pointer
      hover:scale-105
       active:bg-cyan-400/80 active:scale-95"
    >
      <input type="file" className="sr-only" id="select-file" />
      <ArrowUpTray className="size-9" />
      <h1 className="font-semibold text-base tracking-wider text-center">
        Click And Select Your Files
      </h1>
      <h1 className="font-semibold text-sm tracking-wider text-center">
        Or Drage Your Files
      </h1>
    </label>
  );
}
