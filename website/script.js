let currentStyle = "women";

const womenTops = [
    "images/women/tops/top1.png",
    "images/women/tops/top2.png",
    "images/women/tops/top3.png",
    "images/women/tops/top4.png",
    "images/women/tops/top5.png",
    "images/women/tops/top6.png",
    "images/women/tops/top7.png",
    "images/women/tops/top8.png",
    "images/women/tops/top9.png"
];

const womenBottoms = [
    "images/women/bottoms/bottom1.png",
    "images/women/bottoms/bottom2.png",
    "images/women/bottoms/bottom3.png",
    "images/women/bottoms/bottom4.png",
    "images/women/bottoms/bottom5.png",
    "images/women/bottoms/bottom6.png",
    "images/women/bottoms/bottom7.png",
    "images/women/bottoms/bottom8.png",
    "images/women/bottoms/bottom9.png"
];

const womenShoes = [
    "images/women/shoes/shoes1.png",
    "images/women/shoes/shoes2.png",
    "images/women/shoes/shoes3.png",
    "images/women/shoes/shoes4.png",
    "images/women/shoes/shoes5.png",
    "images/women/shoes/shoes6.png"
];

const womenAccessories = [
    "images/women/accessories/acc1.png",
    "images/women/accessories/acc2.png",
    "images/women/accessories/acc3.png",
    "images/women/accessories/acc4.png",
    "images/women/accessories/acc5.png",
    "images/women/accessories/acc6.png"
];

const menTops = [
    "images/men/tops/top1.png",
    "images/men/tops/top2.png",
    "images/men/tops/top3.png",
    "images/men/tops/top4.png",
    "images/men/tops/top5.png",
    "images/men/tops/top6.png",
    "images/men/tops/top7.png",
    "images/men/tops/top8.png",
    "images/men/tops/top9.png"
];

const menBottoms = [
    "images/men/bottoms/bottom1.png",
    "images/men/bottoms/bottom2.png",
    "images/men/bottoms/bottom3.png",
    "images/men/bottoms/bottom4.png",
    "images/men/bottoms/bottom5.png",
    "images/men/bottoms/bottom6.png",
    "images/men/bottoms/bottom7.png",
    "images/men/bottoms/bottom8.png",
    "images/men/bottoms/bottom9.png"
];

const menShoes = [
    "images/men/shoes/shoes1.png",
    "images/men/shoes/shoes2.png",
    "images/men/shoes/shoes3.png",
    "images/men/shoes/shoes4.png",
    "images/men/shoes/shoes5.png",
    "images/men/shoes/shoes6.png"
];

const menAccessories = [
    "images/men/accessories/acc1.png",
    "images/men/accessories/acc2.png",
    "images/men/accessories/acc3.png",
    "images/men/accessories/acc4.png",
    "images/men/accessories/acc5.png",
    "images/men/accessories/acc6.png"
];

function getTops() {
    if (currentStyle === "women") {
        return womenTops;
    } else {
        return menTops;
    }
}

function getBottoms() {
    if (currentStyle === "women") {
        return womenBottoms;
    } else {
        return menBottoms;
    }
}

function getShoes() {
    if (currentStyle === "women") {
        return womenShoes;
    } else {
        return menShoes;
    }
}

function getAccessories() {
    if (currentStyle === "women") {
        return womenAccessories;
    } else {
        return menAccessories;
    }
}

function selectTop(index) {
    const tops = getTops();

    document.getElementById("selectedTop").src = tops[index];
}

function selectBottom(index) {
    const bottoms = getBottoms();

    document.getElementById("selectedBottom").src = bottoms[index];
}

function selectShoes(index) {
    const shoes = getShoes();

    document.getElementById("selectedShoes").src = shoes[index];
}

function selectAccessory(index) {
    const accessories = getAccessories();

    document.getElementById("selectedAccessory").src =
        accessories[index];
}

function randomItem(array) {
    const randomIndex =
        Math.floor(Math.random() * array.length);

    return array[randomIndex];
}

function generateOutfit() {
    document.getElementById("selectedTop").src =
        randomItem(getTops());

    document.getElementById("selectedBottom").src =
        randomItem(getBottoms());

    document.getElementById("selectedShoes").src =
        randomItem(getShoes());

    document.getElementById("selectedAccessory").src =
        randomItem(getAccessories());
}

function showWomen() {
    currentStyle = "women";

    updateClothingImages();

    document.getElementById("womenBtn")
        .classList.add("active");

    document.getElementById("menBtn")
        .classList.remove("active");

    selectTop(0);
    selectBottom(0);
    selectShoes(0);
    selectAccessory(0);
}

function showMen() {
    currentStyle = "men";

    updateClothingImages();

    document.getElementById("menBtn")
        .classList.add("active");

    document.getElementById("womenBtn")
        .classList.remove("active");

    selectTop(0);
    selectBottom(0);
    selectShoes(0);
    selectAccessory(0);
}

function updateClothingImages() {
    const tops = getTops();
    const bottoms = getBottoms();
    const shoes = getShoes();
    const accessories = getAccessories();

    for (let i = 0; i < 9; i++) {
        document.getElementById(
            "top" + (i + 1)
        ).src = tops[i];
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById(
            "bottom" + (i + 1)
        ).src = bottoms[i];
    }

    for (let i = 0; i < 6; i++) {
        document.getElementById(
            "shoes" + (i + 1)
        ).src = shoes[i];
    }

    for (let i = 0; i < 6; i++) {
        document.getElementById(
            "acc" + (i + 1)
        ).src = accessories[i];
    }
}

updateClothingImages();

selectTop(0);
selectBottom(0);
selectShoes(0);
selectAccessory(0);