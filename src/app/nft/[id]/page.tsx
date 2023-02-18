"use client";

import Image from "next/image";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export default function NFTDropPage() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex flex-col h-screen lg:grid lg:grid-cols-10">
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 p-1.5 to-purple-600 rounded-xl">
            <img
              className="rounded-xl w-44 object-cover lg:h-96 lg:w-72"
              src="/nft.png"
              alt="Front NFT"
            />
          </div>
          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-white">Moonwind Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of Moonwind Apes
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-bold underline decoration-pink-600/70">
              Moonwind
            </span>{" "}
            NFT Marketplace
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 hover:bg-rose-500 text-white p-4 py-2.5 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text font-medium text-rose-400">
            You`re logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        <div className="mt-10 flex flex-1 flex-col items-center text-center lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-60"
            src="/nftcollection.jpg"
            alt="NFT Collection"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Moonwind NFT Collection
          </h1>
          <p className="pt-2 text-xl text-rose-400">13 / 21 NFTs claimed</p>
        </div>

        <button className="h-16 w-full text-white rounded-full bg-rose-500 font-bold hover:scale-[1.01] duration-300">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}
