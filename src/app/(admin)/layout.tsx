import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/admin/app-sidebar"
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} admin-theme bg-background text-foreground`}>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full">
                        <SidebarTrigger />
                        <div className="p-4">
                            {children}
                        </div>
                    </main>
                    <Toaster />
                </SidebarProvider>
            </body>
        </html>
    )
}
