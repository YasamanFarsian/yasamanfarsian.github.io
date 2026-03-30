import portfolio2 from "@/assets/projects_img/portfolio/DashboardZoom.jpg";
import portfolio1 from "@/assets/projects_img/portfolio/Driller-view.png";
import portfolio4 from "@/assets/projects_img/portfolio/Simulator Dashboard - dark.jpg";
import portfolio3 from "@/assets/projects_img/portfolio/Simulator Dashboard - light.png";

import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink } from "lucide-react";

const portfolio = [
  {
    title: "Drilling Automation Dashboard Designs",
    image: [portfolio1, portfolio2],
    figmaLink: "https://spam-detector1.vercel.app",
  },
  {
    title: "Simulator Drilling Dashboard Designs",
    image: [portfolio4, portfolio3],
    figmaLink: "https://spam-detector1.vercel.app",
  },
];

const Portfolios = () => {
  return (
    <div className="min-h-screen pt-20 mt-5 px-4 max-w-7xl mx-auto pb-5">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          UI/UX Portfolio - Designs
        </h2>
      </ScrollAnimation>

      <div className="grid  gap-6">
        {portfolio.map((portfolio) => (
          <ScrollAnimation key={portfolio.title}>
            <div className=" overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-semibold mb-2">
                  {portfolio.title}
                </h3>

                <a
                  href={portfolio.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-white hover:text-white transition-colors bg-[#5f8ecb] px-5 py-3 rounded-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View in Figma</span>
                </a>
              </div>
              {portfolio.image.map((img, i) => (
                <div key={i} className="w-full mb-8">
                  <img
                    src={img}
                    alt={portfolio.title}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
