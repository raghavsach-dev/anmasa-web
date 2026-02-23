import SubCategoryList from "@/components/category/SubCategoryList";

export default async function SubCategoryGrid( { params }: { params: { subCategoryCode: string } } ) {
  const subCategoryCode = await params.subCategoryCode;
  return (
    <div className="bg-anmasa-bg w-[100vw]">
      <SubCategoryList />
    </div>
  );
}
