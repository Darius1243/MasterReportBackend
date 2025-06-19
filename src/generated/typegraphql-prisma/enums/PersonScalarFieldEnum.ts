import * as TypeGraphQL from "type-graphql";

export enum PersonScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name"
}
TypeGraphQL.registerEnumType(PersonScalarFieldEnum, {
  name: "PersonScalarFieldEnum",
  description: undefined,
});
