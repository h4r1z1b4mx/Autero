"use client"
import { Appbar } from "../../../components/Appbar";
import FeatureItem from "../../../components/FeatureItem"; 
import SignUpForm from "../../../components/SignUpForm"; 

interface Feature {
  icon: React.ReactNode;
  text: string;
}

export default function (){
  const features: Feature[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="20"
          width="20"
        >
          <path
            fill="#2D2E2E"
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM8.21 10.79l2.79 2.8 5.29-5.3 1.42 1.42-6.71 6.7-4.21-4.2 1.42-1.42Z"
          ></path>
        </svg>
      ),
      text: "Easy setup, no coding required",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="20"
          width="20"
        >
          <path
            fill="#2D2E2E"
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM8.21 10.79l2.79 2.8 5.29-5.3 1.42 1.42-6.71 6.7-4.21-4.2 1.42-1.42Z"
          ></path>
        </svg>
      ),
      text: "Free forever for core features",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="20"
          width="20"
        >
          <path
            fill="#2D2E2E"
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM8.21 10.79l2.79 2.8 5.29-5.3 1.42 1.42-6.71 6.7-4.21-4.2 1.42-1.42Z"
          ></path>
        </svg>
      ),
      text: "14-day trial of premium features & apps",
    },
  ];

  return (
    <div className="">
      <Appbar />
      <div className="flex justify-center pt-10 ">
        <div className="flex justify-center w-[50%] pt-40">
            <div className="w-full h-full flex flex-col pl-50">
                <h1 className="text-4xl w-[60%] font-bold">Join millions worldwide who automate their work using Zapier.</h1>
                <ul className="flex flex-col gap-2 pt-10    ">
                {features.map((feature, index) => (
                    <li key={index}>
                    <FeatureItem icon={feature.icon} text={feature.text} />
                    </li>
                ))}
                </ul>
                </div>
        </div>
        <div className="w-[50%]  p-20">
            <SignUpForm />
        </div>
      </div>
    </div>
  );
};
