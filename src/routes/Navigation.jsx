import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../assets/crown.svg";
import { UserContext } from "../contexts/UserContext";
import { signOutUser } from "../utils/firebase/firebase";
import CartIcon from "../components/CartIcon";
import ThemeToggle from "../components/ThemeToggle";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const handleSignOut = async () => {
        await signOutUser();
        closeMenu();
    };

    return (
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-3 pb-8 sm:px-5 md:px-6 lg:px-8">
            <header className="sticky top-0 z-20 mb-6 pt-3 sm:mb-8 sm:pt-4">
                <div className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/75 px-4 py-4 shadow-[0_18px_50px_rgba(120,113,108,0.12)] backdrop-blur sm:rounded-4xl sm:px-5 md:flex-row md:items-center md:justify-between dark:border-white/10 dark:bg-slate-900/75 dark:shadow-[0_18px_50px_rgba(2,6,23,0.35)]">
                    <div className="flex items-center justify-between gap-3 md:flex-1">
                        <Link className="flex min-w-0 items-center gap-3 self-start md:self-auto" to="/" onClick={closeMenu}>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 p-3 sm:h-14 sm:w-14 dark:bg-stone-100">
                                <img
                                    src={CrownLogo}
                                    alt="Logo"
                                    className="h-full w-full object-contain invert dark:invert-0"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold tracking-[0.18em] text-stone-900 sm:text-xl sm:tracking-[0.25em] dark:text-stone-400">
                                    CROWN CLOTHING
                                </p>
                                <p className="text-xs text-stone-500 sm:text-base dark:text-stone-100">
                                    Everyday Essentials
                                </p>
                            </div>
                        </Link>

                        <button
                            type="button"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-900 hover:text-stone-900 md:hidden dark:border-stone-700 dark:text-stone-100 dark:hover:border-stone-100"
                        >
                            <span className="flex flex-col gap-1.5">
                                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}></span>
                                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`}></span>
                                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
                            </span>
                        </button>
                    </div>

                    <nav className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:gap-2">
                        <Link className="rounded-full px-4 py-2 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-900 hover:text-white dark:text-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-950" to="/shop">
                            SHOP
                        </Link>

                        {
                            currentUser ? (
                                <button
                                    type="button"
                                    className="rounded-full px-4 py-2 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-900 hover:text-white dark:text-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-950"
                                    onClick={handleSignOut}
                                >
                                    LOGOUT
                                </button>
                            ) : (
                                <Link className="rounded-full px-4 py-2 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-900 hover:text-white dark:text-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-950" to="/auth">
                                    LOGIN
                                </Link>
                            )
                        }

                        <Link className="rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:border-stone-900 dark:border-stone-700 dark:hover:border-stone-100" to="/cart">
                            <CartIcon />
                        </Link>
                        <ThemeToggle />
                    </nav>

                    {isMenuOpen ? (
                        <nav className="grid gap-2 border-t border-stone-200/80 pt-4 md:hidden dark:border-stone-800">
                            <Link
                                className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-900 hover:text-white dark:text-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-950"
                                to="/shop"
                                onClick={closeMenu}
                            >
                               SHOP
                            </Link>

                            {currentUser ? (
                                <button
                                    type="button"
                                    className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-900 hover:text-white dark:text-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-950"
                                    onClick={handleSignOut}
                                >
                                    LOGOUT
                                </button>
                            ) : (
                                <Link
                                    className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-900 hover:text-white dark:text-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-950"
                                    to="/auth"
                                    onClick={closeMenu}
                                >
                                    LOGIN
                                </Link>
                            )}

                            <Link
                                className="rounded-2xl border border-stone-300 px-4 py-3 transition hover:-translate-y-0.5 hover:border-stone-900 dark:border-stone-700 dark:hover:border-stone-100 flex justify-center items-center"
                                to="/cart"
                                onClick={closeMenu}
                            >
                                <CartIcon />
                            </Link>
                            <ThemeToggle />
                        </nav>
                    ) : null}
                </div>
            </header>

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default Navigation;
