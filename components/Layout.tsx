import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = (props: ILayoutProps) => {
  const { children, title = "" } = props;

  return (
    <div className="flex h-full min-h-screen flex-col justify-center">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="my-5 flex justify-center text-3xl">Header</div>
      </div>

      <main className="m-auto flex w-full max-w-[1080px] flex-1 flex-col px-20 text-center">
        {children}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
