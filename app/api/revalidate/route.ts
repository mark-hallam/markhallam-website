import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Sanity webhook → revalidate affected pages
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { _type, slug } = body;

    // Revalidate based on content type
    switch (_type) {
      case "blogPost":
        revalidatePath("/blog");
        revalidatePath("/"); // Latest post on homepage
        if (slug?.current) {
          revalidatePath(`/blog/${slug.current}`);
        }
        revalidatePath("/rss.xml");
        revalidatePath("/sitemap.xml");
        break;

      case "project":
        revalidatePath("/projects");
        revalidatePath("/"); // Featured projects on homepage
        if (slug?.current) {
          revalidatePath(`/projects/${slug.current}`);
        }
        revalidatePath("/sitemap.xml");
        break;

      case "siteSettings":
        revalidatePath("/");
        break;

      case "learnPage":
        revalidatePath("/learn");
        break;

      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Revalidation failed" },
      { status: 500 }
    );
  }
}
