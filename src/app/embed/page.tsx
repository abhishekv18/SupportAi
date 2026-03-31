import EmbedClients from '@/components/EmbedClients';
import { getSession } from '@/lib/getSession';


async function page() {
  const session=await getSession();
 
  return (
    <>
    <EmbedClients ownerId={session?.user?.id!} />
    </>
  )
}

export default page
