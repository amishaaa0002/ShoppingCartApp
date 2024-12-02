

const productsArray =[

    {
        id:1,
        title:"Banana",
        price:45,
        image:"https://tse2.mm.bing.net/th?id=OIP.Py2rL0Dhn2rGGn_cOlW2XQHaEK&pid=Api&P=0&h=180"
    },
    
    {
        id:2,
        title:"Coffee",
        price:49,
        image:"https://tse4.mm.bing.net/th?id=OIP.sxphRAolK5Q42_BPVPpH7AHaE8&pid=Api&P=0&h=180"
    },
    {
        id:3,
        title:"Apple",
        price:45,
        image:"https://tse3.mm.bing.net/th?id=OIP.-gIOAOj6Lq-sgbQfVh_C2gHaF7&pid=Api&P=0&h=180"
    },
    {
        id:4,
        title:"Mausambi",
        price:45,
        image:"https://tse2.mm.bing.net/th?id=OIP.KnjTjJBt59cc8tJUzmWzVQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:5,
        title:"Rice",
        price:45,
        image:"https://tse3.mm.bing.net/th?id=OIP.ZhA7TS461wevxL5BOCLibAHaEK&pid=Api&P=0&h=180"
    },
    
];

function getProductById(id){

    let productData = productsArray.find(product => product.id === id);

    if(productData == undefined){
        console.log("product is not present with id :" + id);
    }

    return productData;
}

export {productsArray, getProductById};