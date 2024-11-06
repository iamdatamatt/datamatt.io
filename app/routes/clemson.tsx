import type { MetaFunction } from "@remix-run/cloudflare";
import { Layout } from "../components/Layout";
import { HeroHeader } from "../components/Header";
import { ActivityCard } from "../components/ActivityCard";
import { AboutSection } from "../components/AboutSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Things to Do in Clemson, SC" },
    {
      description:
        "A comprehensive list of activities and places to visit in and around Clemson, South Carolina",
    },
  ];
};

const activities = [
  {
    title: "Clemson Bucket List",
    description: "Everything you need to do before you graduate.",
    icon: "/paw.svg",
    buttonText: "Bucket List",
    buttonHref: "/bucket-list",
  },
  {
    title: "Fun Places to Visit",
    description: "Movie theaters, mini golf, and more.",
    icon: "/fun.webp",
    buttonText: "Fun Places",
    buttonHref: "/funplaces",
  },
  {
    title: "Campus Disc Golf",
    description: "The unofficial on-campus disc golf courses.",
    icon: "/disc-golf.webp",
    buttonText: "Disc Golf",
    buttonHref: "/clemson-disc-golf",
  },
  {
    title: "Hiking Spots",
    description: "All the best and most scenic spots to hike in the area.",
    icon: "/hike.webp",
    buttonText: "Hiking",
    buttonHref: "/hiking",
  },
  {
    title: "Misc. Outdoors",
    description: "More outdoors, including parks and disc golf courses.",
    icon: "/outdoors.webp",
    buttonText: "Outdoors",
    buttonHref: "/outdoors",
  },
  {
    title: "Misc. Attractions",
    description: "Museums, farmer's markets, and more.",
    icon: "/ride.webp",
    buttonText: "Attractions",
    buttonHref: "/attractions",
  },
];

export default function ClemsonPage() {
  return (
    <Layout>
      <HeroHeader
        title="A List of Things to Do In & Around Clemson, South Carolina"
        subtitle="Bored in Clemson? I've got you covered."
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <AboutSection
          title="About This List"
          description={{
            __html: `This list was started out of a lack of any central place to see all the things
            that you can do while you're a Clemson student. I hope this can be a resource for students
            for years to come. If you have any questions/comments/etc, shoot me an email at 
            <a href="mailto:mattrtrombley@gmail.com" class="text-emerald-600 hover:underline">mattrtrombley@gmail.com</a>. 
            Enjoy!`,
          }}
          updated_at="November 2024"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
