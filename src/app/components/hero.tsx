export default function Hero() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <main className="min-w-[100vw] min-h-screen bg-[#000000] flex justify-center items-center">
        <section className="w-[100%] h-[100%] flex flex-col items-center justify-center">
          <p className="font-[family-name:var(--font-clash-semi)] lg:text-[4.3vw] md:text-[7vw] text-[12.5vw] leading-tight text-center moving-text">
            Yash Bharadwaj
          </p>
          <p className="font-[family-name:var(--font-archivo)] lg:text-[1.5vw] md:text-[3vw] text-[5vw] md:mt-0 mt-9 text-gray-700 font-semibold">
            Developer & Designer
          </p>
        </section>
      </main>
    </div>
  );
}
