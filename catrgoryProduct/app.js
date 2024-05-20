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
        name: "Overflow.id - تي شيرت أسود عادي أساسي",
        price: 699,
        rate: 5.0,
    },
    {
        id:2,
        image: "https://www.designboom.com/twitterimages/uploads/2022/05/delorean-alpha5-ev-designboom-fb.jpg",
        name: "Overflow.id - تي شيرت أسود عادي أساسي",
        price: 699,
        rate: 5.0,
    },
    {
        id:3,
        image: "https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph",
        name: "Overflow.id - تي شيرت أسود عادي أساسي",
        price: 699,
        rate: 5.0,
    },
    {
        id:4,
        image: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        name: "Overflow.id - تي شيرت أسود عادي أساسي",
        price: 699,
        rate: 5.0,
    },
    {
        id:5,
        image: "https://www.designboom.com/twitterimages/uploads/2022/05/delorean-alpha5-ev-designboom-fb.jpg",
        name: "Overflow.id - تي شيرت أسود عادي أساسي",
        price: 699,
        rate: 5.0,
    },
    {
        id:6,
        image: "https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph",
        name: "Overflow.id - تي شيرت أسود عادي أساسي",
        price: 699,
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

const drawingProducts = () => productsDom.innerHTML = (
    data.map((item) => (
        `
        <div class="border rounded-2xl group">
        <div class="relative rounded-t-2xl overflow-hidden h-[300px] md:h-[250px] lg:h-[220px] ">
            <img class="w-full h-full" src="${item.image}" alt="">
        </div>
        <div class="p-3">
            <div class="flex justify-between items-center">
                <p class="font-semibold">$${item.price}</p>
                <div class="flex items-center">
                    <p>${item.rate}</p>
                    <img class="w-5 h-5 mx-2" src="./images/starCard.svg" alt="">
                </div>
            </div>
            <h3 class="my-3 text-sm">${item.name}</h3>
        
            <button class="bg-orange w-full flex justify-between mt-5 items-center py-2 px-3 text-white font-semibold rounded-xl group-hover:opacity-100 opacity-0 hover:opacity-70">
                اضافة للعربة 
                <svg width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 2H4.24001C5.32001 2 6.17 2.93 6.08 4L5.25 13.96C5.11 15.59 6.39999 16.99 8.03999 16.99H18.69C20.13 16.99 21.39 15.81 21.5 14.38L22.04 6.88C22.16 5.22 20.9 3.87 19.23 3.87H6.32001" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M16.75 22C17.4404 22 18 21.4404 18 20.75C18 20.0596 17.4404 19.5 16.75 19.5C16.0596 19.5 15.5 20.0596 15.5 20.75C15.5 21.4404 16.0596 22 16.75 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M8.75 22C9.44036 22 10 21.4404 10 20.75C10 20.0596 9.44036 19.5 8.75 19.5C8.05964 19.5 7.5 20.0596 7.5 20.75C7.5 21.4404 8.05964 22 8.75 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M9.5 8H21.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
            </button>
        </div>
    </div>
        `
    )).join(" ")
)

drawingProducts()

