export default function Text({
  text,
  ...props
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1
      className="font-light text-base text-gray-400/90 tracking-wider"
      {...props}
    >
      {text}
    </h1>
  );
}
