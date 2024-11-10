import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData, useLocation } from "@remix-run/react";
import { Layout } from "../components/Layout";
import { HeroHeader } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { AboutSection } from "../components/AboutSection";
import { dbLoader } from "../utils/db-loader";
import { generateMeta } from "../utils/meta";

interface BucketListItem {
  name: string;
  info: string;
}

const columns = [
  { header: "Name", accessorKey: "name", type: "text", width: 200 },
  { header: "Info", accessorKey: "info", type: "text", width: 400 },
];

export const meta: MetaFunction = () => {
  const location = useLocation();
  return generateMeta({
    metaTitle: "The Official Clemson Bucket List | Matt Trombley",
    metaDescription:
      "A comprehensive list of must-do activities for Clemson students before graduating, from the Monsoon Room to Solid Orange Friday.",
    imageUrl: "/clemson_card.png",
    imageAlt: "A Clemson Bucket List cover image",
    pathname: location.pathname,
  });
};

export async function loader({ context }: LoaderFunctionArgs) {
  return dbLoader<BucketListItem>({
    tableName: "clemson_bucket_list",
    columns: ["name", "info"],
    mockData: [
      {
        name: "Visit Death Valley",
        info: "Watch a game in Memorial Stadium",
      },
      {
        name: "Run Down The Hill",
        info: "Experience the most exciting 25 seconds in college football",
      },
    ],
    context,
  });
}

export default function BucketListPage() {
  const { items } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <HeroHeader
        title="The Official Clemson Bucket List"
        subtitle="Make sure you do everything here before graduating!"
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
