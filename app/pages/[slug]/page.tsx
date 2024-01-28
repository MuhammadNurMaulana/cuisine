import { getData } from "@/common/service/getData/getData";
import ContainerPages from "@/components/layouts/ContainerPages";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default async function BlogDetails({ params }: { params: { slug: string } }) {
  // const blogs = await getData(`http://localhost:3000/api/articles?id=${params.slug}`);
  // const blog = blogs.data;
  return (
    <ContainerPages>
      <div className="w-[90%] md:w-[70%] mx-auto grid gap-4 md:py-32">
        {/* <Link href="/pages" className="rounded-full text-xl bg-primary text-white p-2 max-w-max mb-4">
          <BiArrowBack />
        </Link>
        <h1 className={`${playfair.className} text-2xl md:text-4xl mb-4`}>{blog.title}</h1>
        <Image src={blog.image} alt={blog.title} width={600} height={600} className="mx-auto rounded-xl" />
        <h2 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit debitis doloribus deserunt sit, nobis possimus numquam id exercitationem harum dolor, saepe alias, aliquam voluptate odit autem dolorum magni voluptatibus. Magni
          autem iste natus itaque vero magnam nam quis. Dolorum odio quod cupiditate dicta error repellat, quas corrupti itaque fugiat perferendis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur commodi veritatis culpa laboriosam consequuntur quo velit sed! Dolores hic dolore ullam, quia tenetur voluptatum quisquam? Itaque quia aut, facere accusantium
          architecto et incidunt quod aliquam quae culpa dolorem mollitia quos ea ipsa! Corporis quod delectus vero repellendus quam harum a exercitationem, totam doloremque similique aliquid dignissimos quia distinctio voluptatum aliquam
          illum cupiditate voluptate, perspiciatis consectetur maxime! Sit unde incidunt quam blanditiis sequi libero, nisi aliquam quis? Sunt totam tempore cumque ducimus molestiae, accusantium amet cum temporibus earum ipsum reiciendis
          vitae aspernatur at magnam dolore cupiditate! Tenetur vel sed quia!
        </p>
        <h2 className="font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, error?</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio debitis deserunt, animi earum minima, doloribus quam, obcaecati quos exercitationem amet totam repudiandae omnis rem. Amet.</p>
        <h2 className="font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo eligendi sed debitis? Dolorem, magnam.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam, accusantium praesentium soluta veritatis nihil magni repellendus porro sequi commodi vel cupiditate doloribus quo mollitia possimus sapiente est eius beatae?
        </p>
        <Image src={blog.image2} alt={`${blog.title} 2`} width={600} height={600} className="mx-auto rounded-xl" /> */}
      </div>
    </ContainerPages>
  );
}
