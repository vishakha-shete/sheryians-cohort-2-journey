# day 150 
- we have to create one feature in this class the feature is like variants creation and buyer can see that variants in todays class we are creating a api which creates a variants in any type of products so lets see this in todays class 

- in this i have to create one page called seller product details in which the seller product details shown in this page 

create the sellerProduc on this page seller can create the product variant and  see the product variants can manage the stock of each product variant  consider the ui design using google stitch we allready have an project name SNITCH-e-commerce on snitch

the data of the product look like 
{price: {…}, _id: '69eb9ebe2ee2730fd2d2c4ce', title: 't-shirt', description: 'high quality branded t-shirt', seller: '69e60e09993f4a78a5067d8c', …}
createdAt
: 
"2026-04-24T16:47:58.756Z"
description
: 
"high quality branded t-shirt"
images
: 
(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
price
: 
{amount: 1000, currency: 'INR'}
seller
: 
"69e60e09993f4a78a5067d8c"
title
: 
"t-shirt"
updatedAt
: 
"2026-04-24T16:47:58.756Z"
variants
: 
[]
__v
: 
0
_id
: 
"69eb9ebe2ee2730fd2d2c4ce"
[[Prototype]]
: 
Object

and product variant look like this :
 {
        images: [
            {
                url:{
                    type: String,
                    required: true
                }
            }
        ],
        stoks: {
            type: Number,
            default: 0
        },
        attributes:{
            type: Map,
            of: String
        },
        price:{
            amount:{
                type: Number,
                required: true
            },
            currency:{
                type: String,
                enum:['USD', 'EUR', 'GBP', 'JPY', 'INR'],
                default: 'INR'
            }
        }






now add the feature where user can select from the variant of the product and there will be multiple attributes for the single variants the value that not available in variant use the main product value instead  

- the product  data look like this 
{
  "title": "t-shirt",
  "description": "high quality branded t-shirt",
  "seller": {
    "$oid": "69e60e09993f4a78a5067d8c"
  },
  "price": {
    "amount": 1000,
    "currency": "INR"
  },
  "images": [
    {
      "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_44_08_PM_GLWzAwsl3.png",
      "_id": {
        "$oid": "69eb9ebe2ee2730fd2d2c4cf"
      }
    },
    {
      "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_45_00_PM_h-GIGgXqy.png",
      "_id": {
        "$oid": "69eb9ebe2ee2730fd2d2c4d0"
      }
    },
    {
      "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_46_05_PM_4W_WLfZ9y.png",
      "_id": {
        "$oid": "69eb9ebe2ee2730fd2d2c4d1"
      }
    },
    {
      "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_51_43_PM_rIu353v4v.png",
      "_id": {
        "$oid": "69eb9ebe2ee2730fd2d2c4d2"
      }
    },
    {
      "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_53_56_PM_QW2LZHq9n.png",
      "_id": {
        "$oid": "69eb9ebe2ee2730fd2d2c4d3"
      }
    },
    {
      "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_44_08_PM_pzn8jDdC7.png",
      "_id": {
        "$oid": "69eb9ebe2ee2730fd2d2c4d4"
      }
    },
    {
      "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_45_00_PM_J0O_8UXs_.png",
      "_id": {
        "$oid": "69eb9ebe2ee2730fd2d2c4d5"
      }
    }
  ],
  "createdAt": {
    "$date": "2026-04-24T16:47:58.756Z"
  },
  "updatedAt": {
    "$date": "2026-04-25T13:13:05.347Z"
  },
  "__v": 4,
  "variants": [
    {
      "images": [
        {
          "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_51_43_PM__rXxfVqyS.png",
          "_id": {
            "$oid": "69ecbd70fe19b61427de9837"
          }
        }
      ],
      "stoks": 29,
      "attributes": {
        "color": "red"
      },
      "price": {
        "amount": 34,
        "currency": "INR"
      },
      "_id": {
        "$oid": "69ecbd70fe19b61427de9836"
      }
    },
    {
      "images": [
        {
          "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_32_44_PM_VR6IIzQkC_.png",
          "_id": {
            "$oid": "69ecbd99fe19b61427de9842"
          }
        },
        {
          "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_44_08_PM_dLai09zuk.png",
          "_id": {
            "$oid": "69ecbd99fe19b61427de9843"
          }
        },
        {
          "url": "https://ik.imagekit.io/sjfknnad0/snitch-e-commerce/Classroom_sheryians_-_Google_Chrome_4_24_2026_8_51_43_PM_y0vJ5rgTE.png",
          "_id": {
            "$oid": "69ecbd99fe19b61427de9844"
          }
        }
      ],
      "stoks": 22,
      "attributes": {
        "color": "red"
      },
      "price": {
        "amount": 23,
        "currency": "INR"
      },
      "_id": {
        "$oid": "69ecbd99fe19b61427de9841"
      }
    }
  ]
}