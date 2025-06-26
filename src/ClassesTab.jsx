
export default function ClassesTab({src,topic,title,instr,dic1,dic2,learn,btn,student,time}){
    return(
         <div className="rounded-md border border-[#ff4a00] p-2 flex flex-col gap-4">
                    <img alt="Yoga className with 3 women doing upward dog pose in dark studio" className="rounded-md border border-[#ff4a00] object-cover w-full h-[210px]" height="350" src={src} width="600" />
                    <div className="flex items-center justify-between text-[10px] text-[#ff4a00] mt-1 px-1">
                        <span className="font-semibold text-lg">
                            ● {topic}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-white text-sm">
                            <i className="fas fa-users">
                            </i>
                           {student}
                        </span>
                    </div>
                    <div className="flex justify-between text-white font-semibold text-sm mt-2 px-1">
                        <span className="text-lg">
                            {title}
                        </span>
                        <span className="flex items-center gap-1">
                            <i className="far fa-clock">
                            </i>
                            {time}
                        </span>
                    </div>
                    <div className="text-white text-sm font-semibold mt-2 px-1">
                        {instr}
                    </div>
                    <ul className="text-white text-sm mt-1 px-3 space-y-0.5 list-disc list-inside font-normal">
                        <li>
                            {dic1}
                        </li>
                        <li>
                           {dic2}
                        </li>
                    </ul>
                    <div className="flex gap-16 mt-auto px-1 py-2">
                        <button className="bg-[#ff4a00] text-white text-xs font-semibold px-6 py-3 rounded-sm" type="button">
                           {learn}
                        </button>
                        <button className="border border-white text-white text-xs font-semibold px-3 py-3 rounded-sm flex-1" type="button">
                            {btn}
                        </button>
                    </div>
                </div>
    )
}