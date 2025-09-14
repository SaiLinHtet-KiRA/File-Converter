import Header from "../components/Header";
import Text from "../components/Text";
import Steps from "../components/Steps";
import SelectFile from "../components/Input-field/SelectFile";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-15 py-[3%]">
      <header>
        <Header text="Online File Converter" />
        <Text text="Just click to convert into another format" />
      </header>
      <Steps />
      <SelectFile />
      <Features />
    </main>
  );
}
