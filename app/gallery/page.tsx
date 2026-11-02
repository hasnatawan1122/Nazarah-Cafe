import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryClient, GalleryItem } from "./GalleryClient";
import galleryData from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Photo Gallery | Tohfa Sweets & Nazarah Cafe",
  description:
    "Explore photos of our handcrafted mithai, wedding cakes, fresh bakery delicacies, and Nazarah Cafe dining ambiance in Vehari.",
};

export default function GalleryPage() {
  const items = galleryData as GalleryItem[];

  return (
    <div>
      <PageHero
        badge="Moments &amp; Creations"
        title="Our Sweet Gallery"
        subtitle="Take a peek at our fresh counter displays, live kitchen preparations, wedding cakes, and cozy cafe corners."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />
      <GalleryClient items={items} />
    </div>
  );
}

