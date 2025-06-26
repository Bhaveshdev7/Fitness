import ClassesTab from "./ClassesTab"

export default function classes(){
    return (
        <div className="bg-gradient-to-r from-[#0f1a2a] via-[#0f2a1a] to-[#1a2a0f] min-h-screen flex flex-col gap-16 items-center justify-center p-4">
            <h1 className="text-5xl font-semibold text-white">classes</h1>
            <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <ClassesTab 
                topic="Yoga"
                student="29 Students"
                title="Strength &amp; Sweat"
                instr="Instructor: Esther Howard"
                dic1="No. of classNamees: 30"
                dic2="Difficulty: Beginner"
                learn="Learn more"
                btn="Start a free trail"
                time="2H"
                src="https://storage.googleapis.com/a1aa/image/d83d9d00-80d1-4c3f-9a1a-90b03c6b55e7.jpg"
                />
                <ClassesTab 
                topic="Fitness"
                student="34 Students"
                title="Total Body Burnout"
                instr="Instructor: Wade Warren"
                dic1="No. of classNamees: 45"
                dic2="Difficulty: Medium"
                learn="Learn more"
                btn="Start a free trail"
                time="4H"
                src="https://storage.googleapis.com/a1aa/image/64261a80-e424-4693-9231-78f606e9066e.jpg"
                />
                <ClassesTab 
                topic="Yoga"
                student="60 Students"
                title="Bootcamp Challenge"
                instr="Instructor: Robert Fox"
                dic1="No. of classNamees: 52"
                dic2="Difficulty: Hard"
                learn="Learn more"
                btn="Start a free trail"
                time="3H"
                src="https://storage.googleapis.com/a1aa/image/19837582-b930-46d0-ac28-5d82a8d0a4a8.jpg"
                />
                
            </div>
            <button className="bg-[#ff4a00] text-white text-lg font-semibold px-16 py-3 rounded-sm" type="button">
                           See All
                        </button>
        </div>
    )
}