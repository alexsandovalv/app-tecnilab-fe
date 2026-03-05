// src/lib/woocommerce.ts

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price?: string;
  on_sale: boolean;
  description: string;
  images: string[];
  categories: string[];
}

const API_URL = 'https://tecnilab.pe/wp-json/wp/v2';

export async function getProducts(page = 1, perPage = 12): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/product?page=${page}&per_page=${perPage}&_embed`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];
    const data = await res.json();

    return data.map((item: any) => {
      const images: string[] = [];
      if (item._embedded?.['wp:featuredmedia']) {
        item._embedded['wp:featuredmedia'].forEach((media: any) => {
          if (media.source_url) images.push(media.source_url);
        });
      }

      const categories: string[] = [];
      if (item._embedded?.['wp:term']) {
        const terms = item._embedded['wp:term'].flat();
        terms.forEach((term: any) => {
          if (term.taxonomy === 'product_cat') categories.push(term.name);
        });
      }

      // Precios (A veces vienen en meta o yoast)
      const sale_price = item.yoast_head_json?.twitter_misc?.['Est. precio'] || "";
      
      return {
        id: item.id,
        name: item.title.rendered,
        slug: item.slug,
        price: sale_price || "Consultar",
        regular_price: "S/ 0", // Placeholder ya que la API publica limita este dato
        on_sale: !!sale_price,
        description: item.content.rendered,
        images: images.length > 0 ? images : ['https://tecnilab.pe/wp-content/uploads/2021/02/cropped-cropped-TECNILAB-LOGO1.png'],
        categories: categories
      };
    });
  } catch (error) {
    return [];
  }
}
