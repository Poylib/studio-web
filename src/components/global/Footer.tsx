import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-950 py-12 text-neutral-400 border-t border-neutral-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-tighter">SOCON</h3>
                        <p className="text-sm leading-relaxed">
                            Spatial design studio crafting immersive environments and architectural experiences.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <p>123 Design District</p>
                            </li>
                            <li>
                                <p>Seoul, South Korea 04567</p>
                            </li>
                            <li>
                                <a href="mailto:hello@socon.studio" className="hover:text-white transition-colors">
                                    hello@socon.studio
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t border-neutral-900 pt-8 text-xs md:flex-row">
                    <p>&copy; {new Date().getFullYear()} Socon Studio. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Built by Socon.</p>
                </div>
            </div>
        </footer>
    );
}
