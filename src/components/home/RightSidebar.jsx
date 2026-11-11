"use client";

import Image from "next/image";

const RightSidebar = () => {

  // TODO: Backend থেকে Sponsored Ads data আসবে
  const sponsoredAds = [
    {
      id: 1,
      title: "Learn Web Development",
      description: "Start your journey with modern web development.",
      image: "https://picsum.photos/300/200?random=1",
      link: "#",
    },
    {
      id: 2,
      title: "Build Your Career",
      description: "Improve your skills and grow your career.",
      image: "https://picsum.photos/300/200?random=2",
      link: "#",
    },
  ];

  // TODO: Backend থেকে Birthdays data আসবে
  const birthdays = [
    {
      id: 1,
      name: "Rahim Ahmed",
      image: "https://i.pravatar.cc/100?img=11",
    },
    {
      id: 2,
      name: "Karim Hasan",
      image: "https://i.pravatar.cc/100?img=12",
    },
  ];

  // TODO: Backend থেকে Friends / Contacts data আসবে
  const contacts = [
    {
      id: 1,
      name: "Sakib Hasan",
      image: "https://i.pravatar.cc/100?img=13",
      online: true,
    },
    {
      id: 2,
      name: "Nayeem Islam",
      image: "https://i.pravatar.cc/100?img=14",
      online: true,
    },
    {
      id: 3,
      name: "Fahim Ahmed",
      image: "https://i.pravatar.cc/100?img=15",
      online: false,
    },
    {
      id: 4,
      name: "Tanvir Hossain",
      image: "https://i.pravatar.cc/100?img=16",
      online: true,
    },
    {
      id: 5,
      name: "Mehedi Hasan",
      image: "https://i.pravatar.cc/100?img=17",
      online: false,
    },
  ];

  return (
    <aside className="w-full space-y-4 text-gray-900">

      {/* Sponsored Section */}
      <section>
        <h3 className="px-2 mb-3 text-[17px] font-semibold text-gray-500">
          Sponsored
        </h3>

        <div className="space-y-3">
          {sponsoredAds.map((ad) => (
            <a
              key={ad.id}
              href={ad.link}
              className="flex gap-3 rounded-lg p-2 hover:bg-gray-200 transition"
            >
              <Image
                src={ad.image}
                alt={ad.title}
                width={110}
                height={90}
                className="h-[90px] w-[110px] rounded-lg object-cover"
              />

              <div className="flex-1">
                <h4 className="font-semibold text-sm">
                  {ad.title}
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  {ad.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-300"></div>

      {/* Birthdays Section */}
      <section>
        <h3 className="px-2 mb-3 text-[17px] font-semibold text-gray-500">
          Birthdays
        </h3>

        {birthdays.length > 0 ? (
          birthdays.map((birthday) => (
            <div
              key={birthday.id}
              className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-200 cursor-pointer"
            >
              <span className="text-2xl">🎂</span>

              <div>
                <p className="text-sm">
                  <span className="font-semibold">
                    {birthday.name}
                  </span>{" "}
                  has a birthday today.
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="px-2 text-sm text-gray-500">
            No birthdays today.
          </p>
        )}
      </section>

      <div className="border-t border-gray-300"></div>

      {/* Contacts Section */}
      <section>
        <div className="flex items-center justify-between px-2 mb-3">
          <h3 className="text-[17px] font-semibold text-gray-500">
            Contacts
          </h3>

          <div className="flex items-center gap-3 text-gray-500">
            <button title="Search contacts" className="hover:text-gray-900">
              🔍
            </button>

            <button title="Options" className="hover:text-gray-900">
              •••
            </button>
          </div>
        </div>

        <div className="space-y-1">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-200 cursor-pointer"
            >
              <div className="relative">
                <Image
                  src={contact.image}
                  alt={contact.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />

                {/* Online Status */}
                <span
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                    contact.online ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
              </div>

              <span className="text-sm font-medium">
                {contact.name}
              </span>
            </div>
          ))}
        </div>
      </section>

    </aside>
  );
};

export default RightSidebar;