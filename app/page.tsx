import { SeedComponent } from "@/components/seedComponent"
import { redirect } from "next/navigation"

export default function Home() {
  //SeedComponent()
  redirect("/landingpage")
}


//export const dynamic='force-dynamic';
//export const revalidate = 5;