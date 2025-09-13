export default function Header({ text }: { text: string }) {
  return (
    <h1 className="font-semibold text-lg tracking-wider text-center">{text}</h1>
  );
}
