import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default async function Venue() {
  const venues = await getVenues()
  return (
    <main className="text-center p-5">
      <h1 className="text-2xl font-medium text-black">Select Your Venue</h1>
      <VenueCatalog venuesJson={venues}/>
    </main>
  );
}
