import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <div className="relative w-full">
        <Input
          className="w-full rounded-full border-2 border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-green-[#91E2AF] focus:outline-none focus:ring focus:ring-green-[#91E2AF]"
          type="search"
          placeholder="Search for products,brands and more..."
        />
        <Button className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-2 ">
          <Search color="#ffffff" />
        </Button>
      </div>
    </Field>
  );
}
