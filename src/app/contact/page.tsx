import { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import PriceSection from "@/components/contact/PriceSection";

export const metadata: Metadata = {
    title: "Contact | Socon",
    description: "Get in touch with Studio Socon for your architectural photography needs.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-white/20">
            <ContactContent />
            <PriceSection />
        </main>
    );
}
