import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
};

export default function MarkdownImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt || ""}
      width={900}
      height={600}
      className="rounded-xl my-8 w-full h-auto"
    />
  );
}