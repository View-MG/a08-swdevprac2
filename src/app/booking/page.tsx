import DateReserve from "@/components/DateReserve";
import TextField from '@mui/material/TextField';
import { Select,MenuItem } from "@mui/material";

export default function booking() {
  return (
    <main className="w-[100%] flex justify-center">
      <div className="w-[300px] flex flex-col items-center space-y-5">
        <div className="text-2xl text-black mt-4">Venue Booking</div>
        <TextField name="Name-Lastname" label="Name-Lastname" variant="standard"/>
        <TextField name="Contact-Number" label="Contact-Number" variant="standard"/>
        <div className="text-md text-gray-600 self-start">Pick Up Date</div>
        <DateReserve/>
        <div className="text-md text-gray-600 self-start">Pick Up Venue</div>
        <Select variant="standard" id="venue" className="w-[300px] h-[2em]">
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <button name="Book Venue" className="rounded-md bg-indigo-600 px-3 py-2 shadow-sm text-white">Book Venue</button>
      </div>    
    </main>
  );
}
