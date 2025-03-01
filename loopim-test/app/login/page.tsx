import Image from "next/image";
import '@/styles/globals.css';
import { signIn } from "@/lib/auth";


export default function Home() {
  return (
      <main className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="w-1/4 h-auto bg-white shadow-md rounded-2xl flex items-center flex-col font-sans">
          <Image src="/logo_loopim.png" alt="Loopim Logo" width={130} height={100} className="mb-6 mt-10"/>
          <h1 className="text-3xl font-semibold tracking-wide">Entrar na sua conta</h1>
          <p className="text-base mt-1">
            <span>Ou </span>
            <span className="text-orange-400 font-semibold">fazer cadastro</span>
          </p>
          <div className="h-[1px] bg-gray-200 w-10/12 mt-8"></div>
          <form
            action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/secret" });
            }}
            >
              <button className="my-10 mx-2 flex w-12/12 items-center gap-x-4 border border-gray-300 rounded-full px-5 py-3.5">
                  <Image src="/google.png" alt="Google Logo" width={40} height={40} />
                  <p className="text-sm font-normal tracking-wide">Conectar minha conta Google</p>
              </button>
          </form>


          {/* <div className="my-10 mx-2 flex w-9/12 items-center gap-x-4 border border-gray-300 rounded-full py-3.5 px-5">
            <Image src="/google.png" alt="Google Logo" width={35} height={300} />
            <span className="text-xs -ml-1.5">Conectar minha conta Google</span>
          </div> */}
        </div>
      </main>
  );
}
