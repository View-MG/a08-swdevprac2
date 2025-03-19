'use client'

import * as React from 'react';
import { useState } from "react";
import Card from "./Card";
import Link from 'next/link';

export default function CardPanel() {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const initialVenues = [{vid:"001", name:"The Bloom Pavilion", image:"/img/bloom.jpg"},
        {vid:"002", name:"Spark Space", image:"/img/sparkspace.jpg"},
        {vid:"003", name:"The Grand Table", image:"/img/grandtable.jpg"}
    ]

    const [ratings, setRatings] = useState(() => {
        const initialRatings = new Map<string, number>();
        initialVenues.forEach(venue => {
            initialRatings.set(venue.name, 0);
        });
        return initialRatings;
    });
    
    const [removedVenues, setRemovedVenues] = useState<Set<string>>(new Set());
    
    const handleRatingChange = (venue: string, newRating: number) => {
        setRatings(prevRatings => {
            const newRatings = new Map(prevRatings);
            newRatings.set(venue, newRating);
            return newRatings;
        });
        if (isFirstLoad) {
            setIsFirstLoad(false);
        }
        if (removedVenues.has(venue)) {
            handleRestore(venue);
        }
    };
    
    const handleRemove = (venue: string) => {
        setRemovedVenues(prev => {
            const newSet = new Set(prev);
            newSet.add(venue);
            return newSet;
        });
    };
    
    const handleRestore = (venue: string) => {
        setRemovedVenues(prev => {
            const newSet = new Set(prev);
            newSet.delete(venue);
            return newSet;
        });
    };

    return (
        <div>
            <div className="m-5 flex flex-row flex-nowrap justify-around content-around">
                {initialVenues.map((venue) => (
                    <Link href={`/venue/${venue.vid}`} className='w-1/5'>
                        <Card
                            key={venue.name}
                            venueName={venue.name}
                            imgSrc={venue.image}
                            rating={ratings.get(venue.name) ?? 0}
                            onRatingChange={(newRating: number) => {
                                handleRatingChange(venue.name, newRating);
                            }}
                        />
                    </Link>
                ))}
            </div>
            <div className="mt-4 p-4 border-t">
                <h3 className="text-lg font-semibold text-black">
                    Venue List with Ratings: {initialVenues.filter(venue => !removedVenues.has(venue.name)).length}
                </h3>
                <ul>
                    {Array.from(ratings.entries()).map(([venue, rating]) => (
                        !removedVenues.has(venue) && (
                            <li
                                key={venue}
                                data-testid={venue}
                                className="flex justify-between items-center p-2 border-b cursor-pointer text-black"
                                onClick={() => handleRemove(venue)}
                            >
                                <span>{venue} {rating}</span>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
}