import Image from "next/image";

export default function About() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="grayscale rounded-full"
          src="/myself.jpg"
          alt="Next.js logo"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Lysia Leão
          </h1>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Olá, seja bem-vindo! 👋
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Vou concentrar aqui informações {" "}
            <a
              href="https://www.linkedin.com/in/lysialeao/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              sobre mim 
            </a>{" "}
            e {" "}
            <a
              href="https://github.com/lysialeao"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              meu trabalho
            </a>{" "}
            , em breve.
          </p>
        </div>
      </main>
    </div>
  );
}
