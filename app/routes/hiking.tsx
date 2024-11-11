import type {
  LinksFunction,
  MetaFunction,
  LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { HeroHeader } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { AboutSection } from "../components/AboutSection";
import { dbLoader } from "../utils/db-loader";
import { generateMeta } from "../utils/meta";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
interface HikingItem {
  name: string;
  location: string;
  info: string;
  link: string;
}

const canonical = "https://datamatt.io/hiking";

const columns = [
  { header: "Name", accessorKey: "name", type: "text", width: 200 },
  { header: "Location", accessorKey: "location", type: "text", width: 200 },
  {
    header: "Minutes from Clemson",
    accessorKey: "minutes_from_clemson",
    type: "text",
    width: 200,
  },
  { header: "Latitude", accessorKey: "latitude", type: "text" },
  { header: "Longitude", accessorKey: "longitude", type: "text" },
  { header: "Trail Length", accessorKey: "trail_length", type: "text" },
  { header: "Info", accessorKey: "info", type: "text", width: 400 },
  { header: "Link", accessorKey: "link", type: "url", width: 200 },
];

export const meta: MetaFunction = () => {
  return generateMeta({
    metaTitle: "Hiking In & Around Clemson, SC | Matt Trombley",
    metaDescription:
      "Bored in Clemson? Not anymore! Here's a comprehensive list of hiking spots that are within driving distance of Clemson, South Carolina.",
    imageUrl: "/clemson_card.png",
    imageAlt: "A Clemson Bucket List cover image",
    canonical,
  });
};

export const links: LinksFunction = () => {
  return [
    { rel: "canonical", href: canonical },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  return dbLoader<HikingItem>({
    tableName: "clemson_hiking",
    columns: [
      "name",
      "location",
      "minutes_from_clemson",
      "latitude",
      "longitude",
      "trail_length",
      "info",
      "link",
    ],
    mockData: [
      {
        name: "Visit Death Valley",
        location: "Clemson, SC",
        minutes_from_clemson: 15,
        latitude: 34.6792,
        longitude: -82.8385,
        trail_length: "1.5 miles",
        info: "Watch a game in Memorial Stadium",
        link: "https://www.clemsontigers.com/schedule",
      },
      {
        name: "Run Down The Hill",
        location: "Clemson, SC",
        minutes_from_clemson: 15,
        latitude: 34.6792,
        longitude: -82.8385,
        trail_length: "1.5 miles",
        info: "Experience the most exciting 25 seconds in college football",
        link: "https://www.clemsontigers.com/schedule",
      },
    ],
    context,
  });
}

export default function HikingPage() {
  const { items } = useLoaderData<typeof loader>();
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <HeroHeader
        title="Hiking Near Clemson, SC"
        subtitle="Explore simple trails or intense mountain adventures."
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
        <AboutSection
          title="Clemson Experimental Forest Map"
          description={{
            __html: `Reddit user ItalianMathematician has created an awesome updated map of the Experimental Forest, 
            including new trails, service roads, and removing trails that no longer exist. You can check it out by 
            <a href="https://www.reddit.com/r/Clemson/comments/odbdky/clemson_experimental_forest_updated_trail_map/" class="text-emerald-600 hover:underline">clicking here!</a>`,
          }}
        />
        <DataTable data={items} columns={columns} />
      </main>
      <Footer />
    </div>
  );
}
