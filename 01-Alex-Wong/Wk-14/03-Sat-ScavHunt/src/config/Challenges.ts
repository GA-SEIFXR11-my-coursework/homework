export type T_Challenge = {
    name: string,
    description: string,
    address: string
}

export const defaultChallenges: T_Challenge[] = 
[
    {   
        name: "Human Harbour Bridge" ,
        description: "Make a human bridge and take a photo with the Sydney Harbour Bridge in the background.", 
        address: "1 Bennelong Point, Sydney NSW 2000" 
    },
    {   
        name: "Botanic Gardens" ,
        description: "Take a photo of the weirdest looking plant you can find in the Royal Botanic Gardens.",
        address: "4A Macquarie St, Sydney NSW 2000" 
    },
];