import { PaginatedData } from "@/components/paginatedData/paginatedData";
import { getCars } from "../../utils/data";

export default async function Home() {
  const cars = await getCars();

  return (
    <div>
      <PaginatedData data={cars} pageSize={8} />
    </div>
  );
}
