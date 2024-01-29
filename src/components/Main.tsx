import home from '/home.svg'
import lineChart from '/line-chart.svg'
import shoppingBag from '/shopping-bag.svg'
import plusSquare from '/plus-square.svg'
import rows from '/rows.svg'
import users from '/users.svg'
import alert from '/alert.svg'
import settings from '/settings.svg'
import codeSquare from '/code-square.svg'
import support from '/support.svg'
import logo from '/logo.svg'
import user from '/user.svg'
import zap from '/zap.svg'
import cube from '/cube.svg'
import logOut from '/log-out.svg'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenuSeparator } from './ui/dropdown-menu'
import { useStore } from '@/store/submenu'

interface NavButtonProps {
    id: number
    iconSource: string
    
}

function NavButton({id, iconSource}:NavButtonProps): JSX.Element {
    const sub = useStore((state) => state.sub)
    const setSub = useStore((state) => state.changeSub)

    return(
        <Button onClick={() => setSub(id)} className={sub === id ? "bg-primary-foreground/30 hover:bg-primary-foreground/30" : ""} variant="default" size="icon">
            <img className={sub === id ? "opacity-100" : "opacity-80" }src={iconSource}/>
        </Button>
    )
}


export default function Main():JSX.Element {
    
    
    return(
        <>
            <div className="w-[4.6rem] select-none font-[Inter] border-r-red-800 border-r-2 h-[100vh] bg-primary">
                <div className="grid py-5 content-between h-full text-white">
                    <div className="grid justify-items-center gap-0.5">
                        <img className='h-8 w-8 opacity-90 mb-3' src={logo} />
                        
                        <NavButton id={1} iconSource={home}></NavButton>

                        <NavButton id={2} iconSource={lineChart}></NavButton>

                        <NavButton id={3} iconSource={shoppingBag}></NavButton>

                        <NavButton id={4} iconSource={plusSquare}></NavButton>

                        <NavButton id={5} iconSource={rows}></NavButton>

                        <NavButton id={6} iconSource={users}></NavButton>

                        <NavButton id={7} iconSource={alert}></NavButton>
                        
                        <NavButton id={8} iconSource={settings}></NavButton>
                    </div>
                    <div className="grid justify-items-center gap-0.5">
                        <NavButton id={9} iconSource={codeSquare}></NavButton>

                        <NavButton id={10} iconSource={support}></NavButton>
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="mt-5 h-fit w-fit p-0.5 hover:bg-muted-foreground rounded-full">
                                    <Avatar className='h-12 w-12'>
                                        <AvatarImage src='https://res.cloudinary.com/dbiudcrba/image/upload/v1684071665/mobile-03_bzpvts.jpg' />
                                        <AvatarFallback>CB</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56 ml-16 -mb-12 bg-primary border-muted-foreground/70 text-white font-[Inter]' forceMount>
                                <DropdownMenuItem>
                                    <div className='flex'>
                                        <Avatar className='h-8 w-8'>
                                            <AvatarImage src='https://res.cloudinary.com/dbiudcrba/image/upload/v1684071665/mobile-03_bzpvts.jpg' />
                                            <AvatarFallback>CB</AvatarFallback>
                                        </Avatar>
                                        <div className='ml-3 text-xs my-auto select-none'>
                                            <p className='font-semibold'>Johnathan Doe</p>
                                            <p className="font-medium leading-none opacity-70">address@email.com</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                
                                <DropdownMenuSeparator className='bg-muted-foreground/70' />
                                
                                <DropdownMenuItem className='group py-2'>
                                    <img className='w-4 h-4 opacity-85 group-hover:opacity-100' src={user} alt="" />
                                    <p className='ml-2 text-xs font-medium'>View profile</p>
                                    <DropdownMenuShortcut className='group-hover:opacity-100'>⌘K&#10142;P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem className='group py-2'>
                                    <img className='w-4 h-4 opacity-85 group-hover:opacity-100' src={settings} alt="" />
                                    <p className='ml-2 text-xs font-medium'>Account settings</p>
                                    <DropdownMenuShortcut className='group-hover:opacity-100'>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem className='group py-2'>
                                    <img className='w-4 h-4 opacity-85 group-hover:opacity-100' src={zap} alt="" />
                                    <p className='ml-2 text-xs font-medium'>Keyboard shortcuts</p>
                                    <DropdownMenuShortcut className='group-hover:opacity-100'>?</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                
                                <DropdownMenuSeparator className='bg-muted-foreground/70' />

                                <DropdownMenuItem className='group py-2'>
                                    <img className='w-4 h-4 opacity-85 group-hover:opacity-100' src={cube} alt="" />
                                    <p className='ml-2 text-xs font-medium'>Updates</p>
                                    <DropdownMenuShortcut className='group-hover:opacity-100'>⌘A</DropdownMenuShortcut>
                                </DropdownMenuItem>

                                <DropdownMenuItem className='group py-2'>
                                    <img className='w-4 h-4 opacity-85 group-hover:opacity-100' src={logOut} alt="" />
                                    <p className='ml-2 text-xs font-medium'>Log out</p>
                                    <DropdownMenuShortcut className='group-hover:opacity-100'>⌘K&#10142;P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                            
                        </DropdownMenu>

                    </div>
                    
                </div>
            </div>
        </>
    )
}