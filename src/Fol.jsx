import img3 from "./assets/app.png";

export default function Fol() {
    return (
        <div class="bg-[#f94700]">
            <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="flex flex-col max-w-xl text-white">
                    <h1 class="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                        Download the most loved
                        <br />
                        fitness app
                    </h1>
                    <p class="text-sm font-normal mb-8 max-w-xs">
                        Start your fitness journey with us. Join the cult!
                    </p>
                    <div class="flex gap-4">
                        <a aria-label="Get it on Google Play" href="#">
                            <img alt="Google Play store badge with black background and white text" class="h-12 w-auto" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png" width="150" />
                        </a>
                        <a aria-label="Download on the App Store" href="#">
                            <img alt="Apple App Store badge with black background and white text" class="h-12 w-auto" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJVV_MeRKMBa1AaleGyHVnNmJKMwvVSOAjw&s" width="150" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-center flex-1 relative">
                    <img alt="Three smartphones with black screens showing a fitness app interface with images of people exercising and workout classes" class="max-w-full h-auto" height="400" src={img3} width="600" />
                </div>
            </div>
        </div>
    )
}