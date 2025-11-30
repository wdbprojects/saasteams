import { Sidebar } from "@/components/ui/sidebar";

const BlogSidebar = () => {
  return (
    <Sidebar
      className="z-40 rounded border-none pt-18"
      variant="floating"
      collapsible="offcanvas"
    >
      <div className="p-4">BlogSidebar</div>
    </Sidebar>
  );
};

export default BlogSidebar;
