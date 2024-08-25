import { basePath } from "@/utils/getBasePath";
import Image from "next/image";

export default function Sandbox() {
  return (
    <>
      <Image src={basePath + "/images/goose1.svg"} alt="Goose #1" width={200} height={200} />
      <Image src={basePath + "/images/goose2.svg"} alt="Goose #2" width={200} height={200} />
      <Image src={basePath + "/images/goose3.svg"} alt="Goose #3" width={200} height={200} />
      <Image src={basePath + "/images/grades.svg"} alt="Grades" width={200} height={200} />
      <Image src={basePath + "/images/laptop.svg"} alt="Laptop" width={200} height={200} />
    </>
  );
}
