// app/loading.tsx
'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black">
            <div
                className="w-[100vw] h-[100vh] flex flex-col items-center justify-center animate-fade-in animate-pulse"
                style={{
                    background: 'radial-gradient(at right top, #010101, #840102)',
                }}
            >
                {/* <img
          src="/assets/images/logo.webp"
          alt="MetaBoard Logo"
          className="h-10 w-auto "
        /> */}
                <DotLottieReact
                    src="lottie/loading.lottie"
                    loop
                    autoplay
                    style={{ height: '60vh' }}
                />
                <div className="text-xl font-semibold animate-pulse text-white">Meta Loading...</div>
            </div>
        </div>

    );
}
export default Loading;