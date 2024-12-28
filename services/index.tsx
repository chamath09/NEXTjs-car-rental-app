import request, { gql } from "graphql-request";

const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/cm560k0wa031d07w37scndmtr/master"

export const getCarsList = async () => {
  const query = gql`
    query CarList {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;

  const result = await request(
    MASTER_URL,
    query
  );
  return result;
};

export const getStoreLocations=async()=>{
  const query=gql`
  query storeLocation{
  storesLocations{
    address
  }
}
  `

  const result =await request(MASTER_URL,query)
  return result;
}
