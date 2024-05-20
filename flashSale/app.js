const colorsDom = document.getElementById("colors")
let defualtColor = 1
const setActiveColor = (id) => {
    defualtColor = id
    drawingColors()
}

const colors = [
    {
        id: 1,
        color: "#059669"
    },
    {
        id: 2,
        color: "#6366F1"
    },
    {
        id: 3,
        color: "#334155"
    },
    {
        id: 4,
        color: "#EA580C"
    },
]

const data = [
    {
        id:1,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:2,
        image: "https://www.designboom.com/twitterimages/uploads/2022/05/delorean-alpha5-ev-designboom-fb.jpg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:3,
        image: "https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:4,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:5,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:6,
        image: "https://www.designboom.com/twitterimages/uploads/2022/05/delorean-alpha5-ev-designboom-fb.jpg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:7,
        image: "https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:8,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:9,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:10,
        image: "https://www.designboom.com/twitterimages/uploads/2022/05/delorean-alpha5-ev-designboom-fb.jpg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:11,
        image: "https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    {
        id:12,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "سوبر زيبلين M26 (2022) - GG726XM",
        price: 699,
        category: "حاسوب محمول",
        rate: 5.0,
    },
    
]

const drawingColors = () => colorsDom.innerHTML = (
    `
    <ul class="flex my-3 flex-wrap -mb-px text-sm font-medium text-center">
    ${colors.map((item) => (
        `
    <li class="me-2 mb-2 colors">
        <button onclick="setActiveColor(${item.id})" id=${item.id} style="background-color: ${item.color};" class="inline-block ${defualtColor === item.id && "active"} relative p-3.5 rounded-md focus:ring-2 focus:ring-blue-700" type="button">
            <svg class="hidden absolute left-0 top-0 right-0 bottom-0 w-full h-full p-1" width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58337 11.9167L8.25004 15.5833L17.4167 6.41667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </li>
    `
    )).join("")}
       
    </ul>
    `
)

drawingColors()


const getValue = (value, min, max) => {
    // هنا في 3 حاجات 
    // value بتجيب الفرق بين القيمة الاعلي والقيمة الاقل
    // min بتجيب القيمة الاقل
    // max بتجيب القيمة الاعلي
}

$('.ui.slider')
    .slider({
        showThumbTooltip: true,
        min: 0,
        max: 10000,
        end: 10000,
        onChange: (value, min, max) => getValue(value, min, max),
        tooltipConfig: {
            position: 'bottom right',
            variation: 'small visible orange'
        }
    })
    ;


const productsDom = document.getElementById("products")
const sliderDom = document.getElementById("slider")


const drawingProducts = () => productsDom.innerHTML = (
    data.map((item) => (
        `
    <a href="${item.image}" class="border rounded-2xl">
        <div class="relative select-none rounded-t-2xl overflow-hidden h-[300px] sm:h-[350px] md:h-[250px] lg:h-[220px] xl:h-[220px]">
            <img class="w-full h-full" src="${item.image}" alt="">
        </div>
        <div class="p-3">
            <span class="md:text-sm text-[#52057B] font-medium">${item.category}</span>
            <h3 class="md:text-base mt-2 font-medium">${item.name}</h3>
            <div class="mt-3 mb-2 flex items-center justify-between">
                <div class="flex items-center">
                    <p class="font-medium">${item.rate}</p>
                    <img class="w-5 h-5 mx-2" src="./images/starCard.svg" alt="">
                </div>
                <span class="font-semibold">$${item.price}</span>
            </div>
        </div>
    </a>
        `
    )).join(" ")
)

drawingProducts()



const drawingSlider = () => sliderDom.innerHTML = (
    data.map((item) => {
        return (
        `
    <swiper-slide class="flex justify-center items-center">
        <div class="bg-white flex justify-between p-5 rounded-xl">
            <div class="me-5 flex flex-col justify-between">
                <h3 class="font-medium">Xbox White Joystick</h3>
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <p class="text-gray-500">${item.id} left</p>
                        <span class="text-orange text-xl font-semibold">$${item.price}</span>
                    </div>
                    <div class="w-full flex justify-end bg-[#FFD6BE] rounded-full h-1.5 mb-4">
                        <div class="bg-orange h-1.5 rounded-full " style="width: 45%"></div>
                    </div>
                </div>
            </div>
            <img class="w-28 h-28 rounded-xl" src="${item.image}" alt="">
        </div>
    </swiper-slide>
       
        `
)}).join(" ")
)

drawingSlider()