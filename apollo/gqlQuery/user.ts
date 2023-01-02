import { gql, useSubscription } from "@apollo/client";

const ALL_USERS = gql`
  query allUser {
    allUser {
      id
      userId
      userPw
      name
      authority
      post
    }
  }
`;
const ALL_POSTS = gql`
  query allPost {
    allPost {
      id
      title
      writer
      content
    }
  }
`;

const GET_USER = gql`
  query getUser($userId: String!) {
    getUser(userId: $userId) {
      id
      userId
      name
      authority
      post
    }
  }
`;

const ADD_USER = gql`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

const ADD_POST = gql`
  mutation createUser($input: PostInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($input: UserUpdateInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

const UPDATE_POST = gql`
  mutation updateUser($input: PostUpdateInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

const DELETE_USERS = gql`
  mutation deleteUsers($userIds: [String!]!) {
    deleteUsers(userIds: $userIds) {
      id
    }
  }
`;

const DELETE_POSTS = gql`
  mutation deleteUsers($userIds: [String!]!) {
    deleteUsers(userIds: $userIds) {
      id
    }
  }
`;

export {
  ALL_USERS,
  ADD_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USERS,
  ALL_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POSTS,
};
