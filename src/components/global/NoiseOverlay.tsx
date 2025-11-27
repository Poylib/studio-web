export default function NoiseOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] h-full w-full overflow-hidden opacity-[0.03]">
            <div
                className="absolute -top-[100%] -left-[100%] h-[300%] w-[300%] animate-[noise_8s_steps(10)_infinite] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
