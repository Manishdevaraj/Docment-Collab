import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"


function Header({children,className}:HeaderProps) {
  return (
    <div className={cn("header",className)}>
        <Link href="/" className="md:flex-1">
        <Image
        src="/logo.jpg"
        alt="Logo"
        width={120}
        height={32}
        className="hidden md:block rounded-full size-12"
        />
        <Image
        src="/logo.jpg"
        alt="Logo"
        width={32}
        height={32}
        className="block mr-2 rounded-full size-12 md:hidden"
        />
        
        </Link>
        {children}
    </div>
  )
}

export default Header