import { Fragment, useRef } from 'react'

import logo from '../../assets/images/logointerviwer.png'
import { Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import './Header.css'
import Dropdown from '../../pages/Dropdown'
import { Button } from '@material-tailwind/react'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },


]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },

]
const recentPosts = [

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    const ref = useRef(null)
    const toggleClass = () => {
        ref.current.classList.toggle('show-nenu')
    }

    return (
        <>
            <header ref={ref}>
                <Popover className=" header relative bg-white">
                    <div className=" container mx-auto max-w-7xl px-6">
                        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img src={logo} alt="l" />
                                </a>
                            </div>
                            <div className="-my-2 -mr-2 md:hidden">
                                <Popover.Button onClick={toggleClass} className="tooglebtn inline-flex items-center justify-center rounded-md bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" id="navbarNav" className="hidden space-x-10">
                                <div className="menushowbtn">
                                    <Button onClick={toggleClass} className="closemenu inline-flex items-center justify-center rounded-md bg-white  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />

                                    </Button>
                                    <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 ">
                                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                            <div className="">
                                                <div className=" crossbtn flex items-center justify-between">
                                                    <div className="-mr-2">

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </Popover.Panel>

                                </div>

                                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Home
                                </a>

                                <Popover className="relative">
                                    {({ open }) => (


                                        <>

                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-500',
                                                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                                )}
                                            >

                                                <span>Product</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                            {solutions.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                                >
                                                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                            {callsToAction.map((item) => (
                                                                <div key={item.name} className="flow-root">
                                                                    <a
                                                                        href={item.href}
                                                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                                    >
                                                                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                        <span className="ml-3">{item.name}</span>
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Pricing
                                </a>


                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-500',
                                                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                                )}
                                            >
                                                <span>Resources</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/2 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                            {resources.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                                >
                                                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                                            <div>
                                                                <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                                                                <ul role="list" className="mt-4 space-y-4">
                                                                    {recentPosts.map((post) => (
                                                                        <li key={post.id} className="truncate text-base">
                                                                            <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                                {post.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="mt-5 text-sm">
                                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    View all posts
                                                                    <span aria-hidden="true"> &rarr;</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-500',
                                                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                                )}
                                            >
                                                <span>Company</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/2 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                            {resources.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                                >
                                                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                                            <div>
                                                                <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                                                                <ul role="list" className="mt-4 space-y-4">
                                                                    {recentPosts.map((post) => (
                                                                        <li key={post.id} className="truncate text-base">
                                                                            <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                                {post.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="mt-5 text-sm">
                                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    View all posts
                                                                    <span aria-hidden="true"> &rarr;</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </Popover.Panel>
                                            </Transition>

                                        </>

                                    )}
                                    {/* <div className=" navbtn hidden items-center justify-end md:flex md:flex-1 lg:w-0">


                                        <a href="#" className=" loginbtn text-[#1C2640]  whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                            Login
                                        </a>
                                        <a
                                            href="#"
                                            className=" singupbtn text-[#1C2640] ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        >
                                            Sign up
                                        </a>
                                        <Dropdown />
                                    </div> */}


                                </Popover>
                                <div className=" navbtn hidden items-center justify-end md:flex md:flex-1 lg:w-0">


                                    <a href="#" className=" loginbtn text-[#1C2640]  whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                        Login
                                    </a>

                                    <a
                                        href="#"
                                        className=" singupbtn text-[#1C2640] ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </a>
                                    <Dropdown />
                                </div>

                            </Popover.Group>

                        </div>
                    </div>

                    {/* <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="">
                                    <div className=" crossbtn flex items-center justify-between">
                                        <div className="-mr-2">
                                            <Popover.Button onClick={toggleClass} className="closemenu inline-flex items-center justify-center rounded-md bg-white  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Popover.Panel>
                    </Transition> */}
                </Popover>
            </header>
        </>
    )
}

