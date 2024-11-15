import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Suspense } from 'react';
import { AutoConnect } from "thirdweb/react";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { Button } from "@headlessui/react";
import { client, wallet } from "@/app/constant";




function Header() {

  return (
    <div className="flex justify-between p-4 bg-transparent items-center">
            <div className="flex items-center gap-2">
              <Image
              src='/logos/Profile-LogoOP.png'
              alt=''
              height={64}
              width={64}
              />
            </div>
            <div className="text-[#FF0000] text-xs flex flex-col items-end gap-2">
            <Image
              src='/logos/thirdweb-symbol-colour 1.png'
              alt=''
              height={20}
              width={34}
              />
              Powered by Thirdweb
            </div>
          </div>
)
}

export default Header