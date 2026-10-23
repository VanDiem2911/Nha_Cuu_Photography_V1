import sizes from "./photo-sizes.json";

export const CATEGORIES = [
  {
    slug: "bau",
    name: "Ảnh Bầu",
    blurb: "Lưu giữ hành trình mang thai của mẹ trong những khung hình dịu dàng.",
  },
  {
    slug: "beauty",
    name: "Beauty & cá nhân",
    blurb: "Chân dung nghệ thuật, concept cá nhân cho những ngày muốn ghi nhớ.",
  },
  {
    slug: "be",
    name: "Ảnh Bé",
    blurb: "Sơ sinh, thôi nôi, Giáng sinh và những khoảnh khắc đầu đời của bé.",
  },
  {
    slug: "gia-dinh",
    name: "Gia đình",
    blurb: "Khung hình trọn vẹn cho cả nhà, từ ba mẹ con đến nhiều thế hệ.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export type Photo = { src: string; width: number; height: number; alt: string };

export type Concept = {
  slug: string;
  name: string;
  category: CategorySlug;
  summary: string;
  description: string;
  photos: Photo[];
};

type ConceptInput = Omit<Concept, "photos"> & { photoCount: number };

// Ảnh của concept nằm ở public/sites/nha-cuu/photos/<slug>-<n>.jpg (kích thước trong photo-sizes.json).
function defineConcept({ photoCount, ...concept }: ConceptInput): Concept {
  const photos = Array.from({ length: photoCount }, (_, i) => {
    const file = `${concept.slug}-${i + 1}.jpg`;
    const size = (sizes as Record<string, { width: number; height: number }>)[file];
    if (!size) throw new Error(`Thiếu ảnh ${file} trong photo-sizes.json`);
    return {
      src: `/sites/nha-cuu/photos/${file}`,
      width: size.width,
      height: size.height,
      alt: `${concept.name}, ảnh ${i + 1}`,
    };
  });
  return { ...concept, photos };
}

// Tên và mô tả concept được đặt theo nội dung ảnh — studio nên rà lại và đổi sang tên gọi thực tế.
export const CONCEPTS: Concept[] = [
  defineConcept({
    slug: "ao-dai-hong-nen-xanh-reu",
    name: "Áo dài hồng nền xanh rêu",
    category: "beauty",
    summary: "Áo dài hồng, bình hoa và bộ ấm trà trên phông xanh rêu.",
    description:
      "Chân dung nữ tính trong áo dài hồng, bối cảnh bàn gỗ, bình hoa hồng và bộ ấm trà trên phông xanh rêu. Hợp với ảnh beauty, ảnh kỷ niệm hoặc concept cá nhân mang nét truyền thống nhẹ nhàng.",
    photoCount: 5,
  }),
  defineConcept({
    slug: "bau-xanh-pastel-thu-bong",
    name: "Bầu xanh pastel và thú bông",
    category: "bau",
    summary: "Cặp đôi tông xanh pastel cùng bóng bay và thú bông.",
    description:
      "Bối cảnh trắng – xanh pastel với sofa, chăn caro, bóng bay và thú bông. Hợp với các cặp đôi muốn bộ ảnh bầu vui tươi, gần gũi.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "bau-giang-sinh-do",
    name: "Bầu Giáng sinh đỏ",
    category: "bau",
    summary: "Phông đỏ, cây thông, hộp quà và mây bông trắng.",
    description:
      "Concept Giáng sinh dành cho mẹ bầu: phông đỏ nổi bật, cây thông phủ tuyết, hộp quà và lớp mây bông trắng mềm mại.",
    photoCount: 4,
  }),
  defineConcept({
    slug: "bau-den-trang-toi-gian",
    name: "Bầu tối giản đen trắng",
    category: "bau",
    summary: "Ảnh đen trắng và áo thun, quần jeans trên phông xám.",
    description:
      "Phong cách tối giản, tập trung vào cảm xúc của hai vợ chồng. Có ảnh đen trắng và ảnh màu với trang phục đời thường trên phông xám.",
    photoCount: 4,
  }),
  defineConcept({
    slug: "bau-voan-anh-vang",
    name: "Bầu voan ánh vàng",
    category: "bau",
    summary: "Váy trắng voan bay cùng ánh sáng vàng ấm.",
    description:
      "Váy trắng voan bay, ánh sáng vàng ấm, cột trụ và bình hoa tạo nên bộ ảnh bầu nghệ thuật, mềm mại.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "bau-vay-trang-nen-xanh-reu",
    name: "Bầu váy trắng nền xanh rêu",
    category: "bau",
    summary: "Váy trắng ôm dáng và hoa trắng trên phông xanh rêu.",
    description:
      "Váy trắng ôm dáng, hoa trắng và bàn voan trên phông xanh rêu — tối giản, thanh lịch, làm nổi bật đường nét của mẹ.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "gia-dinh-vay-kem-canh-kho",
    name: "Gia đình váy kem và cành khô",
    category: "gia-dinh",
    summary: "Tông kem – xám, váy dài và cành khô trên nền trắng.",
    description:
      "Gia đình nhỏ trong tông kem – xám, váy dài thướt tha, cành khô trang trí trên nền trắng sáng. Hợp với ảnh gia đình có bé nhỏ.",
    photoCount: 5,
  }),
  defineConcept({
    slug: "dai-gia-dinh-nen-be",
    name: "Đại gia đình nền be",
    category: "gia-dinh",
    summary: "Nhiều thế hệ cùng một khung hình, tông be ấm.",
    description:
      "Phông be ấm, bàn gỗ và bình hoa, đủ rộng để cả đại gia đình ba thế hệ cùng vào khung hình.",
    photoCount: 4,
  }),
  defineConcept({
    slug: "me-va-con-gai-satin",
    name: "Mẹ và con gái satin",
    category: "gia-dinh",
    summary: "Váy satin ánh olive, ghế sofa kem.",
    description:
      "Mẹ và các con gái trong váy satin ánh olive, ngồi trên sofa kem. Bộ ảnh gần gũi và sang trọng, hợp để tặng mẹ.",
    photoCount: 4,
  }),
  defineConcept({
    slug: "gia-dinh-giang-sinh-tuyet-trang",
    name: "Gia đình Giáng sinh tuyết trắng",
    category: "gia-dinh",
    summary: "Cả nhà tông trắng kem, cây thông và tuyết rơi.",
    description:
      "Cả nhà mặc tông trắng kem giữa cây thông, người tuyết và hiệu ứng tuyết rơi — concept Giáng sinh ấm áp cho gia đình.",
    photoCount: 5,
  }),
  defineConcept({
    slug: "gia-dinh-nen-den",
    name: "Gia đình nền đen",
    category: "gia-dinh",
    summary: "Phông đen, ánh sáng tập trung vào cảm xúc.",
    description:
      "Phông đen, trang phục tông trầm, ánh sáng tập trung vào ánh mắt và cái ôm của gia đình.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "be-giang-sinh-tuyet-trang",
    name: "Bé Giáng sinh tuyết trắng",
    category: "be",
    summary: "Bé trong bối cảnh tuyết trắng cùng cây thông và thú bông.",
    description:
      "Bối cảnh trắng muốt với cây thông phủ tuyết, hộp quà và thú bông dành cho bé trong mùa Giáng sinh đầu tiên.",
    photoCount: 4,
  }),
  defineConcept({
    slug: "be-giang-sinh-gau-bong",
    name: "Bé Giáng sinh và gấu bông",
    category: "be",
    summary: "Mũ len đỏ giữa gấu bông và dòng chữ Merry Christmas.",
    description:
      "Bé trong mũ len đỏ giữa gấu bông, cây thông và tấm rèm caro, với dòng chữ Merry Christmas làm điểm nhấn.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "me-va-be-giang-sinh-do",
    name: "Mẹ và bé Giáng sinh đỏ",
    category: "be",
    summary: "Áo đỏ, cây thông phủ tuyết, rèm kem và mây bông.",
    description:
      "Hai mẹ con trong trang phục đỏ giữa cây thông phủ tuyết, rèm kem và lớp mây bông — khoảnh khắc Giáng sinh của mẹ và bé.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "thoi-noi-hong-tho-trang",
    name: "Thôi nôi hồng và thỏ trắng",
    category: "be",
    summary: "Phông hồng, bóng bay số 1 và thỏ bông.",
    description:
      "Phông hồng pastel, bóng bay số 1, ghế mây, bảng tên và thỏ bông cho tiệc thôi nôi của bé.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "thoi-noi-hoa-vintage",
    name: "Thôi nôi hoa vintage",
    category: "be",
    summary: "Phông họa tiết nâu cùng hoa tươi tông ấm.",
    description:
      "Phông họa tiết nâu, hoa tươi tông ấm và ghế mây nhỏ — concept thôi nôi nhẹ nhàng mang nét cổ điển.",
    photoCount: 3,
  }),
  defineConcept({
    slug: "thoi-noi-nen-den",
    name: "Thôi nôi nền đen",
    category: "be",
    summary: "Bé trai áo vest trên phông đen, bóng bay số 1.",
    description:
      "Bé trai trong bộ vest nhỏ trên phông đen, bóng bay số 1, bảng tên và xe đồ chơi — thôi nôi phong cách lịch lãm.",
    photoCount: 4,
  }),
  defineConcept({
    slug: "so-sinh-long-trang",
    name: "Sơ sinh thảm lông trắng",
    category: "be",
    summary: "Bé sơ sinh trên thảm lông trắng cùng phụ kiện nhỏ.",
    description:
      "Bé sơ sinh nằm trên thảm lông trắng mềm, bối cảnh sàn gỗ sáng cùng những phụ kiện nhỏ đáng yêu.",
    photoCount: 5,
  }),
];

export const getConcept = (slug: string) => CONCEPTS.find((c) => c.slug === slug);

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export const isCategorySlug = (value: unknown): value is CategorySlug =>
  CATEGORIES.some((c) => c.slug === value);

/** Chuyển giá trị searchParams (chuỗi, mảng hoặc rỗng) thành danh sách slug concept hợp lệ, không trùng. */
export function parseConceptSlugs(value: string | string[] | undefined): string[] {
  const list = Array.isArray(value) ? value : value ? [value] : [];
  return [...new Set(list)].filter((slug) => getConcept(slug));
}

/** Đọc ?loai= từ searchParams; giá trị lạ coi như không lọc. */
export function parseCategory(value: string | string[] | undefined): CategorySlug | null {
  return typeof value === "string" && isCategorySlug(value) ? value : null;
}

/** Lấy một ảnh theo slug concept và thứ tự (bắt đầu từ 0). Báo lỗi sớm nếu dữ liệu sai. */
export function getPhoto(slug: string, index: number): Photo {
  const photo = getConcept(slug)?.photos[index];
  if (!photo) throw new Error(`Không có ảnh ${index} của concept ${slug}`);
  return photo;
}
