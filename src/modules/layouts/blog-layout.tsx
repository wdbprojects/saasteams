import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutPropsMain } from "@/config/types";
import BlogSidebar from "@/modules/sidebar/blog-sidebar";
import HeaderBlog from "@/modules/components/layout/header-blog";

const BlogLayout = ({ children }: LayoutPropsMain) => {
  return (
    <SidebarProvider>
      <HeaderBlog />
      <div className="flex w-full overflow-y-auto">
        <BlogSidebar />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default BlogLayout;
