import localFont from "next/font/local";
import { Noto_Sans_TC, Roboto_Flex, Roboto_Serif } from "next/font/google";

export const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-serif",
});

export const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const notoSerifTC = localFont({
  src: [
    {
      path: "../assets/font/Noto_Serif_TC/NotoSerifTC-Light.otf",
      weight: "300",
    },
    {
      path: "../assets/font/Noto_Serif_TC/NotoSerifTC-Regular.otf",
      weight: "400",
    },
    {
      path: "../assets/font/Noto_Serif_TC/NotoSerifTC-Medium.otf",
      weight: "500",
    },
    {
      path: "../assets/font/Noto_Serif_TC/NotoSerifTC-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../assets/font/Noto_Serif_TC/NotoSerifTC-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-noto-serif-tc",
});
