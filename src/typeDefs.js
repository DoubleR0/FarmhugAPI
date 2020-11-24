import pkg from 'apollo-server';
const { gql, useMutation } = pkg;

export default gql`

enum Role{
  owner
  employee
  none
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
  createdAt :String
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
  isProfile: Boolean
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
  animal_id :ID
  stall_id :ID
  type :String
  detail  :String
  alertDate :String
  updatedAt  :String
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
  updatedAt   :String
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
  type :String
  role :RoleInput
  farm_id :ID
  isProfile: Boolean
}

input CowpropertyInput{
  name :String
  type :String
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

input FarmInput{
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
  createdAt :String
  watercheck :Int
  foodConsume :Int
  employee :Int
}

input AuthenticationInput{
  access_token: String
  refresh_token: String
}

input ActivityInput{
  name :String
  farm_id :ID
  animal_id :ID
  stall_id :ID
  type :String
  detail  :String
  alertDate :String
  updatedAt  :String
  status  :StatusInput
  creater_id  :ID
}

input StallInput{
  name :String
  currentAnimal  :Int
  maximumAnimal :Int
  farm_id :ID
  food   :Int
  water   :Int
  manure   :Int
  updatedAt   :String
  area :String
}

enum RoleInput{
  owner
  employee
  none
}

enum StatusInput{
  process
  finish
  delete
}

type Query {
  users: [User]!
  authentications: [Authentication]!
  farms: [Farm]!
  cowpropertys: [Cowproperty]!
  activitys: [Activity]!
  stalls: [Stall]!
  user(_id: ID!): User
  authentication(_id: ID!): Authentication
  farm(_id: ID!): Farm
  cowproperty(_id: ID!): [Cowproperty]!
  activity(_id: ID!): [Activity]!
  stall(_id: ID!): [Stall]!
}

type Mutation {
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