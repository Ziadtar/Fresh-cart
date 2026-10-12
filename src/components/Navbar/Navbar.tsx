"use client";

import * as React from "react";
import Link from "next/link";
import logo from "@images/download.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { InputInline } from "../SearchBar/SearchBar";
import { Button } from "../ui/button";
import {
  ChevronDown,
  Gift,
  Headset,
  Heart,
  Mail,
  Phone,
  ShoppingCart,
  Truck,
  User,
  UserPlus,
} from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <nav className="flex items-center justify-between flex-col">
      {/* top nav */}
      <div className="container mx-auto flex items-center justify-between w-full py-3 ">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex gap-2 items-center">
            <Truck size={16} color="#16A34A" fill="#16A34A" />
            Free Shipping on Orders 500 EGP
          </span>
          <span className="flex gap-2 items-center">
            <Gift size={16} fill="#16A34A" stroke="white" />
            New Arrivals Daily
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex gap-4 text-sm text-muted-foreground items-center justify-around px-4">
            <Link
              href="/"
              className="flex gap-1.5 leading-5 items-center hover:text-(--color--main)">
              <Phone size={13} fill="#6B7280" />
              <span className="text-sm leading-5 ">+1 (800) 123-4567</span>
            </Link>
            <Link
              href="/"
              className="flex gap-1.5 leading-5 items-center hover:text-(--color--main)">
              <Mail size={13} />
              <span className="text-sm leading-5 ">support@freshcart.com</span>
            </Link>
          </div>
          <span className="w-px h-4 bg-[rgba(229,231,235,1)] inline-block"></span>
          <div className="flex items-center justify-center gap-4 px-4 text-muted-foreground">
            <Link
              href="/register"
              className="flex gap-1.5 leading-5 items-center hover:text-(--color--main)">
              <User size={13} />
              <span className="text-sm leading-5 ">Sign In</span>
            </Link>
            <Link
              href="/login"
              className="flex gap-1.5 leading-5 items-center hover:text-(--color--main)">
              <UserPlus size={13} />
              <span className="text-sm leading-5 ">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
      {/* the line */}
      <div className="w-full h-px border-b-2 border-b-[#E5E7EB]"></div>
      {/* the line */}
      {/* bottom nav */}
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* right side */}
        <div className="flex items-center gap-2 py-3 grow">
          <Image src={logo} alt="logo" />
          <InputInline />
        </div>
        {/* left side */}
        <NavigationMenu className="flex items-center gap-2 py-3">
          <NavigationMenuList>
            <NavigationMenuItem className="flex md:hidden">
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* start right side list items have the left alignment */}
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/">Home</Link>}
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/shop">Shop</Link>}
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={navigationMenuTriggerStyle()}
                  render={
                    <Link href="/categories">
                      Categories <ChevronDown size={16} />
                    </Link>
                  }></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    <ListItem href="/" title="All Categories" />
                    <ListItem href="/" title="Electronics" />
                    <ListItem href="/" title="Women's Fashion" />
                    <ListItem href="/" title="Men's Fashion" />
                    <ListItem href="/" title="Beauty & Health" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/brands">Brands</Link>}
                />
              </NavigationMenuItem>
            </NavigationMenuList>
            {/* end right side list items have the left alignment */}

            {/* start right side list items have the right alignment */}
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <Link href="/contact">
                      <div className="pe-2">
                        <div className="w-full h-full flex items-center justify-center pe-3 border-e-2 border-[#E5E7EB] hover:text-muted-foreground!">
                          <div className="flex items-center gap-1 bg-[#F0FDF4] p-2.5 rounded-full">
                            <Headset color="#16A34A" className="w-5! h-5!" />
                          </div>
                          <div className="flex flex-col ps-2 ">
                            <p className="text-[12px] ">support</p>
                            <p className="text-xs font-medium">24/7 help</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  }
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <Link
                      href="/wishlist"
                      className="hover:bg-[#F3F4F6] rounded-[50%]">
                      <Heart className="w-6.25! h-5!" />
                    </Link>
                  }
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <Link
                      href="/cart"
                      className="hover:bg-[#F3F4F6] rounded-[50%]">
                      <ShoppingCart className="w-6.25! h-5!" />
                    </Link>
                  }
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <Link href="/register">
                      <Button
                        variant="outline"
                        className="w-28.75 h-10 rounded-4xl ps-2 cursor-pointer bg-green-600 text-white hover:bg-green-700 font-bold">
                        <User />
                        sign up
                      </Button>
                    </Link>
                  }
                />
              </NavigationMenuItem>
            </NavigationMenuList>
            {/* end right side list items have the right alignment */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="hover:text-(--color--main) flex w-full items-center justify-between rounded-lg p-3 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
            <div className="flex flex-col gap-1 text-sm py-2 w-50 ">
              <div className="leading-none font-medium ">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
