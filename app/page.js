"use client";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function Home() {
    return (
        <>
            <p className="mt-2 text-center">Image cropper</p>

            <div className="p-8">
                <ImageCropper src="https://i.pinimg.com/736x/dc/f3/9f/dcf39f8583ae3f4767eee0ec38ad3e60.jpg" />
            </div>
        </>
    );
}

function ImageCropper({ src }) {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useDrag(({ offset: [ox, oy] }) => {
        api.start({ x: ox, y: oy });
    });

    return (
        <div
            onMouseDown={(e) => e.preventDefault()}
            {...bind()}
            style={{ x, y }}
            className="overflow-hidden ring-4 ring-blue-500 aspect-[4/3]"
        >
            <animated.div {...bind()} style={{ x, y }}>
                <img
                    src={src}
                    className="relative w-full h-full max-w-none max-h-none"
                />
            </animated.div>
        </div>
    );
}
