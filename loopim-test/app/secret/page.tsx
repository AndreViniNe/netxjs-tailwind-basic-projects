import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Secret() {
    const session = await auth();
    if (!session) return redirect('/login');

    return (
        <>
            <h1 className='text-2xl text-green-700'>Secret page</h1>
            <form 
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <button className="p-2 border-2 bg-red-400">Sign out</button>
            </form>
        </>
    );
}
