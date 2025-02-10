import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-[300px] bg-gray-50 flex flex-col text-center p-4 rounded-lg shadow-md gap-4">
        <h1 className="font-bold text-2xl">Login</h1>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button variant={"default"}>Submit</Button>
        <Button variant={"secondary"}>Sign Up</Button>
      </div>
    </div>
  )
}