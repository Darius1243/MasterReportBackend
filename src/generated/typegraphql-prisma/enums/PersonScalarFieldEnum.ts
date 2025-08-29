import * as TypeGraphQL from "type-graphql";

export enum PersonScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email"
}
TypeGraphQL.registerEnumType(PersonScalarFieldEnum, {
  name: "PersonScalarFieldEnum",
  description: undefined,
});
