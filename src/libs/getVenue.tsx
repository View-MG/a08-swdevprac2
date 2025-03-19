export default async function getVenue(id:string) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const response = await fetch(`https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues/${id}`)
    if(!response.ok){
        throw new Error("Fail to fetch venue")
    }
    return await response.json()
}