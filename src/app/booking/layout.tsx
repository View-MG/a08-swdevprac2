import React from "react";

export default function ManageReservationsLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <div className="flex flex-col w-full text-black">
                {children}
            </div>
        </main>
    );
}
