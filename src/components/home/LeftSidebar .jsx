"use client";

import Image from "next/image";

const LeftSidebar = () => {
  // TODO: Backend থেকে logged-in user-এর name ও profile image আসবে
  const user = {
    name: "Imran Hossain",
    image: "https://i.pravatar.cc/150?img=12",
  };

  // TODO: Backend থেকে user's shortcuts / joined groups আসবে
  const shortcuts = [
    { name: "Programming Hero", image: "https://i.pravatar.cc/100?img=1" },
    { name: "Web Development", image: "https://i.pravatar.cc/100?img=2" },
    { name: "JavaScript Developers", image: "https://i.pravatar.cc/100?img=3" },
  ];

  const menuItems = [
    { icon: "👥", name: "Friends" },
    { icon: "🕒", name: "Memories" },
    { icon: "💾", name: "Saved" },
    { icon: "👨‍👩‍👧‍👦", name: "Groups" },
    { icon: "🎬", name: "Video" },
    { icon: "🛒", name: "Marketplace" },
    { icon: "📅", name: "Events" },
    { icon: "📈", name: "Feeds" },
  ];

  return (
    <aside className="w-full space-y-2 text-gray-900">

      {/* User Profile */}
      <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-200 cursor-pointer">
        <Image
          src={user.image}
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full"
        />
        <h3 className="font-semibold text-[15px]">
          {user.name}
        </h3>
      </div>

      {/* Menu Items */}
      <div className="space-y-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-200 cursor-pointer"
          >
            <span className="text-2xl w-9 text-center">
              {item.icon}
            </span>

            <span className="font-medium text-[15px]">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 my-3"></div>

      {/* Your Shortcuts */}
      <div className="flex items-center justify-between px-2">
        <h3 className="font-semibold text-gray-600">
          Your shortcuts
        </h3>

        <button className="text-blue-600 hover:bg-gray-200 rounded-md px-2 py-1 text-sm">
          Edit
        </button>
      </div>

      {/* Dynamic Shortcuts */}
      <div className="space-y-1">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.name}
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-200 cursor-pointer"
          >
            <Image
              src={shortcut.image}
              alt={shortcut.name}
              width={36}
              height={36}
              className="rounded-lg"
            />

            <span className="font-medium text-[14px]">
              {shortcut.name}
            </span>
          </div>
        ))}
      </div>

      <div className="px-2 pt-3 text-xs text-gray-500 leading-6">
        Privacy · Terms · Advertising · Ad Choices · Cookies ·
        More · Meta © 2026
      </div>

    </aside>
  );
};

export default LeftSidebar;