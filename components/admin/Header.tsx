"use client"

import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                </Button>
                <div className="flex items-center gap-3 border-l border-border pl-4">
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-foreground">Admin User</span>
                        <span className="text-xs text-muted-foreground">Super Admin</span>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                </div>
            </div>
        </header>
    )
}
