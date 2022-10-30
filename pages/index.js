import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
const Home = () => {
   return (
     <div className="!bg-[#330054]">
       <header className="pb-6 lg:pb-0">
         <Header />
       </header>
       <main>
         <Menu />
       </main>
     </div>
   );
};

export default Home;
