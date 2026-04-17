import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";

const SITE_URL = "https://preview--nova-initiatives.poehali.dev/";

export default function QRBlock() {
  const qrRef = useRef<SVGSVGElement>(null);

  const handleDownload = () => {
    const svg = qrRef.current;
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.download = "turgoyak-qr.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = url;
  };

  return (
    <div className="bg-white py-20 px-6 flex flex-col items-center justify-center text-center">
      <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Сохрани на телефон</p>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
        Тургояк в кармане
      </h2>
      <div className="p-6 border border-neutral-200 inline-block mb-8">
        <QRCodeSVG
          ref={qrRef}
          value={SITE_URL}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="M"
        />
      </div>
      <p className="text-neutral-500 text-sm max-w-xs mb-8">
        Наведи камеру телефона на код — и сайт откроется мгновенно
      </p>
      <button
        onClick={handleDownload}
        className="bg-black text-white border border-black px-8 py-3 text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
      >
        Скачать QR-код
      </button>
    </div>
  );
}
