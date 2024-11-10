import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData, useLocation } from "@remix-run/react";
import { Layout } from "../components/Layout";
import { HeroHeader } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { AboutSection } from "../components/AboutSection";
import { dbLoader } from "../utils/db-loader";
import { generateMeta } from "../utils/meta";

interface OutdoorsItem {
  name: string;
  location: string;
  info: string;
  link: string;
}

const columns = [
  { header: "Name", accessorKey: "name", type: "text", width: 200 },
  { header: "Location", accessorKey: "location", type: "text", width: 200 },
  { header: "Info", accessorKey: "info", type: "text", width: 400 },
  { header: "Link", accessorKey: "link", type: "url", width: 200 },
];

export const meta: MetaFunction = () => {
  const location = useLocation();
  return generateMeta({
    metaTitle: "Outdoors Activities In & Around Clemson, SC | Matt Trombley",
    metaDescription:
      "Bored in Clemson? Not anymore! Here's a comprehensive list of outdoors activities that are within driving distance of Clemson, South Carolina.",
    imageUrl: "/clemson_card.png",
    imageAlt: "A Clemson Bucket List cover image",
    pathname: location.pathname,
  });
};

export async function loader({ context }: LoaderFunctionArgs) {
  return dbLoader<OutdoorsItem>({
    tableName: "clemson_outdoors",
    columns: ["name", "location", "info", "link"],
    mockData: [
      {
        name: "Visit Death Valley",
        location: "Clemson, SC",
        info: "Watch a game in Memorial Stadium",
        link: "https://www.clemsontigers.com/schedule",
      },
      {
        name: "Run Down The Hill",
        location: "Clemson, SC",
        info: "Experience the most exciting 25 seconds in college football",
        link: "https://www.clemsontigers.com/schedule",
      },
    ],
    context,
  });
}

export default function OutdoorsPage() {
  const { items } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <HeroHeader
        title="The Great Outdoors Near Clemson, SC"
        subtitle="More fun things to explore outside."
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
        <DataTable data={items} columns={columns} />
      </main>
    </Layout>
  );
}
