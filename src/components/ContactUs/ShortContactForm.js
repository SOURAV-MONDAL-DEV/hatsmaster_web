import bgimg from "@/images/Yarn/factory.jpg";

export default function ShortContactForm() {
    return (
        <div 
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-black" 
            style={{ backgroundImage: `url(${bgimg.src})` }}
        >
          <form className="bg-black bg-opacity-50 p-8 rounded-lg space-y-4 w-full max-w-md">
            <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 bg-white bg-opacity-50 text-black placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary" 
            />
            <input 
                type="email" 
                placeholder="E-mail*" 
                className="w-full p-3 bg-white bg-opacity-50 text-black placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary" 
            />
            <textarea 
                placeholder="Message*" 
                className="w-full p-3 bg-white bg-opacity-50 text-black placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button 
                type="submit" 
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                SEND
            </button>
          </form>
          {/* <div className="absolute bottom-4 left-4">
            <img src="https://placehold.co/100x100" alt="QR code" />
          </div> */}
        </div>
    );
}
