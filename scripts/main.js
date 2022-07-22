import { theFish } from '.scripts/database.js'

const allFish = theFish()

for (const fish of allFish) {
    console.log(fish)
}
export const fishyFish = () => {
    return allFish.fish.map(fish => ({ ...fish }))
}