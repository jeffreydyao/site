import NextLink from "next/link";

const posts = [
  {
    year: 2025,
    date: "23/07",
    name: "I'm building another AI start-up",
    route: "/another-startup",
  },
];

export const Posts = () => {
  return (
    <section className="mt-6">
      <ul className="divide-solid divide-y divide-neutral-100 group">
        {posts.map((p) => (
          <li key={p.route}>
            <NextLink
              href={p.route}
              className="flex py-4 items-center w-full gap-4 md:gap-24 hover:opacity-100 group-hover:opacity-50 transition"
            >
              <span className="text-neutral-500/75">{p.year}</span>
              <div className="flex items-center justify-between w-full">
                <h2>{p.name}</h2>
                <span className="text-neutral-500/75">{p.date}</span>
              </div>
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
