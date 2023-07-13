import { videototext, livevideototext, texttovideo } from '../assets/index.js'

export const featureInfo = [
  {
    index: "01",
    title: "Text to ASL Video",
    desc: "Easily convert text into a series of images or a video with hand signs depicting the input text. This is a great way to learn ASL or to communicate with someone who uses sign language.",
    link: "Get Started",
    path: "/texttovideo", // Empty path
    image: texttovideo, // Empty image
  },
  {
    index: "02",
    title: "Video to Text",
    desc: "Convert a video (without subtitles) into text. This is a great way to access information that is not available in a sign language format. You can also use this feature to transcribe videos for people who are deaf or hard of hearing.",
    link: "Get Started",
    path: "/videototext",
    image: videototext,
  },
  {
    index: "03",
    title: "Live Translation",
    desc: "Convert a live video of a person using ASL into text version. This is a great way to follow a conversation in sign language or to provide real-time translation for people who are deaf or hard of hearing.",
    link: "Get Started",
    path: "/livevideototext",
    image: livevideototext,
  },
];
