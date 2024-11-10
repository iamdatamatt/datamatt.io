import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData, useLocation } from "@remix-run/react";
import { Layout } from "../components/Layout";
import { HeroHeader } from "../components/Header";
import { AboutSection } from "../components/AboutSection";
import { dbLoaderDiscGolf } from "../utils/db-loader";
import { generateMeta } from "../utils/meta";

interface ClemsonDiscGolfItem {
  course_name: string;
  course_description: string;
  hole_number: string;
  hole_description: string;
}

export const meta: MetaFunction = () => {
  const location = useLocation();
  return generateMeta({
    metaTitle: "The Unofficial Clemson Campus Disc Golf Courses | Matt Trombley",
    metaDescription:
      "Find out how to play the hidden disc golf courses on Clemson University's campus. The holes are places on campus you'd never expect!",
    imageUrl: "/clemson_card.png",
    imageAlt: "A Clemson Bucket List cover image",
    pathname: location.pathname,
  });
};

export async function loader({ context }: LoaderFunctionArgs) {
  return dbLoaderDiscGolf<ClemsonDiscGolfItem>({ context });
}

export default function ClemsonDiscGolfPage() {
  const { items } = useLoaderData<typeof loader>();

  // Group items by course
  const courseMap = items.reduce((acc, item) => {
    if (!acc[item.course_name]) {
      acc[item.course_name] = {
        description: item.course_description,
        holes: [],
      };
    }
    acc[item.course_name].holes.push({
      number: item.hole_number,
      description: item.hole_description,
    });
    return acc;
  }, {} as Record<string, { description: string; holes: { number: string; description: string }[] }>);

  return (
    <Layout>
      <HeroHeader
        title="The Unofficial Clemson On-Campus Disc Golf Courses"
        subtitle="Grab your discs and get to playing!"
      />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <AboutSection
          title="About These Courses"
          description={{
            __html: `All other pages that had the Clemson campus disc golf courses on them have disappeared over time,
            so I created this to preserve them for future students. If you have any questions/comments/etc, shoot me an email at 
            <a href="mailto:mattrtrombley@gmail.com" class="text-emerald-600 hover:underline">mattrtrombley@gmail.com</a>. 
            Enjoy!`,
          }}
          updated_at="November 2024"
        />

        {/* Course Display Section */}
        <div className="mt-12 space-y-8">
          {Object.entries(courseMap).map(([courseName, courseData]) => (
            <section
              key={courseName}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {courseName}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {courseData.description}
                  </p>
                </div>

                <details className="group">
                  <summary className="cursor-pointer list-none">
                    <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
                      <span>View Course Holes</span>
                      <svg
                        className="w-5 h-5 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </summary>

                  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courseData.holes
                      .sort((a, b) => parseInt(a.number) - parseInt(b.number))
                      .map((hole) => (
                        <div
                          key={hole.number}
                          className="bg-gray-50 p-6 rounded-lg shadow-lg"
                        >
                          <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            Hole {hole.number}
                          </h3>
                          <p className="text-gray-600">{hole.description}</p>
                        </div>
                      ))}
                  </div>
                </details>
              </div>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}
