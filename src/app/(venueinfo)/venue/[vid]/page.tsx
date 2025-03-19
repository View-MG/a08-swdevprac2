import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({params} : {params : {vid : string}}){

    const venueDatail = await getVenue(params.vid)
    // const mockVenueRepo = new Map()
    // mockVenueRepo.set("001",{name:"The Bloom Pavilion", image:"/img/bloom.jpg"})
    // mockVenueRepo.set("002",{name:"Spark Space", image:"/img/sparkspace.jpg"})
    // mockVenueRepo.set("003",{name:"The Grand Table", image:"/img/grandtable.jpg"})

    return(
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium">{venueDatail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={venueDatail.data.picture}
                    alt="Product Picture"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black"
                />
                <div className="flex flex-col items-start mx-5">
                    <div>Name: {venueDatail.data.name}</div>
                    <div>Address: {venueDatail.data.address}</div>
                    <div>District: {venueDatail.data.district}</div>
                    <div>Province: {venueDatail.data.province}</div>
                    <div>Postal Code: {venueDatail.data.postalcode}</div>
                    <div>Tel: {venueDatail.data.tel}</div>
                    <div>Daily Rate: {venueDatail.data.dailyrate}</div>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{ vid: "001" }, { vid: "002" }, { vid: "003" }];
}