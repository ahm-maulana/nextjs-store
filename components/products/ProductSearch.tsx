"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function ProductSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(params.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  return (
    <div className="max-w-xs ml-auto">
      <Input
        type="search"
        name="search"
        placeholder="search product..."
        className="border-2 w-full dark:bg-muted"
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        value={search}
      />
    </div>
  );
}
export default ProductSearch;
