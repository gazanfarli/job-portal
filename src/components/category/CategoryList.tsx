import { ICategory } from "../../models/category";
import CategoryCard from "./CategoryCard";

type CategoryListProps = {
  categories: ICategory[] | null;
};

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
