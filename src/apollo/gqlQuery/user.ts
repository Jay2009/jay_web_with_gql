import { gql, useSubscription } from "@apollo/client";

const SIGNUP = gql`
  mutation signup($userId: String!, $userPw: String!, $name: String!) {
    signup(userId: $userId, userPw: $userPw, name: $name)
  }
`;

const SINGLE_USER = gql`
  query singleUser($userId: String!) {
    singleUser(userId: $userId) {
      id
      userId
      name
      authority
    }
  }
`;

const LOGIN = gql`
  mutation login($userId: String!, $userPw: String!) {
    login(userId: $userId, userPw: $userPw) {
      userId
      name
      authority
      token
    }
  }
`;
const LOGOUT = gql`
  mutation {
    logout
  }
`;

const ALL_USERS = gql`
  query allUser {
    allUser {
      id
      userId
      userPw
      name
      authority
      post {
        title
        writer
      }
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
      createdAt
      tags
    }
  }
`;

const ADD_USER = gql`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      id
      writer
      tags
    }
  }
`;

const ADD_POST = gql`
  mutation createPost($input: PostInput!) {
    createPost(input: $input) {
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
  mutation updatePost($input: PostUpdateInput!) {
    updatePost(input: $input) {
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

const DELETE_POST = gql`
  mutation deletePost($input: String!) {
    deletePost(input: $input) {
      id
    }
  }
`;

export {
  SIGNUP,
  ALL_USERS,
  LOGIN,
  LOGOUT,
  SINGLE_USER,
  ADD_USER,
  UPDATE_USER,
  DELETE_USERS,
  ALL_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
};
