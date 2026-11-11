"use client";

import Image from "next/image";

const HomeContent = () => {

  // TODO: Backend থেকে logged-in user-এর profile data আনবে
  const currentUser = {
    name: "Imran Hossain",
    image: "https://i.pravatar.cc/150?img=12",
  };

  // TODO: Backend থেকে friends-এর stories আনবে
  const stories = [
    {
      id: 1,
      name: "Rahim Ahmed",
      image: "https://i.pravatar.cc/150?img=11",
      storyImage: "https://picsum.photos/300/500?random=11",
    },
    {
      id: 2,
      name: "Karim Hasan",
      image: "https://i.pravatar.cc/150?img=13",
      storyImage: "https://picsum.photos/300/500?random=12",
    },
    {
      id: 3,
      name: "Sakib Hasan",
      image: "https://i.pravatar.cc/150?img=14",
      storyImage: "https://picsum.photos/300/500?random=13",
    },
  ];

  // TODO: Backend থেকে posts collection-এর data আনবে
  // TODO: প্রতিটি post-এর user, image, likes, comments, createdAt আনবে
  const posts = [
    {
      id: 1,
      userName: "Rahim Ahmed",
      userImage: "https://i.pravatar.cc/150?img=11",
      createdAt: "2 hours ago",
      description: "Enjoying a beautiful day with friends! ❤️",
      postImage: "https://picsum.photos/700/450?random=20",
      likes: 120,
      comments: 25,
      shares: 8,
    },
    {
      id: 2,
      userName: "Karim Hasan",
      userImage: "https://i.pravatar.cc/150?img=13",
      createdAt: "5 hours ago",
      description: "Learning React and Next.js. Keep learning, keep growing! 🚀",
      postImage: "https://picsum.photos/700/450?random=21",
      likes: 85,
      comments: 14,
      shares: 5,
    },
  ];

  return (
    <div className="w-full space-y-4">

      {/* Create Post */}
      <section className="rounded-xl bg-white p-4 shadow-sm">

        <div className="flex items-center gap-3">

          <Image
            src={currentUser.image}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />

          {/* TODO: Click করলে Create Post Modal open করবে */}
          <button className="flex-1 rounded-full bg-gray-100 px-4 py-3 text-left text-gray-500 hover:bg-gray-200">
            What's on your mind, {currentUser.name.split(" ")[0]}?
          </button>

        </div>

        <div className="my-3 border-t"></div>

        <div className="grid grid-cols-3 gap-2">

          <button className="rounded-lg py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
            🔴 Live Video
          </button>

          <button className="rounded-lg py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
            🖼️ Photo/Video
          </button>

          <button className="rounded-lg py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
            😊 Feeling
          </button>

        </div>
      </section>

      {/* Stories */}
      <section className="rounded-xl bg-white p-4 shadow-sm">

        <h2 className="mb-3 text-lg font-bold text-gray-800">
          Stories
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-2">

          {/* TODO: First card will be current user's Create Story */}
          <button className="relative min-w-[105px] overflow-hidden rounded-xl border bg-gray-100">
            <div className="flex h-36 items-center justify-center text-3xl">
              ➕
            </div>
            <div className="bg-white p-2 text-center text-xs font-semibold">
              Create Story
            </div>
          </button>

          {stories.map((story) => (
            <div
              key={story.id}
              className="relative min-w-[105px] overflow-hidden rounded-xl"
            >
              <Image
                src={story.storyImage}
                alt="Story"
                width={150}
                height={200}
                className="h-44 w-full object-cover"
              />

              <Image
                src={story.image}
                alt={story.name}
                width={38}
                height={38}
                className="absolute left-2 top-2 h-10 w-10 rounded-full border-4 border-blue-500"
              />

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 pt-8">
                <p className="text-xs font-semibold text-white">
                  {story.name}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Posts Feed */}
      <section className="space-y-4">

        {posts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-xl bg-white shadow-sm"
          >

            {/* Post Header */}
            <div className="flex items-center justify-between p-4">

              <div className="flex items-center gap-3">

                <Image
                  src={post.userImage}
                  alt={post.userName}
                  width={42}
                  height={42}
                  className="rounded-full"
                />

                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {post.userName}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {post.createdAt} · 🌎
                  </p>
                </div>

              </div>

              {/* TODO: Post owner হলে Edit/Delete option দেখাবে */}
              <button className="rounded-full px-3 py-1 text-xl text-gray-500 hover:bg-gray-100">
                •••
              </button>

            </div>

            {/* Post Description */}
            <div className="px-4 pb-3">
              <p className="text-sm text-gray-800">
                {post.description}
              </p>
            </div>

            {/* Post Image */}
            {post.postImage && (
              <Image
                src={post.postImage}
                alt="Post image"
                width={700}
                height={450}
                className="max-h-[500px] w-full object-cover"
              />
            )}

            {/* Like and Comment Count */}
            <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-500">

              <p>
                👍 ❤️ {post.likes}
              </p>

              <p>
                {post.comments} comments · {post.shares} shares
              </p>

            </div>

            <div className="mx-4 border-t"></div>

            {/* Post Actions */}
            <div className="grid grid-cols-3 px-2 py-2">

              {/* TODO: Like button click করলে Backend-এ like save/update করবে */}
              <button className="rounded-lg py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100">
                👍 Like
              </button>

              {/* TODO: Click করলে Comment section open হবে */}
              <button className="rounded-lg py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100">
                💬 Comment
              </button>

              {/* TODO: Share functionality Backend-এ connect করবে */}
              <button className="rounded-lg py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100">
                ↗️ Share
              </button>

            </div>

          </article>
        ))}

      </section>

    </div>
  );
};

export default HomeContent;