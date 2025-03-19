import Link from "next/link";
import Card from "./Card";

export default async function VanueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }){
    const venuesJsonReady = await venuesJson;
    console.log(venuesJsonReady);
    return(
        <>
        Explore Our {venuesJsonReady?.count} models in our catalog
        <div className="m-5 flex flex-row items-center justify-around flex-wrap p-3">
            {
                venuesJsonReady.data.map((venueItem)=>(
                    <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/5">
                        <Card venueName={venueItem.name} imgSrc={venueItem.picture}></Card>
                    </Link>
                ))
            }
        </div>
        </>
    ); 
}