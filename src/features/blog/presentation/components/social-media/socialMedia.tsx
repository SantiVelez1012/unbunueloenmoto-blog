"use client";

import SubscribersCount from "../subscribers-count/subscribersCount";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useGetSubscribersCount } from "../../hooks/get-subscribers-count/useGetSubscribersCount";
import { SocialCard } from "./components/socialCard/socialCard";

export default function SocialGrid() {

  const { count, isLoading: isCountLoading } = useGetSubscribersCount();

  return (
    <section className="relative w-full pt-20 px-4 overflow-hidden h-[800px]">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            Comunidad <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Buñuelística</span>
          </h2>
          <p className="text-gray-400">Una comunidad que va creciendo poco a poco</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[250px]">

          <SubscribersCount count={count ?? { subscriberCount: "0" }} isLoading={isCountLoading} />

          <div className="flex flex-col gap-6 h-full">

            <SocialCard
              icon={<FaInstagram className="w-6 h-6" />}
              label="Sígueme en Instagram"
              sublabel="@unbunueloenmoto"
              gradient="from-purple-500/20 to-orange-500/20"
              borderColor="group-hover:border-purple-500/50"
              href="https://www.instagram.com/unbunueloenmoto/"
            />

            <SocialCard
              icon={<FaTiktok className="w-6 h-6" />}
              label="Tiktok"
              sublabel="Videos cortos y más"
              gradient="from-green-500/20 to-green-700/20"
              borderColor="group-hover:border-cyan-500/50"
              href="https://www.tiktok.com/@unbunueloenmoto"
            />
            <SocialCard
              icon={<FaFacebook className="w-6 h-6" />}
              label="Facebook"
              sublabel="Reels divertidos"
              gradient="from-orange-500/20 to-yellow-500/20"
              borderColor="group-hover:border-cyan-500/50"
              href="https://www.facebook.com/profile.php?id=61565367096663"
            />
            </div>

        </div>
      </div>
    </section>
  );
}

