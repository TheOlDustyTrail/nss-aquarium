const fishData = {
    fish: [
        {
            name: "Marley",
            species: "Lionfish",
            size: 18,
            Location: "Florida"
        },
        {
            name: "Not-Nemo",
            species: "Frogfish",
            size: 2,
            Location: "Red Sea"
        },
        {
            name: "Jaws",
            species: "Fangtooth",
            size: 6,
            Location: "Australia"
        }
    ]
}
export const theFish = () => {
    return fishData.fish.map(fish => ({ ...fish }))
}