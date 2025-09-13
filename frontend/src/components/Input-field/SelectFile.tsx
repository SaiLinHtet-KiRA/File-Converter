import { ArrowUpTray } from "../../svg";
import Header from "../Header";
import Text from "../Text";

export default function SelectFile() {
  return (
    <label
      htmlFor="select-file "
      className="flex flex-col gap-1 items-center justify-center w-[400px] aspect-[12/8] bg-cyan-400/50 rounded-lg cursor-pointer"
    >
      <input type="file" className="sr-only" id="select-file" />
      <ArrowUpTray className="size-9" />
      <h1 className="font-semibold text-base tracking-wider text-center">
        Click And Select Your File
      </h1>
      <h1 className="font-semibold text-sm tracking-wider text-center">
        Or Darge Your File
      </h1>
    </label>
  );
}
