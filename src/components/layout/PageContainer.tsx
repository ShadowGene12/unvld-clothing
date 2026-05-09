import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface PageContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const PageContainer = ({ children, title, description }: PageContainerProps) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      <main className="w-full flex-1">
        {children}
      </main>
    </>
  );
};

export default PageContainer;
