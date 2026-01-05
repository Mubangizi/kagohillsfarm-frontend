import { client } from './sanity';
import { urlFor } from './sanity';

// TypeScript types for Gallery data
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface GalleryItem {
  _id: string;
  _type: 'gallery';
  title: string;
  mainImage: SanityImage;
  category?: string;
  images?: SanityImage[];
  order: number;
  published: boolean;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  alt: string;
  title?: string;
  category?: string;
  images?: SubImage[];
}

export interface SubImage {
  id: string;
  imageUrl: string;
  alt: string;
}

/**
 * Fetch all published gallery items from Sanity
 */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const query = `*[_type == "gallery" && published == true] | order(order asc) {
    _id,
    title,
    mainImage,
    category,
    images,
    order
  }`;

  try {
    const galleryItems: GalleryItem[] = await client.fetch(query);
    
    // Transform Sanity data to match the frontend format
    return galleryItems.map((item) => {
      const mainImageUrl = item.mainImage 
        ? urlFor(item.mainImage).width(800).quality(80).auto('format').fit('crop').url()
        : '';

      const subImages = item.images?.map((img, imgIndex) => ({
        id: `${item._id}-${imgIndex}`,
        imageUrl: urlFor(img).width(1200).quality(85).auto('format').fit('crop').url(),
        alt: item.title || 'Gallery image',
      })) || [];

      return {
        id: item._id,
        imageUrl: mainImageUrl,
        alt: item.title || 'Gallery image',
        title: item.title,
        category: item.category,
        images: subImages.length > 0 ? subImages : undefined,
      };
    });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

