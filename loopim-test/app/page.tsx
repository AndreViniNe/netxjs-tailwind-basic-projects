import Image from "next/image";
import './globals.css';


export default function Home() {
  return (
      <main className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="w-1/4 h-auto bg-white shadow-md rounded-2xl flex items-center flex-col font-sans">
          <Image src="/logo_loopim.png" alt="Loopim Logo" width={120} height={80} className="my-7"/>
          <h1 className="text-3xl font-semibold tracking-wide">Entrar na sua conta</h1>
          <p className="text-xs mt-1">
            <span>Ou </span>
            <span className="text-orange-400 font-bold">fazer cadastro</span>
          </p>
          <div className="h-[1px] bg-gray-200 w-9/12 mt-8"></div>
          <div className="my-10 mx-2 flex w-9/12 items-center gap-x-4 border border-gray-300 rounded-full py-3.5 px-5">
            <Image src="/google.png" alt="Google Logo" width={35} height={300} />
            <span className="text-xs -ml-1.5">Conectar minha conta Google</span>
          </div>
        </div>
      </main>
  );
}
