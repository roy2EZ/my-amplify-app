/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoin = /* GraphQL */ `
  mutation CreateCoin(
    $input: CreateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    createCoin(input: $input, condition: $condition) {
      id
      clientId
      name
      symbol
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateCoin = /* GraphQL */ `
  mutation UpdateCoin(
    $input: UpdateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    updateCoin(input: $input, condition: $condition) {
      id
      clientId
      name
      symbol
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoin = /* GraphQL */ `
  mutation DeleteCoin(
    $input: DeleteCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    deleteCoin(input: $input, condition: $condition) {
      id
      clientId
      name
      symbol
      price
      createdAt
      updatedAt
    }
  }
`;
