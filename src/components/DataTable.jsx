import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import DataTableFooter from "./DataTableFooter";

export default function DataTable() {
  return (
    <div className="w-full min-h-screen relative">
      <DataTableHeader />

      <DataTableBody />

      <DataTableFooter />
    </div>
  );
}
