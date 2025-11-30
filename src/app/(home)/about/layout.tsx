import AboutLayout from "@/modules/layouts/about-layout";
import { LayoutPropsMain } from "@/config/types";

const AboutLayoutMain = ({ children }: LayoutPropsMain) => {
  return (
    <AboutLayout>
      <main className="pt-[4rem]">{children}</main>
    </AboutLayout>
  );
};

export default AboutLayoutMain;
