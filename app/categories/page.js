// export default function CategoriesPage() {
//   return <div className="main">categories</div>;
// }

// import Navbar from "../components/navbar/navbar";
// "use client";
import CategoriesGrid from "@/utils/components/categoriesGrid/categoriesGrid";
import { getAllCategories } from "@/utils/functions/apiCalls";
import Image from "next/image";

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div>
      <CategoriesGrid categories={categories} />
    </div>
  );
}

// const Speakers = ({ speakers }) => {
//   return (
//     <div>
//       <Navbar />
//       <h1>speakers</h1>
//       <p>This is the Contact page.</p>
//       <ProductGrid categories={speakers} />
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   const speakers = await getAllSpeakers();
//   return { props: { speakers } };
// }

// export default Speakers;
