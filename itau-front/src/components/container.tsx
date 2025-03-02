import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Container({ children }: Props) {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto overflow-hidden'>
            {children}
        </div>
    )
}