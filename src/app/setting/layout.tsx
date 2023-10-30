'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function SettingLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return <section className="flex flex-1">
        <div className="w-64 p-4 bg-white border">
            <div className="p-3 font-semibold text-xl">Settings</div>
            <Link className={`p-3 block ${pathname === '/setting/information' ? 'font-bold text-indigo-600 italic' : ''}`} href="information">Information</Link>
            <Link className={`p-3 block ${pathname === '/setting/account' ? 'font-bold text-indigo-600 italic' : ''}`} href="account">Account</Link>
            <Link className={`p-3 block ${pathname === '/' ? 'font-bold text-indigo-600 italic' : ''}`} href="#">Display</Link>
            <Link className={`p-3 block ${pathname === '/' ? 'font-bold text-indigo-600 italic' : ''}`} href="#">Data privacy</Link>
            <Link className={`p-3 block ${pathname === '/' ? 'font-bold text-indigo-600 italic' : ''}`} href="#">Notifications</Link>
        </div>
        <div className="flex-1">
            {children}
        </div>
    </section>
}