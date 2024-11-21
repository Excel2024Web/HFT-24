import Script from "next/script";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      {/* Include the external script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/grid.js"
        type="module"
        strategy="beforeInteractive"
      />
      
      {/* Loading grid component */}
      <l-grid
        size="80"
        speed="1.5"
        color="white"
      ></l-grid>
    </div>
  );
}
