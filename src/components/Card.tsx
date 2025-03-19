import { Rating } from "@mui/material";
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card({ venueName, imgSrc, rating, onRatingChange }: { venueName: string; imgSrc: string; rating?: number; onRatingChange?: Function }) {
  return (
    <InteractiveCard>
      <div className="w-[250px] h-[400px] bg-white shadow-lg rounded-[10px] pt-2.5">
        <div className="w-full h-[70%] relative">
          <Image
            src={imgSrc}
            alt="Place Picture"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="p-2.5 h-[30%] text-black">
          <div className="font-bold">{venueName}</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
          {
            onRatingChange? <Rating
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={(event, newValue) => {
                event.stopPropagation();
                onRatingChange(newValue ?? 0);
              }}
              onClick={(event) => event.stopPropagation()}
            /> : " "
          }
            
        </div>
      </div>
    </InteractiveCard>
  );
}
