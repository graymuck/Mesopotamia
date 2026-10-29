import { CARD_IMAGES } from "@/data/card-images";

/** Local, licensed card photographs. Crop positions are curated with each asset. */
export function CardImage({ imageKey, className = "", decorative = false, sizes = "(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw" }: { imageKey: string; className?: string; decorative?: boolean; sizes?: string }) {
  const image = CARD_IMAGES[imageKey];
  if (!image) return null;
  return (
    <img
      src={image.src}
      srcSet={image.small + " 480w, " + image.src + " 960w"}
      sizes={sizes}
      alt={decorative ? "" : image.alt}
      lang={decorative ? undefined : "en"}
      width={960}
      height={720}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: image.position, objectFit: image.fit ?? "cover" }}
      className={"zoom-img aspect-[4/3] w-full bg-muted object-cover " + className}
    />
  );
}
