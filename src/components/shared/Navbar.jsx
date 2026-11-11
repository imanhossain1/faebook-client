"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  // TODO: BetterAuth useSession() দিয়ে login status check করবে
  // const { data: session } = authClient.useSession();
  // const isLoggedIn = !!session?.user;

  // এখন UI testing-এর জন্য true রাখলাম
  // Login page test করতে false করে দেবে
  const isLoggedIn = true;

  // TODO: Backend/Auth থেকে logged-in user-এর data আসবে
  const user = {
    name: "Imran Hossain",
    image: "https://i.pravatar.cc/150?img=12",
  };

  const [search, setSearch] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // TODO: Search input দিয়ে Backend API থেকে users/posts search করবে
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  // TODO: BetterAuth signOut() connect করবে
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const navItems = [
    { name: "Home", icon: "🏠", link: "/" },
    { name: "Video", icon: "🎬", link: "/video" },
    { name: "Marketplace", icon: "🛒", link: "/marketplace" },
    { name: "Groups", icon: "👥", link: "/groups" },
    { name: "Gaming", icon: "🎮", link: "/gaming" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">

      <nav className="flex h-16 items-center justify-between gap-3 px-3 md:px-5">

        {/* LEFT: Logo + Search */}
        <div className="flex min-w-0 items-center gap-2 md:gap-3">

          {/* Facebook Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-[40px] font-bold leading-none text-blue-600">
              f
            </span>
          </Link>

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="flex h-10 w-36 items-center gap-2 rounded-full bg-gray-100 px-3 sm:w-52 lg:w-64"
          >
            <span className="text-gray-500">🔍</span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Facebook"
              className="w-full bg-transparent text-sm outline-none"
            />
          </form>

        </div>

        {/* CENTER: Navigation */}
        {isLoggedIn && (
          <div className="hidden h-full flex-1 items-center justify-center gap-2 md:flex lg:gap-5">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                title={item.name}
                className={`flex h-full min-w-12 flex-1 items-center justify-center border-b-4 text-2xl transition hover:bg-gray-100 ${
                  item.name === "Home"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500"
                }`}
              >
                {item.icon}
              </Link>
            ))}

          </div>
        )}

        {/* RIGHT: Auth Buttons or User Actions */}
        <div className="flex shrink-0 items-center gap-2">

          {!isLoggedIn ? (

            // BEFORE LOGIN:
            // Login এবং Sign Up button দেখাবে
            <>
              <Link
                href="/login"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Log In
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-200"
              >
                Sign Up
              </Link>
            </>

          ) : (

            // AFTER LOGIN:
            // Create, Messenger, Notifications, Profile দেখাবে
            <>
              <button
                title="Create"
                className="hidden h-10 w-10 rounded-full bg-gray-100 text-xl hover:bg-gray-200 sm:block"
              >
                ➕
              </button>

              <Link
                href="/messenger"
                title="Messenger"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl hover:bg-gray-200"
              >
                💬
              </Link>

              <Link
                href="/notifications"
                title="Notifications"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl hover:bg-gray-200"
              >
                🔔
              </Link>

              {/* Profile Menu */}
              <div className="relative">

                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-1 rounded-full hover:bg-gray-100"
                >
                  <Image
                    src={user.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="hidden text-xs text-gray-500 sm:block">
                    ▼
                  </span>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 top-12 w-64 rounded-xl bg-white p-2 shadow-xl">

                    <Link
                      href="/profile"
                      className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                    >
                      <Image
                        src={user.image}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />

                      <span className="font-semibold">
                        {user.name}
                      </span>
                    </Link>

                    <div className="my-2 border-t"></div>

                    <Link
                      href="/settings"
                      className="block rounded-lg p-3 text-sm hover:bg-gray-100"
                    >
                      ⚙️ Settings & Privacy
                    </Link>

                    <Link
                      href="/help"
                      className="block rounded-lg p-3 text-sm hover:bg-gray-100"
                    >
                      ❓ Help & Support
                    </Link>

                    {/* TODO: Logout করলে BetterAuth signOut() করবে */}
                    <button
                      onClick={handleLogout}
                      className="w-full rounded-lg p-3 text-left text-sm hover:bg-gray-100"
                    >
                      🚪 Log Out
                    </button>

                  </div>
                )}

              </div>
            </>
          )}

        </div>

      </nav>

      {/* Mobile Navigation */}
      {isLoggedIn && (
        <div className="flex justify-around border-t py-2 md:hidden">

          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="rounded-lg px-3 py-2 text-xl hover:bg-gray-100"
              title={item.name}
            >
              {item.icon}
            </Link>
          ))}

        </div>
      )}

    </header>
  );
};

export default Navbar;