import AdminSidebar from "@/components/admin/Sidebar"
import AdminHeader from "@/components/admin/Header"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0 z-50">
                <AdminSidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-1 flex-col md:pl-64">
                <AdminHeader />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
