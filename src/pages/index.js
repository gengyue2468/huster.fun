import {
  BubblesIcon,
  CoffeeIcon,
  Link2Icon,
  LinkIcon,
  MessageCircleIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen bg-orange-100 overflow-hidden">
      <Head>
        <title>huster.fun</title>
      </Head>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0.75, y: -50 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex justify-center items-center h-full flex-col space-y-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-orange-800 to-orange-700"
        >
          欢迎!
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-4xl font-bold text-orange-700"
        >
          hi@huster.fun
        </motion.h2>

        <motion.button
          onClick={() => open("https://bg.huster.fun")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-full hover:bg-orange-800 transition mt-8 text-2xl font-semibold"
        >
          访问个人页面 <LinkIcon className="size-7" />
        </motion.button>

        <motion.button
          onClick={() => open("mailto:hi@huster.fun")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center gap-2 px-8 py-4 bg-orange-200 text-orange-600 rounded-full hover:bg-orange-300/75 transition mt-0 text-2xl font-semibold"
        >
          Talk with me <MessageCircleIcon className="size-7" />
        </motion.button>
        {/*  <span className="flex gap-2 underline">Buy me a cup of coffee <CoffeeIcon className="size-7" /></span> */}
        <footer className="absolute bottom-4 text-orange-600/20 font-semibold text-lg flex items-center gap-2">
         Copyright © 2025 All Rights Reserved.
        </footer>
      </motion.div>
    </div>
  );
}
