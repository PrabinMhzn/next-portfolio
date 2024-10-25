/** @type {import('next').NextConfig} */
import withMarkdoc from "@markdoc/next.js";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
};

export default withMarkdoc()(nextConfig);
