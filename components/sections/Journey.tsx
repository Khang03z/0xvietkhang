export default function Journey() {
  const stats = [
    {
      value: "$2000+",
      label: "Tổng payout",
    },
    {
      value: "2",
      label: "Quỹ đã pass",
    },
    {
      value: "12",
      label: "Ví airdrop",
    },
    {
      value: "2026",
      label: "Bắt đầu chia sẻ",
    },
  ];

  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          BUILDING IN PUBLIC
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Hành trình của mình
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Được cập nhật sau mỗi lần payout, pass quỹ
hoặc đạt một cột mốc mới.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-l-2 border-black pl-5"
            >
              <h3 className="text-4xl font-bold tracking-tight">
                {item.value}
              </h3>

              <p className="mt-3 text-neutral-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}