import { QRCodeSVG } from "qrcode.react";

const SITE_URL = "https://preview--nova-initiatives.poehali.dev/";

export default function QRBlock() {
  return (
    <div className="bg-white py-20 px-6 flex flex-col items-center justify-center text-center">
      <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Сохрани на телефон</p>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
        Тургояк в кармане
      </h2>
      <div className="p-6 border border-neutral-200 inline-block mb-8">
        <QRCodeSVG
          value={SITE_URL}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="M"
        />
      </div>
      <p className="text-neutral-500 text-sm max-w-xs">
        Наведи камеру телефона на код — и сайт откроется мгновенно
      </p>
    </div>
  );
}
