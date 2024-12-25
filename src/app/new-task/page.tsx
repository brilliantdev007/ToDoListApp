"use client"
import EditTask from '@/components/EditTask';
import { useRouter } from 'next/navigation';

export default function NewTask() {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    }
    return (
        <EditTask />
    );
}