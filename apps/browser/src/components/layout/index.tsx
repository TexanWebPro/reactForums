import Edges from "./Edges";
import Footer from "./Footer";
import Header from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Edges>{children}</Edges>
      <Footer />
    </>
  );
}
