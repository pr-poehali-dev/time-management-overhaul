const features = [
  { number: "01", title: "Стратегия", text: "Изучаем рынок и конкурентов, строим позиционирование которое работает." },
  { number: "02", title: "Дизайн", text: "Создаём визуальный язык бренда — от логотипа до полного гайдлайна." },
  { number: "03", title: "Разработка", text: "Пишем быстрые сайты и приложения, которые конвертируют посетителей в клиентов." },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Creative team at work"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-6 text-xs tracking-widest text-neutral-500">Что мы делаем</h3>
        <p className="text-3xl lg:text-5xl mb-12 text-neutral-900 leading-tight font-bold">
          Превращаем идеи в продукты, за которые клиенты платят
        </p>
        <div className="flex flex-col gap-8">
          {features.map((f) => (
            <div key={f.number} className="flex gap-6 items-start">
              <span className="text-xs text-neutral-400 mt-1 shrink-0">{f.number}</span>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 mb-1">{f.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
          Наши работы
        </button>
      </div>
    </div>
  );
}
