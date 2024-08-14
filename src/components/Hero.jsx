export default function Hero() {
    return (
        <div className="flex items-center justify-center text-center min-h-[90vh]">
            <div className="group">
                <h1 className="text-7xl">
                    <span className="text-4xl">Explore the</span>
                    <span className="mx-3 relative inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text group-hover:from-green-500 group-hover:via-yellow-500 group-hover:to-red-500 duration-1000">
                        Qwik IT
                    </span>
                    <span className="text-4xl">Books House</span>
                </h1>
                <p className="text-sm w-full md:w-2/3 mx-auto mt-2 tracking-wider leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium itaque, obcaecati cum esse quam quibusdam non magnam dolor officiis rerum ipsa asperiores voluptatibus unde.
                </p>
            </div>
        </div>
    );
}