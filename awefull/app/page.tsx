import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className=" inset-0 overflow-hidden ">
      <video  autoPlay  muted loop  className="absolute inset-0 w-full h-full object-cover">
  <source src="intro.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
<div className="w-full h-full  justify-center items-center absolute flex flex-col">
  <div className="h-[70vh] max-w-[700px] w-[80vw]  flex flex-col items-center justify-center">
    <div className="h-[200px]">
<Image src="/logo.png" alt={""} width={120} height={100}/>
<p className="text-2xl font-[CustomFont] mt-4">awefull</p>
</div>
<p className="text-2xl mt-4 text-center" style={{fontWeight:"400", fontFamily:"Playfair Display",
lineHeight:"1.5"
}}>
  <i>
Clothes made from rescued garments. <br/>
Crafted with love to be worn again
for <br/> years to come.</i>

</p>
</div>
</div>

        </div>
    </main>
  );
}
