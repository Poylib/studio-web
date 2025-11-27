import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-white">
            <h1 className="text-[12rem] font-bold leading-none tracking-tighter text-neutral-800 md:text-[20rem]">
                404
            </h1>
            <div className="absolute flex flex-col items-center gap-6">
                <h2 className="text-2xl font-medium uppercase tracking-widest md:text-4xl">
                    Page Not Found
                </h2>
                <p className="text-neutral-400">
                    The space you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-neutral-200"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
