export default function Gallery() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 bg-[#161616] text-white">
            <h1 className="font-montserrat font-extrabold text-3xl text-center mb-6">
                Find what moves you
            </h1>
            <div className="flex flex-wrap  gap-8">
                <div className="md:max-w-4xl  p-1">
                    <div className="w-[580px] h-[340px] overflow-hidden rounded-tl-[6rem] shadow-lg border border-orange-500">
                        <img
                            src="src/assets/image 9.png"
                            alt="Person lifting barbell in gym with black floor tiles"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-[#161616] p-4 flex  justify-center gap-4 w-auto md:max-w-[400px]">
                        <span className="font-montserrat text-white text-3xl font-bold mb-2">
                            GYM
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center  w-[120px] md:w-[150px]">
                    <img alt="Woman doing high knee exercise outside" className="rounded-tl-[4rem] object-cover w-full h-[380px] opacity-40" height="300" src="https://storage.googleapis.com/a1aa/image/51a9ba14-3443-4c2f-c2dc-e3650b97eb6f.jpg" width="150" />
                    <span className="font-montserrat font-extrabold text-white text-lg mt-2">
                        Zumba
                    </span>
                </div>
                <div className="flex flex-col items-center w-[120px] md:w-[150px] ml-8">
                    <img alt="Woman stretching arms backwards in yoga pose" className="rounded-tl-[4rem] object-cover w-full h-[380px] opacity-40" height="300" src="https://storage.googleapis.com/a1aa/image/8e206c4d-ef79-4f8f-c519-ccdc14ac37ea.jpg" width="150" />
                    <span className="font-montserrat font-extrabold text-white text-lg mt-2">
                        Yoga
                    </span>
                </div>
                <div className="flex flex-col items-center w-[120px] md:w-[150px] ml-8">
                    <img alt="Man in martial arts uniform posing with hands clasped" className="rounded-tl-[4rem] object-cover w-full h-[380px] opacity-40" height="300" src="https://storage.googleapis.com/a1aa/image/fd7b1b9b-fea9-470a-ae8a-edfe450cea54.jpg" width="150" />
                    <span className="font-montserrat font-extrabold text-white text-lg mt-2 text-center leading-tight">
                        Martial
                        <br />
                        Arts
                    </span>
                </div>
            </div>
        </div>
    )
}