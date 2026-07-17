type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {images.map((src) => (
        <img
          key={src}
          src={src}
          className="rounded-xl border"
        />
      ))}
    </div>
  );
}