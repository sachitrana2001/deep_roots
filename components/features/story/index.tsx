import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
interface StoryDataItem {
  title: string;
  svg: string;
  num: number;
  color: string;
}

interface StoryProps {
  StoryData: StoryDataItem[];
}

const Story: React.FC<StoryProps> = ({ StoryData }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.main
      className="flex flex-col justify-between items-center md:flex-row"
      variants={container}
    >
      {StoryData.map((data, index) => (
        <motion.div
          key={index}
          variants={item}
          className="w-[350px] h-[250px] mb-8 shadow-lg p-10 text-5xl font-semibold flex flex-col rounded-xl md:mb-5 bg-[white]  transform transition duration-500 hover:scale-110"
        >
          <Image
            src={data.svg}
            alt={data.svg}
            width={50}
            height={50}
            className="animate-bounce mb-10"
          />
          <p style={{ color: data.color }}>
            <CountUp end={data.num} duration={5} className="text-5xl mb-3" />+
          </p>
          <p className="text-2xl mb-3">{data.title}</p>
        </motion.div>
      ))}
    </motion.main>
  );
};

export default Story;
