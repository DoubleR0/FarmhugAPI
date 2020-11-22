import pkg from 'apollo-server';
const { gql } = pkg;

export default gql`

type DateTime{
  day: String
  a_date: Int
  month: String
  a_month: Int
  a_year: Int
  hours: Int
  minutes: Int
  seconds: Int
}

enum Role{
  owner
  employee
}

enum Status{
  process
  finish
  delete
}

type Farm{
  _id: ID
  name :String
  address :String
  description: String
  distance: Float
  imageURL :String
  area :String
  type :String
  location :String
  capacity :Int
  cow :Int
  createdAt :DateTime
  watercheck :Int
  foodConsume :Int
  employee :Int
}

type User{
  _id: ID
  firstname : String
  lastname : String
  line_account :String
  username :String
  email :String
  password :String
  imageURL :String
  type :String
  role :Role
  farm_id :ID
}

type Authentication{
  _id: ID
  access_token: String
  refresh_token: String
}

type Cowproperty{
  _id: ID
  name :String
  type :String
  stall :Int
  gene :String
  weight :Float
  height :Float
  farm_id :ID
  stall_id :ID
  breed :String
  dob :String
  sex :String
  imageUrl :String
}

type Activity{
  _id: ID
  name :String
  farm_id :ID
  cage_id :ID
  stall_id :ID
  type :String
  detail  :String
  alertDate :DateTime
  updatedAt  :DateTime
  status  :Status
  creater_id  :ID
}
type Stall{
  _id: ID
  name :String
  currentAnimal  :Int
  maximumAnimal :Int
  farm_id :ID
  food   :Int
  water   :Int
  manure   :Int
  updatedAt   :DateTime
  area :String
}

input UserInput{
  firstname : String
  lastname : String
  line_account :String
  username :String
  email :String
  password :String
  imageURL :String
  role_of_farm :String
  role_of_user :String
}

input CowpropertyInput{
  type :String
  stall :Int
  gene :String
  birth :DateTimeInput
  weight :Float
  height :Float
}

input FarmInput{
  name :String
  place :String
  imageURL :String
  type_of_farm :String
  capacity :Int
  cow :Int
}

input AuthenticationInput{
  access_token: String
  refresh_token: String
}

input ActivityInput{
  name :String
  detail  :String
  time  :DateTimeInput
  about  :String
  farmer  :Int
}

input StallInput{
  cow  :Int
  food   :Boolean
  water   :Boolean
  manure   :Boolean
  time_update   :DateTimeInput
}

input DateTimeInput{
  day: String
  a_date: Int
  month: String
  a_month: Int
  year: String
  a_year: Int
  hours: Int
  minutes: Int
  seconds: Int
}

type Query {
  users: [User]!
  authentications: [Authentication]!
  farms: [Farm]!
  cowpropertys: [Cowproperty]!
  activitys: [Activity]!
  stalls: [Stall]!
}

type Mutation {
  user(_id: ID!): User
  createUser(input: UserInput): User
  updateUser(_id: ID!, input: UserInput): User
  deleteUser(_id: ID!): User
  createAuthentication(input: AuthenticationInput): Authentication
  updateAuthentication(_id: ID!, input: AuthenticationInput): Authentication
  deleteAuthentication(_id: ID!): Authentication
  createFarm(input: FarmInput): Farm
  updateFarm(_id: ID!, input: FarmInput): Farm
  deleteFarm(_id: ID!): Farm
  createCowproperty(input: CowpropertyInput): Cowproperty
  updateCowproperty(_id: ID!, input: CowpropertyInput): Cowproperty
  deleteCowproperty(_id: ID!): Cowproperty
  createActivity(input: ActivityInput): Activity
  updateActivity(_id: ID!, input: ActivityInput): Activity
  deleteActivity(_id: ID!): Activity
  createStall(input: StallInput): Stall
  updateStall(_id: ID!, input: StallInput): Stall
  deleteStall(_id: ID!): Stall
}

`;