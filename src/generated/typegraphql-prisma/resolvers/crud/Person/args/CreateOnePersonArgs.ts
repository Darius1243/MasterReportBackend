import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonUncheckedCreateInput } from "../../../inputs/PersonUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePersonArgs {
  @TypeGraphQL.Field(_type => PersonUncheckedCreateInput, {
    nullable: false
  })
  data!: PersonUncheckedCreateInput;
}
