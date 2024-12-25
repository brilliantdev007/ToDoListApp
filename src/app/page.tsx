
"use client"
import { useRouter } from 'next/navigation';
import '../styles/index.css'
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ITask } from '@/utils/types';

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([{ id: "1", title:"tasks1", completed: false}]);
  const router = useRouter()

  const { totalTaskCount } = useMemo(() => {
    const totalTaskCount = tasks.length;

    return {
      totalTaskCount
    }
  }, [tasks]);

  const handleGotoNewTask = () => {
    router.push("/new-task");
  }

  const handleViewTask = (task: ITask) => {
    router.push(`/${task.id}`)
  }

  return (
    <div className="flex flex-col w-full mt-[-27px]">
      <button className="flex gap-2 w-full items-center justify-center rounded-lg bg-primary p-4 outline-none transition-all duration-300 hover:border-primary hover:opacity-80" onClick={handleGotoNewTask}>
        <span className='text-normal text-gray-100 font-bold leading-5'>Create Task</span>
        <Image alt="Create Task" src={"circle-plus.svg"} width={16} height={16} />
      </button>
      <div className='flex flex-col w-full mt-[84px] gap-6'>
        <div className='flex justify-between w-full'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-primary-dark font-bold leading-4'>Tasks</span>
            <div className='flex items-center justify-center px-2 py-0.5 rounded-full bg-gray-400'>
              <span className='text-xs font-bold text-gray-200'>{totalTaskCount}</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-secondary font-bold leading-4'>Completed</span>
            <div className='flex items-center justify-center px-2 py-0.5 rounded-full bg-gray-400'>
              <span className='text-xs font-bold text-gray-200'>{totalTaskCount}</span>
            </div>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div className='flex flex-col gap-3'>
            {tasks.map((task, idx) => {
              const { title } = task;
              return (
                <div
                  key={`task-item-${idx}`}
                  className='flex items-center gap-3 p-4 border rounded-lg border-gray-400 cursor-pointer hover:border-primary'
                  onClick={() => handleViewTask(task)}
                >
                  <input type="checkbox" className='checkbox'/>
                  <span className='text-sm text-gray-100 flex-1'>{title}</span>
                  <button className='hover:border-primary hover:border border border-transparent rounded'><Image alt="Delete Task" src={"trash.svg"} width={24} height={24} /></button>
                </div>
              )
            })}
          </div>
        ) : (
          <div className='flex flex-col w-full items-center justify-center py-16 px-6 rounded-lg border-t border-gray-300 gap-4'>
            <Image alt="Empty Task" src={"empty-task.svg"} width={56} height={56} />
            <span className='text-base font-bold text-gray-300'>You don't have any tasks registered yet.</span>
            <span className='text-base font-normal text-gray-300'>Create tasks and organize your to-do items.</span>
          </div>
        )}
      </div>
    </div>
  );
}
