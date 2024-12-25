"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../styles/index.css'
import { TASK_COLORS } from '@/utils/constants';

export default function EditTask() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <div className="flex flex-col w-full mt-[91px] gap-12">
            <button className="outline-none transition-all duration-300 hover:opacity-80" onClick={handleBack}>
                <Image alt="Back" src={"arrow-left.svg"} width={24} height={24} />
            </button>
            <div className='flex flex-col gap-3'>
                <span className='text-sm font-bold text-primary-dark'>Title</span>
                <input placeholder='Ex. Brush you teeth' className='bg-gray-500 p-4 rounded-lg border border-gray-400 text-sm leading-4 text-gray-100 placeholder:text-sm placeholder:text-gray-100 placeholder:opacity-40 hover:border-primary focus-visible:outline-none focus-visible:border-primary focus:border-primary' />
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-sm font-bold text-primary-dark'>Color</span>
                <div className='flex align-items gap-4'>
                    {TASK_COLORS.map((color, idx) => {
                        return (
                            <div key={`task-color-${idx}`} className={`rounded-full w-[52px] h-[52px]`} style={{ backgroundColor: color }}></div>
                        )
                    })}
                </div>
            </div>
            <button className="flex gap-2 w-full items-center justify-center rounded-lg bg-primary p-4 outline-none transition-all duration-300 hover:border-primary hover:opacity-80" >
                <span className='text-normal text-gray-100 font-bold leading-5'>Add Task</span>
                <Image alt="Create Task" src={"circle-plus.svg"} width={16} height={16} />
            </button>
        </div>
    );
}