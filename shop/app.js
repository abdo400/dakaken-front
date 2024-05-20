const colorsDom = document.getElementById("colors")
let defualtColor = 1
const setActiveColor = (id) => {
    defualtColor = id
    drawingColors()
}

const colors= [
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
        name: "Nice Smartphone",
        oldPrice: 999,
        newPrice: 699,
        vendor: "jaya phone",
        rate: 5.0,
        views: "11.3k"
    },
    {
        id:2,
        image: "https://www.designboom.com/twitterimages/uploads/2022/05/delorean-alpha5-ev-designboom-fb.jpg",
        name: "Nice Smartphone",
        oldPrice: 999,
        newPrice: 699,
        vendor: "jaya phone",
        rate: 5.0,
        views: "11.3k"
    },
    {
        id:3,
        image: "https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph",
        name: "Nice Smartphone",
        oldPrice: 999,
        newPrice: 699,
        vendor: "jaya phone",
        rate: 5.0,
        views: "11.3k"
    },
    {
        id:4,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "Nice Smartphone",
        oldPrice: 999,
        newPrice: 699,
        vendor: "jaya phone",
        rate: 5.0,
        views: "11.3k"
    },
    {
        id:5,
        image: "https://www.designboom.com/twitterimages/uploads/2022/05/delorean-alpha5-ev-designboom-fb.jpg",
        name: "Nice Smartphone",
        oldPrice: 999,
        newPrice: 699,
        vendor: "jaya phone",
        rate: 5.0,
        views: "11.3k"
    },
    {
        id:6,
        image: "https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph",
        name: "Nice Smartphone",
        oldPrice: 999,
        newPrice: 699,
        vendor: "jaya phone",
        rate: 5.0,
        views: "11.3k"
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


const getValue = (value ,min , max)=> {
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
    onChange:(value, min, max) => getValue(value, min, max) ,
    tooltipConfig: {
      position: 'bottom right',
      variation: 'small visible orange'
    }
  })
;


const productsDom = document.getElementById("products")

let liked = [1,2]

const handleAddFavorite = (id) => {
    let include = liked.find(item => item === id)
    if(include){
        let filter = liked.filter((item) => item !== id)
        liked = filter
    }else{
        liked.push(id)
    }
    drawingProducts()
}

const drawingProducts = () => productsDom.innerHTML = (
    data.map((item) => (
        `
        <div class="border rounded-2xl">
        <div class="relative select-none rounded-t-2xl overflow-hidden h-[300px] md:h-[250px] lg:h-[220px] xl:h-[296px]">
            <img class="w-full h-full" src="${item.image}" alt="">
            <div onclick="handleAddFavorite(${item.id})" class="absolute top-5 right-5 cursor-pointer hover:scale-75 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="8" fill="${liked.includes(item.id) ? 'orange' : 'white'}"/>
                    <path d="M27.9999 40.7614L16.6866 29.4481C15.1861 27.9478 14.3431 25.913 14.343 23.7912C14.3429 21.6694 15.1856 19.6345 16.6859 18.1341C18.1861 16.6336 20.221 15.7907 22.3428 15.7905C24.4645 15.7904 26.4995 16.6332 27.9999 18.1334C29.501 16.6349 31.5355 15.7932 33.6566 15.7932C35.7777 15.7932 37.8121 16.6349 39.3132 18.1334C40.8111 19.6349 41.6523 21.6692 41.6523 23.7901C41.6523 25.9109 40.8111 27.9452 39.3132 29.4467L27.9999 40.7614ZM22.3426 18.4574C21.2876 18.4574 20.2564 18.7702 19.3792 19.3563C18.5021 19.9424 17.8185 20.7755 17.4148 21.7502C17.0112 22.7248 16.9057 23.7973 17.1117 24.832C17.3176 25.8666 17.8258 26.8169 18.5719 27.5627L27.9999 36.9907L37.4279 27.5627C37.9694 27.0333 38.392 26.3946 38.6674 25.6891C38.9429 24.9836 39.0649 24.2276 39.0255 23.4713C38.986 22.715 38.7859 21.9757 38.4385 21.3028C38.0911 20.6298 37.6043 20.0386 37.0106 19.5684C36.4169 19.0982 35.7299 18.7598 34.9953 18.5758C34.2606 18.3917 33.4952 18.3663 32.75 18.5011C32.0047 18.6359 31.2967 18.9279 30.6731 19.3577C30.0495 19.7874 29.5246 20.345 29.1332 20.9934L27.9999 22.8227L26.8666 20.9934C26.3987 20.2134 25.7351 19.5693 24.9415 19.125C24.148 18.6806 23.252 18.4514 22.3426 18.4601V18.4574Z" fill="#CCCCCC"/>
                </svg>
            </div>
        </div>
        <div class="p-3">
            <h3 class="md:text-xl font-medium">${item.name}</h3>
            <div class="mt-2">
                <del class="text-gray-500">$${item.oldPrice}</del>
                <span class="text-orange font-bold text-2xl ms-2">$${item.newPrice}</span>
                <p class="my-2 text-gray-500">البائع : <span class="text-[#06B6D4] font-semibold">${item.vendor}</span></p>
                <div class="flex items-center">
                    <p>${item.rate}</p>
                    <img class="w-5 h-5 mx-2" src="./images/starCard.svg" alt="">
                    <span class="text-sm text-gray-600">( ${item.views} Reviews )</span>
                </div>
            </div>
        </div>
    </div>
        `
    )).join(" ")
)

drawingProducts()

