import ProductGrid from "@/components/ProductGrid";

const products = [
    {
        "id": 11,
        "name": "10 Lives",
        "description": "10 Lives product bundle.",
        "price": 1.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 10,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/74e517a3-0615-4019-bb08-cc697cf4e747.png",
        "status": "ACTIVE"
    },
    {
        "id": 19,
        "name": "25 Lives",
        "description": "25 Lives product bundle.",
        "price": 2.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 25,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/0a90f406-7340-4957-87ae-a8233d8c9f68.png",
        "status": "ACTIVE"
    },
    {
        "id": 20,
        "name": "50 Lives",
        "description": "50 Lives product bundle.",
        "price": 2.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 50,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/a3fc8953-ba5b-4fb4-9017-223557716594.png",
        "status": "ACTIVE"
    },
    {
        "id": 21,
        "name": "125 Lives",
        "description": "125 Lives product bundle.",
        "price": 5.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 125,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/ce328218-93b2-4548-ba25-71a49c0b7af3.png",
        "status": "ACTIVE"
    },
    {
        "id": 22,
        "name": "500 Lives",
        "description": "500 Lives product bundle.",
        "price": 10.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 500,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/c3593c7e-da28-4013-87eb-d06582f60bc1.png",
        "status": "ACTIVE"
    },
    {
        "id": 1,
        "name": "150 Credits",
        "description": "150 Credits product bundle.",
        "price": 1.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 150,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/90f9f165-a35c-4fd2-a1b8-5eae6dc0abb4.png",
        "status": "ACTIVE"
    },
    {
        "id": 2,
        "name": "250 Credits",
        "description": "250 Credits product bundle.",
        "price": 2.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 250,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/8aec9ebd-adce-4435-976a-2ffe44ce621c.png",
        "status": "ACTIVE"
    },
    {
        "id": 4,
        "name": "1250 Credits",
        "description": "1250 Credits product bundle.",
        "price": 5.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 1250,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/13daef82-d896-4b29-90e9-30cbcb517e24.png",
        "status": "ACTIVE"
    },
    {
        "id": 5,
        "name": "5000 Credits",
        "description": "5000 Credits product bundle.",
        "price": 20.00,
        "currencyCode": "USD",
        "currencySymbol": "$",
        "quantity": 5000,
        "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/6b4cf068-0be3-4b9e-b741-525d46eec004.png",
        "status": "ACTIVE"
    }
]

export default function HomePage() {
    return (
        <>
            <ProductGrid products={products} />
        </>
    );
}
