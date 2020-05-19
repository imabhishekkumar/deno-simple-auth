import userCollection from "../db/mongo.ts";
export const login = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (request.hasBody) {
    const body = await request.body();
    const email = body.email;
    const password = body.password;
    const value = await userCollection.findOne({ email, password });
    response.body = { value };
  }
};

export const register = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (request.hasBody) {
    const body = await request.body();
    const email = body.value.email;
    const fullName = body.value.fullName;
    const password = body.value.password;
    const result = await userCollection.insertOne({
      email,
      fullName,
      password
    });
    if (result) {
      response.body = { message: "User created with uid " + result.$oid };
    }
  }
};
