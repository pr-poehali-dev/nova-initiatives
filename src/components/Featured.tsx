export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/619d79ae-63af-4b2f-bf8e-3628289b8265/files/ca33c394-0a2a-4086-8c07-51ba6e0d2270.jpg"
          alt="Остров Веры на озере Тургояк"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Остров Веры · Тайны тысячелетий</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Древние мегалиты, загадочные дольмены и следы первобытных людей — остров Веры хранит тайны, которым более пяти тысяч лет.
          Уникальное место силы прямо на Урале.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-neutral-600 text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
            Прозрачность воды до 17 метров — второе место после Байкала
          </div>
          <div className="flex items-center gap-3 text-neutral-600 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
            Эндемичный сиг — рыба, живущая только в Тургояке
          </div>
          <div className="flex items-center gap-3 text-neutral-600 text-sm">
            <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>
            Памятник природы федерального значения
          </div>
        </div>
        <button className="mt-8 bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}