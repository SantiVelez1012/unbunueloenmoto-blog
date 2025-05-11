import React from 'react';
import ChannelLogo from '../channel-logo/channelLogo';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10" data-theme="dark">
            <aside>
                <ChannelLogo />
                <p>
                    Un Buñuelo en Moto
                    <br />
                    Un café con leche para este buñuelo...
                    <br />
                    Todos los derechos reservados - 2025
                </p>
            </aside>
            <nav>
                <h6 className="footer-title z-0">Redes Sociales</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link href='https://www.youtube.com/@unbunueloenmoto' target='_blank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </Link>
                    <Link href='https://www.facebook.com/profile.php?id=61565367096663' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </Link>

                    <Link href='https://www.instagram.com/unbunueloenmoto/' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer