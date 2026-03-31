import HomeClients from "@/components/HomeClients";
import { getSession } from "@/lib/getSession";


export default async function Home() {
  const session=await getSession();
  return (
   <>
   <HomeClients email={session?.user?.email!}/>
   </>
  );
}
