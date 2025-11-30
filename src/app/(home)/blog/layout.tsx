import { LayoutPropsMain } from "@/config/types";
import BlogLayout from "@/modules/layouts/blog-layout";

const BlogLayoutMain = ({ children }: LayoutPropsMain) => {
  return <BlogLayout>{children}</BlogLayout>;
};

export default BlogLayoutMain;
