'use client';
import './globals.css'
import Link from "next/link"
import styles from "./utils.module.css";
import { useSelectedLayoutSegment } from 'next/navigation'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const activeSegment = useSelectedLayoutSegment()

  const links = [
    {label: ' Inbox', path: '/', targetSegment: null}, 
    {label: ' Messages', path: '/Messages', targetSegment: 'Messages'},
    {label: ' Contacts', path: '/Contacts', targetSegment: 'Contacts'}
  ];
  return (
    <html lang="en">
      <body>
        <div className={`${styles.sidebar}`}>
            <Link href="/">Inbox</Link>
        <Link href="/Messages">Messages</Link>
        <Link href="/Contact">Contacts</Link>
        </div>
        <div className={`${styles.sidebar}`}>
        {links.map ( (l, i) => {
            return <Link 
                  key={i} 
                  href={l.path}
                  style={{textDecoration: (activeSegment === l.targetSegment) ? 'underline' : 'none'}}>
                {l.label}
            </Link>
        })}
        </div>
        <div className={`${styles.content}`}></div>
        <main className="min-h-screen bg-background flex flex-col items-center">
            {children}
        </main>
      </body>
    </html>

    
  )
}
